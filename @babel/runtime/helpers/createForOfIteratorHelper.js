var r = require("./unsupportedIterableToArray");
module.exports = function(n, e) {
  var t = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = r(n)) || e && n && "number" == typeof n.length) {
      t && (n = t);
      var o = 0,
      a = function() {};
      return {
        s: a,
        n: function() {
          return o >= n.length ? {
            done: !0
          }: {
            done: !1,
            value: n[o++]
          }
        },
        e: function(r) {
          throw r
        },
        f: a
      }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  var i, u = !0,
  f = !1;
  return {
    s: function() {
      t = t.call(n)
    },
    n: function() {
      var r = t.next();
      return u = r.done,
      r
    },
    e: function(r) {
      f = !0,
      i = r
    },
    f: function() {
      try {
        u || null == t.
        return || t.
        return ()
      } finally {
        if (f) throw i
      }
    }
  }
};