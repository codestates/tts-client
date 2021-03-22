import React from "react";
import "../componentsCss/Grade.css";
import { useSelector } from "react-redux";

export default function Grade() {
  const state = useSelector((state) => state.recordReducer);
  console.log(state.user.tags);
  const highTag = state.user.tags;

  // const N = highTag.length;
  // console.log(highTag[N - 1]);
  return <div className="grade"> 칭호자리 </div>;
}
