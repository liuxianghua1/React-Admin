/*
 * @Author: your name
 * @Date: 2020-01-28 16:16:54
 * @LastEditTime : 2020-02-03 21:20:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/Article/Edit.js
 */
import React, { Component, createRef } from "react";
import E from "wangeditor";
import { Card, Button, Form, Input, DatePicker } from "antd";
import "./Edit.less";
@Form.create()
class Edit extends Component {
  constructor() {
    super();
    this.editorRef = createRef();
  }
  initEditor = () => {
    this.editor = new E(this.editorRef.current);
    this.editor.customConfig.onchange = html => {
      //   console.log(html);
      this.props.form.setFieldsValue({
        content: html
      });
    };
    this.editor.create();
  };
  componentDidMount() {
    this.initEditor();
  }
  Back = () => {
    this.props.history.go(-1);
  };

  //   Detection = () => {
  //     if (!this.props.location.state) {
  //       this.Back();
  //     }
  //   };
  //   componentDidMount() {
  //     this.Detection();
  //   }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    // const { title } = this.props.location.state.record;
    const { getFieldDecorator } = this.props.form;
    return (
      <Card
        // title={title}
        title="文章编辑"
        bordered={false}
        extra={
          <Button type="danger" onClick={this.Back}>
            返回
          </Button>
        }
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="标题">
            {getFieldDecorator("title", {
              rules: [{ required: true, message: "Please input your title!" }]
            })(<Input placeholder="Please input your title" />)}
          </Form.Item>
          <Form.Item label="作者">
            {getFieldDecorator("author", {
              rules: [{ required: true, message: "Please input your author!" }]
            })(<Input placeholder="Please input your author" />)}
          </Form.Item>
          <Form.Item label="阅读量">
            {getFieldDecorator("amount", {
              rules: [{ required: true, message: "Please input your amount!" }]
            })(<Input placeholder="Please input your amount" />)}
          </Form.Item>
          <Form.Item label="创建时间">
            {getFieldDecorator("createAt", {
              rules: [
                { required: true, message: "Please input your createAt!" }
              ]
            })(<DatePicker showTime placeholder="请选择时间" />)}
          </Form.Item>
          <Form.Item label="内容">
            {getFieldDecorator("content", {
              rules: [{ required: true, message: "Please input your content!" }]
            })(<div className="wangEditorFrame" ref={this.editorRef}></div>)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              保存
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default Edit;
