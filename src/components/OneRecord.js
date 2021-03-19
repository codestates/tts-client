import React from "react";

// 전체 요일의 시간, 해당 요일을 상징하는 인덱스와, 그 인덱스와 짝을 이룰 요일정보
function OneRecord({ dayTime, dayCount, idx }) {
  const hh = parseInt(dayTime / 3600);
  const mm = parseInt((dayTime % 3600) / 60);
  const sec = dayTime % 60;

  return (
    <div>
      {dayTime == null ? (
        <div>
          <span>{dayCount[idx]} </span>
          판교 안갈꺼야?
        </div>
      ) : (
        <div>
          <span>{dayCount[idx]}</span>
          <span> {hh < 10 ? `0${hh}` : hh} :</span>
          <span> {mm < 10 ? `0${mm}` : mm} :</span>
          <span> {sec < 10 ? `0${sec}` : sec}</span>
        </div>
      )}
    </div>
  );
}

export default OneRecord;
