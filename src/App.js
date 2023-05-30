import Title from './Components/Title/Title';
import SearchBar from './Components/SearchBar/SearchBar';
import WeatherResults from './Components/WeatherResults/WeatherResults';
import './App.css';

function App() {
  return (
    <div id='top' className={`dark app`} style={{
      background: `url(${process.env.PUBLIC_URL + '/background.jpg'}) no-repeat center center fixed`
    }}>
      <Title />
      <SearchBar />
      <WeatherResults />
    </div>
  );
}

export default App
