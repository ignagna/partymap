Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.addLocationSign = function(t, r, n, o, u) {
  return (0, e.request)({
    url: "/sign/location",
    method: "POST",
    data: {
      areaId: t,
      latitude: r,
      longitude: n,
      distance: o,
      channel: u
    }
  })
},
exports.addQuestionSign = function(t, r, n) {
  return (0, e.request)({
    url: "/sign/question",
    method: "POST",
    data: {
      areaId: t,
      answerCorrectCount: r,
      channel: n
    }
  })
},
exports.getAreaInfo = function(t) {
  return (0, e.request)({
    url: "/area/" + t,
    method: "GET"
  })
},
exports.getLightList = function(t) {
  return (0, e.request)({
    url: "/light" + (null == t ? "": "?lineId=".concat(t)),
    method: "GET"
  })
},
exports.getLineInfo = function(t) {
  return (0, e.request)({
    url: "/line/" + t,
    method: "GET"
  })
},
exports.getLineList = function() {
  return (0, e.request)({
    url: "/line",
    method: "GET"
  })
},
exports.getPostPic = function(t, r) {
  return console.log("lineId,areaCode", t, r),
  (0, e.request)({
    url: "/post/draw" + (null == t || -1 == t ? "": "?lineId=".concat(t)) + (r && "" != r ? "&areaCode=".concat(r) : ""),
    method: "GET"
  })
},
exports.getPostPicByUUID = function(t) {
  return (0, e.request)({
    url: "/post/img/" + t,
    method: "GET"
  })
},
exports.sharePostImg = function(t, r) {
  var n = "areaId=".concat(t);
  r && (n = "lineId=".concat(r));
  return (0, e.request)({
    url: "/postshare?" + n,
    method: "POST"
  })
};
var e = require("../utils/request");