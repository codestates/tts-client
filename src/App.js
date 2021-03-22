import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setIsLogin} from './actions/userAction'
import axios from 'axios'
import React,{useState, useEffect} from "react";
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import WelcomePage from './pages/WelcomePage'
import {useSelector} from 'react-redux'

 

function App() {
  const dispatch = useDispatch()
  const [accessToken,setAccessToken] = useState('') 
  const [userInfo,setUserInfo] = useState({})


  const getAccessToken =(authorizationCode)=>{
    axios.post('http://localhost:5000/callback', { authorizationCode: authorizationCode })
    .then(res=> setAccessToken(res.data.accessToken))
  }

  const getUserInfo = ()=>{
    axios.get('https://api.github.com/user',{headers:{authorization:`token ${accessToken}`}})
    .then(data=>{
      dispatch(setIsLogin())
      setUserInfo(data.data)
    })
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    if (authorizationCode) {
      getAccessToken(authorizationCode)
    }
  }, []);

  useEffect(()=>{
    getUserInfo()
  },[accessToken])


  useEffect(()=>{
    
  },[useSelector(s=>s.userReducer.isLogin)])



  return (
    <Router>
    <div>
      <Switch>
      <Route  exact path="/" component={LoginPage}/>
      <Route  path="/main" component={MainPage}/>
      <Route  path="/welcome" render={() => <WelcomePage userInfo={userInfo} />}/>
      <Route  path="/signup" component={SignupPage}/>
      <Route  path="/mypage" component={MyPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
