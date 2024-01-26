import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/cart.css";
import { useNavigate } from "react-router-dom";

export default function FreshOrder() {
  const navigate = useNavigate();

  //사용자
  const [user, setUser] = useState([]);
  //카트아이템
  const [cartItems, setcartitems] = useState([
    {
      id: 0,
      item_num: 0,
      item_name: "상추",
      item_price: 10000,
      item_count: 2,
      fresh_cartitem_num: 0,
    },
    {
      id: 1,
      item_num: 1,
      item_name: "삼겹살",
      item_price: 35000,
      item_count: 6,
      fresh_cartitem_num: 1,
    },
  ]);
  //예약
  const [reservation, setReservation] = useState([]);

  const [orders, setorders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    item_count: "",
    item_name: "",
    item_price: "",
    item_total_price: "",
    fresh_cartitem_num: "",
    id: "",
    item_num: "",
  });

  const [total, setTotal] = useState(0);

  //카트리스트 불러오기
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const regCart = await axios.get(
          "http://localhost:8282/freshCart/user_num"
        );
        setcartitems(regCart.data);
        console.log(regCart.data);
      } catch (error) {
        console.log("카트를 불러오지 못했습니다.", error);
      }
    };
    // fetchCartData();
  }, []);

  //예약 불러오기
  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const getReservation = await axios.get(
          "http://localhost:8282/freshorder/user_num"
        );
        setcartitems(getReservation.data);
        console.log(getReservation.data);
      } catch (error) {
        console.log("카트를 불러오지 못했습니다.", error);
      }
    };
    // fetchReservationData();
  }, []);

  //로그인한 사용자 정보 받아오기
  useEffect(() => {
    // 세션에 저장된 사용자 이름을 불러오기 위해 서버에 요청 (이메일 로그인)
    const fetchUserCartData = async () => {
      try {
        const res = await axios.get("http://localhost:8282/userdata", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.error("세션 데이터 불러오기 실패", err);
      }
    };
    // fetchUserCartData();
  }, []);

  useEffect(() => {
    let t = 0;

    cartItems.forEach(({ item_price, item_count }) => {
      t += item_price * item_count;
    });

    setTotal(t);
  }, []);

  //주문하기
  const handleAddOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8282/freshorder/add",
        newOrder,
        { withCredentials: true }
      );
      setorders((prevOrder) => [...prevOrder, response.data]);
    } catch (error) {
      navigate("/FinishOrder");
      console.log("error : ", error);
    }
  };

  return (
    <div>
      <div className="logo__container">
        <a href="/" className="logo">
          <img src="/assets/펜픽로고.png" alt="logo" />
        </a>
        <h1 className="header">PENPICK FRESH</h1>
      </div>
      <div className="navigation__container">
        <ul className="navigation">
          <li>홈</li>
          <li>물품 리스트</li>
          <li>장바구니</li>
          <li>결제</li>
        </ul>
        <a href="/FreshOrder" className="cart">
          <img src="/assets/장바구니.png" alt="cart" />
        </a>
      </div>
      <div className="cart__list__container">
        <h1>장바구니 목록</h1>
        <ul className="cart__list">
          {cartItems.map((cartitem) => (
            <li key={cartitem.id} className="cart__item">
              <div>
                {/* 사진 */}
                <div
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#e0e0e0",
                  }}
                />
              </div>
              <div>
                {/* 이름 */}
                {cartitem.item_name}
              </div>
              <div>
                {/* 개당 가격 */}
                {cartitem.item_price}원
              </div>
              <div>
                {/* 개수 */}
                {cartitem.item_count}개
              </div>
              <div>
                {/* 해당 물품의 총 가격 */}
                {cartitem.item_price * cartitem.item_count}원
              </div>
              {/* <div>
                <input
                  type="hidden"
                  name="item_name"
                  value={cartitem.item_name}
                />
                <input
                  type="hidden"
                  name="item_price"
                  value={cartitem.item_price}
                />
                <input
                  type="hidden"
                  name="item_total_price"
                  value={cartitem.item_price * cartitem.item_count}
                />
                <input
                  type="hidden"
                  name="fresh_cartitem_num"
                  value={cartitem.fresh_cartitem_num}
                />
              </div>
              <input type="hidden" name="id" value={user.id} />
              <input
                type="hidden"
                name="item_total_price"
                value={cartitem.item_num}
              /> */}
            </li>
          ))}
        </ul>
        {/* <div>
          <input type="radio" name="res_num" value={reservation.res_num} />
        </div> */}
      </div>
      <div className="divider" />
      <div className="cart__footer">
        <div />
        <div>
          <p>총 가격 : {total}원</p>
          <button onClick={handleAddOrder}>결제하기</button>
        </div>
      </div>
    </div>
  );
}
