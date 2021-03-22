import { ADD_TO_RECORD, SET_RECORDS } from "../actions/recordAction";
import { SET_USERINFO,SET_LOGOUT,SET_ISLOGIN } from "../actions/userAction";

import { initialState } from "./initialState";

const recordReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_TO_RECORD:
      return {
        ...state,
        records: { ...action.payload.getWeeklyRecord },
      };
    case SET_RECORDS:
      return {
        ...state,
        records: { ...action.payload.records },
      };
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
      ...initialState
    };
    default:
      return state;
  }
};

export default recordReducer;
