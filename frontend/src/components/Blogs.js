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
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            userName={blog.user.name}
            email={blog.email}
          />
        ))}
    </div>
  );
};

export default Blogs;
