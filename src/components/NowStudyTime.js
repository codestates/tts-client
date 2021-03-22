import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import "../componentsCss/NowStudyTime.css";

export default function NowStudyTime() {
  const thisWeek = getNumberOfWeek();
  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  const allRecordsWeek = records[13].reduce((acc, cur) => {
    return (acc + cur) / 3600;
  });
  const hh = parseInt(allRecordsWeek / 3600);
  const mm = parseInt((allRecordsWeek % 3600) / 60);

  return (
    <div className="week">
      오늘 {hh} 시간 {mm} 분
    </div>
  );
}
