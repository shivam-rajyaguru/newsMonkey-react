import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, descryption, url } = this.props;
    return (
      <div className="my-4">
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descryption}</p>
            <a href="/" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
