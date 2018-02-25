import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';

import {fetch5DaysWeather} from '../actions/index';

class WeatherList extends Component {

  onLinkClicked(city){
    //console.log(city)
   this.props.fetch5DaysWeather(city)
  }
  checkIfReady(cities){
    // if(cities[cities.length-1]===undefined){
      //return ;
    //} 
   return this.props.weather.map((city,index) =>{
    
        const icon =city.weather[0].icon+'.png';
        const temp =Math.round(city.main.temp);
        const humidity = city.main.humidity;
        const pressure = Math.round(city.main.pressure);
        
        return (
          
          <tr className= "row-city"
              key={ index  }  >
            <td   >   { city.name } </td>
            <td> <img src={"http://openweathermap.org/img/w/"+icon } />  </td>
            <td>  { temp } &deg;C   </td>
            <td> { humidity } % </td>
            <td> { pressure } hPa </td>
            <td>
              <Link to ="/forecast" 
                    className='btn btn-primary btn-forecast'
                    onClick= { this.onLinkClicked.bind(this, city.name) }>Forecast 
              </Link>
            </td>
          </tr>
        ) 
      })
  }                    
  render() {
    return(
      <table className="table table-hover">
        <thead>       
          <tr>
            <th>City</th> 
            <th>Weather</th>
            <th>Temperature</th>
            <th>Humiditity</th>
            <th>Preasure </th>
          </tr>
        </thead>
        <tbody>
           {this.checkIfReady(this.props.weather) }
        </tbody>
     </table>
        )
    }
 }

 function mapStateToProps({weather}){
    return {weather}
 }

 function mapDispatchToProps(dispatch){
  return    bindActionCreators({fetch5DaysWeather},dispatch)
}

 export default connect(mapStateToProps,mapDispatchToProps)(WeatherList)

