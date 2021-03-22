import React from "react";
import { useSelector } from "react-redux";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import "../componentsCss/NowStudyTime.css";

export default function NowStudyTime() {
  const thisWeek = getNumberOfWeek();
  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  console.log(2, records);
  const allRecordsWeek =
    Object.keys(records).length !== 0
      ? records[thisWeek]
          .filter((x) => x !== null)
          .reduce((acc, cur) => {
            return (acc + cur) / 3600;
          })
      : false;

  return <div className="week">{allRecordsWeek === false ? "데이터가 없습니다" : `이번주 ${parseInt(allRecordsWeek / 3600)} 시간 ${parseInt((allRecordsWeek % 3600) / 60)} 분`}</div>;
}
