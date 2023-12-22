var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
r = require("../../@babel/runtime/helpers/asyncToGenerator"),
t = require("../../api/user"),
n = require("../../utils/storage");
Component({
  properties: {
    from: {
      type: String,
      value: "detail"
    }
  },
  data: {
    showIdentitySelector: !0,
    showDangyuantypeSelector: !1
  },
  methods: {
    handleSelect: function(a) {
      var o = this;
      return r(e().mark((function r() {
        var s, i, u;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            return s = a.currentTarget.dataset.type,
            // wx.showLoading({
            //   title: "加载中..."
            // }),
           1,
            e.prev = 2,
            e.next = 5,
            wx.getUserProfile({
              desc: "用于完善会员资料"
            });
          case 5:
            if (i = e.sent, console.log(i.userInfo), "微信用户" != i.userInfo.nickName) {
              e.next = 11;
              break
            }
            o._toTrggerEvent(s),
            e.next = 18;
            break;
          case 11:
            return n.set(n.WX_USER_INFO, i.userInfo),
            e.next = 14,
            (0, t.updateUserInfo)({
              userType: "guest" == s ? "G": "houjie" == s ? "D": "O",
              nickname: i.userInfo.nickName,
              avatar: i.userInfo.avatarUrl
            });
          case 14:
            (u = e.sent).data && n.set(n.USER_INFO_KEY, u.data),
            "houjie" != s && "user" != o.data.from || o._toTrggerEvent(s),
            o.triggerEvent("selected", s);
          case 18:
            e.next = 25;
            break;
          case 20:
            e.prev = 20,
            e.t0 = e.
            catch(2),
            console.error(e.t0),
            wx.showToast({
              title: "获取身份信息失败",
              icon: "none"
            }),
            o._toTrggerEvent(s);
          case 25:
            return e.prev = 25,
            wx.hideLoading(),
            e.finish(25);
          case 28:
          case "end":
            return e.stop()
          }
        }), r, null, [[2, 20, 25, 28]])
      })))()
    },
    _toTrggerEvent: function(e) {
      console.log("_toTrggerEvent", e),
      this.triggerEvent("selected", e),
      wx.navigateTo({
        url: "/pages/user/user-login?type=" + e + "&from=" + this.data.from
      })
    },
    nothing: function() {}
  }
});