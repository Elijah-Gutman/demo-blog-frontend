import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostsNew } from "./PostsNew";

export function PostsNewPage() {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios
      .post("/posts.json", params)
      .then((response) => {
        console.log(response);
        navigate("/posts");
      })
      .catch((error) => {
        console.log(error.response);
        setStatus(error.response.status);
        if (error.response.status === 401) {
          navigate("/login");
        } else if (error.response.status === 422) {
          setErrors(error.response.data.errors);
        }
      });
  };

  return (
    <div>
      <PostsNew onCreate={handleCreate} errors={errors} status={status} />
    </div>
  );
}
