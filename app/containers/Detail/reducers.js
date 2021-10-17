import produce from 'immer';
import { DETAIL, DETAIL_DONE, DETAIL_ERRORS, GET_COURSE_DONE, GET_COURSE_ERRORS } from './constants';

export const initialState = {
  isLoading: false,
  isError: false,
  detailCourse: [],
  dataCourse: [],
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
        return draft;

      case GET_COURSE_DONE:
        let xArray = [];
        let yArray = [];
        do {
          const number = Math.floor(Math.random() * (31 - 0 + 1)) + 0;
          if (!yArray.includes(number)) {
            const dataSolve = action.payload[number];
            if (state.detailCourse.biDanh !== dataSolve.biDanh) {
              yArray.push(number);
              xArray.push(dataSolve);
            }
          }
        } while (xArray.length < 10);
        draft.dataCourse = xArray;
        draft.isLoading = true;
        draft.isError = false;
        return draft;

      case GET_COURSE_ERRORS:
        draft.isLoading = false;
        draft.isError = true;
        draft.dataCourse = [];
        return draft;

      case DETAIL_ERRORS:
        draft.detailCourse = [];
        draft.isError = true;
        return draft;

      default:
        return draft;
    }
  });

export default detailReducer;
