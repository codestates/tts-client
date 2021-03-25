import React from "react";
import { useSelector } from "react-redux";
import "../componentsCss/GradeModal.css";

export default function GradeModal({ gradeModal, setGradeModal }) {
  const userInfo = useSelector((state) => state.recordReducer).user;
  const { tags } = userInfo;

  const allGrade = ["Beginner : 0h", "Iron : 5h", "Bronze : 10h", "Silver : 25h", "Gold : 50h", "Platinum : 100h", "Diamond : 150h", "Master : 200h", "GrandMaster : 300h", "Challenger : 500h"];

  return (
    <div>
      {/* <div style={{ color: "white" }}>GradeModal</div>
      <button onClick={() => setGradeModal(!gradeModal)}>close modal</button> */}
      <div className="userInfo-grade-modal">
        {allGrade.reverse().map((x, idx) =>
          tags.includes(x.split(" ")[0]) ? (
            <div key={idx}>{x}</div>
          ) : (
            <div key={idx} className="userInfo-grade-modal-chkColor">
              {x}
            </div>
          )
        )}
      </div>
    </div>
  );
}
