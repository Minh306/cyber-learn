export const fetchCourse =
  'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP03';

export const fetchCategories =
  'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc';

export const login =
  'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

export const register = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

export const detailCourse = (maKhoaHoc) => {
  return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
}