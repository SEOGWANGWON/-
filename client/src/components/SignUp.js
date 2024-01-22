import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {

    const [data, setData] = useState([]);
    const [newUser, setNewUser] = useState({ userEmail: '', password: '', birthday: '', nickname:'' });
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerificationSent, setIsVerificationSent] = useState(false);
    const [isVerificationConfirmed, setIsVerificationConfirmed] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/user", {
              withCredentials: true,
            });
            setData(res.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setNewUser((prevUser) => ({...prevUser, [name]: value }));
    }

    const handleSendVerification = async () => {
        
        try{
            const response = await axios.post(
                'http://localhost:8080/mail',
                {mail:newUser.userEmail},
                {
                    withCredentials : true,
                }
            );
            alert('인증 이메일이 전송되었습니다.');
            setVerificationCode(response.data);
            setIsVerificationSent(true);
        } catch(error) {
            console.error('인증 이메일 전송 오류', error);
        }
    };

    const handleConfirmVerification = () => {
        if(verificationCode === ''){
            alert('인증 코드를 먼저 받아주세요');
            return;
        }

        setIsVerificationConfirmed(true);
        alert('인증이 확인되었습니다');
    };

    const handleAddUser = async() => {
        try {
            if(!isVerificationConfirmed){
                alert('이메일 인증을 먼저 진행해주세요');
                return;
            }

            const response = await axios.post(
                'http://localhost:8080/api/user/add',
                {...newUser, verificationCode},
                {
                    withCredentials:true,
                }
            );
            setData((prevUser) => [...prevUser, response.data]);
            setNewUser({userEmail:'', password:''});
            setVerificationCode('');
            setIsVerificationSent(false);
            setIsVerificationConfirmed(false);
            alert('회원가입 완료');
            window.location.href = 'http://localhost:3000/';
        } catch(error) {
            console.error('데이터 저장오류', error);
        }
    };

    return(
        <div>
            <div id="signUpArea">
                <div id="signUpForm">
                    <div style={{width:'100%', marginBottom:"30px"}}>
                        <p id="title">회원가입</p>
                        <p id="signUpMsg">가입을 위한 필수 정보를 입력해주세요</p>
                    </div>
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>이메일</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setEmail'
                        type='email'
                        class = 'form-control'
                        placeholder='yourEmail@penpick.co.kr'
                        name="userEmail"
                        value={newUser.userEmail}
                        onChange={handleInputChange}
                        required
                    /><br />
                    <button onClick={handleSendVerification}>이메일 인증</button>
                    {isVerificationSent && (
                        <div>
                        <input
                            type="text"
                            name="verificationCode"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="인증 코드 입력"
                        />
                        <button onClick={handleConfirmVerification}>인증번호 확인</button>
                        </div>
                    )}
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>비밀번호</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setPassword'
                        type='password'
                        class='form-control'
                        placeholder='최소 8자 이상'
                        name="password"
                        value={newUser.password}
                        onChange={handleInputChange}
                        required
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>비밀번호 확인</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='checkPassword'
                        type='password'
                        class='form-control'
                        placeholder='비밀번호 확인'
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>생일</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setBirthday'
                        type='date'
                        data-placeholder='생년월일'
                        class='form-control'
                    /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>성별</label>
                        <div class="dot-badge"></div><br />
                    </div>
                    <div class="form-check form-check-inline" id="female">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">여자</label>
                    </div>
                    <div class="form-check form-check-inline" id="male">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">남자</label>
                    </div><br /><br />
                    <div>
                        <label style={{float:'left', fontSize:'small', marginLeft:'2px'}}>닉네임</label>
                        <div class="dot-badge"></div>
                    </div>
                    <input 
                        id='setNickname'
                        type='text'
                        class='form-control'
                        placeholder='닉네임 설정'
                    /><br />
                    <button id='signUpButton' type="button" onClick={handleAddUser}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}