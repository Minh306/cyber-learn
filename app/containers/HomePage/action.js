import {
  INIT,
  INIT_DONE,
  INIT_ERROR,
  INIT_CATE,
  INIT_COURSE_BY_CATE,
  INIT_CATE_DONE,
  INIT_CATE_ERROR,
} from './constants';

export function init(payload) {
  return {
    type: INIT,
    payload,
  };
}

export function initDone(payload) {
  return {
    type: INIT_DONE,
    payload,
  };
}

export function initError(payload) {
  return {
    type: INIT_ERROR,
    payload,
  };
}

export function initCate(payload) {
  return {
    type: INIT_CATE,
    payload,
  };
}

export function initCourseByCate(payload) {
  return {
    type: INIT_COURSE_BY_CATE,
    payload,
  };
}


