import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/SignUp.css';
import logo from '../img/펜픽로고.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {

    return(
        <div>
            <div id="signUpArea">
                <div id="signUpForm">
                    <div style={{width:'100%', marginBottom:"30px"}}>
                        <p id="title">회원가입</p>
                        <p id="signUpMsg">가입을 위한 필수 정보를 입력해주세요</p>
                    </div>
                    {/* <hr style={{marginBottom:"30px"}}/> */}
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>이메일</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setEmail'
                        type='email'
                        class = 'form-control'
                        placeholder='yourEmail@penpick.co.kr'
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>비밀번호</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setPassword'
                        type='password'
                        class='form-control'
                        placeholder='최소 8자 이상'
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>비밀번호 확인</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='checkPassword'
                        type='password'
                        class='form-control'
                        placeholder='비밀번호 확인'
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>생일</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setBirthday'
                        type='date'
                        data-placeholder='생년월일'
                        class='form-control'
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>성별</label>
                        <div class="dot-badge"></div><br />
                    </div>
                    <div class="form-check form-check-inline" id="female">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">여자</label>
                    </div>
                    <div class="form-check form-check-inline" id="male">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">남자</label>
                    </div><br /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>닉네임</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setNickname'
                        type='text'
                        class='form-control'
                        placeholder='닉네임 설정'
                    /><br />
                    <button id='signUpButton' type="button">Sign Up</button>
                </div>
            </div>
        </div>
    );
}