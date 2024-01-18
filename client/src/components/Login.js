import React, {useState} from 'react';
import '../css/Login.css';
import logo from '../img/펜픽로고.png';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
    
    return(
        <div className='main'>
            <img src={logo} alt="로고" style={{width:'180px', margin:'auto'}}/>
            <form id="loginForm" method="get" action="/login">
            <h3 style={{marginRight:"180px"}}><strong>이메일로 펜픽하기</strong></h3>
                <hr style={{marginBottom:"30px"}}/>
                <input 
                    id='emailInput'
                    type='email'
                    class = 'form-control'
                    placeholder='yourEmail@penpick.co.kr'
                    name= 'input_id'
                    // value = {inputId}
                    // onChange={handleInputId}
                /><br />
                <input 
                    id='passwordInput'
                    type='password'
                    class = 'form-control'
                    placeholder='password'
                    name='input_pw'
                    // value={inputPw}
                    // onChange={handelInputPw}
                /><br />
                <button id='loginButton' type="button">Log In</button>
            </form>
            <div id="signUpMessage">
                <p>계정이 없으신가요?</p>
                <a href="/signUp">이메일로 회원가입</a>
            </div>
        </div>
    )
}