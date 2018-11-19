import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import {swurlclass} from '../../root'
import './Login.css'
import {postAxios} from '../../config/axios';
const FormItem = Form.Item;
class Login extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log("这个数据呢?是什么",swurlclass.getSwurl())
            console.log('Received values of form: ', values);
            // 测试
            let data={"account":values.userName,"password":values.password}
        //   $.ajax({
        //   method:"post",
        //   url: "/login",
        //   data: data,
        //   dataType:'JSON',
        //   headers: {  
        //       "token":"111"
        //   },
        //   success: function(data){
        //     console.log("返回的数据是什么,",data)
        //      if(data.ret===0||data.ret===200){
        //         // callback(data) //  browserHistory.push('/login');
            
        //      }else{
        //         message.error("token过期,请重新登录")
        //         // browserHistory.push('/'); 
        //      }
               
        //         // //console.log(data.msg)
        //  }
      // });
      postAxios("/login",data,(data)=>{
        console.log("请求成功",data)
      })
          }
        });
      }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )} */}
              {/* <a className="login-form-forgot" href="">Forgot password</a> */}
              <Button type="primary" htmlType="submit" className="login-form-button">
               登录
              </Button>
               <a  onClick={this.props.Onregister}>注册</a>
            </FormItem>
          </Form>
        );
    }

}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;