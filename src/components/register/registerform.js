import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
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

const RegisterForm = props => {
  return (
    <Form onSubmit={props.postAuthReg}>
      <Label>Register Page</Label>
      <Div>
        <Label>Username</Label>
        <UserName
          type="text"
          name="username"
          value={props.username}
          placeholder="Username"
          onChange={props.handleChanges}
        />
      </Div>
      <Div>
        <Label>Password</Label>
        <PassWord
          type="text"
          name="password"
          value={props.password}
          placeholder="Password"
          onChange={props.handleChanges}
        />
      </Div>
      <Button onClick={props.handleSubmit}>Register</Button>
    </Form>
  );
};

export default RegisterForm;
