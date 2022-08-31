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
          // backgroundImage: `url(${process.env.PUBLIC_URL + "/img/home-1.jpg"})`,
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
            // height: "100vh",
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
            <div
              style={{
                backgroundColor: "yellow",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Hi! {user.fname} {user.lname} <br /> Welcome to HOSPITAL MANAGEMENT SYSTEM
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
