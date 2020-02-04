/*
 * @Author: your name
 * @Date: 2020-01-28 16:16:54
 * @LastEditTime : 2020-02-04 10:18:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/Article/Edit.js
 */
import React, { Component, createRef } from "react";
import E from "wangeditor";
import { Card, Button, Form, Input, DatePicker, Spin, message } from "antd";
import { getArticleByid, articleEdit } from "../../http";
import moment from "moment";
import "./Edit.less";
@Form.create()
class Edit extends Component {
  constructor() {
    super();
    this.editorRef = createRef();
    this.state = {
      isLoading: false
    };
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
    this.setState({
      isLoading: true
    });
    getArticleByid(this.props.match.params.id)
      .then(res => {
        const { id, ...data } = res;
        data.createAt = moment(data.createAt);
        this.props.form.setFieldsValue(data);
        this.editor.txt.html(data.content);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

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
    this.setState({
      isLoading: true
    });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = Object.assign({}, values, {
          createAt: values.createAt.valueOf()
        });
        articleEdit(this.props.match.params.id, data).then(() => {
          this.setState({
            isLoading: false
          });
          message.success("保存成功");
          this.props.history.push("/admin/article");
        });
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
          <Button type="danger" onClick={this.props.history.goBack}>
            返回
          </Button>
        }
      >
        <Spin tip="正在加载中..." spinning={this.state.isLoading}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="标题">
              {getFieldDecorator("title", {
                rules: [{ required: true, message: "Please input your title!" }]
              })(<Input placeholder="Please input your title" />)}
            </Form.Item>
            <Form.Item label="作者">
              {getFieldDecorator("author", {
                rules: [
                  { required: true, message: "Please input your author!" }
                ]
              })(<Input placeholder="Please input your author" />)}
            </Form.Item>
            <Form.Item label="阅读量">
              {getFieldDecorator("amount", {
                rules: [
                  { required: true, message: "Please input your amount!" }
                ]
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
                rules: [
                  { required: true, message: "Please input your content!" }
                ]
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
        </Spin>
      </Card>
    );
  }
}
export default Edit;
