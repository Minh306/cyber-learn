import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearch = state => state.searchCourse || initialState;

const makeSelectSearchCourse = () =>
  createSelector(
    selectSearch,
    searchState => searchState,
  );

export { selectSearch, makeSelectSearchCourse };
