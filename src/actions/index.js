import axios from 'axios';

const API_KEY = '&APPID=00142f890acd418093b51ebd37cc2d10';
const API_URL_5DAYS = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const API_URL_CURRENT ='http://api.openweathermap.org/data/2.5/weather?q='

export const FETCH_WEATHER = "FETCH_WEATHER"
export const FETCH_5DAYS_WEATHER ='FETCH_5DAYS_WEATHER'

export function fetchWeather(city) {
    
  const url = API_URL_CURRENT + city + API_KEY+'&units=metric';
    
  return {
    type: FETCH_WEATHER,
    payload: axios.get(url)
  }
}
export function fetch5DaysWeather(city) {
  
  const url = API_URL_5DAYS + city + API_KEY+'&units=metric';

  return {
    type: FETCH_5DAYS_WEATHER,
    payload: axios.get(url)
  }
}
