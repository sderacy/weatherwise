import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const today = new Date().toLocaleDateString();

const WeatherResults = ({ searchData }) => {
  const [temp, setTemp] = useState(0);
  const [unit, setUnit] = useState('F');
  const [toggle, setToggle] = useState(false);
  const [skyText, setSkyText] = useState('Template');
  const [humidity, setHumidity] = useState('0');

  const oppositeUnit = unit === 'C' ? 'F' : 'C';

  const convert = () => {
    if (unit === 'C') {
      const convertedTemp = temp * 1.8 + 32;
      setTemp(Math.round(convertedTemp));
      setUnit(oppositeUnit);
      setToggle(!toggle);
    }

    if (unit === 'F') {
      const convertedTemp = ((temp - 32) * 5) / 9;
      setTemp(Math.round(convertedTemp));
      setUnit(oppositeUnit);
      setToggle(!toggle);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${searchData}&aqi=no`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setTemp(data.current.temp_f);
      setSkyText(data.current.condition.text);
      setHumidity(data.current.humidity);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchData != null) {
      fetchWeatherData();
    }
  }, [searchData]);

  return (
    <WeatherCard
      temp={temp}
      skyText={skyText}
      humidity={humidity}
      unit={unit}
      toggle={toggle}
      convert={convert}
      searchData={searchData || 'Texas'}
      today={today}
    />
  );
};

export default WeatherResults;
