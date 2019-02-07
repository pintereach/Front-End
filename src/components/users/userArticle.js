import React, { Component } from "react";
import userArticles from "./userArticles";

class userArticle extends Component {
  render() {
    return (
      <div className="article-card">
        <p>{this.props.articles.id}</p>
        <img src={this.props.articles.cover_page} alt="Cover Page" />
        <p>title: {this.props.articles.title} </p>
        <p>link: {this.props.articles.link} </p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default userArticle;
