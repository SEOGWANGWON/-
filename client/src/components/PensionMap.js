import React, { useEffect,useState } from 'react';
import Header from './Header';
import '../css/PensionMap.css';
import axios from 'axios';

const PensionMap = () => {

const [pensionData,setPensionData]=useState([]);

  useEffect(() => {

    axios.get('http://localhost:8081/penpick/pensionList')
    .then(response=>{
      const responseData = Array.isArray(response.data)
      ? response.data
      : [response.data];
      setPensionData(responseData);
      loadKakaoMap(responseData);
      console.log(responseData);
    })
    .catch(error=>console.log('에러가 났어요ㅠㅠ => ',error));
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정


  const loadKakaoMap=(responseData)=>{
    // 카카오맵 API 스크립트 동적으로 로드
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=5f5613b170ddc98c39f71811791f5fc8&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 지도 중심 좌표 (서울)
          level: 3, // 초기 지도 확대 레벨
        };

        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new window.kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        // 마커를 표시할 위치와 title 객체 배열입니다 
        for(var i = 0; i < responseData.length; i ++){
          const marker = new window.kakao.maps.Marker({
            map:map,
            position : new window.kakao.maps.LatLng(responseData[i].latitude,responseData[i].longitude),
            title:responseData[i].name,
          });

          
          var iwContent = `<div style="padding:5px;height:120px">${responseData[i].name}
           <br>${responseData[i].address}<br><a href="http://localhost:3000/PensionList" style="color:blue" target="_blank">상세보기</a> 
          </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = marker; //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new  window.kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent
        });
          
      
      window.kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
        }
    
      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
      function makeOverListener(map, marker, infowindow) {
        return function() {
          if(infowindow.getMap()){
            infowindow.close();
          }else{ infowindow.open(map, marker);}
        };
      }

      });
    };
  };

  return (
    <div>
      <Header />
      <p id='MapTitle'>지도로 검색하기</p>
      <div
        id='map'
        style={{ width: '80%', height: '700px', margin: 'auto' }}
      ></div>
    </div>
  );
};

export default PensionMap;