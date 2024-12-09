import React from "react";

const BlogDetailspage = async ({ params }) => {
  const { id } = await params;
  return <div>BlogDetailspage:{id}</div>;
};

export default BlogDetailspage;
