import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PenPickLogo from '../img/펜픽로고.png';
import UserImg from '../img/사용자.png';


function Header() {

  const [userEmail, setUserEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //로그인 정보 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8282/userdata', {
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

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8282/logout', null, {
        withCredentials: true
      });
      console.log(response.data);
      alert("로그아웃 되셨습니다");
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  };

  return (
    <div>
      <div id='HeaderBannerImg'>
        <div id='mainPageCenterBox'>
          <nav id='HeaderNav' class='navbar navbar-expand-lg '>
            <div class='container-fluid'>
              <button
                id='smallMenuBar'
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                  <a
                    class='nav-link active'
                    aria-current='page'
                    id='HeaderQnALink'
                    href='/QnA'
                  >
                    고객센터
                  </a>
                  <a
                    class='nav-link active'
                    aria-current='page'
                    id='HeaderEventLink'
                    href='/EventPage'
                  >
                    이벤트
                  </a>
                  <li class='nav-item'>
                    <a
                      id='HeaderCartImg'
                      class='nav-link active'
                      aria-current='page'
                      href='/CartList'
                    >
                      장바구니
                    </a>
                  </li>

                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img id='HeaderUserImg' src={UserImg} alt='사용자' />
                    </a>
                    <ul class='dropdown-menu' id='HeaderDropdownBox'>
                      {isAuthenticated ? (
                        // 로그인 상태에서 보일 카테고리
                        <>
                          <li>
                            <a
                              class='dropdown-item'
                              id='HeaderDropDownLinkMYPAGE'
                              href='/mypage'
                            >
                              마이페이지
                            </a>
                          </li>
                          <li>
                            <button 
                              class='dropdown-item'
                              id='logoutButton' 
                              type="button" 
                              onClick={handleLogout}
                            >
                              로그아웃
                            </button>
                          </li>
                        </>
                      ) : 
                        // 로그아웃 상태에서 보일 카테고리
                        <>
                          <li>
                            <a
                              id='HeaderDropDownLink'
                              class='dropdown-item'
                              href='/login'
                            >
                              로그인
                            </a>
                          </li>
                          <li>
                            <a
                              id='HeaderDropDownLink'
                              class='dropdown-item'
                              href='/signUp'
                            >
                              회원가입
                            </a>
                          </li>
                        </>
                      }
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* 메인페이지 카테고리 */}
          <div id='HeaderBannerLink'>
            <a href='/' id='HeaderMainLink'>
              <img id='HeaderPenPickImg' src={PenPickLogo} alt='펜픽로고'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;