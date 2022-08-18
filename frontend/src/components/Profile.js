import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { selectUser } from "../store/index";
import { Box, InputLabel, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const Profile = () => {
  const classes = useStyles();
  const user = useSelector(selectUser);
  return (
    <>
      <Header />
      <div>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"50%"}
        >
          <Typography
            className={classes.font}
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            User Profile
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Name : <>{user.name}</>
          </InputLabel>

          <InputLabel className={classes.font} sx={labelStyles}>
            Email : <>{user.email}</>
          </InputLabel>
        </Box>
      </div>
    </>
  );
};

export default Profile;
