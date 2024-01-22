import React, {useState} from 'react';
import '../css/Login.css';
import logo from '../img/펜픽로고.png';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        try {
            const response = await axios.post('http://localhost:8080/login', { userEmail, password }, { withCredentials: true });
            console.log(response.data); // 로그인 성공 메시지 또는 실패 메시지
            alert("펜픽에 오신 것을 환영합니다");
            window.location.href="http://localhost:3000/";
        } catch (error) {
            console.error('로그인 오류', error);
            alert("로그인 실패");
        }
    };
    
    return(
        <div className='main'>
            <form id="loginForm" method="get" action="/login">
            <img src={logo} alt="로고" style={{width:'180px', margin:'auto'}}/>
            <p id="emailLoginTitle"><strong>이메일로 펜픽하기</strong></p>
                <hr style={{marginBottom:"30px"}}/>
                <input 
                    id='emailInput'
                    type='email'
                    class = 'form-control'
                    placeholder='yourEmail@penpick.co.kr'
                    name= 'input_id'
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                /><br />
                <input 
                    id='passwordInput'
                    type='password'
                    class = 'form-control'
                    placeholder='password'
                    name='input_pw'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /><br />
                <button id='loginButton' type="button" onClick={handleLogin}>Log In</button>
            </form>
            <div id="signUpMessage">
                <p>계정이 없으신가요?</p>
                <a href="/signUp">이메일로 회원가입</a>
            </div>
        </div>
    )
}