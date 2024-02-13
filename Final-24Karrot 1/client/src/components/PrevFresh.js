import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../css/PrevFresh.css";

export default function PrevFresh() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]); // 사용자 정보 상태
  const [reservation, setReservation] = useState(null); // 예약 정보 상태
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false); // 사용자 데이터 로드 여부 상태

  // 세션에 저장된 사용자 데이터 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:8282/userdata", {
          withCredentials: true,
        });
        setUser(res.data);
        setIsUserDataLoaded(true);
      } catch (err) {
        console.error("세션 데이터 불러오기 실패", err);
      }
    };
    fetchUserData();
  }, []);

  // 사용자 ID로 예약 정보 불러오기
  useEffect(() => {
    if (user.id && isUserDataLoaded) {
      const fetchReservationData = async () => {
        try {
          const getReservation = await axios.get(
            "http://localhost:8282/reservation/reservationIds",
            {
              withCredentials: true,
              params: {
                id: user.id, // 사용자 ID를 id로 변경
              },
            }
          );
          setReservation(getReservation.data);
        } catch (error) {
          console.log("예약을 불러오지 못했습니다.", error);
        }
      };
      fetchReservationData();
    }
  }, [user, isUserDataLoaded]);

  // 예약으로 이동하는 함수
  const move = (resId) => {
    navigate("/FreshHome", {
      state: {
        id: resId,
      },
    });
  };

  // 예약된 펜션 내역이 없을 때 펜션 리스트로 이동하는 함수
  useEffect(() => {
    if (isUserDataLoaded && reservation !== null && reservation.length === 0) {
      const confirmMessage =
        "예약하신 펜션 내역이 없습니다. 예약 후 이용해주세요. \n펜션 리스트로 이동하시겠습니까?";
      if (window.confirm(confirmMessage)) {
        navigate("/PensionList");
      } else {
        navigate("/");
      }
    }
  }, [isUserDataLoaded, reservation]);

  return (
    <div>
      <div className="logo__container">
        <Header />
      </div>
      <div className="fresh_res_list">
        <h1 style={{ marginTop: 150, marginBottom: 20 }}>
          주문하실 예약 장소를 선택해주세요
        </h1>
        {reservation !== null ? (
          reservation.length > 0 ? (
            <ul className="reservation__container">
              {reservation.map((reservation) => (
                <li key={reservation.id} className="reservation">
                  <button
                    style={{ marginTop: 20 }}
                    onClick={() => move(reservation.id)}
                  >
                    <span
                      className="reservation_id"
                      style={{ marginRight: 15 }}
                    >
                      예약 번호: {reservation.id}
                    </span>
                    <span className="roomType" style={{ marginRight: 15 }}>
                      방 종류: {reservation.roomType}
                    </span>
                    <span className="CheckIn" style={{ marginRight: 15 }}>
                      입실 날짜:
                      {new Date(reservation.checkInDay).toLocaleDateString()}
                    </span>
                    <span className="CheckOut">
                      퇴실 날짜:
                      {new Date(reservation.checkOutDay).toLocaleDateString()}
                    </span>
                    {/* 날짜 형식 변환 */}
                  </button>
                </li>
              ))}
            </ul>
          ) : null
        ) : null}
      </div>
    </div>
  );
}
