var e = require("../../@babel/runtime/helpers/objectSpread2"),
t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
a = require("../../@babel/runtime/helpers/defineProperty"),
r = require("../../@babel/runtime/helpers/asyncToGenerator"),
n = require("../../api/file"),
o = require("../../api/user"),
i = "https://file.hiyun.site/pxg-file/houjie/xcx/default-user-logo.png",
s = require("../../utils/storage");
Page({
  data: {
    userInfo: {
      avatar: i,
      nickname: "",
      realName: "",
      phone: "",
      dangOrgId: ""
    },
    dangOrgName: "",
    type: "guest",
    from: "detail"
  },
  onChooseAvatar: function(e) {
    var o = this;
    return r(t().mark((function r() {
      var i, s, u;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          return wx.showLoading({
            title:
            "加载中"
          }),
          i = e.detail.avatarUrl,
          t.prev = 2,
          t.next = 5,
          (0, n.uploadToWx)(i);
        case 5:
          s = t.sent,
          u = s.data,
          console.log("fileUrl", u),
          o.setData(a({},
          "userInfo.avatar", u)),
          t.next = 13;
          break;
        case 11:
          t.prev = 11,
          t.t0 = t.
          catch(2);
        case 13:
          return t.prev = 13,
          wx.hideLoading(),
          t.finish(13);
        case 16:
        case "end":
          return t.stop()
        }
      }), r, null, [[2, 11, 13, 16]])
    })))()
  },
  handleNicknameInput: function(e) {
    this.setData(a({},
    "userInfo.nickname", e.detail.value))
  },
  handleRealnameInput: function(e) {
    this.setData(a({},
    "userInfo.realName", e.detail.value))
  },
  handlePhoneInput: function(e) {
    this.setData(a({},
    "userInfo.phone", e.detail.value))
  },
  handleSelectOrg: function() {
    console.log("handleSelectOrg"),
    wx.navigateTo({
      url: "/pages/org/org-selector?key=orgTempSelect"
    })
  },
  handleDakaBtnClick: function() {
    var a = this;
    return r(t().mark((function r() {
      var n, u, l;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          if (n = "", n = "guest" == a.data.type ? "G": "houjie" == a.data.type ? "D": "O", (u = a.data.userInfo).avatar && u.avatar != i) {
            t.next = 6;
            break
          }
          return wx.showToast({
            title: "头像不能为空",
            icon: "error"
          }),
          t.abrupt("return");
        case 6:
          if ("houjie" != a.data.type && "other" != a.data.type) {
            t.next = 19;
            break
          }
          if (u.nickname) {
            t.next = 10;
            break
          }
          return wx.showToast({
            title: "昵称不能为空",
            icon: "error"
          }),
          t.abrupt("return");
        case 10:
          if (u.realName) {
            t.next = 13;
            break
          }
          return wx.showToast({
            title: "姓名不能为空",
            icon: "error"
          }),
          t.abrupt("return");
        case 13:
          if (u.phone) {
            t.next = 16;
            break
          }
          return wx.showToast({
            title: "电话不能为空",
            icon: "error"
          }),
          t.abrupt("return");
        case 16:
          if ("houjie" != a.data.type || u.dangOrgId) {
            t.next = 19;
            break
          }
          return wx.showToast({
            title: "所属党组织不能为空",
            icon: "error"
          }),
          t.abrupt("return");
        case 19:
          // return wx.showLoading({
          //   title:
          //   "加载中..."
          // }),
          return 1,
          t.prev = 20,
          t.next = 23,
          (0, o.updateUserInfo)(e(e({},
          u), {},
          {
            userType: n
          }));
        case 23:
          (l = t.sent).data && s.set(s.USER_INFO_KEY, l.data),
          "user" == a.data.from ? (wx.showToast({
            title: "修改成功",
            icon: "success"
          }), wx.switchTab({
            url: "/pages/user/info"
          })) : wx.redirectTo({
            url: "/pages/question/question"
          }),
          t.next = 30;
          break;
        case 28:
          t.prev = 28,
          t.t0 = t.
          catch(20);
        case 30:
          return t.prev = 30,
          wx.hideLoading(),
          t.finish(30);
        case 33:
        case "end":
          return t.stop()
        }
      }), r, null, [[20, 28, 30, 33]])
    })))()
  },
  onLoad: function(e) {
    var n = this;
    return r(t().mark((function r() {
      var i, u, l, c, p;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          if (console.log("option", e), e.type && ("user" == e.from ? wx.setNavigationBarTitle({
            title: "我的资料"
          }) : ("guest" == e.type && wx.setNavigationBarTitle({
            title: "游客登录"
          }), "other" == e.type ? wx.setNavigationBarTitle({
            title: "非淄博监管分局党员登录"
          }) : wx.setNavigationBarTitle({
            title: "党员登录"
          })), n.setData({
            type: e.type,
            from: e.from || "detail"
          })), (i = s.get(s.WX_USER_INFO)) && n.setData((a(u = {},
          "userInfo.nickname", i.nickName), a(u, "userInfo.avatar", i.avatarUrl), u)), !e.refresh) {
            t.next = 12;
            break
          }
          return t.next = 7,
          (0, o.getUserInfo)();
        case 7:
          l = t.sent,
          c = l.data,
          n.setData({
            userInfo: c,
            dangOrgName: c.dangOrg
          }),
          t.next = 14;
          break;
        case 12:
          (p = s.get(s.USER_INFO_KEY)) && n.setData({
            userInfo: p,
            dangOrgName: p.dangOrg
          });
        case 14:
        case "end":
          return t.stop()
        }
      }), r)
    })))()
  },
  onShow: function() {
    console.log("onShow");
    var e, t = s.get("orgTempSelect"); (console.log("orgSelected", t), t) && (this.setData((a(e = {},
    "userInfo.dangOrgId", t.id), a(e, "dangOrgName", t.title), e)), s.remove("orgTempSelect"))
  },
  onShareAppMessage: function() {}
});