import { LOGIN, LOGIN_ERRORS, LOGIN_DONE, LOGIN_LOCAL, LOGIN_REDIRECT } from './constants';

export function onLoginInAction(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function onLoginDone(payload) {
  return {
    type: LOGIN_DONE,
    payload,
  };
}

export function onLoginErrors(payload) {
  return {
    type: LOGIN_ERRORS,
    payload,
  };
}

export function onLocalStorage(payload) {
  return {
    type: LOGIN_LOCAL,
    payload,
  };
}

export function onRedirectInAction(){
  return {
    type: LOGIN_REDIRECT,
  };
}