/**
 * Created by Administrator on 2017/5/12.
 */
//http://192.168.10.17:8090/loginPost
import axios from 'axios';
// 全局的后台ip配置文件
export const swurlclass={
    swurl:"",
    SetSwurl:function(value){
        this.swurl=value
    },
    getSwurl:function(){
        return this.swurl
    }
}
// 请求当前系统的配置文件
export const getipconfig = (rooturl) => {
    
        try {
        axios({
            method: "get",
            url: rooturl + 'ipconfiguration.json?timestamp=' + new Date().getTime(),
            // headers: {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'},
        }).then(res => {
        console.log("请求回来的数据====",res.data)
        swurlclass.SetSwurl(res.data)
        })
    } catch (error) {
        // errorCallback(error.data); //异常出错
        console.log(error.data)
        
    }
  }
//   请求根路径下的root.json
export const root = () => {
    let posturlStoragePgage = window.sessionStorage;

    let swurl=posturlStoragePgage.getItem("tf_approot");
    if(swurl=== null){

    try {
        axios({
            method: "get",
            url: '/root.json?timestamp=' + new Date().getTime(),
            // headers: {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'},
        }).then(data => {
            let datas = data.data.toufang;
            // console.log("请求回来的数据==========",data,datas)
            // swurl = datas;
            getipconfig(datas)
        
        })
    } catch (error) {
        // errorCallback(error.data); //异常出错
         console.log(error.data)
       
    }
}
    //  return swurl
}
