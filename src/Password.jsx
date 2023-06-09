import React from "react";
import { FaCopy } from 'react-icons/fa'; 

const Password = ({ password }) => {
    const defaultPassword = "P4$5W0rD!";
    const handleCopy = () => {
        navigator.clipboard.writeText(password)
        .then(() => {
            console.log('Password copied to clipboard')
        })
        .catch((err) => {
            console.log('Failed to copy: ', err)
        });
    }

  return (
    <div className="bg-background-light p-5 my-5 min-w-[30rem] flex items-center justify-between">
      <p className={`font-bold text-2xl ${password === defaultPassword ? 'text-grey-light' : 'text-white'}`}>{password}</p>
      <FaCopy className="transition duration-150 ease-in cursor-pointer text-primary hover:text-white" onClick={handleCopy}/>
    </div>
  );
};

export default Password;
