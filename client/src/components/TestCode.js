import React, { useState } from "react";

export default function Checkmenu() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    } else {
      setSelectedValues((prevValues) => prevValues.filter((v) => v !== value));
    }
  };

  const handleSubmit = () => {
    // 선택된 값들을 처리하는 로직을 작성합니다.
    console.log("Selected Values:", selectedValues);
    // 여기에서 선택된 값들을 이용한 추가적인 로직을 수행할 수 있습니다.
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="value1"
          onChange={handleCheckboxChange}
        />{" "}
        Option 1
      </label>

      <label>
        <input
          type="checkbox"
          value="value2"
          onChange={handleCheckboxChange}
        />{" "}
        Option 2
      </label>

      <label>
        <input
          type="checkbox"
          value="value3"
          onChange={handleCheckboxChange}
        />{" "}
        Option 3
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
