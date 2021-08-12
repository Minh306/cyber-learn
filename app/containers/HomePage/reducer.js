import produce from 'immer';
import {
  INIT,
  INIT_DONE,
  INIT_ERROR,
  INIT_CATE,
  INIT_COURSE_BY_CATE,
} from './constants';

// The initial state of the App
export const initialState = {
  isLoading: false,
  isError: false,
  courseList: [],
  courseListByCate: [],
  categories: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INIT:
        // Delete prefixed '@' from the github username
        draft.isLoading = true;
        break;

      case INIT_CATE:
        // Delete prefixed '@' from the github username
        draft.categories = action.payload;
        return draft;

      case INIT_COURSE_BY_CATE:
        draft.courseListByCate = action.payload;
        return draft;

      case INIT_DONE:
        // Delete prefixed '@' from the github username
        draft.isLoading = false;
        draft.courseList = action.payload;
        return draft;

      case INIT_ERROR:
        // Delete prefixed '@' from the github username
        draft.isLoading = false;
        draft.isError = true;
        return draft;

      default:
        return draft;
    }
  });

export default homeReducer;
