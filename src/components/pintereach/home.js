import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getUsersId } from "../../actions";
import Profile from "./profile";
import ArticleBoard from "../articles/articleBoard";

class Home extends Component {
  componentDidMount() {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    this.props.getUsers(headersObj);
    // console.log(headersObj);
  }

  render() {
    return (
      <div className="myboard">
        <h1>My Board</h1>
        <div className="profile-board">
          <Profile />
        </div>
        <div className="article-board">
          <ArticleBoard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { getUsers, getUsersId }
)(Home);
