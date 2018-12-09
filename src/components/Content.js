import React from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from '../api/Locations';

class Content extends React.Component {
  state = {
    locations: [],
    queryResult: [],
    query: ''
  };
  componentDidMount() {
    LocationsAPI.fetchLocation().then(response => this.setState({
      locations: response,
      queryResult: response
    }));
  }

  //to display data
  handleClickEvent = (location) => {
    for (let i = 0; i < window.markers.length; i++) {
      if (location.venue.id === window.markers[i].title) {
        let content = this.prepareContent(location);
        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, window.markers[i]);
        window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
      }
    }
  }

  prepareContent = location => {
    return `<div>
    <p className="title">
      Name: <a href="http://google.com/maps/search/${location.venue.name}/@11.020121,76.956592" target="_blank">${location.venue.name}</a>
    </p>
    <p>Address: ${location.venue.location.address}</p>
  </div>`;
  };

  handleTextChange = query => {
    this.setState({
      query
    });
    if (query) {
      this.setState({
        locations: this.filterLocations(query, this.state.locations)
      });
    } else {
      this.setState({
        locations: this.state.queryResult
      });
    }
  };

  //to filter out locations accordingly
  filterLocations = (query, locations) => {
    return locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()));
  };

  render() {
    return ( <div className = "Contents" >
      <List locations = {
        this.state.locations
      }
      showInfoContent = {
        this.handleClickEvent
      }
      queryString = {
        this.state.query
      }
      handleChange = {
        this.handleTextChange
      }/> 
      <Map locations = {
        this.state.locations
      }
      prepareContent = {
        this.prepareContent
      }/> 
      </div >
    );
  }
}

export default Content;