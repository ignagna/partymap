Component({
  properties: {
    areaid: {
      type: Number,
      value: -1
    },
    lineid: {
      type: Number,
      value: -1
    },
    areaCode: {
      type: String,
      value: ""
    }
  },
  data: {},
  lifetimes: {
    ready: function() { - 1 == this.properties.areaid && wx.showToast({
        title: "未设置地点ID",
        icon: "error"
      }),
      -1 == this.properties.lineid && wx.showToast({
        title: "未设置线路ID",
        icon: "error"
      })
    }
  },
  methods: {
    nothing: function() {},
    handleClose: function() {
      this.triggerEvent("close")
    },
    toQuestion: function() {
      wx.redirectTo({
        url: "/pages/question/question?areaId=" + this.properties.areaid + "&lineId=" + this.properties.lineid + "&areaCode=" + this.properties.areaCode
      })
    }
  }
});