import React, {useState, useEffect} from 'react';
import './App.css';
import Weather from './Weather';


function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Lafayette, Louisiana')
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect( () => {
    getWeather();
  }, [query])

  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=imperial`)
    const data = await response.json();
    setWeather(data.weather);
  }

  function getSearch(event) {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }
  

  return (
   <div className="App">
     <h1>Weathered</h1>
    <form onSubmit={getSearch}>
      <input type="text" value={search} onChange={updateSearch} />
      <button type="submit">Search</button>
    </form>
    <div>
      {weather.map(main => (
        <Weather  weather={main.main} description={main.description} temperature={main.temp}/>
      ))}
    </div>
   </div>
  );
}

export default App;
