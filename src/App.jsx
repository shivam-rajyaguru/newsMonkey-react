import React, { Component } from "react";

export default class App extends Component {
  name = "Xyz";
  render() {
    return (
      <h2>
        Hello my name is {this.name} and this is my first class based
        componenets in react js
      </h2>
    );
  }
}
