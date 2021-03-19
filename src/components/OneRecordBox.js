import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OneRecord from "./OneRecord";
import "../componentsCss/OneRecordBox.css";

function OneRecordBox() {
  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  const dayCount = ["월", "화", "수", "목", "금", "토", "일"];
  const allRecordsWeek = records[1].reduce((acc, cur) => {
    return (acc + cur) / 3600;
  });
  const hh = parseInt(allRecordsWeek / 3600);
  const mm = parseInt((allRecordsWeek % 3600) / 60);
  const sec = allRecordsWeek % 60;

  return (
    <div className="parent">
      <div className="oneRecordBox">
        {records[1].map((dayTime, idx) => {
          return <OneRecord dayTime={dayTime} idx={idx} key={idx} dayCount={dayCount} />;
        })}
      </div>
      <div className="week">
        <div className="all">오늘</div>
        <span className="allTime">
          {hh} 시간 {mm} 분
        </span>
      </div>
    </div>
  );
}

export default OneRecordBox;

{
  /* <div>
  총 시간 :{" "}
  {parseInt(
    records[1].reduce((acc, cur) => {
      return (acc + cur) / 3600;
    })
  )}{" "}
  시간
</div> */
}
