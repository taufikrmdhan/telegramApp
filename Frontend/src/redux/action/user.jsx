import axios from "axios";

export const createUser = (form, handleSuccess) => ({
  type: "CREATE_USER",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/register`, form)
      .then((res) => {
        handleSuccess();
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const loginUser = (form, handleSuccess) => ({
  type: "LOGIN_USER",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
      .then((res) => {
        console.log(res);
        handleSuccess(res.data.token);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});