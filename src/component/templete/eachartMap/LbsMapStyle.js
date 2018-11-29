var labelStyle = {
    backgroundColor: "#52525c",
    fontSize: "12px",
    // backgroundColor: "0.05",
    borderWidth: "2px",
    borderColor: "#000000"
    // fontWeight: "bold"
}

var RunLabelStyle = {
    backgroundColor: "0.05",
    borderWidth: 0,
    color:"#2deced",
    fontSize: "20px",
    fontWeight: "bold"
}

var RunLabelStyle_chengdu2R = {
    backgroundColor: "0.05",
    borderWidth: 0,
    color:"#2deced",
    fontSize: "20px",
    fontWeight: "bold",
    // transform:"rotate(350deg)"
}

var RunLabelStyle_chengdu2H = {
    backgroundColor: "0.05",
    borderWidth: 0,
    color:"#2deced",
    fontSize: "20px",
    fontWeight: "bold",
    // transform:"rotate(5deg)"
}

var RunLabelStyle = {
    backgroundColor: "0.05",
    borderWidth: 0,
    color:"#2deced",
    fontSize: "20px",
    fontWeight: "bold"
}

var HeatMapStyle = {
    "gradient": {
        "0.2": 'RGB(61,79,172)',//#0033A3
        "0.4": 'RGB(36,200,30)',//#24C81E
        "0.6": 'RGB(207,236,3)',//#CFEC03
        "0.8": 'RGB(247,168,30)',//#AA2709
        "1.0": 'RGB(255,10,0)',//#FF0A00
    },
    "opacity": 65
}

//亮蓝色  行政区域 边界线样式
// var BoundaryStyle = { strokeWeight: 2, strokeColor: "#2deced"}
var BoundaryStyle = { strokeWeight: 2, strokeColor: "#7fe7f9"}

//Marker未点击的时的样式
var MarkerStyle_off ={icon: new BMap.Icon("img/purple.png", new BMap.Size(35, 35), {
    imageOffset: new BMap.Size(0,0)
  })
}

//Marker点击之后的样式
var MarkerStyle_on ={icon: new BMap.Icon("img/purple.png", new BMap.Size(35, 35), {
    imageOffset: new BMap.Size(0,0)
  })
}


//刷选区域样式
var styleOptions = {
    strokeColor: "#0ABFE5",    //边线颜色。
    fillColor: "#1E73B2",      //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
    fillOpacity:0.1,      //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
//深色系地图样式
var mapStyle = [
          {
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                              // "color": "#19191B"
                              "color": "#050414"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#2b2b2b"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "color": "#8b8787",
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -77,
                              "saturation": -94
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -52,
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#313131"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#8b8787"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -75,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -65
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -40,
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#8b8787",
                              "weight": "1",
                              "lightness": -29
                    }
          }
]
