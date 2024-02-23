import { HiMenuAlt1 } from "react-icons/hi";
import useSWR from "swr";
import SingleCategory from "./SingleCategory";
const fetcher = (...args) => fetch(...args).then((res) => res.json())


const UserCategories = () => {

  const { data:categories, error } = useSWR(`${process.env.NEXT_PUBLIC_API_PRO}/api/categories`, fetcher)
  if (error) return <div>Failed to load</div>
  return (
    <>
      <div className="bg-base-100 overflow-y-auto h-full">
        <p className="border-orange-500 bg-orange-400 w-full border-b my-2 px-4 py-1 flex items-center gap-2 text-white font-bold"><HiMenuAlt1 /> Categories</p>
        <div className="">
          <ul className="mb-12">
            {!categories
              ? [...Array(30).keys()].map((item, i) => (
                  <div key={i} className="flex w-full mt-1">
                    <div className="w-full bg-base-300 animate-pulse h-8 border-b "></div>
                  </div>
                ))
              : categories.map((category) => (
                  <SingleCategory key={category.id} category={category} />
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserCategories;
