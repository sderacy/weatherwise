import React, { useState } from 'react'
import Header from './Components/Header/Header';
import WeatherResults from './Components/WeatherResults/WeatherResults';
import './App.css';

const App = () => {
  const [searchBarInput, setSearchBarInput] = useState('');

  const handleSearchInput = (input) => {
    setSearchBarInput(input);
  };

  return (
    <div id='top' className='dark background' style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/background.jpg')`
    }}>
      <main>
        <Header onSearchInput={handleSearchInput} />
        <WeatherResults searchData={searchBarInput} />
      </main>
    </div>
  )
};


export default App
