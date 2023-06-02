import React, { useState } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard';

const today = new Date().toLocaleDateString()

const WeatherResults = () => {
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

  return (
    <WeatherCard
      temp={temp}
      unit={unit}
      toggle={toggle}
      convert={convert}
      today={today}
    />
  )
}

export default WeatherResults;
