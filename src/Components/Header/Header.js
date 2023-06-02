import React, { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";

const Header = ({ onSearchInput }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (input) => {
    setSearchInput(input);
    onSearchInput(searchInput)
  };

  return (
    <header>
      <Title />
      <SearchBar onInput={handleSearchInput} />
    </header>
  )
};


export default Header;
