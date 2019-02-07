import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersArt, deleteUsersIdArtId } from "../../actions";
import Article from "./article";
import ArticleForm from "./articleForm";

class ArticleBoard extends Component {
  componentDidMount() {
    this.userArticles();
    // console.log(this.props.articles);
  }

  userArticles = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    const id = this.props.userId;
    this.props.getUsersArt(id, headersObj);
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteUsersIdArtId();
  };

  render() {
    {
      console.log(this.props.articles);
    }
    return (
      <div>
        <h3>New Article</h3>
        <ArticleForm userArticles={this.userArticles} />
        <h3>My Articles</h3>
        {this.props.articles ? (
          this.props.articles.map(articles => {
            return (
              <Article articles={articles} userArticles={this.userArticles} />
            );
          })
        ) : (
          <h4>No Articles :/</h4>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    token: state.token,
    userId: state.userId
  };
};

export default connect(
  mapStateToProps,
  { getUsersArt, deleteUsersIdArtId }
)(ArticleBoard);
