import React from "react";
import '../css/MyPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyPage(){

    return(
        <main id="myPage-layout">
            <nav id="myPage-navigation">
                <ul id="navigation-list">
                    <li id="nav-userInfo">
                        <a href="/mypage/userInfo">내 정보 관리</a>
                    </li>
                    <hr />
                    <li>
                        <a href="/mypage/userInfo">예약내역</a>
                    </li>
                    <hr />
                    <li>
                        <a href="/mypage/userInfo">찜목록</a>
                    </li>
                    <hr />
                    <li>
                        <a href="/mypage/userInfo">문의내역</a>
                    </li>
                    <hr />
                    <li id="nav-coupon">
                        <a href="/mypage/userInfo">쿠폰함</a>
                    </li>
                </ul>
            </nav>
            <section id="myPage-content">
                <p id="content-title">내 정보 관리</p><br />
                <p>김칸쵸/로그인계정닉네임/ 님의 회원 정보</p>
                <hr />
                <label id="user-email-info">이메일</label><br />
                <input 
                    id="user-email-value"
                    value="로그인한 계정 이메일 값 **수정 불가"
                /><br />
                <label id="user-nickname-info">닉네임</label><br />
                <input 
                    id="user-nickname-value"
                    value="로그인한 계정 닉네임 값"
                /><br />
                <label id="user-phone-info">휴대폰 번호</label><br />
                <input 
                    id="user-phone-value"
                    value="로그인한 계정 닉네임 값"
                /><br />
                <label id="user-birth-info">생일</label><br />
                <input 
                    id="user-birth-value"
                    value="로그인한 계정 생년월일 값"
                /><br />
                <label id="user-gender-info">성별</label><br />
                <input 
                    id="user-gender-value"
                    value="로그인한 계정 성별 값"
                /><br />
                <hr style={{marginTop:"50px"}}/>
                <p style={{float:"right", marginRight:"5px", fontSize:"small", color:"gray"}}>회원 탈퇴</p>
            </section>
        </main>
    )
}