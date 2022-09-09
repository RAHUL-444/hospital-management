import "./DoctorSignUpPage.css";
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
  blood: Yup.string().required("User Type is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  fname: Yup.string()
    .required("First Name is a required field")
    .min(1, "Name is too Short")
    .max(20, "Name is too Big")
    .matches(
      /^[A-Z][A-Za-z]*( [A-Z][A-Za-z]*)*$/,
      "Not a correct format. Eg. Rahul Kumar "
    ),
  lname: Yup.string()
    .required("Last Name is a required field")
    .min(1, "Name is too Short")
    .max(20, "Name is too Big")
    .matches(/^[^\s][a-zA-Z\s]+[^\s]$/, "Only alphabets are allowed"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  gender: Yup.string().required("Gender is a required field"),
  date: Yup.string().required("date is a required field"),
  changepassword: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    })
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const DoctorSignUpPage = (props) => {
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
          blood: "",
          id: "",
          date: "",
          fname: "",
          lname: "",
          changepassword: "",
        }}
        onSubmit={(values) => {
          const data = {
            fname: values.fname,
            lname: values.lname,
            email: values.email,
            password: values.password,
            blood: values.blood,
            gender: values.gender,
            date: values.date,
            type: 2,
            id: values._id,
            isloggedIN: true,
          };
          sendRequest("signup", data).then((res) => {
            if (res.status === 200) {
              ToastN("Appointing a Doctor was Successfull", "success");
              // dispatch(
              //   login({
              //     fname: res.user.fname,
              //     lname: res.user.lname,
              //     email: res.user.email,
              //     password: res.user.password,
              //     blood: res.user.blood,
              //     gender: res.user.gender,
              //     date: res.user.date,
              //     type: res.user.type,
              //     id: res.user._id,
              //     isloggedIN: true,
              //   })
              // );
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
            <div className="form-signup">
              <form noValidate onSubmit={handleSubmit}>
                <span>
                  <u>Appointing a Doctor</u>
                </span>
                <div className="form-user-type">Full Name</div>
                <input
                  type="fname"
                  name="fname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fname}
                  className="form-control inp_text"
                  id="fname"
                />
                <p className="error">
                  {errors.fname && touched.fname && errors.fname}
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

                <div className="form-signup-name">
                  <div className="form-user-type-container-left">
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
                      <MenuItem value={3}>Others</MenuItem>
                    </Select>
                    <p className="error">
                      {errors.gender && touched.gender && errors.gender}
                    </p>
                  </div>

                  <div className="form-user-type-container">
                    <div className="form-user-type">BLood Group</div>
                    <Select
                      name="blood"
                      type="blood"
                      value={values.blood}
                      id="blood"
                      sx={{ width: 340 }}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>O +ve</MenuItem>
                      <MenuItem value={2}>O -ve</MenuItem>
                      <MenuItem value={3}>B +ve</MenuItem>
                      <MenuItem value={4}>B -ve</MenuItem>
                      <MenuItem value={5}>A +ve</MenuItem>
                      <MenuItem value={6}>A +ve</MenuItem>
                      <MenuItem value={7}>AB -ve</MenuItem>
                      <MenuItem value={8}>AB -ve</MenuItem>
                    </Select>

                    <p className="error">
                      {errors.blood && touched.blood && errors.blood}
                    </p>
                  </div>
                </div>

                <div className="form-user-type">Date of Birth</div>
                <input
                  name="date"
                  type="date"
                  onChange={handleChange}
                  value={values.date}
                  id="date"
                  defaultValue="2022-08-19"
                  sx={{ width: 340 }}
                />
                <p className="error">
                  {errors.date && touched.date && errors.date}
                </p>

                <div className="form-signup-name">
                  <div className="form-user-type-container-left">
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
                  </div>

                  <div className="form-user-type-container">
                    <div className="form-user-type">Confirm Password</div>
                    <input
                      type="password"
                      name="changepassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.changepassword}
                      className="form-control"
                    />
                    <p className="error">
                      {errors.changepassword &&
                        touched.changepassword &&
                        errors.changepassword}
                    </p>
                  </div>
                </div>

                <button type="submit" variant="contained" color="success">
                  Sign Up
                </button>
                <Button
                  onClick={() => naviagte("/Home")}
                  sx={{ borderRadius: 3, marginTop: 3 }}
                  variant="contained"
                  color="primary"
                >
                  Cancel creating and return Home
                </Button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default DoctorSignUpPage;
