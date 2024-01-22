import React, {useState, useEffect} from "react";
import axios from 'axios';

//수정1: 매개변수 {onAddReservation} 지우기
function AddReservation() {
    
    //수정2: data useState[] 추가
    const[data, setData] = useState([]);
    const [newReservation, setNewReservation] = useState({
        res_num : '', 
        id : '',
        market : '',
        pay : '',
        pay_date : '',
        payment : '',
        people : '',
        pick : '',
        pick_time : '',
        res_date : '',
        room_type : '',
        unuser_num : '',
        user_num : ''
    });

    //수정3: useEffect 사용해서 첫 렌더링 시 data 읽어오기
    useEffect(()=>{
        const fetch = async() => {
            try{
                const res = await axios.get("spring에서 전체 data 받아오는 링크", {
                    withCredentials:true,
                });
                setData(res.data);
            } catch(error) {
                console.log(error);
            }
        };
        fetch();
    },[]);

    //수정4: res_num > name
    //input에서 작성한 내용으로 데이터 변경
    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setNewReservation((prevReservation) => ({...prevReservation, [name]: value}));
    };

    const handleAddReservation = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8282/reservation/add',
                newReservation,{
                    withCredentials: true,
                }
            );
            //수정5 : onAddReservation > setData
            //변경된 데이터 값 저장
            setData((prevReservation) => [...prevReservation, response.data]);
            setNewReservation({
                res_num : '', 
                id : '',
                market : '',
                pay : '',
                pay_date : '',
                payment : '',
                people : '',
                pick : '',
                pick_time : '',
                res_date : '',
                room_type : '',
                unuser_num : '',
                user_num : ''
            });
        } catch (error) {
            console.error('error', error);
        }
    };

    return (
        <div>
            <h2> 예약 내역</h2>
            <div>
                <label>이름:</label>
                <input
                    type="text"
                    name="res_num"
                    value={newReservation.res_num}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>id:</label>
                <input
                    type="text"
                    name="id"
                    value={newReservation.id}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>market:</label>
                <input
                    type="text"
                    name="market"
                    value={newReservation.market}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>pay:</label>
                <input
                    type="text"
                    name="pay"
                    value={newReservation.pay}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>pay_date:</label>
                <input
                    type="text"
                    name="pay_date"
                    value={newReservation.pay_date}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>payment:</label>
                <input
                    type="text"
                    name="payment"
                    value={newReservation.payment}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>people:</label>
                <input
                    type="text"
                    name="people"
                    value={newReservation.people}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>pick:</label>
                <input
                    type="text"
                    name="pick"
                    value={newReservation.pick}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>pick_time:</label>
                <input
                    type="text"
                    name="pick_time"
                    value={newReservation.pick_time}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>res_date:</label>
                <input
                    type="text"
                    name="res_date"
                    value={newReservation.res_date}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>room_type:</label>
                <input
                    type="text"
                    name="room_type"
                    value={newReservation.room_type}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>unuser_num:</label>
                <input
                    type="text"
                    name="unuser_num"
                    value={newReservation.unuser_num}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>user_num:</label>
                <input
                    type="text"
                    name="user_num"
                    value={newReservation.user_num}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleAddReservation}>예약 추가</button>
        </div>
    );
}

export default AddReservation;