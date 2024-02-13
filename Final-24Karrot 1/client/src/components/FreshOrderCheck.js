import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import axios from "axios";
import Reservation from "./Reservation";
import "../css/ReservationCheck.css";
import list from "../img/목록.jpg";
import reservationImg from "../img/펜션1.jpg";

function FreshOrderCheck() {
  const [order, setOrder] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:8282/userdata", {
          withCredentials: true,
        });
        setUserInfo(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("로그인 정보를 불러오지 못했습니다", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userInfo.id) {
      const fetchOrderData = async () => {
        try {
          const getOrder = await axios.get(
            "http://localhost:8282/freshorder/FreshOrderItemIds",
            {
              withCredentials: true,
              params: {
                id: userInfo.id,
              },
            }
          );
          setOrder(getOrder.data);
          console.log("프레쉬 주문 데이터:", getOrder.data);
        } catch (error) {
          console.error("프레쉬 주문 데이터를 불러오는 중 에러 발생:", error);
        }
      };
      fetchOrderData();
    }
  }, [userInfo]);

  return (
    <div>
      <main id="myPage-layout">
        <Header />
        <div id="myPage-container">
          <nav id="myPage-navigation">
            <ul id="navigation-list">
              <li id="nav-userInfo">
                <a href="/mypage">내 정보 관리</a>
              </li>
              <hr />
              <li>
                <a href="/reservationCheck">예약내역</a>
              </li>
              <hr />
              <li>
                <a href="/freshOrderCheck">프레쉬내역</a>
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
        </div>
      </main>
      <div className="reservationCheckDiv">
        <div>
          <div className="reservationDiv1">
            <img src={list} className="listImg" alt="목록" />
            <span> 예약 목록</span>
          </div>
          <div>
            <span style={{ marginLeft: 20 }}>
              {userInfo.nickname}님의 예약 정보
            </span>
            <br />
            <section className="orderCheckSection">
              <ul className="order_list">
                {order.map((orderItem) => (
                  <li key={orderItem.resnum}>
                    <p>
                      물품 이름{" "}
                      <span style={{ marginLeft: 50 }}>
                        {orderItem.itemName}
                      </span>
                      <span style={{ marginRight: 50, marginLeft: 50 }}>
                        {orderItem.itemCount} 개{" "}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {orderItem.item_Total_Price}원
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreshOrderCheck;
