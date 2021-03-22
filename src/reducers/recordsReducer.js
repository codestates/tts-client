import { ADD_TO_RECORD, SET_RECORDS } from "../actions/recordAction";
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
    default:
      return state;
  }
};

export default recordReducer;
