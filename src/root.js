/**
 * Created by Administrator on 2017/5/12.
 */
//http://192.168.10.17:8090/loginPost
import $ from 'jquery';

export const root = () => {
    let posturlStoragePgage = window.sessionStorage;

    let swurl=posturlStoragePgage.getItem("tf_approot");
    if(swurl=== null){
    $.ajax({
        method: 'get',
        url: '/root.json?timestamp=' + new Date().getTime() ,
        async: false,
        success: function(data) {
            let datas = data.toufang;
            swurl = datas;
            // //console.log("获取到了root吗？", datas)
            posturlStoragePgage.setItem("tf_approot", swurl);
        }.bind(this),
        error: function(jqXHR, textStatus, errorThrown) {
            //console.log(textStatus + ' ' + errorThrown);
        }
    });
}
     return swurl
}
