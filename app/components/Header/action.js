import {
  ON_NEXT,
  SEARCH,
  SEARCH_CANCEL,
  SEARCH_CANCEL_DONE,
  SEARCH_CANCEL_ERRORS,
  SEARCH_DONE,
  SEARCH_ERRORS,
} from './constant';

export function onSearchInActionFile(payload) {
  return {
    type: SEARCH,
    payload,
  };
}
export function onSearchDone(payload) {
  return {
    type: SEARCH_DONE,
    payload,
  };
}
export function onSearchErrors(payload) {
  return {
    type: SEARCH_ERRORS,
    payload,
  };
}
export function onSearchCancel() {
  return {
    type: SEARCH_CANCEL,
  };
}
export function onSearchCancelDone(payload) {
  return {
    type: SEARCH_CANCEL_DONE,
    payload,
  };
}

export function onSearchCancelDoneErrors() {
  return {
    type: SEARCH_CANCEL_ERRORS,
  };
}

export function onNew() {
  return {
    type: ON_NEXT,
  };
}
