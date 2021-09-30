import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { register } from '../../api';
import { onRegisterDone, onRegisterErrors } from './actions';
import { REGISTER } from './constants';

export default function* registerSaga() {
    yield takeLatest(REGISTER, handleRegister);
}

export function* handleRegister(account) {
    const requestURL = register;
    try{
        const register = yield call(request, requestURL, 'POST', account.payload);
        yield put(onRegisterDone());
    }catch (err){
        yield put(onRegisterErrors(err))
    }
}