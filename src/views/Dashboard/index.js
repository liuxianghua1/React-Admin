/*
 * @Author: your name
 * @Date: 2020-01-28 16:11:48
 * @LastEditTime : 2020-02-04 16:23:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/Dashboard/index.js
 */
import React, { Component, createRef } from "react";
import { Card, Row, Col } from "antd";
import echarts from "echarts";
import { getArticleAmount } from "../../http";
import "./dashboard.less";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.articleAmount = createRef();
  }

  initArticleChart = () => {
    this.ArticleChart = echarts.init(this.articleAmount.current);
    getArticleAmount().then(res => {
      const option = {
        xAxis: {
          type: "category",
          data: res.amount.map(item => item.month)
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: res.amount.map(item => item.value),
            type: "line",
            areaStyle: {}
          }
        ]
      };
      this.ArticleChart.setOption(option);
    });
  };

  componentDidMount() {
    this.initArticleChart();
  }
  render() {
    return (
      <>
        <Card title="主页" bordered={false}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div
                className="qf-gutter-box"
                style={{ backgroundColor: "#29B6F6" }}
              >
                col-6
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                className="qf-gutter-box"
                style={{ backgroundColor: "#Ab47Bc" }}
              >
                col-6
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                className="qf-gutter-box"
                style={{ backgroundColor: "#ff7043" }}
              >
                col-6
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                className="qf-gutter-box"
                style={{ backgroundColor: "#43a047" }}
              >
                col-6
              </div>
            </Col>
          </Row>
        </Card>
        <Card title="最近浏览量" bordered={false}>
          <div ref={this.articleAmount} style={{ height: "400px" }} />
        </Card>
      </>
    );
  }
}
