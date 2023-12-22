Page({
  data: {},
  computeDis: function() {
    var o = this;
    console.log("computeDis"),
    wx.getLocation({
      type: "gcj02",
      success: function(n) {
        var t = n.latitude,
        a = n.longitude;
        console.log("lat,lon", t, a);
        var e = o.getDistance(t, a, 22.66417, 114.002872);
        console.log("dis", e),
        wx.showToast({
          title: e + "m",
          icon: "none"
        })
      },
      fail: function(o) {
        console.log("getLocation err", o),
        wx.showToast({
          title: "定位失败，请稍后重试！",
          icon: "error"
        })
      }
    })
  },
  openLocation: function() {
    wx.openLocation({
      latitude: 22.66417,
      longitude: 114.002872,
      scale: 18
    })
  },
  getDistance: function(o, n, t, a) {
    var e = o * Math.PI / 180,
    i = t * Math.PI / 180,
    c = e - i,
    s = n * Math.PI / 180 - a * Math.PI / 180,
    u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(c / 2), 2) + Math.cos(e) * Math.cos(i) * Math.pow(Math.sin(s / 2), 2)));
    return u *= 6378.137,
    u = Math.round(1e5 * u) / 100
  },
  onLoad: function() {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});