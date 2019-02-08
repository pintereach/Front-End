import React, { Component } from "react";
import userArticles from "./userArticles";
import styled from "styled-components";

const ArticleCard = styled.div`
  width: 100%;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const IMG = styled.img`
  max-width: 800px;
`;

class userArticle extends Component {
  render() {
    return (
      <ArticleCard>
        <IMG src={this.props.articles.cover_page} alt="Cover Page" />
        <Desc>
          <p>title: {this.props.articles.title} </p>

          <p>link: {this.props.articles.link} </p>
        </Desc>
      </ArticleCard>
    );
  }
}

export default userArticle;
