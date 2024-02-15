import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import Reservation from './Reservation';
import '../css/ReservationCheck.css';
import list from '../img/목록.jpg';
import reservationImg from '../img/펜션1.jpg';
function ReservationCheck() {
//  const [user,setUser] = useState([]);
  const [reservation,setReservation] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [editedUserInfo, setEditedUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  
   useEffect(() => {
    // 세션에 저장된 사용자 이름을 불러오기 위해 서버에 요청 (이메일 로그인)
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8282/userdata', {
          withCredentials: true,
        });
        setUserInfo(res.data);
        setEditedUserInfo(res.data);
        console.log(res.data);
      } catch (err) {
        console.error('로그인 정보를 불러오지 못했습니다', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchReservationData = async () => {
      try{
        const res = await axios.get('http://localhost:8282/reservation/checkAll',{
          withCredentials:true,
        });
        
        setReservation(res.data)
        console.log(res.data)
        
          // console.log('일치하는 데이터가 없습니다.')
       
      }catch (err){
        console.error('예약 정보를 불러오지 못했습니다',err)
      }
    };
    fetchReservationData();
  },[])

  function searchRoom () {
    window.location.href = '/pensionList';
  }

  return (
    <div>
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
             <a href='/reservationCheck'>예약내역</a>
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
       </div>
       </main>
    <div className='reservationCheckDiv'>
      <div>
        <div className='reservationDiv1'> 
          <img src={list} className='listImg' alt='목록'></img><span> 예약 목록</span>
         
        </div>
        <div>
        {/* <section className='reservationCheckSection'>
            <span>이메일 : {reservation.phoneNumber}</span><br /> 
            <ul className='reservationUl'>
                    {reservation.map((reservation) => (
                        // <li key={reservation.id}>
                        //     <p>예약자 번호 : {reservation.phoneNumber}</p>
                        // </li>
                    ))}
                </ul>
            <span>닉네임 : {userInfo.nickname}</span><br />
            <span>펜션 이름 : </span>
            <img src={reservationImg} className="reservationImg" alt="펜션"></img>
        </section> */}
        <br />
        <section className='reservationCheckSection'>
            <span>이메일 : {userInfo.userEmail}</span><br /> 
            <span>닉네임 : {userInfo.nickname}</span><br />
            <span>펜션 이름 : </span><br />
            <span>예약 일짜 :</span>
            <img src={reservationImg} className="reservationImg" alt="펜션"></img>
        </section>
        <br />
        <section>
          <div>
            <button className='addReservationButton' onClick={searchRoom}>새로운 방 찾아보기</button>
          </div>
        
        </section>
        

        </div>
      </div>
    </div>
    </div>
  );
}
export default ReservationCheck;
