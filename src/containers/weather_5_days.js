import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Chart  from '../components/chart';
import WeatherRow from '../components/days_5_row'

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
      return(  <div className="text-center">  
                   <i className="fa fa-spinner fa-spin" style={{fontSize: "15em" }} ></i>
               </div>
               )
     }
    return(
    
      <table className="table table-striped table-hover">
          <thead>      
            <tr>
              <th>Date</th>
              <th>Hour</th>
              <th>Aura</th>
              <th>Weath</th>
              <th>Temp</th>
              <th>Hum</th>
              <th>Press</th>
            </tr>
          </thead>
          <tbody>{
            list.map( elem=>{ 
              return <WeatherRow  key ={elem.dt} elem = { elem } />
                  })
          }</tbody>
      </table>
    )
           
  }                  
  render() {
    return(
      <div>
        <div > 
          <div className="page-header d-flex justify-content-between" >
            <h1 className="d-inline">Weather Forecast for {this.getHeader() }</h1>
              <Link to="/" className="btn btn-warning btn-lg right rounded-0 btn-back">Back To List</Link>
          </div>
        </div>
        <div>
          <Chart data={this.getDataforChart()}/>
        </div>  
          {this.getWeathers()}
      </div>
        )
    }
 }

 function mapStateToProps({weather5Days}){
    return {weather5Days}
 }

 export default connect(mapStateToProps)(Weather5Days)

