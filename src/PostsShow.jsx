import { useNavigate } from "react-router-dom";

export function PostsShow({ post }) {
  const navigate = useNavigate();

  return (
    <div className="w-50">
      <img src={post.image} className="w-100 rounded mb-4" />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="btn btn-secondary" onClick={() => navigate("/posts")}>
        Back to all posts
      </button>
      {post.owner ? (
        <button className="btn btn-primary m-2" onClick={() => navigate(`/posts/${post.id}/edit`)}>
          Edit
        </button>
      ) : null}
    </div>
  );
}
