import WeatherResults from './Components/WeatherResults/WeatherResults';
import './App.css';
import Header from './Components/Header/Header';

const App = () =>
(
  <div id='top' className='dark background' style={{
    background: `url('${process.env.PUBLIC_URL}/background.jpg') center center repeat-y fixed`
  }}>
    <main>
      <Header />
      <WeatherResults />
    </main>
  </div>
);


export default App
