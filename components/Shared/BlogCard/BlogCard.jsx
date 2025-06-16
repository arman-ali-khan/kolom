import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { VscEye } from 'react-icons/vsc';

const BlogCard = ({ post, variant = "default", showAuthor = false, blog = null }) => {
  const categories = JSON.parse(post?.categories || '[]');
  
  // get comment count 
  const [count, setCount] = useState('');
  
  useEffect(() => {
    if (post?.id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/api/comments?id=${post.id}`)
        .then(res => {
          setCount(res.data);
        });
    }
  }, [post?.id]);

  const view = JSON.stringify(post?.view || 0);

  // Don't show the card if it's the same as the current blog (for related posts)
  if (blog && blog.id === post.id) {
    return null;
  }

  // Determine layout based on variant
  const isHorizontal = variant === "horizontal" || variant === "featured";
  const isCompact = variant === "compact";

  return (
    <div className={`
      flex w-full bg-base-100 shadow-lg border-b border-orange-400
      ${isHorizontal ? 'flex-row' : 'flex-col'}
      ${isCompact ? 'py-1' : 'py-2'}
      ${variant === "featured" ? 'flex-row-reverse' : ''}
      hover:shadow-xl transition-shadow duration-300
    `}>
      {/* Image */}
      <div className={`
        flex-none
        ${isHorizontal ? 'md:w-44 w-16 sm:w-24' : 'w-full'}
        ${isHorizontal ? 'md:h-40 h-16 sm:h-24' : 'h-48'}
      `}>
        <Image
          className={`
            border-2 md:border-4 border-blue-400 object-cover w-full h-full
            ${isHorizontal ? '' : 'rounded-t-lg'}
          `}
          src={post.featured_image}
          width={isHorizontal ? 176 : 400}
          height={isHorizontal ? 160 : 192}
          alt={post?.email || 'Blog post'}
        />
      </div>

      {/* Content */}
      <div className={`
        flex flex-col justify-between w-full
        ${isHorizontal ? 'md:p-4 p-2' : 'p-4'}
      `}>
        {/* Title */}
        <div className="mb-2">
          <Link
            className="hover:text-blue-400 visited:text-purple-500 duration-300 text-blue-500 font-bold leading-tight"
            href={`/blog/${post?.id}/${post.title.split(/[\s?=":/',]+/).join('-').toLowerCase()}`}
          >
            <h3 className={`
              ${isHorizontal ? 'sm:text-base text-sm' : 'text-lg'}
              line-clamp-2
            `}>
              {post?.title}
            </h3>
          </Link>
        </div>

        {/* Description */}
        {!isCompact && (
          <div className={`
            text-gray-600 mb-3 leading-5
            ${isHorizontal ? 'hidden md:block' : 'block'}
          `}>
            <p className="line-clamp-3">
              {post?.description?.split(' ').slice(0, isHorizontal ? 30 : 50).join(' ')}...
            </p>
          </div>
        )}

        {/* Author (if enabled) */}
        {showAuthor && post?.username && (
          <div className="mb-2">
            <Link 
              href={`/user/${post.username}`}
              className="text-sm text-blue-600 hover:underline"
            >
              By {post.username}
            </Link>
          </div>
        )}

        {/* Meta Information */}
        <div className="flex justify-between items-center gap-2 text-xs sm:text-sm">
          {/* Category */}
          <Link 
            href={`/category/${categories[0]?.value || ''}`} 
            className="text-blue-400 hover:underline truncate flex-1"
          >
            {categories[0]?.label || 'Uncategorized'}
          </Link>

          {/* Comments */}
          <Link 
            href={`/blog/${post.id}#comments`} 
            className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
          >
            <BiCommentDots size={16} />
            <span>{count.count > 1000 ? `${Math.floor(count.count/1000)}k+` : (count.count || 0)}</span>
          </Link>

          {/* Time */}
          <div className="flex items-center gap-1 text-gray-600">
            <AiOutlineFieldTime size={16} />
            <span>{moment(post?.createdAt || post?.date).fromNow().split(' ').slice(0, 2).join(' ')}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <VscEye size={16} />
            <span>{post.view > 1000 ? `${view?.split('').slice(0, 1).join('')}k+` : post.view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;