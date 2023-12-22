Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.getOrgList = function() {
  return (0, e.request)({
    url: "/org/list",
    method: "GET"
  })
};
var e = require("../utils/request");