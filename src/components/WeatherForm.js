import { useState } from "react";
import "../css/WeatherForm.css";
export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input type="text" onChange={onChange} placeholder="London" />
    </form>
  );
}
