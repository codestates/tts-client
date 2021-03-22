export const SET_USERINFO = "SET_USERINFO";
export const SET_ISLOGIN = "SET_ISLOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
const axios = require('axios');

export function setUserInfo (){
    const response =axios.get('http://localhost:5000/user/userinfo',{withCredentials:true}).then(res=>res.data)
    
    return {
        type: SET_USERINFO,
        payload: response.data
    };
};

export function setIsLogin (){
    return {
        type: SET_ISLOGIN,
        payload: true
    };
};

export function setLogout (){
    return {
        type: SET_ISLOGIN,
        payload: false
    };
};

