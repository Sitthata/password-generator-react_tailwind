import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PasswordGennerator from "./PasswordGenerator";
import Password from "./Password";

function App() {
  const [ password, setPassword ] = useState('P4$5W0rD!')

  return (
    <div className="flex items-center justify-center w-screen h-screen mx-auto bg-background flex-col">
      <Password password={password}/>
      <PasswordGennerator onGenerate={setPassword}/>
    </div>
  );
}

export default App;
