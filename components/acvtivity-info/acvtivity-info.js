var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
a = require("../../api/user"),
n = require("../../wxParse/wxParse.js");
Component({
  properties: {},
  data: {
    actInfo: {
      id: -1,
      content: "",
      areaId: -1,
      areaCode: "",
      lineId: -1
    },
    showAct: !1
  },
  lifetimes: {
    ready: function() {
      this._loadAct()
    }
  },
  methods: {
    _loadAct: function() {
      var n = this;
      return t(e().mark((function t() {
        var r, o;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            // return wx.showLoading({
            //   title:
            //   "加载中..."
            // }),
            return 1,
            e.next = 3,
            (0, a.getActivityInfo)();
          case 3:
            r = e.sent,
            o = r.data,
            console.log("actInfo", o),
            o && -1 != o.id && (wx.hideLoading(), n.setData({
              actInfo: o,
              showAct: !0
            }), n.handleHtml(o.content));
          case 7:
          case "end":
            return e.stop()
          }
        }), t)
      })))()
    },
    go: function() {
      this.close(),
      wx.navigateTo({
        url: "/pages/zhendi/zhendi-detail?code=".concat(this.data.actInfo.areaCode, "&lineId=").concat(this.data.actInfo.lineId)
      })
    },
    close: function() {
      this.setData({
        showAct: !1
      })
    },
    handleHtml: function(e) {
      n.wxParse("actHtml", "html", e.replaceAll("\n", "<br/>"), this, 5)
    }
  }
});