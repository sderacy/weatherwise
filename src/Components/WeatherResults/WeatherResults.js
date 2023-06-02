import React, { useState, useEffect } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard';

const today = new Date().toLocaleDateString()

const WeatherResults = ({ searchData }) => {
  const [temp, setTemp] = useState(75);
  const [unit, setUnit] = useState("F");
  const [toggle, setToggle] = useState(false)

  const oppositeUnit = unit === "C" ? "F" : "C";

  const convert = () => {
    if (unit === "C") {
      const convertedTemp = temp * 1.8 + 32;
      setTemp(Math.round(convertedTemp));
      setUnit(oppositeUnit);
      setToggle(!toggle)
    }

    if (unit === "F") {
      const convertedTemp = ((temp - 32) * 5) / 9;
      setTemp(Math.round(convertedTemp));
      setUnit(oppositeUnit);
      setToggle(!toggle)
    }
  };

  console.log(searchData)

  let skyText = ''
  let humidity = ''

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('your-api-url');
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      // Extract temperature data from the API response and set it in the state
      setTemp(data.temp_f);
      skyText = data.condition.text
      humidity = data.humidity
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch weather data from API
    fetchWeatherData();
  }, []);

  return (
    <WeatherCard
      temp={temp}
      skyText={skyText}
      humidity={humidity}
      unit={unit}
      toggle={toggle}
      convert={convert}
      searchData={searchData}
      today={today}
    />
  )
}

export default WeatherResults;
