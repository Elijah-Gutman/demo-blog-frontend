import { useNavigate } from "react-router-dom";

export function PostsEdit({ post, onUpdate, onDestroy, errors }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(post, params);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={post.title} name="title" type="text" className="form-control" />
        </div>
        <div>
          Image: <input defaultValue={post.image} name="image" type="text" className="form-control" />
        </div>
        <div>
          Body: <input defaultValue={post.body} name="body" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update
        </button>
        <button type="button" onClick={() => onDestroy(post)} className="btn btn-danger mt-4 ms-2 float-end">
          Destroy
        </button>
        <button type="button" onClick={() => navigate(`/posts/${post.id}`)} className="btn btn-secondary mt-4 ms-2">
          Cancel
        </button>
      </form>
    </div>
  );
}
