import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';   
import {Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import {fetch5DaysWeather} from '../actions/index';
import CityRow  from '../components/city_row';

class WeatherList extends Component {
constructor(props){
  super(props)
    this.state={};
}
  onLinkClicked(city){
console.log(this)
this.setState({redirect: true});
   this.props.fetch5DaysWeather(city);
 
  }

  renderCities(cities){
     const lastCity=cities[cities.length-1]
    
      return (
       
           cities.map((city,index) =>{
                if(index < cities.length-1 && cities.length >1 && lastCity.name === city.name){
                   cities.pop()  ;
                  }
            return( <CityRow onRowClick= {this.onLinkClicked.bind(this,city.name)}
                    key={index } 
                    city ={city}   
              />) }
           ) 
        )
  }                    
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/forecast" />;
    }
    return(
  
      <table className="table table-striped table-hover">
        <thead >       
          <tr>
            <th >City</th> 
            <th>Aura</th>
            <th>Weath</th>
            <th>Temp</th>
            <th>Humi</th>
            <th>Press</th>
          </tr> 
        </thead>
        <tbody>
           {this.renderCities(this.props.weather) }
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

