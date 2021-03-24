import "../componentsCss/Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo, setIsLogin, setLogout } from "../actions/userAction";
import { setRecords, axiosData } from "../actions/recordAction";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ModalPage from '../pages/ModalPage'


function Login({ModalHandler}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const githubUrl = "https://github.com/login/oauth/authorize?client_id=deacb4e14d3c7d66ffcf";
  // const [showModal,setShowModal] = useState(false);
  // const googleUrl = 'https://accounts.google.com/o/oauth2/v2/auth'



  // const ModalHandler=()=>{
  //   setShowModal(!showModal)
  // }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    await axios.post("https://localhost:5000/main/login", body, { accept: "application/json", withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data.message === "login successfully") {
          dispatch(axiosData("https://localhost:5000/user/record", setRecords));
          dispatch(setIsLogin());
          dispatch(setUserInfo());
          history.push("/main");
        } else {
          // history.push("/login");
          alert("no member");
        }
      })
      .catch(e=>alert('no member'))
  };
  const guestHandler = (e) => {
    dispatch(setLogout());
    history.push("/welcome");
  };

  return (
    <>
    <div className="LoginBody">
      <section className="LoginSec">
        <form className="LoginDiv" onSubmit={submitHandler}>
          <h1>hello we are TTS</h1>
          <div className="inputLine">
            <input type="text" name="id" id="id" autoComplete="off" onChange={emailHandler} required></input>
            <label htmlFor="id">email</label>
          </div>
          <div className="inputLine">
            <input type="password" name="pw" id="pw" autoComplete="off" onChange={passwordHandler} required></input>
            <label htmlFor="pw">password</label>
          </div>
          <div className="LoginBtn">
            <button type="submit">LOGIN</button>
          </div>
          <div className="LoginBtn">
            <button type="button" onClick={ModalHandler}>SignUp</button>
          </div>
          <div className="SignUpBtn">
            <button type="button" onClick={guestHandler}>
              Guest?
            </button>
          </div>
          <div className="OauthDiv">
            <div className="AuthGithub">
              <a href={githubUrl}>
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
    <>
      {/* <ModalPage showModal={showModal} setShowModal={setShowModal}></ModalPage> */}
    </>
    </>
  );
}

export default Login;
