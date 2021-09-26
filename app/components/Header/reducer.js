import produce from 'immer';
import {
  LOGOUT,
  ON_NEXT,
  RE_LOGIN,
  SEARCH,
  SEARCH_CANCEL,
  SEARCH_CANCEL_DONE,
  SEARCH_CANCEL_ERRORS,
  SEARCH_DONE,
  SEARCH_ERRORS,
} from './constant';

// The initial state of the App
export const initialState = {
  courseList: [],
  loginData: [],
  isLoading: false,
  isError: false,
  isSearch: false,
  isCancel: false,
  isLogin: false,
};

/* eslint-disable default-case, no-param-reassign */
const searchReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH:
        draft.isLoading = true;
        return draft;

      case SEARCH_DONE:
        draft.courseList = action.payload;
        draft.isLoading = false;
        draft.isSearch = true;
        draft.isCancel = false;
        return draft;

      case SEARCH_ERRORS:
        draft.isLoading = false;
        draft.isError = true;
        draft.isSearch = true;
        draft.courseList = [];
        draft.isCancel = false;
        return draft;

      case SEARCH_CANCEL:
        draft.isLoading = true;
        return draft;

      case SEARCH_CANCEL_DONE:
        draft.isSearch = false;
        draft.isLoading = false;
        draft.isCancel = true;
        return draft;

      case SEARCH_CANCEL_ERRORS:
        draft.isLoading = false;
        draft.isError = true;
        draft.isSearch = false;
        return draft;

      case ON_NEXT:
        draft.isCancel = false;
        return draft;

      case RE_LOGIN:
        draft.loginData = action.payload;
        draft.isLogin = true;
        return draft;

      case LOGOUT:
        draft.loginData = [];
        draft.isLogin = false;
        return draft;

      default:
        return draft;
    }
  });

export default searchReducer;
