import {
  Avatar,
  backdropClasses,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";
import { blueGrey } from "@mui/material/colors";
const Blog = ({
  title,
  description,  
  userName,  
  id,
  date,
  department,
  email,
}) => {
  console.log(date);
  const classes = useStyles();
  const navigate = useNavigate();
  // const handleEdit = () => {
  //   navigate(`/myBlogs/${id}`);
  // };
  // const deleteRequest = async () => {
  //   const res = await axios
  //     .delete(`http://localhost:5000/api/blog/${id}`)
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // const handleDelete = () => {
  //   deleteRequest()
  //     .then(() => navigate("/"))
  //     .then(() => navigate("/blogs"));
  // };
  let departmentName = "";
  if (department === "10") {
    departmentName = "Cardiology";
  } else if (department === "20") {
    departmentName = "Orthopedics";
  } else if (department === "30") {
    departmentName = "Radiology";
  } else if (department === "40") {
    departmentName = "Neurology";
  } else if (department === "50") {
    departmentName = "General Medicine";
  } else if (department === "60") {
    departmentName = "ENT";
  } else {
    departmentName = "None";
  }
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Card
        sx={{
          margin: "30px",
          display: "flex",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px 10px",
          ":hover": {
            boxShadow: "10px 10px 20px 20px",
          },
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>User: </b> {userName}
            <br />
            <b> Description: </b> {description}
            <br />
            <b> Department: </b> {departmentName}
            <br />
            <b> Appintment Date: </b> {date}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
