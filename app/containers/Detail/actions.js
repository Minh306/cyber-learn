import { DETAIL, DETAIL_DONE, DETAIL_ERRORS, GET_COURSE, GET_COURSE_DONE, GET_COURSE_ERRORS } from './constants';

export function onDetail(payload) {
  return {
    type: DETAIL,
    payload,
  };
}

export function onDetailDone(payload) {
  return {
    type: DETAIL_DONE,
    payload,
  };
}

export function onDetailErrors(payload) {
  return {
    type: DETAIL_ERRORS,
    payload,
  };
}

export function onGetCourse(payload) {
  return {
    type: GET_COURSE,
    payload,
  };
}

export function onGetCourseDone(payload) {
  return {
    type: GET_COURSE_DONE,
    payload,
  };
}

export function onGetCourseErrors(payload) {
  return {
    type: GET_COURSE_ERRORS,
    payload,
  };
}