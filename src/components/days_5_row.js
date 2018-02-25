import React from 'react';

const monthNames = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames =['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.']
const timeZone = new Date().getTimezoneOffset();

export default function(props){
 
  const timeToZone = Date.parse(props.elem.dt_txt) + timeZone*1000;
  const time = new Date(timeToZone)     
  const hour = time.getHours();
  const date =time.getDate();
  const day =time.getDay();
  const month =time.getMonth();
  const today =new Date().getDate();
  var dateFormated = (date === today) ? 'Today' :dayNames[day]+' '+ monthNames[month]+' '+date;
      dateFormated = (date === today+1) ? 'Tomorrow     ' : dateFormated;
  const icon =props.elem.weather[0].icon+'.png'
  const temp = Math.round(props.elem.main.temp)
  const descr = props.elem.weather[0].description ;
   const humidity =props.elem.main.humidity;
   const pressure = Math.round(props.elem.main.pressure);
   
  return ( 
    <tr className ='row-5day'>
      <td>
         {dateFormated}
      </td>
      <td>
        {hour}<sup><u>00</u></sup>
      </td>
      <td>
        <img src={"http://openweathermap.org/img/w/"+icon }/>
      </td>
      <td>
      {descr}
      </td>
      <td>
        {temp}&deg;C
      </td>
      <td>
        {humidity}%
      </td>
      <td>
        { pressure}hPa
      </td>
    </tr>  
      )
}