import axios from "axios";

export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const FETCHING_ARTICLES_SUCCESS = "FETCHING_ARTICLES_SUCCESS";
export const FETCHING_ARTICLES_FAILURE = "FETCHING_ARTICLES_FAILURE";

export const ADDING_ARTICLES = "ADDING_ARTICLES";
export const ADDED_ARTICLES = "ADDEDD_ARTICLES";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

//home
export const pinteReach = () => dispatch => {
  dispatch({ type: FETCHING_ARTICLES });
  axios
    .get("https://192.168.0.7:3333/")
    .then(res =>
      dispatch({ type: FETCHING_ARTICLES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCHING_ARTICLES_FAILURE, payload: err }));
};

//auth
export const postAuthReg = newUser => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  axios
    .post("https://pintereach.herokuapp.com/auth/register", newUser)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      console.log(res);
      if (res.data.token) {
        console.log("help", res.data.token);
        localStorage.setItem("token", res.data.token);
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
      console.log(res);
      if (res.data.message) {
      }
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

// //articles
// export const getArticles = () => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get("https://pintereach.herokuapp.com/articles")
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getArtId = id => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get(`https://pintereach.herokuapp.com/articles/${id}`)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getArtIdUsers = (id, user) => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get(`https://pintereach.herokuapp.com/articles/${3}/users`)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getArtUsers = users => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get("https://pintereach.herokuapp.com/articles/users/")
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const postArticles = headersObj => dispatch => {
//   dispatch({ type: ADDING });
//   axios
//     .post(`https://pintereach.herokuapp.com/articles`, headersObj)
//     .then(res => dispatch({ type: ADDED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const putArtId = (id, headersObj) => dispatch => {
//   dispatch({ type: UPDATING });
//   axios
//     .put(`https://pintereach.herokuapp.com/articles/${id}`, headersObj)
//     .then(res => dispatch({ type: UPDATED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const deleteArtId = (id, headersObj) => dispatch => {
//   dispatch({ type: DELETING });
//   axios
//     .delete(`https://pintereach.herokuapp.com/articles/${id}`, headersObj)
//     .then(res => dispatch({ type: DELETED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// //users
// export const getUsers = () => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get("https://pintereach.herokuapp.com/users")
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getUsersId = id => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get(`https://pintereach.herokuapp.com/users/${id}`)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getUsersArt = () => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get(`https://pintereach.herokuapp.com/users/articles`)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getUserIdArt = id => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get(`https://pintereach.herokuapp.com/users/${id}/articles`)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const getUserIdArtId = id => dispatch => {
//   dispatch({ type: FETCHING });
//   axios
//     .get(`https://pintereach.herokuapp.com/users/${id}/articles/${id}`)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

// export const postUserArt = headersObj => dispatch => {
//   dispatch({ type: ADDING });
//   axios
//     .post(`https://pintereach.herokuapp.com/users/articles`, headersObj)
//     .then(res => dispatch({ type: ADDED, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }));
// };

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
