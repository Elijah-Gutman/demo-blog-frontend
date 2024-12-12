import { useLoaderData, useNavigate } from "react-router-dom";

import { PostsIndex } from "./PostsIndex";

export function PostsIndexPage() {
  const posts = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (post) => {
    console.log("handleShow", post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <PostsIndex posts={posts} onShow={handleShow} />
    </div>
  );
}
