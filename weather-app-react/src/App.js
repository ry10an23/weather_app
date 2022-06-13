import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=7be840106bd6433d60763025e19c7a87`
  
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Vancouver</p>
          </div>
          <div className="temp">
            <h1>15℃</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>14℃</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
