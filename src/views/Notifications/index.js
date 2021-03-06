/*
 * @Author: your name
 * @Date: 2020-01-28 16:18:04
 * @LastEditTime : 2020-02-05 10:03:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/Settings/index.js
 */
import React, { Component } from "react";
import { Card, Button, List, Avatar, Badge,Spin } from "antd";
import { connect } from "react-redux";
import {
  markNotificationAsReadByid,
  markAllNotificationAsRead
} from "../../actions/notifications";
const mapState = state => {
  const { list, isLoading } = state.notification;
  return {
    list,
    isLoading
  };
};

@connect(mapState, { markNotificationAsReadByid, markAllNotificationAsRead })
class Notifications extends Component {
  render() {
    return (
      <div>
        <Spin spinning={this.props.isLoading} tip="正在加载中...">
        <Card
          title="通知中心"
          bordered={false}
          extra={
            <Button
              disabled={this.props.list.every(item => item.hasRead === true)}
              onClick={this.props.markAllNotificationAsRead.bind(this)}
            >
              全部已读
            </Button>
          }
        >
          <List
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={item => (
              <List.Item
                extra={
                  item.hasRead ? null : (
                    <Button
                      onClick={this.props.markNotificationAsReadByid.bind(
                        this,
                        item.id
                      )}
                    >
                      已读
                    </Button>
                  )
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<Badge dot={!item.hasRead}>{item.title}</Badge>}
                  description={item.desc}
                />
              </List.Item>
            )}
          />
        </Card>
        </Spin>
      </div>
    );
  }
}
export default Notifications;
