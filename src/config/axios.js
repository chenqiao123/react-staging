import axios from './axios-authentication';
import qs from 'qs';
const FileDownload = require('js-file-download');

function getAxios(url,SuccessCallback){
    try {
        axios({
            method: "post",
            url: url,
        }).then(function (response) {
        
         return handleResponse(url, response,SuccessCallback)
        }).catch(function (error) {
            return errorFun(error)
            });

    } catch (error) {
        return errorFun(error)
    }
}
function postAxios(url,data,SuccessCallback){
    try {
        axios({
            method: "post",
            url: url,
            data:qs.stringify(data),
        }).then(function (response) {
        
         return handleResponse(url, response,SuccessCallback)
        }).catch(function (error) {
            return errorFun(error)
            });

    } catch (error) {
        return errorFun(error)
    }
}
function putAxios(url,data,SuccessCallback){
    try {
        axios({
            method: "put",
            url: url,
            data:qs.stringify(data),

        }).then(function (response) {
       
         return handleResponse(url, response,SuccessCallback)
        }).catch(function (error) {
            return errorFun(error)
            });

    } catch (error) {
        return errorFun(error)
    }
}
function delAxios(url,data,SuccessCallback){
    try {
        axios({
            method: "del",
            url: url,
            data:data,
        }).then(function (response) {
       
         return handleResponse(url, response,SuccessCallback)
        }).catch(function (error) {
            return errorFun(error)
            });

    } catch (error) {
        return errorFun(error)
    }
}
// 通用基本的表格导出
function exportAxiosBase(url,data,name){
            // console.log("提交的只=========",url,loginCredentialsexport,name)
            let that=this;
            try {
                axios({
                    method: "post",
                    responseType: 'blob',
                    url: url ,
                    data:qs.stringify(data),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(res => {
                    FileDownload(res.data, name+'.xlsx');//文件流本地打开下载
                
                })
            } catch (error) {
                // errorCallback(error.data);
                //异常出错
                // console.log(error.data)
               errorFun("exportAxiosBase",error.data)
            }
}


function handleResponse(url, response,SuccessCallback) {
    if(response.status < 500){
    return SuccessCallback(response.data)
    }else{
    return errorFun(response)
    }
  }
function errorFun(response){
    return {error: {message: "Request failed due to server error "}};
}

export { getAxios,postAxios,putAxios,delAxios,exportAxiosBase }