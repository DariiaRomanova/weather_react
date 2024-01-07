import axios from "axios";
import "./WeatherForecast.css";
import { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastResponse, setForecastResponse] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecastResponse(false);
  }, [props.coordinates]);

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
  }

  if (forecastResponse) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 7) {
            return <WeatherForecastDay data={dailyForecast} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    search();
    return null;
  }
}
