import React, { useState, useEffect } from 'react';

const Result = ({ search }) => {
  const [fetchResult, setFetchResult] = useState('');
  useEffect(() => {
    if (search) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`,
      )
        .then(res => res.json())
        .then(result => {
          setFetchResult({
            Location: result.name,
            Description: result.weather[0].description,
            Temperature: result.main.temperature,
            Humidity: result.main.humidity,
            Max_Temperature: result.main.temp_max,
            Min_Temperature: result.main.temp_min,
          });
        })
        .catch(function() {});
    }
  }, [search]);
  console.log(fetchResult);
  return (
    <ul>
      <li>
        <span>Weather details</span>
      </li>
      <li>
        <div>Location: {fetchResult.Location}</div>
      </li>
      <li>
        <div>Description: {fetchResult.Description}</div>
      </li>
      <li>
        <div>Humidity: {fetchResult.Humidity}</div>
      </li>
      <li>
        <div>Temperature: {fetchResult.Temperature}</div>
      </li>
      <li>
        <div>Max temperature: {fetchResult.Max_Temperature} °C</div>
      </li>
      <li>
        <div>Max temperature: {fetchResult.Min_Temperature} °C</div>
      </li>
    </ul>
  );
};

export default Result;
