export const SET_USERINFO = "SET_USERINFO";
const axios = require("axios");

export function setUserInfo(loginData) {
  const abc = axios.post("https://localhost:5000", loginData).then((res) => res.data);
  // console.log(abc)
  return {
    type: SET_USERINFO,
    payload: abc,
  };
}
