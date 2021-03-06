import React, { memo, useEffect, useRef } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-scroll';
import logoUdemy from '../../assets/img/logo-coral.svg';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { makeSelectSearchCourse } from './selector';
import { onLogout, onReLogin, onSearchCancel, onSearchInActionFile } from './action';
import { NavLink, useHistory, withRouter } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';

export function Header(props) {
  const key = 'searchCourse';

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const loginData = JSON.parse(localStorage.getItem('loginData'));
  const dataSearch = useRef(React.createRef());
  const isSearch = useSelector(state => (state.searchCourse || {}).isSearch);
  const isLogin = useSelector(state => (state.searchCourse || {}).isLogin);

  const handleSubmit = () => {
    props.onSearch(dataSearch.current.value);
  };

  const slickTrack = document.getElementsByClassName('slick-track')[0];
  const handleCancel = () => {
    props.onSearchCancel();
    slickTrack.className += ' slick-track-reset';
    dataSearch.current.value = '';
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    props.onLogout();
  }

  useEffect(() => {
    if (loginData) {
      props.onReLogin(loginData);
    }
  }, []);

  return (
    <header>
      <div className="js-pride-month-gradient" />
      <nav className="navbar navbar-expand-md">
        <div className="col-2 col-sm-2 d-md-none">
          <i className="fa fa-bars" />
          <i className="fa fa-search" />
        </div>
        <div className="col-8 col-sm-8 col-md-9 col-xl-7">
          <div className="header__left">
            <a className="navbar-brand text-center" href="#random">
              <img src={logoUdemy} alt="" />
            </a>
            <span className="categories">
              <i className="fa fa-th" />
              Categories
            </span>
            <form className="header__form">
              <span className="input-group">
                <input
                  ref={dataSearch}
                  type="text"
                  className="form-control"
                  placeholder="Search for everything"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <Link
                      // className="nav-link"
                      to="courses"
                      spy
                      smooth
                      offset={-65}
                      duration={1000}
                      delay={0}
                      onClick={handleSubmit}
                    >
                      <i className="fa fa-search" />
                    </Link>
                  </span>
                </span>
                {isSearch === true && dataSearch.current.value ? (
                  <span className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <a onClick={handleCancel}>
                        <i className="fas fa-times" />
                      </a>
                    </span>
                  </span>
                ) : null}
              </span>
            </form>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-3 col-xl-5">
          <div className="header__right">
            <ul className="navbar-nav">
              <li className="nav-item business">
                <a className="nav-link" href="#random">
                  Udemy for Business <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item tech">
                <a className="nav-link" href="#random">
                  Teach on Udemy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#random">
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
              {isLogin ? <li className="nav-item ude-btgr">
                <button onClick={handleLogout} className="btn create">Logout</button>
              </li> : <li className="nav-item ude-btgr">
                <NavLink to="/signin" className="btn login">Login</NavLink>
                <NavLink to="/signup" className="btn create">Sign Up</NavLink>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  searchCourse: makeSelectSearchCourse(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearch: params => dispatch(onSearchInActionFile(params)),
    onSearchCancel: () => dispatch(onSearchCancel()),
    onReLogin: params => dispatch(onReLogin(params)),
    onLogout: () => dispatch(onLogout())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
