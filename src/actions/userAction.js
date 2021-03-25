export const SET_USERINFO = "SET_USERINFO";
export const SET_ISLOGIN = "SET_ISLOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const api = process.env.REACT_APP_SERVER_ADDRESS || "https://localhost:5000";


export function setUserInfo() {
  return axios
    .get(api + "/user/userinfo", { accept: "application/json", withCredentials: true })
    .then((res) => res.data)
    .then((data) => {
      return {
        type: SET_USERINFO,
        payload: data.data,
      };
    });
}


export function setIsLogin() {
  return {
    type: SET_ISLOGIN,
    payload: true,
  };
}

export function setLogout() {
  return {
    type: SET_LOGOUT,
    payload: false,
  };
}
