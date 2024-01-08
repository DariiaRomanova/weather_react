import React from "react";
import { connect } from "react-redux";

function ForecastTemperature({
  maxTemperature,
  minTemperature,
  temperatureUnit,
}) {
  function fahrenheitMax() {
    let fahrenheit = Math.round((maxTemperature * 9) / 5 + 32);
    return fahrenheit;
  }

  function fahrenheitMin() {
    let fahrenheit = Math.round((minTemperature * 9) / 5 + 32);
    return fahrenheit;
  }

  return (
    <div className="WeatherForecast-temp-container">
      <span className="WeatherForecast-max">
        {temperatureUnit === "celsius" ? maxTemperature : fahrenheitMax()}
      </span>
      <span className="WeatherForecast-min">
        {temperatureUnit === "celsius" ? minTemperature : fahrenheitMin()}
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  temperatureUnit: state.temperatureUnit,
});

export default connect(mapStateToProps)(ForecastTemperature);
