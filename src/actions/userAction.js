export const SET_USERINFO = "SET_USERINFO";
const axios = require("axios");

export function setUserInfo(loginData) {
<<<<<<< HEAD
  const abc = axios.post("https://localhost:5000", loginData).then((res) => res.data);
=======
  const abc = axios.post("http://localhost:5000", loginData, { "Content-Type": "application/json", withCredentials: true }).then((res) => res.data);
>>>>>>> 6e61231dba6010aa6f4072eeeed04a68664c4860
  // console.log(abc)
  return {
    type: SET_USERINFO,
    payload: abc,
  };
}
