import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Label>Log In Page</Label>
      <FormGroup>
        <Label for="loginUsername">Username</Label>
        <Input
          onChange={props.handleChanges}
          type="username"
          name="username"
          value={props.username}
          placeholder="Username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="loginPassword">Password</Label>
        <Input
          onChange={props.handleChanges}
          type="password"
          name="password"
          value={props.password}
          placeholder="Password"
        />
      </FormGroup>
      <Button className="btn" onClick={props.handleSubmit}>
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
