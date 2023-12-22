var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
a = require("../../@babel/runtime/helpers/asyncToGenerator"),
t = require("../../api/user"),
n = require("../../utils/storage"),
r = n.get(n.USER_INFO_KEY);
Page({
  data: {
    active: "all",
    list: [],
    mine: {
      avatar: "",
      lastScoreTime: null,
      medalCount: 0,
      nickname: "",
      orgName: "暂未上榜",
      rank: "/",
      score: 0,
      uid: -1
    }
  },
  onLoad: function() {
    this._loadRankList()
  },
  _loadRankList: function() {
    var i = this;
    return a(e().mark((function a() {
      var o, s, c, u, l;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          // return wx.showLoading({
          //   title:
          //   "加载中..."
          // }),
          return 1,
          e.prev = 1,
          e.next = 4,
          (0, t.getRankList)(i.data.active);
        case 4:
          if (o = e.sent, s = o.data, i.setData({
            list: s
          }), c = !1, console.log("userInfo", r), r || (r = n.get(n.USER_INFO_KEY)), e.prev = 10, !s) {
            e.next = 22;
            break
          }
          u = 0;
        case 13:
          if (! (u < s.length)) {
            e.next = 22;
            break
          }
          if ((l = s[u]).uid != r.id) {
            e.next = 19;
            break
          }
          return i.setData({
            mine: l
          }),
          c = !0,
          e.abrupt("break", 22);
        case 19:
          u++,
          e.next = 13;
          break;
        case 22:
          c || i.setData({
            mine: {
              avatar: r.avatar,
              lastScoreTime: null,
              medalCount: r.medalCount,
              nickname: r.nickname,
              orgName: "暂未上榜",
              rank: "/",
              score: r.score,
              uid: r.id
            }
          }),
          e.next = 29;
          break;
        case 25:
          e.prev = 25,
          e.t0 = e.
          catch(10),
          console.log("userinfo err", e.t0),
          i.setData({
            mine: {
              avatar: "",
              lastScoreTime: null,
              medalCount: 0,
              nickname: "暂未上榜",
              orgName: "暂未上榜",
              rank: "/",
              score: 0,
              uid: -1
            }
          });
        case 29:
          wx.hideLoading(),
          e.next = 35;
          break;
        case 32:
          e.prev = 32,
          e.t1 = e.
          catch(1),
          console.error(e.t1);
        case 35:
          return e.prev = 35,
          e.finish(35);
        case 37:
        case "end":
          return e.stop()
        }
      }), a, null, [[1, 32, 35, 37], [10, 25]])
    })))()
  },
  handleTabbarClick: function(e) {
    var a = this;
    e.currentTarget.dataset.name && e.currentTarget.dataset.name != this.data.active && this.setData({
      active: e.currentTarget.dataset.name
    },
    (function() {
      a._loadRankList()
    }))
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});