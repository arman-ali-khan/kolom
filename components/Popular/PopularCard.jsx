import BlogCard from "../Shared/BlogCard/BlogCard";

const PopularCard = ({ post }) => {
  return <BlogCard post={post} variant="horizontal" />;
};

export default PopularCard;