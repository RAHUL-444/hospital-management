import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../store/index";

import { useDispatch } from "react-redux";
import { login } from "../store";
const Home = () => {
  const dispath = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  const [defaultData, setDefaultData] = useState([
    {
      name: "",
      email: "",
      password: "",
      isloggedIN: false,
      blogs: [],
      _id: "",
    },
  ]);
  useEffect(() => {
    async function getUser() {
      console.log("USER Profile", user);
      const response = await axios.post(
        `http://localhost:5000/api/user/login`,
        {
          name: user.name,
          email: user.email,
          password: user.password,
        }
      );
      console.log("response.data", response.data);
      dispath(
        login({
          name: response.data.user.name,
          email: response.data.user.email,
          password: response.data.user.password,
          id: response.data.user._id,
          blogs: response.data.user.blogs,
        })
      );
      setDefaultData(response.data);
    }
    getUser();
    console.log("defaultData", defaultData);
  }, [dispath, user, defaultData, user.email, user.name, user.password]);
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
      </div>
    </>
  );
};

export default Home;
