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
export function* handleInit() {
  // Select username from storez
  // const username = yield select(makeSelectUsername());
  const resData = [];
  try {
    const categories = yield call(request, fetchCategories, 'GET');
    const course = yield call(request, fetchCourse, 'GET');
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
    yield put(initDone(course));
  } catch (err) {
    yield put(initError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(INIT, handleInit);
}

// categories[0].value ==> FullStack : []
// onChange('FullStack');

// coureActive = map[action.payload] ==>  [
//   {
//     "maKhoaHoc": "122412342qweafasdgwerhafsd",
//     "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//   },
//   {
//     "maKhoaHoc": "122412342qweafasdgwerhafsd",
//     "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//   }
// ]

// // const a = {1:1}
// // a[2] = 2
// // log a => {1:1,2:2}

// => Call Xong Api cate =>

// let resDataMap = {}
// ["fullstack", 'fe'].forEach (each) => {
//   // lan 1
//   const dataCoure = call(each)
//   resDataMap[each] = dataCoure  //{ fullStack:dataCoure }
//   // lan 2
//   // const dataCoure = call("fe")
//   // resDataMap["fe"] = dataCoure  //{ fullStack:dataCoure, fe:dataCoure }
// }
// => Ket qua =>  map = {
//   "FullStack": [
//     {
//       "maKhoaHoc": "122412342qweafasdgwerhafsd",
//       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//     },
//     {
//       "maKhoaHoc": "122412342qweafasdgwerhafsd",
//       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//     }
//   ],
//   "FrontEnd": [
//     {
//       "maKhoaHoc": "122412342qweafasdgwerhafsd",
//       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//     },
//     {
//       "maKhoaHoc": "122412342qweafasdgwerhafsd",
//       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//     }
//   ]
// }

// ObjectKeys => De lay dc key dau tien => a =[1,23,4] => a[0] = 1 ,  map = {} => map[ObjectKeys] => cources => gan activeCouse = cources

// onChange('FrontEnd')

// sourceActive = map.'FrontEnd'

// sourceActive = [
//   {
//     "maKhoaHoc": "122412342qweafasdgwerhafsd",
//     "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//   },
//   {
//     "maKhoaHoc": "122412342qweafasdgwerhafsd",
//     "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
//   }
// ]

// // map = {
// //   "FullStack": [
// //     {
// //       "maKhoaHoc": "122412342qweafasdgwerhafsd",
// //       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
// //     },
// //     {
// //       "maKhoaHoc": "122412342qweafasdgwerhafsd",
// //       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
// //     }
// //   ],
// //   "FrontEnd": [
// //     {
// //       "maKhoaHoc": "122412342qweafasdgwerhafsd",
// //       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
// //     },
// //     {
// //       "maKhoaHoc": "122412342qweafasdgwerhafsd",
// //       "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
// //     }
// //   ]
// // }

// // course : [
// //   {
// //     "maKhoaHoc": "122412342qweafasdgwerhafsd",
// //     "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
// //     "tenKhoaHoc": "asdgasdgdfahgasdfasdfdfhgasg asdftgwet",
// //     "moTa": "sdfasfwfwefasvzxcbzxcvxzcvzvzxcvxcvzx xv xcvxcvawev xcxcv xcv xczvzxcv a ",
// //     "luotXem": 100,
// //     "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/asdgasdgdfahgasdfasdfdfhgasg-asdftgwet.jpg",
// //     "maNhom": "GP03",
// //     "ngayTao": "27/07/2021",
// //     "soLuongHocVien": 0,
// //     "nguoiTao": {
// //       "taiKhoan": "tamquocdiennghia123",
// //       "hoTen": "quoc",
// //       "maLoaiNguoiDung": "GV",
// //       "tenLoaiNguoiDung": "Giáo vụ"
// //     },
// //     "danhMucKhoaHoc": {
// //       "maDanhMucKhoahoc": "TuDuy",
// //       "tenDanhMucKhoaHoc": "Tư duy lập trình"
// //     }
// //   },
// //   {
// //     "maKhoaHoc": "122412342qweafasdgwerhafsd",
// //     "biDanh": "asdgasdgdfahgasdfasdfdfhgasg-asdftgwet",
// //     "tenKhoaHoc": "asdgasdgdfahgasdfasdfdfhgasg asdftgwet",
// //     "moTa": "sdfasfwfwefasvzxcbzxcvxzcvzvzxcvxcvzx xv xcvxcvawev xcxcv xcv xczvzxcv a ",
// //     "luotXem": 100,
// //     "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/asdgasdgdfahgasdfasdfdfhgasg-asdftgwet.jpg",
// //     "maNhom": "GP03",
// //     "ngayTao": "27/07/2021",
// //     "soLuongHocVien": 0,
// //     "nguoiTao": {
// //       "taiKhoan": "tamquocdiennghia123",
// //       "hoTen": "quoc",
// //       "maLoaiNguoiDung": "GV",
// //       "tenLoaiNguoiDung": "Giáo vụ"
// //     },
// //     "danhMucKhoaHoc": {
// //       "maDanhMucKhoahoc": "TuDuy",
// //       "tenDanhMucKhoaHoc": "Tư duy lập trình"
// //     }
// //   }
// // ]
