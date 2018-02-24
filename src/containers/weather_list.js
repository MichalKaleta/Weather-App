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
  checkIfReady(){
    if(!this.props.weather){
      return null;
    }
   return this.props.weather.map((elem,index)=>{
    
        const city = elem.name;
        const icon =elem.weather[0].icon+'.png';
        const temp =Math.round(elem.main.temp-273.15);
        const humidity = elem.main.humidity;
        const pressure = elem.main.pressure;
        
      
        return (
          
          <tr key={ index  }  >
            <td   >
              { city }
            </td>
            <td>
              <img src={"http://openweathermap.org/img/w/"+icon } />
            </td>
            <td>
              { temp } &deg;C
            </td>
            <td>
              { humidity } %
            </td>
            <td>
              { pressure } hPa
            </td>
          <td>
            <Link to ="/forecast" 
                  className='btn btn-primary'
                  onClick= { this.onLinkClicked.bind(this, city) }>Forecast 
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
           {/* { this.props.weather.map(this.showRow.bind(this)) }  */ this.checkIfReady() }
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

