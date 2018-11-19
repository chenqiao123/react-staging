import axios from 'axios';
// import {swurlclass} from '../root'

const instance = axios.create({
    baseURL: "/",
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',      //改这里就好了
    },
  
});


export default instance;