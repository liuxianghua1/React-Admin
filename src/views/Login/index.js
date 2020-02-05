/*
 * @Author: your name
 * @Date: 2020-01-28 16:09:29
 * @LastEditTime : 2020-02-05 17:30:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/Login/index.js
 */
import React from "react";
import { Form, Icon, Input, Button, Checkbox, Card, Spin } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/user";
const mapState = state => ({
  isLogin: state.users.isLogin,
  isLoading: state.users.isLoading
});
@connect(mapState, { login })
@Form.create()
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.login(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return this.props.isLogin ? (
      <Redirect to="/admin" />
    ) : (
      <Spin spinning={this.props.isLoading} tip="正在加载中">
        <div
          style={{
            width: "500px",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate3d(-50%,-50%,0)",
            marginTop: "-30px"
          }}
        >
          <Card title="登录">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6
                }}
              >
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6
                }}
              >
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6
                }}
              >
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>记住我</Checkbox>)}
                <Button
                  loading={this.props.isLoading}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Spin>
    );
  }
}
export default Login;
