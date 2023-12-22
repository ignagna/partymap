var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
e = require("../../@babel/runtime/helpers/asyncToGenerator"),
n = require("../../api/user");
Page({
  data: {
    showRule: !1,
    activityInfo: {}
  },
  closeRule: function() {
    this.setData({
      showRule: !1
    })
  },
  showRule: function() {
    this.setData({
      showRule: !0
    })
  },
  _loadActivityInfo: function() {
    var o = this;
    return e(t().mark((function e() {
      var a, i;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          // wx.showLoading({
          //   title:
          //   "加载中..."
          // }),
          a = (0, n.getActivityInfo)(),
          i = a.data,
          o.setData({
            activityInfo: i
          }),
          wx.hideLoading();
        case 4:
        case "end":
          return t.stop()
        }
      }), e)
    })))()
  },
  onLoad: function() {
    this._loadActivityInfo()
  },
  onReady: function() {},
  onShow: function() {
    "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      active: "zhendi"
    }),
    this.selectComponent(".my-map")._loadLightArea()
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});