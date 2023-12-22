var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
n = require("../../api/user"),
a = require("../../utils/storage");
Page({
  data: {
    titleTop: 44,
    menuHeight: 40,
    textAlign: "center",
    pixelRatio: 2,
    showIdentitySelector: !1,
    userInfo: {
      id: -1,
      openid: "",
      nickname: "",
      avatar: "",
      realName: "",
      phone: "",
      dangOrgId: "",
      userType: "",
      status: "",
      createTime: "",
      infoStatus: "",
      orgStatus: "",
      score: 0,
      dangOrg: "",
      userMedal: []
    }
  },
  onLoad: function() {
    this._setNaviStyle()
  },
  onShow: function() {
    this._loadUserInfo(),
    this.setData({
      showIdentitySelector: !1
    })
  },
  handlePannelItemClick: function(e) {
    var t = e.currentTarget.dataset.action;
    if (console.log("点击：" + t), "profile" == t) {
      var n = this.data.userInfo;
      if (!n || "C" != n.infoStatus) return void this.setData({
        showIdentitySelector: !0
      });
      wx.navigateTo({
        url: "/pages/user/user-login?type=" + ("D" == n.userType ? "houjie": "O" == n.userType ? "other": "guest") + "&from=user"
      })
    } else "rank" == t ? wx.navigateTo({
      url: "/pages/rank/rank"
    }) : "medal" == t ? wx.navigateTo({
      url: "/pages/user/medal"
    }) : "rule" == t ? wx.navigateTo({
      url: "/pages/game-rule/game-rule"
    }) : "bus" == t && wx.navigateTo({
      url: "/pages/bus/bus?line=-1"
    })
  },
  _loadUserInfo: function() {
    var r = this;
    return t(e().mark((function t() {
      var o, s;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          // return wx.showLoading({
          //   title:
          //   "加载中..."
          // }),
          return 1,
          e.next = 3,
          (0, n.getUserInfo)();
        case 3:
          o = e.sent,
          s = o.data,
          r.setData({
            userInfo: s
          }),
          console.log("userInfo", s),
          a.set(a.USER_INFO_KEY, s),
          wx.hideLoading();
        case 9:
        case "end":
          return e.stop()
        }
      }), t)
    })))()
  },
  _setNaviStyle: function() {
    var e = this;
    wx.getSystemInfo({
      success: function(t) {
        var n = t,
        a = wx.getMenuButtonBoundingClientRect(),
        r = n.statusBarHeight,
        o = 2 * (a.top - n.statusBarHeight) + a.height;
        console.log(n),
        console.log(r),
        console.log(o),
        e.setData({
          titleTop: r,
          menuHeight: o,
          textAlign: "android" == n.platform ? "left": "center",
          pixelRatio: n.pixelRatio
        })
      }
    })
  },
  handleIdentitySelected: function() {
    this.setData({
      showIdentitySelector: !1
    })
  },
  onPullDownRefresh: function() {
    var n = this;
    return t(e().mark((function t() {
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          return e.next = 2,
          n._loadUserInfo();
        case 2:
          wx.stopPullDownRefresh();
        case 3:
        case "end":
          return e.stop()
        }
      }), t)
    })))()
  },
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});