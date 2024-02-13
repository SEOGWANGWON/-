import React, { useEffect, useState } from "react";
import axios from "axios";
import MapImg from "../img/지도.png";
import "../css/PensionList.css";
import {
  Pagination,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from "react-bootstrap";
import PenPickLogo from "../img/펜픽로고.png";
import Calendar from "../img/달력.png";
import UserImg from "../img/사용자.png";
import User from "../img/userImg.png";
import SearchButton from "../img/돋보기.png";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function PensionList() {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 한 페이지당 보여줄 펜션 수
  const [pensionsPerPage] = useState(6);

  // 현재 페이지에서 펜션 수 계산
  const indexOfLastPension = currentPage * pensionsPerPage;

  const indexFirstPension = indexOfLastPension - pensionsPerPage;

  // 페이지를 변경하기 위한 핸들러 추가
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult2, setSearchResult2] = useState([]);

  const currentPensions = searchResult2.slice(
    indexFirstPension,
    indexOfLastPension
  );

  const location = useLocation();

  // 검색어 받기
  const inputValue = location.state?.searchTerm.term;
  //체크인 날짜 받기
  const [inputcheckinDate, setInputcheckinDate] = useState(
    location.state?.searchTerm.checkindate
  );
  //체크아웃 날짜 받기
  const [inputcheckoutDate, setInputcheckoutDate] = useState(
    location.state?.searchTerm.checkoutdate
  );
  // 인원수
  const [peopleNumber, setPeopleNumber] = useState(
    location.state?.searchTerm.peopleNumber
  );

  console.log(
    "검색어 : " + inputValue + "체크인 날짜 : " + inputcheckinDate,
    "체크아웃 날짜 : " + inputcheckoutDate + "인원수 : " + peopleNumber
  );

  // 지역이름 받기
  const urlParams = new URLSearchParams(window.location.search);
  const selectedRegion = urlParams.get("region");

  // 필터링 버튼
  const [filterButton, setFilterButton] = useState(null);

  const navigate = useNavigate();
  // 상세 페이지에 id값 넘기기
  const handleDetailPage = (id) => {
    const selectedId = id;

    navigate("/DetailsPage", {
      state: {
        inputcheckinDate,
        inputcheckoutDate,
        peopleNumber,
        selectedId,
      },
    });
  };

  //렌더링 되자마자 지역이름 setSearch에 저장!!!!
  useEffect(() => {
    setSearchTerm(selectedRegion);
  }, [selectedRegion]);

  //렌더링 되자마자 검색값 setSearch에 저장!!!!
  useEffect(() => {
    if (inputValue !== null && selectedRegion === null) {
      setSearchTerm(inputValue);
    }
  }, []);

  //searchTerm 널 값 아니면서 지역이름이 null값일떄!!! 자동으로 검색 메서드 실행
  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
    }
  }, [searchTerm]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8282/penpick/searchAll`,
        {
          params: {
            term: searchTerm,
            filter: filterButton,
          },
        }
      );
      console.log(response.data);

      if (response.data.length === 0) {
        alert("해당하는 펜션 검색결과가 없습니다.");
      } else {
        console.log(response.data);

        const responseData = Array.isArray(response.data)
          ? response.data
          : [response.data];

        setSearchResult2(responseData);
      }
    } catch (error) {
      console.error("Error searching users:", error);
      setSearchResult2([]);
    }
  };

  const handleSearch2 = async (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleFilter = (filter) => {
    if (filter === 1) {
      setFilterButton("피시방");
      handleSearch();
      console.log("피시방");
    } else if (filter === 2) {
      setFilterButton("바베큐장");
      handleSearch();
      console.log("바베큐장");
    } else if (filter === 3) {
      console.log("공용샤워실");
      setFilterButton("공용샤워실");
      handleSearch();
    } else if (filter === 4) {
      console.log("노래방");
      setFilterButton("노래방");
      handleSearch();
    } else if (filter === 5) {
      console.log("운동시설");
      setFilterButton("운동시설");
      handleSearch();
    } else if (filter === 6) {
      console.log("세미나룸");
      setFilterButton("세미나룸");
      handleSearch();
    } else if (filter === 7) {
      console.log("사우나");
      setFilterButton("사우나");
      handleSearch();
    } else if (filter === 8) {
      console.log("캠프파이어");
      setFilterButton("캠프파이어");
      handleSearch();
    }
  };

  return (
    <div id="AllContain">
      <div id="HeaderBannerImg">
        <div id="PensionListCenterBox">
          <nav id="HeaderNav" class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    id="HeaderQnALink"
                    href="/QnA"
                  >
                    고객센터
                  </a>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    id="HeaderEventLink"
                    href="/EventPage"
                  >
                    이벤트
                  </a>
                  <li class="nav-item">
                    <a
                      id="HeaderCartImg"
                      class="nav-link active"
                      aria-current="page"
                      href="/CartList"
                    >
                      장바구니
                    </a>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link "
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img id="HeaderUserImg" src={UserImg} alt="사용자" />
                    </a>
                    <ul class="dropdown-menu" id="HeaderDropdownBox">
                      <li>
                        <a
                          id="HeaderDropDownLink"
                          class="dropdown-item"
                          href="/"
                        >
                          로그인/회원가입
                        </a>
                      </li>
                      <li>
                        <a
                          id="HeaderDropDownLink"
                          class="dropdown-item"
                          href="#"
                        >
                          비회원 예약조회
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          id="HeaderDropDownLinkMYPAGE"
                          href="/Mypage"
                        >
                          마이페이지
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* 메인페이지 카테고리 */}
          <div id="HeaderBannerLink">
            <a href="/" id="HeaderMainLink">
              <img id="HeaderPenPickImg" src={PenPickLogo} alt="펜픽로고"></img>
            </a>
            <form id="PensionSearchForm">
              <input
                id="PensionInput"
                type="text"
                placeholder="펜션을 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span id="InputBar">|</span>
              <input
                id="HeaderPensionInputDate"
                value={inputcheckinDate}
                min={inputcheckinDate}
                type="date"
                onChange={(e) => setInputcheckinDate(e.target.value)}
              />
              <span id="InputBar">|</span>
              <input
                id="HeaderPensionInputDate"
                min={inputcheckinDate}
                value={inputcheckoutDate}
                type="date"
                onChange={(e) => setInputcheckoutDate(e.target.value)}
              />
              <span id="InputBar">|</span>
              <input
                id="HeaderPensionInputNumber"
                value={peopleNumber}
                type="number"
                onChange={(e) => setPeopleNumber(e.target.value)}
                min={1}
                max={6}
              />
              명
              <button
                id="PensionSearchButton"
                type="submit"
                onClick={handleSearch2}
              >
                <img id="PensionSearchImg" src={SearchButton} alt="돋보기" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="container" className="row">
        <div id="bigfirstbox" className="col-md-4">
          <div id="firstBox">
            <h3>{searchTerm} 검색 결과 </h3>
            <a href="PesionMap">
              <img src={MapImg} alt="지도" id="MapImg"></img>
            </a>
            <div id="filter">
              <h6 id="filterTitle">필터</h6>
              <form>
                <div id="asdfasdf">
                  <input id="filterCheckbox" type="checkbox" />
                  <span id="filterException">매진 숙소 제외</span>
                </div>

                <hr id="hrfilter" />
                <span id="filterTitle">가격</span>
                <span id="filterdescription">1박 기준</span>

                <input type="range" id="filterRange" />
                <hr id="hrfilter" />
                <div>
                  <h6 id="filterTitle">공용시설</h6>
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(1)}
                    type="button"
                  >
                    피시방
                  </button>
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(2)}
                    type="button"
                  >
                    바베큐장
                  </button>
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(3)}
                    type="button"
                  >
                    공용샤워실
                  </button>
                  <br />
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(4)}
                    type="button"
                  >
                    {" "}
                    노래방
                  </button>
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(5)}
                    type="button"
                  >
                    운동시설
                  </button>
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(6)}
                    type="button"
                  >
                    세미나룸
                  </button>
                  <br />
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(7)}
                    type="button"
                  >
                    사우나
                  </button>
                  <button
                    id="filterButton"
                    onClick={() => handleFilter(8)}
                    type="button"
                  >
                    캠프파이어
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div id="PensionSearchList">
            <ul>
              {currentPensions.map((pension) => (
                <div id="pensionBox" className="row" key={pension.id}>
                  <span
                    id="pensionSearchImg"
                    onClick={() => handleDetailPage(pension.id)}
                    className="col-md-4"
                  >
                    이미지
                    <ul>
                      <img src={pension.img} alt="펜션사진" />
                    </ul>
                  </span>
                  <div id="pensionDescription" className="col-md-8">
                    <p
                      id="pensionName"
                      onClick={() => handleDetailPage(pension.id)}
                    >
                      {pension.name}
                    </p>
                    <p>{pension.address}</p>
                    {pension.check_in} - {pension.check_out}
                  </div>
                  <hr id="PensionSearchListhr" />
                </div>
              ))}
            </ul>
            <br />
            <br />
            <div id="paginationButtonBox">
              <Pagination>
                {[
                  ...Array(
                    Math.ceil(searchResult2.length / pensionsPerPage)
                  ).keys(),
                ].map((number) => (
                  <Pagination.Item
                    key={number + 1}
                    active={number + 1 === currentPage}
                    onClick={() => handlePageChange(number + 1)}
                    id="pensionlistpageButton"
                  >
                    <span id="otherPageButton"> {number + 1}</span>
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PensionList;
