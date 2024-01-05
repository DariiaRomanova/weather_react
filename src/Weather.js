import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeatherContainer from "./CurrentWeatherContainer";
import AdditionalParametersContainer from "./AdditionalParametersContainer";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ weatherResponse: false });

  function updateCity(event) {
    setCity(event.target.value.trim());
  }

  function search() {
    const apiKey = "13c82af55deb0a442283d013d282bd32";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(saveResult);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function saveResult(response) {
    setWeather({
      weatherResponse: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      feelsLike: Math.round(response.data.main.feels_like),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  let form = (
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
  );

  if (weather.weatherResponse) {
    return (
      <div>
        {form}
        <CurrentWeatherContainer data={weather} />
        <AdditionalParametersContainer data={weather} />
      </div>
    );
  } else {
    search();
    return <div>"Loading"</div>;
  }
}
