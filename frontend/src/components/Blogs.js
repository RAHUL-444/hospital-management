import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, selectUser } from "../store/index";
const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest()
      .then((data) => setBlogs(data.blogs))
      .then(() =>
        dispatch(
          login({
            name: user.name,
            email: user.email,
            password: user.password,
            isloggedIN: true,
          })
        )
      );
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
            email={blog.email}
          />
        ))}
    </div>
  );
};

export default Blogs;
