import { createRef } from 'react'

import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Home from "./pages/Home";
import "./styles.css";

export default function App() {

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: "url(/bg1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Navbar />
      <Home />
      {/* <Result /> */}
    </div>
  );
}
