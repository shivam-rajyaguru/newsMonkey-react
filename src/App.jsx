import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  keyId = "cd507480f5e3479d8631c653496c6df8";
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  apikey={this.keyId}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"business"}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  apikey={this.keyId}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  apikey={this.keyId}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"health"}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  apikey={this.keyId}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"science"}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  apikey={this.keyId}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"sports"}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  apikey={this.keyId}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"technology"}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  apikey={this.keyId}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
