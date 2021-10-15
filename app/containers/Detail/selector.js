import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectDetail = state => state.detail || initialState;

const makeSelectDetail = () =>
  createSelector(
    selectDetail,
    detailState => detailState,
  );

export { selectDetail, makeSelectDetail };
