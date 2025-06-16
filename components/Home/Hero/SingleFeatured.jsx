import BlogCard from "../../Shared/BlogCard/BlogCard";

const SingleFeatured = ({ post }) => {
  return <BlogCard post={post} variant="featured" />;
};

export default SingleFeatured;