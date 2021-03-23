import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setRecords, axiosData } from "../actions/recordAction";
import { useDispatch } from "react-redux";
import axios from "axios";

function UserInfo() {
  const userInfo = useSelector((state) => state.recordReducer).user;
  const { email, userName, tags } = userInfo;
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const chkPasswordHandler = (e) => {
    setChkPassword(e.target.value);
  };
  console.log(password);
  console.log(chkPassword);

  const newPassword = { newPassword: password };

  const validationPassword = async () => {
    // console.log(password);
    // console.log(chkPassword);
    if (password.length < 8) alert("8자 이상 20자 이하로 입력해주세요");
    else if (password.length > 20) alert("8자 이상 20자 이하로 입력해주세요");
    else if (password !== chkPassword) alert("비밀번호가 일치하지 않습니다");
    else {
      await axios
        .post("https://localhost:5000/user/userinfo", newPassword, { accept: "application/json", withCredentials: true })
        .then((res) => {
          console.log(res);
          if (res.data.message === "Your password has been changed successfully.") {
            setPassword("");
            setChkPassword("");
          } else if (res.data.message === "Same password as before") {
            alert("기존 비밀번호와 달라야 합니다");
          } else {
            alert("세션이 만료되었습니다. 다시 로그인 해주세요");
          }
        })
        .catch((e) => {
          // ! 에러 메세지 확인
          //  else if (res.data.message === "Same password as before") {
          //   alert("기존 비밀번호와 달라야 합니다");
          // } else {
          //   alert("세션이 만료되었습니다. 다시 로그인 해주세요");
          // }
          console.log(e);
        });
    }
  };

  return (
    <div>
      <div>
        <div>name : {userName}</div>
        <div>email : {email}</div>
        <div>
          <span>칭호 : {tags.map((x) => x)} (모달)</span>
          <button>확인</button>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" minlength="8" maxLength="20" onChange={passwordHandler} autoComplete="new-password" autocomplete="false" />
          <input type="password" minLength="8" maxLength="20" onChange={chkPasswordHandler} autoComplete="off" />
          <button onClick={validationPassword}>수정</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
