import React from "react";
import Header from "./Header";
import lottoimg from "../img/로또.jpg";

function GameLand(){
    return(
        <div>
            <Header/>
            <div id='GamelandContainer'>
            <div id='GamelandSecondContainer'>
            <h5 id='gamelandtitle'>게임랜드</h5>
            <h6>다양한 미니게임을 통해 점수를 얻어봐요!</h6>
            <h6>행운이 따른다면 자그마한 선물이....?</h6>
            <div id='gamelandgrid'>
                <div id='gamelandtype1box'>
                    <a href='Randomnumber' id='RouleletteLink'>
                    <img src={lottoimg} id='lottoimg' alt='로또게임'/>
                    <h6 id='gamelandtype1'>행운의 공뽑기</h6></a>
                    <h6 id='gamelanddescription'>
                        랜덤으로 나오는 숫자는 무엇일까요?<br/>
                        당신의 행운을 시험해보세요!</h6>
                </div>
                <div id='gamelandtype1box'>
                    <a href='Randomnumber' id='RouleletteLink'>
                    <img src={lottoimg} id='lottoimg' alt='로또게임'/>
                    <h6 id='gamelandtype1'>행운의 공뽑기</h6></a>
                    <h6 id='gamelanddescription'>
                        랜덤으로 나오는 숫자는 무엇일까요?<br/>
                        당신의 행운을 시험해보세요!</h6>
                </div>
                <div id='gamelandtype1box'>
                    <a href='Randomnumber' id='RouleletteLink'>
                    <img src={lottoimg} id='lottoimg' alt='로또게임'/>
                    <h6 id='gamelandtype1'>행운의 공뽑기</h6></a>
                    <h6 id='gamelanddescription'>
                        랜덤으로 나오는 숫자는 무엇일까요?<br/>
                        당신의 행운을 시험해보세요!</h6>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default GameLand;