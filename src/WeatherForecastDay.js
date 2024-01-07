export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
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
      <div className="WeatherForecast-temp-container">
        <span className="WeatherForecast-max">{maxTemperature()}</span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
