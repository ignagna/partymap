Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.parse = void 0;
exports.parse = function(e) {
  if (!e) return null;
  var r = e.split("#/")[1];
  if (!r) return null;
  var t = r.split("_");
  return t && 4 == t.length ? {
    areaId: t[0],
    areaCode: t[1],
    lineId: parseInt(t[2].substr(1)),
    version: parseInt(t[3].substr(1))
  }: null
};