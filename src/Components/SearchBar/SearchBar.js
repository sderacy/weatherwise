import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.css'

const SearchBar = () => {

  return (
    <div className="search">
      <input type="text" placeholder="Search.." className='field-search' />
      <button type="submit" className='btn-search'><SearchIcon /></button>
    </div>
  )
}

export default SearchBar;
