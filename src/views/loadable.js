/*
 * @Author: your name
 * @Date: 2020-01-31 19:11:50
 * @LastEditTime : 2020-01-31 19:23:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/loadable.js
 */
import React, { Component } from "react";
const Loadable = ({ loader, loading: Loading }) => {
  return class LoadableComponent extends Component {
    state = {
      LoadedComponent: null
    };

    componentDidMount() {
      loader().then(res => {
        this.setState({
          LoadedComponent: res.default
        });
      });
    }

    render() {
      const { LoadedComponent } = this.state;
      return LoadedComponent ? <LoadedComponent /> : <Loading />;
    }
  };
};

export default Loadable;
