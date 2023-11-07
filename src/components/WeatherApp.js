import { useEffect, useState } from "react";
import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import "../css/WeatherApp.css";
export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const API_URL = "http://api.weatherapi.com/v1/current.json?&aqi=no";
  const API_KEY = "e7540242958747a780d145853230711";

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(`${API_URL}&key=${API_KEY}&q=${city}`);
      if (request.ok) {
        const json = await request.json();
        setWeather(json);
        console.log(json);
      } else {
        console.error("Error al obtener los datos del tiempo");
      }
    } catch (error) {
      console.error("Error al obtener los datos del tiempo:", error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="weatherCointeiner">
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}
