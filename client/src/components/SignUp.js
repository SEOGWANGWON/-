import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/SignUp.css';
import logo from '../img/펜픽로고.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {

    return(
        <div>
            <div id="signUpArea">
                <img src={logo} alt="로고" style={{width:'180px'}}/>
                <p id="signUpMsg">가입을 위한 필수 정보를 입력해주세요</p>
                <form id="signUpForm" method="get" action="/login">
                    <hr style={{marginBottom:"30px"}}/>
                    <div>
                        <label style={{float:"left"}}>이메일</label>
                        <span data-v-a46ad18c="" data-v-40d5408d="" class="dot-badge"></span>
                    </div>
                    <input 
                        id='setEmail'
                        type='email'
                        class = 'form-control'
                        placeholder='yourEmail@penpick.co.kr'
                    /><br />
                    <input 
                        id='setPassword'
                        type='password'
                        class='form-control'
                        placeholder='최소 8자 이상'
                    /><br />
                    <input 
                        id='checkPassword'
                        type='password'
                        class='form-control'
                        placeholder='비밀번호 확인'
                    /><br />
                    <input 
                        id='setBirthday'
                        type='date'
                        class='form-control'
                    /><br />
                    <ul>
                    
                    </ul>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">여자</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">남자</label>
                    </div><br /><br />
                    <input 
                        id='setNickname'
                        type='text'
                        class='form-control'
                        placeholder='닉네임 설정'
                    /><br />
                    <button id='signUpButton' type="button">Log In</button>
                </form>
            </div>
        </div>
    );
}