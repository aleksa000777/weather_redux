import axios from 'axios';

const API_KEY = 'e933cfdee97cd95bda775a9a01369d13';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;
const ROOT_URL2 = `&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us${ROOT_URL2}`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request

  }
}
