import { BsBookmarks } from "react-icons/bs";
import useSWR from "swr";
import NoticeBoard from "../../NoticeBoard/NoticeBoard";
import SingleFeatured from "./SingleFeatured";
const fetcher = (...args) => fetch(...args).then((res) => res.json())


const Featured = () => {


  const { data:featured, error } = useSWR(`${process.env.NEXT_PUBLIC_API_PRO}/api/featured`, fetcher)
  if (error) return <div>Failed to load</div>


  return (
    <section className="w-full md:flex justify-between">
      <div className="md:w-2/3  md:p-3 p-1">
        <div className="border-orange-500 bg-orange-400 w-full border-b my-2 px-4 py-1 flex items-center gap-2 text-white font-bold">
          <BsBookmarks /> <h2 className="text-base">Featured</h2>
        </div>
        {!featured ? (
          <div className="bg-base-200 w-full flex flex-row-reverse overflow-hidden  shadow-lg animate-pulse">
            <div className="block md:w-44 w-28 bg-base-300 flex-none bg-cover md:h-44 h-24 object-cover animate-pulse"></div>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r md:p-4 p-1 flex flex-col justify-between leading-normal w-full"></div>
          </div>
        ) : (
          featured?.length && featured.map((post) => <SingleFeatured post={post} key={post.id} />)
        )}
      </div>
      <div className="md:w-1/3 md:p-3 p-1 max-h-56 notice overflow-y-auto mt-2">
          <NoticeBoard />
      
      </div>
    </section>
  );
};

export default Featured;
