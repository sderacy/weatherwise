import WaterDropIcon from '@material-ui/icons/InvertColors';
import './WeatherResults.css'

let today = new Date().toLocaleDateString()

const WeatherResults = () => {

  return (
    <div className='results-card'>
      <div id='location' className='row'>
        <h4>Ewing</h4>
        <h6>{today}</h6>
      </div>
      <div id='temp' className='row'>
        <h3>13&deg; C</h3>
        <span> Stormy </span>
      </div>
      <div id='humidity' className='row'>
        <span><WaterDropIcon /> 86%</span>
      </div>
    </div>
  )
}

export default WeatherResults;
