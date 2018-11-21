import React from 'react';
import { Tabs, Row, Col, message, Button } from 'antd';
import CommonTable from './CommonTable';
import { AutoTableHeadHaskey } from '../../Utilities/AutoTableHead'
// import { getaxios } from "../../../config/axios";

// const TabPane = Tabs.TabPane;
// const columns = AutoTableHead(this.props.prekey, this.props.prename)
import EchartBar from './EchartsItemMul';
import EffctCard from './EffectCard/EffectCard';
import TfImg1 from "../../../asset/img/TfEffect1.png";
import TfImg2 from "../../../asset/img/TfEffect2.png";
import TfImg3 from "../../../asset/img/TfEffect3.png";
import TfImg4 from "../../../asset/img/TfEffect4.png";
import { ProductionTable } from '../../Utilities/CommonFuncs'
const prekey = ["name", "siteName", "status", "insertTime", "option"];
const prename = ["投放计划名称", "投放站点", "状态", "新建时间", "操作"];

class BaseInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      data1: [],
      page1: 0,
      planloading1: false,
      count1: 0,
      columns: [],
      headerexport: [],
    }
  }
  handleTableChange1 = (pagination, filters, sorter) => {
    console.log("表格发生变化", pagination, filters, sorter)

  }

  callback = (tabkey) => {
    console.log("tabkey", tabkey)
  }
  // 第一次加载
  componentDidMount() {
    this.start(this.props.planid, this.props.startTime, this.props.endTime)
    this.screenChange()
  }
  screenChange = () => {
    window.addEventListener('resize', this.myChartchangge);
  }
  myChartchangge = () => {

  }
  //时间发生改变
  componentWillReceiveProps(Nextprops) {
    // if(Nextprops.tabkey===this.props.tabkey){//在第一tab下进行请求
    if (Nextprops.tabkey === "1") {
      if (Nextprops.tabkey !== this.props.tabkey || Nextprops.startTime !== this.props.startTime || Nextprops.endTime !== this.props.endTime) {

        this.start(this.props.planid, Nextprops.startTime, Nextprops.endTime)

      }
    }
  }
  start = (planid, staDate, endDate) => {
    let data = {
      planID: planid,
      staDate: staDate,
      endDate: endDate,
    }
    this.setState({ planloading1: true })
    let _this = this;
  // 模拟数据测试
  let tempmoni={
    "ret":0,
    "msg":{
        "head":{
            "date":"日期",
            "active":"激活数量",
            "register":"注册数量",
            "createRole":"建角数量",
            "registerPercent":"注册转化率",
            "activePercent":"激活转换率",
            "click":"点击量",
            "clickDistinct":"点击量(排重)",
            "down":"下载量",
            "downDistinct":"下载量(排重)"
        },
        "data":[
            {
                "date":"2018-11-15",
                "active":11,
                "register":3,
                "createRole":3,
                "registerPercent":"27.27%",
                "click":495,
                "clickDistinct":71,
                "down":181,
                "downDistinct":136,
                "activePercent":"8.08%"
            },
            {
                "date":"2018-11-16",
                "active":7,
                "register":4,
                "createRole":4,
                "registerPercent":"57.14%",
                "click":0,
                "clickDistinct":0,
                "down":0,
                "downDistinct":0,
                "activePercent":"0.00%"
            },
            {
                "date":"2018-11-17",
                "active":7,
                "register":6,
                "createRole":6,
                "registerPercent":"85.71%",
                "click":0,
                "clickDistinct":0,
                "down":0,
                "downDistinct":0,
                "activePercent":"0.00%"
            },
            {
                "date":"2018-11-18",
                "active":3,
                "register":1,
                "createRole":1,
                "registerPercent":"33.32%",
                "click":0,
                "clickDistinct":0,
                "down":0,
                "downDistinct":0,
                "activePercent":"0.00%"
            },
            {
                "date":"2018-11-19",
                "active":4,
                "register":4,
                "createRole":4,
                "registerPercent":"100.00%",
                "click":0,
                "clickDistinct":0,
                "down":0,
                "downDistinct":0,
                "activePercent":"0.00%"
            },
            {
                "date":"2018-11-20",
                "active":0,
                "register":0,
                "createRole":0,
                "registerPercent":"0.00%",
                "click":0,
                "clickDistinct":0,
                "down":0,
                "downDistinct":0,
                "activePercent":"0.00%"
            },
            {
                "date":"2018-11-21",
                "active":0,
                "register":0,
                "createRole":0,
                "registerPercent":"0.00%",
                "click":0,
                "clickDistinct":0,
                "down":0,
                "downDistinct":0,
                "activePercent":"0.00%"
            }
        ]
    }
}
  this.Succeedcallback(tempmoni.msg)
}

  //   getaxios.axiosCommonPost(`/effect/p/basic/`, 'post', data, this.Succeedcallback, function (err) {
  //     //服务器给出响应的结果
  //     // message.error("zouzheli")
  //     // message.error(JSON.stringify(err.data.ret))
      
  //     console.log("err============",err)
  //     if (err.ret == 999 || err.ret == 998||err.ret == 997) {
  //       message.error(err.msg)
  //       _this.props.onLogout();
  //     }else if(err.ret == -2){
  //       message.warning(err.msg)
  //     }
  //     _this.setState({ planloading1: false })
  //     console.log(err)
  //   });
  // }
  // 一本数据的请求成功
  Succeedcallback = (res) => {
    console.log("res====", res)
    // let header={"date":"日期","siteName":"站点名称"}(测试数据)
    let columns = AutoTableHeadHaskey(res.head)
    this.setState({
      columns: columns,
      data1: res.data,
      headerexport: res.head,
      planloading1: false
    })
  }
  // 导出数据
  ExportFun = () => {
    const { headerexport, data1 } = this.state
    let datatemp = ProductionTable(headerexport, data1)
    let font = "基本数据";

    console.log("datatemp========", datatemp, headerexport)
    let url = "/excel/export"
    let postdata = {
      filename: font,
      headtext: datatemp.header.join(","),
      data: datatemp.data.join(","),
      sheetname: font
    }
    let _this=this;
    // getaxios.exportAxiosBase(url, postdata, font, function (err) {
    //   //服务器给出响应的结果
    //   message.error(err.msg)
    //   // this.props.onLogout()
    //   if (err.data.ret == 999 || err.data.ret == 998||err.data.ret == 997) {
    //     _this.props.onLogout();
    //   }
    //   // this.setState({ planloading1: false })
    //   console.log(err)
    // });
  }
  render() {

    const { data1, page1, planloading1, columns, count1 } = this.state;
    const { dataZoomstartTime, dataZoomendTime, dataZoomshow } = this.props
    //图表相关
    const categorys = this.state.data1.map((item, index) => item.date);
    const series = [{ data: this.state.data1.map((item, index) => item.clickDistinct === '暂时没得' ? 0 : item.clickDistinct), name: '点击总数', color: '#547DF9' },
    { data: this.state.data1.map((item, index) => item.downDistinct === '暂时没得' ? 0 : item.downDistinct), name: '下载总数', color: '#A4D882' },
    { data: this.state.data1.map((item, index) => item.active === '暂时没得' ? 0 : item.active), name: '激活总数', color: '#F68340' },
    { data: this.state.data1.map((item, index) => item.register === '暂时没得' ? 0 : item.register), name: '注册总数', color: '#F6DA40' },
];
    console.log(categorys, series, data1)
    //点击总数
    const clickTotal = this.state.data1.reduce((total, item, index) => total + (item.clickDistinct === '暂时没得' ? 0 : parseInt(item.clickDistinct)), 0);
    //下载总数
    const downTotal = this.state.data1.reduce((total, item, index) => total + (item.downDistinct === '暂时没得' ? 0 : parseInt(item.downDistinct)), 0);
    //下载总数
    const registerTotal = this.state.data1.reduce((total, item, index) => total + (item.register === '暂时没得' ? 0 : parseInt(item.register)), 0);
    //激活总数
    const activeTotal = this.state.data1.reduce((total, item, index) => total + (item.active === '暂时没得' ? 0 : parseInt(item.active)), 0);
    return (<div>

      {/* 汇总数据 */}
      <div className="item itemOne">
        <Row gutter={16} style={{ padding: '2%' }}>
          <Col span={6} ><EffctCard img={TfImg1} title={'点击总数'} value={clickTotal} /></Col>
          <Col span={6} ><EffctCard img={TfImg2} title={'下载总数'} value={downTotal} /></Col>
          <Col span={6} ><EffctCard img={TfImg4} title={'激活总数'} value={activeTotal} /></Col>
          <Col span={6} ><EffctCard img={TfImg3} title={'注册总数'} value={registerTotal} /></Col>
        </Row>
      </div>
      <div className="item itemTwo" >图表</div>
      {categorys.length > 0 ?
        <EchartBar
          key={categorys.join(",")}
          horizontal={false}
          legend={true}
          radius={false}
          categorys={categorys}
          series={series}
          startValue={dataZoomstartTime}
          endValue={dataZoomendTime}
          dataZoomshow={dataZoomshow}
        /> : null}
      <Row gutter={16} style={{ padding: '1%' }}>
        <Col className="name" span={6}>详情数据</Col>
        <Col className="name butnExport" md={{ span: 4, offset: 14 }}>
          {/* <Button type="default" style={{marginRight:"6px"}} onClick={this.addField} >查询字段</Button> */}
          <Button type="default" icon="download" onClick={this.ExportFun}>导出表格</Button>
        </Col></Row>
      <div className="item itemThree">
        {/*调用前端分页的表格 */}
        <CommonTable
          data={data1}
          planloading={planloading1}
          columns={columns}
          handleTableChange={this.handleTableChange1} />
      </div>

    </div>)
  }
}

export default BaseInformation;