import React, { memo, useEffect, useState } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import { makeSelectLogin } from './selectors';
import logoForm from '../../assets/img/logoUdemy.png';
// import { onLoginInAction } from './actions';
// import reducer from './reducers';
// import saga from './sagas';

function SignUp(props) {
    //   const history = useHistory();
    //   const [form, setForm] = useState({ taiKhoan: '', matKhau: '' });
    //   const handleChange = e => {
    //     e.preventDefault();
    //     setForm({ ...form, [e.target.name]: e.target.value });
    //   };

    //   const handleSubmit = e => {
    //     e.preventDefault();
    //     props.onLogin(form);
    //   };

    return (
        <div className="background-udemy-signup">
            <div className="form-sign-in">
                <div className="logo-form">
                    <img src={logoForm} className="img" alt="" />
                </div>
                <form>
                    <div className="form-group">
                        <input
                            name="taiKhoan"
                            //   onChange={handleChange}
                            //   value={form.taiKhoan}
                            type="text"
                            className="form-control"
                            id="sign-in-username"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="matKhau"
                            type="password"
                            //   onChange={handleChange}
                            //   value={form.matKhau}
                            className="form-control"
                            id="sign-in-passowrd"
                            placeholder="Password"
                            autoComplete="on"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="confirmPw"
                            //   onChange={handleChange}
                            //   value={form.taiKhoan}
                            type="password"
                            className="form-control"
                            id="sign-in-new-passowrd"
                            placeholder="Confirm Password"
                            autoComplete="on"
                        />
                    </div>
                    <button type="submit" className="loginBtn">
                        Đăng nhập
                    </button>
                    <div style={{ textAlign: 'center', marginTop: 20 }}>
                        <NavLink className="btn-singup" to="/signin">
                            Have A Account ? Sign In 
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//   loginData: makeSelectLogin(),
// });
// function mapDispatchToProps(dispatch) {
//   return {
//     onLogin: params => dispatch(onLoginInAction(params)),
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// const key = 'loginData';
// const withReducer = injectReducer({ key, reducer });
// const withSaga = injectSaga({ key, saga });

// export default compose(withConnect, memo)(SignIn);

export default compose(
    //   withRouter,
    //   withReducer,
    //   withSaga,
    //   withConnect,
    memo,
)(SignUp);
