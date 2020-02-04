/*
 * @Author: your name
 * @Date: 2020-01-28 17:26:28
 * @LastEditTime : 2020-02-04 10:15:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/components/Loading/index.js
 */
import React from "react";
import { Spin } from "antd";
export default function Loading() {
  return (
    <div className="example" style={{ padding: "30px 47.5%", margin: "25% 0" }}>
      <Spin tip="正在加载..." size="large" />
    </div>
  );
}
