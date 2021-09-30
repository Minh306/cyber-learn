import React, { memo, useEffect, useState, useCallback } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import logoForm from '../../assets/img/logoUdemy.png';
import reducer from './reducers';
import saga from './sagas';
import { withSnackbar } from 'notistack';
import { makeSelectRegister } from './selectors';
import { onRegister } from './actions';
import { useFormik } from "formik";
import * as yup from "yup";

const userSchema = yup.object().shape({
    taiKhoan: yup
        .string()
        .required("Thông tin này không thể bỏ trống !!!"),
    matKhau: yup
        .string()
        .required("Mật khẩu không thể bỏ trống !!!"),
    nhapLaiMatKhau: yup
        .string()
        .required("Nhập lại mật khẩu không thể bỏ trống !!!"),
    hoTen: yup
        .string()
        .required("Họ tên người dùng không thể bỏ trống !!!"),
    email: yup
        .string()
        .required("Email không thể bỏ trống !!!")
        .email("Email nhập không hợp lệ !!!"),
    soDT: yup
        .string()
        .required("Số điện thoại không thể bỏ trống !!!")
        .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ !!!"),
});

function SignUp(props) {
    const history = useHistory();
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
            nhapLaiMatKhau: "",
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP03',
            email: ''
        },
        validationSchema: userSchema,
        validateOnMount: true,
    });

    const setAllTouched = useCallback(() => {
        const fields = ["taiKhoan", "matKhau", "soDT", "email"];
        fields.forEach((field) => {
            setFieldTouched(field, true);
        });
    }, [setFieldTouched]);

    const isSuccess = useSelector(state => (state.register || {}).isSuccess);

    // const handleChangePhone = (e) => {
    //     const value = e.target.value.replace(/\D/g, "");
    //     setForm({ ...form, [e.target.name]: value });
    // };

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const dataSubmit = {
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
            hoTen: values.hoTen,
            soDT: values.soDT,
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP03',
            email: values.email,
        }
        if (!isValid) {
            setAllTouched();
            return;
        }
        if (values.matKhau !== values.nhapLaiMatKhau) {
            props.enqueueSnackbar('Nhập lại mật khẩu không đúng, xin vui lòng thử lại !!! ', {
                variant: 'error',
            })
        } else {
            props.onRegister(dataSubmit)
        }
    }, [values, isValid]);

    useEffect(() => {
        if (isSuccess === true) {
            setValues({ taiKhoan: '', matKhau: '', nhapLaiMatKhau: '', hoTen: '', soDT: '', maLoaiNguoiDung: 'HV', maNhom: 'GP03', email: '' });
            props.enqueueSnackbar('Đăng kí thành công !!!', {
                variant: 'success',
            });
        }
    }, [isSuccess])

    return (
        <div className="background-udemy-signup">
            <div className="form-sign-in">
                <div className="logo-form">
                    <img src={logoForm} className="img" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="taiKhoan"
                            onChange={handleChange}
                            value={values.taiKhoan}
                            onBlur={handleBlur}
                            type="text"
                            className="form-control"
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
                            placeholder="Mật Khẩu"
                            autoComplete="on"
                        />
                        {errors.matKhau && touched.matKhau && (
                            <p className="text-danger">{errors.matKhau}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            name="nhapLaiMatKhau"
                            onChange={handleChange}
                            value={values.nhapLaiMatKhau}
                            onBlur={handleBlur}
                            type="password"
                            className="form-control"
                            placeholder="Nhập Lại Mật Khẩu"
                            autoComplete="on"
                        />
                        {errors.nhapLaiMatKhau && touched.nhapLaiMatKhau && (
                            <p className="text-danger">{errors.nhapLaiMatKhau}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            name="hoTen"
                            onChange={handleChange}
                            value={values.hoTen}
                            onBlur={handleBlur}
                            type="string"
                            className="form-control"
                            placeholder="Họ Và Tên"
                            autoComplete="on"
                        />
                        {errors.hoTen && touched.hoTen && (
                            <p className="text-danger">{errors.hoTen}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            name="soDT"
                            onChange={handleChange}
                            value={values.soDT.replace(/\D/g, "")}
                            onBlur={handleBlur}
                            type="text"
                            className="form-control"
                            placeholder="Số Điện Thoại"
                            autoComplete="on"
                        />
                        {errors.soDT && touched.soDT && (
                            <p className="text-danger">{errors.soDT}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="on"
                        />
                        {errors.email && touched.email && (
                            <p className="text-danger">{errors.email}</p>
                        )}
                    </div>
                    <button type="submit" className="loginBtn">
                        Đăng ký
                    </button>
                    <div style={{ textAlign: 'center', marginTop: 20 }}>
                        <NavLink className="btn-singup" to="/signin">
                            Đã có tài khoản ? Đăng nhập
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
    return {
        onRegister: params => dispatch(onRegister(params)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const key = 'register';
const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

export default compose(
    withRouter,
    withReducer,
    withSaga,
    withConnect,
    withSnackbar,
    memo,
)(SignUp);
