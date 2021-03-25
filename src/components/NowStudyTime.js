import React from "react";
import { useSelector } from "react-redux";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import "../componentsCss/NowStudyTime.css";

export default function NowStudyTime() {
  const thisWeek = getNumberOfWeek();
  const state = useSelector((state) => state.recordReducer);
  const { records, isLogin } = state;
  const allRecordsWeek =
    thisWeek in records
      ? records[thisWeek]
          .filter((x) => x !== null)
          .reduce((acc, cur) => {
            return acc + cur;
          })
      : false;

  return <div className="week">{!isLogin ? "Please Login" : allRecordsWeek === false ? "Start work!" : `This Week ${parseInt(allRecordsWeek / 3600)} h ${parseInt((allRecordsWeek % 3600) / 60)} m`}</div>;
}
