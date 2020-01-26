/*
 * @Author: your name
 * @Date: 2020-01-26 16:40:33
 * @LastEditTime : 2020-01-26 16:53:15
 * @LastEditors  : Please set LastEditors
 * @Description: 需要在package.json里面将react-scripts替换成react-app-rewired
 * @FilePath: /react-admin/config-overrides.js
 */
//  从customize-cra引入一些相关的方法
const { override } = require("customize-cra");
module.exports = override();
