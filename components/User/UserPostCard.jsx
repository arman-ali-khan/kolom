import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoWarning } from 'react-icons/io5';
import { UserContext } from '../../context/ContextProvider';
import BlogCard from '../Shared/BlogCard/BlogCard';

const UserPostCard = ({ post, updatePost, setUpdatePost }) => {
  // router
  const router = useRouter();
  // user
  const { user, logOut } = useContext(UserContext);

  // aprove handle
  const handlePublish = (e) => {
    axios.put(`${process.env.NEXT_PUBLIC_API_PRO}/api/posts/update/${post.id}`, e, {
      headers: {
        authorization: `basic ${Cookies.get('token')}`,
        email: post.email
      }
    })
      .then(res => {
        setUpdatePost(!updatePost);
        toast.success('Updated');
      });
  };

  // aprove handle
  const handleDraft = (e) => {
    axios.put(`${process.env.NEXT_PUBLIC_API_PRO}/api/posts/update/${post.id}`, e, {
      headers: {
        authorization: `basic ${Cookies.get('token')}`,
        email: post.email
      }
    })
      .then(res => {
        setUpdatePost(!updatePost);
        toast.success('Updated');
      });
  };

  // handle delete
  const [deleteId, setDeleteId] = useState();
  // email verify
  const [inputEmail, setInputEmail] = useState('');
  // delete btn
  const [deleteBtn, setDeleteBtn] = useState('Delete');

  // confirm delete 
  const handleDelete = (id) => {
    setDeleteBtn('Deleting...');
    axios.delete(`${process.env.NEXT_PUBLIC_API_PRO}/api/posts/${id}`, {
      headers: {
        authorization: `Basic ${Cookies.get('token')}`,
        email: user?.email
      }
    })
      .then(res => {
        setDeleteBtn('Deleted');
        setUpdatePost(!updatePost);
      })
      .catch(err => {
        if (err?.response?.status === 401) {
          logOut().then(() => {
            router.push(`/start/login`);
          });
        }
      });
  };

  return (
    <div className="mt-1 border-t">
      <div className="flex flex-wrap w-full justify-center">
        <div className="w-full">
          {/* Blog Card */}
          <div className="relative">
            <BlogCard post={post} variant="horizontal" showAuthor={false} />
            
            {/* Status Badge */}
            {post.email === user?.email && (
              <div className="absolute top-2 right-2">
                <span className="bg-white/90 backdrop-blur-sm border text-sm px-3 py-1 text-info rounded-full shadow-sm">
                  {post?.publish ? '' : 'Draft'} {post?.publish ? (post?.aproved ? 'Approved' : 'Pending') : ''}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {post.email === user?.email && (
            <div className="flex text-sm gap-3 p-4 bg-gray-50 border-t">
              {post?.publish === 0 ? (
                <button 
                  onClick={() => handlePublish({ publish: 1 })} 
                  className="px-3 py-1 border rounded-full font-bold text-success hover:bg-green-50"
                >
                  Publish
                </button>
              ) : (
                <button 
                  onClick={() => handleDraft({ publish: 0 })} 
                  className="px-3 py-1 border rounded-full font-bold text-warning hover:bg-yellow-50"
                >
                  Unpublish
                </button>
              )}
              
              <a 
                href={`/update/${post.id}`} 
                className="px-3 py-1 border rounded-full font-bold text-success hover:bg-green-50 inline-block"
              >
                Update
              </a>
              
              <button 
                onClick={() => setDeleteId(post.id)} 
                className="px-3 py-1 border rounded-full font-bold text-error hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed z-40 flex items-center justify-center top-0 left-0 h-screen w-full bg-black/50">
          <button 
            onClick={() => {
              setDeleteId();
              setInputEmail('');
            }} 
            className="fixed top-0 left-0 w-full h-screen"
          />
          
          <div className="sm:w-[450px] z-50 w-full sm:h-72 h-72 flex flex-col relative justify-center bg-base-100 shadow-xl rounded-md items-center border py-9">
            <div className="text-left px-2 bg-orange-400 rounded-md absolute top-0 h-12 items-center flex w-full">
              <h2 className="md:text-xl text-white truncate font-bold w-full">Delete {post.title}</h2>
            </div>
            
            <div className="mt-6">
              <div className="px-4 flex justify-center">
                <p className="text-error text-xs sm:text-lg flex items-center gap-1">
                  <IoWarning /> You can't restore this post after delete
                </p>
              </div>
              
              <div className="px-4 py-2 flex justify-center">
                <p className="text-xs sm:text-lg font-bold truncate">Are you sure want to delete this post?</p>
              </div>
              
              <div className="flex justify-center w-full">
                <div className="w-full">
                  <p className="flex items-center gap-2 pb-2 w-full px-2 text-xs sm:text-base">
                    Enter your email <span className="bg-base-300 flex items-center px-2">{user?.email}</span>
                  </p>
                  
                  <div className="flex items-center w-full">
                    <input 
                      autoComplete="off" 
                      onChange={(e) => setInputEmail(e.target.value)} 
                      placeholder="email" 
                      className={`px-3 w-full text-error border py-2 ${
                        inputEmail === user?.email 
                          ? 'border-success focus-visible:outline-success text-success' 
                          : 'border-error focus-visible:outline-error text-error'
                      }`} 
                      type="text" 
                      id="username" 
                    />
                    
                    <button 
                      disabled={inputEmail !== user?.email} 
                      onClick={() => handleDelete(deleteId)} 
                      className="px-4 py-2 disabled:bg-base-300 disabled:text-zinc-500 disabled:cursor-not-allowed border border-error bg-error hover:bg-opacity-80 duration-300 text-black"
                    >
                      {deleteBtn}
                    </button>
                  </div>
                  
                  <div 
                    onClick={() => {
                      setDeleteId();
                      setInputEmail('');
                    }} 
                    className="flex justify-center my-2"
                  >
                    <button className="px-4 py-2 w-full bg-orange-400 text-white flex justify-center text-center">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPostCard;