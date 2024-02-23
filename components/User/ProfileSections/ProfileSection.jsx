import Link from 'next/link';
import { useState } from 'react';
import { BiListUl, BiWifi } from 'react-icons/bi';
import { CiMenuBurger } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { GrEdit, GrShare } from 'react-icons/gr';
import { IoWarning } from 'react-icons/io5';
import Tab from './Tab';
function ProfileSection({posts,user,dbUser}) {
    const [openSettings, setOpenSettings] = useState(false);
    return (
       <section>
         <div className="bg-base-100 rounded-lg mb-5 pb-8 relative">
        <div className="absolute right-12 mt-4 rounded">
          <button
            onClick={() => setOpenSettings(!openSettings)}
            className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
            title="Settings"
            
          >
           <CiMenuBurger />

          </button>
          {openSettings && (
            <div
              onClick={() => setOpenSettings(false)}
              className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
            >
              <div className="py-2 border-b">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Settings
                </p>
                <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                  <GrShare />
                  <span className="text-sm text-gray-700">Share Profile</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <GrEdit />
                  <span className="text-sm text-gray-700">Edit Profile</span>
                </button>
                {/* <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  btn
                  <span className="text-sm text-gray-700">More Info</span>
                </button> */}
              </div>
              <div className="py-2">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Feedback
                </p>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <IoWarning />
                  <span className="text-sm text-gray-700">Report</span>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
       
          <img
            src={user?.photo || 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png'}
            className="w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">{user?.fullName}({user?.username})</p>
            <span
              className="bg-blue-500 rounded-full p-1"
              title="Verified"
            >
             {
              user?.type === 'author' || user?.type === 'admin' ?  <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M5 13l4 4L19 7"
                />
              </svg>:''
             }
            </span>
          </div>
          <p className="text-gray-700">{user?.work}</p>
          <p className="text-sm text-gray-500">{user?.education}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
           <BiListUl />
              <span>Posts</span>({posts?.length || 0})
            </button>
            <Link href={`/user/balance`} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <FaBangladeshiTakaSign />
              <span>Balance</span> ({user?.balance})
            </Link>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <BiWifi />
              <span>Follow</span>
            </button>
          </div>
        </div>
       
      </div>
      <Tab user={user} posts={posts} />
       </section>
    );
}

export default ProfileSection;