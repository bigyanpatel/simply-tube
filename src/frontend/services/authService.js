import axios from "axios";

export const loginService = (loginData) => {
  return axios.post("/api/auth/login", {
    email: loginData.email,
    password: loginData.password,
  });
};

export const signUpservice = (formData) => {
  return axios.post("/api/auth/signup", formData);
};