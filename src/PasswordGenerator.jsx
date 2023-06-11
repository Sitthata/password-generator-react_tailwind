import React from "react";
import { useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Strength from "./Strength";
import { check } from "prettier";

const PasswordGennerator = ({ onGenerate }) => {
  
  const [passwordLength, setPasswordLength] = useState(5);
  const [checkboxOption, setCheckboxOption] = useState([
    { label: "Include Uppercase", checked: false },
    { label: "Include Lowercase", checked: false },
    { label: "Include Numbers", checked: false },
    { label: "Include Symbols", checked: false },
  ]);
  const passwordStrength = checkboxOption.filter((option) => option.checked).length;
  const handleCheckboxChange = (index) => {
    setCheckboxOption(
      checkboxOption.map((option, idx) =>
        idx === index ? { ...option, checked: !option.checked } : option
      )
    );
  };

  const generatePassword = () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    let characters = "";

    if (checkboxOption[0].checked) characters += upperCase;
    if (checkboxOption[1].checked) characters += lowerCase;
    if (checkboxOption[2].checked) characters += numbers;
    if (checkboxOption[3].checked) characters += symbols;

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    onGenerate(password);
    console.log(password);
  };

  return (
    <div className="w-full p-5 bg-background-light">
      <div className="flex flex-col">
        <div className="flex justify-between mb-4">
          <label htmlFor="length" className="text-lg text-white">
            Character Length
          </label>
          <p className="text-2xl text-primary">{passwordLength}</p>
        </div>
        <input
          className="w-full overflow-hidden rounded appearance-none bg-background focus:outline-none"
          type="range"
          value={passwordLength}
          min="6"
          max="20"
          onChange={(e) => setPasswordLength(e.target.value)}
          style={{
            backgroundSize: "100% 50%, 100% 100%",
            cursor: "pointer",
          }}
        />
        <div className="mt-5">
          {checkboxOption.map((option, index) => (
            <div
              className="flex items-center text-white"
              key={index}
              onClick={() => handleCheckboxChange(index)}
            >
              {option.checked ? (
                <FaCheckSquare className="cursor-pointer hover:text-primary" />
              ) : (
                <FaRegSquare className="cursor-pointer hover:text-primary" />
              )}
              <label htmlFor="checkbox" className="my-1 ml-5 text-xl cursor-pointer item-center">
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <Strength strength={passwordStrength}/>

        <button
          onClick={generatePassword}
          className="flex items-center justify-center w-full gap-3 py-3 mt-4 font-semibold uppercase transition duration-150 ease-in outline-primary outline bg-primary hover:bg-transparent hover:text-primary"
        >
          Generate <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PasswordGennerator;
