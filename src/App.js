import React, { Component } from 'react';
import './App.css';

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
  });
}

loadMyScript(){
  let scriptElement = this.createMyMapScript();
  let scriptsOnPage = document.getElementsByTagName('script');
  let scripts = scriptsOnPage[0];
  scripts.parentNode.insertBefore(scriptElement,scripts);
  window.initMap = this.initMap;
}

createMyMapScript(){
  let mapScript = document.createElement("script");
  const API_KEY = "AIzaSyAssifZMl5AEdnyZK2qjAxSfj7rO4eU97k"
  mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
  mapScript.async = true;
  mapScript.defer = true;
  return mapScript;
}

  render() {
    this.loadMyScript();
    return (
      <div className="App">
        <Headers />
        <Contents />
      </div>
    );
  }
}

export default App;
