import React from "react";

import SignIn from '../SignIn';
import SignUp from '../SignUp';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// import App from '../App';
// import Login from "../login/Loadable";

const routes = [
    {
        path: "/signin",
        exact: true,
        main: () => <SignIn />,
        private: false,
    },
    {
        path: "/signup",
        exact: true,
        main: () => <SignUp />,
        // permission: ['GV'],
        private: false,
    },
    {
        path: "/",
        exact: true,
        main: () => <>  <Header /> <HomePage /> <Footer /></>,
        permission: ['HV'],
        private: false,
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage/>,
    },

];

export default routes;
