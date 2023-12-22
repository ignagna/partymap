Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.set = exports.remove = exports.get = exports.WX_USER_INFO = exports.USER_JWT_KEY = exports.USER_INFO_KEY = exports.SIGN_DATA = exports.SHOW_RANK = exports.QUESTION_RESULT = exports.QUESTION_LIST = exports.LINE_SHARE_TIP_CLOSE = exports.CONFIG = exports.CHANNEL = void 0;
exports.get = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
  r = wx.getStorageSync("S:" + e);
  if (!r) return t;
  var o = JSON.parse(r);
  if (o && o.expireIn) {
    if ( - 1 == o.expireIn || o.expireIn > parseInt((new Date).getTime() / 1e3 + "")) return JSON.parse(o.val);
    wx.removeStorageSync("S:" + e)
  }
  return t
};
exports.set = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1; - 1 != r && (r = parseInt((new Date).getTime() / 1e3 + "") + r),
  wx.setStorageSync("S:" + e, JSON.stringify({
    val: JSON.stringify(t),
    expireIn: r
  }))
};
exports.remove = function(e) {
  wx.removeStorageSync("S:" + e)
};
exports.USER_INFO_KEY = "userInfo";
exports.USER_JWT_KEY = "usertoken";
exports.SHOW_RANK = "showRank";
exports.WX_USER_INFO = "wxUserInfo";
exports.QUESTION_LIST = "questionList";
exports.QUESTION_RESULT = "questionResult";
exports.CHANNEL = "channel";
exports.SIGN_DATA = "signdata:";
exports.LINE_SHARE_TIP_CLOSE = "lineShareTipClose:";
exports.CONFIG = "CONFIG:";