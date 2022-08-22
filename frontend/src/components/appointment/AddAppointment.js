import "./AddAppointment.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendRequest } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import ToastN from "../../feature/ToastN";
import MenuItem from "@mui/material/MenuItem";
import { login } from "../../store/index";
import { useDispatch } from "react-redux";
import {Button} from "@mui/material";
import Select from "@mui/material/Select";

const schema = Yup.object().shape({
  disease: Yup.string().required("User Disease is a required field"),
  description: Yup.string().required("User Description is a required field"),
  department: Yup.string().required("User Department is a required field"),
  date: Yup.string().required("Appointment Date is a required field")    
});

const AddAppointment=(props)=> {
  const naviagte = useNavigate();

  const dispatch = useDispatch();
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{
          disease: "",
          description: "",
          department: "",
          id: "",
          date: "",
        }}
        onSubmit={(values) => {
          sendRequest("signup", values).then((res) => {
            if (res.status === 200) {
              ToastN("Sign up Successfull", "success");
              dispatch(
                login({
                  disease: res.user.disease,
                  description: res.user.description,                 
                  date: res.user.date,
                  department: res.user.department,
                  id: res.user._id,
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
                <span><u>Create Appointment</u></span>
                <div className="form-user-type">Disease:</div>
                <input
                  type="disease"
                  name="disease"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.disease}
                  className="form-control inp_text"
                  id="disease"
                />
                <p className="error">
                  {errors.disease && touched.disease && errors.disease}
                </p>
                <div className="form-user-type">Description :</div>
                <input
                  type="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className="form-control inp_text"
                  id="description"
                />
                <p className="error">
                  {errors.description && touched.description && errors.description}
                </p>
                
                <div className="form-user-type">Appointment Date</div>
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

                <div className="form-user-type">Department</div>
                  <Select
                    name="department"
                    type="department"
                    value={values.department}
                    id="department"
                    sx={{ width: 360 }}
                    onChange={handleChange}
                  >
                   <MenuItem value={10}>Cardiology</MenuItem>
                  <MenuItem value={20}>Orthopedics</MenuItem>
                  <MenuItem value={30}>Radiology/Pathology</MenuItem>
                  <MenuItem value={40}>Neurology</MenuItem>
                  <MenuItem value={50}>General Medicine</MenuItem>
                  <MenuItem value={60}>ENT</MenuItem>
                  </Select>
                
                <p className="error">
                  {errors.department && touched.department && errors.department}
                </p>


                <button type="submit" variant="contained" color="success">
                Submit and Create Appointment
                </button>
                <Button
                  onClick={() => naviagte("/Home")}
                  sx={{ borderRadius: 3, marginTop: 3 }}
                  variant="contained"
                  color="secondary"
                >
                  Return to Home
                </Button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default AddAppointment;
