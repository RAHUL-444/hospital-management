import React, { useEffect, useState } from "react";
import { selectUser } from "../store/index";

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
          name: response.data.user.name,
          email: response.data.user.email,
          password: response.data.user.password,
          date: response.data.user.date,
          gender: response.data.user.gender,
          type: response.data.user.type,
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
    user.name,
    user.password,
    user.gender,
    user.blogs,
    user.type,
  ]);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/home-bg.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            zIndex: "50",
            height: "100vh",
            fontWeight: "800",
            fontSize: "2.125rem",
            lineHeight: "1.235",
            letterSpacing: "0.00735em",
            color: "black",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              zIndex: "50",
              height: "100vh",
              fontWeight: "800",
              fontSize: "2.125rem",
              lineHeight: "1.235",
              letterSpacing: "0.00735em",
              color: "black",
            }}
          >
            <div>
              Hi! "{user.name}" &nbsp; to &nbsp; HOSPITAL MANAGEMENT SYSTEM
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
