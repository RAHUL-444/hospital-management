// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useStyles } from "../utils";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useDispatch, useSelector } from "react-redux";
// import ToastN from "../../feature/ToastN";

// const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
// const AddBlog = () => {
//   const classes = useStyles();
//   const user = useSelector(state=>state.user);
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     department: "",
//     date:"",
//   });
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const sendRequest = async () => {
//     const res = await axios
//       .post("http://localhost:5000/api/blog/add", {
//         title: inputs.title,
//         description: inputs.description,
//         department: inputs.department,
//         date: inputs.date,
//         user:user.user.id,
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           ToastN(res.data.message, "success");
//         }
//       })
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendRequest()
//     //   .then((data) => console.log(data))
//       .then(() => navigate("/Home"));
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <Box
//             border={3}
//             borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
//             borderRadius={10}
//             boxShadow="10px 10px 20px #ccc"
//             padding={3}
//             margin={"auto"}
//             marginTop={3}
//             display="flex"
//             flexDirection={"column"}
//             width={"50%"}
//           >
//             <Typography
//               className={classes.font}
//               fontWeight={"bold"}
//               padding={3}
//               required={true}
//               color="grey"
//               variant="h2"
//               textAlign={"center"}
//             >
//              <u> Create Appointment</u>
//             </Typography>
//             <InputLabel className={classes.font} sx={labelStyles}>
//               Disease
//             </InputLabel>
//             <TextField
//               className={classes.font}
//               name="title"
//               onChange={handleChange}
//               value={inputs.title}
//               required={true}
//               margin="auto"
//               variant="outlined"
//             />
//             <InputLabel className={classes.font} sx={labelStyles}>
//               Description
//             </InputLabel>
//             <TextField
//               className={classes.font}
//               name="description"
//               onChange={handleChange}
//               required={true}
//               value={inputs.description}
//               margin="auto"
//               variant="outlined"
//             />
//             <InputLabel className={classes.font} sx={labelStyles}>
//               Appointment Date
//             </InputLabel>
//             <TextField
//                 name="date"
//                 // label="date"
//                 onChange={handleChange}
//                 value={inputs.date}
//                 required={true}
//                 type="date"
//                 defaultValue="2022-08-19"
//                 // sx={{ width: 600 }}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             <InputLabel className={classes.font} sx={labelStyles}>
//               Department
//             </InputLabel>
//             <Box>
//               <FormControl fullWidth>
//                 <Select
//                   className={classes.font}
//                   name="department"
//                   value={inputs.department}
//                   label="Department"
//                   required={true}
//                   onChange={handleChange}
//                   margin="auto"
//                   variant="outlined"
//                 >
//                   <MenuItem value={10}>Cardiology</MenuItem>
//                   <MenuItem value={20}>Orthopedics</MenuItem>
//                   <MenuItem value={30}>Radiology/Pathology</MenuItem>
//                   <MenuItem value={40}>Neurology</MenuItem>
//                   <MenuItem value={50}>General Medicine</MenuItem>
//                   <MenuItem value={60}>ENT</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <Button
//               sx={{ mt: 2, borderRadius: 2 }}
//               variant="contained"
//               color="warning"
//               type="submit"
//             >
//               Submit
//             </Button>
//           </Box>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddBlog;