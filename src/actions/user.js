/*
 * @Author: your name
 * @Date: 2020-02-05 17:03:36
 * @LastEditTime : 2020-02-05 19:10:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/actions/user.js
 */
import actionTypes from "./actionTypes";
import { loginResult } from "../http/index";

const startLogin = () => {
  return {
    type: actionTypes.START_LOGIN
  };
};

const loginSuccess = usefInfo => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: { usefInfo }
  };
};

const loginFailed = () => {
  window.localStorage.removeItem("authToken");
  window.sessionStorage.removeItem("authToken");
  window.localStorage.removeItem("userInfo");
  window.sessionStorage.removeItem("userInfo");
  return {
    type: actionTypes.LOGIN_FAILED
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(loginFailed());
  };
};

export const login = userInfo => {
  return dispatch => {
    dispatch(startLogin());
    loginResult(userInfo).then(res => {
      // console.log(res)
      if (res.status === 200) {
        if (userInfo.remember === true) {
          window.localStorage.setItem("authToken", res.data.data.authToken);
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(res.data.data)
          );
        } else {
          window.sessionStorage.setItem("authToken", res.data.data.authToken);
          window.sessionStorage.setItem(
            "userInfo",
            JSON.stringify(res.data.data)
          );
        }
        dispatch(
          loginSuccess({
            ...res.data.data
          })
        );
      } else {
        dispatch(loginFailed());
      }
    });
  };
};
