var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
o = require("../../api/area");
Component({
  properties: {
    lineId: {
      type: Number,
      value: -1
    },
    areaCode: {
      type: String,
      value: ""
    },
    uuid: {
      type: String,
      value: ""
    },
    showShareTip: {
      type: Boolean,
      value: !1
    },
    noCancel: {
      type: Boolean,
      value: !1
    },
    zhendi: {
      type: Boolean,
      value: !1
    },
    nextPage: {
      type: String,
      value: ""
    }
  },
  data: {
    postUrl: "",
    uuid: "",
    showPyqTip: !1
  },
  lifetimes: {
    ready: function() {
      var a = this;
      return t(e().mark((function t() {
        var n;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            if (wx.showLoading({
              title:
              "生成中..."
            }), "" == a.data.uuid) {
              e.next = 7;
              break
            }
            return e.next = 4,
            (0, o.getPostPicByUUID)(a.data.uuid);
          case 4:
            n = e.sent,
            e.next = 10;
            break;
          case 7:
            return e.next = 9,
            (0, o.getPostPic)(a.data.lineId, a.data.areaCode);
          case 9:
            n = e.sent;
          case 10:
            n = n.data,
            console.log("postpic", n),
            a.setData({
              postUrl: n.url,
              uuid: n.uuid
            }),
            a.triggerEvent("loaded", n),
            wx.hideLoading();
          case 15:
          case "end":
            return e.stop()
          }
        }), t)
      })))()
    }
  },
  methods: {
    nothing: function() {},
    shareFirend: function() {
      wx.downloadFile({
        url: this.data.postUrl,
        success: function(e) {
          wx.showShareImageMenu({
            path: e.tempFilePath
          })
        },
        fail: function(e) {
          wx.showModal({
            title: "提示",
            content: e.errMsg
          })
        }
      })
    },
    downloadImg: function() {
      wx.showLoading({
        title: "加载中..."
      }),
      wx.downloadFile({
        url: this.data.postUrl,
        success: function(e) {
          wx.saveImageToPhotosAlbum({
            filePath: e.tempFilePath,
            success: function(e) {
              wx.hideLoading(),
              wx.showToast({
                title: "保存成功"
              })
            },
            fail: function(e) {
              "saveImageToPhotosAlbum:fail:auth denied" !== e.errMsg && "saveImageToPhotosAlbum:fail auth deny" !== e.errMsg && "saveImageToPhotosAlbum:fail authorize no response" !== e.errMsg || wx.showModal({
                title: "提示",
                content: "需要您授权保存相册",
                modalType: !1,
                success: function(e) {
                  wx.openSetting({
                    success: function(e) {
                      console.log("settingdata", e),
                      e.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                        title: "提示",
                        content: "获取权限成功,再次点击图片即可保存",
                        modalType: !1
                      }) : wx.showModal({
                        title: "提示",
                        content: "获取权限失败，将无法保存到相册哦~",
                        modalType: !1
                      })
                    },
                    fail: function(e) {
                      console.log("failData", e)
                    },
                    complete: function(e) {
                      console.log("finishData", e)
                    }
                  })
                }
              })
            },
            complete: function(e) {
              wx.hideLoading()
            }
          })
        }
      })
    },
    showSharePyqTip: function() {
      var e = getCurrentPages(),
      t = e[e.length - 1];
      if (console.log("route", t.route), this.data.zhendi && !t.route.includes("zhendi-detail")) return console.log("要跳转"),
      void wx.redirectTo({
        url: "/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode, "&lineId=").concat(this.data.lineId, "&postcard=1&uuid=").concat(this.data.uuid)
      });
      console.log("本页面"),
      this.setData({
        showPyqTip: !0,
        showShareTip: !0
      })
    },
    closeShareTip: function() {
      this.setData({
        showPyqTip: !1,
        showShareTip: !1
      })
    },
    handleClose: function() {
      this.data.noCancel ? wx.switchTab({
        url: "/miniprogram/pages/zhendi/zhendi"
      }) : this.triggerEvent("close")
    }
  }
});