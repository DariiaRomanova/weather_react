import React from "react";

import "./CurrentWeatherContainer.css";

export default function CurrentWeatherContainer(props) {
  return (
    <div className="CurrentWeatherContainer">
      <div className="DatePlace">
        <h1 className="city-name">{props.city}</h1>
        <h2 className="country-name">{props.country}</h2>
        <p className="date-time">December, 15. Friday, 14:46</p>
      </div>
      <div className="CurrentWeather">
        <div className="current-temperature-container">
          <div className="current-weather-icon">
            <img src={props.iconUrl} alt="CurrentWeatherIcon" />
          </div>
          <div className="current-temp-value temp-value">
            {props.temperature}
          </div>
          <div className="current-temp-unit">°C</div>
        </div>
        <div className="description-container">
          <span className="current-weather-description">
            {props.descriprion}
          </span>
          <span className="current-weather-description">•</span>
          <span className="current-weather-description">
            Feels like {props.feelsLike}°C
          </span>
        </div>
      </div>
    </div>
  );
}
