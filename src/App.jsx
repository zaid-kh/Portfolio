import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";
import { Contact } from "./components/contact-form/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
