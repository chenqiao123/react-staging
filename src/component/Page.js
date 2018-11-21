import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import '../asset/page.css';
import { Link } from 'react-router-dom';
import { gloabdata } from '../root'
import TimeSelect from './templete/TimeSelect'
import { getBeforeDate,setEchartStratTime,DateDiff } from './Utilities/CommonFuncs'
import NewmemberModal from './templete/peers/NewmemberModal'
import NewGameChannelModal from './templete/tree/NewGameChannelModal'
import Channelist from './templete/operabilityTable/Channelist'
import BaseInformation from './templete/eachartAndTable/BaseInformation'
// import NewGameRoleModal from './templete/grouppeers/NewGameRoleModal'
// ui样式在

import { from } from 'rxjs';
class Page extends Component {
    constructor() {
        super();
        this.state = {
            currentState: "",
            // 当前这个页面的时间
            startTime: gloabdata.getTimeVal().startTime,
            endTime: gloabdata.getTimeVal().endTime,
            originalUserlist: [],//这个是排除的原始数据
            selectedKeysleft: "",//用于后面进行请求数据的key
            addnewTag: false,
            gamename: "尘缘",
            checkedList: ["500"],
            showcheckedListname: [{ value: "简乐官方全部", key: "500" }],
            gid: 14,
            type: "-1",
            ChannelName: "",
            loading: false,
            dataZoomshow:true,
            dataZoomstartTime:getBeforeDate(6, true),
            dataZoomsendTime:getBeforeDate(0, true),
            tabkey:"1",
            DateDiff:7,


        }
    }
    /* 头部时间切换*/
    currentFunc = (currentState) => {//0今天 1昨天 2近七天 3近14天
        //console.log("currentState", currentState)
        this.setState({
          currentState,
          //
        })
        let that = this
        if (currentState === 0) {
    
          this.setState({
            startTime: getBeforeDate(0),
            endTime: getBeforeDate(0, true),
            dataZoomshow:false,
            dataZoomstartTime:getBeforeDate(0),
            dataZoomendTime: getBeforeDate(0),
            DateDiff:1
          })
          //   this.setTime(getBeforeDate(0),getBeforeDate(0,true))
        }
        else if (currentState === 1) {
          //昨天
          this.setState({
            startTime: getBeforeDate(1),
            endTime: getBeforeDate(1),
            dataZoomshow:false,
            dataZoomstartTime:getBeforeDate(1),
            dataZoomendTime: getBeforeDate(1),
            DateDiff:1
          })
          //   this.setTime(getBeforeDate(1),getBeforeDateend(1))
        }
        else if (currentState === 2) {
          //近7天
          this.setState({
            startTime: getBeforeDate(6),
            endTime: getBeforeDate(0, true),
            dataZoomshow:true,
            dataZoomstartTime:getBeforeDate(6),
            dataZoomendTime: getBeforeDate(0, true),
            DateDiff:7
          })
          //   this.setTime(getBeforeDate(6),getBeforeDate(0,true))
    
        } else if (currentState === 3) {
          //近14天
          this.setState({
            startTime: getBeforeDate(14),
            endTime: getBeforeDate(0, true),
            dataZoomshow:true,
            dataZoomstartTime:getBeforeDate(6),
            dataZoomendTime: getBeforeDate(0, true),
            DateDiff:14
          })
          
        }
      
      }
      Timeback = (startTime, endTime) => {
    //     var d1 = new Date(startTime);
    // var d2 = new Date(endTime);
    // console.log(parseInt(d2 - d1) / 3600000*24 );//两个时间相差的小时数
         console.log("Timeback修改时间确认ok==============",startTime, endTime,endTime-startTime)
        this.setState({
          startTime,
          endTime,
          currentState: 4,
          // dataZoomshow:true,
          dataZoomstartTime:setEchartStratTime(startTime,endTime)?setEchartStratTime(startTime,endTime):startTime,
          dataZoomendTime: endTime,
          dataZoomshow:setEchartStratTime(startTime,endTime)?true:false,
          DateDiff: DateDiff(endTime,startTime)
        })
        // this.selecTimeChange()
      }
      TimeonOk = (startTime, endTime) => {
        // console.log("修改时间确认ok==============",startTime, endTime)
        this.setState({
          startTime,
          endTime,
          currentState: 4,
          // dataZoomshow:true,
          dataZoomstartTime:setEchartStratTime(startTime,endTime)?setEchartStratTime(startTime,endTime):startTime,
          dataZoomendTime: endTime,
          dataZoomshow:setEchartStratTime(startTime,endTime)?true:false,
          DateDiff: DateDiff(endTime,startTime)
        })
        
        this.setState({ editTimetag: false, })
        
      }
    selecTimeChange = () => {
        //时间改变之后,进行的操作
        console.log("时间改变之后,进行的操作")
    }
    //打开平级结构
    onAddNewUser = () => {
        this.setState({
            addNewmembertag: true
        })
    }
    onHandleCancel = () => {
        this.setState({
            addNewmembertag: false
        })
    }
    // 打开平级结构
    onAddTree = () => {
        this.setState({
            addnewTag: true
        })
    }
    onHandleTree = () => {
        this.setState({
            addnewTag: false
        })
    }
    onOkChanelSucess = () => {
        this.onHandleTree()
    }
    getTablelist1 = (chanel, platform) => {
        console.log(chanel, platform);
        this.setState({
            ChannelName: chanel,
            type: platform,
        })
        setTimeout(() => {
            this.refs.getTable.handleChange(this.state.radioCheck);
        }, 1);
    }
    loadingReturn = (e) => {
        this.setState({
            loading: e,
        })
    }
    onLogout=()=>{
        console.log("退出")
    }
    render() {
        const { currentState,
            startTime,
            endTime,
            addNewmembertag,
            originalUserlist,
            selectedKeysleft,
            addnewTag,
            gamename,
            checkedList,
            showcheckedListname,
            gid,
            type,
            ChannelName,
            loading,
            dataZoomshow,
            dataZoomstartTime,
            dataZoomendTime,
            tabkey,
           DateDiff,
        } = this.state
        return (
            <div>
                 <Row>
                    <Channelist gameToname={"尘缘"}
                        ref="getTable"
                        ChannelName={ChannelName}
                        getTablelist1={this.getTablelist1}
                        loading={loading}
                        loadingReturn={this.loadingReturn}
                        radioCheck={gid}
                        type={type}
                    />
                  </Row>
               
                    {/* 时间组件 */}
                    <Row>
                    <TimeSelect
                        currentFunc={this.currentFunc}
                        currentState={currentState}
                        Timeback={this.Timeback}
                        onOk={this.TimeonOk}
                        startTime={startTime}
                        endTime={endTime} />
                    </Row>


                    <Row>
                        {/* 树形多选组件 */}
                        <Col span={8}>
                            <Button
                                type="primary" icon="plus"
                                onClick={this.onAddTree}>
                                树形多选组件
                        </Button>
                            <NewGameChannelModal
                                uid={this.props.uid}
                                onHandleCancel={this.onHandleCancelChannel}
                                onOkChanelSucess={this.onOkChanelSucess}
                                addRoletag={addnewTag}
                                gid={gid}
                                checkedList={checkedList}
                                gamename={gamename}
                                channeldata={this.props.channeldata}
                                showcheckedListname={showcheckedListname}
                                onhasChanne={this.onhasChanne}
                            />
                        </Col>
                        {/* 平级多选组件 */}
                        <Col span={8}>
                            <Button
                                type="primary" icon="plus"
                                onClick={this.onAddNewUser}>
                                平级多选组件
                         </Button>

                            <NewmemberModal
                                addNewmembertag={addNewmembertag}
                                originalUserlist={originalUserlist}
                                onHandleCancel={this.onHandleCancel}
                                selectedKeysleft={selectedKeysleft}
                                newaddfont={"平级多选组件"}
                                onDepartmentSuccess={this.onDepartmentSuccess}
                            // GetUserManagemengGroup={this.props.GetUserManagemengGroup}
                            />
                        </Col>
                        <Col span={8}>
                            <Button
                                type="primary" icon="plus"
                                onClick={this.onAddNewUser}>
                                分组平级
                         </Button>
                        </Col>
                    </Row>
                    <Row className="bgc">
                        {/* 图表eachart */}
                        <BaseInformation  
                        planid={"7"}
                        startTime={startTime}
                        endTime={endTime}
                        dataZoomshow={dataZoomshow}
                        dataZoomstartTime={dataZoomstartTime}
                        dataZoomendTime={dataZoomendTime}
                        tabkey={tabkey}
                        onLogout={this.onLogout}
                        />

                    </Row>
                    <Row>
                        <Link to="/sub1/detail">列表详情页</Link>
                    </Row>



               

            </div>
        )
    }

}
export default Page;