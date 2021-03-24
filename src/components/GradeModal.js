import React from "react";
import { useSelector } from "react-redux";
import "../componentsCss/GradeModal.css";

export default function GradeModal({ gradeModal, setGradeModal }) {
  const userInfo = useSelector((state) => state.recordReducer).user;
  const { tags } = userInfo;

  const allGrade = ["비기너 : 0시간", "아이언 : 5시간", "브론즈 : 10시간", "실버 : 25시간", "골드 : 50시간", "플레티넘 : 100시간", "다이아 : 150시간", "마스터 : 200시간", "그랜드마스터 : 300시간", "챌린져 : 500시간"];

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
