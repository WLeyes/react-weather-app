import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/GoogleMaps';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;
    console.log(temps);
    return(
      <tr key={ name }>
        <td><GoogleMaps lng={ lon } lat={ lat}/></td>
        <td><Chart data={ temps } color='orange' units="C"/></td>
        <td><Chart data={ pressure } color='blue' units="hPa"/></td>
        <td><Chart data={ humidity } color='grey' units="%"/></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Teperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);