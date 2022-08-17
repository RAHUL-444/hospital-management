import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import Header from "./Header";
const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (<div style={{
    // backgroundImage: `url(${
    //   process.env.PUBLIC_URL + "/img/home-bg.jpg"
    // })`,
    // backgroundRepeat: "no-repeat",
    // height: "100vh",
    // backgroundPosition: "center",
    height: "100vh",
    // backgroundSize,: "cover",
    // display : "flex",
    // marginTop:"10px",      
  }}>
    <Header/>
    <div style={{
      // backgroundImage: `url(${
      //   process.env.PUBLIC_URL + "/img/home-bg.jpg"
      // })`,
      // backgroundRepeat: "no-repeat",
      // height: "100vh",
      // backgroundPosition: "center",
      // 
      // backgroundSize: "cover",
      display : "flex",
      marginTop:"10px",      

    }} >
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            userName={user.name}
            email={user.email}
            department={blog.department}
          />
        ))}
    </div>
    </div >
  );
};

export default UserBlogs;
