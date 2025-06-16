import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { UserContext } from '../../../context/ContextProvider';
import BlogCard from '../../Shared/BlogCard/BlogCard';

const AdminPostCard = ({ post, postUpdate, setPostUpdate }) => {
  // loading
  const [loading, setLoading] = useState(false);
  // user
  const { user } = useContext(UserContext);

  // aprove handle
  const handleAprove = (e) => {
    setLoading(true);
    axios.put(`${process.env.NEXT_PUBLIC_API_PRO}/api/admin/posts/${post.id}`, { ...e, postEmail: post?.email })
      .then(res => {
        setPostUpdate(!postUpdate);
        toast.success('Updated');
        setLoading(false);
      });
  };

  // aprove handle
  const handlePending = (e) => {
    setLoading(true);
    axios.put(`${process.env.NEXT_PUBLIC_API_PRO}/api/admin/posts/${post.id}`, { ...e, postEmail: post?.email })
      .then(res => {
        setPostUpdate(!postUpdate);
        toast.success('Updated');
        setLoading(false);
      });
  };

  // delete handle
  const handleDelete = (e) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_PRO}/api/posts/${post.id}`, {
      headers: {
        authorization: `Basic ${Cookies.get('token')}`,
        email: user?.email
      }
    })
      .then(res => {
        setPostUpdate(!postUpdate);
        toast.success('Deleted');
      }).catch(err => {
        if (err?.response?.status === 401) {
          logOut().then(() => {
            router.push(`/start/login`);
          });
        }
      });
  };

  // handle featured 
  const handleFeatured = (e) => {
    axios.put(`${process.env.NEXT_PUBLIC_API_PRO}/api/post/updatepost`, e)
      .then(res => {
        setPostUpdate(!postUpdate);
      });
  };

  return (
    <div className={`${post.featured === 1 && 'bg-orange-100'} relative`}>
      {/* Blog Card */}
      <BlogCard post={post} variant="horizontal" showAuthor={true} />
      
      {/* Featured Badge */}
      {post.featured === 1 && (
        <div className="absolute top-2 right-2">
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Admin Actions */}
      <div className="p-4 bg-gray-50 border-t">
        <ul className="flex justify-between items-center gap-2 flex-wrap">
          <li>
            {post.aproved === 0 ? (
              <button 
                onClick={() => handleAprove({ aproved: 1 })} 
                className="px-3 py-1 border rounded-full text-blue-400 hover:bg-blue-50"
              >
                {loading ? 'Loading...' : 'Pending'}
              </button>
            ) : (
              <button 
                onClick={() => handlePending({ aproved: 0 })} 
                className="px-3 py-1 border rounded-full flex items-center gap-2 text-purple-400 hover:bg-purple-50"
              >
                {loading ? 'Loading...' : (
                  <>
                    Approved <BiSolidCheckCircle />
                  </>
                )}
              </button>
            )}
          </li>
          
          <li>
            <button 
              onClick={() => handleDelete()} 
              className="px-3 py-1 border rounded-full text-error hover:bg-red-50"
            >
              Delete
            </button>
          </li>
          
          <li>
            {post?.featured !== 0 ? (
              <button 
                onClick={() => handleFeatured({ id: post.id, featured: 0 })} 
                className="px-3 py-1 border rounded-full text-info hover:bg-blue-50"
              >
                Featured
              </button>
            ) : (
              <button 
                onClick={() => handleFeatured({ id: post.id, featured: 1 })} 
                className="px-3 py-1 border rounded-full text-info hover:bg-blue-50"
              >
                Add Featured
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPostCard;