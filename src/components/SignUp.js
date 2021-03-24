import "../componentsCss/SignUp.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SignUp() {

    const history = useHistory();
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password!==confirmPassword){
        return alert('비밀번호 확인')
    }

    const body = {
        email,
        password,
        userName
    };
    axios.post("https://localhost:5000/main/signup", body, { accept: "application/json", withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data.message === "signup successfully") {
            alert('가입 완료!!!!!!!!')
            history.push("/");
        }
      })
      .catch(e=>alert('이미 가입했습니다.'))
  };
  

    return (
        <div className="SignUpBody">
      <section className="SignUpSec">
        <form className="SignUpDiv" onSubmit={submitHandler}>
          
          <h1>Sign Up</h1>
          
          
          <div className="SignUpinputLine">
            <input type="text" name="id" id="id" autoComplete="off" onChange={emailHandler} required></input>
            <label htmlFor="id">email</label>
          </div>
          <div className="SignUpinputLine">
            <input type="text" name="naem" id="name" autoComplete="off" onChange={nameHandler} required></input>
            <label htmlFor="name">name</label>
          </div>
          <div className="SignUpinputLine">
            <input type="password" name="pw" id="pw" minLength='8' maxLength='20' autoComplete="off" onChange={passwordHandler} required></input>
            <label htmlFor="pw">password</label>
          </div>
          <div className="SignUpinputLine">
            <input type="password" name="cpw" id="cpw" minLength='8' maxLength='20' autoComplete="off" onChange={confirmPasswordHandler} required></input>
            <label htmlFor="cpw">confirm password</label>
          </div>
          <div className="LoginBtn">
            <button type="submit">Sign Up ?</button>
          </div>
          
          
        </form>
      </section>
    </div>
    )
}

export default SignUp
