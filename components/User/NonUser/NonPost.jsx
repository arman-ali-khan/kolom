import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/ContextProvider";
import ProfileSection from "../ProfileSections/ProfileSection";

const NonPosts = ({ dbUser }) => {
  const user = dbUser[0];

  const { user: fUser, logOut } = useContext(UserContext);
  //  get user posts
  const [userPost, setUserPost] = useState({});
  // router
  const router = useRouter()
  //  post loading
  const [loading, setLoading] = useState(true);

  // post update
  const [updatePost, setUpdatePost] = useState(false);
  // expire token 
  const [expire,setExpire] = useState(false)
  // fetch user posts
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_PRO}/api/userpost?username=${user?.username}&limit=10&page=1`,
        )
        .then((res) => {
          if (res.data) {
            setUserPost(res.data);
            setLoading(false);
          }
        })
        .catch(err=>{
          console.error(err)
        })
    }
  }, [user?.username, updatePost]);

  // posts
  const posts = userPost?.posts;
  return (
    <div>
        <ProfileSection dbUser={dbUser} user={user} posts={posts} />
    </div>
  );
};

export default NonPosts;
