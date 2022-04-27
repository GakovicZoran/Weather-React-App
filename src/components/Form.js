import React, { useState } from "react";
import Weather from "./Weather";
import "./Form.css";

const Form = () => {
  //State
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const inputHandler = (e) => {
    setLocation(e.target.value);
  };

  //Fetching DATA
  const fetchDataWeather = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key= c6f4963171884eb396b174604222104&q=${location}&days=3&aqi=no&alerts=no`
      );

      //Error handling
      if (!res.ok) {
        throw new Error(alert("Please enter another City.."));
      }

      //Json
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
    setLocation("");
  };

  return (
    <div className="form-container">
      <form>
        <input
          onChange={inputHandler}
          value={location}
          type="text"
          placeholder="Enter City.."
          required
        ></input>
        <button onClick={fetchDataWeather} className="btn-search">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </button>
      </form>
      <Weather data={data} />
    </div>
  );
};

export default Form;
