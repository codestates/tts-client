import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../componentsCss/UserInfo.css";

function UserInfo() {
  const userInfo = useSelector((state) => state.recordReducer).user;
  const { email, userName, tags } = userInfo;
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [grade, setGrade] = useState(false);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const chkPasswordHandler = (e) => {
    setChkPassword(e.target.value);
  };

  const newPassword = { newPassword: password };

  const validationPassword = async () => {
    if (password.length < 8) alert("8자 이상 20자 이하로 입력해주세요");
    else if (password.length > 20) alert("8자 이상 20자 이하로 입력해주세요");
    else if (password !== chkPassword) alert("비밀번호가 일치하지 않습니다");
    else {
      await axios
        .post("https://localhost:5000/user/userinfo", newPassword, { accept: "application/json", withCredentials: true })
        .then((res) => {
          console.log(res);
          if (res.data.message === "Your password has been changed successfully") {
            setPassword("");
            setChkPassword("");
            alert("성공적으로 변경 완료 되었습니다");
          }
        })
        .catch((e) => {
          // ! 에러 메세지 확인
          if (e.message === "Request failed with status code 403") {
            alert("기존 비밀번호와 달라야 합니다");
          } else {
            alert("세션이 만료되었습니다. 다시 로그인 해주세요");
          }
          console.log(e.message);
        });
    }
  };

  const chkGradeList = () => {
    setGrade(grade === false ? true : false);
  };
  const style = {
    border: "2px solid red",
  };

  const gradeStyle = {
    color: "gray",
  };

  const allGrade = ["비기너 : 0시간", "아이언 : 5시간", "브론즈 : 10시간", "실버 : 25시간", "골드 : 50시간", "플레티넘 : 100시간", "다이아 : 150시간", "마스터 : 200시간", "그랜드마스터 : 300시간", "챌린져 : 500시간"];

  return (
    <div className="userInfo">
      <div>
        <div>name : {userName}</div>
        <div>email : {email}</div>
        <div>
          <span>비밀번호</span>
          <input type="password" minLength="8" maxLength="20" value={password} onChange={passwordHandler} />
          <input type="password" minLength="8" maxLength="20" value={chkPassword} onChange={chkPasswordHandler} />
          <button onClick={validationPassword}>수정</button>
        </div>
        <div>
          <span onClick={chkGradeList} style={{ cursor: "pointer" }}>
            칭호 : {tags[tags.length - 1]}
          </span>
          <button onClick={chkGradeList}>확인을 누르면 칭호가 튀어나옵니다</button>
        </div>
        {grade && (
          <div>
            <div style={style}>
              <div>
                {allGrade.reverse().map((x, idx) =>
                  tags.includes(x.split(" ")[0]) ? (
                    <div key={idx}>{x}</div>
                  ) : (
                    <div key={idx} style={gradeStyle}>
                      {x}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
