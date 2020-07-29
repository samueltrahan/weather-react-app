import React, {
  useState,
  useEffect
} from 'react';
import './App.css';
import Weather from './Weather';
import Loader from './Loader';
import SendMessage from './sendMessage'



function App() {
  const [weatherData, setWeatherData] = useState();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Lafayette, Louisiana');
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=imperial`,
      );
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    };
    getWeather();

  }, [query, API_KEY]);

  function getSearch(event) {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  

  return ( 
    <div className = "App" >
    <h1> Weather </h1> 
    <form onSubmit = {getSearch} >
    <input type = "text" value = {search} onChange = {updateSearch}/> 
    <button type = "submit" >Search</button> 
    </form> 
    <SendMessage />
    {
      weatherData ?
        <div>
        <Weather
        key = {weatherData.id}
        img={weatherData.weather[0].icon}
        name={weatherData.name}
        weather = {weatherData.weather[0].main}
        description = {weatherData.weather[0].description}
        temperature = {weatherData.main.temp}
        feelsLike={weatherData.main.feels_like}/> 
        </div> : <Loader / >
    } 
    </div>
  );
}

export default App;