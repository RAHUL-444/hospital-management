import "./DoctorSignUpPage.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendRequest } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import ToastN from "../../feature/ToastN";
import MenuItem from "@mui/material/MenuItem";
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
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")

    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});
function camelize(text) {
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] && words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }

  return words.join(" ");
}
const DoctorSignUpPage = (props) => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
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
            type: 1,
            id: values._id,
            isloggedIN: true,
          };
          sendRequest("signup", data).then((res) => {
            if (res.status === 200) {
              ToastN("Sign up Successfull", "success");
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
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          const handleChangeWithCamelize = (e) => {
            const copyE = { ...e };
            copyE.target.value = camelize(copyE.target.value);
            handleChange(e);
          };

          return (
            <div className="login">
              <div className="form-signup">
                <form noValidate onSubmit={handleSubmit}>
                  <span>
                    <u>Patient Sign Up</u>
                  </span>

                  <div className="form-user-type">Full Name</div>
                  <input
                    type="fname"
                    name="fname"
                    onChange={handleChangeWithCamelize}
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
                        sx={{ width: 280 }}
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
                        sx={{ width: 280 }}
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
                        
                        {values.changepassword !== values.password &&
                          "Both password need to be the same"}
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
                    Adding Patient
                  </button>
                  
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default DoctorSignUpPage;
