import React, { useState, useEffect } from 'react';
import '../css/MyPage.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [editedUserInfo, setEditedUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  //로그인한 사용자 정보 받아오기
  useEffect(() => {
    // 세션에 저장된 사용자 이름을 불러오기 위해 서버에 요청 (이메일 로그인)
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8282/userdata', {
          withCredentials: true,
        });
        setUserInfo(res.data);
        setEditedUserInfo(res.data);
      } catch (err) {
        console.error('로그인 정보를 불러오지 못했습니다', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8282/api/user/update',
        editedUserInfo,
        {
          withCredentials: true,
        }
      );

      setUserInfo(response.data);
      setIsEditing(false);
      alert('회원 정보가 수정되었습니다');
    } catch (error) {
      console.error('사용자 정보를 업데이트하지 못했습니다', error);
    }
  };

  const handleInputChange = (e) => {
    setEditedUserInfo({ ...editedUserInfo, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main id='myPage-layout'>
      <Header />
      <div id='myPage-container'>
        <nav id='myPage-navigation'>
          <ul id='navigation-list'>
            <li id='nav-userInfo'>
              <a href='/mypage/userInfo'>내 정보 관리</a>
            </li>
            <hr />
            <li>
              <a href='/mypage/userInfo'>예약내역</a>
            </li>
            <hr />
            <li>
              <a href='/mypage/userInfo'>찜목록</a>
            </li>
            <hr />
            <li>
              <a href='/mypage/userInfo'>문의내역</a>
            </li>
            <hr />
            <li id='nav-coupon'>
              <a href='/mypage/userInfo'>쿠폰함</a>
            </li>
          </ul>
        </nav>
        {/* 회원 정보 뜨는 곳 */}
        <section id='myPage-content'>
          <p id='content-title'>내 정보 관리</p>
          <br />
          <p>{userInfo.nickname} 님의 회원 정보</p>
          <hr />
          {isEditing ? (
            // 수정하기 버튼 눌렀을 때 나타나는 영역
            <div>
              <label id='user-email-info'>이메일</label>
              <br />
              <input
                name='userEmail'
                id='user-email-edit'
                value={editedUserInfo.userEmail}
                readOnly
              />
              <br />
              <label id='user-nickname-info'>닉네임</label>
              <br />
              <input
                type='text'
                name='nickname'
                id='user-nickname-edit'
                value={editedUserInfo.nickname}
                onChange={handleInputChange}
              />
              <br />
              <label id='user-phone-info'>연락처</label>
              <br />
              <input
                type='text'
                name='phoneNumber'
                id='user-phone-edit'
                value={editedUserInfo.phoneNumber}
                onChange={handleInputChange}
              />
              <br />
              <label id='user-gender-info'>성별</label>
              <br />
              <input id='user-gender-edit' value='로그인한 계정 성별 값' />
              <br />
              <button id='saveEditInfo' onClick={handleSave}>
                변경된 정보 저장
              </button>
            </div>
          ) : (
            // 수정 완료 상태 (DB에 저장된 값)
            <div>
              <label id='user-email-info'>이메일</label>
              <br />
              <input
                name='userEmail'
                id='user-email-value'
                value={userInfo.userEmail}
                readOnly
              />
              <br />
              <label id='user-nickname-info'>닉네임</label>
              <br />
              <input
                id='user-nickname-value'
                value={userInfo.nickname}
                readOnly
              />
              <br />
              <label id='user-phone-info'>휴대폰 번호</label>
              <br />
              <input id='user-phone-value' value={userInfo.phoneNumber} />
              <br />

              <label id='user-gender-info'>성별</label>
              <br />
              <input id='user-gender-value' value={userInfo.gender} />
              <br />
              <button id='edit-button' onClick={handleEdit}>
                회원 정보 수정
              </button>
            </div>
          )}
          <hr style={{ marginTop: '50px' }} />
          <p
            style={{
              float: 'right',
              marginRight: '5px',
              fontSize: 'small',
              color: 'gray',
            }}
          >
            회원 탈퇴
          </p>
        </section>
      </div>
    </main>
  );
}
