import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStyles } from "./utils";
import { useSelector } from "react-redux";
import { selectUser } from "../store/index";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DoctorBlogs = () => {
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const userdataFromRedux = useSelector(selectUser);
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
  console.log(userdataFromRedux);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      {user && allPatient && userdataFromRedux.type !== 1 && (
        <>
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Full Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Birthday&nbsp;</TableCell>
                    <TableCell align="right">Gender&nbsp;</TableCell>
                    <TableCell align="right">Blood&nbsp;</TableCell>
                    <TableCell align="right">User Type&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {user &&
             userdataFromRedux.blood === 3 &&
             allAdmins.map((blog, index) => ( */}
                  {allPatient.map((blog, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {blog.fname}
                      </TableCell>
                      <TableCell align="right">{blog.email}</TableCell>
                      <TableCell align="right">{blog.date}</TableCell>
                      <TableCell align="right">
                        {blog.gender === 1
                          ? "Male"
                          : blog.gender === 2
                          ? "Female"
                          : "Trans"}
                      </TableCell>
                      <TableCell align="right">
                        {blog.blood === 1
                          ? "O +ve"
                          : blog.blood === 2
                          ? "O -ve"
                          : blog.blood === 3
                          ? "B +ve"
                          : blog.blood === 4
                          ? "B -ve"
                          : blog.blood === 5
                          ? "A +ve"
                          : blog.blood === 6
                          ? "A -ve"
                          : blog.blood === 7
                          ? "AB +ve"
                          : blog.blood === 8
                          ? "AB -ve"
                          : "NA"}
                      </TableCell>
                      <TableCell align="right">
                        {blog.type === 1
                          ? "Patient"
                          : blog.type === 2
                          ? "Doctor"
                          : "Admin"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorBlogs;
