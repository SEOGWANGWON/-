import React, {useState, useEffect} from "react";
import '../css/MyPage.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyPage(){

    const[data, setData] = useState([]);

    const [userEmail, setUserEmail] = useState('');


    //전체 사용자 받아오기
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const res = await axios.get('http://localhost:8080/api/user',{
                    withCredentials: true,
                });
                setData(res.data);
            } catch(error) {
                console.log(error);
            }
        };

        fetchData();

    },[]);

    //로그인한 사용자 정보 받아오기
    useEffect(() => {
        // 세션에 저장된 사용자 이름을 불러오기 위해 서버에 요청 (이메일 로그인)
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/userdata',{
                    withCredentials: true
                });
                setUserEmail(res.data.userEmail);
            } catch (err) {
                console.error('세션 데이터 불러오기 실패', err);
            }
        };
        fetchUserData();
    }, []);

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
                <p>{userEmail} 님의 회원 정보</p>
                <hr />
                <label id="user-email-info">이메일</label><br />
                <input 
                    id="user-email-value"
                    value={userEmail}
                    readOnly
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