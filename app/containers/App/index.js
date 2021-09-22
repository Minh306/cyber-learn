/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

// import React, { memo, useEffect } from 'react';
// import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';
// import '../../assets/css/main.css';
// import { connect, useSelector } from 'react-redux';
// import { compose } from 'redux';
// import { onLocalStorage } from '../SignIn/actions';
// import { UserLayout } from '../layout/UserLayout';
// import SignIn from '../SignIn';
// import SignUp from '../SignUp';

// function App(props) {
//   const history = useHistory();
//   const loginData = JSON.parse(localStorage.getItem('loginData'));
//   const { accessToken } = loginData || {};
//   useEffect(() => {
//     if (accessToken) {
//       props.onLocalStorage(loginData);
//     }
//   }, [loginData]);
//   return (
//     <div>
//       <Switch>
//         <UserLayout exact path="/" Component={HomePage} />
//         <Route exact path="/signin" component={SignIn} />
//         <Route exact path="/signup" component={SignUp} />
//         <Route component={NotFoundPage} />
//       </Switch>
//       <GlobalStyle />
//     </div>
//   );
// }

// export function mapDispatchToProps(dispatch) {
//   return {
//     onLocalStorage: params => dispatch(onLocalStorage(params)),
//   };
// }

// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(App);

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React from 'react';
 import { Switch, Route } from 'react-router-dom';
 import { PrivateRoute } from '../PrivateRouter';
 import routes from './router';
 import GlobalStyle from '../../global-styles';
 import '../../assets/css/main.css';
 
 export default function App() {
   const showContentMain = () => {
     let result = null;
     if (routes.length > 0) {
       result = routes.map(route => {
         if (route.private) {
           return (
             <PrivateRoute
               // key={index}
               key={route.path}
               path={route.path}
               exact={route.exact}
               component={route.main}
               permission={route.permisson}
             />
           );
         }
         return (
           <Route
             // key={index}
             key={route.path}
             path={route.path}
             exact={route.exact}
             component={route.main}
           />
         );
       });
     }
     return <Switch>{result}
      <GlobalStyle />
     </Switch>;
   };
   return showContentMain(routes);
 }
 