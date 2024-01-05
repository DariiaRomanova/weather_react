import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  let [unit, setUnit] = useState("celsius");
  function celsiusToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheitToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return fahrenheit;
  }
  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <div className="current-temp-value temp-value">{props.celsius}</div>
        <div className="current-temp-unit">
          °C |{" "}
          <a href="/" onClick={celsiusToFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <div className="current-temp-value temp-value">{fahrenheit()}</div>
        <div className="current-temp-unit">
          <a href="/" onClick={fahrenheitToCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
