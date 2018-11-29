import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import EchartCategory from './templete/eachartHour/EchartsItemHours';
import EchartsItemPie from './templete/echartPie/EchartsItemPie';
import './templete/eachartHour/Hour.css';
class Hour extends Component {
    render() {
        let DataLeft3_hour=[
            {
                "date_week":4,
                "pv_count":256,
                "stat_date":"2018-11-22",
                "use_hour":"00"
            },
            {
                "date_week":4,
                "pv_count":113,
                "stat_date":"2018-11-22",
                "use_hour":"01"
            },
            {
                "date_week":4,
                "pv_count":96,
                "stat_date":"2018-11-22",
                "use_hour":"02"
            },
            {
                "date_week":4,
                "pv_count":81,
                "stat_date":"2018-11-22",
                "use_hour":"03"
            },
            {
                "date_week":4,
                "pv_count":67,
                "stat_date":"2018-11-22",
                "use_hour":"04"
            },
            {
                "date_week":4,
                "pv_count":105,
                "stat_date":"2018-11-22",
                "use_hour":"05"
            },
            {
                "date_week":4,
                "pv_count":187,
                "stat_date":"2018-11-22",
                "use_hour":"06"
            },
            {
                "date_week":4,
                "pv_count":348,
                "stat_date":"2018-11-22",
                "use_hour":"07"
            },
            {
                "date_week":4,
                "pv_count":788,
                "stat_date":"2018-11-22",
                "use_hour":"08"
            },
            {
                "date_week":4,
                "pv_count":449,
                "stat_date":"2018-11-22",
                "use_hour":"09"
            },
            {
                "date_week":4,
                "pv_count":381,
                "stat_date":"2018-11-22",
                "use_hour":"10"
            },
            {
                "date_week":4,
                "pv_count":363,
                "stat_date":"2018-11-22",
                "use_hour":"11"
            },
            {
                "date_week":4,
                "pv_count":334,
                "stat_date":"2018-11-22",
                "use_hour":"12"
            },
            {
                "date_week":4,
                "pv_count":330,
                "stat_date":"2018-11-22",
                "use_hour":"13"
            },
            {
                "date_week":4,
                "pv_count":598,
                "stat_date":"2018-11-22",
                "use_hour":"14"
            },
            {
                "date_week":4,
                "pv_count":732,
                "stat_date":"2018-11-22",
                "use_hour":"15"
            },
            {
                "date_week":4,
                "pv_count":1128,
                "stat_date":"2018-11-22",
                "use_hour":"16"
            },
            {
                "date_week":4,
                "pv_count":800,
                "stat_date":"2018-11-22",
                "use_hour":"17"
            },
            {
                "date_week":4,
                "pv_count":434,
                "stat_date":"2018-11-22",
                "use_hour":"18"
            },
            {
                "date_week":4,
                "pv_count":690,
                "stat_date":"2018-11-22",
                "use_hour":"19"
            },
            {
                "date_week":4,
                "pv_count":459,
                "stat_date":"2018-11-22",
                "use_hour":"20"
            },
            {
                "date_week":4,
                "pv_count":527,
                "stat_date":"2018-11-22",
                "use_hour":"21"
            },
            {
                "date_week":4,
                "pv_count":443,
                "stat_date":"2018-11-22",
                "use_hour":"22"
            },
            {
                "date_week":4,
                "pv_count":326,
                "stat_date":"2018-11-22",
                "use_hour":"23"
            },
            {
                "date_week":5,
                "pv_count":171,
                "stat_date":"2018-11-23",
                "use_hour":"00"
            },
            {
                "date_week":5,
                "pv_count":105,
                "stat_date":"2018-11-23",
                "use_hour":"01"
            },
            {
                "date_week":5,
                "pv_count":62,
                "stat_date":"2018-11-23",
                "use_hour":"02"
            },
            {
                "date_week":5,
                "pv_count":55,
                "stat_date":"2018-11-23",
                "use_hour":"03"
            },
            {
                "date_week":5,
                "pv_count":60,
                "stat_date":"2018-11-23",
                "use_hour":"04"
            },
            {
                "date_week":5,
                "pv_count":71,
                "stat_date":"2018-11-23",
                "use_hour":"05"
            },
            {
                "date_week":5,
                "pv_count":227,
                "stat_date":"2018-11-23",
                "use_hour":"06"
            },
            {
                "date_week":5,
                "pv_count":521,
                "stat_date":"2018-11-23",
                "use_hour":"07"
            },
            {
                "date_week":5,
                "pv_count":486,
                "stat_date":"2018-11-23",
                "use_hour":"08"
            },
            {
                "date_week":5,
                "pv_count":390,
                "stat_date":"2018-11-23",
                "use_hour":"09"
            },
            {
                "date_week":5,
                "pv_count":576,
                "stat_date":"2018-11-23",
                "use_hour":"10"
            },
            {
                "date_week":5,
                "pv_count":437,
                "stat_date":"2018-11-23",
                "use_hour":"11"
            },
            {
                "date_week":5,
                "pv_count":327,
                "stat_date":"2018-11-23",
                "use_hour":"12"
            },
            {
                "date_week":5,
                "pv_count":542,
                "stat_date":"2018-11-23",
                "use_hour":"13"
            },
            {
                "date_week":5,
                "pv_count":517,
                "stat_date":"2018-11-23",
                "use_hour":"14"
            },
            {
                "date_week":5,
                "pv_count":603,
                "stat_date":"2018-11-23",
                "use_hour":"15"
            },
            {
                "date_week":5,
                "pv_count":524,
                "stat_date":"2018-11-23",
                "use_hour":"16"
            },
            {
                "date_week":5,
                "pv_count":380,
                "stat_date":"2018-11-23",
                "use_hour":"17"
            },
            {
                "date_week":5,
                "pv_count":519,
                "stat_date":"2018-11-23",
                "use_hour":"18"
            },
            {
                "date_week":5,
                "pv_count":362,
                "stat_date":"2018-11-23",
                "use_hour":"19"
            },
            {
                "date_week":5,
                "pv_count":326,
                "stat_date":"2018-11-23",
                "use_hour":"20"
            },
            {
                "date_week":5,
                "pv_count":502,
                "stat_date":"2018-11-23",
                "use_hour":"21"
            },
            {
                "date_week":5,
                "pv_count":440,
                "stat_date":"2018-11-23",
                "use_hour":"22"
            },
            {
                "date_week":5,
                "pv_count":295,
                "stat_date":"2018-11-23",
                "use_hour":"23"
            },
            {
                "date_week":6,
                "pv_count":182,
                "stat_date":"2018-11-24",
                "use_hour":"00"
            },
            {
                "date_week":6,
                "pv_count":99,
                "stat_date":"2018-11-24",
                "use_hour":"01"
            },
            {
                "date_week":6,
                "pv_count":76,
                "stat_date":"2018-11-24",
                "use_hour":"02"
            },
            {
                "date_week":6,
                "pv_count":73,
                "stat_date":"2018-11-24",
                "use_hour":"03"
            },
            {
                "date_week":6,
                "pv_count":67,
                "stat_date":"2018-11-24",
                "use_hour":"04"
            },
            {
                "date_week":6,
                "pv_count":67,
                "stat_date":"2018-11-24",
                "use_hour":"05"
            },
            {
                "date_week":6,
                "pv_count":141,
                "stat_date":"2018-11-24",
                "use_hour":"06"
            },
            {
                "date_week":6,
                "pv_count":233,
                "stat_date":"2018-11-24",
                "use_hour":"07"
            },
            {
                "date_week":6,
                "pv_count":425,
                "stat_date":"2018-11-24",
                "use_hour":"08"
            },
            {
                "date_week":6,
                "pv_count":400,
                "stat_date":"2018-11-24",
                "use_hour":"09"
            },
            {
                "date_week":6,
                "pv_count":332,
                "stat_date":"2018-11-24",
                "use_hour":"10"
            },
            {
                "date_week":6,
                "pv_count":321,
                "stat_date":"2018-11-24",
                "use_hour":"11"
            },
            {
                "date_week":6,
                "pv_count":482,
                "stat_date":"2018-11-24",
                "use_hour":"12"
            },
            {
                "date_week":6,
                "pv_count":301,
                "stat_date":"2018-11-24",
                "use_hour":"13"
            },
            {
                "date_week":6,
                "pv_count":282,
                "stat_date":"2018-11-24",
                "use_hour":"14"
            },
            {
                "date_week":6,
                "pv_count":280,
                "stat_date":"2018-11-24",
                "use_hour":"15"
            },
            {
                "date_week":6,
                "pv_count":300,
                "stat_date":"2018-11-24",
                "use_hour":"16"
            },
            {
                "date_week":6,
                "pv_count":294,
                "stat_date":"2018-11-24",
                "use_hour":"17"
            },
            {
                "date_week":6,
                "pv_count":283,
                "stat_date":"2018-11-24",
                "use_hour":"18"
            },
            {
                "date_week":6,
                "pv_count":282,
                "stat_date":"2018-11-24",
                "use_hour":"19"
            },
            {
                "date_week":6,
                "pv_count":315,
                "stat_date":"2018-11-24",
                "use_hour":"20"
            },
            {
                "date_week":6,
                "pv_count":782,
                "stat_date":"2018-11-24",
                "use_hour":"21"
            },
            {
                "date_week":6,
                "pv_count":500,
                "stat_date":"2018-11-24",
                "use_hour":"22"
            },
            {
                "date_week":6,
                "pv_count":333,
                "stat_date":"2018-11-24",
                "use_hour":"23"
            },
            {
                "date_week":0,
                "pv_count":170,
                "stat_date":"2018-11-25",
                "use_hour":"00"
            },
            {
                "date_week":0,
                "pv_count":85,
                "stat_date":"2018-11-25",
                "use_hour":"01"
            },
            {
                "date_week":0,
                "pv_count":58,
                "stat_date":"2018-11-25",
                "use_hour":"02"
            },
            {
                "date_week":0,
                "pv_count":48,
                "stat_date":"2018-11-25",
                "use_hour":"03"
            },
            {
                "date_week":0,
                "pv_count":44,
                "stat_date":"2018-11-25",
                "use_hour":"04"
            },
            {
                "date_week":0,
                "pv_count":63,
                "stat_date":"2018-11-25",
                "use_hour":"05"
            },
            {
                "date_week":0,
                "pv_count":108,
                "stat_date":"2018-11-25",
                "use_hour":"06"
            },
            {
                "date_week":0,
                "pv_count":195,
                "stat_date":"2018-11-25",
                "use_hour":"07"
            },
            {
                "date_week":0,
                "pv_count":370,
                "stat_date":"2018-11-25",
                "use_hour":"08"
            },
            {
                "date_week":0,
                "pv_count":485,
                "stat_date":"2018-11-25",
                "use_hour":"09"
            },
            {
                "date_week":0,
                "pv_count":292,
                "stat_date":"2018-11-25",
                "use_hour":"10"
            },
            {
                "date_week":0,
                "pv_count":292,
                "stat_date":"2018-11-25",
                "use_hour":"11"
            },
            {
                "date_week":0,
                "pv_count":270,
                "stat_date":"2018-11-25",
                "use_hour":"12"
            },
            {
                "date_week":0,
                "pv_count":256,
                "stat_date":"2018-11-25",
                "use_hour":"13"
            },
            {
                "date_week":0,
                "pv_count":258,
                "stat_date":"2018-11-25",
                "use_hour":"14"
            },
            {
                "date_week":0,
                "pv_count":227,
                "stat_date":"2018-11-25",
                "use_hour":"15"
            },
            {
                "date_week":0,
                "pv_count":267,
                "stat_date":"2018-11-25",
                "use_hour":"16"
            },
            {
                "date_week":0,
                "pv_count":354,
                "stat_date":"2018-11-25",
                "use_hour":"17"
            },
            {
                "date_week":0,
                "pv_count":413,
                "stat_date":"2018-11-25",
                "use_hour":"18"
            },
            {
                "date_week":0,
                "pv_count":642,
                "stat_date":"2018-11-25",
                "use_hour":"19"
            },
            {
                "date_week":0,
                "pv_count":374,
                "stat_date":"2018-11-25",
                "use_hour":"20"
            },
            {
                "date_week":0,
                "pv_count":537,
                "stat_date":"2018-11-25",
                "use_hour":"21"
            },
            {
                "date_week":0,
                "pv_count":432,
                "stat_date":"2018-11-25",
                "use_hour":"22"
            },
            {
                "date_week":0,
                "pv_count":262,
                "stat_date":"2018-11-25",
                "use_hour":"23"
            },
            {
                "date_week":1,
                "pv_count":177,
                "stat_date":"2018-11-26",
                "use_hour":"00"
            },
            {
                "date_week":1,
                "pv_count":83,
                "stat_date":"2018-11-26",
                "use_hour":"01"
            },
            {
                "date_week":1,
                "pv_count":61,
                "stat_date":"2018-11-26",
                "use_hour":"02"
            },
            {
                "date_week":1,
                "pv_count":50,
                "stat_date":"2018-11-26",
                "use_hour":"03"
            },
            {
                "date_week":1,
                "pv_count":45,
                "stat_date":"2018-11-26",
                "use_hour":"04"
            },
            {
                "date_week":1,
                "pv_count":59,
                "stat_date":"2018-11-26",
                "use_hour":"05"
            },
            {
                "date_week":1,
                "pv_count":148,
                "stat_date":"2018-11-26",
                "use_hour":"06"
            },
            {
                "date_week":1,
                "pv_count":280,
                "stat_date":"2018-11-26",
                "use_hour":"07"
            },
            {
                "date_week":1,
                "pv_count":549,
                "stat_date":"2018-11-26",
                "use_hour":"08"
            },
            {
                "date_week":1,
                "pv_count":400,
                "stat_date":"2018-11-26",
                "use_hour":"09"
            },
            {
                "date_week":1,
                "pv_count":370,
                "stat_date":"2018-11-26",
                "use_hour":"10"
            },
            {
                "date_week":1,
                "pv_count":372,
                "stat_date":"2018-11-26",
                "use_hour":"11"
            },
            {
                "date_week":1,
                "pv_count":367,
                "stat_date":"2018-11-26",
                "use_hour":"12"
            },
            {
                "date_week":1,
                "pv_count":336,
                "stat_date":"2018-11-26",
                "use_hour":"13"
            },
            {
                "date_week":1,
                "pv_count":527,
                "stat_date":"2018-11-26",
                "use_hour":"14"
            },
            {
                "date_week":1,
                "pv_count":763,
                "stat_date":"2018-11-26",
                "use_hour":"15"
            },
            {
                "date_week":1,
                "pv_count":704,
                "stat_date":"2018-11-26",
                "use_hour":"16"
            },
            {
                "date_week":1,
                "pv_count":614,
                "stat_date":"2018-11-26",
                "use_hour":"17"
            },
            {
                "date_week":1,
                "pv_count":413,
                "stat_date":"2018-11-26",
                "use_hour":"18"
            },
            {
                "date_week":1,
                "pv_count":625,
                "stat_date":"2018-11-26",
                "use_hour":"19"
            },
            {
                "date_week":1,
                "pv_count":424,
                "stat_date":"2018-11-26",
                "use_hour":"20"
            },
            {
                "date_week":1,
                "pv_count":560,
                "stat_date":"2018-11-26",
                "use_hour":"21"
            },
            {
                "date_week":1,
                "pv_count":678,
                "stat_date":"2018-11-26",
                "use_hour":"22"
            },
            {
                "date_week":1,
                "pv_count":344,
                "stat_date":"2018-11-26",
                "use_hour":"23"
            },
            {
                "date_week":2,
                "pv_count":149,
                "stat_date":"2018-11-27",
                "use_hour":"00"
            },
            {
                "date_week":2,
                "pv_count":93,
                "stat_date":"2018-11-27",
                "use_hour":"01"
            },
            {
                "date_week":2,
                "pv_count":65,
                "stat_date":"2018-11-27",
                "use_hour":"02"
            },
            {
                "date_week":2,
                "pv_count":55,
                "stat_date":"2018-11-27",
                "use_hour":"03"
            },
            {
                "date_week":2,
                "pv_count":51,
                "stat_date":"2018-11-27",
                "use_hour":"04"
            },
            {
                "date_week":2,
                "pv_count":75,
                "stat_date":"2018-11-27",
                "use_hour":"05"
            },
            {
                "date_week":2,
                "pv_count":133,
                "stat_date":"2018-11-27",
                "use_hour":"06"
            },
            {
                "date_week":2,
                "pv_count":257,
                "stat_date":"2018-11-27",
                "use_hour":"07"
            },
            {
                "date_week":2,
                "pv_count":483,
                "stat_date":"2018-11-27",
                "use_hour":"08"
            },
            {
                "date_week":2,
                "pv_count":392,
                "stat_date":"2018-11-27",
                "use_hour":"09"
            },
            {
                "date_week":2,
                "pv_count":361,
                "stat_date":"2018-11-27",
                "use_hour":"10"
            },
            {
                "date_week":2,
                "pv_count":983,
                "stat_date":"2018-11-27",
                "use_hour":"11"
            },
            {
                "date_week":2,
                "pv_count":823,
                "stat_date":"2018-11-27",
                "use_hour":"12"
            },
            {
                "date_week":2,
                "pv_count":410,
                "stat_date":"2018-11-27",
                "use_hour":"13"
            },
            {
                "date_week":2,
                "pv_count":875,
                "stat_date":"2018-11-27",
                "use_hour":"14"
            },
            {
                "date_week":2,
                "pv_count":592,
                "stat_date":"2018-11-27",
                "use_hour":"15"
            },
            {
                "date_week":2,
                "pv_count":514,
                "stat_date":"2018-11-27",
                "use_hour":"16"
            },
            {
                "date_week":2,
                "pv_count":449,
                "stat_date":"2018-11-27",
                "use_hour":"17"
            },
            {
                "date_week":2,
                "pv_count":347,
                "stat_date":"2018-11-27",
                "use_hour":"18"
            },
            {
                "date_week":2,
                "pv_count":355,
                "stat_date":"2018-11-27",
                "use_hour":"19"
            },
            {
                "date_week":2,
                "pv_count":355,
                "stat_date":"2018-11-27",
                "use_hour":"20"
            },
            {
                "date_week":2,
                "pv_count":550,
                "stat_date":"2018-11-27",
                "use_hour":"21"
            },
            {
                "date_week":2,
                "pv_count":443,
                "stat_date":"2018-11-27",
                "use_hour":"22"
            },
            {
                "date_week":2,
                "pv_count":303,
                "stat_date":"2018-11-27",
                "use_hour":"23"
            },
            {
                "date_week":3,
                "pv_count":168,
                "stat_date":"2018-11-28",
                "use_hour":"00"
            },
            {
                "date_week":3,
                "pv_count":85,
                "stat_date":"2018-11-28",
                "use_hour":"01"
            },
            {
                "date_week":3,
                "pv_count":75,
                "stat_date":"2018-11-28",
                "use_hour":"02"
            },
            {
                "date_week":3,
                "pv_count":57,
                "stat_date":"2018-11-28",
                "use_hour":"03"
            },
            {
                "date_week":3,
                "pv_count":54,
                "stat_date":"2018-11-28",
                "use_hour":"04"
            },
            {
                "date_week":3,
                "pv_count":69,
                "stat_date":"2018-11-28",
                "use_hour":"05"
            },
            {
                "date_week":3,
                "pv_count":133,
                "stat_date":"2018-11-28",
                "use_hour":"06"
            },
            {
                "date_week":3,
                "pv_count":457,
                "stat_date":"2018-11-28",
                "use_hour":"07"
            },
            {
                "date_week":3,
                "pv_count":711,
                "stat_date":"2018-11-28",
                "use_hour":"08"
            },
            {
                "date_week":3,
                "pv_count":518,
                "stat_date":"2018-11-28",
                "use_hour":"09"
            },
            {
                "date_week":3,
                "pv_count":757,
                "stat_date":"2018-11-28",
                "use_hour":"10"
            },
            {
                "date_week":3,
                "pv_count":881,
                "stat_date":"2018-11-28",
                "use_hour":"11"
            },
            {
                "date_week":3,
                "pv_count":705,
                "stat_date":"2018-11-28",
                "use_hour":"12"
            },
            {
                "date_week":3,
                "pv_count":831,
                "stat_date":"2018-11-28",
                "use_hour":"13"
            },
            {
                "date_week":3,
                "pv_count":878,
                "stat_date":"2018-11-28",
                "use_hour":"14"
            },
            {
                "date_week":3,
                "pv_count":704,
                "stat_date":"2018-11-28",
                "use_hour":"15"
            },
            {
                "date_week":3,
                "pv_count":643,
                "stat_date":"2018-11-28",
                "use_hour":"16"
            },
            {
                "date_week":3,
                "pv_count":444,
                "stat_date":"2018-11-28",
                "use_hour":"17"
            },
            {
                "date_week":3,
                "pv_count":381,
                "stat_date":"2018-11-28",
                "use_hour":"18"
            },
            {
                "date_week":3,
                "pv_count":396,
                "stat_date":"2018-11-28",
                "use_hour":"19"
            },
            {
                "date_week":3,
                "pv_count":433,
                "stat_date":"2018-11-28",
                "use_hour":"20"
            },
            {
                "date_week":3,
                "pv_count":585,
                "stat_date":"2018-11-28",
                "use_hour":"21"
            },
            {
                "date_week":3,
                "pv_count":595,
                "stat_date":"2018-11-28",
                "use_hour":"22"
            },
            {
                "date_week":3,
                "pv_count":389,
                "stat_date":"2018-11-28",
                "use_hour":"23"
            }
        ]
        let hours = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];
        let days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        let data={"browse": [{"type": "\u89c6\u9891", "value": 11.11}, {"type": "VR\u89c6\u9891", "value": 1.59}, {"type": "\u56fe\u6587\u76f4\u64ad", "value": 0.61}, {"type": "\u5916\u94fe", "value": 2.58}, {"type": "\u56fe\u96c6", "value": 10.18}, {"type": "\u89c6\u9891\u76f4\u64ad", "value": 0.07}, {"type": "\u666e\u901a\u65b0\u95fb", "value": 71.62}, {"type": "\u89c6\u56fe\u76f4\u64ad", "value": 2.24}], "newLength": [{"type": "200-500\u5b57", "value": 24.13}, {"type": "500-1000\u5b57", "value": 25.68}, {"type": "1000\u5b57\u53ca\u4ee5\u4e0a", "value": 27.79}, {"type": "0-200\u5b57", "value": 22.4}], "opera": [{"type": "\u7535\u4fe1", "value": 18.81}, {"type": "\u8054\u901a", "value": 19.84}, {"type": "\u79fb\u52a8", "value": 61.35}], "age": [{"type": "31-40\u5c81", "value": 15.56}, {"type": "23-30\u5c81", "value": 45.93}, {"type": "41\u5c81\u4ee5\u4e0a", "value": 11.85}, {"type": "\u5c0f\u4e8e22\u5c81", "value": 26.67}], "userbehavior": [{"type": "\u6d4f\u89c8", "value": 96.08}, {"type": "\u53d1\u8868\u8bc4\u8bba", "value": 2.14}, {"type": "\u6536\u85cf", "value": 0.98}, {"type": "\u70b9\u8d5e", "value": 0.8}], "net": [{"type": "2G", "value": 0.49}, {"type": "4G", "value": 24.0}, {"type": "Offline", "value": 1.42}, {"type": "WiFi", "value": 70.62}, {"type": "3G", "value": 3.46}], "channel": [{"type": "\u89c6\u9891", "value": 0.29}, {"type": "\u5c01\u9762", "value": 0.17}, {"type": "\u751f\u6d3b", "value": 5.63}, {"type": "\u5a31\u4e50", "value": 9.2}, {"type": "\u4f53\u80b2", "value": 8.76}, {"type": "\u63a8\u8350", "value": 27.13}, {"type": "\u65f6\u4e8b", "value": 25.32}, {"type": "\u6821\u56ed", "value": 6.48}, {"type": "\u5c01\u871c", "value": 1.86}, {"type": "\u79d1\u6280", "value": 2.52}, {"type": "\u5e7f\u544a", "value": 0.32}, {"type": "\u5176\u4ed6", "value": 8.53}, {"type": "\u5546\u4e1a", "value": 3.63}, {"type": "\u7cbe\u9009", "value": 0.16}], "sex": [{"type": "\u7537", "value": 39.29}, {"type": "\u5973", "value": 60.71}]}
        let DataLeft3_sys={
            "os": [
                {
                  "type": "android\u5bb6\u65cf", 
                  "value": 603896
                }, 
                {
                  "type": "iOS", 
                  "value": 603896
                }
              ],
            "emotion": [
                {
                  "type": "\u4e2d\u7acb/\u4e2d\u6027", 
                  "value": "29.16"
                }, 
                {
                  "type": "\u8d1f\u9762/\u6d88\u6781", 
                  "value": "16.46"
                }, 
                {
                  "type": "\u6b63\u9762/\u79ef\u6781", 
                  "value": "54.38"
                }
              ],
        }
        const series= [{
        name: 'sex',
        center: ['29%', '50%'],
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '40%'],
        label: {
            normal: {
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data.sex.map(function(elem) {
            return {
                "name": elem.type,
                "value": elem.value
            };
        }),
        color:['#1960f0', '#0e97ff']
    },
    {
        name: 'age',
        center: ['29%', '50%'],
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data.age.map(function(elem) {
            return {
                "name": elem.type,
                "value": elem.value
            };
        }),
        color:['#37f3ff', '#1960f0', '#1db7ff', '#0e97ff']
    },
    {
        name: 'net',
        type: 'bar',
        symbol: 'none',
        symbolSize: 2,
        showAllSymbol: true,
        barWidth: 10,
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#37f3ff'

            }
        },
        data: data.net.map(function(elem) {
            return {
                "name": elem.type,
                "value": elem.value
            };
        })
    },
]
        const legend= [{
        x: 'left',
        width: '10%',
        height: '30%',
        bottom: '5%',
        left: '8%',
        itemHeight: 8,
        itemWidth: 6,
        itemGap: 3,
        textStyle: {
            fontSize: 8,
            color: '#e5feff'
        },
        data: DataLeft3_sys.os.map(function(elem) {
            return elem.type;
        })
    },
    {
        x: 'left',
        width: '10%',
        height: '30%',
        bottom: '5%',
        left: '80%',
        itemHeight: 8,
        itemWidth: 6,
        itemGap: 3,
        textStyle: {
            fontSize: 8,
            color: '#e5feff'
        },
        data: DataLeft3_sys.emotion.map(function(elem) {
            return elem.type;
        })
    }
];
        const series2=  [{
            name: 'os',
            center: ['24%', '50%'],//图像在页面中的位置
            type: 'pie',
            selectedMode: 'single',//是否支持多个选中
            radius: ['40%', '50%'],//表示内外半径，40%，内半径，50%外半径
            label: {//图标上的文本信息
                normal: {
                    show: false,
                    position: 'outside'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: DataLeft3_sys.os.map(function(elem) {
                return {
                    "name": elem.type,
                    "value": elem.value
                };
            }),
            color: ['#ff2d27', '#832723']
            },
            {
            name: 'emotion',
            center: ['69%', '50%'],
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '50%'],
            label: {
                normal: {
                    position: 'inside',
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },
            data: DataLeft3_sys.emotion.map(function(elem) {
                return {
                    "name": elem.type,
                    "value": elem.value
                };
            }),
            color: ['#1993f0', '#09c0ff', '#3dfff8']
            }
        ]
        return(
            <div className="Hour">
                <Row>
                    {/* 散点图 */}
                </Row>
                <Row>
                <EchartCategory
                DataLeft3_hour={DataLeft3_hour}
                hours={hours}
                days={days}
                ></EchartCategory>
                </Row>
                <Row>
                    {/* 饼图。构建多个饼图   //data_opera,data_age,data_net,data_sex*/}
                    <EchartsItemPie
                    data_opera={data.opera}
                    data_age={data.age}
                    data_net={data.net}
                    data_sex={data.sex}
                    series={series}
                    categoryTAG={true}
                    >

                    </EchartsItemPie>
                    {/* 用户情感 */}
                    <EchartsItemPie
                    legend={legend}
                    series={series2}
                    categoryTAG={false}
                    >
                    </EchartsItemPie>
                </Row>
                <Row>

                </Row>
                </div>
        )
    }
}
export default Hour;