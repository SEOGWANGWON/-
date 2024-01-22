import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PensionMainPage from './PensionMainPage';
import axios from 'axios';
import Header from './HeaderEdit';
import Login from './Login';
import SignUp from './SignUp';
import MyPage from './MyPage';


function Link() {

  const [userEmail, setUserEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/userdata', {
          withCredentials: true,
        });
        setUserEmail(res.data.userEmail);
        setAuthentication(res.data.userEmail);
      } catch (err) {
        console.error('세션 데이터 불러오기 실패', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const setAuthentication = (userEmail) => {
    if (userEmail !== '') {
      setIsAuthenticated(true);
    }
  };

  // 초기 로딩 중에는 아무것도 반환X
  if (isLoading) {
    return null;
  }
  
  return (
    <Router>
      <Header />
      <Routes>
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />} />
        {!isAuthenticated && (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
          </>
        )}
        <Route path='/mypage/userInfo' element={<MyPage/>} />
      </Routes>
    </Router>
  );
}

export default Link;