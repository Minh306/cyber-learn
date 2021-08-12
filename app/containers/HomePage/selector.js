import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.homePage || initialState;

const makeSelectHomePage = () =>
  createSelector(
    selectHome,
    homeState => homeState,
  );

export { selectHome, makeSelectHomePage };
