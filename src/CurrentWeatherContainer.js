import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import CurrentTemperature from "./CurrentTemperature.js";

import "./CurrentWeatherContainer.css";

export default function CurrentWeatherContainer(props) {
  const [temperature, setTemperature] = useState(props.data.temperature);
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  const changeTemperatureUnit = (unit) => {
    setTemperatureUnit(unit);
  };
  return (
    <div className="CurrentWeatherContainer">
      <div className="DatePlace">
        <h1 className="city-name">{props.data.city}</h1>
        <h2 className="country-name">{props.data.country}</h2>
        <p className="date-time">
          <FormattedDate date={props.data.date} />
        </p>
      </div>
      <div>
        <div className="current-temperature-container">
          <div className="current-weather-icon">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <p className="current-weather-description">
              {props.data.description}
            </p>
          </div>
          <CurrentTemperature
            temperature={temperature}
            temperatureUnit={temperatureUnit}
            changeTemperatureUnit={changeTemperatureUnit}
          />
        </div>
      </div>
    </div>
  );
}
