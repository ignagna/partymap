function o(t) {
  return module.exports = o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(o) {
    return typeof o
  }: function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol": typeof o
  },
  o(t)
}
module.exports = o;