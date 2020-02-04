/*
 * @Author: your name
 * @Date: 2020-02-04 18:31:52
 * @LastEditTime: 2020-02-04 18:33:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/store.js
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

export default createStore(rootReducer, applyMiddleware(thunk));
