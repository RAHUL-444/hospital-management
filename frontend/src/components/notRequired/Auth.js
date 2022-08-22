// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
// import ToastN from "../../feature/ToastN";
// import { useDispatch } from "react-redux";
// import { login } from "../../index";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";

// const Auth = () => {
//   const naviagte = useNavigate();
//   const dispatch = useDispatch();
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//     gender: "",
//     type: "",
//     id: "",
//     date: "",
//   });

//   const [isSignup, setIsSignup] = useState(false);
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const sendRequest = async (type = "login") => {
//     const res = await axios
//       .post(`http://localhost:5000/api/user/${type}`, {
//         name: inputs.name,
//         email: inputs.email,
//         password: inputs.password,
//         gender: inputs.gender,
//         date: inputs.date,
//         type: inputs.type,
//         id: inputs.id,
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           ToastN(res.data.message, "success");
//         }
//       })
//       .then(() =>
//         dispatch(
//           login({
//             name: inputs.name,
//             email: inputs.email,
//             password: inputs.password,
//             gender: inputs.gender,
//             date: inputs.date,
//             type: inputs.type,
//             id: inputs.id,
//             isloggedIN: true,
//           })
//         )
//       )
//       .then(() => naviagte("/Home"))
//       .catch((err) => console.log(err))
//       .then((res) => {
//         console.log('then')
//         if (res.status === 400) {
//           ToastN(res.data.message, "warning");
//         }
//       });
//     const data = await JSON.stringify(res.data);
//     return data;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       sendRequest("signup")
//         .then(() =>
//           dispatch(
//             login({
//               name: inputs.name,
//               email: inputs.email,
//               password: inputs.password,
//               gender: inputs.gender,
//               date: inputs.date,
//               type: inputs.type,
//               id: inputs.id,
//               isloggedIN: true,
//             })
//           )
//         )
//         .then(() => naviagte("/Home"));
//     } else {
//       sendRequest("login");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Box
//           maxWidth={600}
//           minheight="100vh"
//           display="flex"
//           flexDirection={"column"}
//           alignItems="flexStart"
//           justifyContent={"center"}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin="auto"
//           marginTop={5}
//           borderRadius={5}
//         >
//           <Typography variant="h2" padding={3} textAlign="center">
//             <u>{isSignup ? "Sign Up" : "Login"}</u>
//           </Typography>
//           {isSignup && (
//             <>
//               <InputLabel id="demo-simple-select-label">Name</InputLabel>
//               <TextField
//                 name="name"
//                 onChange={handleChange}
//                 value={inputs.name}
//                 // placeholder="Name"
//                 margin="normal"
//               />
//             </>
//           )}
//           {!isSignup && (
//             <>
//               <InputLabel id="demo-simple-select-label">User Type</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 name="type"
//                 value={inputs.type}
//                 label="Age"
//                 sx={{ width: 600 }}
//                 onChange={handleChange}
//               >
//                 <MenuItem value={1}>Patient</MenuItem>
//                 <MenuItem value={2}>Doctor</MenuItem>
//                 <MenuItem value={3}>Admin</MenuItem>
//               </Select>
//             </>
//           )}
//           <div
//             style={{
//               display: "flex",
//             }}
//           >
//             <div
//               style={{
//                 marginRight: "20px",
//               }}
//             >
//               {isSignup && (
//                 <>
//                   <InputLabel id="demo-simple-select-label">Gender</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     name="gender"
//                     value={inputs.gender}
//                     label="Age"
//                     sx={{ width: 290 }}
//                     onChange={handleChange}
//                   >
//                     <MenuItem value={1}>Male</MenuItem>
//                     <MenuItem value={2}>Female</MenuItem>
//                     <MenuItem value={3}>TRANS</MenuItem>
//                   </Select>
//                 </>
//               )}
//             </div>
//             <div
//               style={{
//                 marginRight: "10px",
//               }}
//             >
//               {isSignup && (
//                 <>
//                   <InputLabel id="demo-simple-select-label">
//                     User Type
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     name="type"
//                     value={inputs.type}
//                     label="Age"
//                     sx={{ width: 290 }}
//                     onChange={handleChange}
//                   >
//                     <MenuItem value={1}>Patient</MenuItem>
//                     <MenuItem value={2}>Doctor</MenuItem>
//                     <MenuItem value={3}>Admin</MenuItem>
//                   </Select>
//                 </>
//               )}
//             </div>
//           </div>
//           <>
//             <InputLabel id="demo-simple-select-label">Email</InputLabel>
//             <TextField
//               name="email"
//               onChange={handleChange}
//               value={inputs.email}
//               type={"email"}
//               // placeholder="Email"
//               margin="normal"
//             />
//           </>

//           {isSignup && (
//             <>
//               <InputLabel id="demo-simple-select-label">date</InputLabel>
//               <TextField
//                 name="date"
//                 // label="date"
//                 onChange={handleChange}
//                 value={inputs.date}
//                 type="date"
//                 defaultValue="2022-08-19"
//                 sx={{ width: 600 }}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </>
//           )}
//           <div
//             style={{
//               display: "flex",
//               marginTop: "20px",
//             }}
//           >
//             <div
//               style={{
//                 marginRight: "20px",
//               }}
//             >
//               {!isSignup && (
//                 <>
//                   <InputLabel id="demo-simple-select-label">
//                     Password
//                   </InputLabel>
//                   <TextField
//                     name="password"
//                     onChange={handleChange}
//                     value={inputs.password}
//                     type={"password"}
//                     sx={{ width: 600 }}
//                     // placeholder="Password"
//                     margin="normal"
//                   />
//                 </>
//               )}
//               {isSignup && (
//                 <>
//                   <InputLabel id="demo-simple-select-label">
//                     Password
//                   </InputLabel>
//                   <TextField
//                     name="password"
//                     onChange={handleChange}
//                     value={inputs.password}
//                     type={"password"}
//                     sx={{ width: 290 }}
//                     // placeholder="Password"
//                     margin="normal"
//                   />
//                 </>
//               )}
//             </div>
//             <div>
//               {isSignup && (
//                 <>
//                   <InputLabel id="demo-simple-select-label">
//                     Confirm Password
//                   </InputLabel>
//                   <TextField
//                     name="password"
//                     // onChange={handleChange}
//                     value={inputs.confirm_password}
//                     sx={{ width: 290 }}
//                     type={"password"}
//                     // placeholder="Confirm Password"
//                     margin="normal"
//                   />
//                 </>
//               )}
//             </div>
//           </div>
//           {!isSignup && (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginTop: "25px",
//               }}
//             >
//               <Typography
//                 sx={{ color: "blue", fontSize: "15px", alignItems: "center" }}
//               >
//                 Forgot Password?
//               </Typography>
//             </div>
//           )}
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ borderRadius: 3, marginTop: 3 }}
//             color="warning"
//           >
//             Submit
//           </Button>
//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ borderRadius: 3, marginTop: 3 }}
//             variant="contained"
//             color="success"
//           >
//             {isSignup ? "Already have an account, Login" : "Create New Account"}
//           </Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default Auth;
