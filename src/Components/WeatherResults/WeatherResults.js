import { InvertColors as WaterDropIcon, ToggleOff, ToggleOn } from '@material-ui/icons';
import './WeatherResults.css'

const today = new Date().toLocaleDateString()

const WeatherResults = () => (
  <div className='results-card'>
    <div id='location' className='row'>
      <h4>Ewing</h4>
      <h6>{today}</h6>
    </div>
    <div id='temp' className='row'>
      <h3>75&deg; F</h3>
      <span> Stormy </span>
    </div>
    <div id='humidity' className='row'>
      <span><WaterDropIcon /> 86%</span>
      <span><ToggleOff /> F/C</span>
    </div>
  </div>
)


export default WeatherResults;
