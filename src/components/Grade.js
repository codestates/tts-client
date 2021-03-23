import React from "react";
import "../componentsCss/Grade.css";
import { useSelector } from "react-redux";

export default function Grade() {
  const state = useSelector((state) => state.recordReducer);
  console.log(state);
  const grade = state.user.tags ? state.user.tags : "칭호가 없습니다";

  return <div className="grade"> {grade} </div>;
}
