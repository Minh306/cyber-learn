import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

function goLoginPage() {
  window.location.href = `${window.location.origin}`;
}

const getLocalStorage = (key) => localStorage.getItem(key);


export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [data, setData] = useState(getLocalStorage('loginData'));
  if (rest.permission) {
    return (
      <Route
        {...rest}
        render={(props) =>
          rest.permission.includes(data.maLoaiNguoiDung) === true ? (
            <Component {...props} />
          ) : (
            goLoginPage()
          )
        }
      />
    );
  }
  return null;
};