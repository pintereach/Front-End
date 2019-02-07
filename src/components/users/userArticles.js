import React, { Component } from "react";
import { getUsersArt } from "../../actions";
import { connect } from "react-redux";

class UserArticles extends Component {
  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    const id = this.props.match.params;
    this.props.getUsersArt(id, headersObj);
    console.log(id, headersObj);
  };

  render() {
    return <h6>User</h6>;
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
  { getUsersArt }
)(UserArticles);
