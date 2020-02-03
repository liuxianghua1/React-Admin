/*
 * @Author: your name
 * @Date: 2020-01-28 16:16:54
 * @LastEditTime : 2020-02-03 16:27:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/Article/index.js
 */
import React, { Component } from "react";
import { Card, Button, Table, Tag, Modal, message, Tooltip } from "antd";
import moment from "moment";
import XLSX from "xlsx";
import { getArticle, deletrArticle } from "../../http";

// const displayTitle = key => {

// }
const titleDisplayMap = {
  id: "id",
  title: "标题",
  author: "作者",
  amount: "浏览量",
  createAt: "发布时间"
};
export default class ArticleList extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      columns: [],
      totle: 0,
      isLoading: false,
      offset: 0,
      limit: 10
    };
  }

  createColumns = columnKeys => {
    const columns = columnKeys.map(item => {
      if (item === "amount") {
        return {
          title: titleDisplayMap[item],
          key: item,
          render: (text, record) => {
            const { amount } = record;
            return (
              <Tooltip title={amount > 200 ? "火爆" : "良好"}>
                <Tag color={amount > 200 ? "red" : "green"}>
                  {record.amount}
                </Tag>
              </Tooltip>
            );
          }
        };
      }

      if (item === "createAt") {
        return {
          title: titleDisplayMap[item],
          key: item,
          render: (text, record) => {
            const { createAt } = record;
            return moment(createAt).format("YYYY-MM-DD HH:mm:ss");
          }
        };
      }

      return {
        title: titleDisplayMap[item],
        dataIndex: item,
        key: item
      };
    });
    columns.push({
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <Button.Group size="small">
            <Button type="primary" onClick={this.toEdit.bind(this, record)}>
              编辑
            </Button>
            <Button
              type="danger"
              onClick={this.deleteArticle.bind(this, record)}
            >
              删除
            </Button>
          </Button.Group>
        );
      }
    });
    return columns;
  };

  toEdit = record => {
    this.props.history.push(`/admin/article/edit/${record.id}`);
    // 隐式传参
    // this.props.history.push({
    //   pathname: `/admin/article/edit/${record.id}`,
    //   state: {
    //     record
    //   }
    // });
  };

  getData = () => {
    this.setState({
      isLoading: true
    });
    getArticle(this.state.offset, this.state.limit)
      .then(res => {
        const columnKeys = Object.keys(res.list[0]);
        const columns = this.createColumns(columnKeys);
        this.setState({
          total: res.total,
          dataSource: res.list,
          columns,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };

  deleteArticle = record => {
    Modal.confirm({
      title: `确定要删除${record.title}吗`,
      content: "此操作不可逆,请谨慎操作。",
      onOk: () => {
        deletrArticle(record.id).then(() => {
          message.success("删除文章成功!");
          this.getData();
        });
      }
    });
  };

  onPageChange = (page, pageSize) => {
    // console.log(object)
    this.setState(
      {
        offset: page - 1,
        limit: pageSize
      },
      () => {
        this.getData();
      }
    );
  };

  toExcel = () => {
    const data = [Object.keys(this.state.dataSource[0])];
    for (let i = 0; i < this.state.dataSource.length; i++) {
      data.push([
        this.state.dataSource[i].id,
        this.state.dataSource[i].title,
        this.state.dataSource[i].author,
        this.state.dataSource[i].amount,
        moment(this.state.dataSource[i].createAt).format("YYYY-MM-DD HH:mm:ss")
      ]);
    }
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    XLSX.writeFile(wb, "文章列表.xlsx");
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <Card
          title="文章列表"
          bordered={false}
          extra={
            <Button
              type="primary"
              disabled={this.state.dataSource.length === 0}
              onClick={this.toExcel}
            >
              {this.state.dataSource.length === 0
                ? "文章列表未加载完成,无法导出!"
                : "导出文章列表"}
            </Button>
          }
        >
          <Table
            rowKey={record => record.id}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
            loading={this.state.isLoading}
            pagination={{
              total: this.state.total,
              hideOnSinglePage: true,
              showQuickJumper: true,
              onChange: this.onPageChange
            }}
          />
        </Card>
      </div>
    );
  }
}
