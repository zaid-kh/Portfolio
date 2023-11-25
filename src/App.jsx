import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );
}

export default App;
