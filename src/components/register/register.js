import React, { Component } from "react";
import { connect } from "react-redux";
import { postAuthReg } from "../../actions";
import RegisterForm from "./registerform";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      display_name: "",
      password: this.state.password,
      email: "",
      img_url: ""
    };
    console.log(newUser);
    this.props.postAuthReg(newUser);
    this.setState({
      username: "",
      displayName: "",
      password: ""
    });
  };

  toLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        {!this.props.isRegistered ? (
          <div>
            <RegisterForm
              handleChanges={this.handleChanges}
              handleSubmit={this.handleSubmit}
              username={this.state.username}
              password={this.state.password}
            />
            <button onClick={this.toLogin}>Login</button>
          </div>
        ) : (
          this.props.history.push("/login")
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.isRegistered
  };
};

export default connect(
  mapStateToProps,
  { postAuthReg }
)(Register);
