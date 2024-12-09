import React from "react";

const Categorypage = async ({ params }) => {
  const { category } = await params;
  return <div>Categorypage :{category}</div>;
};

export default Categorypage;
