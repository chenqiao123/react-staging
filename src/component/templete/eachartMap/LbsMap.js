import BMap from '../../public/bmap';
function LbsMap(sDivName, nMinZoom, nMaxZoom, nInitZoom, oInitPoint) {
    this.map;
    //热力图
    this.heatmapOverlay;
    //中国行政单位层级数据
    var aUnits = new Array();
    //Marker列表
    this.aMarker = new Array();
    //覆盖物列表
    this.aOverlays = new Array();

    this.aAreas = new Array();
    //覆盖物列表 地图上的已显示的所有的覆盖物
    //商圈列表 存储各层级行政区域单位

    //获取中国行政单位数据
    this.fgetUnitsdata = function(data) {
        aUnits = data;
    }

    this.finit();
}

LbsMap.prototype = {
    finit: function() {
        this.map = new BMap.Map(sDivName, {
            minZoom: nMinZoom,
            maxZoom: nMaxZoom
        }); // 创建地图实例
        var _initpoint = new BMap.Point(oInitPoint.lng, oInitPoint.lat); // 创建点坐标
        this.map.centerAndZoom(_initpoint, nInitZoom);
    },
    //修改地图样式
    fsetMapStyle: function(mapStyle) {
        this.map.setMapStyle({
            styleJson: mapStyle
        });
    },
    //修改层级和中心点
    fgoToTarget: function(name, type) {
        //获取全局this指针
        var _that = this;
        //判断参数为点还是为名称
        var _pointOrName = function(name, zoom) {
            if (typeof(name) != "string") {
                var _point = new BMap.Point(name.lng, name.lat);
                _that.map.centerAndZoom(_point, zoom);
            } else {
                _that.map.centerAndZoom(name, zoom);
            }
        };
        //判断层级
        switch (type) {
            case 0:
                _pointOrName(name, 4);
                break;
            case 1:
                _pointOrName(name, 7);
                break;
            case 2:
                _pointOrName(name, 10);
                break;
            case 3:
                _pointOrName(name, 12);
                break;
            default:
                break;
        }
    },
    //绘制行政区域边界
    fsetBoundary: function(name, style, strokeOpacity) {
        //获取全局this指针
        var _that = this;
        var _bdary = new BMap.Boundary();
        _bdary.get(name, function(rs) { //获取行政区域
            var count = rs.boundaries.length; //行政区域的点有多少个
            if (count === 0) {
                console.log('未能获取当前输入行政区域');
                return;
            }
            for (var i = 0; i < count; i++) {
                _that.fsetPolygon(name, rs.boundaries[i], style, 0.99, "Boundary");
            }
        });
        _that.aOverlays = _that.map.getOverlays();
    },
    //绘制多边形
    fsetPolygon: function(name, data, style, strokeOpacity, type) {
        var ply = new BMap.Polygon(data, BoundaryStyle);
        ply.setFillColor("");
        ply.setStrokeOpacity(strokeOpacity);
        ply.type = type;
        ply.name = name + type;
        this.map.addOverlay(ply);
        this.aOverlays = this.map.getOverlays();
    },
    //绘制标签
    fsetLable: function(name, locationName, offset, Style) {
        var _that = this;
        // 空点 样式
        var _MarkerStyle_empty = {
            icon: new BMap.Icon("https://gw.alicdn.com/tps/TB1mC3GNpXXXXcTXVXXXXXXXXXX-375-38.png", new BMap.Size(0, 0), {
                imageOffset: new BMap.Size(0, 0)
            })
        }
        var _myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        _myGeo.getPoint(locationName, function(point) {
            if (point) {
                var marker = new BMap.Marker(point, _MarkerStyle_empty);
                marker.type = 'Lable';
                _that.map.addOverlay(marker);
                var label = new BMap.Label(name, {
                    offset: new BMap.Size(offset.x, offset.y)
                });
                label.setStyle(Style);
                marker.setLabel(label);
                _that.map.addOverlay(marker);
            } else {
                console.log("您选择地址没有解析到结果!");
            }
        }, locationName);
        this.aOverlays = this.map.getOverlays();
    },
    //清除行政区域边界
    fclearBoundary: function() {
        var overlays = this.map.getOverlays()
        for (var i = 0; i < overlays.length; i++) {
            if (overlays[i].type == "Boundary") {
                this.map.removeOverlay(overlays[i]);
            }
        }
        this.aOverlays = this.map.getOverlays();
    },
    //清除标签
    fclearLable: function() {
        var overlays = this.map.getOverlays()
        for (var i = 0; i < overlays.length; i++) {
            if (overlays[i].type == "Lable") {
                this.map.removeOverlay(overlays[i]);
            }
        }
        this.aOverlays = this.map.getOverlays();
    },
    //初始化热力图
    finitHeatMapData: function(Datas, Max) {
        this.heatmapOverlay = new BMapLib.HeatmapOverlay({
            "radius": 10
        });
        this.map.addOverlay(this.heatmapOverlay);
        this.heatmapOverlay.setDataSet({
            data: Datas,
            max: Max
        });
        var gradient = {
            "0.2": 'RGB(61,79,172)', //#0033A3
            "0.4": 'RGB(36,200,30)', //#24C81E
            "0.6": 'RGB(207,236,3)', //#CFEC03
            "0.8": 'RGB(247,168,30)', //#AA2709
            "1.0": 'RGB(255,10,0)', //#FF0A00
        };
        var HeatMapStylea = {
            "gradient": gradient,
            "opacity": 65
        }
        this.heatmapOverlay.setOptions(HeatMapStyle);
        this.heatmapOverlay.show();
        this.aOverlays = this.map.getOverlays();
    },
    //修改热力图数据
    freSetHeatMapData: function(Datas, Max) {
        this.heatmapOverlay.setDataSet({
            data: Datas,
            max: Max
        });
        this.heatmapOverlay.show();
    }
}
export default LbsMap