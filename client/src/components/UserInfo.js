import React from "react";
import '../css/UserInfo.css';
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserInfo(){

    return(
        <div className="row">
            <div className="menuBar col-md-3">
                <Card className='card'> 
                    <a href='/mypage/userInfo'>내 정보</a>
                    <a href='/mypage/reservation'>예약내역</a>
                    <a href='/mypage/likes'>찜 목록</a>
                    <a href='/mypage/inquiry'>문의 내역</a>
                    <a href='/mypage/coupons'>쿠폰함</a>
                </Card>
            </div>
            <div className="userInfo col-md-6">
                <h4>내 정보 관리</h4>
                <p>회원 정보</p>
                <label>닉네임</label>
                <input value={"회원닉네임 받아오기"} /><br />
                <label>계정</label>
                <input value={"이메일 값 띄우기 수정불가"} /><br />
                <label>연락처</label>
                <input value={"회원연락처 받아오기"} /><br />
                <label>생년월일</label>
                <input value={"회원 생년월일 받아오기"} /><br />
                <label>성별</label>
                <input value={"회원 성별 받아오기"} />
            </div>
        </div>
    )
}