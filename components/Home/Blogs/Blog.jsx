import BlogCard from "../../Shared/BlogCard/BlogCard";

const Blog = ({ post }) => {
  return <BlogCard post={post} variant="horizontal" />;
};

export default Blog;