import React, { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";

const Header = ({ onSearchInput }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (input) => {
    setSearchInput(input)

    // searchInput isn't used here because it's faster to pass the state 
    // directly instead of using the searchInput variable. 
    onSearchInput(input)
  };

  return (
    <header>
      <Title />
      <SearchBar onInput={handleSearchInput} />
    </header>
  )
};


export default Header;
