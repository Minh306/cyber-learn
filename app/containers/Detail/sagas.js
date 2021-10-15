import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { onDetailDone, onDetailErrors } from './actions';
import { DETAIL } from './constants';

export default function* detailSaga() {
    yield takeLatest(DETAIL, handleDetail);
}

export function* handleDetail(data) {
    const requestURL = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${data.payload}`;
    try{
        const detailCourse = yield call(request, requestURL, 'GET');
        yield put(onDetailDone(detailCourse));
    }catch (err){
        yield put(onDetailErrors(err))
    }
}