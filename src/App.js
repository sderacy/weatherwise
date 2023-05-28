import SearchBar from './Components/SearchBar/SearchBar';
import WeatherResults from './Components/WeatherResults/WeatherResults';
import './App.css';

function App() {
  return (
    <div id='top' className={`${themeName} app`}>
      <SearchBar />
      <WeatherResults />
    </div>
  );
}

export default App
