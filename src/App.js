import React, { Component } from 'react';
import logo from './logo.svg';
import {Page} from './component/Page'
import './App.css';

class App extends Component {
  down=()=>{
    console.log("点击下载======")
    window.location.href="https://bz.game3379.com/newpages/download/1/3805/1";
  }
  render() {
    return (
      <div className="App">
      
        <Page onClick={this.down}></Page>
      </div>
    );
  }
}

export default App;
