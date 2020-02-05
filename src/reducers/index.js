/*
 * @Author: your name
 * @Date: 2020-02-04 18:33:38
 * @LastEditTime : 2020-02-05 16:50:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/reducers/index.js
 */
import { combineReducers } from "redux";
import notification from "./notification";
import users from "./users";
export default combineReducers({ notification, users });
