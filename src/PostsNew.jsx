import { useState } from "react";
export function PostsNew({ onCreate, errors, status }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Post</h1>
      <ul>
        {status ? <img src={`https://http.cat/${status}`} alt={status} /> : null}
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Title:{" "}
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value.slice(0, 20))}
            name="title"
            type="text"
            className="form-control"
          />
          <small>{20 - title.length} characters remaining</small>
        </div>
        <div>
          Image: <input name="image" type="text" className="form-control" />
        </div>
        <div>
          Body: <input name="body" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Create
        </button>
      </form>
    </div>
  );
}
