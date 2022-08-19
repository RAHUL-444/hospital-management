import React from "react";
import { Box, Typography,Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useStyles } from "./utils";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const PageNotFound = () => {
  const classes = useStyles();
  return (
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
          <u>PAGE NOT FOUND</u>
        </Typography>
        <Button
        LinkComponent={Link}
        to="/"
        variant="contained"
        sx={{ margin: 1, borderRadius: 10 }}
        color="warning"
      >
        Home
      </Button>
      </Box>
     
    </div>
  );
};

export default PageNotFound;
