import { SET_USERINFO } from "../actions/userAction";
import { initialState } from "./initialState";
const userReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case SET_USERINFO:
      return {
        ...state,
        user: { ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
