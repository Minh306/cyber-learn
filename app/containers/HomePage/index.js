import React, { memo, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Banner from '../../components/Banner';
import Categories from '../../components/Categories';
import CourseList from '../../components/CourseList';
import Services from '../../components/Services';
import Social from '../../components/Social';
import UdeCarousel from '../../components/UdeCarousel';
import ViewIn from '../../components/ViewIn';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { init } from './action';
import { makeSelectHomePage } from './selector';

function HomePage(props) {
  const key = 'homePage';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  
  useEffect(() => {
    props.initHome();
  }, []);

  return (
    <>
      <UdeCarousel />
      <CourseList props={props.homePage} />
      <Services />
      <ViewIn props={props.homePage} />
      <Banner />
      <Categories />
      <Social />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    initHome: params => dispatch(init(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
