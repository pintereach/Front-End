import axios from "axios";

export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const FETCHING_ARTICLES_SUCCESS = "FETCHING_ARTICLES_SUCCESS";
export const FETCHING_ARTICLES_FAILURE = "FETCHING_ARTICLES_FAILURE";

export const ADDING_ARTICLES_REQUEST = "ADDING_ARTICLES_REQUEST";
export const ADDING_ARTICLES_SUCCESS = "ADDING_ARTICLES_SUCCESS";
export const ADDING_ARTICLES_FAILURE = "ADDING_ARTICLES_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FETCHING_USER = "FETCHING_USER";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";

export const FETCHING_USER_ID = "FETCHING_USER_ID";
export const FETCHING_USER_ID_SUCCESS = "FETCHING_USER_ID_SUCCESS";
export const FETCHING_USER_ID_FAILURE = "FETCHING_USER_ID_FAILURE";

//auth
export const postAuthReg = newUser => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  axios
    .post("https://pintereach.herokuapp.com/auth/register", newUser)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      // console.log(res);
      if (res.data.token) {
        console.log("got token");
        localStorage.setItem("token", res.data.token);
      }
      if (res.data.id) {
        console.log("got id");
        localStorage.setItem("id", res.data.id);
      }
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
      console.log(err.response);
    });
};

export const postAuthLogin = creds => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("https://pintereach.herokuapp.com/auth/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

//users
export const getUsers = headersObj => dispatch => {
  dispatch({ type: FETCHING_USER });
  axios
    .get("https://pintereach.herokuapp.com/users", headersObj)
    .then(res => dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_USER_FAILURE, payload: err }));
};

export const getUsersId = (id, headersObj) => dispatch => {
  dispatch({ type: FETCHING_USER_ID });
  axios
    .get(`https://pintereach.herokuapp.com/users/${id}`, headersObj)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_USER_ID_SUCCESS, payload: res.data[0] });
    })
    .catch(err => dispatch({ type: FETCHING_USER_ID_FAILURE, payload: err }));
};

export const getUsersArt = (id, headersObj) => dispatch => {
  dispatch({ type: FETCHING_ARTICLES });
  axios
    .get(`https://pintereach.herokuapp.com/users/${id}/articles`, headersObj)
    .then(res =>
      dispatch({ type: FETCHING_ARTICLES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCHING_ARTICLES_FAILURE, payload: err }));
};

export const postUserArt = (token, newPost) => dispatch => {
  dispatch({ type: ADDING_ARTICLES_REQUEST });
  axios
    .post(`https://pintereach.herokuapp.com/users/articles`, newPost, {
      headers: { Authorization: token }
    })
    .then(res => dispatch({ type: ADDING_ARTICLES_SUCCESS, payload: res.data }))
    .catch(err => {
      dispatch({ type: ADDING_ARTICLES_FAILURE, payload: err });
      console.log(err.response);
    });
};

// export const putUsers = (id, headersObj) => dispatch => {
//   dispatch({ type: UPDATING });
//   axios
//     .put(`https://pintereach.herokuapp.com/users/${id}/articles`, headersObj)
//     .then(res => dispatch({ type: UPDATED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const deleteUsers = headersObj => dispatch => {
//   dispatch({ type: DELETING });
//   axios
//     .delete(`https://pintereach.herokuapp.com/users`, headersObj)
//     .then(res => dispatch({ type: DELETED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const deleteUsersArt = headersObj => dispatch => {
//   dispatch({ type: DELETING });
//   axios
//     .delete(`https://pintereach.herokuapp.com/users/articles`, headersObj)
//     .then(res => dispatch({ type: DELETED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const deleteUsersArtId = (id, headersObj) => dispatch => {
//   dispatch({ type: DELETING });
//   axios
//     .delete(`https://pintereach.herokuapp.com/users/articles/${id}`, headersObj)
//     .then(res => dispatch({ type: DELETED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };
