// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const LCM = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [ansCol, setAnsCol] = useState("Green");

  const calculateLcm = () => {
    let nums = input.split(" ");
    nums = nums.map((num) => parseInt(num));

    if (nums.length == 1) {
      setAnsCol("Red");
      setOutput("Enter two or more values !!");
      return;
    }

    let temp = [];
    for (let i = 0; i < nums.length; i++) {
      if (!isNaN(nums[i])) {
        temp.push(nums[i]);
      }
    }
    temp.sort((a, b) => a - b);
    nums = temp;
    // console.log("temp", nums);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        setAnsCol("Red");
        setOutput("LCM of zero does not exist!! Please remove zero.");
        return;
      }
    }

    // console.log(nums);

    let max = nums[nums.length - 1];

    for (let i = nums.length - 1; i >= 0; i--) {
      if (max % nums[i] !== 0) max *= nums[i];
    }

    setOutput(max);
    setAnsCol("Green");
  };

  const handleChange = (e) => {
    setOutput("");
    setInput(e.target.value);
  };

  return (
    <div className="main">
      <div className="header">
        <h1>LCM Calculator</h1>
      </div>

      <div className="form">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter Numbers ..."
        />
        <div className="btns">
          <button
            onClick={calculateLcm}
            disabled={input.length > 0 ? false : true}
            className="calc"
          >
            Calculate
          </button>
          <button
            className="clrbtn"
            onClick={() => {
              setInput("");
              setOutput("");
            }}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      {
        <div className={`op ${output ? "visible" : "notVisible"}`}>
          <h2 className={`ans ans${ansCol}`}>Answer</h2>
          <h2 className="opt">{output}</h2>
        </div>
      }
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default LCM;
