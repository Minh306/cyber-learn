import React from "react";

import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Detail from '../Detail';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
        private: false,
    },
    {
        path: "/",
        exact: true,
        main: () => <><Header /> <HomePage /> <Footer /></>,
        // permission: ['GV'],
        private: false,
    },
    {
        path: "/detail",
        exact: true,
        main: () => <Detail />,
        private: false,
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage/>,
    },

];

export default routes;
