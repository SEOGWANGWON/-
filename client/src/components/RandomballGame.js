import React, { useState } from 'react';
import '../css/Game.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import { useLocation } from 'react-router';

function RandomballGame() {
  const location =useLocation();
  const lottonum1=location.state?.number1;
  const lottonum2=location.state?.number2;
  const lottonum3=location.state?.number3;
  const lottonum4=location.state?.number4;

  const [spinning, setSpinning] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  });
  const totalNumbers = 10; // 전체 번호의 개수를 지정합니다.

  // startSpin 함수는 룰렛을 돌리는 역할을 합니다.
  const startSpin = () => {
    if (!spinning) {
      // 1부터 totalNumbers 사이의 랜덤한 번호를 8번 선택합니다.
      const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * totalNumbers) + 1);

      setSpinning(true);

      setTimeout(() => {
        setSpinning(false);
        // 선택된 랜덤한 번호들을 각각의 번호에 할당합니다.
        setSelectedOptions({
          number1: randomNumbers[0],
          number2: randomNumbers[1],
          number3: randomNumbers[2],
          number4: randomNumbers[3]
        });
      }, 3000); // 3초 동안 돌리도록 설정합니다. (필요에 따라 조절 가능)
    }
  };

  return (
    <div>
      <Header />
      <div id='lottobigcontainer'>
        <div id='lottosecondContainer'>
      <a href='/GameLand'><h5 id='gamelandtitle'>게임랜드</h5></a>
        <h6>다양한 미니게임을 통해 점수를 얻어봐요!</h6>
        <h6>행운이 따른다면 자그마한 선물이....?</h6>
        <div id='lottoSubmit'>
          <div id='lottoformcontainer'>
          <span id='windowpopbutton1'>_</span>
          <span id='windowpopbutton2'>ㅁ</span>
            <span id='windowpopbutton3'>X</span>
          <span id='lottonumbertitle'>행운의 공 뽑기</span>
        <div className="roulette-container">
        <div className={`roulettewheel ${spinning ? 'roulettespinning' : ''}`}>
            {/* 선택된 번호들을 화면에 표시합니다. */}
            <div  id='lottoballbox'>
            {Object.values(selectedOptions).map((option, index) => (
              <div key={index} >
                <div className={`lotto${index}`}> {option?option:<span id='lottoQ'>?</span>}</div>
              </div>
            ))}
            </div>
          </div>
          <div id='ballboxbottom'>
              {/* 선택된 번호들을 결과로 표시합니다. */}
          {Object.values(selectedOptions).some((option) => option !== '') && (
            <div id="rouletteresult">
            <span>내 번호</span>
            <span id='lottoball1'>{lottonum1}</span>
            <span id='lottoball2'>{lottonum2}</span>
            <span id='lottoball3'>{lottonum3}</span>
            <span id='lottoball4'>{lottonum4}</span>
            <span id='resultball'>당첨된 번호: {Object.values(selectedOptions).join(', ')}</span>
            </div>
          )}
          {selectedOptions.number1===''? 
          <button onClick={startSpin} disabled={spinning} id="roulettebutton">
              {spinning 
              ? '돌리는 중...' 
              : '룰렛 돌리기!'}

          </button>:<a href='GameLand' id='returnGameland'>돌아가기</a>}
          </div>
        
        </div>
        
            </div>
        </div>
      </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default RandomballGame;
