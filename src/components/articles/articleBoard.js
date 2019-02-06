import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersArt } from "../../actions";
import Article from "./article";
import ArticleForm from "./articleForm";

class ArticleBoard extends Component {
  componentDidMount() {
    this.userArticles();
    console.log(this.props.articles);
  }

  componentDidUpdate() {}

  userArticles = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    const id = this.props.id;
    this.props.getUsersArt(id, headersObj);
  };

  render() {
    return (
      <div>
        <h3>My Articles</h3>
        <ArticleForm />
        {/* {this.props.articles.articles.map(data => {
          return <Article />;
        })} */}
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
  { getUsersArt }
)(ArticleBoard);
