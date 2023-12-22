Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.formatTime = void 0;
exports.formatTime = function(t) {
  var r = t.getFullYear(),
  o = t.getMonth() + 1,
  n = t.getDate(),
  i = t.getHours(),
  a = t.getMinutes(),
  u = t.getSeconds();
  return [r, o, n].map(e).join("/") + " " + [i, a, u].map(e).join(":")
};
var e = function(e) {
  var t = e.toString();
  return t[1] ? t: "0" + t
};