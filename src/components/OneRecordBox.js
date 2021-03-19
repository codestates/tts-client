import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OneRecord from "./OneRecord";

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
    <div>
      <div>
        {records[1].map((dayTime, idx) => {
          return <OneRecord dayTime={dayTime} idx={idx} key={idx} dayCount={dayCount} />;
        })}
      </div>
      <div>
        <span>총 시간 : </span>
        <span> {hh} 시간 </span>
        <span> {mm} 분 </span>
        {/* <span> {sec} 초</span> */}
      </div>
      {/* <div>
        총 시간 :{" "}
        {parseInt(
          records[1].reduce((acc, cur) => {
            return (acc + cur) / 3600;
          })
        )}{" "}
        시간
      </div> */}
    </div>
  );
}

export default OneRecordBox;
