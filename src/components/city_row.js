import React from 'react'
import { Link } from 'react-router-dom';

export default function(props){

  const icon =props.city.weather[0].icon+'.png';
  const temp =Math.round(props.city.main.temp);
  const humidity = props.city.main.humidity;
  const pressure = Math.round(props.city.main.pressure);
  const descr = props.city.weather[0].description ;

  return (
         
    <tr className= "row-city" onClick={props.onRowClick} >
      <td   >   { props.city.name } </td>
      <td> <img src={"http://openweathermap.org/img/w/"+icon } />  </td>
      <td>{descr} </td>
      <td>  { temp } &deg;C   </td>
      <td> { humidity } % </td>
      <td> { pressure } hPa </td>
      <td>
       {/*  <Link to ="/forecast" 
            className='btn btn-primary btn-lg btn-forecast'
        >Forecast
         </Link> */}
      </td>
    </tr>
    
  ) 
}