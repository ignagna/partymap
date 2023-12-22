var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
a = require("../../@babel/runtime/helpers/objectSpread2"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
n = require("../../api/user");
Page({
  data: {
    medalInfo: {
      name: "whhm",
      text: "文化惠民引领者",
      light: !0,
      wear: !0,
      lightTime: "2022-10-02 19:36:39"
    }
  },
  onLoad: function(e) {
    e.item || (wx.showToast({
      title: "非法入口",
      icon: "error"
    }), wx.navigateBack());
    var a = JSON.parse(decodeURIComponent(e.item));
    a.lightTime = a.lightTime.split(" ")[0],
    this.setData({
      medalInfo: a
    })
  },
  updateUserMedalWear: function() {
    var r = this;
    return t(e().mark((function t() {
      var o;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          return wx.showLoading({
            title:
            "操作中..."
          }),
          o = r.data.medalInfo.wear ? "REMOVE": "WEAR",
          e.prev = 2,
          e.next = 5,
          (0, n.updateUserMedalWear)(o, r.data.medalInfo.name);
        case 5:
          wx.hideLoading(),
          r.setData({
            medalInfo: a(a({},
            r.data.medalInfo), {},
            {
              wear: !r.data.medalInfo.wear
            })
          }),
          wx.showToast({
            title: "操作成功",
            icon: "success"
          }),
          e.next = 12;
          break;
        case 10:
          e.prev = 10,
          e.t0 = e.
          catch(2);
        case 12:
        case "end":
          return e.stop()
        }
      }), t, null, [[2, 10]])
    })))()
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});