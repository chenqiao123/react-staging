import React, { Component } from 'react';
//引入Echarts主模块
import echarts from 'echarts/lib/echarts';
//引入散点（气泡）图
import 'echarts/lib/chart/scatter';
//引入polar标题组件
import 'echarts/lib/component/polar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/radiusAxis';
import 'echarts/lib/component/angleAxis';
/*
DataLeft3_hour:从服务器请求回来二维离散数据
hours:极坐标系的角度轴
data:极坐标系的径向轴
angleAxisSplitLinelineStyleC:角度值得分割线的的颜色
angleAxisSplitLinelineStyleT:角度值得分割线的的样式
*/
class MulItem extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    myChartchangge = () => {
        let myChart = echarts.init(this.chart);
        const {DataLeft3_hour,hours,days}=this.props;
         let Get_symbolSize = function(DataLeft3_hour) {
             let arr = DataLeft3_hour;
             let len = arr.length;
             let minIndex, temp;
             for (let i = 0; i < len - 1; i++) {
                 minIndex = i;
                 for (let j = i + 1; j < len; j++) {
                     if (arr[j].pv_count < arr[minIndex].pv_count) {
                         minIndex = j;
                     }
                 }
                 temp = arr[i];
                 arr[i] = arr[minIndex];
                 arr[minIndex] = temp;
             }
     
             // console.log(arr);
             return 6 * 3.5 / (arr[arr.length - 1]).pv_count;
         };
         let Hours_symbolSize = Get_symbolSize(DataLeft3_hour);
         myChart.setOption({
                 polar: {},
                 tooltip: {//自定义提示框组件
                     formatter: function (params) {
                         return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                     }
                 },
                 angleAxis: {//极坐标系的角度轴。
                     type: 'category',// 类目轴，适用于离散的类目数据
                     data: hours,
                     boundaryGap: true,//
                     splitLine: {
                         show: true,
                         lineStyle: {
                             color: '#999',
                             type: 'dashed'
                         }
                     },
                     axisLine: {
                         show: false
                     },
                     axisLabel: {
                         show: true,
                         interval: 0,//坐标轴刻度标签的间隔显示，0表示全部显示
                         textStyle: {
                             fontSize: '1.2rem',
                             color: '#D1D0DD'
                         },
                         rotate: 60
                     },
                 },
                 radiusAxis: {//极坐标系的径向轴
                     type: 'category',
                     data: days,
                     axisLine: {
                         show: false
                     },
                     // axisLabel: {
                     //     rotate: 45
                     // },
                     axisLabel: {//坐标轴刻度标签
                         show: false,
                         interval: 0,
                         textStyle: {
                             fontSize: '1.2rem',
                             color: '#D1D0DD'
                         },
                         rotate: 60
                     },
                 },
                 series: [{
                     // name: 'Punch Card',
                     type: 'scatter',//散点（气泡）图
                     coordinateSystem: 'polar',//系列使用的坐标系,极坐标系
                     // symbolSize: function(val) {
                     //     return val[2] * 0.03;
                     // },
                     symbolSize: function (val) {
                         return val[2] * Hours_symbolSize;
                     },
                     itemStyle: {
                         normal: {
                             color: '#3dfff8'
                         }
                     },
                     data: DataLeft3_hour.map(function functionName(elem) {
                         return [elem.date_week, Number(elem.use_hour), elem.pv_count];
                     }),
                     animationDelay: function (idx) {//初始动画的延迟
                         return idx * 3;
                     }
                 }]
             });
    }
    componentDidMount() {
      this.myChartchangge()
    }

    render() {
        return (
            <div ref={ref => this.chart = ref}  style={{ width: '100%', height: '360px', margin: '0 auto' }}>

            </div>
        );
    }
}

export default MulItem;