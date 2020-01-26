import React, { Component } from "react";
import { Button } from "antd";
const testHOC = WrapComponent => {
  return class HOCComponent extends Component {
    render() {
      return (
        <>
          <WrapComponent />
          <div>高阶组件的信息</div>
        </>
      );
    }
  };
};

@testHOC
class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">哈1哈哈哈哈</Button>11
      </div>
    );
  }
}
export default App;
