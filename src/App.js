import React, { Component } from 'react';
import { Layout } from 'antd';
import MainPage from './Main'
import Landing from './Landing'
import {root} from './root' //请求根路径和请求ipconfig的配置文件

import './App.css';

const { Content } = Layout;
// 整体布局

class App extends Component {   
  constructor(){
    super();
    root()
  }
 componentDidMount(){
  
 }
  render() {
    // let template = <Landing />;
    // // 用户是否登录成功
    // if (this.props.isAuthenticated) {
    //   template = <MainPage />;
    // }
   
    

    return (
      <div>{!this.props.isAuthenticated&&<Landing />}
      {this.props.isAuthenticated&&<MainPage />}
      </div>
    );
  }
}

export default App;
