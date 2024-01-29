import React, { useState, useEffect } from "react";
import axios from "axios";

function AddFreshItem() {
  const [data, setData] = useState([]);
  const [newFreshItem, setNewFreshItem] = useState({
    item_num: "",
    item_name: "",
    item_price: "",
  });
  useEffect(() => {
    const fetch = async () => {
      try {
        const regItem = await axios.get(
          "http://1.221.120.194:8282/productItem/list",
          {
            withCredentials: true,
          }
        );
        setData(regItem.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const itemhandleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFreshItem((prevFreshitem) => ({ ...prevFreshitem, [name]: value }));
  };

  const handleAddFreshItem = async () => {
    try {
      const response = await axios.post(
        "http://1.221.120.194:8282/productItem/add",
        newFreshItem,
        {
          withCredentials: true,
        }
      );

      setData((prevFreshitem) => [...prevFreshitem, response.data]);
      setNewFreshItem({
        item_num: "",
        item_name: "",
        item_price: "",
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <h2> 아이템목록</h2>
      <div>
        <label> 아이템 번호 : </label>
        <input
          type="text"
          name="item_num"
          value={newFreshItem.item_num}
          onChange={itemhandleInputChange}
        />
      </div>
      <div>
        <label> 아이템 이름 : </label>
        <input
          type="text"
          name="item_name"
          value={newFreshItem.item_name}
          onChange={itemhandleInputChange}
        />
      </div>
      <div>
        <label> 아이템 가격 : </label>
        <input
          type="text"
          name="item_price"
          value={newFreshItem.item_price}
          onChange={itemhandleInputChange}
        />
      </div>
      <button onClick={handleAddFreshItem}>물품 추가</button>
    </div>
  );
}

export default AddFreshItem;
