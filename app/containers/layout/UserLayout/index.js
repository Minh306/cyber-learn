import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const UserLayout = ({ Component, ...restProps }) => (
  <Route
    {...restProps}
    render={propsRoute => <Fragment>
      <Header />
      <Component {...propsRoute} />
      <Footer />
    </Fragment>} />