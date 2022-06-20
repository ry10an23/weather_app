import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7be840106bd6433d60763025e19c7a87`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  return (
    <div className={(typeof data.weather != "undefined") ? 
    ((data.weather[0].main === "Clear") ? "app clear" :
     (data.weather[0].main === "Clouds") ? "app clouds" :
     (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") ? "app rain" :
     (data.weather[0].main === "Fog") ? "app fog" :
     (data.weather[0].main === "Fog" || data.weather[0].main === "Haze" || data.weather[0].main === "Dust") ? "app fog" :
     (data.weather[0].main === "Thunderstorm") ? "app thunder" :
     (data.weather[0].main === "Snow") ? "app snow" : "app") : "app" }>
      <div className="search">
        <input 
        value={location} 
        onChange={event => setLocation(event.target.value)} 
        onKeyPress={searchLocation}
        placeholder="Enter Location" 
        type="text"></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{parseFloat(data.main.temp - 273.15).toFixed(1)}℃</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].icon}</p> : null}
          </div>
        </div>

      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{parseFloat(data.main.feels_like - 273.15).toFixed(1)}℃</p> : null}
            <p className="bold">Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p className="bold">Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
            <p className="bold">Wind Speed</p>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default App;
