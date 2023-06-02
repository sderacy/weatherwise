import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.css'

const SearchBar = ({ onInput }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSearch = () => {
    onInput(input);
  }

  const detectEnter = (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("searchBtn").click();
    }
  }

  return (
    <div className="search">
      <input id='searchField' type="text" placeholder="City (e.g. Ewing)" className='field-search' value={input} onChange={handleChange} onKeyUp={detectEnter} />
      <button id='searchBtn' type="submit" aria-label="Search for City Button" className='btn-search' onClick={handleSearch}><SearchIcon /></button>
    </div>
  )
}

export default SearchBar
