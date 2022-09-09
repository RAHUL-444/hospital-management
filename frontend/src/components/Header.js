import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../store/index";
import { useStyles } from "./utils";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector(selectUser);

  const [value, setValue] = useState("1");

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
          HOSPITAL MANAGEMENT SYSTEM
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs textColor="inherit" value={value}>
              {/* <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/Home"
                label="Home"
              /> */}
              {isLoggedIn.type === 3 && (
                <Tab
                  className={classes.font}
                  LinkComponent={Link}
                  to="/Users"
                  label="All Users"
                />
              )}
              {/* {isLoggedIn.type === 2 && (
                <Tab
                  className={classes.font}
                  LinkComponent={Link}
                  to="/All-Patients"
                  label="All Patients"
                />
              )}

              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/Profile"
                label="My Profile"
              /> */}

              {isLoggedIn.type !== 1 && isLoggedIn.type !== 2 &&(
                <Tab
                  className={classes.font}
                  LinkComponent={Link}
                  to="/Doctor/Add-Doctor"
                  label="Add Doctor"
                />
              )}
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {isLoggedIn && (
            <Button
              onClick={() => {
                dispath(logout());

                localStorage.removeItem("userId");
              }}
              LinkComponent={Link}
              to="/"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
