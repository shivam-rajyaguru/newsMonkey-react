import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, descryption, urlImage, url, author, date } = this.props;
    return (
      <div className="my-4">
        <div className="card my-3">
          <img src={urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descryption}</p>
            <a href={url} target="_blank" className="btn btn-primary">
              Read More
            </a>
            <div className="card-footer my-3">
              <small className="text-muted h6">
                Author : {author ? author : "Unknown"} <br></br>
                Time : {new Date(date).toGMTString()}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
