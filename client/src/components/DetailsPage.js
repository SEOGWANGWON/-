import React, { useState, useEffect } from 'react';
import healingPension from '../img/THE 힐링펜션_2_공공3유형.jpg';
import '../css/DetailsPage.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function DetailsPage() {
  // 이미지 보여주는 모달
  const [ModalButton, setModalButton] = useState(false);

  const handleShow = () => setModalButton(true);

  const handleClose = () => setModalButton(false);

  // 서비스 정보 보여주는 모달
  const [ServiceModalButton, setServiceModalButton] = useState(false);

  const handleServiceShow = () => setServiceModalButton(true);

  const handleServiceClose = () => setServiceModalButton(false);

  const [detailPension, setDetailPension] = useState([]);
  const location = useLocation();
  const [searchDetail, setSearchDetail] = useState('');
  const getValue = location.state?.pensionId;
  // console.log(getValue);

  useEffect(() => {
    setSearchDetail(getValue);
    // console.log(searchDetail);
    // handleDetail();
    // console.log(handleDetail());
  }, [searchDetail]);

  useEffect(() => {
    if (searchDetail !== null) {
      handleDetail();
      console.log(searchDetail);
    } else {
      console.log('검색값 없음');
    }
  }, [searchDetail]);

  const handleDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:8282/penpick/details`, {
        params: {
          id: searchDetail,
        },
      });
      console.log(res.data);
      setDetailPension(res.data);

      console.log(detailPension);
    } catch (error) {
      console.error('Error', error);
      setDetailPension([]);
    }
  };

  return (
    <div>
      <div id='detailpage'>
        <div>
          <div id='detailpage-sub'>
            <section id='detail-img-section'>
              <div>
                <a id='detail-img-container'>
                  <div id='detail-main-img-grid'>
                    <img
                      id='detail-main-img1'
                      src={healingPension}
                      alt='펜션이미지'
                      onClick={handleShow}
                    />
                  </div>
                  <div id='detail-sub-img-grid'>
                    <img
                      id='detail-sub-img2'
                      src={healingPension}
                      alt='펜션이미지'
                      onClick={handleShow}
                    />
                  </div>
                  <div id='detail-sub-img-grid'>
                    <img
                      id='detail-sub-img3'
                      src={healingPension}
                      alt='펜션이미지'
                      onClick={handleShow}
                    />
                  </div>
                  <div id='detail-sub-img-grid'>
                    <img
                      id='detail-sub-img4'
                      src={healingPension}
                      alt='펜션이미지'
                      onClick={handleShow}
                    />
                  </div>
                  <div id='detail-sub-img-grid'>
                    <img
                      id='detail-sub-img5'
                      src={healingPension}
                      alt='펜션이미지'
                      onClick={handleShow}
                    />
                    <div id='modal-btn'>
                      <Button
                        className='btn'
                        style={{
                          background: 'white',
                          border: 'none',
                          borderRadius: '30px',
                          color: 'black',
                          boxShadow: '0px 0px 5px black',
                          fontSize: '12px',
                          fontWeight: '600',
                          padding: '12px 20px 12px 20px',
                        }}
                        onClick={handleShow}
                      >
                        사진 한 개보기
                      </Button>
                      <Modal
                        id='modalpage'
                        show={ModalButton}
                        onHide={handleClose}
                      >
                        <Modal.Header id='modal-header-title' closeButton>
                          <Modal.Title id='modal-header-title'>
                            {detailPension.name}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body id='modal-body-main'>
                          <div id='modal-body-div'>
                            <img
                              id='modal-main-img'
                              src={healingPension}
                              alt='펜션이미지'
                            />
                          </div>
                        </Modal.Body>
                        <Modal.Footer></Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
          <section id='pension-service-section'>
            <div id='detail-title'>
              <p id='detail-title-text'>펜션</p>
              <h3 id='detail-title-name'>{detailPension.name}</h3>
            </div>
            <div id='detail-review-title'>
              별점,(review_id.length)+"명 평가" <a href=''>리뷰보기</a>
            </div>
            <div id='detail-review-container'>
              "내용","이용자 닉네임","작성날짜"
            </div>
            <div id='detail-service-container'>
              <div id='detail-lines' />
              <div id='detail-lines-title'>
                서비스 및 부대시설
                <span>
                  <Button
                    id='modal-service-btn'
                    style={{
                      background: 'white',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: '600',
                      padding: '1px',
                      cursor: 'pointer',
                      float: 'right',
                      padding: '3px 0 0 0',
                    }}
                    onClick={handleServiceShow}
                  >
                    더보기 ＞
                  </Button>
                  <Modal
                    id='service-modalpage'
                    show={ServiceModalButton}
                    onHide={handleServiceClose}
                  >
                    <Modal.Header id='modal-header-title' closeButton>
                      <Modal.Title id='modal-header-title'>
                        {detailPension.name}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id='modal-body-main'>
                      5:52
                      <div>
                        SEMINAR:{detailPension.seminar}
                        <br />
                        SPORTS:{detailPension.sports}
                        <br />
                        SAUNA:{detailPension.sauna}
                        <br />
                        BEAUTY:{detailPension.beauty}
                        <br />
                        KARAOKE:{detailPension.karaoke}
                        <br />
                        BARBEQUE:{detailPension.barbeque}
                        <br />
                        CAMPFIRE:{detailPension.campfire}
                        <br />
                        PC_ROOM:{detailPension.pc_room}
                        <br />
                        PUBLIC_SHOWER:{detailPension.public_shower}
                      </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </span>
              </div>
              <div id='detail-linse-text'>
                Parking : {detailPension.parking}
                <br />
                Cook : {detailPension.cook}
                <br />
                Dining Hall : {detailPension.dininghall}
                <br />
                Amenities : {detailPension.amenities}
              </div>
              <div id='detail-lines' />
              <div id='detail-lines-title'>객실 선택</div>
              <div id='detail-room-container'>
                <div id='detail-room-sub-container'>
                  <div id='detail-room-imgbox'>
                    <img
                      id='detail-room-img'
                      src={healingPension}
                      alt='펜션이미지'
                    />
                    <h5 id='detail-room-name'>더블 룸</h5>
                    <div>
                      <Button
                        id='modal-room-btn'
                        style={{
                          border: 'none',
                          fontSize: '13px',
                          fontWeight: '600',
                          padding: '1px',
                          cursor: 'pointer',
                          float: 'right',
                          padding: '3px 0 0 0',
                        }}
                        onClick={handleServiceShow}
                      >
                        상세정보 ＞
                      </Button>
                      <Modal
                        id='service-modalpage'
                        show={ServiceModalButton}
                        onHide={handleServiceClose}
                      >
                        <Modal.Header id='modal-header-title' closeButton>
                          <Modal.Title id='modal-header-title'>
                            {detailPension.name}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body id='modal-body-main-room'>
                          <div id='modal-section'>
                            <p id='modal-body-text-room-title'>객실 정보</p>
                            <li id='modal-body-text-room'>
                              숙박 | 체크인 {detailPension.check_in} - 체크아웃{' '}
                              {detailPension.check_out}
                            </li>
                            <li id='modal-body-text-room'>
                              2인 기준 최대 3인 (유료)
                            </li>
                            <li id='modal-body-text-room'>
                              인원 추가시 비용이 발생되며, 현장에서 결제
                              바랍니다.
                            </li>
                            <li id='modal-body-text-room'>
                              {detailPension.scale}
                            </li>
                          </div>
                        </Modal.Body>
                        <Modal.Footer id='modal-footer-room'>
                          <div id='modal-section'>
                            <p id='modal-footer-text-room-title'>편의 시설</p>
                            <li id='modal-body-text-room'>
                              세미나 룸 :{detailPension.seminar}
                            </li>
                            <li id='modal-body-text-room'>
                              운동 시설 :{detailPension.sports}
                            </li>
                            <li id='modal-body-text-room'>
                              사우나 :{detailPension.sauna}
                            </li>
                            <li id='modal-body-text-room'>
                              뷰티 룸 :{detailPension.beauty}
                            </li>
                            <li id='modal-body-text-room'>
                              노래방 :{detailPension.karaoke}
                            </li>
                            <li id='modal-body-text-room'>
                              바베큐장 :{detailPension.barbeque}
                            </li>
                            <li id='modal-body-text-room'>
                              캠프파이어 :{detailPension.campfire}
                            </li>
                            <li id='modal-body-text-room'>
                              PC방 :{detailPension.pc_room}
                            </li>
                            <li id='modal-body-text-room'>
                              공개 샤워실 :{detailPension.public_shower}
                            </li>
                          </div>
                          <div id='modal-section'>
                            <p id='modal-footer-text-room-title'>
                              취소 및 환불 규정
                            </p>
                            <div id='modal-footer-refund-box'>
                              <li id='modal-footer-refund-text'>
                                {detailPension.refund}
                              </li>
                              <li id='modal-footer-refund-text'>
                                취소, 환불시 수수료가 발생할 수 있습니다.
                              </li>
                            </div>
                          </div>
                        </Modal.Footer>
                      </Modal>
                      <div>아아</div>
                    </div>
                    <div>아아</div>
                  </div>
                </div>
              </div>
              <div id='detail-lines' />
              <div id='detail-lines-title'>숙소 소개</div>
              <div id='detail-lines-text'>{detailPension.introduction}</div>
              <div id='detail-lines' />
              <div id='detail-lines-title'>숙소 이용 정보</div>
              <div id='detail-linse-head-text'>
                기본정보
                {/* 기본적으로 NULL 일시 비우는 조건 필요 */}
                <div>
                  <li id='detail-li-text'>
                    입실 : {detailPension.check_in} | 퇴실 :
                    {detailPension.check_out}
                  </li>
                  <li id='detail-li-text'>
                    주차 여부 : {detailPension.parking}
                  </li>
                  <li id='detail-li-text'> 조리 여부 : {detailPension.cook}</li>
                  {/* COOK 컬럼은 NULL 이나 불가 일시 비우는 조건 필요 */}
                  <li id='detail-li-text'>
                    Dining Hall : {detailPension.dininghall}
                  </li>
                  <li id='detail-li-text'>
                    Amenities : {detailPension.amenities}
                  </li>
                  {/* 
                      DB 에 저장돼있는 데이터에서 
                      DINING HALL 에 바베큐장이 있으면 
                      AMENITIES 컬럼에 바베큐장이 없음
                      고로 둘다 넣어도 중복되지 않음
                  */}
                </div>
              </div>
              <div id='detail-linse-head-text'>
                객실 정보
                <div>
                  <li id='detail-li-text-caution'>{detailPension.scale}</li>
                  <li id='detail-li-text'>
                    객실 종류 : 더블, 트리플, 패밀리, 그룹
                  </li>
                </div>
              </div>
              <div id='detail-linse-head-text'>
                인원 추가 정보
                <div>
                  <li id='detail-li-text'>
                    1인 20,000원 (24개월 이상~13세 미만), 40,000원 (13세 이상)
                  </li>
                  <li id='detail-li-text'>연박 예약 시 1박당 비용 발생</li>
                  <li id='detail-li-text'>
                    숙박하지 않는 방문객 또한 위 금액과 동일한 비용이 발생
                  </li>
                  <li id='detail-li-text'>최대인원 초과불가</li>
                  <li id='detail-li-text'>현장 결제</li>
                  <li id='detail-li-text'>객실에 따라 가격이 상이할 수 있음</li>
                </div>
              </div>
              <div id='detail-linse-head-text'>
                Dining Hall
                <div>
                  <li id='detail-li-text'>{detailPension.dininghall}</li>
                </div>
              </div>
              <div id='detail-linse-head-text'>
                펜션 서비스
                <div>
                  <li id='detail-li-text-caution'>
                    시설 이용문의 및 비용 별도 펜션문의
                    <br />
                    {detailPension.contact}
                  </li>
                  <li id='detail-li-text-caution'>{detailPension.amenities}</li>
                </div>
              </div>
              <div id='detail-linse-head-text'>
                바비큐 시설
                <div>
                  <li id='detail-li-text-caution'>
                    바베큐 시설 여부 : {detailPension.barbeque}
                  </li>
                  <li id='detail-li-text'>
                    숯+그릴 대여 : 2인 기준 20,000원 (1인 추가시 5,000원) /
                    자이글 : 1SET 20,000원
                  </li>
                  <li id='detail-li-text'>
                    이용시간 : 숯+그릴 (15:00~23:00), 자이글 (15:00~23:00)
                  </li>
                  <li id='detail-li-text'>
                    이용장소 : 숯+그릴 (야외바비큐장 / 우천시 또는 동절기에도
                    이용가능), 자이글 (객실 내)
                  </li>
                  <li id='detail-li-text'>현장 결제</li>
                </div>
              </div>
              <div id='detail-linse-head-text'>
                취소 및 환불 규정
                <div>
                  <li id='detail-li-text-caution'>{detailPension.refund}</li>
                  <li id='detail-li-text'>
                    취소, 환불 시 수수료가 발생할 수 있습니다
                  </li>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;