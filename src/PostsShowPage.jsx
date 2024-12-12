import { useLoaderData } from "react-router-dom";

import { PostsShow } from "./PostsShow";

export function PostsShowPage() {
  const post = useLoaderData();

  return (
    <div>
      <PostsShow post={post} />
    </div>
  );
}
