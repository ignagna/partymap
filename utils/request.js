Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.uploadFile = exports.request = void 0;
var e = require("../@babel/runtime/helpers/objectSpread2"),
t = require("./storage"),
o = wx.getAccountInfoSync().miniProgram.envVersion;
console.log("当前环境：" + o);
var s = "http://192.168.111.67:11993/houjie-api";
"develop" == o ? (s = "http://192.168.111.67:11993/houjie-api", s = "https://houjiedaka.hiyun.site/houjie-api") : s = "https://houjiedaka.hiyun.site/houjie-api";
exports.request = function(o) {
  var r = t.get(t.USER_JWT_KEY);
  return r && (o.header = e(e({},
  o.header), {},
  {
    Authorization: "Bearer " + r
  })),
  o.timeout = 6e4,
  o.url && !o.url.startsWith("http") && (o.url = s + (o.url.startsWith("/") ? o.url: "/" + o.url)),
  new Promise((function(r, a) {
    wx.request(e(e({},
    o), {},
    {
      success: function(e) {
        console.log("req", e),
        200 !== e.statusCode && (wx.showToast({
          title: "请求失败[".concat(e.statusCode, "],请稍后重试！"),
          icon: "error"
        }), a("请求失败[".concat(e.statusCode, "],请稍后重试！"))),
        "200" == e.data.code ? (e.data && e.data.data && e.data.data.token && t.set(t.USER_JWT_KEY, e.data.data.token, 259200), r(e.data)) : "401" == e.data.code ? wx.login({
          success: function(e) {
            e.code ? (console.log("res.code", e.code), wx.request({
              url: s + "/user/token?code=" + e.code,
              method: "GET",
              success: function(e) {
                var o = e.data;
                console.log("login", o),
                o.data && o.data.userInfo ? (t.set(t.USER_INFO_KEY, o.data.userInfo, 259200), "P" == o.data.userInfo.orgStatus ? t.set(t.SHOW_RANK, !0) : t.set(t.SHOW_RANK, !1)) : wx.showToast({
                  title: "[5]登录失败，请重新进入小程序！",
                  icon: "none"
                })
              }
            })) : console.log("登录失败！" + e.errMsg)
          },
          fail: function() {
            wx.showToast({
              title: "未登录,请重新打开小程序！",
              icon: "none"
            }),
            console.log("未登录，尝试登录")
          },
          complete: function() {
            wx.hideLoading()
          }
        }) : (wx.showToast({
          title: e.data.msg || "操作失败，请稍后再试！",
          icon: "error"
        }), a(e.data.msg || "操作失败，请稍后再试！"))
      },
      fail: function(e) {
        console.error(e),
        a("请求失败[".concat(e.errMsg, "],请稍后重试！"))
      }
    }))
  }))
};
exports.uploadFile = function(o) {
  var r = t.get(t.USER_JWT_KEY);
  return r && (o.header = e(e({},
  o.header), {},
  {
    Authorization: "Bearer " + r
  })),
  o.timeout = 6e4,
  o.url && !o.url.startsWith("http") && (o.url = s + (o.url.startsWith("/") ? o.url: "/" + o.url)),
  new Promise((function(t, s) {
    wx.uploadFile(e(e({},
    o), {},
    {
      success: function(e) {
        console.log("res", e),
        200 !== e.statusCode && (wx.showToast({
          title: "上传失败[".concat(e.statusCode, "],请稍后重试！"),
          icon: "error"
        }), s("上传失败[".concat(e.statusCode, "],请稍后重试！")));
        var o = JSON.parse(e.data);
        console.log("res", o),
        "200" == o.code ? t(o) : "401" == o.code ? wx.showToast({
          title: "未登录,请重新打开小程序！",
          icon: "none"
        }) : (wx.showToast({
          title: o.msg || "上传失败，请稍后再试！",
          icon: "error"
        }), s(o.msg || "上传失败，请稍后再试！"))
      },
      fail: function(e) {
        console.error(e),
        s("上传失败[".concat(e.errMsg, "],请稍后重试！"))
      }
    }))
  }))
};