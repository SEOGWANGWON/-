import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PrevFresh({ res_num }) {
  //선택한 예약정보를 저장
  const [result, setResult] = useState(res_num);

  //사용자 불러오기
  const [user, setUser] = useState([]);

  const [reservation, setReservation] = useState([]);

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

  //예약 불러오기
  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const getReservation = await axios.get(
          "http://localhost:8282/freshorder/user_num"
        );
        setReservation(getReservation.data);
        console.log(getReservation.data);
      } catch (error) {
        console.log("예약을 불러오지 못했습니다.", error);
      }
    };
    fetchReservationData();
  }, []);

  return (
    <div className="list">
      <h1>예약 리스트</h1>
      <ul className="reservation__container">
        {reservation.map((reservation) => (
          <li key={reservation.res_num} className="reservation">
            {reservation.res_num}
          </li>
        ))}
      </ul>
    </div>
  );
}
