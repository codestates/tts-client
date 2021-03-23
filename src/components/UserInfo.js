import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
  const userInfo = useSelector((state) => state.recordReducer).user;
  const { email, userName, tags } = userInfo;
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
          <button>수정</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
