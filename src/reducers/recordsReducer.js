import { ADD_TO_RECORD } from "../actions/recordAction";
import { initialState } from "./initialState";

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_RECORD:
      return {
        ...state,
        records: { ...action.payload },
      };
    default:
      return state;
  }
};

export default recordReducer;
