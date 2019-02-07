import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="article-card">
        <img src={this.props.articles.cover_page} alt="Cover Page" />
        <p>title: {this.props.articles.title} </p>
        <p>link: {this.props.articles.link} </p>
        <button>Delete</button>
      </div>
    );
  }
}

export default Article;
