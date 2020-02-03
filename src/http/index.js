/*
 * @Author: your name
 * @Date: 2020-02-02 11:55:17
 * @LastEditTime : 2020-02-03 21:30:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/http/index.js
 */
import axios from "axios";
import { message } from "antd";
const isDev = process.env.NODE_ENV === "development";
const http = axios.create({
  baseURL: isDev ? "http://rap2api.taobao.org/app/mock/243508/" : ""
});

http.interceptors.request.use(config => {
  config.data = Object.assign({}, config.data, {
    // authToken: window.localStorage.getItem('authToken')
    authToken: "authToken"
  });
  return config;
});

http.interceptors.response.use(res => {
  if (res.data.code === 200) {
    return res.data.data;
  } else {
    //   处理错误
    message.error(res.data.errMsg);
  }
});

// 获取文章列表
export const getArticle = (offset = 0, limited = 10) => {
  return http.post("api/v1/articleList", {
    offset,
    limited
  });
};

// 通过id删除文章
export const deletrArticle = (id) => {
  return http.post(`api/v1/articleDelete/${id}`)
}

// 通过id获取文章
export const getArticleByid = (id) => {
  return http.post(`/api/v1/article/${id}`)
}