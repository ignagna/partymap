var t = require("../../utils/util"),
e = null,
a = null,
s = 1,
o = 10,
i = [0];
Page({
  data: {
    posterDatas: {
      width: 750,
      height: 1045,
      pic: "",
      buttonType: 1,
      show: !1,
      success: !1
    },
    postImg: ""
  },
  onReady: function() {
    o = 10,
    this.initCavans()
  },
  onShow: function() {
    o = 10,
    console.log("onShow this.data.postImg", this.data.postImg),
    this.data.postImg || this.onBuildPosterSaveAlbum()
  },
  initCavans: function() {
    console.log("initCavans");
    var t = this.data.posterDatas;
    wx.createSelectorQuery().select("#firstCanvas").fields({
      node: !0,
      size: !0
    }).exec((function(o) {
      console.log("res", o),
      e = o[0].node,
      a = e.getContext("2d"),
      s = wx.getSystemInfoSync().pixelRatio,
      e.width = t.width * s,
      e.height = t.height * s,
      a.scale(s, s),
      console.log("海报初始化 成功！", e, a)
    }))
  },
  onBuildPosterSaveAlbum: function() {
    var s = this,
    n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
    h = this.data.posterDatas;
    h.show = !0,
    this.setData({
      posterDatas: h
    }),
    n && wx.showLoading({
      title: "海报生成中",
      mask: !0
    });
    var l = new Promise((function(t, a) {
      var s = e.createImage();
      s.src = "../../assets/images/share-bg.png",
      s.onload = function() {
        t(s)
      }
    })),
    r = new Promise((function(t, a) {
      var s = e.createImage();
      s.src = "../../assets/images/xcxqr.png",
      s.onload = function() {
        t(s)
      }
    }));
    Promise.all([l, r]).then((function(o) {
      a.fillStyle = "#ffffff",
      a.fillRect(0, 0, e.width, e.height),
      a.drawImage(o[0], 0, 0, h.width, h.height),
      a.drawImage(o[1], h.width - 200, h.height - 200, 180, 180),
      a.font = "bold 30px Arial",
      a.fillStyle = "#fff",
      a.textAlign = "left",
      a.fillText("恭喜XXX已成功完成打卡！", 20, 50),
      a.font = "bold 30px Arial",
      a.fillStyle = "#fff",
      a.textAlign = "left",
      a.fillText("完成时间" + (0, t.formatTime)(new Date), 20, h.height - 100),
      n && wx.hideLoading(),
      h.success = !0,
      s.setData({
        posterDatas: h
      })
    })).
    catch((function(t) {
      i[o] = setInterval((function() { (--o <= 0 || s.data.posterDatas.success) && (i.forEach((function(t) {
          return t && clearInterval(t)
        })), o = -99, wx.hideLoading()),
        console.log("重试" + o),
        s.onBuildPosterSaveAlbum(!1)
      }), 500),
      o <= 0 && (i.forEach((function(t) {
        return t && clearInterval(t)
      })), wx.hideLoading(), wx.showToast({
        icon: "none",
        title: "资源正在加载中,请再试一次."
      }), h.show = !1, s.setData({
        posterDatas: h
      }))
    }))
  },
  onCanvasBuildImges: function() {
    var t = this,
    a = this.data.posterDatas;
    wx.canvasToTempFilePath({
      canvas: e,
      width: a.width,
      height: a.height,
      destWidth: 3 * a.width,
      destHeight: 3 * a.height,
      success: function(e) {
        a.pic = e.tempFilePath,
        t.setData({
          posterDatas: a
        }),
        t.onDownloadImges()
      },
      fail: function() {
        wx.hideLoading(),
        wx.showToast({
          icon: "none",
          title: "保存失败,请稍后再试."
        })
      }
    })
  },
  onDownloadImges: function() {
    var t = this;
    wx.showLoading({
      title: "保存中",
      mask: !0
    });
    var e = this.data.posterDatas;
    e.pic ? wx.saveImageToPhotosAlbum({
      filePath: e.pic,
      success: function(a) {
        wx.hideLoading(),
        wx.showToast({
          icon: "none",
          title: "已保存到相册，快去分享吧"
        }),
        e.buttonType = 2,
        t.setData({
          posterDatas: e
        })
      },
      fail: function(a) {
        wx.hideLoading(),
        wx.showToast({
          icon: "none",
          title: "进入设置页，开启“保存到相册”"
        }),
        e.buttonType = 3,
        t.setData({
          posterDatas: e
        })
      }
    }) : this.onCanvasBuildImges()
  },
  onBindOpenSetting: function() {
    var t = this.data.posterDatas;
    t.buttonType = 1,
    this.setData({
      posterDatas: t
    })
  },
  onIsCanvas: function() {
    var t = this.data.posterDatas;
    t.buttonType = 1,
    t.show = !1,
    this.setData({
      posterDatas: t
    })
  },
  preventTouchMove: function() {
    console.log("preventTouchMove"),
    this.data.posterDatas.show && (this.data.posterDatas.show = !1, this.setData({
      posterDatas: this.data.posterDatas
    }))
  },
  onShareAppMessage: function() {
    return {
      title: "自定义转发标题",
      path: "/page/test/test?id=123",
      promise: new Promise((function(t) {
        setTimeout((function() {
          t({
            title: "自定义转发标题"
          })
        }), 2e3)
      }))
    }
  },
  onShareTimeline: function() {
    return {
      title: "朋友圈自定义转发标题",
      query: "id=456"
    }
  }
});