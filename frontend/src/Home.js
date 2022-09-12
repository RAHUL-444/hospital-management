import React from "react";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/Login/SignUpPage";
const Home = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      zIndex: "50",
      fontWeight: "800",
      fontSize: "2.125rem",
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
      color: "black",
    }}>
      <div><LoginPage/></div>
      <div><SignUpPage/></div>
    </div>
  );
};

export default Home;
