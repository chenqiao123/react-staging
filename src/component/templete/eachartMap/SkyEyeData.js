//地图初始化数据
var sDivName = "MapChina";
var nMinZoom = 5;
var nMaxZoom = 25;
var nInitZoom = 5;
var oInitPoint = {
    lng: 114.11412925347894,
    lat: 37.5503394745908
};
//轮播地图对象
var map = new LbsMap(sDivName, nMinZoom, nMaxZoom, nInitZoom, oInitPoint);
//DataControl对象
var Dc = new DataControl();
//轮播列表显示中心及层级
var aTargetArry = [{
    name: {
        lng: 104.11412925347894 + 10 - 10,
        lat: 37.5503394745908
    },
    type: 0
},
{
    name: {
        lng: 102.89915972360397 + 2 - 2,
        lat: 30.36748093795755 - 0.3
    },
    type: 1
},
{
    name: {
        lng: 104.06792346330406 + 0.3 - 0.2,
        lat: 30.679942845419564
    },
    type: 2
},
{
    name: {
        lng: 104.06792346330406 + 0.07 - 0.03,
        lat: 30.679942845419564 - 0.06
    },
    type: 3
}
];

//轮播列表
var aRunArry = [{
    "name": "中国",
    "type": 0
},
{
    "name": "四川省",
    "type": 1
},
{
    "name": "成都市二绕",
    "type": 2
},
{
    "name": "成都市三环",
    "type": 2
},
];
