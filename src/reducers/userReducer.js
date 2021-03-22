import { SET_USERINFO,SET_LOGOUT,SET_ISLOGIN } from "../actions/userAction";
import  {initialState}  from "./initialState";
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERINFO:
      return {
          ...state,
        user: { ...action.payload },
      };
    case SET_ISLOGIN:
      return {
        ...state,
        isLogin:action.payload
      };
    case SET_LOGOUT:
    return {
      ...state,
      isLogin:action.payload
    };
    default:
      return state;
    }
};


export default userReducer;
