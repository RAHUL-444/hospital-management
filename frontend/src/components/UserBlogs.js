import React, { useEffect, useState } from "react";
import axios from "axios";
import TableDisplay from "./TableDisplay";
import { useStyles } from "./utils";
import { useSelector } from "react-redux";
import { selectUser } from "../store/index";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const UserBlogs = () => {
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const userdataFromRedux = useSelector(selectUser);
  const naviagte = useNavigate();
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/user/`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    const getUsers = async () => {
      const users = await sendRequest();
      setUser(users.users);
    };
    getUsers();
  }, []);
  let allPatient = user
    .filter(function (student) {
      return student.type === 1;
    })
    .map(function (student) {
      return student;
    });
  let allDoctors = user
    .filter(function (student) {
      return student.type === 2;
    })
    .map(function (student) {
      return student;
    });
  let allAdmins = user
    .filter(function (student) {
      return student.type === 3;
    })
    .map(function (student) {
      return student;
    });

  return (
    <>
      {/* for Admin */}

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
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
          <u
            style={{
              color: "white",
              fontSize: "50px",
            }}
          >
            All Admins
          </u>
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {user &&
            userdataFromRedux.type === 3 &&
            allAdmins.map((blog, index) => (
              <TableDisplay
                id={blog._id}
                key={index}
                blood={blog.blood}
                fname={blog.fname}
                lname={blog.lname}
                email={blog.email}
                date={blog.date}
                type={blog.type}
                gender={blog.gender}
              />
            ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
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
          <u
            style={{
              color: "white",
              fontSize: "50px",
            }}
          >
            All Doctors
          </u>
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {user &&
            userdataFromRedux.type === 3 &&
            allDoctors.map((blog, index) => (
              <TableDisplay
                id={blog._id}
                key={index}
                blood={blog.blood}
                fname={blog.fname}
                lname={blog.lname}
                email={blog.email}
                date={blog.date}
                type={blog.type}
                gender={blog.gender}
              />
            ))}
        </div>
      </div>

      {/* for Patient */}
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
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
          <u
            style={{
              color: "white",
              fontSize: "50px",
            }}
          >
            All Patients
          </u>
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {user &&
            allPatient.map((blog, index) => (
              <TableDisplay
                id={blog._id}
                key={index}
                blood={blog.blood}
                fname={blog.fname}
                lname={blog.lname}
                email={blog.email}
                date={blog.date}
                type={blog.type}
                gender={blog.gender}
              />
            ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => naviagte("/Home")}
          sx={{ borderRadius: 3, marginTop: 3 }}
          variant="contained"
          color="secondary"
        >
          Return to Home
        </Button>
      </div>
    </>
  );
};

export default UserBlogs;
