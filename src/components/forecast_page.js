import React, { Component } from 'react';
import Weather5Days from '../containers/weather_5_days'

console.log("ddd")
export default class ForecastPage extends Component {
  render() {
    return (
      <div>
        <Weather5Days />
      </div>
    );
  }
}