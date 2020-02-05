/*
 * @Author: your name
 * @Date: 2020-02-05 16:48:06
 * @LastEditTime : 2020-02-05 19:33:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/reducers/users.js
 */
import actionTypes from "../actions/actionTypes";
const isLogin =
  Boolean(window.localStorage.getItem("authToken")) ||
  Boolean(window.sessionStorage.getItem("authToken"));

const userInfo =
  JSON.parse(window.localStorage.getItem("userInfo")) ||
  JSON.parse(window.sessionStorage.getItem("userInfo"));

const initState = {
  ...userInfo,
  isLogin,
  isLoading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload.userInfo,
        isLogin: true,
        isLoading: false
      };
    case actionTypes.LOGIN_FAILED:
      return {
        id: "",
        displayName: "",
        avatar: "",
        isLogin: false,
        isLoading: false,
        role:''
      };
    default:
      return state;
  }
};
