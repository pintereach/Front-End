import {
  FETCHING_ARTICLES,
  FETCHING_ARTICLES_SUCCESS,
  FETCHING_ARTICLES_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initialState = {
  error: null,
  articles: [],
  isLoggingIn: false,
  isLoggedIn: false,
  isRegistering: false,
  isRegistered: false,
  fetchingArticles: false,
  addingArticles: false,
  addedArticles: false,
  deletingArticles: false,
  deletedArticles: false
};

const pintereachReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ARTICLES:
      return {
        ...state,
        fetchingArticles: true
      };
    case FETCHING_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        fetchingArticles: false
      };
    case FETCHING_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingArticles: false
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        error: action.payload
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isRegistered: true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isRegistering: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default pintereachReducer;
