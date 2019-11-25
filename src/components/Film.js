import React, { Component } from "react";

class Film extends Component {
  render() {
    return (
      <div className="film">
      <ul>
      <li><h3>{this.props.name}</h3></li>
      </ul>
      </div>
    );
  }
}

export default Film;
