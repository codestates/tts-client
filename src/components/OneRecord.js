import React from "react";
import "../componentsCss/OneRecord.css";

// 전체 요일의 시간, 해당 요일을 상징하는 인덱스와, 그 인덱스와 짝을 이룰 요일정보
function OneRecord({ dayTime, dayCount, idx }) {
  const hh = parseInt(dayTime / 3600);
  const mm = parseInt((dayTime % 3600) / 60);
  const sec = dayTime % 60;

  return (
    <div className="oneRecord">
      {dayTime == null ? (
        <div className="dayTime">
          <div>{dayCount[idx]} : -- : -- : -- </div>
        </div>
      ) : (
        <div className="dayTime">
          <div>
            {dayCount[idx]} : {hh < 10 ? `0${hh}` : hh} : {mm < 10 ? `0${mm}` : mm} : {sec < 10 ? `0${sec}` : sec}
          </div>
        </div>
      )}
    </div>
  );
}

export default OneRecord;
