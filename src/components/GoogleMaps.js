import React, { Component } from 'react';
const google = window.google;
export default class GoogleMaps extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 12
    });
  }
  render() {
    return <div ref="map" />
  }
}