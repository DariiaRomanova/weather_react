import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeatherContainer from "./CurrentWeatherContainer";
import AdditionalParametersContainer from "./AdditionalParametersContainer";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ weatherResponse: false });

  function updateCity(event) {
    setCity(event.target.value.trim());
  }

  function search() {
    const apiKey = "od6b13a01c4ef9abd54c31t431434300";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(saveResult);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function saveResult(response) {
    console.log(response);
    setWeather({
      weatherResponse: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      country: response.data.country,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      /*feelsLike: Math.round(response.data.main.feels_like),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,*/
      iconUrl: response.data.condition.icon_url,
      coordinates: response.data.coordinates,
    });
  }

  if (weather.weatherResponse) {
    return (
      <div>
        <form className="Search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            autoFocus="on"
            className="search-form-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
        <CurrentWeatherContainer data={weather} />
        <AdditionalParametersContainer data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>"Loading"</div>;
  }
}
