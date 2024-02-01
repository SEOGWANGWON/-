import React from 'react';
import Header from './Header';
import '../css/EventPage.css';
import Calendar from '../img/달력.png';
import UserImg from '../img/사용자.png';

function EventPage() {
  return (
    <div>
      <Header />
      <div id='container'>
        <div className='row'>
          <div className='col-md-3' id='EventCategory'>
            <a href='EventPage'>이벤트</a>
            <br></br>
            <a href='Gameland'>게임랜드</a>
          </div>
          <div className='col-md-9' id='EventMain'>
            <h5>이벤트</h5>
            <p id='EventContent' href='/'>
              쿠폰 사용 방법
            </p>
            <br />
            <a id='EventContent' href='/'>
              매일매일 선물이 쏟아진다! 출석체크 이벤트
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;