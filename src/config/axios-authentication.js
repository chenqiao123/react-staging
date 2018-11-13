import axios from 'axios';
import { getipconfig } from '../getipconfig';
import { message} from 'antd';
const getip =  getipconfig();
const testUrl = getip.serverip;
const instance = axios.create({
    baseURL: testUrl,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',      //改这里就好了
    },
  
});


export default instance;