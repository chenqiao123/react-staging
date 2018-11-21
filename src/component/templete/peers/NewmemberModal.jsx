/**
 * Created by chenqiao on 2017/5/23.
 */
import React from 'react';
import { Modal, message } from 'antd';
import CheackGroupC from './CheackGroupCustom/CheackGroupC'
import './peersmodel.css'
// import { getajax, getDepartmentUserList ,} from '../../public/ajax';
// import { RemovingChannelUsers } from '../../public/CommonFuncs'
// const Ajax = getajax.ajaxFun;
class NewmemberModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedListGame: [],
            showselectdata: [],
            usableAllUser: [],
            alldata: [],
        };
    }
    componentDidMount() {

        this.getuserlist();

    }

    getuserlist = () => {
        // 测试数据
        let userlist = [
            {
                "uid":1,
                "username":"gmadmin",
                "nickname":"系统管理员",
                "userstate":0,
                "partner":null
            },
            {
                "uid":86,
                "username":"gmtest1",
                "nickname":"gmtest1",
                "userstate":0,
                "partner":null
            },
            {
                "uid":21,
                "username":"admin",
                "nickname":"admin",
                "userstate":0,
                "partner":null
            },
            {
                "uid":67,
                "username":"test001",
                "nickname":"test001",
                "userstate":0,
                "partner":null
            },
            {
                "uid":111,
                "username":"tfadmin",
                "nickname":"投放管理员",
                "userstate":0,
                "partner":""
            },
            {
                "uid":112,
                "username":"tfadvance",
                "nickname":"投放高级用户",
                "userstate":0,
                "partner":""
            },
            {
                "uid":113,
                "username":"tfuser",
                "nickname":"投放普通",
                "userstate":0,
                "partner":""
            }
        ]//window.sessionStorage.getItem("userList")
        // let data = RemovingChannelUsers( JSON.parse(userlist))
        // let userlist =JSON.parse(data) //RemovingChannelUsers( JSON.parse(data))
        let checkuser = [];
        // console.log("this.props.originalUserlist",this.props.originalUserlist)
        this.props.originalUserlist.forEach(function (item, index) {
            checkuser.push(item.uid)
        })

        let temps = []; //临时数组1  
        let temparray = []; //临时数组2 
        for (let i = 0; i < checkuser.length; i++) {
            temps[checkuser[i]] = true; //巧妙地方：把数组B的值当成临时数组1的键并赋值为真 
        }
        ;
        for (let i = 0; i < userlist.length; i++) {
            // console.log("temps[userlist[i].uid]",temps[userlist[i].uid])
            if (!temps[userlist[i].uid] && userlist[i].userstate === 0) {
                temparray.push(userlist[i]); //巧妙地方：同时把数组A的值当成临时数组1的键并判断是否为真，如果不为真说明没重复，就合并到一个新数组里，这样就可以得到一个全新并无重复的数组 
            }
            ;
        }
        ;
        let temptt = [];
        // console.log("checkuser", userlist)
        console.log("状态全部为真", temparray)
        temparray.forEach(function (item, index) {
            temptt.push({
                value: item.uid,
                label: item.nickname + '(' + item.username + ')'
            })
        })
        this.setState({
            alldata: temptt
        })


    }
    gameSelectOk = (checkedListGame) => {
        console.log("checkedListGame,选中的值是", checkedListGame)
        this.props.onHandleCancel();

    }
    gameSelectCancel = () => {
        //取消选择,也关闭窗口
        this.handleCancel()
    }
    handleCancel = () => {
        this.props.onHandleCancel()
    }
    render() {

        return (
            <Modal
                maskClosable={false}
                title="添加分组成员"
                visible={this.props.addNewmembertag}
                width={800}
                onCancel={this.handleCancel}
                className="addNewuserToRole addNewuserToUserlist"
                footer={null}
            >
                <CheackGroupC
                    checkedList={this.state.checkedListGame}
                    showselectdata={this.state.showselectdata}
                    onOK={this.gameSelectOk}
                    titlename={this.props.newaddfont}
                    onCancel={this.gameSelectCancel}
                    data={this.state.alldata}
                    constdata={this.state.alldata}
                />
            </Modal>
        )
    }
}
export default NewmemberModal;