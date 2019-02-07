import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getUsersId } from "../../actions";
import Profile from "./profile";
import ArticleBoard from "../articles/articleBoard";
import Users from "./users";

class Home extends Component {
  // componentDidMount() {
  //   const headersObj = {
  //     headers: { authorization: this.props.token }
  //   };
  //   this.props.getUsers(headersObj);
  //   // console.log(headersObj);
  // }

  toLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="myboard">
        <h1>My Board</h1>
        <button onClick={this.toLogin}>Log Out</button>
        <h3>My Profile</h3>
        <div className="profile-board">
          <Profile />
        </div>
        <div className="users">
          <Users />
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
