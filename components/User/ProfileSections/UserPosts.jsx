import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/ContextProvider";
import Loader from "../../../lib/Loader";
import UserPostCard from "../UserPostCard";

function UserPosts({posts}) {
  // const {dbUser} = useContext(UserContext)
  // const user = dbUser[0];
  const { user: user, logOut } = useContext(UserContext);

  //  get user posts
  const [userPost, setUserPost] = useState({});
  // const posts = userPost?.posts;

  // router
  const router = useRouter();
  //  post loading
  const [loading, setLoading] = useState(true);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  // post update
  const [updatePost, setUpdatePost] = useState(false);
  // expire token
  const [expire, setExpire] = useState(false);

  // count
  const count = Math.ceil((userPost?.count || 10) / 10);

  // fetch user posts
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_PRO}/api/alluserpost?username=${user?.username}&limit=10&page=1`,
          {
            headers: {
              Authorization: `Basic ${Cookies.get("token")}`,
              email: user?.email,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            setUserPost(res.data);
            setLoading(false);
            console.log(res.data, "data");
          }
        })
        .catch((err) => {
          console.error(err);
          if (err.response.status === 401) {
            logOut().then(() => {
              router.push(`/start/login`);
            });
          }
        });
    }
  }, [user?.username, updatePost, currentPage]);
  return (
    <div>
      <div className="">
        <div className="border-orange-500 bg-orange-400 w-full border-b my-2 px-4 py-1 flex items-center gap-2 text-white font-bold">
          <p>
            Articles posted by {user?.username} ({posts?.length || 0})
          </p>
        </div>
        {loading ? (
          <>
            <div className="fixed top-0 left-0 w-screen h-screen z-[999] flex justify-center items-center backdrop-blur-3xl">
              <Loader />
            </div>
            {[...Array(5).keys()].map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-base-200 w-full flex flex-row overflow-hidden md:h-32 sm:h-24 shadow-lg animate-pulse"
                >
                  <div className="block md:w-44 my-1 w-28 bg-black flex-none bg-cover md:h-auto h-24 object-cover animate-pulse"></div>
                  <div className="rounded-b lg:rounded-b-none lg:rounded-r md:p-4 p-1 flex flex-col justify-between leading-normal w-full"></div>
                </div>
              );
            })}
          </>
        ) : posts?.length ? (
          posts.map((post) => (
            <UserPostCard
              updatePost={updatePost}
              setUpdatePost={setUpdatePost}
              key={post.id}
              post={post}
            />
          ))
        ) : (
          ""
        )}
      </div>
      {/* pagination */}
      {
        <div className="flex justify-center my-3 space-x-1 ">
          {userPost?.count > 10 &&
            [...Array(count).keys()].map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(item + 1)}
                type="button"
                title="Page 1"
                className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border hover:bg-blue-500  hover:text-base-200 duration-300 rounded shadow-md  border-blue-600 ${
                  item + 1 === currentPage
                    ? "bg-blue-500 text-black"
                    : "bg-base-200"
                }`}
              >
                {item + 1}
              </button>
            ))}
        </div>
      }
    </div>
  );
}

export default UserPosts;
