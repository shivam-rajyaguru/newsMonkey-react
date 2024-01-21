import React from "react";
import NewsItem from "./NewsItem";

function News() {
  return (
    <>
      <div className="container my-4">
        <h2 className="my-4">NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
          <div className="col-md-4">
            <NewsItem title="news title" descryption="news descryption" />
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
