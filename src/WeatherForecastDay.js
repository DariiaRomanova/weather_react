import React, { useState } from "react";
import ForecastTemperature from "./ForecastTemperature";

export default function WeatherForecastDay(props) {
  const [minTemperature, setMinTemperature] = useState(
    props.data.temperature.minimum
  );
  const [maxTemperature, setMaxTemperature] = useState(
    props.data.temperature.maximum
  );

  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="WeatherForecastDay">
      <p className="WeatherForecast-day">{day()}</p>
      <img
        src={props.data.condition.icon_url}
        alt="Weather Icon"
        className="WeatherForecast-icon"
      />
      <ForecastTemperature
        maxTemperature={Math.round(maxTemperature)}
        minTemperature={Math.round(minTemperature)}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
}
