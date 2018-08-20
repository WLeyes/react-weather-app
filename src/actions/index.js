import apiKey from '../Config';
import axios from 'axios';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${apiKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(CITY) {
  const url = `${ROOT_URL}&q=${CITY},'ca'`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}