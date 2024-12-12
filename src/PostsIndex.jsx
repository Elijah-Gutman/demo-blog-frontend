import { useState } from "react";
export function PostsIndex({ posts, onShow }) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All posts</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="titles" />
      <datalist id="titles">
        {posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
            <div key={post.id} className="col">
              <div className="card h-100">
                <img src={post.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-secondary float-end" onClick={() => onShow(post)}>
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
