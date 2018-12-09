import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 11.020121,
        lng: 76.956592
      },
      zoom: 12,
    });
    window.mapObject = map;
  }

  loadScript() {
    let scriptElement = this.buildMap();
    let scriptsOnPage = document.getElementsByTagName('script');
    let script = scriptsOnPage[0];
    script.parentNode.insertBefore(scriptElement, script);
    window.initMap = this.initMap;
  }

  buildMap() {
    let mapScript = document.createElement('script');
    const API_KEY = '';
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

  render() {
    this.loadScript();
    return ( <div className = 'App'>
      <Header />
      <Content />
      </div>
    );
  }
}

export default App;
