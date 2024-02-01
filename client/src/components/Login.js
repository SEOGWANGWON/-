import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../img/펜픽로고.png';
import axios from 'axios';
import KakaoLogin from 'react-kakao-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import kakaoLoginLogo from '../img/kakao_login_medium_narrow.png';
import Header from './Header';

export default function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  //이메일 로그인 처리 함수
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8282/login',
        { userEmail, password },
        { withCredentials: true }
      );
      console.log(response.data); // 로그인 성공 메시지 또는 실패 메시지
      alert('펜픽에 오신 것을 환영합니다');
      window.location.href = 'http://localhost:3000/';
    } catch (error) {
      console.error('로그인 오류', error);
      alert('로그인 실패');
    }
  };

  //카카오 로그인 처리 함수
  const kakaoLoginSuccess = (res) => {
    // Kakao 로그인 성공 시에 서버로 데이터 전송
    const { access_token } = res.response;

    // 카카오 API를 통해 사용자 정보를 가져오기
    axios
      .get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((userInfoResponse) => {
        //const { email, nickname } = userInfoResponse.data.kakao_account;
        const email = userInfoResponse.data.kakao_account.email;
        const nickname = userInfoResponse.data.properties.nickname;
        console.log('email', email);
        console.log('nickname', nickname);

        // 서버로 access_token , email, nickname 전송
        axios
          .post(
            'http://localhost:8282/api/kakao-login',
            {
              access_token: access_token,
              email: email,
              nickname: nickname,
            },
            {
              withCredentials: true,
            }
          )
          .then((serverResponse) => {
            console.log(serverResponse.data);
            alert('펜픽에 오신 것을 환영합니다');
            window.location.href = 'http://localhost:3000/';
          })
          .catch((error) => {
            console.error(error);
            alert('로그인 실패');
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const kakaoLoginFailure = (err) => {
    console.log(err);
  };

  return (
    <div className='main'>
      <Header />
      <form id='loginForm' method='get' action='/login'>
        <img src={logo} alt='로고' style={{ width: '180px', margin: 'auto' }} />
        <p id='emailLoginTitle'>
          <strong>이메일로 펜픽하기</strong>
        </p>
        <hr style={{ marginBottom: '30px' }} />
        <input
          id='emailInput'
          type='email'
          class='form-control'
          placeholder='yourEmail@penpick.co.kr'
          name='input_id'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <input
          id='passwordInput'
          type='password'
          class='form-control'
          placeholder='password'
          name='input_pw'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button id='loginButton' type='button' onClick={handleLogin}>
          Log In
        </button>
      </form>
      <br />
      <KakaoLogin
        //JS RESTApi key
        token='e37a82e7e5d11141f3bac76816aec5e7'
        onSuccess={kakaoLoginSuccess}
        onFailure={kakaoLoginFailure}
        render={(props) => (
          <button
            alt='kakaologin'
            onClick={props.onClick}
            style={{
              border: 'none',
              background: '#FEE500',
              width: '400px',
              borderRadius: '7px',
            }}
          >
            <img src={kakaoLoginLogo} alt='카카오로그인' />
          </button>
        )}
      />
      <div id='signUpMessage'>
        <p>계정이 없으신가요?</p>
        <a href='/signUp' style={{ color: 'darkBlue' }}>
          이메일로 회원가입
        </a>
      </div>
    </div>
  );
}
