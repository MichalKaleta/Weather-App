import Redux from 'redux';
import { FETCH_5DAYS_WEATHER } from '../actions/index';

export default function(state={}, action){

  switch(action.type){
    case FETCH_5DAYS_WEATHER:
      return action.payload.data;
    
      default: 
        return state;
   }
  
}