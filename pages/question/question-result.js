var e = require("../../api/area"),
a = require("../../utils/storage");
Page({
  data: {
    answerList: [{
      correct: "",
      error: ""
    }],
    correctNum: 0,
    score: 0,
    correctRate: 0,
    starLightWidth: 0,
    areaId: -1,
    lineId: -1,
    areaCode: "",
    postInfo: {
      uuid: "",
      url: ""
    },
    postShare: !1,
    postShareEntrance: !1
  },
  onLoad: function(e) {
    if (console.log("option"), this.setData({
      areaId: e.areaId,
      lineId: e.lineId,
      areaCode: e.areaCode
    }), e.postshare) this.setData({
      postShareEntrance: !0,
      postInfo: {
        uuid: e.uuid + "",
        url: ""
      },
      areaCode: e.code,
      postShare: !0
    });
    else {
      var t = a.get(a.QUESTION_RESULT);
      if (t) {
        this.setData({
          answerList: t
        });
        for (var o = 5,
        n = 5,
        i = 0,
        r = 0; r < t.length; r++) {
          t[r].error && (o--, n--)
        }
        for (var d = [140, 130, 152, 130, 143], s = 0; s < o; s++) i += d[s];
        var c = parseInt(o / t.length * 100 + "");
        this.setData({
          correctNum: o,
          score: n,
          correctRate: c,
          starLightWidth: i
        })
      } else wx.redirectTo({
        url: "./question?areaId=".concat(this.data.areaId, "&lineId=").concat(this.data.lineId)
      })
    }
  },
  postImgLoaded: function(e) {
    console.log("postInfo loaded", e.detail),
    this.setData({
      postInfo: e.detail
    })
  },
  closePostShare: function() {
    wx.redirectTo({
      url: "/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode, "&lineId=").concat(this.data.lineId)
    })
  },
  handleRetry: function() {
    wx.redirectTo({
      url: "./question?areaId=".concat(this.data.areaId, "&lineId=").concat(this.data.lineId, "&areaCode=").concat(this.data.areaCode)
    })
  },
  handleStop: function() {
    wx.redirectTo({
      url: "/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode, "&lineId=").concat(this.data.lineId, "&postcard=1")
    })
  },
  handleQuestionClick: function(e) {
    console.log(e.currentTarget.dataset.index),
    wx.navigateTo({
      url: "./question?mode=result&nowIndex=".concat(e.currentTarget.dataset.index)
    })
  },
  onReady: function() {},
  onShareAppMessage: function() {
    return {
      title: "来跟我一起打卡吧！",
      path: "/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode, "&lineId=").concat(this.data.lineId)
    }
  },
  onShareTimeline_bak: function() {
    return console.log("打卡了222"),
    this.data.postInfo.uuid ? ((0, e.sharePostImg)(this.data.areaId, null).then((function(e) {
      console.log("打卡了111"),
      wx.showModal({
        title: "恭喜您获得3个积分！",
        icon: "none"
      })
    })), {
      title: "我完成了阵地打卡！",
      query: "uuid=".concat(this.data.postInfo.uuid, "&postshare=1&code=").concat(this.data.areaCode, "&lineId=").concat(this.data.lineId)
    }) : {
      title: "暂不支持分享！"
    }
  }
});