import React, { memo, useEffect, useState, useCallback } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLogin } from './selectors';
import logoForm from '../../assets/img/logoUdemy.png';
import { onLoginInAction } from './actions';
import reducer from './reducers';
import saga from './sagas';
import { useFormik } from "formik";
import * as yup from "yup";

const userSchema = yup.object().shape({
  taiKhoan: yup.string().required("User Name is required"),
  matKhau: yup
    .string()
    .required("Password is required"),
  // phone: yup
  //   .string()
  //   .required("Số điện thoại không được bỏ trống")
  //   .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ"),
});

function SignIn(props) {
  const history = useHistory();
  // const [form, setForm] = useState({ taiKhoan: '', matKhau: '' });
  const {
    handleChange,
    values,
    setValues,
    errors,
    isValid,
    handleBlur,
    touched,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: userSchema,
    validateOnMount: true,
  });

  const setAllTouched = useCallback(() => {
    const fields = ["taiKhoan", "matKhau"];
    fields.forEach((field) => {
      setFieldTouched(field, true);
    });
  }, [setFieldTouched]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!isValid) {
        setAllTouched();
        return;
      }
      console.log("!", values);
      props.onLogin(values);
    },
    [values, isValid]
  );
  // const handleChange = e => {
  //   e.preventDefault();
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.onLogin(form);
  // };

  const loginData = JSON.parse(localStorage.getItem('loginData'));
  const { accessToken } = loginData || {};
  useEffect(() => {
    if (accessToken) {
      history.push('/');
    }
  }, [loginData]);

  return (
    <div className="background-udemy-signin">
      <div className="form-sign-in">
        <div className="logo-form">
          <img src={logoForm} className="img" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="taiKhoan"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.taiKhoan}
              type="text"
              className="form-control"
              id="sign-in-username"
              placeholder="Tên Đăng Nhập"
            />
            {errors.taiKhoan && touched.taiKhoan && (
              <p className="text-danger">{errors.taiKhoan}</p>
            )}
          </div>
          <div className="form-group">
            <input
              name="matKhau"
              type="password"
              onChange={handleChange}
              value={values.matKhau}
              onBlur={handleBlur}
              className="form-control"
              id="sign-in-pass"
              placeholder="Mật Khẩu"
            />
            {errors.matKhau && touched.matKhau && (
              <p className="text-danger">{errors.matKhau}</p>
            )}
          </div>
          <button type="submit" className="loginBtn">
            Đăng nhập
          </button>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <NavLink className="btn-singup" to="/signup">
              Chưa Có Tài Khoản ? Đăng Ký
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loginData: makeSelectLogin(),
});
function mapDispatchToProps(dispatch) {
  return {
    onLogin: params => dispatch(onLoginInAction(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const key = 'loginData';
const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

// export default compose(withConnect, memo)(SignIn);

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
  memo,
)(SignIn);
