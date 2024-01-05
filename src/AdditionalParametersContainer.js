import React from "react";

import "./AdditionalParametersContainer.css";

export default function AdditionalParametersContainer(props) {
  return (
    <div className="AdditionalParametersContainer">
      <div className="add-param-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
          alt="HumidityIcon"
        />
        <h6>Humidity</h6>
        <p>{props.data.humidity}</p>
      </div>
      <div className="add-param-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/172/172922.png"
          alt="WindIcon"
        />
        <h6>Wind</h6>
        <p>{props.data.wind} m/s</p>
      </div>
      <div className="add-param-card">
        <img
          src="https://cdn4.iconfinder.com/data/icons/weather-287/32/92-_pressure-_air-_wind-_weather-512.png"
          alt="PressureIcon"
        />
        <h6>Pressure</h6>
        <p>{props.data.pressure}</p>
      </div>
    </div>
  );
}
