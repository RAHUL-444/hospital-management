import "./LoginPage.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendRequest } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import ToastN from "../../feature/ToastN";
import MenuItem from "@mui/material/MenuItem";
import { login } from "../../store/index";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";

const schema = Yup.object().shape({
  type: Yup.string().required("User Type is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 8 characters"),
  gender: Yup.string().required("Gender is a required field"),
  date: Yup.string().required("date is a required field"),
  changepassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

const SignUpPage = (props) => {
  const naviagte = useNavigate();

  const dispatch = useDispatch();
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
          gender: "",
          type: "",
          id: "",
          date: "",
          changepassword: "",
        }}
        onSubmit={(values) => {
          sendRequest("signup", values).then((res) => {
            if (res.status === 200) {
              ToastN("Sign up Successfull", "success");
              dispatch(
                login({
                  name: res.user.name,
                  email: res.user.email,
                  password: res.user.password,
                  gender: res.user.gender,
                  date: res.user.date,
                  type: res.user.type,
                  id: res.user._id,
                  isloggedIN: true,
                })
              );
              naviagte("/Home");
            }
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>
                  <u>Sign Up</u>
                </span>
                <div className="form-user-type">Name</div>
                <input
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="form-control inp_text"
                  id="name"
                />
                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>
                <div className="form-user-type">Email</div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <div className="form-user-type">Gender</div>
                <Select
                  name="gender"
                  type="gender"
                  id="gender"
                  value={values.gender}
                  sx={{ width: 360 }}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <MenuItem value={3}>TRANS</MenuItem>
                </Select>
                <p className="error">
                  {errors.gender && touched.gender && errors.gender}
                </p>

                <div className="form-user-type">User Type</div>
                <Select
                  name="type"
                  type="type"
                  value={values.type}
                  id="type"
                  sx={{ width: 360 }}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Patient</MenuItem>
                  <MenuItem value={2}>Doctor</MenuItem>
                  <MenuItem value={3}>Admin</MenuItem>
                </Select>

                <p className="error">
                  {errors.type && touched.type && errors.type}
                </p>

                <div className="form-user-type">Date of Birth</div>
                <input
                  name="date"
                  type="date"
                  onChange={handleChange}
                  value={values.date}
                  id="date"
                  defaultValue="2022-08-19"
                  sx={{ width: 360 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <p className="error">
                  {errors.date && touched.date && errors.date}
                </p>

                <div className="form-user-type">Password</div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <div className="form-user-type">Confirm Password</div>
                <input
                  type="password"
                  name="changepassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.changepassword}
                  className="form-control"
                />
                <p className="error">{errors.changepassword}</p>
                <button type="submit" variant="contained" color="success">
                  Sign Up
                </button>
                <Button
                  onClick={() => naviagte("/Login-Page")}
                  sx={{ borderRadius: 3, marginTop: 3 }}
                  variant="contained"
                  color="primary"
                >
                  Already have an account, Login
                </Button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUpPage;
