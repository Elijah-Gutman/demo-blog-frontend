import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { PostsEdit } from "./PostsEdit";

export function PostsEditPage() {
  const post = useLoaderData();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleUpdate = (post, params) => {
    console.log("handleUpdate", params);
    axios
      .patch(`/posts/${post.id}.json`, params)
      .then((response) => {
        console.log(response);
        navigate(`/posts/${post.id}`);
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 401) {
          navigate("/login");
        } else if (error.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      });
  };

  const handleDestroy = (post) => {
    console.log("handleDestroy", post);
    axios.delete(`/posts/${post.id}.json`).then((response) => {
      console.log(response);
      navigate(`/posts`);
    });
  };

  return (
    <div>
      <PostsEdit post={post} onUpdate={handleUpdate} onDestroy={handleDestroy} errors={errors} />
    </div>
  );
}
