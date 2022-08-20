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
      ToastN("Something Went Wrong. Try Again", "warning");
    });

  const data = await res.data;
  return data;
};
