Object.defineProperty(exports, "__esModule", {
  value: !0
}),
exports.uploadToWx = function(r) {
  return (0, e.uploadFile)({
    filePath: r,
    url: "/file/upload/wx/pic",
    name: "file"
  })
};
var e = require("../utils/request");