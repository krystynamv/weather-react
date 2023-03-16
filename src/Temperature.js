import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Temperature() {
  function formatDate() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "406o1adt7f40afb89770b724b7b34ae4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="input-form"
        type="search"
        placeholder="City search..."
        name="city-name"
        onChange={updateCity}
      />
      <button className="button-form" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );

  return (
    <div>
      {form}
      <div className="row">
        <div className="col">
          <ul className="current-time">
            <li>
              <h1>{city}</h1>
            </li>
            <li>{formatDate()}</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <div className="d-flex weather-temperature">
                <div>
                  <strong className="temperature">
                    {Math.round(weather.temperature)}
                  </strong>
                  <span className="units">C°</span>
                </div>
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="temperature-icon"
                />
              </div>
            </li>
            <li>
              Humidity: <span>{Math.round(weather.humidity)}</span>%
            </li>
            <li>
              Wind: <span>{Math.round(weather.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
