import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PensionMainPage from './PensionMainPage';
import Header from './Header';
import SignUp from './Login';
//import Mypage from './MyPage';
//import PensionList from './PensionList';
//import Resevation from './Resevation';
//import QnA from './QnA';
//import CartList from './CartList';
// import EventPage from './EventPage';

function Link() {
  return (
    <Router>
      <Header />
      <Routes>
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />} />
        <Route path='/login' element={<SignUp />} />
        {/*마이페이지 링크*/}
        {/* <Route path='/Mypage' element={<Mypage />}></Route> */}
        {/*펜션목록 링크*/}
        {/* <Route path='/PensionList' element={<PensionList />}></Route> */}
        {/*예약페이지 링크*/}
        {/* <Route path='/Resevation' element={<Resevation />}></Route> */}
        {/*문의하기 링크*/}
        {/* <Route path='/QnA' element={<QnA />}></Route> */}
        {/*장바구니 링크*/}
        {/* <Route path='/CartList' element={<CartList />}></Route> */}
        {/*이벤트 링크*/}
        {/* <Route path='EventPage' element={<EventPage />}></Route> */}
      </Routes>
    </Router>
  );
}
export default Link;
