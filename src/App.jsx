import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

export default class App extends Component {
  name = "Xyz";
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={20} country="in" category="entertainment" />
      </>
    );
  }
}
