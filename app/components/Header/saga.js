import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH, SEARCH_CANCEL } from './constant';
import {
  onSearch,
  onSearchCancel,
  onSearchCancelDone,
  onSearchCancelDoneErrors,
  onSearchDone,
  onSearchErrors,
} from './action';

import request from '../../utils/request';

export default function* searchSaga() {
  yield takeLatest(SEARCH_CANCEL, handleSearchCancel);
  yield takeLatest(SEARCH, handleSearchItem);
}

export function* handleSearchItem(courseName) {
  const requestURL = `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${
    courseName.payload
  }&MaNhom=GP03`;
  try {
    const searchData = yield call(request, requestURL, 'GET');
    yield put(onSearchDone(searchData));
  } catch (err) {
    yield put(onSearchErrors(err));
  }
}

export function* handleSearchCancel() {
  try {
    yield put(onSearchCancelDone());
  } catch (err) {
    yield put(onSearchCancelDoneErrors(err));
  }
}
