var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
e = require("../../@babel/runtime/helpers/asyncToGenerator"),
n = require("../../api/area");
Page({
  data: {
    zhutiList: [{
      "id": 1,
      "title": "路线五：红色党史教育",
      "name": "路线五：红色党史教育",
      "mapurl": "https://djditu.oss-cn-qingdao.aliyuncs.com/line/luxian5.png",
      "desc": "1.乘车前往沣水镇红色东高革命教育基地。早8:30从分局乘车出发，前往沣水镇红色东高革命教育基地，大约9:10到达。2.参观沣水镇红色东高革命教育基地。9:30开始参观，大约10:10结束。",
      "tips": "城市发展领跑者",
      "code": "zlfz",
      "extraScore": 21,
      "totalArea": 7,
      "progress": 5,
      "total": 7
  }]
  },
  _loadList: function() {
    var a = this;
    return e(t().mark((function e() {
      var r, i;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          // return wx.showLoading({
          //   title:
          //   "加载中..."
          // }),
          return 1,
          t.next = 3,
          (0, n.getLineList)();
        case 3:
          r = t.sent,
          i = r.data,
          console.log("lineInfoList", i),
          a.setData({
            zhutiList: i
          }),
          wx.hideLoading();
        case 8:
        case "end":
          return t.stop()
        }
      }), e)
    })))()
  },
  handleItemClick: function(t) {
    console.log("handleItemClick", t.currentTarget.dataset),
    wx.navigateTo({
      url: "./zhuti-detail?id=" + t.currentTarget.dataset.ztid
    })
  },
  handleAwardTap: function(n) {
    var a = this;
    return e(t().mark((function e() {
      var r, i;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          return console.log("handleItemClick", n.currentTarget.dataset),
          t.next = 3,
          a._loadList();
        case 3:
          if (0 != (r = a.data.zhutiList.filter((function(t) {
            return t.id == n.currentTarget.dataset.ztid
          }))).length) {
            t.next = 7;
            break
          }
          return wx.showToast({
            title: "操作失败，无此线路：" + n.currentTarget.dataset.ztid,
            icon: "none"
          }),
          t.abrupt("return");
        case 7:
          (i = r[0]).total == i.progress ? wx.showToast({
            title: "勋章已发放，请前往个人中心-勋章墙佩戴！",
            icon: "none",
            duration: 3e3
          }) : wx.showToast({
            title: "失败: 未完成此线路打卡",
            icon: "none"
          });
        case 9:
        case "end":
          return t.stop()
        }
      }), e)
    })))()
  },
  onLoad: function() {},
  onReady: function() {},
  onShow: function() {
    "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      active: "zhuti"
    }),
    this._loadList()
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {
    var n = this;
    return e(t().mark((function e() {
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          return t.next = 2,
          n._loadList();
        case 2:
          wx.stopPullDownRefresh();
        case 3:
        case "end":
          return t.stop()
        }
      }), e)
    })))()
  },
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});