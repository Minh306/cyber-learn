import {
  INIT,
  INIT_DONE,
  INIT_ERROR,
  INIT_CATE,
  INIT_COURSE_BY_CATE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function init(payload) {
  return {
    type: INIT,
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
