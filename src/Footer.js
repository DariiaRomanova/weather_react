import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span>Coded by </span>
      <a href="https://github.com/DariiaRomanova" target="_blank">
        Daria Romanova
      </a>
      <span>, is open-sourced on </span>
      <a
        href="https://github.com/DariiaRomanova/weather_prophet"
        target="_blank"
      >
        GitHub
      </a>
      <span> and hosted on </span>
      <a href="https://weather-prophet.netlify.app/" target="_blank">
        Netlify
      </a>
    </div>
  );
}
