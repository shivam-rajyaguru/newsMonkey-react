import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const keyId = "cd507480f5e3479d8631c653496c6df8";

  const [progress, setProgress] = useState(0);
  // setProgress(progress);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
                apikey={keyId}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key={"business"}
                pageSize={pageSize}
                country="in"
                category="business"
                apikey={keyId}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key={"entertainment"}
                pageSize={pageSize}
                country="in"
                category="entertainment"
                apikey={keyId}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key={"health"}
                pageSize={pageSize}
                country="in"
                category="health"
                apikey={keyId}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key={"science"}
                pageSize={pageSize}
                country="in"
                category="science"
                apikey={keyId}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key={"sports"}
                pageSize={pageSize}
                country="in"
                category="sports"
                apikey={keyId}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key={"technology"}
                pageSize={pageSize}
                country="in"
                category="technology"
                apikey={keyId}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
