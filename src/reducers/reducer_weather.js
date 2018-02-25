import Redux from 'redux';
import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){

   switch(action.type){
        case FETCH_WEATHER:
        // console.log(state.concat(action.payload.data));
         if(action.payload.data){
            return state.concat(action.payload.data);
           } else {return state}
        
        default:
           return state
    }
}