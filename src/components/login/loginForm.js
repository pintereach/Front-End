import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const UserName = styled.input`
  width: 200px;
`;

const PassWord = styled.input`
  width: 200px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

class LoginForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Label>Log In Page</Label>
        <Div>
          <Label for="loginUsername">Username</Label>
          <UserName
            onChange={this.props.handleChanges}
            type="username"
            name="username"
            value={this.props.username}
            placeholder="Username"
          />
        </Div>
        <Div>
          <Label for="loginPassword">Password</Label>
          <PassWord
            onChange={this.props.handleChanges}
            type="password"
            name="password"
            value={this.props.password}
            placeholder="Password"
          />
        </Div>
        <Button onClick={this.props.handleSubmit}>Log In</Button>
      </Form>
    );
  }
}

export default LoginForm;
