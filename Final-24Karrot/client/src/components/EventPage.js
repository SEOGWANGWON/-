import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../css/EventPage.css";
import Calendar from "../img/달력.png";
import UserImg from "../img/사용자.png";
import axios from "axios";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router";
import event from "../img/EventImg1.jpg";
import eventThumnail from "../img/이벤트 썸네일.png";

function EventPage() {
  const [contentList, setContentList] = useState({ comment: "", content: "" });
  const [saveList, setSaveList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const currentURL = location.pathname;

  const handleMovePage = (title) => {
    const content = title;
    window.location.href = `EventDetail?content=${content}`;
  };

  useEffect(() => {
    handleEventList();
  }, []);

  const handleEventList = async () => {
    try {
      const response = await axios.get(`http://localhost:8282/event/eventList`);

      setSaveList(response.data);
    } catch (error) {
      console.error("글을 찾을 수가 없어요 " + error);
    }
  };

  return (
    <div>
      <Header />
      <div id="container">
        <div id="eventContainer">
          <div id="EventCategory">
            <h5 id="eventcategory">이벤트</h5>
            {currentURL === "eventTitle"}
            <a id="eventlink1" href="eventTitle">
              이벤트
            </a>
            <br></br>
            <a href="GameLand" id="gamelandlink1">
              게임랜드
            </a>
          </div>
          <div id="EventMain">
            <a id="eventMainTitle" href="EventPage">
              이벤트
            </a>

            <h6 id="EventContent">
              매일매일 선물이 쏟아진다! 펜픽이벤트에서 만나요 !
            </h6>

            <div id="eventBox">
              {saveList.map((contents, index) => (
                <div key={contents.content_id} id="eventthumnailBox">
                  {contents.content_id !== null ? (
                    <>
                      <button
                        id="eventButton"
                        onClick={() => handleMovePage(contents.content)}
                      >
                        <img
                          src={eventThumnail}
                          alt="이벤트"
                          id="eventthumnail"
                        ></img>
                        <p>{contents.content}</p>
                      </button>
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
