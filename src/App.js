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

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact  path="/" component={MainPage}/>
      <Route  path="/login" component={LoginPage}/>
      <Route  path="/signup" component={SignupPage}/>
      <Route  path="/mypage" component={MyPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
