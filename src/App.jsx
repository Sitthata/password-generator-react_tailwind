import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PasswordGennerator from "./PasswordGenerator";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen mx-auto bg-background">
      <PasswordGennerator />
    </div>
  );
}

export default App;
