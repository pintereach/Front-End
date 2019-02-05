import React, { Component } from "react";

class Logout extends Component {
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

  logOut = e => {
    e.preventDefault();
    const creds = (this.state.username, this.state.password);
    localStorage.removeItem("creds", creds);
    window.location.reload();
  };

  render() {
    return (
      <button
        className="social"
        onChange={this.handleChanges}
        value={(this.state.username, this.state.password)}
        onClick={this.logOut}
      >
        Log Out
      </button>
    );
  }
}

export default Logout;
