import React from 'react';

class List extends React.Component {
  render() {
    const locations = this.props.locations;
    return ( <nav role = "navigation" >
      <div id = "menuToggle" >

      <input id = "togglebut" aria-label = "checkbox" type = "checkbox" />

      <span > </span> 
      <span > </span> 
      <span > </span>

      <ul aria-hidden="true" id = "menu" >
      <div role = "list" id = "list" >
      <h2 >Search</h2> 
      <input id = "filterbar" aria-label = "form" type = "text" value = {this.props.queryString}
      onChange = {e => this.props.handleChange(e.target.value)}/> 
      <ol > {locations.map(loc => 
        ( <li key = {loc.venue.id} >
          <div id="contmap" >
          <p className = "title" >Spot: {" "} <button id = "button" href = "#"
          onClick = {() => this.props.showInfoContent(loc)} > {loc.venue.name} </button > </p > 
          <p > Address: {loc.venue.location.address} </p> 
          </div > 
          </li>))
      } </ol> 
      </div > </ul> </div > </nav>
    );
  }
}

export default List;
