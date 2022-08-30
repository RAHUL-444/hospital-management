import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import { useStyles } from "./utils";
import { useSelector } from "react-redux";
import { selectUser } from "../store/index";
import { Typography } from "@mui/material";
const UserBlogs = () => {
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const userstore = useSelector(selectUser);
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

  console.log("allPatient", allPatient);
  console.log("allDoctors", allDoctors);
  console.log("allAdmins", allAdmins);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {user &&
        allPatient.map((blog, index) => (
          <>
            <div>
              <Typography
                className={classes.font}
                fontWeight={"bold"}
                padding={3}
                color="grey"
                variant="h2"
                textAlign={"center"}
              >
                <u>All Patients</u>
              </Typography>
              <Table
                id={blog._id}
                key={index}
                blood={blog.blood}
                fname={blog.fname}
                lname={user.lname}
                email={user.email}
                date={blog.date}
                gender={blog.gender}
              />
            </div>
          </>
        ))}
    </div>
  );
};

export default UserBlogs;
