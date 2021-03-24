import React from "react";
import { useSelector } from "react-redux";

export default function WeeklyRecord() {
  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  const recordsKeys = Object.keys(records);
  const weekDataObject = {};
  const weeklySecOnlyArray = recordsKeys.map((x) => {
    return (weekDataObject[x] = records[Number(x)].reduce((acc, cur) => acc + cur));
  });

  return (
    <div>
      <div style={{ color: "white" }}>
        {recordsKeys.map((x, idx) => (
          <div>{parseInt(weekDataObject[x] / 3600) < 1 ? `${x} 주차 ${parseInt(weekDataObject[x] % 60)} 분` : `${x} 주차 ${parseInt(weekDataObject[x] / 3600)} 시간 ${parseInt((weekDataObject[x] % 3600) / 60)} 분`}</div>
        ))}
      </div>
    </div>
  );
}
