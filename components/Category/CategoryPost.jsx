import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogCard from "../Shared/BlogCard/BlogCard";
import Categories from "../Home/Categories/Categories";

const CategoryPost = ({ blog, loading }) => {
  const router = useRouter();
  const categoryName = router.query.categoryId.split("-").join(" ");
  // error handling
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    mounted && (
      <div className="md:flex justify-between w-full">
        <div className="flex md:w-2/3 w-full flex-wrap flex-row justify-start">
          <div className="md:p-3 p-1 w-full">
            <div className="bg-base-200 w-full px-4 py-2">
              <h2 className="text-base flex items-center gap-2 capitalize">
                Archive by category '{categoryName}'
              </h2>
            </div>
            
            <div className="space-y-2">
              {loading ? (
                <>
                  {[...Array(3).keys()].map((item, i) => {
                    return (
                      <div key={i} className="bg-base-200 w-full flex flex-row overflow-hidden md:h-32 sm:h-24 shadow-lg animate-pulse">
                        <div className="block md:w-44 mr-1 w-12 sm:w-24 rounded-none border-2 md:border-4 border-blue-400 flex-none bg-cover md:h-40 h-12 sm:h-24 object-fill skeleton"></div>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r md:p-4 p-1 flex flex-col justify-between leading-normal w-full"></div>
                      </div>
                    );
                  })}
                </>
              ) : blog?.length ? (
                blog?.map((post) => <BlogCard key={post.id} post={post} variant="horizontal" />)
              ) : (
                <div className="text-center my-12">No Post Found</div>
              )}
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3 w-full md:p-3 p-1 h-full">
          <Categories />
        </div>
      </div>
    )
  );
};

export default CategoryPost;