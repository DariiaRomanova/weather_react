import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span>Coded by </span>
      <a
        href="https://github.com/DariiaRomanova"
        target="_blank"
        rel="noreferrer"
      >
        Daria Romanova
      </a>
      <span>, is open-sourced on </span>
      <a
        href="https://github.com/DariiaRomanova/weather_react"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <span> and hosted on </span>
      <a
        href="https://master--glowing-sfogliatella-56549f.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
