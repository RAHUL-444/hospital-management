import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { useStyles } from "./utils";
import { useSelector } from "react-redux";
import {  selectUser } from "../store/index";
import {  Typography } from "@mui/material";
const UserBlogs = () => {
  const [user, setUser] = useState();
  const classes = useStyles();
  const userstore = useSelector(selectUser);
  const id = userstore.id
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/home-bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography
        className={classes.font}
        fontWeight={"bold"}
        padding={3}
        color="grey"
        variant="h2"
        textAlign={"center"}
      >
        <u>All Appointment</u>
      </Typography>{" "}
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        {user &&
          user.blogs &&
          user.blogs.map((blog, index) => (
            <Blog
              id={blog._id}
              key={index}
              isUser={true}
              title={blog.title}
              description={blog.description}
              userName={user.name}
              email={user.email}
              department={blog.department}
            />
          ))}
      </div>
    </div>
  );
};

export default UserBlogs;
