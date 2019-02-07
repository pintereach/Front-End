import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUsersId, getUsersArt } from "../../actions";
import UserArticles from "../users/userArticles";

class User extends Component {
  render() {
    return (
      <Link to={`/users/${this.props.user.id}/articles`}>
        <p>{this.props.user.display_name}</p>
      </Link>
    );
  }
}

export default User;
