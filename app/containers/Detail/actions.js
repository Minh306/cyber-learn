import { DETAIL, DETAIL_DONE, DETAIL_ERRORS } from './constants';

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