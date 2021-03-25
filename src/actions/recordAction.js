export const ADD_TO_RECORD = "ADD_TO_RECORD";
export const SET_RECORDS = "SET_RECORDS";
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const api = process.env.REACT_APP_SERVER_ADDRESS || "https://localhost:5000";

export const axiosData = (api, action) => (dispatch) => {
  return axios(api, { accept: "application/json", withCredentials: true })
    .then((res) => {
      dispatch(action(res.data.data.Coding));
    })
    .catch((err) => console.log(err));
};

export const addToRecord = async (recordData) => {
  await axios
    .post(api + "/user/record", recordData, {
      accept: "application/json",
      withCredentials: true,
    })
    .then((res) => res)
    .catch((e) => console.log(e));

  const getWeeklyRecord = await axios
    .get(api + "/user/record", {
      accept: "application/json",
      withCredentials: true,
    })
    .then((res) => {
      return res.data.data.Coding;
    })
    .catch((e) => console.log(e));

  return {
    type: ADD_TO_RECORD,
    payload: {
      getWeeklyRecord,
    },
  };
};

export const setRecords = (records) => {
  return {
    type: SET_RECORDS,
    payload: {
      records,
    },
  };
};
