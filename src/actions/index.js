import apiKey from '../Config';
import axios from 'axios';
const rootURL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${apiKey}`;

export const fetchWeather = 'fetchWeather';

export function fetchWeather(city,countryCode) {
  const url = `${rootURL}&q=${city},${countryCode}`;
  const request = axios.get(url);
  return {
    type: fetchWeather,
    payload: request
  };
}