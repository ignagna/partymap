var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
t = require("../../@babel/runtime/helpers/asyncToGenerator"),
a = require("../../api/question"),
n = require("../../api/area"),
r = require("../../utils/storage"),
i = [];
Page({
  data: {
    questionList: [{
      answer: "",
      id: -1,
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      question: ""
    }],
    answerList: [{
      correct: "",
      error: "",
      selected: ""
    }],
    nowIndex: 0,
    mode: "answer",
    areaId: -1,
    areaCode: "",
    lineId: -1,
    channel: ""
  },
  onLoad: function(e) {
    if (console.log("option", e), e.mode && "result" == e.mode) {
      var t = r.get(r.QUESTION_LIST),
      a = r.get(r.QUESTION_RESULT);
      if (!t || !a) return void wx.showToast({
        title: "加载异常，请重新进入！",
        icon: "error"
      });
      this.setData({
        mode: e.mode,
        questionList: t,
        answerList: a,
        nowIndex: parseInt(e.nowIndex)
      })
    } else {
      if (!e.areaId || -1 == e.areaId || -1 == e.lineId) return wx.showToast({
        title: "非法入口",
        icon: "error"
      }),
      void wx.navigateBack();
      this.setData({
        areaId: e.areaId,
        lineId: e.lineId,
        areaCode: e.areaCode
      }),
      r.remove(r.QUESTION_LIST),
      r.remove(r.QUESTION_RESULT),
      this._loadList()
    }
  },
  handleOptionClick: function(e) {
    if ("result" != this.data.mode) {
      console.log("e", e.currentTarget.dataset.option);
      var t = e.currentTarget.dataset.option,
      a = this.data.questionList[this.data.nowIndex].answer;
      t == a ? (this.data.answerList[this.data.nowIndex] = {
        correct: a,
        error: "",
        selected: t
      },
      this.setData({
        answerList: this.data.answerList
      })) : (this.data.answerList[this.data.nowIndex] = {
        correct: a,
        error: t,
        selected: t
      },
      this.setData({
        answerList: this.data.answerList
      }))
    }
  },
  handleNext: function() {
    this.data.nowIndex < 4 && this.setData({
      nowIndex: this.data.nowIndex + 1
    })
  },
  handlePrev: function() {
    this.data.nowIndex > 0 && this.setData({
      nowIndex: this.data.nowIndex - 1
    })
  },
  handleStop: function() {
    var a = this;
    return t(e().mark((function t() {
      var i, s;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          for (r.set(r.QUESTION_LIST, a.data.questionList), r.set(r.QUESTION_RESULT, a.data.answerList), i = a.data.questionList.length, s = 0; s < a.data.answerList.length; s++) a.data.answerList[s].error && i--;
          return wx.showLoading({
            title: "正在阅卷..."
          }),
          e.next = 7,
          (0, n.addQuestionSign)(a.data.areaId, i, a.data.channel);
        case 7:
          wx.hideLoading(),
          wx.redirectTo({
            url: "./question-result?areaId=".concat(a.data.areaId, "&lineId=").concat(a.data.lineId, "&areaCode=").concat(a.data.areaCode)
          });
        case 9:
        case "end":
          return e.stop()
        }
      }), t)
    })))()
  },
  _loadList: function() {
    var n = this;
    return t(e().mark((function t() {
      var r, s, o, d;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
        case 0:
          return wx.showLoading({
            title:
            "加载中..."
          }),
          e.prev = 1,
          e.next = 4,
          (0, a.getQuestionList)(n.data.lineId, 5, i);
        case 4:
          for (r = e.sent, s = r.data, i = [], o = 0; o < s.length; o++) d = s[o],
          i.push(d.id);
          n.setData({
            questionList: s,
            answerList: []
          }),
          e.next = 13;
          break;
        case 11:
          e.prev = 11,
          e.t0 = e.
          catch(1);
        case 13:
          return e.prev = 13,
          wx.hideLoading(),
          e.finish(13);
        case 16:
        case "end":
          return e.stop()
        }
      }), t, null, [[1, 11, 13, 16]])
    })))()
  },
  onReady: function() {},
  onShow: function() {}
});