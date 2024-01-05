import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Dnipro" />
      <Footer />
    </div>
  );
}
