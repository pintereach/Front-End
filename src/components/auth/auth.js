// import React, { Component } from "react";
// import Login from "../login/login";
// import Register from "../register/register";
// import { connect } from "react-redux";
// import { Route } from "react-router-dom";

// class Authenticate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       registered: false
//     };
//   }

//   handleLogin = () => {
//     this.setState({ registered: false });
//     window.location.reload();
//   };

//   handleRegister = () => {
//     this.setState({ registered: true });
//     window.location.reload();
//     localStorage.removeItem("token");
//   };

//   render() {
//     return (
//       <div>
//         {!this.props.isRegistered
//           ? this.props.history.push("/")
//           : this.props.history.push("/login")}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     isRegistered: state.isRegistered
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(Authenticate);
