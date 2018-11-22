import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import '../asset/page.css';
import { Link } from 'react-router-dom';
import { gloabdata } from '../root'
import TimeSelect from './templete/TimeSelect'
import { getBeforeDate,setEchartStratTime,DateDiff,getdefaultRoleData } from './Utilities/CommonFuncs'
import NewmemberModal from './templete/peers/NewmemberModal'
import NewGameChannelModal from './templete/tree/NewGameChannelModal'
import Channelist from './templete/operabilityTable/Channelist'
import BaseInformation from './templete/eachartAndTable/BaseInformation'
import NewGameRoleModal from './templete/grouppeers/NewGameRoleModal'
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
            relevancedata:[{roleid:"R5637181107",
            rolename:"权限一般用户",
            sysgroupid:"default",
            sysgroupname:"其他",
            syslid:"JLHDcb3459f0eee2c571b943573ae3a11504664108",
            sysname:"权限中心",
            }],//默认选择的特色角色权限
            channelrolemodifytag:false,
            gamerolelist:[{"label":"超能大陆","value":"2",
            "data":[{"roleid":"R5637181107","rolename":"权限一般用户","sysgroupname":"其他",
            "sysgroupid":"default","sysname":"权限中心","syslid":"JLHDcb3459f0eee2c571b943573ae3a11504664108"}]},
            {"label":"尘缘","value":"14","data":[]},{"label":"兵器少女","value":"10","data":[]}],       
            UserRole:[],
           
        }
    }
    componentDidMount(){
        this.setState({
            UserRole:[{"id":"default","name":"其他","item":[{"id":"JLHDcb3459f0eee2c571b943573ae3a11504664108","name":"权限中心","item":[{"id":"R40788180907","name":"权限中心管理员"},{"id":"R5637181107","name":"权限一般用户"}]},{"id":"JLHD7b50ac2e7a3f6e19692d7bf9863548241513912683","name":"服务器列表","item":[]},{"id":"JLHD77a305c565711bd182a1acd28c05bfb81516262599","name":"内充系统demo","item":[{"id":"R7577180907","name":"未命名"},{"id":"R4521180907","name":"未命名"},{"id":"R1378180907","name":"未命名"},{"id":"R6719180907","name":"未命名"}]},{"id":"JLHD18a4d55859ff14ec303958b39de8c36d1519866661","name":"日志分析工具","item":[]},{"id":"JLHDeb4540ad09aeb8cdc3d5445d17479fdb1522631503","name":"崩溃日志分析","item":[{"id":"R1671180907","name":"未命名"}]},{"id":"JLHD148d5cb120067339347d7456ac574da91528875633","name":"质量分析","item":[]},{"id":"JLHDd96abee3df4de2f3e7c5012f5ff62f471539132758","name":"协同中心","item":[]}]}]
        })
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
      //修改游戏角色
      modifiGameRole = () => {
        this.setState({
            channelrolemodifytag: true,
        })

    }

    // 关闭角色模态框
    onHandleCancelGameRole = () => {
        console.log("请求成功")
        this.setState({
            channelrolemodifytag: false
        })
    }
    onOkGameRolelSucess = () => {
        // 成功之后关闭模态框
        // this.props.onOkChannelSucess()
        this.onHandleCancelGameRole();
    }
    onBindingRole = (postid, showdata) => {

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
            relevancedata,
            UserRole,
            channelrolemodifytag,
            gamerolelist
        } = this.state
        console.log("特殊角色的默认数据值是",this.state.UserRole)
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
                                onClick={this.modifiGameRole}>
                                平级多选组件
                         </Button>
                         <NewGameRoleModal
                        key={""}
                        uid={"66"}
                        gid={"2"}
                        relevancedata={relevancedata}
                        onHandleCancel={this.onHandleCancelGameRole}
                        onOkGameRolelSucess={this.onOkGameRolelSucess}
                        addRoletag={channelrolemodifytag}
                        gamename={"超能大陆"}//显示游戏的名字
                        gamerolelist={gamerolelist}
                        roledata={UserRole}//原始系统，用户所在的系统
                        defaultCheackRole={getdefaultRoleData(relevancedata).id}
                        defaultShowRole={getdefaultRoleData(relevancedata).showdata}
                        onBindingRole={this.onBindingRole}
                    />
                           
                        </Col>
                        <Col span={8}>
                            <Button
                                type="primary" icon="plus"
                                onClick={this.onAddNewUser}>
                                分组平级
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