var t = require("./typeof");
function e() {
  module.exports = e = function() {
    return r
  },
  module.exports.__esModule = !0,
  module.exports.
default = module.exports;
  var r = {},
  n = Object.prototype,
  o = n.hasOwnProperty,
  i = Object.defineProperty ||
  function(t, e, r) {
    t[e] = r.value
  },
  a = "function" == typeof Symbol ? Symbol: {},
  u = a.iterator || "@@iterator",
  c = a.asyncIterator || "@@asyncIterator",
  l = a.toStringTag || "@@toStringTag";
  function h(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }),
    t[e]
  }
  try {
    h({},
    "")
  } catch(t) {
    // t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
    // h = function(t, e, r) {
    //   return t[e] = r
    // }
  }
  function f(t, e, r, n) {
    var o = e && e.prototype instanceof d ? e: d,
    a = Object.create(o.prototype),
    u = new k(n || []);
    return i(a, "_invoke", {
      value: E(t, r, u)
    }),
    a
  }
  function s(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      }
    } catch(t) {
      // t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
      // return {
      //   type: "throw",
      //   arg: t
      // }
    }
  }
  r.wrap = f;
  var p = {};
  function d() {}
  function v() {}
  function y() {}
  var g = {};
  h(g, u, (function() {
    return this
  }));
  var m = Object.getPrototypeOf,
  w = m && m(m(G([])));
  w && w !== n && o.call(w, u) && (g = w);
  var x = y.prototype = d.prototype = Object.create(g);
  function L(t) { ["next", "throw", "return"].forEach((function(e) {
      h(t, e, (function(t) {
        return this._invoke(e, t)
      }))
    }))
  }
  function b(e, r) {
    function n(i, a, u, c) {
      var l = s(e[i], e, a);
      if ("throw" !== l.type) {
        var h = l.arg,
        f = h.value;
        return f && "object" == t(f) && o.call(f, "__await") ? r.resolve(f.__await).then((function(t) {
          n("next", t, u, c)
        }), (function(t) {
          n("throw", t, u, c)
        })) : r.resolve(f).then((function(t) {
          h.value = t,
          u(h)
        }), (function(t) {
          return n("throw", t, u, c)
        }))
      }
      c(l.arg)
    }
    var a;
    i(this, "_invoke", {
      value: function(t, e) {
        function o() {
          return new r((function(r, o) {
            n(t, e, r, o)
          }))
        }
        return a = a ? a.then(o, o) : o()
      }
    })
  }
  function E(t, e, r) {
    var n = "suspendedStart";
    return function(o, i) {
      if ("executing" === n) throw new Error("Generator is already running");
      if ("completed" === n) {
        if ("throw" === o) throw i;
        return {
          value: void 0,
          done: !0
        }
      }
      for (r.method = o, r.arg = i;;) {
        var a = r.delegate;
        if (a) {
          var u = _(a, r);
          if (u) {
            if (u === p) continue;
            return u
          }
        }
        if ("next" === r.method) r.sent = r._sent = r.arg;
        else if ("throw" === r.method) {
          if ("suspendedStart" === n) throw n = "completed",
          r.arg;
          r.dispatchException(r.arg)
        } else "return" === r.method && r.abrupt("return", r.arg);
        n = "executing";
        var c = s(t, e, r);
        if ("normal" === c.type) {
          if (n = r.done ? "completed": "suspendedYield", c.arg === p) continue;
          return {
            value: c.arg,
            done: r.done
          }
        }
        "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
      }
    }
  }
  function _(t, e) {
    var r = e.method,
    n = t.iterator[r];
    if (void 0 === n) return e.delegate = null,
    "throw" === r && t.iterator.
    return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
    p;
    var o = s(n, t.iterator, e.arg);
    if ("throw" === o.type) return e.method = "throw",
    e.arg = o.arg,
    e.delegate = null,
    p;
    var i = o.arg;
    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : i: (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
  }
  function O(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]),
    2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
    this.tryEntries.push(e)
  }
  function j(t) {
    var e = t.completion || {};
    e.type = "normal",
    delete e.arg,
    t.completion = e
  }
  function k(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }],
    t.forEach(O, this),
    this.reset(!0)
  }
  function G(t) {
    if (t) {
      var e = t[u];
      if (e) return e.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var r = -1,
        n = function e() {
          for (; ++r < t.length;) if (o.call(t, r)) return e.value = t[r],
          e.done = !1,
          e;
          return e.value = void 0,
          e.done = !0,
          e
        };
        return n.next = n
      }
    }
    return {
      next: N
    }
  }
  function N() {
    return {
      value: void 0,
      done: !0
    }
  }
  return v.prototype = y,
  i(x, "constructor", {
    value: y,
    configurable: !0
  }),
  i(y, "constructor", {
    value: v,
    configurable: !0
  }),
  v.displayName = h(y, l, "GeneratorFunction"),
  r.isGeneratorFunction = function(t) {
    var e = "function" == typeof t && t.constructor;
    return !! e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
  },
  r.mark = function(t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, h(t, l, "GeneratorFunction")),
    t.prototype = Object.create(x),
    t
  },
  r.awrap = function(t) {
    return {
      __await: t
    }
  },
  L(b.prototype),
  h(b.prototype, c, (function() {
    return this
  })),
  r.AsyncIterator = b,
  r.async = function(t, e, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new b(f(t, e, n, o), i);
    return r.isGeneratorFunction(e) ? a: a.next().then((function(t) {
      return t.done ? t.value: a.next()
    }))
  },
  L(x),
  h(x, l, "Generator"),
  h(x, u, (function() {
    return this
  })),
  h(x, "toString", (function() {
    return "[object Generator]"
  })),
  r.keys = function(t) {
    var e = Object(t),
    r = [];
    for (var n in e) r.push(n);
    return r.reverse(),
    function t() {
      for (; r.length;) {
        var n = r.pop();
        if (n in e) return t.value = n,
        t.done = !1,
        t
      }
      return t.done = !0,
      t
    }
  },
  r.values = G,
  k.prototype = {
    constructor: k,
    reset: function(t) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t) for (var e in this)"t" === e.charAt(0) && o.call(this, e) && !isNaN( + e.slice(1)) && (this[e] = void 0)
    },
    stop: function() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval
    },
    dispatchException: function(t) {
      if (this.done) throw t;
      var e = this;
      function r(r, n) {
        return a.type = "throw",
        a.arg = t,
        e.next = r,
        n && (e.method = "next", e.arg = void 0),
        !!n
      }
      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
        var i = this.tryEntries[n],
        a = i.completion;
        if ("root" === i.tryLoc) return r("end");
        if (i.tryLoc <= this.prev) {
          var u = o.call(i, "catchLoc"),
          c = o.call(i, "finallyLoc");
          if (u && c) {
            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
          } else if (u) {
            if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
          } else {
            if (!c) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
          }
        }
      }
    },
    abrupt: function(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var n = this.tryEntries[r];
        if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
          var i = n;
          break
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion: {};
      return a.type = t,
      a.arg = e,
      i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
    },
    complete: function(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg: "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
      p
    },
    finish: function(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc),
        j(r),
        p
      }
    },
    catch: function(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            j(r)
          }
          return o
        }
      }
      throw new Error("illegal catch attempt")
    },
    delegateYield: function(t, e, r) {
      return this.delegate = {
        iterator: G(t),
        resultName: e,
        nextLoc: r
      },
      "next" === this.method && (this.arg = void 0),
      p
    }
  },
  r
}
module.exports = e,
module.exports.__esModule = !0,
module.exports.
default = module.exports;