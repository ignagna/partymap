var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
i = require("../../api/area"),
o = wx.getSystemInfoSync(),
h = require("../../utils/storage");
var points = [
  {
    code: "hongjunshi",
    x: 524,
    y: 838,
    w: 50,
    h: 50
  },
  {
    code: "zhiqing",
    x: 591,
    y: 906,
    w: 50,
    h: 50
  },
  {
    code: "fengshuizhen",
    x: 627,
    y: 954,
    w: 50,
    h: 50
  },
]
Component({
  properties: {},
  data: {
    scale: 1,
    width: o.windowWidth,
    height: o.windowHeight,
    // mapUrl: "https://mmbiz.qpic.cn/mmbiz_png/IVre43raEsp06HO2ysAG9OXSrvzPR8tOShzSlGWjkzhZVlpaiaR3UpxUkSc4g6Kp98OHG7ia5DSVvJlicDOGLVXMg/0?wx_fmt=png",
    mapUrl: "https://mmbiz.qpic.cn/mmbiz_png/IVre43raEsp06HO2ysAG9OXSrvzPR8tOShzSlGWjkzhZVlpaiaR3UpxUkSc4g6Kp98OHG7ia5DSVvJlicDOGLVXMg/0?wx_fmt=pn",
    originImgW: 1080,
    originImgH: 2089,
    originImg: {
      width: 1080,
      height: 2089
    },
    x: 300,
    y: 300,
    pixelRatio: 1,
    iconWidth: 75,
    iconHeight: 85.5,
    touchList: points,
    iconList: points
  },
  lifetimes: {
    ready: function() {},
    attached: function() {
      var e = this;
      console.log("device", o, 750 / o.screenWidth),
      this.setData({
        pixelRatio: 750 / o.screenWidth
      }),
      o.screenHeight < 800 && this.setData({
        iconWidth: 20
      }),
      wx.showLoading({
        title: "地图绘制中..."
      }),
      console.log("开始赋值当前屏幕大小", this.data),
      wx.getImageInfo({
        src: this.data.mapUrl,
        success: function(t) {
          console.log("resopne", t);
          var i = t.width / t.height;
          i < e.data.width / e.data.height ? e.setData({
            originImg: {
              width: e.data.width,
              height: e.data.width / i
            },
            originImgW: e.data.width,
            originImgH: e.data.width / i
          }) : e.setData({
            originImg: {
              height: e.data.height,
              width: e.data.height * i
            },
            originImgH: e.data.height,
            originImgW: e.data.height * i
          }),
          console.log("originImg", e.data.originImg),
          wx.hideLoading()
        },
        fail: function(e) {
          console.log("err", e)
        }
      }),
      this.setData({
        width: o.windowWidth,
        height: o.windowHeight
      })
    }
  },
  methods: {
    _loadLightArea: function() {
      var o = this;
      return t(e().mark((function t() {
        var h, d, a, c, n;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            // return wx.showLoading({
            //   title:
            //   "加载中..."
            // }),
            return 1,
            e.next = 3,
            (0, i.getLightList)(null);
          case 3:
            for (h = e.sent, d = h.data, console.log("lightList", d), a = o.data.iconList, c = 0; c < a.length; c++) n = a[c],
            -1 != d.indexOf(n.code) && (a[c].light = !0);
            o.setData({
              lightList: d,
              iconList: a
            }),
            wx.hideLoading(),
            o._loadMapUrl();
          case 11:
          case "end":
            return e.stop()
          }
        }), t)
      })))()
    },
    _loadMapUrl: function() {
      var e = h.get("CONFIG:MAP_URL", "");
      e && this.setData({
        mapUrl: e
      })
    },
    onChange: function(e) {},
    onScale: function(e) {},
    handleImgErr: function(e) {
      console.log("handleImgErr", e)
    },
    handleImgLoad: function() {
      console.log("handleImgLoad")
    },
    handleIconClick: function(e) {
      console.log("e", e.currentTarget.dataset);
      var t = e.currentTarget.dataset;
      "BUS" == t.name ? wx.navigateTo({
        url: "/pages/bus/bus"
      }) : wx.navigateTo({
        url: "/pages/zhendi/zhendi-detail?code=" + t.name
      })
    }
  }
});