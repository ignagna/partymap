var e = require("@babel/runtime/helpers/regeneratorRuntime"),
  n = require("@babel/runtime/helpers/asyncToGenerator"),
  o = require("./api/user"),
  t = require("./utils/storage");

function r() {
  return new Promise((function (e, n) {
    // wx.showLoading({
    //     title: "正在登录"
    //   }),
      wx.login({
        success: function (r) {
          r.code ? (console.log("res.code", r.code), (0, o.code2Token)(r.code).then((function (o) {
            if (console.log("login", o), o.data && o.data.userInfo) {
              if (t.set(t.USER_INFO_KEY, o.data.userInfo, 259200), "P" == o.data.userInfo.orgStatus ? t.set(t.SHOW_RANK, !0) : t.set(t.SHOW_RANK, !1), o.data.configs && 0 != o.data.configs.length)
                for (var r = o.data.configs,
                    a = 0; a < r.length; a++) {
                  var i = r[a];
                  t.set(t.CONFIG + i.key, i.val, 259200)
                }
              setTimeout((function () {
                  e(o.data)
                }), 500),
                wx.hideLoading()
            } else wx.showToast({
                title: "[2]登录失败，请重新进入小程序！",
                icon: "none"
              }),
              n("[2]登录失败，请重新进入小程序！")
          })).catch((function (e) {
            n(e.message)
          }))) : (console.log("登录失败！" + r.errMsg), n(r.errMsg))
        },
        fail: function () {
          wx.hideLoading()
        },
        complete: function () {}
      })
  }))
}
App({
  globalData: {
    login: r
  },
  onLaunch: function () {
    return n(e().mark((function n() {
      return e().wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2,
              r();
          case 2:
          case "end":
            return e.stop()
        }
      }), n)
    })))()
  }
});
