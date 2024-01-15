import React, {useState} from 'react';
import '../css/Login.css';
import logo from '../img/펜픽로고.png';
import axios from 'axios';

export default function SignUp() {

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handelInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID: ", inputId);
        console.log("PW: ", inputPw);

        axios
        .post("http://localhost:8080/api/login", {
            eamil: inputId,
            password: inputPw,
        })
        .then((res) => {
            console.log(res);
            console.log("res.data.userId ::", res.data.userId);
            console.log("res.data.msg ::", res.data.msg);
            if(res.data.email === undefined){
                console.log("=====", res.data.msg);
                alert("입력하신 email이 일치하지 않습니다");
            } else if(res.data.email === null){
                console.log("=====", "입력하신 비밀번호가 일치하지 않습니다");
                alert("입력하신 비밀번호가 일치하지 않습니다");
            } else if(res.data.email === inputId) {
                //id, pw 모두 일치
                console.log("=====", "로그인 성공");
                sessionStorage.setItem("user_id", inputId); //sessionStorage에 id를 user_id라는 key 값으로 저장
                sessionStorage.setItem("name", res.data.name); //sessionStorage에 id를 user_id라는 key 값으로 저장
            }
            //작업완료되면 페이지 이동(새로고침)
            document.location.href="/";
        }).catch();
    };

    return(
        <div className='main'>
            <img src={logo} alt="로고" style={{width:'10%'}}/>
            <form method="get" action="/login">
                <input 
                    type='email'
                    className = 'form-control'
                    placeholder='penpick@co.kr'
                    name= 'input_id'
                    value = {inputId}
                    onChange={handleInputId}
                /><br />

                <input 
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    name='input_pw'
                    value={inputPw}
                    onChange={handelInputPw}
                /><br />

                <button type="button" onClick={onClickLogin}>Log In</button>
            </form>
        </div>
    )
}