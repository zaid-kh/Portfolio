import React from "react";
import "./hero.css";
import zaidLogo from "../../assets/head.png";

export const Hero = () => {
  return (
    <section className="hero">
      <img
        className="logo"
        src={zaidLogo}
        alt="zaid's head"
        style={{ width: 100 }}
      />
      <h1>Zaid Khamis's Portfolio</h1>
    </section>
  );
};
