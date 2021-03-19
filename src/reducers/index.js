import { combineReducers } from "redux";
import recordReducer from "./recordsReducer";
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  recordReducer,
  userReducer
});

export default rootReducer;
