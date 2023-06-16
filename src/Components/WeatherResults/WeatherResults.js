import React, { useState, useEffect } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'

const WeatherResults = ({ searchData }) => {
  const [temp, setTemp] = useState(65)
  const [unit, setUnit] = useState('F')
  const [toggle, setToggle] = useState(false)
  const [skyText, setSkyText] = useState('Cloudy')
  const [humidity, setHumidity] = useState('17')

  const date = new Date()
  const options = { month: '2-digit', day: '2-digit', year: 'numeric' }
  const today = date.toLocaleDateString('en-US', options).replace(/\//g, '-')

  const oppositeUnit = unit === 'C' ? 'F' : 'C'

  const convert = () => {
    if (unit === 'C') {
      const convertedTemp = temp * 1.8 + 32
      setTemp(Math.round(convertedTemp))
      setUnit(oppositeUnit)
      setToggle(!toggle)
    }

    if (unit === 'F') {
      const convertedTemp = ((temp - 32) * 5) / 9
      setTemp(Math.round(convertedTemp))
      setUnit(oppositeUnit)
      setToggle(!toggle)
    }
  }

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${searchData}&aqi=no`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }

      const data = await response.json()

      setToggle(false)
      setUnit('F')
      setTemp(Math.round(data.current.temp_f))
      setSkyText(data.current.condition.text)
      setHumidity(data.current.humidity)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchData !== '') {
      fetchWeatherData()
    }
  }, [searchData])

  return (
    <WeatherCard
      temp={temp}
      skyText={skyText}
      humidity={humidity}
      unit={unit}
      toggle={toggle}
      convert={convert}
      searchData={searchData || 'Trenton'}
      today={today}
    />
  )
}

export default WeatherResults
