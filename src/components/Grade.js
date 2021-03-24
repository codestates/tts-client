import React from "react";
import "../componentsCss/Grade.css";
import { useSelector } from "react-redux";

export default function Grade() {
  const state = useSelector((state) => state.recordReducer);
  const grade = state.user.tags ? state.user.tags : "";
  const userName = state.user.userName;

  return (
    <div className="grade">
      {userName} Rank {grade[grade.length - 1]}{" "}
    </div>
  );
}
