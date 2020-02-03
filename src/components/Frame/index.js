/*
 * @Author: your name
 * @Date: 2020-01-31 19:27:29
 * @LastEditTime : 2020-02-03 16:33:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/components/Frame/index.js
 */
import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";
const { Header, Content, Sider } = Layout;
@withRouter
class Frame extends Component {
  onMenuClick = ({ key }) => {
    this.props.history.push(key);
    // console.log(this.props)
  };
  render() {
    const selectedKey = this.props.location.pathname.split('/');
    selectedKey.length = 3;
    return (
      <Layout style={{minHeight: '100%'}}>
        <Header className="header" style={{ backgroundColor: "white",padding:'0 40px' }}>
          <div ></div>
          <span style={{fontSize: '25px'}}>极简平台</span>
          
        </Header>

        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              selectedKeys={selectedKey.join('/')}
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
