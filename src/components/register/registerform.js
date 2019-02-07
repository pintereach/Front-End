import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const RegisterForm = props => {
  return (
    <Form onSubmit={props.postAuthReg}>
      <Label>Register Page</Label>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          value={props.username}
          placeholder="Username"
          onChange={props.handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="text"
          name="password"
          value={props.password}
          placeholder="Password"
          onChange={props.handleChanges}
        />
      </FormGroup>
      <Button onClick={props.handleSubmit}>Register</Button>
    </Form>
  );
};

export default RegisterForm;
