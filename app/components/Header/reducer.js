import produce from 'immer';
import {
  ON_NEXT,
  SEARCH,
  SEARCH_CANCEL,
  SEARCH_CANCEL_DONE,
  SEARCH_CANCEL_ERRORS,
  SEARCH_DONE,
  SEARCH_ERRORS,
} from './constant';

// The initial state of the App
export const initialState = {
  isLoading: false,
  isError: false,
  courseList: [],
  isSearch: false,
  isCancel: false,
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
      default:
        return draft;
    }
  });

export default searchReducer;
