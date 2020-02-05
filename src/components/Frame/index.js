/*
 * @Author: your name
 * @Date: 2020-01-31 19:27:29
 * @LastEditTime : 2020-02-05 09:46:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/components/Frame/index.js
 */
import React, { Component } from "react";
import { Layout, Menu, Icon, Dropdown, Avatar, Badge } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const mapState = state => {
  return {
    notificationCount: state.notification.list.filter(
      item => item.hasRead === false
    ).length
  };
};

@connect(mapState)
@withRouter
class Frame extends Component {
  onMenuClick = ({ key }) => {
    this.props.history.push(key);
  };
  onDropdownMenuClick = ({ key }) => {
    this.props.history.push(key);
  };
  menu = () => (
    <Menu onClick={this.onDropdownMenuClick}>
      <Menu.Item key="/admin/notifications">
        <Badge count={this.props.notificationCount} offset={[10]}>
          通知中心
        </Badge>
      </Menu.Item>
      <Menu.Item key="/admin/settings">个人设置</Menu.Item>
      <Menu.Item key="/login">退出</Menu.Item>
    </Menu>
  );
  render() {
    const selectedKey = this.props.location.pathname.split("/");
    selectedKey.length = 3;
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Header
          className="header"
          style={{ backgroundColor: "white", padding: "0 40px" }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ fontSize: "25px", flex: 1 }}>极简平台</span>
            <Dropdown overlay={this.menu()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar src="https://img2.woyaogexing.com/2020/01/26/1360c4ff104946028080570ae0426312!400x400.webp" />
                <span> 刘翔華</span>
                <Badge count={this.props.notificationCount} offset={[-55, -10]}>
                  <Icon type="down" />
                </Badge>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              selectedKeys={selectedKey.join("/")}
              onClick={this.onMenuClick}
              style={{ height: "100%", borderRight: 0 }}
            >
              {this.props.menus.map(item => {
                return (
                  <Menu.Item key={item.pathname}>
                    <Icon type={item.icon} />
                    {item.title}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default Frame;
