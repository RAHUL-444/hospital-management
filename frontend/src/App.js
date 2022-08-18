import Home from "./components/Home";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Profile from "./components/Profile";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "./store";
import { login } from "./store/index";
function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectUser);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(login());
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Auth />} />
        <Route path={`${process.env.PUBLIC_URL + "/Home"}`} element={<Home />} />
        {/* <Route path="./" element={<Blogs />} /> */}
        <Route path="/Appointment/Create-Appointment" element={<AddBlog />} />
        <Route path="/Appointments" element={<UserBlogs />} />
        <Route path="/Appointments/:id" element={<BlogDetail />} />{" "}
        <Route path="/Profile" element={<Profile />} />{" "}
        <Route
          path={`${process.env.PUBLIC_URL + "/Authentication"}`}
          element={<Auth />}
        />{" "}
        <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
