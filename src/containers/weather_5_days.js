import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart  from '../components/chart';
import { Link } from 'react-router-dom';

const monthNames = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames =['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.']
class Weather5Days extends Component {
  getHeader(){
    
    if(this.props.weather5Days.city){
      return this.props.weather5Days.city.name
    }
  }
  getDataforChart(){
    var list =this.props.weather5Days.list;
    if(list){
      return list.map(elem=>{
        return elem.main.temp;       
      })
    }
    return [];
  }
  getWeathers(){
    var list =this.props.weather5Days.list;
    if(!list){
      return; 
    }
      
      const timeZone = new Date().getTimezoneOffset();

    /*  list = list.filter((elem)=>{
          var timeOfDay=elem.dt % unixDay;
          return ( timeOfDay ===0||timeOfDay=== 32400 || timeOfDay===54000 );
      }) */
      return list.map( elem=>{ 

        const timeToZone = Date.parse(elem.dt_txt) + timeZone*60000;
        const time = new Date(timeToZone)     
        const hour = time.getHours();
        const date =time.getDate();
        const day =time.getDay();
        const month =time.getMonth();
        const today =new Date().getDate();
    
        var dateFormated= (date === today) ? 'Today' :dayNames[day]+' '+ monthNames[month]+' '+date;
            dateFormated = (date === today+1) ? 'Tomorrow' : dateFormated;
        const icon =elem.weather[0].icon+'.png'
        const temp = Math.round(elem.main.temp)
        return ( 
          <tr key ={elem.dt}>
            <td>{dateFormated}</td>
            <td>{hour}<sup>00</sup></td>
            <td>  <img src={"http://openweathermap.org/img/w/"+icon }/> </td>
            <td>{temp} &deg;C</td>
          </tr>  
            )
        }
      ) 
  }                  
  render() {
    return(
      <div>
     { <h3>5-day Weather Forecast for {this.getHeader() }</h3>}
      <Link to="/" className="btn btn-success" >Back</Link>
     *according to Your local time zone
      <table className="table table-hover">
        <thead>      
        <tr><th colspan="5"><Chart data={this.getDataforChart()}/></th></tr>  
          <tr>
          <th>Day</th>
           <th>Weather</th>
           <th>Tempertures</th>
           <th>Humidities</th>
           <th>Preasures</th>
          </tr>
        </thead>
        <tbody>
          
           {  this.getWeathers() } 
        </tbody>
     </table>
     </div>
        )
    }
 }

 function mapStateToProps({weather5Days}){
    return {weather5Days}
 }

 export default connect(mapStateToProps)(Weather5Days)

