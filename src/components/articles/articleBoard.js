import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersArt, deleteUsersIdArtId } from "../../actions";
import Article from "./article";
import ArticleForm from "./articleForm";

class ArticleBoard extends Component {
  componentDidMount() {
    this.userArticles();
    console.log(this.props.articles);
  }

  userArticles = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    const id = this.props.id;
    this.props.getUsersArt(id, headersObj);
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteUsersIdArtId();
  };

  render() {
    return (
      <div>
        <h3>My Articles</h3>
        <ArticleForm />
        {this.props.articles ? (
          this.props.articles.map(articles => {
            return <Article articles={articles} />;
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
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  { getUsersArt, deleteUsersIdArtId }
)(ArticleBoard);
