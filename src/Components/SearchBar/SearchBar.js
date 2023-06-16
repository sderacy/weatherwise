import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.css'

const SearchBar = ({ onInput }) => {
  const [input, setInput] = useState('')

  const handleSearch = () => {
    if (input.trim() !== '') {
      onInput(input)
    }
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const detectEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='search'>
      <input
        id='searchField'
        type='text'
        placeholder='City (e.g. Ewing)'
        className='field-search'
        value={input}
        onChange={handleChange}
        onKeyUp={detectEnter}
      />
      <button
        id='searchBtn'
        type='submit'
        aria-label='Search for City Button'
        className='btn-search'
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
