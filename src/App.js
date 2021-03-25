import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLogin, setUserInfo} from './actions/userAction'
import { setIsLoading } from './actions/LoadingAction'
import axios from 'axios'
import React,{ useEffect } from "react";
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import ModalPage from './pages/ModalPage'
import MyPage from './pages/MyPage'
import WelcomePage from './pages/WelcomePage'
import FollowingPage from './pages/FollowingPage'
import Loading from './pages/Loading'
const dotenv = require('dotenv');
dotenv.config();
const api = process.env.REACT_APP_SERVER_ADDRESS || "https://localhost:5000";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.recordReducer);
  const getAccessToken = (authorizationCode)=>{
    axios.post(api + '/main/oauth/accesstoken', { authorizationCode: authorizationCode,accept:'application/json',withCredentials:true})
    .then(res=> {
      return res.data.data.accessToken
    }).then(accessToken => {
      getUserInfo(accessToken);
    }).catch(e => dispatch(setIsLoading(false)))
  }
  const getUserInfo = (accessToken) => {
    axios
      .get("https://api.github.com/user", { headers: { authorization: `token ${accessToken}`, accept: "application/json" } })
      .then((res) => {
        const { login, id, name } = res.data;
        const param = { email: `${login}@github.com`, password: id, userName: name ? name : login };
        axios
          .post(api + "/main/signup", param, { accept: "application/json" })
          .catch((e) => console.log("이미 가입된 이메일"))
          .finally((e) => {
            axios
              .post(api + "/main/login", param, { accept: "application/json", withCredentials: true })
              .then((res) => {
                dispatch(setIsLogin());
                dispatch(setUserInfo());
              })
              .then((d) => {
                dispatch(setIsLoading(false));
              });
          });
      })
      .catch((e) => {
        alert("OAuth 요청에 실패하였습니다.");
        dispatch(setIsLoading(false));
      });
  };
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      dispatch(setIsLoading(false));
      getAccessToken(authorizationCode)
    }
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <Router>
    <div>
      <Switch>
      <Route  exact path="/" component={LoginPage}/>
      <Route  path="/follow" component={FollowingPage}/>
      <Route  path="/main" component={MainPage}/>
      <Route  path="/welcome" component={WelcomePage}/>
      <Route  path="/signup" component={ModalPage}/>
      <Route  path="/mypage" component={MyPage}/>
      </Switch>
    </div>
  </Router>
  );
}
export default App;
