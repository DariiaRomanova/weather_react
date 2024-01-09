import React, { useState } from "react";
import { connect } from "react-redux";
import { changeTemperatureUnit, changeButtonColor } from "./actions";
import "./CurrentTemperature.css";

function CurrentTemperature({
  temperature,
  temperatureUnit,
  changeTemperatureUnit,
  buttonColors,
  changeButtonColor,
}) {
  const handleClick = (unit) => {
    if (unit !== temperatureUnit) {
      changeTemperatureUnit(unit);
      const oppositeUnit = unit === "celsius" ? "fahrenheit" : "celsius";
      changeButtonColor(unit, "#000000");
      changeButtonColor(oppositeUnit, "#7877BE");
    }
  };

  function fahrenheit() {
    let fahrenheit = Math.round((temperature * 9) / 5 + 32);
    return fahrenheit;
  }

  return (
    <div className="CurrentTemperature">
      <div className="current-temp-value temp-value">
        {temperatureUnit === "celsius" ? temperature : fahrenheit()}
      </div>
      <div className="current-temp-unit">
        <button
          style={{ color: buttonColors.celsius }}
          onClick={() => handleClick("celsius")}
        >
          °C
        </button>{" "}
        |{" "}
        <button
          style={{ color: buttonColors.fahrenheit }}
          onClick={() => handleClick("fahrenheit")}
        >
          F
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  temperatureUnit: state.temperatureUnit,
  buttonColors: state.buttonColors,
});

const mapDispatchToProps = {
  changeTemperatureUnit,
  changeButtonColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTemperature);
