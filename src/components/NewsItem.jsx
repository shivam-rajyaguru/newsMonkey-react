import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, descryption } = this.props;
    return (
      <div className="card my-4" style={{ width: "18rem" }}>
        <img
          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZLS7UQ33ORFKHAU2LRCF6LVBHY.jpg&w=1440"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descryption}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
