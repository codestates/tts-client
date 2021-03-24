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
  const [passwordBtnHandler, setPasswordBtnHandler] = useState(false);
  const chkGithubMail = email.split("@")[1];
  const newPassword = { newPassword: password };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const chkPasswordHandler = (e) => {
    setChkPassword(e.target.value);
  };

  const validationPassword = async () => {
    if (password.length < 8) alert("8자 이상 20자 이하로 입력해주세요");
    else if (password.length > 20) alert("8자 이상 20자 이하로 입력해주세요");
    else if (password !== chkPassword) alert("비밀번호가 일치하지 않습니다");
    else if (chkGithubMail === "github.com") alert("github 간편로그인은 비밀번호를 바꿀수 없습니다");
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

  const allGrade = ["비기너 : 0시간", "아이언 : 5시간", "브론즈 : 10시간", "실버 : 25시간", "골드 : 50시간", "플레티넘 : 100시간", "다이아 : 150시간", "마스터 : 200시간", "그랜드마스터 : 300시간", "챌린져 : 500시간"];

  const changePasswordBtnHandler = () => {
    setPasswordBtnHandler(passwordBtnHandler === false ? true : false);
  };

  return (
    <div className="userInfo">
      <div className="userInfo-name-email">
        <div>Name : {userName}</div>
        <div>e-mail : {email}</div>
      </div>
      <div className="userInfo-password">
        <span>Password</span>
        <button onClick={changePasswordBtnHandler}>Edit</button>
        {passwordBtnHandler && (
          <div>
            <input type="password" minLength="8" maxLength="20" value={password} onChange={passwordHandler} />
            <input type="password" minLength="8" maxLength="20" value={chkPassword} onChange={chkPasswordHandler} />
            <button onClick={validationPassword}>요청</button>
          </div>
        )}
      </div>
      <div onClick={chkGradeList} className="userInfo-grade">
        <div>
          <span onClick={chkGradeList}>Grade : {tags[tags.length - 1]}</span>
          <button onClick={chkGradeList}>확인을 누르면 칭호가 튀어나옵니다</button>
        </div>
        {grade && (
          <div>
            <div className="userInfo-grade-modal">
              <div>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
