import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todilist from "./features/TodolistView.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Todilist />
    </div>
  );
}

export default App;
