import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import User from "./user";

class Users extends Component {
  componentDidMount() {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    this.props.getUsers(headersObj);
    // console.log(headersObj);
  }

  render() {
    {
      console.log(this.props.users);
    }
    return (
      <div>
        <h3>Users</h3>
        {this.props.users ? (
          this.props.users.map(user => {
            return <User user={user} />;
          })
        ) : (
          <h5>No Users</h5>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.token,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
