import React, { Component } from "react";

const NewsItem = (props) => {
  // let { title, descryption, urlImage, url, author, date } = this.props;
  return (
    <div className="my-4">
      <div className="card my-3">
        <img src={props.urlImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.descryption}</p>
          <a href={props.url} target="_blank" className="btn btn-primary">
            Read More
          </a>
          <div className="card-footer my-3">
            <small className="text-muted h6">
              Author : {props.author ? props.author : "Unknown"} <br></br>
              Time : {new Date(props.date).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
