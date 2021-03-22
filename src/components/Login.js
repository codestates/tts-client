import "../componentsCss/Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../actions/userAction";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    dispatch(setUserInfo(body)).then((res) => {
      if (res.payload.message === "login successfully") {
        history.push("/main");
      } else {
        alert("no member");
      }
    });
  };

  const guestHandler = (e) => {
    history.push("/main");
  };

  return (
    <div className="LoginBody">
      <section className="LoginSec">
        <form className="LoginDiv" onSubmit={submitHandler}>
          <h1>hello we are TTS</h1>
          <div className="inputLine">
            <input type="text" name="id" id="id" autoComplete="off" onChange={emailHandler} required></input>
            <label for="id">email</label>
          </div>
          <div className="inputLine">
            <input type="password" name="pw" id="pw" autoComplete="off" onChange={passwordHandler} required></input>
            <label for="pw">password</label>
          </div>
          <div className="LoginBtn">
            <button type="submit">LOGIN</button>
          </div>
          <div className="LoginBtn">
            <button type="button">SignUp</button>
          </div>
          <div className="SignUpBtn">
            <button type="button" onClick={guestHandler}>
              Guest?
            </button>
          </div>
          <div className="OauthDiv">
            <div className="AuthGithub">
              <a href="/#">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="or">or</div>
            <div className="AuthGoogle">
              <a href="/#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
