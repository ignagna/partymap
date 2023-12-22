var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
n = require("../../api/user");
Page({
  data: {
    lightCount: 0,
    medalList: [{
      name: "hscx",
      text: "红色初心践行者",
      light: !1,
      wear: !1,
      lightTime: null
    }]
  },
  handleMedalClick: function(e) {
    console.log(e.currentTarget.dataset);
    var t = e.currentTarget.dataset.item;
    if (!t.light) return console.log("暂未点亮"),
    void wx.showToast({
      title: "暂未获得此勋章！",
      icon: "none"
    });
    wx.navigateTo({
      url: "./medal-detail?item=" + encodeURIComponent(JSON.stringify(t))
    })
  },
  onLoad: function() {},
  _loadList: function() {
    var o = this;
    return t(e().mark((function t() {
      var a, i, r, l;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          return wx.showLoading({
            title:
            "加载中..."
          }),
          e.next = 3,
          (0, n.getUserMedal)();
        case 3:
          for (a = e.sent, i = a.data, console.log("medalList", i), r = 0, l = 0; l < i.length; l++) i[l].light && r++;
          o.setData({
            lightCount: r,
            medalList: i
          }),
          wx.hideLoading();
        case 10:
        case "end":
          return e.stop()
        }
      }), t)
    })))()
  },
  onShow: function() {
    this._loadList()
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});