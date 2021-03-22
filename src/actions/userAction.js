export const SET_USERINFO = "SET_USERINFO";
export const SET_ISLOGIN = "SET_ISLOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
const axios = require("axios");

<<<<<<< HEAD
export function setUserInfo() {
  const response = axios.get("http://localhost:5000/user/userinfo", { withCredentials: true }).then((res) => res.data);
=======
export function setUserInfo (){
    return axios.get('https://localhost:5000/user/userinfo',{accept:'application/json',withCredentials:true}).then(res=>res.data)
    .then(data=>{
        return {
            type: SET_USERINFO,
            payload: data.data
        };
    })
};
>>>>>>> 5e02fed522588dd5636555b0d37e67a51242caab

  return {
    type: SET_USERINFO,
    payload: response.data,
  };
}

export function setIsLogin() {
  return {
    type: SET_ISLOGIN,
    payload: true,
  };
}

export function setLogout() {
  return {
    type: SET_ISLOGIN,
    payload: false,
  };
}
