import React, { useState } from 'react'
import Header from './Components/Header/Header';
import WeatherResults from './Components/WeatherResults/WeatherResults';
import './App.css';

const App = () => {
  const [searchBarInput, setSearchBarInput] = useState(null);

  const handleSearchInput = (input) => {
    setSearchBarInput(input);
  };

  return (
    <div id='top' className='dark background' style={{
      background: `url('${process.env.PUBLIC_URL}/background.jpg') center center repeat-y fixed`
    }}>
      <main>
        <Header onSearchInput={handleSearchInput} />
        <WeatherResults searchData={searchBarInput} />
      </main>
    </div>
  )
};


export default App
