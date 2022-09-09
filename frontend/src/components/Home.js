import React, { useEffect, useState } from "react";
import { selectUser } from "../store/index";
import Profile from "./profile/Profile";
import DoctorsBlogs from "./DoctorBlogs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { login } from "../store/index";
const Home = () => {
  const user = useSelector(selectUser);
  const dispath = useDispatch();
  useEffect(() => {
    async function getUser() {
      const response = await axios.post(
        `http://localhost:5000/api/user/login`,
        {
          email: user.email,
          password: user.password,
        }
      );
      getUser();
      dispath(
        login({
          lname: response.data.user.lname,
          fname: response.data.user.fname,
          email: response.data.user.email,
          password: response.data.user.password,
          date: response.data.user.date,
          gender: response.data.user.gender,
          type: response.data.user.type,
          blood: response.data.user.blood,
          id: response.data.user._id,
          blogs: response.data.user.blogs,
        })
      );
    }
    getUser();
  }, [
    dispath,
    user,
    user.email,
    user.lname,
    user.fname,
    user.password,
    user.gender,
    user.blogs,
    user.blood,
    user.type,
    user.id,
  ]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          zIndex: "50",
          // height: "150vh",
          fontWeight: "800",
          fontSize: "2.125rem",
          lineHeight: "1.235",
          letterSpacing: "0.00735em",
          color: "black"
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <Profile />
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <DoctorsBlogs />
        </div>
      </div>
    </>
  );
};

export default Home;
