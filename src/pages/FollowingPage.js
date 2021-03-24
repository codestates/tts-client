import NavBar from '../components/NavBar';
import GuestNavBar from '../components/GuestNavbar';
import { useSelector } from 'react-redux';
import OneFollowing from '../components/OneFollowing';
import '../componentsCss/FollowingPage.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

const api = 'https://localhost:5000/follow'

const FollowingPage = () => {
  const isLogin  = useSelector((s) => s.recordReducer.isLogin);
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);

  const mapOneFollowing = (users, fa) => {
    return users.map((user,idx) => {
      const {email, userName, tag} = user;
      return <OneFollowing 
      fa={fa}
      followHandler={followHandler}
      email={email}
      userName={userName} 
      tag={tag}
      key={idx}
      />
    })
  };

  const getFollowingList = () => {
    axios.get(api + '/get', {accept: 'application/jason', withCredentials: true})
    .then(res => { 
      setLists(mapOneFollowing(res.data.data, 'fas fa-user-minus'));
    })
  }

  const followHandler = (email) => (e) => {
    if (e.target.className === 'fas fa-user-plus followBtn') {
      axios.post(api + '/add', { email }, {accept: 'application/jason', withCredentials: true})
      .then(res => {
        getFollowingList()
        setUsers([])
      })
    } else if (e.target.className === 'fas fa-user-minus followBtn') {
      axios.post(api + '/remove', {email}, {accept: 'application/jason', withCredentials: true})
      .then(res => {
        getFollowingList()
        setUsers([])
      })
    }
  };

  const searchHandler = (e) => {
    const params = { keyword: e.target.value };
    if (e.target.value.length === 0) {
      setUsers([])
    } else {
      axios.post(api + '/search', params, {accept: 'application/jason', withCredentials: true})
      .then(res => {
        setUsers(mapOneFollowing(res.data.data.users, "fas fa-user-plus"))
      })
      .catch(e => setUsers([]));
    }
  };

  useEffect(() => {
    getFollowingList()
  }, [])

  return (
    <div>
      {isLogin ? <NavBar /> :<GuestNavBar /> }
      <div id="followContainer">
        <div className="follow list">
          <div className="sign">Following List</div>
          {lists}
        </div>
        <div className="follow search">
          <div className="sign">Search User</div>
          <input className="followInput" placeholder="email or username" onChange={searchHandler}></input>
          <div className="searchBox">
            {users}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowingPage;