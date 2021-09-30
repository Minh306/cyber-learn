import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectRegister = state => state.Register || initialState;

const makeSelectRegister = () =>
  createSelector(
    selectRegister,
    registerState => registerState,
  );

export { selectRegister, makeSelectRegister };
