import "./Profile.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/index";
import { Box, InputLabel, Typography } from "@mui/material";
import { useStyles } from "../utils";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const Profile = () => {
  const classes = useStyles();

  const naviagte = useNavigate();
  const user = useSelector(selectUser);
  let userType = "";
  let userGender = "";
  let userBlood = "";

  if (user.type === 1) {
    userType = "Patient";
  } else if (user.type === 2) {
    userType = "Doctor";
  } else if (user.type === 3) {
    userType = "Admin";
  } else {
    userType = "NA";
  }

  if (user.blood === 1) {
    userBlood = "O +ve";
  } else if (user.blood === 2) {
    userBlood = "O -ve";
  } else if (user.blood === 3) {
    userBlood = "B +ve";
  } else if (user.blood === 4) {
    userBlood = "B -ve";
  } else if (user.blood === 5) {
    userBlood = "A +ve";
  } else if (user.blood === 6) {
    userBlood = "A -ve";
  } else if (user.blood === 7) {
    userBlood = "AB +ve";
  } else if (user.blood === 8) {
    userBlood = "AB -ve";
  } else {
    userBlood = "NA";
  }

  if (user.gender === 1) {
    userGender = "Male";
  } else if (user.type === 2) {
    userGender = "Female";
  } else if (user.type === 3) {
    userGender = "AdTransmin";
  } else {
    userGender = "NA";
  }

  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "1",
          background: "#FFFFFF",
          borderRadius: "10px",
          maxWidth: "360px",
          margin: "0 auto ",
          padding: "45px",
          textAlign: "center",
          marginTop: "25px",
          border: "3px",
          borderColor:
            "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
          boxShadow: "10px 10px 20px #ccc",
        }}
        className="profile"
      >
        <Box>
          <Typography
            className={classes.font}
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            <span>
              <u>User Profile</u>
            </span>
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Full Name : <>{user.fname}</>
          </InputLabel>
          <InputLabel className={classes.font} sx={labelStyles}>
            Email : <>{user.email}</>
          </InputLabel>
          <InputLabel className={classes.font} sx={labelStyles}>
            Birthday : <>{user.date}</>
          </InputLabel>
          <InputLabel className={classes.font} sx={labelStyles}>
            Gender : <>{userGender}</>
          </InputLabel>
          <InputLabel className={classes.font} sx={labelStyles}>
            Blood : <>{userBlood}</>
          </InputLabel>
          <InputLabel className={classes.font} sx={labelStyles}>
            User Type : <>{userType}</>
          </InputLabel>
        </Box>
        {/* <Button
          onClick={() => naviagte("/Home")}
          sx={{ borderRadius: 3, marginTop: 3 }}
          variant="contained"
          color="secondary"
        >
          Return to Home
        </Button> */}
      </div>
    </>
  );
};

export default Profile;
