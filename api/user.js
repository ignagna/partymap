Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.code2Token = function(t) {
  return (0, e.request)({
    url: "/user/token?code=" + t,
    method: "GET"
  })
},
exports.getActivityInfo = function() {
  return (0, e.request)({
    url: "/user/activity",
    method: "GET"
  })
},
exports.getRankList = function() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all";
  return (0, e.request)({
    url: "/user/rank/" + t,
    method: "GET"
  })
},
exports.getUserInfo = function() {
  return (0, e.request)({
    url: "/user/info",
    method: "GET"
  })
},
exports.getUserMedal = function() {
  return (0, e.request)({
    url: "/user/medal",
    method: "GET"
  })
},
exports.updateUserInfo = function(t) {
  return (0, e.request)({
    url: "/user/update",
    method: "PUT",
    data: t
  })
},
exports.updateUserMedalWear = function(t, r) {
  return (0, e.request)({
    url: "/user/medal/".concat(t, "?medalName=").concat(r),
    method: "PUT"
  })
};
var e = require("../utils/request");