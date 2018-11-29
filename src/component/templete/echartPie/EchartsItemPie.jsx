import React, { Component } from 'react';
//引入Echarts主模块
import echarts from 'echarts/lib/echarts';
//引入饼图
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
//引入grid标题组件
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
/*
DataLeft3_hour:从服务器请求回来二维离散数据
hours:极坐标系的角度轴
data:极坐标系的径向轴
categoryTAG:是否为离散型  默认是false
*/
class MulItem extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    myChartchangge = () => {
        const {data_opera,data_age,data_net,data_sex,series,legend,categoryTAG}=this.props
        let myChart = echarts.init(this.chart);
        let IndexRight21 = 0;
    
        let DataRight21 = {
            "opera": data_opera,
            "age": data_age,
            "net": data_net,
            "sex": data_sex
        };
    
    
        let OptionRight21 = {
            grid: {
                // top: 50,
                width: '20%',
                height: '55%',
                bottom: '23%',
                left: '75%',
                // containLabel: true
            },
            legend:legend?legend:null,
            xAxis: [{
                type: 'value',//数值轴，适用于连续数据。
                splitLine: {
                    show: false,
                    
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
            }],
            yAxis: [{
                type: categoryTAG?'category':'value',// 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                position: 'left',
                boundaryGap: false,//true数据显示在两个坐标线的中间，false表示显示在线上
                data:categoryTAG? DataRight21.net.map(function(elem) {
                    return elem.type;
                }):null,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        fontSize: '1.2rem',
                        color: '#D1D0DD'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff',
                        type: 'solid',
                        width: 0,
                        shadowColor: 'rgba(0,0,0,0)',
                    },
                },
            }],
            series:series
        };
        myChart.setOption(OptionRight21, true);
    }
    componentDidMount() {
      this.myChartchangge()
    }

    render() {
        return (
            <div ref={ref => this.chart = ref}  className='chartItem' style={{ width: '100%', height: '360px', margin: '0 auto' }}>

            </div>
        );
    }
}

export default MulItem;