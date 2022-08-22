import axios from "axios";
import ToastN from "../feature/ToastN";

export const sendRequest = async (type, values) => {
  const res = await axios
    .post(`http://localhost:5000/api/user/${type}`, {
      name: values.name,
      email: values.email,
      password: values.password,
      gender: values.gender,
      date: values.date,
      type: values.type,
      id: values.id,
    })
    .catch((err) => {
      ToastN(err.response.data.message, "warning");
    });

  const data = await res.data;
  return data;
};
export const sendAddingAppointmentRequest = async (values,userID) => {
  const res = await axios
    .post("http://localhost:5000/api/blog/add", {
      disease: values.disease,
      description: values.description,
      department: values.department,
      date: values.date,
      user: userID,
    })
    .catch((err) => {
      ToastN(err.response.data.message, "warning");
    });

  const data = await res.data;
  return data;
};
