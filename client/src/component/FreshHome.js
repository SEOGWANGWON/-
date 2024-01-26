import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/logo.css";
import "../css/navigation.css";
import "../css/item.css";

export default function FreshHome() {
  //사용자 불러오기
  const [user, setUser] = useState([]);
  //프레쉬 아이템
  const [freshitems, setfreshitems] = useState([
    {
      item_num: 17,
      item_name: "삼겹살",
      item_price: 15000,
    },
    {
      item_num: 25,
      item_name: "asdasd",
      item_price: 123123,
    },
    {
      item_num: 26,
      item_name: "야호",
      item_price: 0,
    },
    {
      item_num: 27,
      item_name: "만세",
      item_price: 0,
    },
    {
      item_num: 23,
      item_name: "일회용품",
      item_price: 2000,
    },
    {
      item_num: 24,
      item_name: "ㅁㅁㄴㅇ",
      item_price: 123,
    },
    {
      item_num: 18,
      item_name: "상추",
      item_price: 1000,
    },
    {
      item_num: 19,
      item_name: "쌈장",
      item_price: 1500,
    },
  ]);

  //카트 아이템
  const [_, setcartitems] = useState([]);
  const [newCartItem, setNewCartItem] = useState({
    item_count: "",
    item_num: "",
    res_num: "",
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

  //카트
  const handleAddCartItem = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8282/freshCart/add",
        console.log("1"),
        newCartItem,
        console.log("2"),
        {
          withCredentials: true,
        },
        console.log("3")
      );
      console.log();
      console.log("서버 응답:", response);

      setcartitems((prevCartitem) => [...prevCartitem, response.data]);
      setNewCartItem({
        item_count: "",
        item_num: "",
        res_num: "",
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  const carthandleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCartItem((prevCartitem) => ({ ...prevCartitem, [name]: value }));
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
                  <br />
                  {freshitem.item_price}원<br />
                  <input
                    type="hidden"
                    name="item_num"
                    value={freshitem.item_num}
                  />
                </div>
                {/* 개수 */}
                <div className="amount">
                  <input
                    type="number"
                    min={0}
                    name="item_count"
                    placeholder="갯수 입력"
                    value={freshitem.item_count}
                    onChange={carthandleInputChange}
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
              <button className="add__button" onClick={handleAddCartItem}>
                카트에 담기
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
