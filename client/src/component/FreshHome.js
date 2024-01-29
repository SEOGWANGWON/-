import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/reset-css.css";
import "../css/logo.css";
import "../css/navigation.css";
import "../css/item.css";

export default function FreshHome() {
  const [selectedValues, setSelectedValues] = useState([]);
  //사용자 불러오기
  const [user, setUser] = useState([]);
  //프레쉬 아이템
  const [freshitems, setfreshitems] = useState([]);

  //주문 아이템
  const [newOrder, setNewOrder] = useState({
    item_count: "",
    item_name: "",
    item_price: "",
    item_total_price: "",
    id: "",
    item_num: "",
  });

  //프레쉬 아이템 불러오기
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8282/productItem/list"
        );
        setfreshitems(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("데이터를 불러오지 못했습니다.", error);
      }
    };
    fetchItemData();
  }, []);

  //props로 예약정보를 넘겨 받아야함

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
    fetchUserCartData();
  }, []);

  //주문하기
  const registerAddOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8282/freshorder/add",
        { ...newOrder },
        { withCredentials: true }
      );
      //   setorders((prevOrder) => [...prevOrder, response.data]);
      setNewOrder({
        item_count: "",
        item_name: "",
        item_price: "",
        item_total_price: "",
        id: "",
        item_num: "",
      });
      console.log("1", newOrder);
      console.log("2", selectedValues);
    } catch (error) {
      console.error("데이터 저장오류", error);
    }
  };
  //기존 아이템정보 집어넣기
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    //체크여부 확인
    const isChecked = event.target.checked;

    //체크가 되어있다면
    if (isChecked) {
      setSelectedValues((prevValues) => [...prevValues, value]);

      //체크가 안되어있다면
    } else {
      setSelectedValues((prevValues) => prevValues.filter((v) => v !== value));
    }
  };
  //갯수 조정
  const orderhandleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prevCartitem) => ({ ...prevCartitem, [name]: value }));
  };

  return (
    <div>
      <div className="logo__container">
        <a href="/" className="logo">
          <img src="../assets/펜픽로고.png" alt="logo" />
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
      <div className="list">
        <h1>물품 리스트</h1>
        <ul className="item__container">
          {freshitems.map((freshitem) => (
            <li key={freshitem.item_num} className="item">
              {/* 사진 */}
              <div
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "#e0e0e0",
                }}
              />
              {/* 설명 */}
              <div className="description">
                {/* 정보 */}
                <div className="infomation">
                  {freshitem.item_name}
                  <input
                    type="checkbox"
                    name="item_name"
                    value={freshitem.item_name}
                    onChange={handleCheckboxChange}
                  />
                  <br />
                  {freshitem.item_price}원<br />
                  <label>
                    <input
                      type="checkbox"
                      name="item_num"
                      value={freshitem.item_num}
                      onChange={handleCheckboxChange}
                    ></input>
                  </label>
                </div>

                {/* 개수 */}
                <div className="amount">
                  <input
                    type="number"
                    min={0}
                    name="item_count"
                    placeholder="갯수 입력"
                    value={freshitem.item_count}
                    onChange={orderhandleInputChange}
                  />
                  <p>개</p>
                </div>
                {/* <input
                  type="hidden"
                  name="user_num"
                  value={user.user_num}
                  onChange={carthandleInputChange}
                /> */}
              </div>
              <button className="add__button" onClick={registerAddOrder}>
                고르기
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
