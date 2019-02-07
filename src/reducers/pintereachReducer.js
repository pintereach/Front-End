import {
  FETCHING_ARTICLES,
  FETCHING_ARTICLES_SUCCESS,
  FETCHING_ARTICLES_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
  FETCHING_USER_ID,
  FETCHING_USER_ID_SUCCESS,
  FETCHING_USER_ID_FAILURE,
  ADDING_ARTICLES_REQUEST,
  ADDING_ARTICLES_SUCCESS,
  ADDING_ARTICLES_FAILURE,
  DELETING_ARTICLES_REQUEST,
  DELETING_ARTICLES_SUCCESS,
  DELETING_ARTICLES_FAILURE,
  UPDATING_ARTICLES_REQUEST,
  UPDATING_ARTICLES_SUCCESS,
  UPDATING_ARTICLES_FAILURE
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
  deletedArticles: false,
  updatingArticles: false,
  updatedArticles: false,
  user: {},
  token: null,
  userId: null,
  users: []
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
        isLoggingIn: false,
        userId: action.userId,
        token: action.token
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
    case FETCHING_USER:
      return {
        ...state
      };
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCHING_USER_ID:
      return {
        ...state
      };
    case FETCHING_USER_ID_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case FETCHING_USER_ID_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADDING_ARTICLES_REQUEST:
      return {
        ...state,
        addingArticles: true
      };
    case ADDING_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        addedArticles: true,
        addingArticles: false
      };
    case ADDING_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingArticles: false
      };
    case DELETING_ARTICLES_REQUEST:
      return {
        ...state,
        deletingArticles: true
      };
    case DELETING_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        deletedArticles: true,
        deletingArticles: false
      };
    case DELETING_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingArticles: false
      };
    case UPDATING_ARTICLES_REQUEST:
      return {
        ...state,
        deletingArticles: true
      };
    case UPDATING_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        deletedArticles: true,
        deletingArticles: false
      };
    case UPDATING_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingArticles: false
      };
    default:
      return state;
  }
};

export default pintereachReducer;
