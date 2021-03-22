export const ADD_TO_RECORD = "ADD_TO_RECORD";
export const SET_RECORDS = "SET_RECORDS";

const axios = require("axios");

export const axiosData = (api, action) => (dispatch) => {
  return axios(api, { accept: "application/json", withCredentials: true })
    .then((res) => {
      // console.log(res);
      dispatch(action(res.data.data.Coding));
    })
    .catch((err) => console.log(err));
};

export const addToRecord = async (recordData) => {
  await axios
    .post("https://localhost:5000/user/record", recordData, { accept: "application/json", withCredentials: true })
    .then((res) => console.log(res))

    .catch((e) => console.log(e));

  const getWeeklyRecord = await axios
    .get("https://localhost:5000/user/record", { accept: "application/json", withCredentials: true })
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

// let a = {
//   users: {},
//   records: {},
// };

// let x = {
// 1: [null, 3600, 3600, 7200, null, null, null],
//   2: [null, 3600, null, null, null, null, null, 3600],
//   3: [null, null, null, null, 3600, 3600, null],
// };

// let z = Object.assign({}, a, { records: { ...x } });
// // console.log(z);
// let y = { ...a, records: { ...x } };
// console.log(y);
