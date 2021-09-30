import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { INIT, INIT_ERROR, INIT_DONE } from './constants';
import {
  init,
  initDone,
  initError,
  initCate,
  initCourseByCate,
} from './action';

import request from '../../utils/request';
import { fetchCourse, fetchCategories } from '../../api';
/**
 * Github repos request/response handler
 */
 export default function* homePageSaga() {
  yield takeLatest(INIT, handleInit);
}

export function* handleInit() {
  const resData = [];
  try {
    const categories = yield call(request, fetchCategories, 'GET');
    const course = yield call(request, fetchCourse, 'GET');
    yield put(initDone(course));
    const data = yield all(
      categories.map(cate =>
        call(
          request,
          `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${
            cate.maDanhMuc
          }&MaNhom=GP03`,
          'GET',
        ),
      ),
    );
    yield categories.forEach((cate, index) => {
      const temp = {};
      temp.maDanhMuc = cate.maDanhMuc;
      temp.courseList = data[index];
      return resData.push(temp);
    });
    yield put(initCate(categories));
    yield put(initCourseByCate(resData));
  } catch (err) {
    yield put(initError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */

