import axios from "axios";
import "./WeatherForecast.css";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastResponse, setForecastResponse] = useState(false);
  const [forecast, setForecast] = useState(null);

  function search() {
    const apiKey = "od6b13a01c4ef9abd54c31t431434300";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
  }
  function handleSearch(response) {
    setForecast(response.data.daily);
    setForecastResponse(true);
    console.log(response.data.daily);
  }

  if (forecastResponse) {
    return <WeatherForecastDay data={forecast} />;
  } else {
    search();
  }
}
