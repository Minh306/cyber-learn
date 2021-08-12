import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectLogin = state => state.loginData || initialState;

const makeSelectLogin = () =>
  createSelector(
    selectLogin,
    loginState => loginState,
  );

export { selectLogin, makeSelectLogin };
