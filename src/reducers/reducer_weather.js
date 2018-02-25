import Redux from 'redux';
import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){

   switch(action.type){
        case FETCH_WEATHER:
          if(action.payload.data ){
            return state.concat(action.payload.data)
          }
          
        default:
           return state
    }
}