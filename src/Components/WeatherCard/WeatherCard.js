import {
  InvertColors as WaterDropIcon,
  ToggleOff,
  ToggleOn,
} from '@material-ui/icons'
import './WeatherCard.css'

const WeatherCard = ({
  temp,
  skyText,
  humidity,
  unit,
  toggle,
  convert,
  searchData,
  today,
}) => (
  <div className='results-card'>
    <div id='location' className='row'>
      <h4>{searchData}</h4>
      <h6>{today}</h6>
    </div>
    <div id='temp' className='row'>
      <h3>
        {temp}&deg;{unit}
      </h3>
      <span> {skyText}</span>
    </div>
    <div id='humidity' className='row'>
      <span>
        <WaterDropIcon /> {humidity}%
      </span>
      <button type='button' onClick={convert} aria-label='toggle F/C'>
        {toggle ? <ToggleOn /> : <ToggleOff />}
        <span>F/C</span>
      </button>
    </div>
  </div>
)

export default WeatherCard
