import Home from "./components/Home";
// import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import DoctorsBlogs from "./components/DoctorBlogs";
// import AddBlog from "./components/AddBlog";
import AddAppointment from "./components/appointment/AddAppointment";
import Profile from "./components/profile/Profile";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Auth from "./components/notRequired/Auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "./store/index";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/Login/SignUpPage";
import DoctorSignUpPage from "./components/Doctor/DoctorSignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.user);
  const [defaultData, setDefaultData] = useState([
    {
      email: "",
      password: "",
      isloggedIN: false,
      gender: "",
      type: "",
      blogs: [],
      blood: "",
      id: "",
      date: "",
      fname: "",
      lname: "",
      changepassword: "",
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
          fname: response.data.user.fname,
          lname: response.data.user.lname,
          email: response.data.user.email,
          password: response.data.user.password,
          blood: response.data.user.blood,
          gender: response.data.user.gender,
          date: response.data.user.date,
          type: response.data.user.type,
          id: response.data.user._id,
          isloggedIN: true,

          blogs: response.data.user.blogs,
        })
      );
      setDefaultData(response.data);
    }
    getUser();
  }, [dispatch, res, defaultData]);

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        {/* <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Auth />} /> */}
        <Route
          path={`${process.env.PUBLIC_URL + "/"}`}
          element={<LoginPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/Home"}`}
          element={<Home />}
        />
        <Route
          path="/Appointment/Create-Appointment"
          element={<AddAppointment />}
        />
        <Route path="/Users" element={<UserBlogs />} />
        <Route path="/All-Patients" element={<DoctorsBlogs />} />
        <Route path="/Appointments/:id" element={<BlogDetail />} />{" "}
        <Route path="/Profile" element={<Profile />} />
        <Route
          path={`${process.env.PUBLIC_URL + "*"}`}
          element={<PageNotFound />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/Login-Page"}`}
          element={<LoginPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/SignUp-Page"}`}
          element={<SignUpPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/Doctor/Add-Doctor"}`}
          element={<DoctorSignUpPage />}
        />
      </Routes>
    </>
  );
}

export default App;
