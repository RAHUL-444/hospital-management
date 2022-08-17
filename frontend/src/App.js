import Home from "./components/Home";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <>
    
        <Routes>
          {/* {isLoggedIn ? (
          
        ) : ( */}
          <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Home />} />
          <Route path="./" element={<Blogs />} />
          <Route path="/Appointment/Create-Appointment" element={<AddBlog />} />
          <Route path="/Appointments" element={<UserBlogs />} />
          <Route path="/Appointments/:id" element={<BlogDetail />} />{" "}
          <Route
            path={`${process.env.PUBLIC_URL + "/auth"}`}
            element={<Auth />}
          />
        </Routes>
      
    </>
  );
}

export default App;
