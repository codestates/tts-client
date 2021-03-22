import OneRecord from "./OneRecord";
import "../componentsCss/OneRecordBox.css";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosData, setRecords } from "../actions/recordAction";

function OneRecordBox() {
  const thisWeek = getNumberOfWeek();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  const dayCount = ["월", "화", "수", "목", "금", "토", "일"];
  //! 서버 연결하면 열어주고 테스트
  useEffect(() => {
    dispatch(axiosData("https://localhost:5000/user/record", setRecords));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="oneRecordBox">
      {records[1].map((dayTime, idx) => {
        return <OneRecord dayTime={dayTime} idx={idx} key={idx} dayCount={dayCount} />;
      })}
    </div>
  );
}

export default OneRecordBox;
