import axios from "axios";
import { resolve } from "path";

const API_URL = "http://localhost:4000/";

const register = (email: string, password: string) => {
  return axios.post(API_URL + "register", {
    email,
    password,
  });
};

const login = (email : string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response: any) => {
      console.log(response, ' i m response');
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  return new Promise((resolve,reject)=>{
    if (localStorage.getItem("user") === null){
      reject("User not logged in")
    }
    else{
      localStorage.removeItem("user");
      resolve("Successfully Logged out!");
    }
  })
};

export default {
  register,
  login,
  logout,
};