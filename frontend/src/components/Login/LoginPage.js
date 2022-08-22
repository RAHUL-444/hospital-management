import "./LoginPage.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendRequest } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import ToastN from "../../feature/ToastN";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { login } from "../../store/index";
import { useDispatch } from "react-redux";
import { Button} from "@mui/material";

const schema = Yup.object().shape({
  type: Yup.string().required("User Type is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function LoginPage() {
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
        }}
        onSubmit={(values) => {
          sendRequest("login", values).then((res) => {
            if (res.status === 200) {
              ToastN("Login Successfull", "success");
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
                <span><u>Login</u></span>
                <div>
                  <div className="form-user-type">User Type</div>
                  <Select
                    name="type"
                    type="type"
                    value={values.type}
                    label="Age"
                    id="type"
                    sx={{ width: 360, height: 45 }}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Patient</MenuItem>
                    <MenuItem value={2}>Doctor</MenuItem>
                    <MenuItem value={3}>Admin</MenuItem>
                  </Select>
                </div>
                <p className="error">
                  {errors.type && touched.type && errors.type}
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
                <button type="submit"
                  variant="contained"
                  color="success">Login</button>
                <Button
                  onClick={() => naviagte("/SignUp-Page")}
                  sx={{ borderRadius: 3, marginTop: 3 }}
                  variant="contained"
                  color="warning"
                >
                  Create New Account
                </Button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default LoginPage;
