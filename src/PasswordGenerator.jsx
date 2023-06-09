import React from "react";
import { useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const PasswordGennerator = () => {
  const [passwordLength, setPasswordLength] = useState(5);
  const [password, setPassword] = useState("");
  const [checkboxOption, setCheckboxOption] = useState([
    { label: "Include Uppercase", checked: false },
    { label: "Include Lowercase", checked: false },
    { label: "Include Numbers", checked: false },
    { label: "Include Symbols", checked: false },
  ]);

  const handleCheckboxChange = (index) => {
    setCheckboxOption(checkboxOption.map((option, idx) =>
      idx === index ? { ...option, checked: !option.checked } : option
    ));
  }

  return (
    <div className="p-5 bg-background-light min-w-[30rem]">
      
      <div className="flex flex-col">
        <div className="flex justify-between mb-4">
          <label htmlFor="length" className="text-white">
            Character Length
          </label>
          <p className="text-white">{passwordLength}</p>
        </div>
        <input
          type="range"
          value={passwordLength}
          min="6"
          max="20"
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <div className="mt-5">
          {checkboxOption.map((option, index) => (
            <div className="flex items-center text-white" key={index} onClick={() => handleCheckboxChange(index)}>
              {option.checked ? <FaCheckSquare /> : <FaRegSquare />}
              <label htmlFor="checkbox" className="item-center ml-5 my-1">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordGennerator;
