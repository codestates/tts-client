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
    <div className="weeklyRecord">
      <div>
        {recordsKeys.map((x, idx) => (
          <div>{`${x} Week : ${parseInt(weekDataObject[x] / 3600)} h ${parseInt((weekDataObject[x] % 3600) / 60)} m`}</div>
        ))}
      </div>
    </div>
  );
}

//  <div>{parseInt(weekDataObject[x] / 3600) < 1 ? `${x} Week : ${parseInt(weekDataObject[x] % 60)} m` : `${x} Week : ${parseInt(weekDataObject[x] / 3600)} h ${parseInt((weekDataObject[x] % 3600) / 60)} m`}</div>
