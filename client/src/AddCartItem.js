import React, {useState, useEffect} from "react";
import axios from "axios";

function AddFreshItem() {
    const [cartItems, setcartitems] = useState([]);
    const [newCartItem, setNewCartItem] = useState({
        fresh_cartitem_num : '',
        item_count : '',
        item_num : '',
        res_num : ''
    });

    const carthandleInputChange = (e) => {
        const {name, value} = e.target;
        setNewCartItem((prevCartitem) => ({...prevCartitem, [name] : value}));
    };


    const handleAddCartItem = async () => {
        try {
            const response = await axios.post('http://1.221.120.194:8282/freshCart/add',
            newCartItem,{
                withCredentials: true,
            }
            );

            setcartitems((prevCartitem) => [...prevCartitem, response.data]);
            setNewCartItem({
                fresh_cartitem_num : '',
                item_count : '',
                item_num : '',
                res_num : ''
            });
        } catch (error) {
            console.error('error',error);
        }
    };

    return (
        <div>
            <h2> 카트 물품 목록</h2>
            <div>
                <label> 아이템 번호 : </label>
                <input
                    type="text"
                    name="fresh_cartitem_num"
                    value={newCartItem.item_num}
                    onChange={carthandleInputChange}
                />
            </div>
            <div>
                <label> 아이템 갯수 : </label>
                <input
                    type="text"
                    name="item_name"
                    value={newCartItem.item_count}
                    onChange={carthandleInputChange}
                />
            </div>
            <div>
                <label> 아이템 가격 : </label>
                <input
                    type="text"
                    name="item_price"
                    value={newCartItem.item_price}
                    onChange={carthandleInputChange}
                />
            </div>
            <button onClick={handleAddCartItem}>물품 추가</button>
        </div>
    )

}

export default AddFreshItem;