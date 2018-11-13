/**
 * Created by Administrator on 2017/5/12.
 */
//http://192.168.10.17:8090/loginPost
import $ from 'jquery';
import { root } from './root';
import { connect } from 'react-redux';
const rooturl = root();
export const getipconfig = () => {
    //console.log("roottttt",rooturl)
    let swurl = {
        "clientip": "",
        "serverip": "",
        "wsserverip":"",
        "authorip":'',
        "singleloginIp":"",
        "singlelogin":"",
        "ssid":'',
    }
    // 用缓存只请求一次
    let getipconfigdata= window.sessionStorage.getItem("tf_getipconfigdata")
    if(getipconfigdata){
        swurl=JSON.parse(getipconfigdata);
    }else{

    $.ajax({
        method: 'get',
        url: rooturl + 'ipconfiguration.json?timestamp=' + new Date().getTime(),
        async: false,
        success: function(data) {
            let clientiptemp = data.clientip;
            let serveriptemp = data.serverip
            let wsserveriptemp = data.wsserverip
            swurl.clientip = clientiptemp;
            swurl.serverip = serveriptemp;
            swurl.DataServer = data.DataServer;
            swurl.wsserverip = wsserveriptemp;
            swurl.singleloginIp=data.singleloginIp;
            swurl.singlelogin=data.singlelogin;
            //alrt(data.author)
            swurl.authorip=data.author;
            swurl.ssid=data.ssid;
            ////console.log("获取到了ip配置吗？", data)
            window.sessionStorage.setItem("tf_getipconfigdata",JSON.stringify(swurl))
        }.bind(this),
        error: function(jqXHR, textStatus, errorThrown) {
            //console.log(textStatus + ' ' + errorThrown);
        }
    });
}
    return swurl
}
