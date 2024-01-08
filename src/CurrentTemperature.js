import React from "react";
import { connect } from "react-redux";
import { changeTemperatureUnit } from "./actions";
import "./CurrentTemperature.css";

function CurrentTemperature({
  temperature,
  temperatureUnit,
  changeTemperatureUnit,
}) {
  /*let [unit, setUnit] = useState("celsius");
  function celsiusToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheitToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }*/

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
        <button onClick={() => changeTemperatureUnit("celsius")}>°C</button> |{" "}
        <button onClick={() => changeTemperatureUnit("fahrenheit")}>F</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  temperatureUnit: state.temperatureUnit,
});

const mapDispatchToProps = {
  changeTemperatureUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTemperature);
