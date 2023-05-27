import { useContext } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../Context/theme'

const SearchBar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='btn btn--icon nav_theme pr-1'
      aria-label='toggle theme'
    >
      {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
    </button>
  )
}

export default SearchBar;
