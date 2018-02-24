import React, { Component } from 'react';
import {connect} from 'react-redux';
//import Chart  from '../components/chart';
import { Link } from 'react-router-dom';

class Weather5Days extends Component {
  getHeader(){
    
    if(this.props.weather5Days.city){
      //console.log("jdiondiod",this.props.weather5Days.city)
      return this.props.weather5Days.city.name
    }
  }
getWeathers(){
  var list =this.props.weather5Days.list;
  if(list){
    const today = new Date();
    const unixDay =86400;
    const unixNow =today.getTime();
  
    
    list = list.filter((elem)=>{
        var timeOfDay=elem.dt % unixDay;
        return ( timeOfDay ===0||timeOfDay=== 32400 || timeOfDay===54000 );
      })
      console.log(list)
    return list.map( elem=>{ 
      const time = elem.dt_txt.split(" ")
      const icon =elem.weather[0].icon+'.png'
      return ( 
        <tr key ={elem.dt}>
          <td>{time[0]}</td>
          <td>{time[1]}</td>
          <td>{ elem.main.temp}</td>
          <td>  <img src={"http://openweathermap.org/img/w/"+icon }/> </td>
        </tr>  
          )
        }
      )
    }
  }                  
  render() {
    return(
      <div>
     { <h3>Weather Forecast for {this.getHeader() }</h3>}
     <Link to="/" className="btn btn-success" >Back</Link>
      <table className="table table-hover">
        <thead>       
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

