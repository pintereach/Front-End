import React, { Component } from "react";
import { connect } from "react-redux";
import { postUserArt } from "../../actions";

class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover_page: "",
      title: "",
      link: "",
      category_ids: []
    };
  }

  componentDidMount() {}

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const token = this.props.token;
    const newPost = {
      cover_page: this.state.cover_page,
      title: this.state.title,
      link: this.state.link,
      category_ids: this.state.category_ids
    };

    this.props.postUserArt(token, newPost);
  };

  render() {
    return (
      <form>
        <div>
          <label>Cover Page</label>
          <input
            onChange={this.handleChanges}
            type="text"
            name="cover_page"
            placeholder="Cover Page"
            value={this.state.cover_page}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            onChange={this.handleChanges}
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
          />
        </div>
        <div>
          <label>Link</label>
          <input
            onChange={this.handleChanges}
            type="text"
            name="link"
            placeholder="Link"
            value={this.state.link}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            onChange={this.handleChanges}
            type="text"
            name="category"
            placeholder="Category"
          />
        </div>
        <button onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { postUserArt }
)(ArticleForm);
