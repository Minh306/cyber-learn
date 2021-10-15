import produce from 'immer';
import { DETAIL, DETAIL_DONE, DETAIL_ERRORS } from './constants';

export const initialState = {
    isLoading: false,
    isError: false,
    detailCourse: [],
  };
  
  const detailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DETAIL:
        draft.isLoading = true;
        draft.isError = false;
        return draft;

      case DETAIL_DONE:
        draft.detailCourse = action.payload;
        draft.isLoading = false;
        draft.isError = false;
        return draft;

      case DETAIL_ERRORS:
        draft.isLoading = false;
        draft.isError = true;
        draft.detailCourse = [];
        return draft;

      default:
        return draft;
    }
  });

export default detailReducer;
