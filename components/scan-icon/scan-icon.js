Component({
  properties: {},
  data: {},
  methods: {
    handleClick: function() {
      wx.scanCode({
        success: function(e) {
          console.log(e),
          "QR_CODE" == e.scanType ? e.result.includes("/hjqr.html#/") ? (console.log("阵地二维码", "/pages/zhendi/zhendi-detail?q=".concat(encodeURIComponent(e.result), "&scancode_time=").concat(parseInt((new Date).getTime() / 1e3 + ""))), wx.navigateTo({
            url: "/pages/zhendi/zhendi-detail?q=".concat(encodeURIComponent(e.result), "&scancode_time=").concat(parseInt((new Date).getTime() / 1e3 + ""))
          })) : wx.showToast({
            title: "暂不支持扫码此二维码~",
            icon: "none"
          }) : "WX_CODE" == e.scanType && (console.log("res.path", e.path), e.path && (wx.showLoading({
            title: "正在跳转..."
          }), wx.navigateTo({
            url: "/" + e.path
          })))
        }
      })
    }
  }
});