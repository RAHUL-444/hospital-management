import axios from "axios";

import ToastN from "../feature/ToastN";
export const sendRequest = async (type, values) => {
  const res = await axios
    .post(`http://localhost:5000/api/user/${type}`, {
      name: values.name,
      email: values.email,
      password: values.password,
      gender: values.gender,
      birthday: values.birthday,
      type: values.type,
      id: values.id,
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data.status);
      if (err.response.data.status === 401) {
        ToastN(err.response.data.message, "warning");
      } else if (err.response.data.status === 402) {
        ToastN(err.response.data.message, "warning");
      } else {
        ToastN("Something Went Wrong. Try Again", "warning");
      }
    });

  const data = await res.data;
  return data;
};
