import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersId } from "../../actions";

class Profile extends Component {
  componentDidMount() {
    this.userId();
  }
  userId = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    const id = this.props.id;
    this.props.getUsersId(id, headersObj);
    console.log(id, headersObj);
  };

  render() {
    return (
      <div className="profile">
        <div>
          <img src={this.props.user.img_url} alt="Profile Pic" />
        </div>
        <div>
          <p>Username: {this.props.user.username}</p>
          <p>Display Name: {this.props.user.display_name}</p>
          <p>Email: {this.props.user.email}</p>
        </div>
        <button>Edit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  { getUsersId }
)(Profile);
