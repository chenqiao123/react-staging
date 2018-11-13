import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect ,Link} from 'react-router-dom';
import { Layout,Breadcrumb} from 'antd';
import { SiderLeft } from './SiderLeft'
import { Topheader } from './Topheader'
// import { BreadcrumbNav } from './component/public/BreadcrumbNav'
// 测试路由page1
import { Page } from './component/Page'
//测试详情路由二
import {Pagedetail} from './component/Pagedetail'
import './App.css';
const breadcrumbNameMap = {
  '/sub1': '所有列表',
  '/sub1/1': '1',
  '/sub1/2': '2',
  '/sub1/detail':"详情"

};
const { Content } = Layout;
// 整体布局
class MainPage extends Component {
  state = {
    collapsed: false,
    minHeight: 280,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {
    let height = document.body.clientHeight
    this.setState({ minHeight: height - 150 })
    window.addEventListener('resize', this.resizeBind)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeBind)
  }
  // 浏览器窗口发生改变的时候进行调用
  resizeBind = () => {
    let height = document.body.clientHeight
    this.setState({ minHeight: height - 128 })
  }
  render() {
    const { location } = this.props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">主页</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  console.log("这里有什么错误呢?",breadcrumbItems)
    return (
      <Layout className="components-layout-demo-custom-trigger">
        <SiderLeft
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        ></SiderLeft>
        <Layout>
          <Topheader toggle={this.toggle} collapsed={this.state.collapsed}></Topheader>
          <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, height: this.state.minHeight,overflowY:"scroll" }}>
          
            <Switch>
              {/* 全部列表 */}
            <Route path="/sub1" exact component={Page} />
            <Route path="/sub1/detail" exact component={Pagedetail} />
            <Route render={() => <span>Home Page</span>} />
            </Switch>
          </Content>
        </Layout>

      </Layout>
    );
  }
}

export default withRouter(MainPage);
