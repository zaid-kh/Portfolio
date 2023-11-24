import { useState } from "react";
import "./App.css";
import zaidLogo from "./assets/head.png";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <img
        className="logo"
        src={zaidLogo}
        alt="zaid's head"
        style={{ width: 100 }}
      />
      <h1>Zaid Khamis's Portfolio</h1>
    </>
  );
}

export default App;
