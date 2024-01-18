import '../css/HeaderEdit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React, { useState } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';
import PenPickLogo from '../img/펜픽로고.png';
import UserImg from '../img/사용자.png';
function Header() {
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
                      class='nav-link dropdown-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img id='HeaderUserImg' src={UserImg} alt='사용자' />
                    </a>
                    <ul class='dropdown-menu' id='HeaderDropdownBox'>
                      <li>
                        <a
                          id='HeaderDropDownLink'
                          class='dropdown-item'
                          href='/login'
                        >
                          로그인/회원가입
                        </a>
                      </li>
                      <li>
                        <a
                          id='HeaderDropDownLink'
                          class='dropdown-item'
                          href='#'
                        >
                          비회원 예약조회
                        </a>
                      </li>
                      <li>
                        <a
                          class='dropdown-item'
                          id='HeaderDropDownLinkMYPAGE'
                          href='/mypage/userInfo'
                        >
                          마이페이지
                        </a>
                      </li>
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
      <hr id="HeaderHr"/>
    </div>
  );
}

export default Header;