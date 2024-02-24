import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/ContextProvider";
import ProfileSection from "./ProfileSections/ProfileSection";

const User = ({ dbUser }) => {
  const user = dbUser[0];
  const { user: fUser, logOut } = useContext(UserContext);
  
 
  //  get user posts
  const [userPost, setUserPost] = useState({});
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
    const count = Math.ceil((userPost?.count || 10 )/ 10)
 
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
  }, [user?.username, updatePost,currentPage]);

  // posts
  const posts = userPost?.posts;

  return (
    <div>
  
      {/* Profile */}
      <ProfileSection dbUser={dbUser} user={user} posts={posts} />
    </div>
  );
};

export default User;
