import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route  exact path="/" component={LoginPage}/>
      <Route  path="/main" component={MainPage}/>
      <Route  path="/welcome" component={WelcomePage}/>
      <Route  path="/signup" component={SignupPage}/>
      <Route  path="/mypage" component={MyPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
