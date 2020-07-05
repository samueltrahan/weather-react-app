import React, {useState, useEffect} from 'react';
import './App.css';
import Weather from './Weather';


function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Lafayette, Louisiana')
  const API_KEY = process.env.API_KEY;

  useEffect( () => {
    getWeather();
  }, [])

  const getWeather = async () => {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`)
    const data = await response.json();
    setWeather(data)
  }
  

  return (
   <div className="App">
     <h1>Weathered</h1>
    <form>
      <input type="text"/>
      <button>Search</button>
    </form>
    <div>
      <Weather />
    </div>
   </div>
  );
}

export default App;
