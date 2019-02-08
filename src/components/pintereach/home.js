import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getUsersId } from "../../actions";
import Profile from "./profile";
import ArticleBoard from "../articles/articleBoard";
import Users from "./users";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: grey;
`;

const H1 = styled.h1`
  color: white;
`;
const Btn = styled.div`
  padding-top: 5px;
`;

const Board = styled.div`
  margin: 0 auto;
  width: 880px;
  background-color: lightgrey;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`;
const ProfileDiv = styled.div``;
const UserDiv = styled.div``;
const ArticleDiv = styled.div`
  padding-top: 25px;
`;

class Home extends Component {
  toLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <Header>
          <H1>My Board</H1>
          <Btn>
            <Button onClick={this.toLogin}>Log Out</Button>
          </Btn>
        </Header>
        <Board>
          <Top>
            <ProfileDiv>
              <h3>My Profile</h3>
              <div className="profile-board">
                <Profile />
              </div>
            </ProfileDiv>
            <UserDiv>
              <Users />
            </UserDiv>
          </Top>

          <ArticleDiv>
            <ArticleBoard />
          </ArticleDiv>
        </Board>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { getUsers, getUsersId }
)(Home);
