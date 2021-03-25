import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../componentsCss/UserInfo.css";
import GradeModal from "./GradeModal";

const dotenv = require("dotenv");
dotenv.config();
const api = process.env.REACT_APP_SERVER_ADDRESS || "https://localhost:5000";

function UserInfo() {
  const userInfo = useSelector((state) => state.recordReducer).user;
  const { email, userName, tags } = userInfo;
  const [gradeModal, setGradeModal] = useState(false);
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
    else if (chkGithubMail === "github.com")
      alert("github 간편로그인은 비밀번호를 바꿀수 없습니다");
    else {
      await axios
        .post(api + "/user/userinfo", newPassword, {
          accept: "application/json",
          withCredentials: true,
        })
        .then((res) => {
          if (
            res.data.message === "Your password has been changed successfully"
          ) {
            setPassword("");
            setChkPassword("");
            alert("성공적으로 변경 완료 되었습니다");
          }
        })
        .catch((e) => {
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
        <div className="userInfo-password-flex">
          <span>Password</span>
          <button onClick={changePasswordBtnHandler}>Edit</button>
        </div>
        {passwordBtnHandler && (
          <div className="userInfo-password-modal">
            <div className="userInfo-password-modal-input">
              <input
                type="password"
                minLength="8"
                maxLength="20"
                value={password}
                onChange={passwordHandler}
                placeholder="8 charactors or more"
              />
              <input
                type="password"
                minLength="8"
                maxLength="20"
                value={chkPassword}
                onChange={chkPasswordHandler}
                placeholder="Confirm"
              />
            </div>
            <div>
              <button onClick={validationPassword}>Request</button>
            </div>
          </div>
        )}
      </div>
      <div onClick={chkGradeList} className="userInfo-grade">
        <div className="userInfo-grade-flex">
          <span onClick={chkGradeList}>Grade : {tags[tags.length - 1]}</span>
          <button onClick={chkGradeList}>Check All Grade</button>
        </div>
        {grade && (
          <GradeModal gradeModal={gradeModal} setGradeModal={setGradeModal} />
        )}
      </div>
    </div>
  );
}

export default UserInfo;
