import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PasswordGennerator from "./PasswordGenerator";
import Password from "./Password";

function App() {
  const [ password, setPassword ] = useState('P4$5W0rD!')

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-auto bg-background">
      <p className="text-[#666373] text-3xl font-semibold">Password Generator</p>
      <div className="w-[90%] sm:max-w-[35rem]">
      <Password password={password}/>
      <PasswordGennerator onGenerate={setPassword}/>
      </div>
    </div>
  );
}

export default App;
