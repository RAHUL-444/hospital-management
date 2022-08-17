import React from "react";
import Header from "./Header";
// import background from "../content/img/home-bg.jpg";

const Home = () => {
  console.log("Htting");
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/home-bg.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Header />
      </div>
    </>
  );
};

export default Home;
