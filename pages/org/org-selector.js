var t = require("../../api/org"),
e = [],
a = "orgTempSelect",
o = require("../../utils/storage");
Page({
  data: {
    showList: [],
    keyWord: "",
    step: 1,
    noHoujie: {
      id: 999,
      title: "本人党组织关系不属于淄博监管分局镇"
    }
  },
  onLoad: function(o) {
    var i = this;
    o.key && (a = o.key),
    (0, t.getOrgList)().then((function(t) {
      console.log("res", t),
      (e = t.data).sort((function(t, e) {
        return e.sort - t.sort
      })),
      i.setData({
        showList: e
      })
    }))
  },
  handleKeywordInput: function(t) {
    var a = t.detail.value;
    console.log("allList", e),
    this.setData({
      keyWord: t.detail.value,
      showList: e.filter((function(t) {
        return - 1 !== t.title.indexOf(a)
      }))
    })
  },
  handleItemClick: function(t) {
    console.log(t.currentTarget.dataset.item),
    o.set(a, t.currentTarget.dataset.item),
    wx.navigateBack()
  },
  toStep2: function() {
    this.setData({
      step: 2
    })
  }
});