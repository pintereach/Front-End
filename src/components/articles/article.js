import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUsersIdArtId, updateUsersIdArtId } from "../../actions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import styled from "styled-components";

const ArticleCard = styled.div`
  width: 100%;
`;
const Desc = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Details = styled.div``;
const Buttons = styled.div``;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover_page: "",
      title: "",
      link: "",
      category_ids: [],
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleDelete = e => {
    e.preventDefault();
    const headersObj = {
      headers: { authorization: this.props.token }
    };

    this.props.deleteUsersIdArtId(
      this.props.userId,
      this.props.articles.id,
      headersObj
    );
  };

  handleUpdate = e => {
    e.preventDefault();
    const token = this.props.token;
    const newPost = {
      cover_page: this.state.cover_page,
      title: this.state.title,
      link: this.state.link,
      category_ids: this.state.category_ids
    };

    this.props.updateUsersIdArtId(
      this.props.userId,
      this.props.articles.id,
      newPost,
      token
    );
    this.props.userArticles();
    this.props.userArticles();
    this.toggle();
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ArticleCard>
        <img src={this.props.articles.cover_page} alt="Cover Page" />
        <Desc>
          <Details>
            <p>title: {this.props.articles.title} </p>
            <p>link: {this.props.articles.link} </p>
          </Details>
          <Buttons>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
            <div>
              <Button color="danger" onClick={this.toggle}>
                Update
              </Button>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>
                  {this.props.articles.id}
                </ModalHeader>
                <Form>
                  <FormGroup>
                    <Label>Cover Page</Label>
                    <Input
                      onChange={this.handleChanges}
                      type="text"
                      name="cover_page"
                      placeholder={this.props.articles.cover_page}
                      value={this.state.cover_page}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      onChange={this.handleChanges}
                      type="text"
                      name="title"
                      placeholder={this.props.articles.title}
                      value={this.state.title}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Link</Label>
                    <Input
                      onChange={this.handleChanges}
                      type="text"
                      name="link"
                      placeholder={this.props.articles.link}
                      value={this.state.link}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Category Id's</Label>
                    <Input
                      onChange={this.handleChanges}
                      type="text"
                      name="category"
                      placeholder="Category"
                    />
                  </FormGroup>
                </Form>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleUpdate}>
                    Update
                  </Button>{" "}
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Buttons>
        </Desc>
      </ArticleCard>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId
  };
};

export default connect(
  mapStateToProps,
  { deleteUsersIdArtId, updateUsersIdArtId }
)(Article);
