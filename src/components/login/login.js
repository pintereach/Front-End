import React, { Component } from "react";
import { postAuthLogin } from "../../actions";
import { connect } from "react-redux";
import LoginForm from "./loginForm";
import styled from "styled-components";

const LogIn = styled.div`
  margin: 0 auto;
  width: 880px;
  background-color: lightgrey;
`;

class Login extends Component {
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
    const creds = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(creds);
    this.props.postAuthLogin(creds);
    this.setState({
      username: "",
      password: ""
    });
  };

  toHome = () => {
    if (this.props.isLoggedIn) {
      this.props.history.push("/user");
      console.log("to Home");
    } else {
      console.log("toHome failed");
    }
    console.log("works");
  };

  render() {
    console.log(localStorage);
    return (
      <LogIn>
        {!this.props.isLoggedIn ? (
          <LoginForm
            handleChanges={this.handleChanges}
            handleSubmit={this.handleSubmit}
            username={this.state.username}
            password={this.state.password}
            toHome={this.toHome}
          />
        ) : (
          this.props.history.push("/user")
        )}
      </LogIn>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { postAuthLogin }
)(Login);
