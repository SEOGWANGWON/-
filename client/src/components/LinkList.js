import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import MyPage from './MyPage';
import PensionMainPage from './PensionMainPage';
import PensionList from './PensionList';
import EventPage from './EventPage';
import DetailsPage from './DetailsPage';
import PensionMap from './PensionMap';
import Chat from './Chat';



function Link() {

  const [userEmail, setUserEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8282/userdata', {
          withCredentials: true,
        });
        setUserEmail(res.data.userEmail);
        setAuthentication(res.data.userEmail);
      } catch (err) {
        console.error('로그인 정보가 존재하지 않습니다', err);
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
      
      <Routes>
        {/*로그아웃 상태에서만 유효한 경로*/}
        {!isAuthenticated && (
          <>
            {/* 로그인 및 회원가입 */}
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
          </>
        )}
        {/*로그인 상태에서만 유효한 경로 */}
        {isAuthenticated && (
          <>
            {/* 마이페이지 */}
            <Route path='/mypage' element={<MyPage/>} />
          </>
        )}
        {/* 로그인 여부 상관 없이 이용 가능한 페이지 */}
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />} />
        {/*펜션 검색 결과 링크*/}
        <Route path='/PensionList' element={<PensionList />} />
        {/*이벤트 링크*/}
        <Route path='/EventPage' element={<EventPage />} />
        {/*펜션 상세 페이지 링크*/}
        <Route path='/DetailsPage' element={<DetailsPage />}/>
        {/* 지도 링크 */}
        <Route path='/PesionMap' element={<PensionMap />}/>
        {/* 채팅하기 */}
        <Route path='/Chat' element={<Chat />}/>
      </Routes>
    </Router>
  );
}

export default Link;