// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const HCF = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [ansCol, setAnsCol] = useState("Green");

  let count = 0;
  const calculateHcf = () => {
    let zeroCount = 0;
    let nums = input.split(" ");
    nums = nums.map((num) => parseInt(num));
    nums.sort((a, b) => a - b);

    if (nums.length == 1) {
      setAnsCol("Red");
      setOutput("Enter two or more values!!");
      return;
    }

    let temp = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) zeroCount++;

      if (!isNaN(nums[i]) && nums[i] != 0) {
        temp.push(nums[i]);
      }
    }
    nums = temp;
    // console.log(nums);

    if (zeroCount > 1) {
      setOutput("Undefined! Try again with one or no zeros.");
      setAnsCol("Red");
      return;
    }

    let arr = [];
    for (let d = 1; d <= nums[0]; d++) {
      count = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] % d == 0) {
          count++;
        }
      }

      if (count == nums.length) {
        arr.push(d);
      }
    }

    if (arr.length == 0) {
      arr.push(1);
    }

    arr.sort((a, b) => a - b);
    setOutput(arr[arr.length - 1]);
    setAnsCol("Green");
  };
  const handleChange = (e) => {
    setOutput("");
    setInput(e.target.value);
  };
  return (
    <div className="main">
      <div className="header">
        <h1>HCF Calculator</h1>
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
            onClick={calculateHcf}
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
export default HCF;
