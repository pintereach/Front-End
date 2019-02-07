import React, { Component } from "react";
import { getUsersArt } from "../../actions";
import { connect } from "react-redux";
import UserArticle from "./userArticle";

class UserArticles extends Component {
  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    const id = this.props.match.params.id;
    this.props.getUsersArt(id, headersObj);
    console.log(id, headersObj);
  };

  render() {
    return (
      <div>
        {this.props.articles ? (
          this.props.articles.map(articles => {
            return (
              <UserArticle
                articles={articles}
                userArticles={this.userArticles}
              />
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
  console.log(state);
  return {
    articles: state.articles,
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { getUsersArt }
)(UserArticles);
