import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function User() {

    const[data, setData] = useState([]);
    const[newUser, setNewUser] = useState({username: '', email: ''});

    //fetchData라는 이름을 정의해서 try-catch문을 사용해
    //비동기 작업 중 발생하는 에러를 잡아내고 콘솔에 메세지를 출력하는 것
    //간접적으로 호출
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const res = await axios.get('http://localhost:8080/api/user',{
                    withCredentials: true,
                });
                setData(res.data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);

    /*
        const {name, value} = e.target;
        setNewUser((prevUser) => ({...prevUser, [name] : value}));

        위에서 작성한 name과 value는 input 태그의 속성을 의미
        name에서 username은 http://localhost:8080/api/user의 json으로 참조된 값으로 변경 불가
    */

    //데이터 작성한 내용으로 변경하는 함수
    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setNewUser((prevUser) => ({...prevUser, [name] : value}));
    };

    //저장 버튼 함수
    //데이터를 보내줄 post를 추가
    const handleAddUser = async () => {
        try{
            const response = await axios.post(
                'http://localhost:8080/api/user/add',
                newUser, {
                    withCredentials: true,
                }
            );
            //변경된 데이터 값 저장
            setData((prevUser) => [...prevUser, response.data]);
            //데이터 저장 후 빈값으로 초기화 (필수x)
            setNewUser({username: '', email:''});
        } catch (error){
            console.error('부적합한 데이터입니다', error);
        }
    };

    return(
        <div>
            <h1>User List</h1>
            <ul>
                {data.map((user) => (
                <li key={user.id}>
                    {user.username} = {user.email}
                </li>
                ))}
            </ul>
            <h2>Add new user</h2>
            <form method="post" action="/user/create">

                <label>user name : </label>
                <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
                /><br />

                <label>user email : </label>
                <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                />

                <button onClick={handleAddUser}>유저 저장하기</button>
            </form>
        </div>
    );
}