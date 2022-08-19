import Home from "./components/Home";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Profile from "./components/Profile";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import React, {useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "./store/index";
import { login } from "./store/index";
function App() {
  const dispatch = useDispatch();
    const res = useSelector(state=>state.user);
    console.log('user',res)
  const [defaultData, setDefaultData] = useState([
    {
      name: "",
      email: "",
      password: "",
      isloggedIN: false,
      birthday: "",
      gender: "",
      type: "",
      blogs: [],
      id: "",
    },
  ]);
  useEffect(() => {
    async function getUser() {
      const response = await axios.post(
        `http://localhost:5000/api/user/login`,
        {
          email: res.user.email,
          password: res.user.password,
          type: res.user.type,
        }
      );
      dispatch(
        login({
          name: response.data.user.name,
          email: response.data.user.email,
          password: response.data.user.password,
          birthday: response.data.user.birthday,
          gender: response.data.user.gender,
          type: response.data.user.type,
          id: response.data.user._id,
          blogs: response.data.user.blogs,
        })
      );
      setDefaultData(response.data);
    }
    getUser();
  }, [dispatch, res, defaultData]);
  return (
    <>
      <Header />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Auth />} />
        <Route
          path={`${process.env.PUBLIC_URL + "/Home"}`}
          element={<Home />}
        />
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
        <Route path={`${process.env.PUBLIC_URL + "*"}`} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
