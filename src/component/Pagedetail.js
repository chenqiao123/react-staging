import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 
import { Carousel } from 'antd';
import gif1 from '../asset/img/1.gif';
import jpg12 from '../asset/img/12.jpg';
import jpg1 from '../asset/img/1.jpg';
import jpg2 from '../asset/img/2.jpg';
import jpg3 from '../asset/img/3.jpg';
import jpg4 from '../asset/img/4.jpg';
import jpg5 from '../asset/img/5.jpg';
import '../asset/page.css';

export function Pagedetail(params) {
    
    return (
    <div className="wrapper">
    <div>
                        <img src={gif1} className="imgshow" alt="gif1" />
                        <img src={jpg12} className="imgshow" alt="jpg12" />
                        <Carousel autoplay>
                            <img src={jpg1} className="imgshow" alt="swiper1" />
                            <img src={jpg2} className="imgshow" alt="swiper2" />
                            <img src={jpg3} className="imgshow" alt="swiper3" />
                        </Carousel>
                        {/* <a className="topa" onClick={this.props.onClick} href> </a> */}
                        <img src={jpg4} className="imgshow" alt="jpg4" />
                        <img src={jpg5} className="imgshow" alt="jpg5" />
                        {/* <a className="bottom-a" onClick={this.props.onClick} href> </a> */}
                        
                    </div>
   
    </div>)
    
}