import React, { Component } from 'react';
import Register from './component/Register/Register'
import Login from './component/Login/Login'
// 整体布局

class Landing extends Component {
    state={
      isRegister:false
    }
    
    Onregister=()=>{
      this.onChange(true)
    }
    onLogin=()=>{
      this.onChange(false)
    }
    onChange=(tag)=>{
      // console.log("发生改变没有呢?",tag)
      this.setState({
          isRegister:tag
        })
  }
  render() {
    return (
      <div className="loginfrom">{!this.state.isRegister&&<Login Onregister={this.Onregister} />}
      {this.state.isRegister&&<Register onLogin= {this.onLogin}/>}
      </div>
    );
  }
}

export default Landing;
