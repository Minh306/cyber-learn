import produce from 'immer';
import { LOGIN, LOGIN_DONE, LOGIN_ERRORS, LOGIN_LOCAL, LOGIN_REDIRECT } from './constants';

export const initialState = {
  isLoading: false,
  isError: false,
  isLogin: false,
  userData: [],
};

const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isLoading = true;
        draft.isError = false;
        return draft;

      case LOGIN_DONE:
        draft.userData = action.payload;
        draft.isLogin = true;
        draft.isLoading = false;
        draft.isError = false;
        return draft;

      case LOGIN_ERRORS:
        draft.isLoading = false;
        draft.isError = true;
        draft.userData = [];
        return draft;

      case LOGIN_LOCAL:
        draft.isLogin = true;
        draft.userData = action.payload;
        return draft;

      case LOGIN_REDIRECT:
        draft.isLogin = false;
        draft.isError = false;
        return draft;

      default:
        return draft;
    }
  });

export default loginReducer;
