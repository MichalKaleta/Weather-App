import { combineReducers } from 'redux';
import  WeatherReducer from './reducer_weather'
import  Weather5DaysReducer from './reducer_5_day'


const rootReducer = combineReducers({
  weather: WeatherReducer,
  weather5Days: Weather5DaysReducer
});

export default rootReducer;


