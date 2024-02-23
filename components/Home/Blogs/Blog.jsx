// import axios from "axios";
// import moment from "moment";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { AiOutlineFieldTime } from "react-icons/ai";
// import { BiCommentDots } from "react-icons/bi";
// import { VscEye } from 'react-icons/vsc';

// const Blog = ({ post }) => {
//   const categories = JSON.parse(post?.categories);
//   // get comment count 
// const [count,setCount] = useState('')
// useEffect(()=>{
//   axios.get(`${process.env.NEXT_PUBLIC_API_PRO}/api/comments?id=${post.id}`)
//   .then(res=>{
//     setCount(res.data)
//   })
// },[])
// const view = JSON.stringify(post?.view)
// // console.log(post,'post?.post')
//   return (
//     <div
//       className={`flex w-full py-1 flex-row md:h-max min-h-full max-w-full min-w-full h-max bg-base-100 sm:h-fit shadow-lg`}
//     >
//      <Image
//           className="block md:w-44 mr-1 w-16 sm:w-24 border-2 md:border-4 border-blue-400 flex-none bg-cover md:h-40 h-16 sm:h-24 object-fill"
//           src={post.featured_image}
//           width={176}
//           height={96}
//           alt={post?.email}
//         />
//       <div className="rounded-b lg:rounded-b-none lg:rounded-r md:px-2 flex flex-col justify-between w-full">
//         <div className="font-bold sm:text-base text-sm mb-2 truncate leading-tight">
//           <Link
//             className="hover:text-blue-400 min-w-24 truncate visited:text-purple-500 duration-300 text-blue-500"
//             href={`/blog/${post?.id}/${post.title.split(/[\s?=":/',]+/).join('-').toLowerCase()}`}
//           >
//             {post?.title}
//           </Link>
          
//         </div>
//         {/* Content */}
//         <div className="text-base hidden md:block leading-5">{post?.description?.split(' ').slice(0,44).join(' ')}...</div>
//         <div className="text-sm block md:hidden leading-5">{post?.description?.split(' ').slice(0,22).join(' ')}...</div>
//         <div>
//           <div className="flex justify-between gap-2 items-center w-full">
//           <Link href={`/category/${categories[0].value}`} className=' text-blue-400  lg:block w-full text-xs sm:text-sm md:text-base truncate'>{categories && categories[0].label}</Link>
//             <Link href={`/blog/${post.id}#comments`} className="w-full truncate flex items-center gap-2 text-xs sm:text-sm md:text-base">
//             <span className="w-5"> <BiCommentDots size={20} /></span> {count.count > 1000 ? `${count.count}k+` : (count.count || 0)}
//             </Link>
//             <p className="w-full text-xs sm:text-sm md:text-base truncate flex items-center gap-1 ">
//            <span className="w-5"> <AiOutlineFieldTime size={20} /></span> <span className="w-full">{moment(post?.createdAt).fromNow().split(' ').slice(0,2).join(' ')}</span>
//             </p>
//             <span className="w-full text-xs sm:text-sm md:text-base flex items-center gap-2">
//               <VscEye size={24} />{post.view > 1000 ? view?.split('').slice(0,1).join('') +`k+`:post.view}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
