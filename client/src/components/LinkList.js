import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PensionMainPage from './PensionMainPage';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import UserInfo from './UserInfo';


function Link() {
  return (
    <Router>
      <Header />
      <Routes>
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/mypage/userInfo' element={<UserInfo/>} />
      </Routes>
    </Router>
  );
}
export default Link;
