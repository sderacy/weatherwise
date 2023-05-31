import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.css'

const SearchBar = () =>

(
  <div className="search">
    <input type="text" placeholder="Search.." className='field-search' />
    <button type="submit" aria-label="Search for City Button" className='btn-search'><SearchIcon /></button>
  </div>
)


export default SearchBar;
