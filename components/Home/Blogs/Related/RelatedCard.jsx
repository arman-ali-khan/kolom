import BlogCard from "../../../Shared/BlogCard/BlogCard";

const RelatedCard = ({ post, blog }) => {
  return <BlogCard post={post} blog={blog} variant="compact" />;
};

export default RelatedCard;