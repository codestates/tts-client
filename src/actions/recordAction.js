export const ADD_TO_RECORD = "ADD_TO_RECORD";

export const addToRecord = (record) => {
  return {
    type: ADD_TO_RECORD,
    payload: {
      record,
    },
  };
};

// let a = {
//   users: {},
//   records: {},
// };

// let x = {
//   1: [null, 3600, 3600, 7200, null, null, null],
//   2: [null, 3600, null, null, null, null, null, 3600],
//   3: [null, null, null, null, 3600, 3600, null],
// };

// let z = Object.assign({}, a, { records: { ...x } });
// // console.log(z);
// let y = { ...a, records: { ...x } };
// console.log(y);
