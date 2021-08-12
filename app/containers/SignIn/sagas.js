import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { login } from '../../api';
import { onLoginDone, onLoginErrors } from './actions';
import { LOGIN } from './constants';

export default function* loginSaga() {
  yield takeLatest(LOGIN, handleLogin);
}

export function* handleLogin(account) {
  const requestURL = login;
  try {
    const loginData = yield call(request, requestURL, 'POST', account.payload);
    yield localStorage.setItem('loginData', JSON.stringify(loginData));
    yield put(onLoginDone(loginData));
  } catch (err) {
    yield put(onLoginErrors(err));
  }
}
