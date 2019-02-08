import React, { Component } from "react";
import { connect } from "react-redux";
import { postAuthReg } from "../../actions";
import RegisterForm from "./registerform";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const Reg = styled.div`
  margin: 0 auto;
  width: 880px;
  background-color: lightgrey;
`;

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
      <Reg>
        {!this.props.isRegistered ? (
          <div>
            <RegisterForm
              handleChanges={this.handleChanges}
              handleSubmit={this.handleSubmit}
              username={this.state.username}
              password={this.state.password}
            />
            <Button onClick={this.toLogin}>Login</Button>
          </div>
        ) : (
          this.props.history.push("/login")
        )}
      </Reg>
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
