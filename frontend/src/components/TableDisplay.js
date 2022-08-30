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
const TableDisplay = ({
  id,
  key,
  blood,
  fname,
  lname,
  email,
  date,
  gender,
  type
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  let userGender = "";
  let userBlood = "";
  let userType = "";

  if (type === 1) {
    userType = "Patient";
  } else if (type === 2) {
    userType = "Doctor";
  } else if (type === 3) {
    userType = "Admin";
  } else {
    userType = "NA";
  }

   if (blood === 1) {
    userBlood = "O +ve";
  } else if (blood === 2) {
    userBlood = "O -ve";
  } else if (blood === 3) {
    userBlood = "B +ve";
  } else if (blood === 4) {
    userBlood = "B -ve";
  } else if (blood === 5) {
    userBlood = "A +ve";
  } else if (blood === 6) {
    userBlood = "A -ve";
  } else if (blood === 7) {
    userBlood = "AB +ve";
  } else if (blood === 8) {
    userBlood = "AB -ve";
  } else {
    userBlood = "NA";
  }

  if (gender === 1) {
    userGender = "Male";
  } else if (gender === 2) {
    userGender = "Female";
  } else if (gender === 3) {
    userGender = "AdTransmin";
  } else {
    userGender = "NA";
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
            <b>First Name: </b> {fname}
            <br />
            <b> Last Name: </b> {lname}
            <br />
            <b> Email: </b> {email}
            <br />
            <b> Gender: </b> {userGender}
            <br />
            <b> Date of Birth: </b> {date}
            <br />
            <b> Blood Group: </b> {userBlood}
            <br />
            <b> User type: </b> {userType}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TableDisplay;
