import WeatherResults from './Components/WeatherResults/WeatherResults';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div id='top' className={`dark background`} style={{
      background: `url(${process.env.PUBLIC_URL + '/background.jpg'}) no-repeat center center fixed`
    }}>
      <main>
        <Header />
        <WeatherResults />
      </main>
    </div>
  );
}

export default App
