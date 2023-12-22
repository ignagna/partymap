Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.getQuestionList = function(t) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  return (0, e.request)({
    url: "/question/random?lineId=".concat(t, "&limit=").concat(o, "&excludeIds=").concat(r.join(",")),
    method: "GET"
  })
};
var e = require("../utils/request");