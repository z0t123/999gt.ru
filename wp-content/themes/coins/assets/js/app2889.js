!function (t) {
  var e = {};

  function i(s) {
    if (e[s]) return e[s].exports;
    var n = e[s] = {i: s, l: !1, exports: {}};
    return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
  }

  i.m = t, i.c = e, i.d = function (t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: s})
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) i.d(s, n, function (e) {
      return t[e]
    }.bind(null, n));
    return s
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "index.html", i(i.s = 29)
}([function (t, e, i) {
  (function (t) {
    var i;

    function s(t) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function (e, i) {
      "use strict";
      "object" === s(t) && "object" === s(t.exports) ? t.exports = e.document ? i(e, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return i(t)
      } : i(e)
    }("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var r = [], a = n.document, l = Object.getPrototypeOf, h = r.slice, c = r.concat, u = r.push, d = r.indexOf,
        p = {}, f = p.toString, g = p.hasOwnProperty, m = g.toString, v = m.call(Object), _ = {}, y = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType
        }, b = function (t) {
          return null != t && t === t.window
        }, w = {type: !0, src: !0, noModule: !0};

      function x(t, e, i) {
        var s, n = (e = e || a).createElement("script");
        if (n.text = t, i) for (s in w) i[s] && (n[s] = i[s]);
        e.head.appendChild(n).parentNode.removeChild(n)
      }

      function C(t) {
        return null == t ? t + "" : "object" === s(t) || "function" == typeof t ? p[f.call(t)] || "object" : s(t)
      }

      var k = function t(e, i) {
        return new t.fn.init(e, i)
      }, D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function T(t) {
        var e = !!t && "length" in t && t.length, i = C(t);
        return !y(t) && !b(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
      }

      k.fn = k.prototype = {
        jquery: "3.3.1", constructor: k, length: 0, toArray: function () {
          return h.call(this)
        }, get: function (t) {
          return null == t ? h.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
          var e = k.merge(this.constructor(), t);
          return e.prevObject = this, e
        }, each: function (t) {
          return k.each(this, t)
        }, map: function (t) {
          return this.pushStack(k.map(this, function (e, i) {
            return t.call(e, i, e)
          }))
        }, slice: function () {
          return this.pushStack(h.apply(this, arguments))
        }, first: function () {
          return this.eq(0)
        }, last: function () {
          return this.eq(-1)
        }, eq: function (t) {
          var e = this.length, i = +t + (t < 0 ? e : 0);
          return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
          return this.prevObject || this.constructor()
        }, push: u, sort: r.sort, splice: r.splice
      }, k.extend = k.fn.extend = function () {
        var t, e, i, n, o, r, a = arguments[0] || {}, l = 1, h = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" === s(a) || y(a) || (a = {}), l === h && (a = this, l--); l < h; l++) if (null != (t = arguments[l])) for (e in t) i = a[e], a !== (n = t[e]) && (c && n && (k.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, r = i && Array.isArray(i) ? i : []) : r = i && k.isPlainObject(i) ? i : {}, a[e] = k.extend(c, r, n)) : void 0 !== n && (a[e] = n));
        return a
      }, k.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
          throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
          var e, i;
          return !(!t || "[object Object]" !== f.call(t)) && (!(e = l(t)) || "function" == typeof (i = g.call(e, "constructor") && e.constructor) && m.call(i) === v)
        }, isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0
        }, globalEval: function (t) {
          x(t)
        }, each: function (t, e) {
          var i, s = 0;
          if (T(t)) for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
          return t
        }, trim: function (t) {
          return null == t ? "" : (t + "").replace(D, "")
        }, makeArray: function (t, e) {
          var i = e || [];
          return null != t && (T(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : u.call(i, t)), i
        }, inArray: function (t, e, i) {
          return null == e ? -1 : d.call(e, t, i)
        }, merge: function (t, e) {
          for (var i = +e.length, s = 0, n = t.length; s < i; s++) t[n++] = e[s];
          return t.length = n, t
        }, grep: function (t, e, i) {
          for (var s = [], n = 0, o = t.length, r = !i; n < o; n++) !e(t[n], n) !== r && s.push(t[n]);
          return s
        }, map: function (t, e, i) {
          var s, n, o = 0, r = [];
          if (T(t)) for (s = t.length; o < s; o++) null != (n = e(t[o], o, i)) && r.push(n); else for (o in t) null != (n = e(t[o], o, i)) && r.push(n);
          return c.apply([], r)
        }, guid: 1, support: _
      }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = r[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        p["[object " + e + "]"] = e.toLowerCase()
      });
      var S =
        /*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */
        function (t) {
          var e, i, s, n, o, r, a, l, h, c, u, d, p, f, g, m, v, _, y, b = "sizzle" + 1 * new Date, w = t.document,
            x = 0, C = 0, k = rt(), D = rt(), T = rt(), S = function (t, e) {
              return t === e && (u = !0), 0
            }, I = {}.hasOwnProperty, P = [], M = P.pop, E = P.push, A = P.push, H = P.slice, z = function (t, e) {
              for (var i = 0, s = t.length; i < s; i++) if (t[i] === e) return i;
              return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + N + "*(" + j + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + N + "*\\]",
            L = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            R = new RegExp(N + "+", "g"), F = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            B = new RegExp("^" + N + "*," + N + "*"), q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            $ = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"), Y = new RegExp(L),
            U = new RegExp("^" + j + "$"), V = {
              ID: new RegExp("^#(" + j + ")"),
              CLASS: new RegExp("^\\.(" + j + ")"),
              TAG: new RegExp("^(" + j + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + L),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + O + ")$", "i"),
              needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"), tt = function (t, e, i) {
              var s = "0x" + e - 65536;
              return s != s || i ? e : s < 0 ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function (t, e) {
              return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, st = function () {
              d()
            }, nt = _t(function (t) {
              return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
          try {
            A.apply(P = H.call(w.childNodes), w.childNodes), P[w.childNodes.length].nodeType
          } catch (t) {
            A = {
              apply: P.length ? function (t, e) {
                E.apply(t, H.call(e))
              } : function (t, e) {
                for (var i = t.length, s = 0; t[i++] = e[s++];) ;
                t.length = i - 1
              }
            }
          }

          function ot(t, e, s, n) {
            var o, a, h, c, u, f, v, _ = e && e.ownerDocument, x = e ? e.nodeType : 9;
            if (s = s || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return s;
            if (!n && ((e ? e.ownerDocument || e : w) !== p && d(e), e = e || p, g)) {
              if (11 !== x && (u = Z.exec(t))) if (o = u[1]) {
                if (9 === x) {
                  if (!(h = e.getElementById(o))) return s;
                  if (h.id === o) return s.push(h), s
                } else if (_ && (h = _.getElementById(o)) && y(e, h) && h.id === o) return s.push(h), s
              } else {
                if (u[2]) return A.apply(s, e.getElementsByTagName(t)), s;
                if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return A.apply(s, e.getElementsByClassName(o)), s
              }
              if (i.qsa && !T[t + " "] && (!m || !m.test(t))) {
                if (1 !== x) _ = e, v = t; else if ("object" !== e.nodeName.toLowerCase()) {
                  for ((c = e.getAttribute("id")) ? c = c.replace(et, it) : e.setAttribute("id", c = b), a = (f = r(t)).length; a--;) f[a] = "#" + c + " " + vt(f[a]);
                  v = f.join(","), _ = Q.test(t) && gt(e.parentNode) || e
                }
                if (v) try {
                  return A.apply(s, _.querySelectorAll(v)), s
                } catch (t) {
                } finally {
                  c === b && e.removeAttribute("id")
                }
              }
            }
            return l(t.replace(F, "$1"), e, s, n)
          }

          function rt() {
            var t = [];
            return function e(i, n) {
              return t.push(i + " ") > s.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
          }

          function at(t) {
            return t[b] = !0, t
          }

          function lt(t) {
            var e = p.createElement("fieldset");
            try {
              return !!t(e)
            } catch (t) {
              return !1
            } finally {
              e.parentNode && e.parentNode.removeChild(e), e = null
            }
          }

          function ht(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) s.attrHandle[i[n]] = e
          }

          function ct(t, e) {
            var i = e && t, s = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (s) return s;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
          }

          function ut(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
            }
          }

          function dt(t) {
            return function (e) {
              var i = e.nodeName.toLowerCase();
              return ("input" === i || "button" === i) && e.type === t
            }
          }

          function pt(t) {
            return function (e) {
              return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && nt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
          }

          function ft(t) {
            return at(function (e) {
              return e = +e, at(function (i, s) {
                for (var n, o = t([], i.length, e), r = o.length; r--;) i[n = o[r]] && (i[n] = !(s[n] = i[n]))
              })
            })
          }

          function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t
          }

          for (e in i = ot.support = {}, o = ot.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
          }, d = ot.setDocument = function (t) {
            var e, n, r = t ? t.ownerDocument || t : w;
            return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, g = !o(p), w !== p && (n = p.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", st, !1) : n.attachEvent && n.attachEvent("onunload", st)), i.attributes = lt(function (t) {
              return t.className = "i", !t.getAttribute("className")
            }), i.getElementsByTagName = lt(function (t) {
              return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
            }), i.getElementsByClassName = G.test(p.getElementsByClassName), i.getById = lt(function (t) {
              return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
            }), i.getById ? (s.filter.ID = function (t) {
              var e = t.replace(J, tt);
              return function (t) {
                return t.getAttribute("id") === e
              }
            }, s.find.ID = function (t, e) {
              if (void 0 !== e.getElementById && g) {
                var i = e.getElementById(t);
                return i ? [i] : []
              }
            }) : (s.filter.ID = function (t) {
              var e = t.replace(J, tt);
              return function (t) {
                var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                return i && i.value === e
              }
            }, s.find.ID = function (t, e) {
              if (void 0 !== e.getElementById && g) {
                var i, s, n, o = e.getElementById(t);
                if (o) {
                  if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                  for (n = e.getElementsByName(t), s = 0; o = n[s++];) if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                }
                return []
              }
            }), s.find.TAG = i.getElementsByTagName ? function (t, e) {
              return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
              var i, s = [], n = 0, o = e.getElementsByTagName(t);
              if ("*" === t) {
                for (; i = o[n++];) 1 === i.nodeType && s.push(i);
                return s
              }
              return o
            }, s.find.CLASS = i.getElementsByClassName && function (t, e) {
              if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
            }, v = [], m = [], (i.qsa = G.test(p.querySelectorAll)) && (lt(function (t) {
              f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
            }), lt(function (t) {
              t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var e = p.createElement("input");
              e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
            })), (i.matchesSelector = G.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function (t) {
              i.disconnectedMatch = _.call(t, "*"), _.call(t, "[s!='']:x"), v.push("!=", L)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(f.compareDocumentPosition), y = e || G.test(f.contains) ? function (t, e) {
              var i = 9 === t.nodeType ? t.documentElement : t, s = e && e.parentNode;
              return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
            } : function (t, e) {
              if (e) for (; e = e.parentNode;) if (e === t) return !0;
              return !1
            }, S = e ? function (t, e) {
              if (t === e) return u = !0, 0;
              var s = !t.compareDocumentPosition - !e.compareDocumentPosition;
              return s || (1 & (s = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === s ? t === p || t.ownerDocument === w && y(w, t) ? -1 : e === p || e.ownerDocument === w && y(w, e) ? 1 : c ? z(c, t) - z(c, e) : 0 : 4 & s ? -1 : 1)
            } : function (t, e) {
              if (t === e) return u = !0, 0;
              var i, s = 0, n = t.parentNode, o = e.parentNode, r = [t], a = [e];
              if (!n || !o) return t === p ? -1 : e === p ? 1 : n ? -1 : o ? 1 : c ? z(c, t) - z(c, e) : 0;
              if (n === o) return ct(t, e);
              for (i = t; i = i.parentNode;) r.unshift(i);
              for (i = e; i = i.parentNode;) a.unshift(i);
              for (; r[s] === a[s];) s++;
              return s ? ct(r[s], a[s]) : r[s] === w ? -1 : a[s] === w ? 1 : 0
            }, p) : p
          }, ot.matches = function (t, e) {
            return ot(t, null, null, e)
          }, ot.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== p && d(t), e = e.replace($, "='$1']"), i.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
              var s = _.call(t, e);
              if (s || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s
            } catch (t) {
            }
            return ot(e, p, null, [t]).length > 0
          }, ot.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && d(t), y(t, e)
          }, ot.attr = function (t, e) {
            (t.ownerDocument || t) !== p && d(t);
            var n = s.attrHandle[e.toLowerCase()],
              o = n && I.call(s.attrHandle, e.toLowerCase()) ? n(t, e, !g) : void 0;
            return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
          }, ot.escape = function (t) {
            return (t + "").replace(et, it)
          }, ot.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
          }, ot.uniqueSort = function (t) {
            var e, s = [], n = 0, o = 0;
            if (u = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(S), u) {
              for (; e = t[o++];) e === t[o] && (n = s.push(o));
              for (; n--;) t.splice(s[n], 1)
            }
            return c = null, t
          }, n = ot.getText = function (t) {
            var e, i = "", s = 0, o = t.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
              } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[s++];) i += n(e);
            return i
          }, (s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
              ">": {dir: "parentNode", first: !0},
              " ": {dir: "parentNode"},
              "+": {dir: "previousSibling", first: !0},
              "~": {dir: "previousSibling"}
            },
            preFilter: {
              ATTR: function (t) {
                return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
              }, CHILD: function (t) {
                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
              }, PSEUDO: function (t) {
                var e, i = !t[6] && t[2];
                return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
              }
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(J, tt).toLowerCase();
                return "*" === t ? function () {
                  return !0
                } : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e
                }
              }, CLASS: function (t) {
                var e = k[t + " "];
                return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && k(t, function (t) {
                  return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                })
              }, ATTR: function (t, e, i) {
                return function (s) {
                  var n = ot.attr(s, t);
                  return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === e && (n === i || n.slice(0, i.length + 1) === i + "-"))
                }
              }, CHILD: function (t, e, i, s, n) {
                var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                return 1 === s && 0 === n ? function (t) {
                  return !!t.parentNode
                } : function (e, i, l) {
                  var h, c, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(), _ = !l && !a, y = !1;
                  if (m) {
                    if (o) {
                      for (; g;) {
                        for (d = e; d = d[g];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                        f = g = "only" === t && !f && "nextSibling"
                      }
                      return !0
                    }
                    if (f = [r ? m.firstChild : m.lastChild], r && _) {
                      for (y = (p = (h = (c = (u = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]) && h[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (y = p = 0) || f.pop();) if (1 === d.nodeType && ++y && d === e) {
                        c[t] = [x, p, y];
                        break
                      }
                    } else if (_ && (y = p = (h = (c = (u = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]), !1 === y) for (; (d = ++p && d && d[g] || (y = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (_ && ((c = (u = d[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [x, y]), d !== e));) ;
                    return (y -= n) === s || y % s == 0 && y / s >= 0
                  }
                }
              }, PSEUDO: function (t, e) {
                var i, n = s.pseudos[t] || s.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                return n[b] ? n(e) : n.length > 1 ? (i = [t, t, "", e], s.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, i) {
                  for (var s, o = n(t, e), r = o.length; r--;) t[s = z(t, o[r])] = !(i[s] = o[r])
                }) : function (t) {
                  return n(t, 0, i)
                }) : n
              }
            },
            pseudos: {
              not: at(function (t) {
                var e = [], i = [], s = a(t.replace(F, "$1"));
                return s[b] ? at(function (t, e, i, n) {
                  for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o))
                }) : function (t, n, o) {
                  return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                }
              }), has: at(function (t) {
                return function (e) {
                  return ot(t, e).length > 0
                }
              }), contains: at(function (t) {
                return t = t.replace(J, tt), function (e) {
                  return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                }
              }), lang: at(function (t) {
                return U.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                  var i;
                  do {
                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
              }), target: function (e) {
                var i = t.location && t.location.hash;
                return i && i.slice(1) === e.id
              }, root: function (t) {
                return t === f
              }, focus: function (t) {
                return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
              }, enabled: pt(!1), disabled: pt(!0), checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return "input" === e && !!t.checked || "option" === e && !!t.selected
              }, selected: function (t) {
                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              }, empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                return !0
              }, parent: function (t) {
                return !s.pseudos.empty(t)
              }, header: function (t) {
                return X.test(t.nodeName)
              }, input: function (t) {
                return K.test(t.nodeName)
              }, button: function (t) {
                var e = t.nodeName.toLowerCase();
                return "input" === e && "button" === t.type || "button" === e
              }, text: function (t) {
                var e;
                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
              }, first: ft(function () {
                return [0]
              }), last: ft(function (t, e) {
                return [e - 1]
              }), eq: ft(function (t, e, i) {
                return [i < 0 ? i + e : i]
              }), even: ft(function (t, e) {
                for (var i = 0; i < e; i += 2) t.push(i);
                return t
              }), odd: ft(function (t, e) {
                for (var i = 1; i < e; i += 2) t.push(i);
                return t
              }), lt: ft(function (t, e, i) {
                for (var s = i < 0 ? i + e : i; --s >= 0;) t.push(s);
                return t
              }), gt: ft(function (t, e, i) {
                for (var s = i < 0 ? i + e : i; ++s < e;) t.push(s);
                return t
              })
            }
          }).pseudos.nth = s.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) s.pseudos[e] = ut(e);
          for (e in{submit: !0, reset: !0}) s.pseudos[e] = dt(e);

          function mt() {
          }

          function vt(t) {
            for (var e = 0, i = t.length, s = ""; e < i; e++) s += t[e].value;
            return s
          }

          function _t(t, e, i) {
            var s = e.dir, n = e.next, o = n || s, r = i && "parentNode" === o, a = C++;
            return e.first ? function (e, i, n) {
              for (; e = e[s];) if (1 === e.nodeType || r) return t(e, i, n);
              return !1
            } : function (e, i, l) {
              var h, c, u, d = [x, a];
              if (l) {
                for (; e = e[s];) if ((1 === e.nodeType || r) && t(e, i, l)) return !0
              } else for (; e = e[s];) if (1 === e.nodeType || r) if (c = (u = e[b] || (e[b] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[s] || e; else {
                if ((h = c[o]) && h[0] === x && h[1] === a) return d[2] = h[2];
                if (c[o] = d, d[2] = t(e, i, l)) return !0
              }
              return !1
            }
          }

          function yt(t) {
            return t.length > 1 ? function (e, i, s) {
              for (var n = t.length; n--;) if (!t[n](e, i, s)) return !1;
              return !0
            } : t[0]
          }

          function bt(t, e, i, s, n) {
            for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++) (o = t[a]) && (i && !i(o, s, n) || (r.push(o), h && e.push(a)));
            return r
          }

          function wt(t, e, i, s, n, o) {
            return s && !s[b] && (s = wt(s)), n && !n[b] && (n = wt(n, o)), at(function (o, r, a, l) {
              var h, c, u, d = [], p = [], f = r.length, g = o || function (t, e, i) {
                  for (var s = 0, n = e.length; s < n; s++) ot(t, e[s], i);
                  return i
                }(e || "*", a.nodeType ? [a] : a, []), m = !t || !o && e ? g : bt(g, d, t, a, l),
                v = i ? n || (o ? t : f || s) ? [] : r : m;
              if (i && i(m, v, a, l), s) for (h = bt(v, p), s(h, [], a, l), c = h.length; c--;) (u = h[c]) && (v[p[c]] = !(m[p[c]] = u));
              if (o) {
                if (n || t) {
                  if (n) {
                    for (h = [], c = v.length; c--;) (u = v[c]) && h.push(m[c] = u);
                    n(null, v = [], h, l)
                  }
                  for (c = v.length; c--;) (u = v[c]) && (h = n ? z(o, u) : d[c]) > -1 && (o[h] = !(r[h] = u))
                }
              } else v = bt(v === r ? v.splice(f, v.length) : v), n ? n(null, r, v, l) : A.apply(r, v)
            })
          }

          function xt(t) {
            for (var e, i, n, o = t.length, r = s.relative[t[0].type], a = r || s.relative[" "], l = r ? 1 : 0, c = _t(function (t) {
              return t === e
            }, a, !0), u = _t(function (t) {
              return z(e, t) > -1
            }, a, !0), d = [function (t, i, s) {
              var n = !r && (s || i !== h) || ((e = i).nodeType ? c(t, i, s) : u(t, i, s));
              return e = null, n
            }]; l < o; l++) if (i = s.relative[t[l].type]) d = [_t(yt(d), i)]; else {
              if ((i = s.filter[t[l].type].apply(null, t[l].matches))[b]) {
                for (n = ++l; n < o && !s.relative[t[n].type]; n++) ;
                return wt(l > 1 && yt(d), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(F, "$1"), i, l < n && xt(t.slice(l, n)), n < o && xt(t = t.slice(n)), n < o && vt(t))
              }
              d.push(i)
            }
            return yt(d)
          }

          return mt.prototype = s.filters = s.pseudos, s.setFilters = new mt, r = ot.tokenize = function (t, e) {
            var i, n, o, r, a, l, h, c = D[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], h = s.preFilter; a;) {
              for (r in i && !(n = B.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(o = [])), i = !1, (n = q.exec(a)) && (i = n.shift(), o.push({
                value: i,
                type: n[0].replace(F, " ")
              }), a = a.slice(i.length)), s.filter) !(n = V[r].exec(a)) || h[r] && !(n = h[r](n)) || (i = n.shift(), o.push({
                value: i,
                type: r,
                matches: n
              }), a = a.slice(i.length));
              if (!i) break
            }
            return e ? a.length : a ? ot.error(t) : D(t, l).slice(0)
          }, a = ot.compile = function (t, e) {
            var i, n = [], o = [], a = T[t + " "];
            if (!a) {
              for (e || (e = r(t)), i = e.length; i--;) (a = xt(e[i]))[b] ? n.push(a) : o.push(a);
              (a = T(t, function (t, e) {
                var i = e.length > 0, n = t.length > 0, o = function (o, r, a, l, c) {
                  var u, f, m, v = 0, _ = "0", y = o && [], b = [], w = h, C = o || n && s.find.TAG("*", c),
                    k = x += null == w ? 1 : Math.random() || .1, D = C.length;
                  for (c && (h = r === p || r || c); _ !== D && null != (u = C[_]); _++) {
                    if (n && u) {
                      for (f = 0, r || u.ownerDocument === p || (d(u), a = !g); m = t[f++];) if (m(u, r || p, a)) {
                        l.push(u);
                        break
                      }
                      c && (x = k)
                    }
                    i && ((u = !m && u) && v--, o && y.push(u))
                  }
                  if (v += _, i && _ !== v) {
                    for (f = 0; m = e[f++];) m(y, b, r, a);
                    if (o) {
                      if (v > 0) for (; _--;) y[_] || b[_] || (b[_] = M.call(l));
                      b = bt(b)
                    }
                    A.apply(l, b), c && !o && b.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                  }
                  return c && (x = k, h = w), y
                };
                return i ? at(o) : o
              }(o, n))).selector = t
            }
            return a
          }, l = ot.select = function (t, e, i, n) {
            var o, l, h, c, u, d = "function" == typeof t && t, p = !n && r(t = d.selector || t);
            if (i = i || [], 1 === p.length) {
              if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && g && s.relative[l[1].type]) {
                if (!(e = (s.find.ID(h.matches[0].replace(J, tt), e) || [])[0])) return i;
                d && (e = e.parentNode), t = t.slice(l.shift().value.length)
              }
              for (o = V.needsContext.test(t) ? 0 : l.length; o-- && (h = l[o], !s.relative[c = h.type]);) if ((u = s.find[c]) && (n = u(h.matches[0].replace(J, tt), Q.test(l[0].type) && gt(e.parentNode) || e))) {
                if (l.splice(o, 1), !(t = n.length && vt(l))) return A.apply(i, n), i;
                break
              }
            }
            return (d || a(t, p))(n, e, !g, i, !e || Q.test(t) && gt(e.parentNode) || e), i
          }, i.sortStable = b.split("").sort(S).join("") === b, i.detectDuplicates = !!u, d(), i.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
          }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
          }) || ht("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
          }), i.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
          }) || ht("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
          }), lt(function (t) {
            return null == t.getAttribute("disabled")
          }) || ht(O, function (t, e, i) {
            var s;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
          }), ot
        }(n);
      k.find = S, k.expr = S.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = S.uniqueSort, k.text = S.getText, k.isXMLDoc = S.isXML, k.contains = S.contains, k.escapeSelector = S.escape;
      var I = function (t, e, i) {
        for (var s = [], n = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
          if (n && k(t).is(i)) break;
          s.push(t)
        }
        return s
      }, P = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
      }, M = k.expr.match.needsContext;

      function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      }

      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function H(t, e, i) {
        return y(e) ? k.grep(t, function (t, s) {
          return !!e.call(t, s, t) !== i
        }) : e.nodeType ? k.grep(t, function (t) {
          return t === e !== i
        }) : "string" != typeof e ? k.grep(t, function (t) {
          return d.call(e, t) > -1 !== i
        }) : k.filter(e, t, i)
      }

      k.filter = function (t, e, i) {
        var s = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? k.find.matchesSelector(s, t) ? [s] : [] : k.find.matches(t, k.grep(e, function (t) {
          return 1 === t.nodeType
        }))
      }, k.fn.extend({
        find: function (t) {
          var e, i, s = this.length, n = this;
          if ("string" != typeof t) return this.pushStack(k(t).filter(function () {
            for (e = 0; e < s; e++) if (k.contains(n[e], this)) return !0
          }));
          for (i = this.pushStack([]), e = 0; e < s; e++) k.find(t, n[e], i);
          return s > 1 ? k.uniqueSort(i) : i
        }, filter: function (t) {
          return this.pushStack(H(this, t || [], !1))
        }, not: function (t) {
          return this.pushStack(H(this, t || [], !0))
        }, is: function (t) {
          return !!H(this, "string" == typeof t && M.test(t) ? k(t) : t || [], !1).length
        }
      });
      var z, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (k.fn.init = function (t, e, i) {
        var s, n;
        if (!t) return this;
        if (i = i || z, "string" == typeof t) {
          if (!(s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !s[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
          if (s[1]) {
            if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : a, !0)), A.test(s[1]) && k.isPlainObject(e)) for (s in e) y(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
            return this
          }
          return (n = a.getElementById(s[2])) && (this[0] = n, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : k.makeArray(t, this)
      }).prototype = k.fn, z = k(a);
      var N = /^(?:parents|prev(?:Until|All))/, j = {children: !0, contents: !0, next: !0, prev: !0};

      function W(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
      }

      k.fn.extend({
        has: function (t) {
          var e = k(t, this), i = e.length;
          return this.filter(function () {
            for (var t = 0; t < i; t++) if (k.contains(this, e[t])) return !0
          })
        }, closest: function (t, e) {
          var i, s = 0, n = this.length, o = [], r = "string" != typeof t && k(t);
          if (!M.test(t)) for (; s < n; s++) for (i = this[s]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
            o.push(i);
            break
          }
          return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
        }, index: function (t) {
          return t ? "string" == typeof t ? d.call(k(t), this[0]) : d.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
        }, addBack: function (t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
      }), k.each({
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
          return I(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
          return I(t, "parentNode", i)
        }, next: function (t) {
          return W(t, "nextSibling")
        }, prev: function (t) {
          return W(t, "previousSibling")
        }, nextAll: function (t) {
          return I(t, "nextSibling")
        }, prevAll: function (t) {
          return I(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
          return I(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
          return I(t, "previousSibling", i)
        }, siblings: function (t) {
          return P((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
          return P(t.firstChild)
        }, contents: function (t) {
          return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
        }
      }, function (t, e) {
        k.fn[t] = function (i, s) {
          var n = k.map(this, e, i);
          return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = k.filter(s, n)), this.length > 1 && (j[t] || k.uniqueSort(n), N.test(t) && n.reverse()), this.pushStack(n)
        }
      });
      var L = /[^\x20\t\r\n\f]+/g;

      function R(t) {
        return t
      }

      function F(t) {
        throw t
      }

      function B(t, e, i, s) {
        var n;
        try {
          t && y(n = t.promise) ? n.call(t).done(e).fail(i) : t && y(n = t.then) ? n.call(t, e, i) : e.apply(void 0, [t].slice(s))
        } catch (t) {
          i.apply(void 0, [t])
        }
      }

      k.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
          var e = {};
          return k.each(t.match(L) || [], function (t, i) {
            e[i] = !0
          }), e
        }(t) : k.extend({}, t);
        var e, i, s, n, o = [], r = [], a = -1, l = function () {
          for (n = n || t.once, s = e = !0; r.length; a = -1) for (i = r.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
          t.memory || (i = !1), e = !1, n && (o = i ? [] : "")
        }, h = {
          add: function () {
            return o && (i && !e && (a = o.length - 1, r.push(i)), function e(i) {
              k.each(i, function (i, s) {
                y(s) ? t.unique && h.has(s) || o.push(s) : s && s.length && "string" !== C(s) && e(s)
              })
            }(arguments), i && !e && l()), this
          }, remove: function () {
            return k.each(arguments, function (t, e) {
              for (var i; (i = k.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--
            }), this
          }, has: function (t) {
            return t ? k.inArray(t, o) > -1 : o.length > 0
          }, empty: function () {
            return o && (o = []), this
          }, disable: function () {
            return n = r = [], o = i = "", this
          }, disabled: function () {
            return !o
          }, lock: function () {
            return n = r = [], i || e || (o = i = ""), this
          }, locked: function () {
            return !!n
          }, fireWith: function (t, i) {
            return n || (i = [t, (i = i || []).slice ? i.slice() : i], r.push(i), e || l()), this
          }, fire: function () {
            return h.fireWith(this, arguments), this
          }, fired: function () {
            return !!s
          }
        };
        return h
      }, k.extend({
        Deferred: function (t) {
          var e = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
            i = "pending", o = {
              state: function () {
                return i
              }, always: function () {
                return r.done(arguments).fail(arguments), this
              }, catch: function (t) {
                return o.then(null, t)
              }, pipe: function () {
                var t = arguments;
                return k.Deferred(function (i) {
                  k.each(e, function (e, s) {
                    var n = y(t[s[4]]) && t[s[4]];
                    r[s[1]](function () {
                      var t = n && n.apply(this, arguments);
                      t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this, n ? [t] : arguments)
                    })
                  }), t = null
                }).promise()
              }, then: function (t, i, o) {
                var r = 0;

                function a(t, e, i, o) {
                  return function () {
                    var l = this, h = arguments, c = function () {
                      var n, c;
                      if (!(t < r)) {
                        if ((n = i.apply(l, h)) === e.promise()) throw new TypeError("Thenable self-resolution");
                        c = n && ("object" === s(n) || "function" == typeof n) && n.then, y(c) ? o ? c.call(n, a(r, e, R, o), a(r, e, F, o)) : (r++, c.call(n, a(r, e, R, o), a(r, e, F, o), a(r, e, R, e.notifyWith))) : (i !== R && (l = void 0, h = [n]), (o || e.resolveWith)(l, h))
                      }
                    }, u = o ? c : function () {
                      try {
                        c()
                      } catch (s) {
                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(s, u.stackTrace), t + 1 >= r && (i !== F && (l = void 0, h = [s]), e.rejectWith(l, h))
                      }
                    };
                    t ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), n.setTimeout(u))
                  }
                }

                return k.Deferred(function (s) {
                  e[0][3].add(a(0, s, y(o) ? o : R, s.notifyWith)), e[1][3].add(a(0, s, y(t) ? t : R)), e[2][3].add(a(0, s, y(i) ? i : F))
                }).promise()
              }, promise: function (t) {
                return null != t ? k.extend(t, o) : o
              }
            }, r = {};
          return k.each(e, function (t, s) {
            var n = s[2], a = s[5];
            o[s[1]] = n.add, a && n.add(function () {
              i = a
            }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), n.add(s[3].fire), r[s[0]] = function () {
              return r[s[0] + "With"](this === r ? void 0 : this, arguments), this
            }, r[s[0] + "With"] = n.fireWith
          }), o.promise(r), t && t.call(r, r), r
        }, when: function (t) {
          var e = arguments.length, i = e, s = Array(i), n = h.call(arguments), o = k.Deferred(), r = function (t) {
            return function (i) {
              s[t] = this, n[t] = arguments.length > 1 ? h.call(arguments) : i, --e || o.resolveWith(s, n)
            }
          };
          if (e <= 1 && (B(t, o.done(r(i)).resolve, o.reject, !e), "pending" === o.state() || y(n[i] && n[i].then))) return o.then();
          for (; i--;) B(n[i], r(i), o.reject);
          return o.promise()
        }
      });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      k.Deferred.exceptionHook = function (t, e) {
        n.console && n.console.warn && t && q.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
      }, k.readyException = function (t) {
        n.setTimeout(function () {
          throw t
        })
      };
      var $ = k.Deferred();

      function Y() {
        a.removeEventListener("DOMContentLoaded", Y), n.removeEventListener("load", Y), k.ready()
      }

      k.fn.ready = function (t) {
        return $.then(t).catch(function (t) {
          k.readyException(t)
        }), this
      }, k.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
          (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || $.resolveWith(a, [k]))
        }
      }), k.ready.then = $.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(k.ready) : (a.addEventListener("DOMContentLoaded", Y), n.addEventListener("load", Y));
      var U = function t(e, i, s, n, o, r, a) {
        var l = 0, h = e.length, c = null == s;
        if ("object" === C(s)) for (l in o = !0, s) t(e, i, l, s[l], !0, r, a); else if (void 0 !== n && (o = !0, y(n) || (a = !0), c && (a ? (i.call(e, n), i = null) : (c = i, i = function (t, e, i) {
          return c.call(k(t), i)
        })), i)) for (; l < h; l++) i(e[l], s, a ? n : n.call(e[l], l, i(e[l], s)));
        return o ? e : c ? i.call(e) : h ? i(e[0], s) : r
      }, V = /^-ms-/, K = /-([a-z])/g;

      function X(t, e) {
        return e.toUpperCase()
      }

      function G(t) {
        return t.replace(V, "ms-").replace(K, X)
      }

      var Z = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
      };

      function Q() {
        this.expando = k.expando + Q.uid++
      }

      Q.uid = 1, Q.prototype = {
        cache: function (t) {
          var e = t[this.expando];
          return e || (e = {}, Z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
            value: e,
            configurable: !0
          }))), e
        }, set: function (t, e, i) {
          var s, n = this.cache(t);
          if ("string" == typeof e) n[G(e)] = i; else for (s in e) n[G(s)] = e[s];
          return n
        }, get: function (t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
        }, access: function (t, e, i) {
          return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
          var i, s = t[this.expando];
          if (void 0 !== s) {
            if (void 0 !== e) {
              i = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in s ? [e] : e.match(L) || []).length;
              for (; i--;) delete s[e[i]]
            }
            (void 0 === e || k.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
          }
        }, hasData: function (t) {
          var e = t[this.expando];
          return void 0 !== e && !k.isEmptyObject(e)
        }
      };
      var J = new Q, tt = new Q, et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, it = /[A-Z]/g;

      function st(t, e, i) {
        var s;
        if (void 0 === i && 1 === t.nodeType) if (s = "data-" + e.replace(it, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(s))) {
          try {
            i = function (t) {
              return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : et.test(t) ? JSON.parse(t) : t)
            }(i)
          } catch (t) {
          }
          tt.set(t, e, i)
        } else i = void 0;
        return i
      }

      k.extend({
        hasData: function (t) {
          return tt.hasData(t) || J.hasData(t)
        }, data: function (t, e, i) {
          return tt.access(t, e, i)
        }, removeData: function (t, e) {
          tt.remove(t, e)
        }, _data: function (t, e, i) {
          return J.access(t, e, i)
        }, _removeData: function (t, e) {
          J.remove(t, e)
        }
      }), k.fn.extend({
        data: function (t, e) {
          var i, n, o, r = this[0], a = r && r.attributes;
          if (void 0 === t) {
            if (this.length && (o = tt.get(r), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
              for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = G(n.slice(5)), st(r, n, o[n]));
              J.set(r, "hasDataAttrs", !0)
            }
            return o
          }
          return "object" === s(t) ? this.each(function () {
            tt.set(this, t)
          }) : U(this, function (e) {
            var i;
            if (r && void 0 === e) return void 0 !== (i = tt.get(r, t)) ? i : void 0 !== (i = st(r, t)) ? i : void 0;
            this.each(function () {
              tt.set(this, t, e)
            })
          }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
          return this.each(function () {
            tt.remove(this, t)
          })
        }
      }), k.extend({
        queue: function (t, e, i) {
          var s;
          if (t) return e = (e || "fx") + "queue", s = J.get(t, e), i && (!s || Array.isArray(i) ? s = J.access(t, e, k.makeArray(i)) : s.push(i)), s || []
        }, dequeue: function (t, e) {
          e = e || "fx";
          var i = k.queue(t, e), s = i.length, n = i.shift(), o = k._queueHooks(t, e);
          "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, function () {
            k.dequeue(t, e)
          }, o)), !s && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
          var i = e + "queueHooks";
          return J.get(t, i) || J.access(t, i, {
            empty: k.Callbacks("once memory").add(function () {
              J.remove(t, [e + "queue", i])
            })
          })
        }
      }), k.fn.extend({
        queue: function (t, e) {
          var i = 2;
          return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? k.queue(this[0], t) : void 0 === e ? this : this.each(function () {
            var i = k.queue(this, t, e);
            k._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && k.dequeue(this, t)
          })
        }, dequeue: function (t) {
          return this.each(function () {
            k.dequeue(this, t)
          })
        }, clearQueue: function (t) {
          return this.queue(t || "fx", [])
        }, promise: function (t, e) {
          var i, s = 1, n = k.Deferred(), o = this, r = this.length, a = function () {
            --s || n.resolveWith(o, [o])
          };
          for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) (i = J.get(o[r], t + "queueHooks")) && i.empty && (s++, i.empty.add(a));
          return a(), n.promise(e)
        }
      });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"), rt = ["Top", "Right", "Bottom", "Left"],
        at = function (t, e) {
          return "none" === (t = e || t).style.display || "" === t.style.display && k.contains(t.ownerDocument, t) && "none" === k.css(t, "display")
        }, lt = function (t, e, i, s) {
          var n, o, r = {};
          for (o in e) r[o] = t.style[o], t.style[o] = e[o];
          for (o in n = i.apply(t, s || []), e) t.style[o] = r[o];
          return n
        };

      function ht(t, e, i, s) {
        var n, o, r = 20, a = s ? function () {
            return s.cur()
          } : function () {
            return k.css(t, e, "")
          }, l = a(), h = i && i[3] || (k.cssNumber[e] ? "" : "px"),
          c = (k.cssNumber[e] || "px" !== h && +l) && ot.exec(k.css(t, e));
        if (c && c[3] !== h) {
          for (l /= 2, h = h || c[3], c = +l || 1; r--;) k.style(t, e, c + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), c /= o;
          c *= 2, k.style(t, e, c + h), i = i || []
        }
        return i && (c = +c || +l || 0, n = i[1] ? c + (i[1] + 1) * i[2] : +i[2], s && (s.unit = h, s.start = c, s.end = n)), n
      }

      var ct = {};

      function ut(t) {
        var e, i = t.ownerDocument, s = t.nodeName, n = ct[s];
        return n || (e = i.body.appendChild(i.createElement(s)), n = k.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), ct[s] = n, n)
      }

      function dt(t, e) {
        for (var i, s, n = [], o = 0, r = t.length; o < r; o++) (s = t[o]).style && (i = s.style.display, e ? ("none" === i && (n[o] = J.get(s, "display") || null, n[o] || (s.style.display = "")), "" === s.style.display && at(s) && (n[o] = ut(s))) : "none" !== i && (n[o] = "none", J.set(s, "display", i)));
        for (o = 0; o < r; o++) null != n[o] && (t[o].style.display = n[o]);
        return t
      }

      k.fn.extend({
        show: function () {
          return dt(this, !0)
        }, hide: function () {
          return dt(this)
        }, toggle: function (t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
            at(this) ? k(this).show() : k(this).hide()
          })
        }
      });
      var pt = /^(?:checkbox|radio)$/i, ft = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        gt = /^$|^module$|\/(?:java|ecma)script/i, mt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };

      function vt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? k.merge([t], i) : i
      }

      function _t(t, e) {
        for (var i = 0, s = t.length; i < s; i++) J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"))
      }

      mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
      var yt, bt, wt = /<|&#?\w+;/;

      function xt(t, e, i, s, n) {
        for (var o, r, a, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if ((o = t[p]) || 0 === o) if ("object" === C(o)) k.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
          for (r = r || u.appendChild(e.createElement("div")), a = (ft.exec(o) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, r.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], c = l[0]; c--;) r = r.lastChild;
          k.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++];) if (s && k.inArray(o, s) > -1) n && n.push(o); else if (h = k.contains(o.ownerDocument, o), r = vt(u.appendChild(o), "script"), h && _t(r), i) for (c = 0; o = r[c++];) gt.test(o.type || "") && i.push(o);
        return u
      }

      yt = a.createDocumentFragment().appendChild(a.createElement("div")), (bt = a.createElement("input")).setAttribute("type", "radio"), bt.setAttribute("checked", "checked"), bt.setAttribute("name", "t"), yt.appendChild(bt), _.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
      var Ct = a.documentElement, kt = /^key/, Dt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Tt = /^([^.]*)(?:\.(.+)|)/;

      function St() {
        return !0
      }

      function It() {
        return !1
      }

      function Pt() {
        try {
          return a.activeElement
        } catch (t) {
        }
      }

      function Mt(t, e, i, n, o, r) {
        var a, l;
        if ("object" === s(e)) {
          for (l in"string" != typeof i && (n = n || i, i = void 0), e) Mt(t, l, i, n, e[l], r);
          return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = It; else if (!o) return t;
        return 1 === r && (a = o, (o = function (t) {
          return k().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), t.each(function () {
          k.event.add(this, e, o, n, i)
        })
      }

      k.event = {
        global: {}, add: function (t, e, i, s, n) {
          var o, r, a, l, h, c, u, d, p, f, g, m = J.get(t);
          if (m) for (i.handler && (i = (o = i).handler, n = o.selector), n && k.find.matchesSelector(Ct, n), i.guid || (i.guid = k.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
            return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
          }), h = (e = (e || "").match(L) || [""]).length; h--;) p = g = (a = Tt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = k.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, u = k.event.special[p] || {}, c = k.extend({
            type: p,
            origType: g,
            data: s,
            handler: i,
            guid: i.guid,
            selector: n,
            needsContext: n && k.expr.match.needsContext.test(n),
            namespace: f.join(".")
          }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, s, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), n ? d.splice(d.delegateCount++, 0, c) : d.push(c), k.event.global[p] = !0)
        }, remove: function (t, e, i, s, n) {
          var o, r, a, l, h, c, u, d, p, f, g, m = J.hasData(t) && J.get(t);
          if (m && (l = m.events)) {
            for (h = (e = (e || "").match(L) || [""]).length; h--;) if (p = g = (a = Tt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
              for (u = k.event.special[p] || {}, d = l[p = (s ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !n && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || s && s !== c.selector && ("**" !== s || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
              r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || k.removeEvent(t, p, m.handle), delete l[p])
            } else for (p in l) k.event.remove(t, p + e[h], i, s, !0);
            k.isEmptyObject(l) && J.remove(t, "handle events")
          }
        }, dispatch: function (t) {
          var e, i, s, n, o, r, a = k.event.fix(t), l = new Array(arguments.length),
            h = (J.get(this, "events") || {})[a.type] || [], c = k.event.special[a.type] || {};
          for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
            for (r = k.event.handlers.call(this, a, h), e = 0; (n = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = n.elem, i = 0; (o = n.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (s = ((k.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, l)) && !1 === (a.result = s) && (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result
          }
        }, handlers: function (t, e) {
          var i, s, n, o, r, a = [], l = e.delegateCount, h = t.target;
          if (l && h.nodeType && !("click" === t.type && t.button >= 1)) for (; h !== this; h = h.parentNode || this) if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
            for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[n = (s = e[i]).selector + " "] && (r[n] = s.needsContext ? k(n, this).index(h) > -1 : k.find(n, this, null, [h]).length), r[n] && o.push(s);
            o.length && a.push({elem: h, handlers: o})
          }
          return h = this, l < e.length && a.push({elem: h, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
          Object.defineProperty(k.Event.prototype, t, {
            enumerable: !0, configurable: !0, get: y(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[t]
            }, set: function (e) {
              Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
            }
          })
        }, fix: function (t) {
          return t[k.expando] ? t : new k.Event(t)
        }, special: {
          load: {noBubble: !0}, focus: {
            trigger: function () {
              if (this !== Pt() && this.focus) return this.focus(), !1
            }, delegateType: "focusin"
          }, blur: {
            trigger: function () {
              if (this === Pt() && this.blur) return this.blur(), !1
            }, delegateType: "focusout"
          }, click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
            }, _default: function (t) {
              return E(t.target, "a")
            }
          }, beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
            }
          }
        }
      }, k.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
      }, k.Event = function (t, e) {
        if (!(this instanceof k.Event)) return new k.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : It, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0
      }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: It,
        isPropagationStopped: It,
        isImmediatePropagationStopped: It,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
      }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
          var e = t.button;
          return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Dt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
      }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (t, e) {
        k.event.special[t] = {
          delegateType: e, bindType: e, handle: function (t) {
            var i, s = t.relatedTarget, n = t.handleObj;
            return s && (s === this || k.contains(this, s)) || (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i
          }
        }
      }), k.fn.extend({
        on: function (t, e, i, s) {
          return Mt(this, t, e, i, s)
        }, one: function (t, e, i, s) {
          return Mt(this, t, e, i, s, 1)
        }, off: function (t, e, i) {
          var n, o;
          if (t && t.preventDefault && t.handleObj) return n = t.handleObj, k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
          if ("object" === s(t)) {
            for (o in t) this.off(o, e, t[o]);
            return this
          }
          return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = It), this.each(function () {
            k.event.remove(this, t, i, e)
          })
        }
      });
      var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        At = /<script|<style|<link/i, Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
        zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Ot(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t
      }

      function Nt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
      }

      function jt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
      }

      function Wt(t, e) {
        var i, s, n, o, r, a, l, h;
        if (1 === e.nodeType) {
          if (J.hasData(t) && (o = J.access(t), r = J.set(e, o), h = o.events)) for (n in delete r.handle, r.events = {}, h) for (i = 0, s = h[n].length; i < s; i++) k.event.add(e, n, h[n][i]);
          tt.hasData(t) && (a = tt.access(t), l = k.extend({}, a), tt.set(e, l))
        }
      }

      function Lt(t, e, i, s) {
        e = c.apply([], e);
        var n, o, r, a, l, h, u = 0, d = t.length, p = d - 1, f = e[0], g = y(f);
        if (g || d > 1 && "string" == typeof f && !_.checkClone && Ht.test(f)) return t.each(function (n) {
          var o = t.eq(n);
          g && (e[0] = f.call(this, n, o.html())), Lt(o, e, i, s)
        });
        if (d && (o = (n = xt(e, t[0].ownerDocument, !1, t, s)).firstChild, 1 === n.childNodes.length && (n = o), o || s)) {
          for (a = (r = k.map(vt(n, "script"), Nt)).length; u < d; u++) l = n, u !== p && (l = k.clone(l, !0, !0), a && k.merge(r, vt(l, "script"))), i.call(t[u], l, u);
          if (a) for (h = r[r.length - 1].ownerDocument, k.map(r, jt), u = 0; u < a; u++) l = r[u], gt.test(l.type || "") && !J.access(l, "globalEval") && k.contains(h, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(l.src) : x(l.textContent.replace(zt, ""), h, l))
        }
        return t
      }

      function Rt(t, e, i) {
        for (var s, n = e ? k.filter(e, t) : t, o = 0; null != (s = n[o]); o++) i || 1 !== s.nodeType || k.cleanData(vt(s)), s.parentNode && (i && k.contains(s.ownerDocument, s) && _t(vt(s, "script")), s.parentNode.removeChild(s));
        return t
      }

      k.extend({
        htmlPrefilter: function (t) {
          return t.replace(Et, "<$1></$2>")
        }, clone: function (t, e, i) {
          var s, n, o, r, a, l, h, c = t.cloneNode(!0), u = k.contains(t.ownerDocument, t);
          if (!(_.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t))) for (r = vt(c), s = 0, n = (o = vt(t)).length; s < n; s++) a = o[s], l = r[s], h = void 0, "input" === (h = l.nodeName.toLowerCase()) && pt.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
          if (e) if (i) for (o = o || vt(t), r = r || vt(c), s = 0, n = o.length; s < n; s++) Wt(o[s], r[s]); else Wt(t, c);
          return (r = vt(c, "script")).length > 0 && _t(r, !u && vt(t, "script")), c
        }, cleanData: function (t) {
          for (var e, i, s, n = k.event.special, o = 0; void 0 !== (i = t[o]); o++) if (Z(i)) {
            if (e = i[J.expando]) {
              if (e.events) for (s in e.events) n[s] ? k.event.remove(i, s) : k.removeEvent(i, s, e.handle);
              i[J.expando] = void 0
            }
            i[tt.expando] && (i[tt.expando] = void 0)
          }
        }
      }), k.fn.extend({
        detach: function (t) {
          return Rt(this, t, !0)
        }, remove: function (t) {
          return Rt(this, t)
        }, text: function (t) {
          return U(this, function (t) {
            return void 0 === t ? k.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
            })
          }, null, t, arguments.length)
        }, append: function () {
          return Lt(this, arguments, function (t) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
          })
        }, prepend: function () {
          return Lt(this, arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var e = Ot(this, t);
              e.insertBefore(t, e.firstChild)
            }
          })
        }, before: function () {
          return Lt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
          })
        }, after: function () {
          return Lt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          })
        }, empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(vt(t, !1)), t.textContent = "");
          return this
        }, clone: function (t, e) {
          return t = null != t && t, e = null == e ? t : e, this.map(function () {
            return k.clone(this, t, e)
          })
        }, html: function (t) {
          return U(this, function (t) {
            var e = this[0] || {}, i = 0, s = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if ("string" == typeof t && !At.test(t) && !mt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = k.htmlPrefilter(t);
              try {
                for (; i < s; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(vt(e, !1)), e.innerHTML = t);
                e = 0
              } catch (t) {
              }
            }
            e && this.empty().append(t)
          }, null, t, arguments.length)
        }, replaceWith: function () {
          var t = [];
          return Lt(this, arguments, function (e) {
            var i = this.parentNode;
            k.inArray(this, t) < 0 && (k.cleanData(vt(this)), i && i.replaceChild(e, this))
          }, t)
        }
      }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (t, e) {
        k.fn[t] = function (t) {
          for (var i, s = [], n = k(t), o = n.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), k(n[r])[e](i), u.apply(s, i.get());
          return this.pushStack(s)
        }
      });
      var Ft = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"), Bt = function (t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = n), e.getComputedStyle(t)
      }, qt = new RegExp(rt.join("|"), "i");

      function $t(t, e, i) {
        var s, n, o, r, a = t.style;
        return (i = i || Bt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || k.contains(t.ownerDocument, t) || (r = k.style(t, e)), !_.pixelBoxStyles() && Ft.test(r) && qt.test(e) && (s = a.width, n = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = s, a.minWidth = n, a.maxWidth = o)), void 0 !== r ? r + "" : r
      }

      function Yt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get
          }
        }
      }

      !function () {
        function t() {
          if (c) {
            h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ct.appendChild(h).appendChild(c);
            var t = n.getComputedStyle(c);
            i = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", r = 36 === e(t.right), s = 36 === e(t.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", Ct.removeChild(h), c = null
          }
        }

        function e(t) {
          return Math.round(parseFloat(t))
        }

        var i, s, o, r, l, h = a.createElement("div"), c = a.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(_, {
          boxSizingReliable: function () {
            return t(), s
          }, pixelBoxStyles: function () {
            return t(), r
          }, pixelPosition: function () {
            return t(), i
          }, reliableMarginLeft: function () {
            return t(), l
          }, scrollboxSize: function () {
            return t(), o
          }
        }))
      }();
      var Ut = /^(none|table(?!-c[ea]).+)/, Vt = /^--/,
        Kt = {position: "absolute", visibility: "hidden", display: "block"},
        Xt = {letterSpacing: "0", fontWeight: "400"}, Gt = ["Webkit", "Moz", "ms"], Zt = a.createElement("div").style;

      function Qt(t) {
        var e = k.cssProps[t];
        return e || (e = k.cssProps[t] = function (t) {
          if (t in Zt) return t;
          for (var e = t[0].toUpperCase() + t.slice(1), i = Gt.length; i--;) if ((t = Gt[i] + e) in Zt) return t
        }(t) || t), e
      }

      function Jt(t, e, i) {
        var s = ot.exec(e);
        return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e
      }

      function te(t, e, i, s, n, o) {
        var r = "width" === e ? 1 : 0, a = 0, l = 0;
        if (i === (s ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += k.css(t, i + rt[r], !0, n)), s ? ("content" === i && (l -= k.css(t, "padding" + rt[r], !0, n)), "margin" !== i && (l -= k.css(t, "border" + rt[r] + "Width", !0, n))) : (l += k.css(t, "padding" + rt[r], !0, n), "padding" !== i ? l += k.css(t, "border" + rt[r] + "Width", !0, n) : a += k.css(t, "border" + rt[r] + "Width", !0, n));
        return !s && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
      }

      function ee(t, e, i) {
        var s = Bt(t), n = $t(t, e, s), o = "border-box" === k.css(t, "boxSizing", !1, s), r = o;
        if (Ft.test(n)) {
          if (!i) return n;
          n = "auto"
        }
        return r = r && (_.boxSizingReliable() || n === t.style[e]), ("auto" === n || !parseFloat(n) && "inline" === k.css(t, "display", !1, s)) && (n = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0), (n = parseFloat(n) || 0) + te(t, e, i || (o ? "border" : "content"), r, s, n) + "px"
      }

      function ie(t, e, i, s, n) {
        return new ie.prototype.init(t, e, i, s, n)
      }

      k.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var i = $t(t, "opacity");
                return "" === i ? "1" : i
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (t, e, i, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var o, r, a, l = G(e), h = Vt.test(e), c = t.style;
            if (h || (e = Qt(l)), a = k.cssHooks[e] || k.cssHooks[l], void 0 === i) return a && "get" in a && void 0 !== (o = a.get(t, !1, n)) ? o : c[e];
            "string" === (r = s(i)) && (o = ot.exec(i)) && o[1] && (i = ht(t, e, o), r = "number"), null != i && i == i && ("number" === r && (i += o && o[3] || (k.cssNumber[l] ? "" : "px")), _.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (h ? c.setProperty(e, i) : c[e] = i))
          }
        },
        css: function (t, e, i, s) {
          var n, o, r, a = G(e);
          return Vt.test(e) || (e = Qt(a)), (r = k.cssHooks[e] || k.cssHooks[a]) && "get" in r && (n = r.get(t, !0, i)), void 0 === n && (n = $t(t, e, s)), "normal" === n && e in Xt && (n = Xt[e]), "" === i || i ? (o = parseFloat(n), !0 === i || isFinite(o) ? o || 0 : n) : n
        }
      }), k.each(["height", "width"], function (t, e) {
        k.cssHooks[e] = {
          get: function (t, i, s) {
            if (i) return !Ut.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, s) : lt(t, Kt, function () {
              return ee(t, e, s)
            })
          }, set: function (t, i, s) {
            var n, o = Bt(t), r = "border-box" === k.css(t, "boxSizing", !1, o), a = s && te(t, e, s, r, o);
            return r && _.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - te(t, e, "border", !1, o) - .5)), a && (n = ot.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = k.css(t, e)), Jt(0, i, a)
          }
        }
      }), k.cssHooks.marginLeft = Yt(_.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat($t(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, {marginLeft: 0}, function () {
          return t.getBoundingClientRect().left
        })) + "px"
      }), k.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        k.cssHooks[t + e] = {
          expand: function (i) {
            for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; s < 4; s++) n[t + rt[s] + e] = o[s] || o[s - 2] || o[0];
            return n
          }
        }, "margin" !== t && (k.cssHooks[t + e].set = Jt)
      }), k.fn.extend({
        css: function (t, e) {
          return U(this, function (t, e, i) {
            var s, n, o = {}, r = 0;
            if (Array.isArray(e)) {
              for (s = Bt(t), n = e.length; r < n; r++) o[e[r]] = k.css(t, e[r], !1, s);
              return o
            }
            return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
          }, t, e, arguments.length > 1)
        }
      }), k.Tween = ie, ie.prototype = {
        constructor: ie, init: function (t, e, i, s, n, o) {
          this.elem = t, this.prop = i, this.easing = n || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (k.cssNumber[i] ? "" : "px")
        }, cur: function () {
          var t = ie.propHooks[this.prop];
          return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
        }, run: function (t) {
          var e, i = ie.propHooks[this.prop];
          return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ie.propHooks._default.set(this), this
        }
      }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
          }, set: function (t) {
            k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[k.cssProps[t.prop]] && !k.cssHooks[t.prop] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
          }
        }
      }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
      }, k.easing = {
        linear: function (t) {
          return t
        }, swing: function (t) {
          return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
      }, k.fx = ie.prototype.init, k.fx.step = {};
      var se, ne, oe = /^(?:toggle|show|hide)$/, re = /queueHooks$/;

      function ae() {
        ne && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ae) : n.setTimeout(ae, k.fx.interval), k.fx.tick())
      }

      function le() {
        return n.setTimeout(function () {
          se = void 0
        }), se = Date.now()
      }

      function he(t, e) {
        var i, s = 0, n = {height: t};
        for (e = e ? 1 : 0; s < 4; s += 2 - e) n["margin" + (i = rt[s])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
      }

      function ce(t, e, i) {
        for (var s, n = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), o = 0, r = n.length; o < r; o++) if (s = n[o].call(i, e, t)) return s
      }

      function ue(t, e, i) {
        var s, n, o = 0, r = ue.prefilters.length, a = k.Deferred().always(function () {
          delete l.elem
        }), l = function () {
          if (n) return !1;
          for (var e = se || le(), i = Math.max(0, h.startTime + h.duration - e), s = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++) h.tweens[o].run(s);
          return a.notifyWith(t, [h, s, i]), s < 1 && r ? i : (r || a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h]), !1)
        }, h = a.promise({
          elem: t,
          props: k.extend({}, e),
          opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, i),
          originalProperties: e,
          originalOptions: i,
          startTime: se || le(),
          duration: i.duration,
          tweens: [],
          createTween: function (e, i) {
            var s = k.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
            return h.tweens.push(s), s
          },
          stop: function (e) {
            var i = 0, s = e ? h.tweens.length : 0;
            if (n) return this;
            for (n = !0; i < s; i++) h.tweens[i].run(1);
            return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
          }
        }), c = h.props;
        for (!function (t, e) {
          var i, s, n, o, r;
          for (i in t) if (n = e[s = G(i)], o = t[i], Array.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), (r = k.cssHooks[s]) && "expand" in r) for (i in o = r.expand(o), delete t[s], o) i in t || (t[i] = o[i], e[i] = n); else e[s] = n
        }(c, h.opts.specialEasing); o < r; o++) if (s = ue.prefilters[o].call(h, t, c, h.opts)) return y(s.stop) && (k._queueHooks(h.elem, h.opts.queue).stop = s.stop.bind(s)), s;
        return k.map(c, ce, h), y(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), k.fx.timer(k.extend(l, {
          elem: t,
          anim: h,
          queue: h.opts.queue
        })), h
      }

      k.Animation = k.extend(ue, {
        tweeners: {
          "*": [function (t, e) {
            var i = this.createTween(t, e);
            return ht(i.elem, t, ot.exec(e), i), i
          }]
        }, tweener: function (t, e) {
          y(t) ? (e = t, t = ["*"]) : t = t.match(L);
          for (var i, s = 0, n = t.length; s < n; s++) i = t[s], ue.tweeners[i] = ue.tweeners[i] || [], ue.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
          var s, n, o, r, a, l, h, c, u = "width" in e || "height" in e, d = this, p = {}, f = t.style,
            g = t.nodeType && at(t), m = J.get(t, "fxshow");
          for (s in i.queue || (null == (r = k._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
            r.unqueued || a()
          }), r.unqueued++, d.always(function () {
            d.always(function () {
              r.unqueued--, k.queue(t, "fx").length || r.empty.fire()
            })
          })), e) if (n = e[s], oe.test(n)) {
            if (delete e[s], o = o || "toggle" === n, n === (g ? "hide" : "show")) {
              if ("show" !== n || !m || void 0 === m[s]) continue;
              g = !0
            }
            p[s] = m && m[s] || k.style(t, s)
          }
          if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(p)) for (s in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = m && m.display) && (h = J.get(t, "display")), "none" === (c = k.css(t, "display")) && (h ? c = h : (dt([t], !0), h = t.style.display || h, c = k.css(t, "display"), dt([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === k.css(t, "float") && (l || (d.done(function () {
            f.display = h
          }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
          })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(t, "fxshow", {display: h}), o && (m.hidden = !g), g && dt([t], !0), d.done(function () {
            for (s in g || dt([t]), J.remove(t, "fxshow"), p) k.style(t, s, p[s])
          })), l = ce(g ? m[s] : 0, s, d), s in m || (m[s] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
          e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
        }
      }), k.speed = function (t, e, i) {
        var n = t && "object" === s(t) ? k.extend({}, t) : {
          complete: i || !i && e || y(t) && t,
          duration: t,
          easing: i && e || e && !y(e) && e
        };
        return k.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in k.fx.speeds ? n.duration = k.fx.speeds[n.duration] : n.duration = k.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
          y(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue)
        }, n
      }, k.fn.extend({
        fadeTo: function (t, e, i, s) {
          return this.filter(at).css("opacity", 0).show().end().animate({opacity: e}, t, i, s)
        }, animate: function (t, e, i, s) {
          var n = k.isEmptyObject(t), o = k.speed(e, i, s), r = function () {
            var e = ue(this, k.extend({}, t), o);
            (n || J.get(this, "finish")) && e.stop(!0)
          };
          return r.finish = r, n || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        }, stop: function (t, e, i) {
          var s = function (t) {
            var e = t.stop;
            delete t.stop, e(i)
          };
          return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
            var e = !0, n = null != t && t + "queueHooks", o = k.timers, r = J.get(this);
            if (n) r[n] && r[n].stop && s(r[n]); else for (n in r) r[n] && r[n].stop && re.test(n) && s(r[n]);
            for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
            !e && i || k.dequeue(this, t)
          })
        }, finish: function (t) {
          return !1 !== t && (t = t || "fx"), this.each(function () {
            var e, i = J.get(this), s = i[t + "queue"], n = i[t + "queueHooks"], o = k.timers, r = s ? s.length : 0;
            for (i.finish = !0, k.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < r; e++) s[e] && s[e].finish && s[e].finish.call(this);
            delete i.finish
          })
        }
      }), k.each(["toggle", "show", "hide"], function (t, e) {
        var i = k.fn[e];
        k.fn[e] = function (t, s, n) {
          return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(he(e, !0), t, s, n)
        }
      }), k.each({
        slideDown: he("show"),
        slideUp: he("hide"),
        slideToggle: he("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function (t, e) {
        k.fn[t] = function (t, i, s) {
          return this.animate(e, t, i, s)
        }
      }), k.timers = [], k.fx.tick = function () {
        var t, e = 0, i = k.timers;
        for (se = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || k.fx.stop(), se = void 0
      }, k.fx.timer = function (t) {
        k.timers.push(t), k.fx.start()
      }, k.fx.interval = 13, k.fx.start = function () {
        ne || (ne = !0, ae())
      }, k.fx.stop = function () {
        ne = null
      }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (t, e) {
        return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, i) {
          var s = n.setTimeout(e, t);
          i.stop = function () {
            n.clearTimeout(s)
          }
        })
      }, function () {
        var t = a.createElement("input"), e = a.createElement("select").appendChild(a.createElement("option"));
        t.type = "checkbox", _.checkOn = "" !== t.value, _.optSelected = e.selected, (t = a.createElement("input")).value = "t", t.type = "radio", _.radioValue = "t" === t.value
      }();
      var de, pe = k.expr.attrHandle;
      k.fn.extend({
        attr: function (t, e) {
          return U(this, k.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
          return this.each(function () {
            k.removeAttr(this, t)
          })
        }
      }), k.extend({
        attr: function (t, e, i) {
          var s, n, o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === o && k.isXMLDoc(t) || (n = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? de : void 0)), void 0 !== i ? null === i ? void k.removeAttr(t, e) : n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (s = n.get(t, e)) ? s : null == (s = k.find.attr(t, e)) ? void 0 : s)
        }, attrHooks: {
          type: {
            set: function (t, e) {
              if (!_.radioValue && "radio" === e && E(t, "input")) {
                var i = t.value;
                return t.setAttribute("type", e), i && (t.value = i), e
              }
            }
          }
        }, removeAttr: function (t, e) {
          var i, s = 0, n = e && e.match(L);
          if (n && 1 === t.nodeType) for (; i = n[s++];) t.removeAttribute(i)
        }
      }), de = {
        set: function (t, e, i) {
          return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i
        }
      }, k.each(k.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = pe[e] || k.find.attr;
        pe[e] = function (t, e, s) {
          var n, o, r = e.toLowerCase();
          return s || (o = pe[r], pe[r] = n, n = null != i(t, e, s) ? r : null, pe[r] = o), n
        }
      });
      var fe = /^(?:input|select|textarea|button)$/i, ge = /^(?:a|area)$/i;

      function me(t) {
        return (t.match(L) || []).join(" ")
      }

      function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
      }

      function _e(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || []
      }

      k.fn.extend({
        prop: function (t, e) {
          return U(this, k.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
          return this.each(function () {
            delete this[k.propFix[t] || t]
          })
        }
      }), k.extend({
        prop: function (t, e, i) {
          var s, n, o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e, n = k.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e]
        }, propHooks: {
          tabIndex: {
            get: function (t) {
              var e = k.find.attr(t, "tabindex");
              return e ? parseInt(e, 10) : fe.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
            }
          }
        }, propFix: {for: "htmlFor", class: "className"}
      }), _.optSelected || (k.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
      }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
      }), k.fn.extend({
        addClass: function (t) {
          var e, i, s, n, o, r, a, l = 0;
          if (y(t)) return this.each(function (e) {
            k(this).addClass(t.call(this, e, ve(this)))
          });
          if ((e = _e(t)).length) for (; i = this[l++];) if (n = ve(i), s = 1 === i.nodeType && " " + me(n) + " ") {
            for (r = 0; o = e[r++];) s.indexOf(" " + o + " ") < 0 && (s += o + " ");
            n !== (a = me(s)) && i.setAttribute("class", a)
          }
          return this
        }, removeClass: function (t) {
          var e, i, s, n, o, r, a, l = 0;
          if (y(t)) return this.each(function (e) {
            k(this).removeClass(t.call(this, e, ve(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((e = _e(t)).length) for (; i = this[l++];) if (n = ve(i), s = 1 === i.nodeType && " " + me(n) + " ") {
            for (r = 0; o = e[r++];) for (; s.indexOf(" " + o + " ") > -1;) s = s.replace(" " + o + " ", " ");
            n !== (a = me(s)) && i.setAttribute("class", a)
          }
          return this
        }, toggleClass: function (t, e) {
          var i = s(t), n = "string" === i || Array.isArray(t);
          return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function (i) {
            k(this).toggleClass(t.call(this, i, ve(this), e), e)
          }) : this.each(function () {
            var e, s, o, r;
            if (n) for (s = 0, o = k(this), r = _e(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || ((e = ve(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
          })
        }, hasClass: function (t) {
          var e, i, s = 0;
          for (e = " " + t + " "; i = this[s++];) if (1 === i.nodeType && (" " + me(ve(i)) + " ").indexOf(e) > -1) return !0;
          return !1
        }
      });
      var ye = /\r/g;
      k.fn.extend({
        val: function (t) {
          var e, i, s, n = this[0];
          return arguments.length ? (s = y(t), this.each(function (i) {
            var n;
            1 === this.nodeType && (null == (n = s ? t.call(this, i, k(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = k.map(n, function (t) {
              return null == t ? "" : t + ""
            })), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
          })) : n ? (e = k.valHooks[n.type] || k.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof (i = n.value) ? i.replace(ye, "") : null == i ? "" : i : void 0
        }
      }), k.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = k.find.attr(t, "value");
              return null != e ? e : me(k.text(t))
            }
          }, select: {
            get: function (t) {
              var e, i, s, n = t.options, o = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [],
                l = r ? o + 1 : n.length;
              for (s = o < 0 ? l : r ? o : 0; s < l; s++) if (((i = n[s]).selected || s === o) && !i.disabled && (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))) {
                if (e = k(i).val(), r) return e;
                a.push(e)
              }
              return a
            }, set: function (t, e) {
              for (var i, s, n = t.options, o = k.makeArray(e), r = n.length; r--;) ((s = n[r]).selected = k.inArray(k.valHooks.option.get(s), o) > -1) && (i = !0);
              return i || (t.selectedIndex = -1), o
            }
          }
        }
      }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
          set: function (t, e) {
            if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1
          }
        }, _.checkOn || (k.valHooks[this].get = function (t) {
          return null === t.getAttribute("value") ? "on" : t.value
        })
      }), _.focusin = "onfocusin" in n;
      var be = /^(?:focusinfocus|focusoutblur)$/, we = function (t) {
        t.stopPropagation()
      };
      k.extend(k.event, {
        trigger: function (t, e, i, o) {
          var r, l, h, c, u, d, p, f, m = [i || a], v = g.call(t, "type") ? t.type : t,
            _ = g.call(t, "namespace") ? t.namespace.split(".") : [];
          if (l = f = h = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !be.test(v + k.event.triggered) && (v.indexOf(".") > -1 && (_ = v.split("."), v = _.shift(), _.sort()), u = v.indexOf(":") < 0 && "on" + v, (t = t[k.expando] ? t : new k.Event(v, "object" === s(t) && t)).isTrigger = o ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : k.makeArray(e, [t]), p = k.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, e))) {
            if (!o && !p.noBubble && !b(i)) {
              for (c = p.delegateType || v, be.test(c + v) || (l = l.parentNode); l; l = l.parentNode) m.push(l), h = l;
              h === (i.ownerDocument || a) && m.push(h.defaultView || h.parentWindow || n)
            }
            for (r = 0; (l = m[r++]) && !t.isPropagationStopped();) f = l, t.type = r > 1 ? c : p.bindType || v, (d = (J.get(l, "events") || {})[t.type] && J.get(l, "handle")) && d.apply(l, e), (d = u && l[u]) && d.apply && Z(l) && (t.result = d.apply(l, e), !1 === t.result && t.preventDefault());
            return t.type = v, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), e) || !Z(i) || u && y(i[v]) && !b(i) && ((h = i[u]) && (i[u] = null), k.event.triggered = v, t.isPropagationStopped() && f.addEventListener(v, we), i[v](), t.isPropagationStopped() && f.removeEventListener(v, we), k.event.triggered = void 0, h && (i[u] = h)), t.result
          }
        }, simulate: function (t, e, i) {
          var s = k.extend(new k.Event, i, {type: t, isSimulated: !0});
          k.event.trigger(s, null, e)
        }
      }), k.fn.extend({
        trigger: function (t, e) {
          return this.each(function () {
            k.event.trigger(t, e, this)
          })
        }, triggerHandler: function (t, e) {
          var i = this[0];
          if (i) return k.event.trigger(t, e, i, !0)
        }
      }), _.focusin || k.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
          k.event.simulate(e, t.target, k.event.fix(t))
        };
        k.event.special[e] = {
          setup: function () {
            var s = this.ownerDocument || this, n = J.access(s, e);
            n || s.addEventListener(t, i, !0), J.access(s, e, (n || 0) + 1)
          }, teardown: function () {
            var s = this.ownerDocument || this, n = J.access(s, e) - 1;
            n ? J.access(s, e, n) : (s.removeEventListener(t, i, !0), J.remove(s, e))
          }
        }
      });
      var xe = n.location, Ce = Date.now(), ke = /\?/;
      k.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
          e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
      };
      var De = /\[\]$/, Te = /\r?\n/g, Se = /^(?:submit|button|image|reset|file)$/i,
        Ie = /^(?:input|select|textarea|keygen)/i;

      function Pe(t, e, i, n) {
        var o;
        if (Array.isArray(e)) k.each(e, function (e, o) {
          i || De.test(t) ? n(t, o) : Pe(t + "[" + ("object" === s(o) && null != o ? e : "") + "]", o, i, n)
        }); else if (i || "object" !== C(e)) n(t, e); else for (o in e) Pe(t + "[" + o + "]", e[o], i, n)
      }

      k.param = function (t, e) {
        var i, s = [], n = function (t, e) {
          var i = y(e) ? e() : e;
          s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, function () {
          n(this.name, this.value)
        }); else for (i in t) Pe(i, t[i], e, n);
        return s.join("&")
      }, k.fn.extend({
        serialize: function () {
          return k.param(this.serializeArray())
        }, serializeArray: function () {
          return this.map(function () {
            var t = k.prop(this, "elements");
            return t ? k.makeArray(t) : this
          }).filter(function () {
            var t = this.type;
            return this.name && !k(this).is(":disabled") && Ie.test(this.nodeName) && !Se.test(t) && (this.checked || !pt.test(t))
          }).map(function (t, e) {
            var i = k(this).val();
            return null == i ? null : Array.isArray(i) ? k.map(i, function (t) {
              return {name: e.name, value: t.replace(Te, "\r\n")}
            }) : {name: e.name, value: i.replace(Te, "\r\n")}
          }).get()
        }
      });
      var Me = /%20/g, Ee = /#.*$/, Ae = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)$/gm, ze = /^(?:GET|HEAD)$/,
        Oe = /^\/\//, Ne = {}, je = {}, We = "*/".concat("*"), Le = a.createElement("a");

      function Re(t) {
        return function (e, i) {
          "string" != typeof e && (i = e, e = "*");
          var s, n = 0, o = e.toLowerCase().match(L) || [];
          if (y(i)) for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
        }
      }

      function Fe(t, e, i, s) {
        var n = {}, o = t === je;

        function r(a) {
          var l;
          return n[a] = !0, k.each(t[a] || [], function (t, a) {
            var h = a(e, i, s);
            return "string" != typeof h || o || n[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
          }), l
        }

        return r(e.dataTypes[0]) || !n["*"] && r("*")
      }

      function Be(t, e) {
        var i, s, n = k.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
        return s && k.extend(!0, t, s), t
      }

      Le.href = xe.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: xe.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": We,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
          responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
          converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
          flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
          return e ? Be(Be(t, k.ajaxSettings), e) : Be(k.ajaxSettings, t)
        },
        ajaxPrefilter: Re(Ne),
        ajaxTransport: Re(je),
        ajax: function (t, e) {
          "object" === s(t) && (e = t, t = void 0), e = e || {};
          var i, o, r, l, h, c, u, d, p, f, g = k.ajaxSetup({}, e), m = g.context || g,
            v = g.context && (m.nodeType || m.jquery) ? k(m) : k.event, _ = k.Deferred(),
            y = k.Callbacks("once memory"), b = g.statusCode || {}, w = {}, x = {}, C = "canceled", D = {
              readyState: 0, getResponseHeader: function (t) {
                var e;
                if (u) {
                  if (!l) for (l = {}; e = He.exec(r);) l[e[1].toLowerCase()] = e[2];
                  e = l[t.toLowerCase()]
                }
                return null == e ? null : e
              }, getAllResponseHeaders: function () {
                return u ? r : null
              }, setRequestHeader: function (t, e) {
                return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
              }, overrideMimeType: function (t) {
                return null == u && (g.mimeType = t), this
              }, statusCode: function (t) {
                var e;
                if (t) if (u) D.always(t[D.status]); else for (e in t) b[e] = [b[e], t[e]];
                return this
              }, abort: function (t) {
                var e = t || C;
                return i && i.abort(e), T(0, e), this
              }
            };
          if (_.promise(D), g.url = ((t || g.url || xe.href) + "").replace(Oe, xe.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
            c = a.createElement("a");
            try {
              c.href = g.url, c.href = c.href, g.crossDomain = Le.protocol + "//" + Le.host != c.protocol + "//" + c.host
            } catch (t) {
              g.crossDomain = !0
            }
          }
          if (g.data && g.processData && "string" != typeof g.data && (g.data = k.param(g.data, g.traditional)), Fe(Ne, g, e, D), u) return D;
          for (p in(d = k.event && g.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ze.test(g.type), o = g.url.replace(Ee, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Me, "+")) : (f = g.url.slice(o.length), g.data && (g.processData || "string" == typeof g.data) && (o += (ke.test(o) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (o = o.replace(Ae, "$1"), f = (ke.test(o) ? "&" : "?") + "_=" + Ce++ + f), g.url = o + f), g.ifModified && (k.lastModified[o] && D.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && D.setRequestHeader("If-None-Match", k.etag[o])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && D.setRequestHeader("Content-Type", g.contentType), D.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + We + "; q=0.01" : "") : g.accepts["*"]), g.headers) D.setRequestHeader(p, g.headers[p]);
          if (g.beforeSend && (!1 === g.beforeSend.call(m, D, g) || u)) return D.abort();
          if (C = "abort", y.add(g.complete), D.done(g.success), D.fail(g.error), i = Fe(je, g, e, D)) {
            if (D.readyState = 1, d && v.trigger("ajaxSend", [D, g]), u) return D;
            g.async && g.timeout > 0 && (h = n.setTimeout(function () {
              D.abort("timeout")
            }, g.timeout));
            try {
              u = !1, i.send(w, T)
            } catch (t) {
              if (u) throw t;
              T(-1, t)
            }
          } else T(-1, "No Transport");

          function T(t, e, s, a) {
            var l, c, p, f, w, x = e;
            u || (u = !0, h && n.clearTimeout(h), i = void 0, r = a || "", D.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, s && (f = function (t, e, i) {
              for (var s, n, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
              if (s) for (n in a) if (a[n] && a[n].test(s)) {
                l.unshift(n);
                break
              }
              if (l[0] in i) o = l[0]; else {
                for (n in i) {
                  if (!l[0] || t.converters[n + " " + l[0]]) {
                    o = n;
                    break
                  }
                  r || (r = n)
                }
                o = o || r
              }
              if (o) return o !== l[0] && l.unshift(o), i[o]
            }(g, D, s)), f = function (t, e, i, s) {
              var n, o, r, a, l, h = {}, c = t.dataTypes.slice();
              if (c[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
              for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                if (!(r = h[l + " " + o] || h["* " + o])) for (n in h) if ((a = n.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                  !0 === r ? r = h[n] : !0 !== h[n] && (o = a[0], c.unshift(a[1]));
                  break
                }
                if (!0 !== r) if (r && t.throws) e = r(e); else try {
                  e = r(e)
                } catch (t) {
                  return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o}
                }
              }
              return {state: "success", data: e}
            }(g, f, D, l), l ? (g.ifModified && ((w = D.getResponseHeader("Last-Modified")) && (k.lastModified[o] = w), (w = D.getResponseHeader("etag")) && (k.etag[o] = w)), 204 === t || "HEAD" === g.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = f.state, c = f.data, l = !(p = f.error))) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), D.status = t, D.statusText = (e || x) + "", l ? _.resolveWith(m, [c, x, D]) : _.rejectWith(m, [D, x, p]), D.statusCode(b), b = void 0, d && v.trigger(l ? "ajaxSuccess" : "ajaxError", [D, g, l ? c : p]), y.fireWith(m, [D, x]), d && (v.trigger("ajaxComplete", [D, g]), --k.active || k.event.trigger("ajaxStop")))
          }

          return D
        },
        getJSON: function (t, e, i) {
          return k.get(t, e, i, "json")
        },
        getScript: function (t, e) {
          return k.get(t, void 0, e, "script")
        }
      }), k.each(["get", "post"], function (t, e) {
        k[e] = function (t, i, s, n) {
          return y(i) && (n = n || s, s = i, i = void 0), k.ajax(k.extend({
            url: t,
            type: e,
            dataType: n,
            data: i,
            success: s
          }, k.isPlainObject(t) && t))
        }
      }), k._evalUrl = function (t) {
        return k.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
      }, k.fn.extend({
        wrapAll: function (t) {
          var e;
          return this[0] && (y(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
            return t
          }).append(this)), this
        }, wrapInner: function (t) {
          return y(t) ? this.each(function (e) {
            k(this).wrapInner(t.call(this, e))
          }) : this.each(function () {
            var e = k(this), i = e.contents();
            i.length ? i.wrapAll(t) : e.append(t)
          })
        }, wrap: function (t) {
          var e = y(t);
          return this.each(function (i) {
            k(this).wrapAll(e ? t.call(this, i) : t)
          })
        }, unwrap: function (t) {
          return this.parent(t).not("body").each(function () {
            k(this).replaceWith(this.childNodes)
          }), this
        }
      }), k.expr.pseudos.hidden = function (t) {
        return !k.expr.pseudos.visible(t)
      }, k.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
      }, k.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest
        } catch (t) {
        }
      };
      var qe = {0: 200, 1223: 204}, $e = k.ajaxSettings.xhr();
      _.cors = !!$e && "withCredentials" in $e, _.ajax = $e = !!$e, k.ajaxTransport(function (t) {
        var e, i;
        if (_.cors || $e && !t.crossDomain) return {
          send: function (s, o) {
            var r, a = t.xhr();
            if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) a[r] = t.xhrFields[r];
            for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
            e = function (t) {
              return function () {
                e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
              }
            }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
              4 === a.readyState && n.setTimeout(function () {
                e && i()
              })
            }, e = e("abort");
            try {
              a.send(t.hasContent && t.data || null)
            } catch (t) {
              if (e) throw t
            }
          }, abort: function () {
            e && e()
          }
        }
      }), k.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
      }), k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
          "text script": function (t) {
            return k.globalEval(t), t
          }
        }
      }), k.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
      }), k.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain) return {
          send: function (s, n) {
            e = k("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
              e.remove(), i = null, t && n("error" === t.type ? 404 : 200, t.type)
            }), a.head.appendChild(e[0])
          }, abort: function () {
            i && i()
          }
        }
      });
      var Ye, Ue = [], Ve = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
          var t = Ue.pop() || k.expando + "_" + Ce++;
          return this[t] = !0, t
        }
      }), k.ajaxPrefilter("json jsonp", function (t, e, i) {
        var s, o, r,
          a = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ve, "$1" + s) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
          return r || k.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = n[s], n[s] = function () {
          r = arguments
        }, i.always(function () {
          void 0 === o ? k(n).removeProp(s) : n[s] = o, t[s] && (t.jsonpCallback = e.jsonpCallback, Ue.push(s)), r && y(o) && o(r[0]), r = o = void 0
        }), "script"
      }), _.createHTMLDocument = ((Ye = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ye.childNodes.length), k.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (_.createHTMLDocument ? ((s = (e = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, e.head.appendChild(s)) : e = a), o = !i && [], (n = A.exec(t)) ? [e.createElement(n[1])] : (n = xt([t], e, o), o && o.length && k(o).remove(), k.merge([], n.childNodes)));
        var s, n, o
      }, k.fn.load = function (t, e, i) {
        var n, o, r, a = this, l = t.indexOf(" ");
        return l > -1 && (n = me(t.slice(l)), t = t.slice(0, l)), y(e) ? (i = e, e = void 0) : e && "object" === s(e) && (o = "POST"), a.length > 0 && k.ajax({
          url: t,
          type: o || "GET",
          dataType: "html",
          data: e
        }).done(function (t) {
          r = arguments, a.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
          a.each(function () {
            i.apply(this, r || [t.responseText, e, t])
          })
        }), this
      }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        k.fn[e] = function (t) {
          return this.on(e, t)
        }
      }), k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
          return t === e.elem
        }).length
      }, k.offset = {
        setOffset: function (t, e, i) {
          var s, n, o, r, a, l, h = k.css(t, "position"), c = k(t), u = {};
          "static" === h && (t.style.position = "relative"), a = c.offset(), o = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (r = (s = c.position()).top, n = s.left) : (r = parseFloat(o) || 0, n = parseFloat(l) || 0), y(e) && (e = e.call(t, i, k.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + n), "using" in e ? e.using.call(t, u) : c.css(u)
        }
      }, k.fn.extend({
        offset: function (t) {
          if (arguments.length) return void 0 === t ? this : this.each(function (e) {
            k.offset.setOffset(this, t, e)
          });
          var e, i, s = this[0];
          return s ? s.getClientRects().length ? (e = s.getBoundingClientRect(), i = s.ownerDocument.defaultView, {
            top: e.top + i.pageYOffset,
            left: e.left + i.pageXOffset
          }) : {top: 0, left: 0} : void 0
        }, position: function () {
          if (this[0]) {
            var t, e, i, s = this[0], n = {top: 0, left: 0};
            if ("fixed" === k.css(s, "position")) e = s.getBoundingClientRect(); else {
              for (e = this.offset(), i = s.ownerDocument, t = s.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
              t && t !== s && 1 === t.nodeType && ((n = k(t).offset()).top += k.css(t, "borderTopWidth", !0), n.left += k.css(t, "borderLeftWidth", !0))
            }
            return {top: e.top - n.top - k.css(s, "marginTop", !0), left: e.left - n.left - k.css(s, "marginLeft", !0)}
          }
        }, offsetParent: function () {
          return this.map(function () {
            for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
            return t || Ct
          })
        }
      }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        k.fn[t] = function (s) {
          return U(this, function (t, s, n) {
            var o;
            if (b(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === n) return o ? o[e] : t[s];
            o ? o.scrollTo(i ? o.pageXOffset : n, i ? n : o.pageYOffset) : t[s] = n
          }, t, s, arguments.length)
        }
      }), k.each(["top", "left"], function (t, e) {
        k.cssHooks[e] = Yt(_.pixelPosition, function (t, i) {
          if (i) return i = $t(t, e), Ft.test(i) ? k(t).position()[e] + "px" : i
        })
      }), k.each({Height: "height", Width: "width"}, function (t, e) {
        k.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, s) {
          k.fn[s] = function (n, o) {
            var r = arguments.length && (i || "boolean" != typeof n),
              a = i || (!0 === n || !0 === o ? "margin" : "border");
            return U(this, function (e, i, n) {
              var o;
              return b(e) ? 0 === s.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? k.css(e, i, a) : k.style(e, i, n, a)
            }, e, r ? n : void 0, r)
          }
        })
      }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        k.fn[e] = function (t, i) {
          return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
      }), k.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t)
        }
      }), k.fn.extend({
        bind: function (t, e, i) {
          return this.on(t, null, e, i)
        }, unbind: function (t, e) {
          return this.off(t, null, e)
        }, delegate: function (t, e, i, s) {
          return this.on(e, t, i, s)
        }, undelegate: function (t, e, i) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
      }), k.proxy = function (t, e) {
        var i, s, n;
        if ("string" == typeof e && (i = t[e], e = t, t = i), y(t)) return s = h.call(arguments, 2), (n = function () {
          return t.apply(e || this, s.concat(h.call(arguments)))
        }).guid = t.guid = t.guid || k.guid++, n
      }, k.holdReady = function (t) {
        t ? k.readyWait++ : k.ready(!0)
      }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = E, k.isFunction = y, k.isWindow = b, k.camelCase = G, k.type = C, k.now = Date.now, k.isNumeric = function (t) {
        var e = k.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
      }, void 0 === (i = function () {
        return k
      }.apply(e, [])) || (t.exports = i);
      var Ke = n.jQuery, Xe = n.$;
      return k.noConflict = function (t) {
        return n.$ === k && (n.$ = Xe), t && n.jQuery === k && (n.jQuery = Ke), k
      }, o || (n.jQuery = n.$ = k), k
    })
  }).call(this, i(30)(t))
}, function (t, e, i) {
  var s, n, o;
  n = [i(0)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui = t.ui || {}, t.ui.version = "1.12.1"
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o = {}, r = (s = function () {
    return window && document && document.all && !window.atob
  }, function () {
    return void 0 === n && (n = s.apply(this, arguments)), n
  }), a = function (t) {
    var e = {};
    return function (t, i) {
      if ("function" == typeof t) return t();
      if (void 0 === e[t]) {
        var s = function (t, e) {
          return e ? e.querySelector(t) : document.querySelector(t)
        }.call(this, t, i);
        if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) try {
          s = s.contentDocument.head
        } catch (t) {
          s = null
        }
        e[t] = s
      }
      return e[t]
    }
  }(), l = null, h = 0, c = [], u = i(33);

  function d(t, e) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i], n = o[s.id];
      if (n) {
        n.refs++;
        for (var r = 0; r < n.parts.length; r++) n.parts[r](s.parts[r]);
        for (; r < s.parts.length; r++) n.parts.push(_(s.parts[r], e))
      } else {
        var a = [];
        for (r = 0; r < s.parts.length; r++) a.push(_(s.parts[r], e));
        o[s.id] = {id: s.id, refs: 1, parts: a}
      }
    }
  }

  function p(t, e) {
    for (var i = [], s = {}, n = 0; n < t.length; n++) {
      var o = t[n], r = e.base ? o[0] + e.base : o[0], a = {css: o[1], media: o[2], sourceMap: o[3]};
      s[r] ? s[r].parts.push(a) : i.push(s[r] = {id: r, parts: [a]})
    }
    return i
  }

  function f(t, e) {
    var i = a(t.insertInto);
    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var s = c[c.length - 1];
    if ("top" === t.insertAt) s ? s.nextSibling ? i.insertBefore(e, s.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), c.push(e); else if ("bottom" === t.insertAt) i.appendChild(e); else {
      if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var n = a(t.insertAt.before, i);
      i.insertBefore(e, n)
    }
  }

  function g(t) {
    if (null === t.parentNode) return !1;
    t.parentNode.removeChild(t);
    var e = c.indexOf(t);
    e >= 0 && c.splice(e, 1)
  }

  function m(t) {
    var e = document.createElement("style");
    if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
      var s = function () {
        0;
        return i.nc
      }();
      s && (t.attrs.nonce = s)
    }
    return v(e, t.attrs), f(t, e), e
  }

  function v(t, e) {
    Object.keys(e).forEach(function (i) {
      t.setAttribute(i, e[i])
    })
  }

  function _(t, e) {
    var i, s, n, o;
    if (e.transform && t.css) {
      if (!(o = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {
      };
      t.css = o
    }
    if (e.singleton) {
      var r = h++;
      i = l || (l = m(e)), s = w.bind(null, i, r, !1), n = w.bind(null, i, r, !0)
    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function (t) {
      var e = document.createElement("link");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), f(t, e), e
    }(e), s = function (t, e, i) {
      var s = i.css, n = i.sourceMap, o = void 0 === e.convertToAbsoluteUrls && n;
      (e.convertToAbsoluteUrls || o) && (s = u(s));
      n && (s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
      var r = new Blob([s], {type: "text/css"}), a = t.href;
      t.href = URL.createObjectURL(r), a && URL.revokeObjectURL(a)
    }.bind(null, i, e), n = function () {
      g(i), i.href && URL.revokeObjectURL(i.href)
    }) : (i = m(e), s = function (t, e) {
      var i = e.css, s = e.media;
      s && t.setAttribute("media", s);
      if (t.styleSheet) t.styleSheet.cssText = i; else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i))
      }
    }.bind(null, i), n = function () {
      g(i)
    });
    return s(t), function (e) {
      if (e) {
        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
        s(t = e)
      } else n()
    }
  }

  t.exports = function (t, e) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = r()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
    var i = p(t, e);
    return d(i, e), function (t) {
      for (var s = [], n = 0; n < i.length; n++) {
        var r = i[n];
        (a = o[r.id]).refs--, s.push(a)
      }
      t && d(p(t, e), e);
      for (n = 0; n < s.length; n++) {
        var a;
        if (0 === (a = s[n]).refs) {
          for (var l = 0; l < a.parts.length; l++) a.parts[l]();
          delete o[a.id]
        }
      }
    }
  };
  var y, b = (y = [], function (t, e) {
    return y[t] = e, y.filter(Boolean).join("\n")
  });

  function w(t, e, i, s) {
    var n = i ? "" : s.css;
    if (t.styleSheet) t.styleSheet.cssText = b(e, n); else {
      var o = document.createTextNode(n), r = t.childNodes;
      r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(o, r[e]) : t.appendChild(o)
    }
  }
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    var e, i = 0, s = Array.prototype.slice;
    return t.cleanData = (e = t.cleanData, function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++) try {
        (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
      } catch (t) {
      }
      e(i)
    }), t.widget = function (e, i, s) {
      var n, o, r, a = {}, l = e.split(".")[0], h = l + "-" + (e = e.split(".")[1]);
      return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
        return !!t.data(e, h)
      }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
        if (!this._createWidget) return new o(t, e);
        arguments.length && this._createWidget(t, e)
      }, t.extend(o, n, {
        version: s.version,
        _proto: t.extend({}, s),
        _childConstructors: []
      }), (r = new i).options = t.widget.extend({}, r.options), t.each(s, function (e, s) {
        t.isFunction(s) ? a[e] = function () {
          function t() {
            return i.prototype[e].apply(this, arguments)
          }

          function n(t) {
            return i.prototype[e].apply(this, t)
          }

          return function () {
            var e, i = this._super, o = this._superApply;
            return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
          }
        }() : a[e] = s
      }), o.prototype = t.widget.extend(r, {widgetEventPrefix: n && r.widgetEventPrefix || e}, a, {
        constructor: o,
        namespace: l,
        widgetName: e,
        widgetFullName: h
      }), n ? (t.each(n._childConstructors, function (e, i) {
        var s = i.prototype;
        t.widget(s.namespace + "." + s.widgetName, o, i._proto)
      }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function (e) {
      for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; r < a; r++) for (i in o[r]) n = o[r][i], o[r].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
      return e
    }, t.widget.bridge = function (e, i) {
      var n = i.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var r = "string" == typeof o, a = s.call(arguments, 1), l = this;
        return r ? this.length || "instance" !== o ? this.each(function () {
          var i, s = t.data(this, n);
          return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, a)) !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
        }) : l = void 0 : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function () {
          var e = t.data(this, n);
          e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this))
        })), l
      }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {classes: {}, disabled: !1, create: null},
      _createWidget: function (e, s) {
        s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function (t) {
            t.target === s && this.destroy()
          }
        }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: function () {
        return {}
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(), t.each(this.classesElementLookup, function (t, i) {
          e._removeClass(i, t)
        }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
      },
      _destroy: t.noop,
      widget: function () {
        return this.element
      },
      option: function (e, i) {
        var s, n, o, r = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e) if (r = {}, s = e.split("."), e = s.shift(), s.length) {
          for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
          if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
          n[e] = i
        } else {
          if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
          r[e] = i
        }
        return this._setOptions(r), this
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this
      },
      _setOption: function (t, e) {
        return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })))
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
      },
      enable: function () {
        return this._setOptions({disabled: !1})
      },
      disable: function () {
        return this._setOptions({disabled: !0})
      },
      _classes: function (e) {
        var i = [], s = this;

        function n(n, o) {
          var r, a;
          for (a = 0; a < n.length; a++) r = s.classesElementLookup[n[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), s.classesElementLookup[n[a]] = r, i.push(n[a]), o && e.classes[n[a]] && i.push(e.classes[n[a]])
        }

        return e = t.extend({
          element: this.element,
          classes: this.options.classes || {}
        }, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
        })
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1)
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function (t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s};
        return o.element.toggleClass(this._classes(o), s), this
      },
      _on: function (e, i, s) {
        var n, o = this;
        "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, r) {
          function a() {
            if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments)
          }

          "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
          var l = s.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + o.eventNamespace, c = l[2];
          c ? n.on(h, c, a) : i.on(h, a)
        })
      },
      _off: function (e, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments)
        }, e || 0)
      },
      _hoverable: function (e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
          mouseenter: function (e) {
            this._addClass(t(e.currentTarget), null, "ui-state-hover")
          }, mouseleave: function (e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
          }
        })
      },
      _focusable: function (e) {
        this.focusable = this.focusable.add(e), this._on(e, {
          focusin: function (e) {
            this._addClass(t(e.currentTarget), null, "ui-state-focus")
          }, focusout: function (e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
          }
        })
      },
      _trigger: function (e, i, s) {
        var n, o, r = this.options[e];
        if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
        return this.element.trigger(i, s), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
      }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, n, o) {
        var r;
        "string" == typeof n && (n = {effect: n});
        var a = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
        "number" == typeof (n = n || {}) && (n = {duration: n}), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[a] ? s[e](n) : a !== e && s[a] ? s[a](n.duration, n.easing, o) : s.queue(function (i) {
          t(this)[e](), o && o.call(s[0]), i()
        })
      }
    }), t.widget
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  /*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    var e, i = "ui-effects-animated", s = t;
    return t.effects = {effect: {}},
      /*!
   * jQuery Color Animations v2.1.2
   * https://github.com/jquery/jquery-color
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * Date: Wed Jan 16 08:47:09 2013 -0600
   */
      function (t, e) {
        var i, s = /^([\-+])=\s*(\d+\.?\d*)/, n = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [t[1], t[2], t[3], t[4]]
            }
          }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
          }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
              return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
          }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
              return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
          }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (t) {
              return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
          }], o = t.Color = function (e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
          }, r = {
            rgba: {
              props: {
                red: {idx: 0, type: "byte"},
                green: {idx: 1, type: "byte"},
                blue: {idx: 2, type: "byte"}
              }
            },
            hsla: {
              props: {
                hue: {idx: 0, type: "degrees"},
                saturation: {idx: 1, type: "percent"},
                lightness: {idx: 2, type: "percent"}
              }
            }
          }, a = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, l = o.support = {},
          h = t("<p>")[0], c = t.each;

        function u(t, e, i) {
          var s = a[e.type] || {};
          return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
        }

        function d(e) {
          var s = o(), a = s._rgba = [];
          return e = e.toLowerCase(), c(n, function (t, i) {
            var n, o = i.re.exec(e), l = o && i.parse(o), h = i.space || "rgba";
            if (l) return n = s[h](l), s[r[h].cache] = n[r[h].cache], a = s._rgba = n._rgba, !1
          }), a.length ? ("0,0,0,0" === a.join() && t.extend(a, i.transparent), s) : i[e]
        }

        function p(t, e, i) {
          return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        h.style.cssText = "background-color:rgba(1,1,1,.5)", l.rgba = h.style.backgroundColor.indexOf("rgba") > -1, c(r, function (t, e) {
          e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), o.fn = t.extend(o.prototype, {
          parse: function (e, s, n, a) {
            if (void 0 === e) return this._rgba = [null, null, null, null], this;
            (e.jquery || e.nodeType) && (e = t(e).css(s), s = void 0);
            var l = this, h = t.type(e), p = this._rgba = [];
            return void 0 !== s && (e = [e, s, n, a], h = "array"), "string" === h ? this.parse(d(e) || i._default) : "array" === h ? (c(r.rgba.props, function (t, i) {
              p[i.idx] = u(e[i.idx], i)
            }), this) : "object" === h ? (c(r, e instanceof o ? function (t, i) {
              e[i.cache] && (l[i.cache] = e[i.cache].slice())
            } : function (i, s) {
              var n = s.cache;
              c(s.props, function (t, i) {
                if (!l[n] && s.to) {
                  if ("alpha" === t || null == e[t]) return;
                  l[n] = s.to(l._rgba)
                }
                l[n][i.idx] = u(e[t], i, !0)
              }), l[n] && t.inArray(null, l[n].slice(0, 3)) < 0 && (l[n][3] = 1, s.from && (l._rgba = s.from(l[n])))
            }), this) : void 0
          }, is: function (t) {
            var e = o(t), i = !0, s = this;
            return c(r, function (t, n) {
              var o, r = e[n.cache];
              return r && (o = s[n.cache] || n.to && n.to(s._rgba) || [], c(n.props, function (t, e) {
                if (null != r[e.idx]) return i = r[e.idx] === o[e.idx]
              })), i
            }), i
          }, _space: function () {
            var t = [], e = this;
            return c(r, function (i, s) {
              e[s.cache] && t.push(i)
            }), t.pop()
          }, transition: function (t, e) {
            var i = o(t), s = i._space(), n = r[s], l = 0 === this.alpha() ? o("transparent") : this,
              h = l[n.cache] || n.to(l._rgba), d = h.slice();
            return i = i[n.cache], c(n.props, function (t, s) {
              var n = s.idx, o = h[n], r = i[n], l = a[s.type] || {};
              null !== r && (null === o ? d[n] = r : (l.mod && (r - o > l.mod / 2 ? o += l.mod : o - r > l.mod / 2 && (o -= l.mod)), d[n] = u((r - o) * e + o, s)))
            }), this[s](d)
          }, blend: function (e) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(), s = i.pop(), n = o(e)._rgba;
            return o(t.map(i, function (t, e) {
              return (1 - s) * n[e] + s * t
            }))
          }, toRgbaString: function () {
            var e = "rgba(", i = t.map(this._rgba, function (t, e) {
              return null == t ? e > 2 ? 1 : 0 : t
            });
            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
          }, toHslaString: function () {
            var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
              return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
            });
            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
          }, toHexString: function (e) {
            var i = this._rgba.slice(), s = i.pop();
            return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
              return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
          }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
          }
        }), o.fn.parse.prototype = o.fn, r.hsla.to = function (t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(s, n, o),
            l = Math.min(s, n, o), h = a - l, c = a + l, u = .5 * c;
          return e = l === a ? 0 : s === a ? 60 * (n - o) / h + 360 : n === a ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : u <= .5 ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
        }, r.hsla.from = function (t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e = t[0] / 360, i = t[1], s = t[2], n = t[3], o = s <= .5 ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
          return [Math.round(255 * p(r, o, e + 1 / 3)), Math.round(255 * p(r, o, e)), Math.round(255 * p(r, o, e - 1 / 3)), n]
        }, c(r, function (e, i) {
          var n = i.props, r = i.cache, a = i.to, l = i.from;
          o.fn[e] = function (e) {
            if (a && !this[r] && (this[r] = a(this._rgba)), void 0 === e) return this[r].slice();
            var i, s = t.type(e), h = "array" === s || "object" === s ? e : arguments, d = this[r].slice();
            return c(n, function (t, e) {
              var i = h["object" === s ? t : e.idx];
              null == i && (i = d[e.idx]), d[e.idx] = u(i, e)
            }), l ? ((i = o(l(d)))[r] = d, i) : o(d)
          }, c(n, function (i, n) {
            o.fn[i] || (o.fn[i] = function (o) {
              var r, a = t.type(o), l = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e, h = this[l](), c = h[n.idx];
              return "undefined" === a ? c : ("function" === a && (o = o.call(this, c), a = t.type(o)), null == o && n.empty ? this : ("string" === a && (r = s.exec(o)) && (o = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1)), h[n.idx] = o, this[l](h)))
            })
          })
        }), o.hook = function (e) {
          var i = e.split(" ");
          c(i, function (e, i) {
            t.cssHooks[i] = {
              set: function (e, s) {
                var n, r, a = "";
                if ("transparent" !== s && ("string" !== t.type(s) || (n = d(s)))) {
                  if (s = o(n || s), !l.rgba && 1 !== s._rgba[3]) {
                    for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style;) try {
                      a = t.css(r, "backgroundColor"), r = r.parentNode
                    } catch (t) {
                    }
                    s = s.blend(a && "transparent" !== a ? a : "_default")
                  }
                  s = s.toRgbaString()
                }
                try {
                  e.style[i] = s
                } catch (t) {
                }
              }
            }, t.fx.step[i] = function (e) {
              e.colorInit || (e.start = o(e.elem, i), e.end = o(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
            }
          })
        }, o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
          expand: function (t) {
            var e = {};
            return c(["Top", "Right", "Bottom", "Left"], function (i, s) {
              e["border" + s + "Color"] = t
            }), e
          }
        }, i = t.Color.names = {
          aqua: "#00ffff",
          black: "#000000",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          gray: "#808080",
          green: "#008000",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          red: "#ff0000",
          silver: "#c0c0c0",
          teal: "#008080",
          white: "#ffffff",
          yellow: "#ffff00",
          transparent: [null, null, null, 0],
          _default: "#ffffff"
        }
      }(s), function () {
      var e, i = ["add", "remove", "toggle"], n = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
      };

      function o(e) {
        var i, s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
        if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
        return o
      }

      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
        t.fx.step[i] = function (t) {
          ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (s.style(t.elem, i, t.end), t.setAttr = !0)
        }
      }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }), t.effects.animateClass = function (e, s, r, a) {
        var l = t.speed(s, r, a);
        return this.queue(function () {
          var s, r = t(this), a = r.attr("class") || "", h = l.children ? r.find("*").addBack() : r;
          h = h.map(function () {
            return {el: t(this), start: o(this)}
          }), (s = function () {
            t.each(i, function (t, i) {
              e[i] && r[i + "Class"](e[i])
            })
          })(), h = h.map(function () {
            return this.end = o(this.el[0]), this.diff = function (e, i) {
              var s, o, r = {};
              for (s in i) o = i[s], e[s] !== o && (n[s] || !t.fx.step[s] && isNaN(parseFloat(o)) || (r[s] = o));
              return r
            }(this.start, this.end), this
          }), r.attr("class", a), h = h.map(function () {
            var e = this, i = t.Deferred(), s = t.extend({}, l, {
              queue: !1, complete: function () {
                i.resolve(e)
              }
            });
            return this.el.animate(this.diff, s), i.promise()
          }), t.when.apply(t, h.get()).done(function () {
            s(), t.each(arguments, function () {
              var e = this.el;
              t.each(this.diff, function (t) {
                e.css(t, "")
              })
            }), l.complete.call(r[0])
          })
        })
      }, t.fn.extend({
        addClass: (e = t.fn.addClass, function (i, s, n, o) {
          return s ? t.effects.animateClass.call(this, {add: i}, s, n, o) : e.apply(this, arguments)
        }), removeClass: function (e) {
          return function (i, s, n, o) {
            return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, o) : e.apply(this, arguments)
          }
        }(t.fn.removeClass), toggleClass: function (e) {
          return function (i, s, n, o, r) {
            return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, s, n, o)
          }
        }(t.fn.toggleClass), switchClass: function (e, i, s, n, o) {
          return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, o)
        }
      })
    }(), function () {
      var e;

      function s(e, i, s, n) {
        return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
      }

      function n(e) {
        return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] || !!t.isFunction(e) || "object" === r(e) && !e.effect
      }

      function o(t, e) {
        var i = e.outerWidth(), s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
        return {
          top: parseFloat(n[1]) || 0,
          right: "auto" === n[2] ? i : parseFloat(n[2]),
          bottom: "auto" === n[3] ? s : parseFloat(n[3]),
          left: parseFloat(n[4]) || 0
        }
      }

      t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (e = t.expr.filters.animated, function (s) {
        return !!t(s).data(i) || e(s)
      })), !1 !== t.uiBackCompat && t.extend(t.effects, {
        save: function (t, e) {
          for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]])
        }, restore: function (t, e) {
          for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data("ui-effects-" + e[s]), t.css(e[s], i))
        }, setMode: function (t, e) {
          return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
        }, createWrapper: function (e) {
          if (e.parent().is(".ui-effects-wrapper")) return e.parent();
          var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float")},
            s = t("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }), n = {width: e.width(), height: e.height()}, o = document.activeElement;
          try {
            o.id
          } catch (t) {
            o = document.body
          }
          return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
            position: e.css("position"),
            zIndex: e.css("z-index")
          }), t.each(["top", "left", "bottom", "right"], function (t, s) {
            i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
          }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(n), s.css(i).show()
        }, removeWrapper: function (e) {
          var i = document.activeElement;
          return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
        }
      }), t.extend(t.effects, {
        version: "1.12.1", define: function (e, i, s) {
          return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
        }, scaledDimensions: function (t, e, i) {
          if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
          var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
          return {
            height: t.height() * n,
            width: t.width() * s,
            outerHeight: t.outerHeight() * n,
            outerWidth: t.outerWidth() * s
          }
        }, clipToBox: function (t) {
          return {
            width: t.clip.right - t.clip.left,
            height: t.clip.bottom - t.clip.top,
            left: t.clip.left,
            top: t.clip.top
          }
        }, unshift: function (t, e, i) {
          var s = t.queue();
          e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
        }, saveStyle: function (t) {
          t.data("ui-effects-style", t[0].style.cssText)
        }, restoreStyle: function (t) {
          t[0].style.cssText = t.data("ui-effects-style") || "", t.removeData("ui-effects-style")
        }, mode: function (t, e) {
          var i = t.is(":hidden");
          return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
        }, getBaseline: function (t, e) {
          var i, s;
          switch (t[0]) {
            case"top":
              i = 0;
              break;
            case"middle":
              i = .5;
              break;
            case"bottom":
              i = 1;
              break;
            default:
              i = t[0] / e.height
          }
          switch (t[1]) {
            case"left":
              s = 0;
              break;
            case"center":
              s = .5;
              break;
            case"right":
              s = 1;
              break;
            default:
              s = t[1] / e.width
          }
          return {x: s, y: i}
        }, createPlaceholder: function (e) {
          var i, s = e.css("position"), n = e.position();
          return e.css({
            marginTop: e.css("marginTop"),
            marginBottom: e.css("marginBottom"),
            marginLeft: e.css("marginLeft"),
            marginRight: e.css("marginRight")
          }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
            visibility: "hidden",
            marginTop: e.css("marginTop"),
            marginBottom: e.css("marginBottom"),
            marginLeft: e.css("marginLeft"),
            marginRight: e.css("marginRight"),
            float: e.css("float")
          }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data("ui-effects-placeholder", i)), e.css({
            position: s,
            left: n.left,
            top: n.top
          }), i
        }, removePlaceholder: function (t) {
          var e = "ui-effects-placeholder", i = t.data(e);
          i && (i.remove(), t.removeData(e))
        }, cleanUp: function (e) {
          t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
        }, setTransition: function (e, i, s, n) {
          return n = n || {}, t.each(i, function (t, i) {
            var o = e.cssUnit(i);
            o[0] > 0 && (n[i] = o[0] * s + o[1])
          }), n
        }
      }), t.fn.extend({
        effect: function () {
          var e = s.apply(this, arguments), n = t.effects.effect[e.effect], o = n.mode, r = e.queue, a = r || "fx",
            l = e.complete, h = e.mode, c = [], u = function (e) {
              var s = t(this), n = t.effects.mode(s, h) || o;
              s.data(i, !0), c.push(n), o && ("show" === n || n === o && "hide" === n) && s.show(), o && "none" === n || t.effects.saveStyle(s), t.isFunction(e) && e()
            };
          if (t.fx.off || !n) return h ? this[h](e.duration, l) : this.each(function () {
            l && l.call(this)
          });

          function d(s) {
            var r = t(this);

            function a() {
              t.isFunction(l) && l.call(r[0]), t.isFunction(s) && s()
            }

            e.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === e.mode ? (r[h](), a()) : n.call(r[0], e, function () {
              r.removeData(i), t.effects.cleanUp(r), "hide" === e.mode && r.hide(), a()
            }) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), a()) : n.call(r[0], e, a)
          }

          return !1 === r ? this.each(u).each(d) : this.queue(a, u).queue(a, d)
        }, show: function (t) {
          return function (e) {
            if (n(e)) return t.apply(this, arguments);
            var i = s.apply(this, arguments);
            return i.mode = "show", this.effect.call(this, i)
          }
        }(t.fn.show), hide: function (t) {
          return function (e) {
            if (n(e)) return t.apply(this, arguments);
            var i = s.apply(this, arguments);
            return i.mode = "hide", this.effect.call(this, i)
          }
        }(t.fn.hide), toggle: function (t) {
          return function (e) {
            if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
            var i = s.apply(this, arguments);
            return i.mode = "toggle", this.effect.call(this, i)
          }
        }(t.fn.toggle), cssUnit: function (e) {
          var i = this.css(e), s = [];
          return t.each(["em", "px", "%", "pt"], function (t, e) {
            i.indexOf(e) > 0 && (s = [parseFloat(i), e])
          }), s
        }, cssClip: function (t) {
          return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : o(this.css("clip"), this)
        }, transfer: function (e, i) {
          var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), r = t("body"), a = o ? r.scrollTop() : 0,
            l = o ? r.scrollLeft() : 0, h = n.offset(),
            c = {top: h.top - a, left: h.left - l, height: n.innerHeight(), width: n.innerWidth()}, u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
              top: u.top - a,
              left: u.left - l,
              height: s.innerHeight(),
              width: s.innerWidth(),
              position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function () {
              d.remove(), t.isFunction(i) && i()
            })
        }
      }), t.fx.step.clip = function (e) {
        e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = o(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
          top: e.pos * (e.end.top - e.start.top) + e.start.top,
          right: e.pos * (e.end.right - e.start.right) + e.start.right,
          bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
          left: e.pos * (e.end.left - e.start.left) + e.start.left
        })
      }
    }(), e = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
      e[i] = function (e) {
        return Math.pow(e, t + 2)
      }
    }), t.extend(e, {
      Sine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
      }, Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t)
      }, Elastic: function (t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
      }, Back: function (t) {
        return t * t * (3 * t - 2)
      }, Bounce: function (t) {
        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;) ;
        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
      }
    }), t.each(e, function (e, i) {
      t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
        return 1 - i(1 - t)
      }, t.easing["easeInOut" + e] = function (t) {
        return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
      }
    }), t.effects
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(21), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    var e = !1;
    return t(document).on("mouseup", function () {
      e = !1
    }), t.widget("ui.mouse", {
      version: "1.12.1",
      options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
      _mouseInit: function () {
        var e = this;
        this.element.on("mousedown." + this.widgetName, function (t) {
          return e._mouseDown(t)
        }).on("click." + this.widgetName, function (i) {
          if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
        }), this.started = !1
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function (i) {
        if (!e) {
          this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
          var s = this, n = 1 === i.which,
            o = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
          return !(n && !o && this._mouseCapture(i) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
            s.mouseDelayMet = !0
          }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), !this._mouseStarted) ? (i.preventDefault(), 0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
            return s._mouseMove(t)
          }, this._mouseUpDelegate = function (t) {
            return s._mouseUp(t)
          }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, 0)))
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
          if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e)
        }
        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
      },
      _mouseUp: function (i) {
        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, e = !1, i.preventDefault()
      },
      _mouseDistanceMet: function (t) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet
      },
      _mouseStart: function () {
      },
      _mouseDrag: function () {
      },
      _mouseStop: function () {
      },
      _mouseCapture: function () {
        return !0
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.fn.extend({
      uniqueId: (e = 0, function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e)
        })
      }), removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
        })
      }
    });
    var e
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return function () {
      var e, i = Math.max, s = Math.abs, n = /left|center|right/, o = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/,
        a = /^\w+/, l = /%$/, h = t.fn.position;

      function c(t, e, i) {
        return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
      }

      function u(e, i) {
        return parseInt(t.css(e, i), 10) || 0
      }

      t.position = {
        scrollbarWidth: function () {
          if (void 0 !== e) return e;
          var i, s,
            n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = n.children()[0];
          return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), i === (s = o.offsetWidth) && (s = n[0].clientWidth), n.remove(), e = i - s
        }, getScrollInfo: function (e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
          return {
            width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
            height: n ? t.position.scrollbarWidth() : 0
          }
        }, getWithinInfo: function (e) {
          var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: s || n ? {left: 0, top: 0} : t(e).offset(),
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight()
          }
        }
      }, t.fn.position = function (e) {
        if (!e || !e.of) return h.apply(this, arguments);
        e = t.extend({}, e);
        var l, d, p, f, g, m, v, _, y = t(e.of), b = t.position.getWithinInfo(e.within),
          w = t.position.getScrollInfo(b), x = (e.collision || "flip").split(" "), C = {};
        return m = 9 === (_ = (v = y)[0]).nodeType ? {
          width: v.width(),
          height: v.height(),
          offset: {top: 0, left: 0}
        } : t.isWindow(_) ? {
          width: v.width(),
          height: v.height(),
          offset: {top: v.scrollTop(), left: v.scrollLeft()}
        } : _.preventDefault ? {width: 0, height: 0, offset: {top: _.pageY, left: _.pageX}} : {
          width: v.outerWidth(),
          height: v.outerHeight(),
          offset: v.offset()
        }, y[0].preventDefault && (e.at = "left top"), d = m.width, p = m.height, f = m.offset, g = t.extend({}, f), t.each(["my", "at"], function () {
          var t, i, s = (e[this] || "").split(" ");
          1 === s.length && (s = n.test(s[0]) ? s.concat(["center"]) : o.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = n.test(s[0]) ? s[0] : "center", s[1] = o.test(s[1]) ? s[1] : "center", t = r.exec(s[0]), i = r.exec(s[1]), C[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [a.exec(s[0])[0], a.exec(s[1])[0]]
        }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? g.left += d : "center" === e.at[0] && (g.left += d / 2), "bottom" === e.at[1] ? g.top += p : "center" === e.at[1] && (g.top += p / 2), l = c(C.at, d, p), g.left += l[0], g.top += l[1], this.each(function () {
          var n, o, r = t(this), a = r.outerWidth(), h = r.outerHeight(), m = u(this, "marginLeft"),
            v = u(this, "marginTop"), _ = a + m + u(this, "marginRight") + w.width,
            k = h + v + u(this, "marginBottom") + w.height, D = t.extend({}, g),
            T = c(C.my, r.outerWidth(), r.outerHeight());
          "right" === e.my[0] ? D.left -= a : "center" === e.my[0] && (D.left -= a / 2), "bottom" === e.my[1] ? D.top -= h : "center" === e.my[1] && (D.top -= h / 2), D.left += T[0], D.top += T[1], n = {
            marginLeft: m,
            marginTop: v
          }, t.each(["left", "top"], function (i, s) {
            t.ui.position[x[i]] && t.ui.position[x[i]][s](D, {
              targetWidth: d,
              targetHeight: p,
              elemWidth: a,
              elemHeight: h,
              collisionPosition: n,
              collisionWidth: _,
              collisionHeight: k,
              offset: [l[0] + T[0], l[1] + T[1]],
              my: e.my,
              at: e.at,
              within: b,
              elem: r
            })
          }), e.using && (o = function (t) {
            var n = f.left - D.left, o = n + d - a, l = f.top - D.top, c = l + p - h, u = {
              target: {element: y, left: f.left, top: f.top, width: d, height: p},
              element: {element: r, left: D.left, top: D.top, width: a, height: h},
              horizontal: o < 0 ? "left" : n > 0 ? "right" : "center",
              vertical: c < 0 ? "top" : l > 0 ? "bottom" : "middle"
            };
            d < a && s(n + o) < d && (u.horizontal = "center"), p < h && s(l + c) < p && (u.vertical = "middle"), i(s(n), s(o)) > i(s(l), s(c)) ? u.important = "horizontal" : u.important = "vertical", e.using.call(this, t, u)
          }), r.offset(t.extend(D, {using: o}))
        })
      }, t.ui.position = {
        fit: {
          left: function (t, e) {
            var s, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, r = n.width,
              a = t.left - e.collisionPosition.marginLeft, l = o - a, h = a + e.collisionWidth - r - o;
            e.collisionWidth > r ? l > 0 && h <= 0 ? (s = t.left + l + e.collisionWidth - r - o, t.left += l - s) : t.left = h > 0 && l <= 0 ? o : l > h ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = i(t.left - a, t.left)
          }, top: function (t, e) {
            var s, n = e.within, o = n.isWindow ? n.scrollTop : n.offset.top, r = e.within.height,
              a = t.top - e.collisionPosition.marginTop, l = o - a, h = a + e.collisionHeight - r - o;
            e.collisionHeight > r ? l > 0 && h <= 0 ? (s = t.top + l + e.collisionHeight - r - o, t.top += l - s) : t.top = h > 0 && l <= 0 ? o : l > h ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = i(t.top - a, t.top)
          }
        }, flip: {
          left: function (t, e) {
            var i, n, o = e.within, r = o.offset.left + o.scrollLeft, a = o.width,
              l = o.isWindow ? o.scrollLeft : o.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l,
              u = h + e.collisionWidth - a - l,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
            c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - a - r) < 0 || i < s(c)) && (t.left += d + p + f) : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || s(n) < u) && (t.left += d + p + f)
          }, top: function (t, e) {
            var i, n, o = e.within, r = o.offset.top + o.scrollTop, a = o.height,
              l = o.isWindow ? o.scrollTop : o.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l,
              u = h + e.collisionHeight - a - l, d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
            c < 0 ? ((n = t.top + p + f + g + e.collisionHeight - a - r) < 0 || n < s(c)) && (t.top += p + f + g) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + g - l) > 0 || s(i) < u) && (t.top += p + f + g)
          }
        }, flipfit: {
          left: function () {
            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
          }, top: function () {
            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
          }
        }
      }
    }(), t.ui.position
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement
      } catch (i) {
        e = t.body
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.escapeSelector = (e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function (t) {
      return t.replace(e, "\\$1")
    });
    var e
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.extend(t.expr[":"], {
      data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
        return function (i) {
          return !!t.data(i, e)
        }
      }) : function (e, i, s) {
        return !!t.data(e, s[3])
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.focusable = function (e, i) {
      var s, n, o, r, a, l = e.nodeName.toLowerCase();
      return "area" === l ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && (o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !e.disabled) && (a = t(e).closest("fieldset")[0]) && (r = !a.disabled) : r = "a" === l && e.href || i, r && t(e).is(":visible") && function (t) {
        for (var e = t.css("visibility"); "inherit" === e;) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e
      }(t(e)))
    }, t.extend(t.expr[":"], {
      focusable: function (e) {
        return t.ui.focusable(e, null != t.attr(e, "tabindex"))
      }
    }), t.ui.focusable
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(39), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = t(this);
        setTimeout(function () {
          var i = e.data("ui-form-reset-instances");
          t.each(i, function () {
            this.refresh()
          })
        })
      }, _bindFormResetHandler: function () {
        if (this.form = this.element.form(), this.form.length) {
          var t = this.form.data("ui-form-reset-instances") || [];
          t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
        }
      }, _unbindFormResetHandler: function () {
        if (this.form.length) {
          var e = this.form.data("ui-form-reset-instances");
          e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
        }
      }
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(10)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.fn.labels = function () {
      var e, i, s, n, o;
      return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.fn.scrollParent = function (e) {
      var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function () {
          var e = t(this);
          return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }).eq(0);
      return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(6), i(11), i(22), i(9), i(23), i(15), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.draggable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
      },
      _destroy: function () {
        (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 || (this.handle = this._getHandle(e), !this.handle || (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), 0)))
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this);
          return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
        })
      },
      _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _blurActiveElement: function (e) {
        var i = t.ui.safeActiveElement(this.document[0]);
        t(e.target).closest(i).length || t.ui.safeBlur(i)
      },
      _mouseStart: function (e) {
        var i = this.options;
        return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
          return "fixed" === t(this).css("position")
        }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
      },
      _refreshOffsets: function (t) {
        this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
      },
      _mouseDrag: function (e, i) {
        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
          var s = this._uiHash();
          if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
          this.position = s.position
        }
        return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
      },
      _mouseStop: function (e) {
        var i = this, s = !1;
        return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
          !1 !== i._trigger("stop", e) && i._clear()
        }) : !1 !== this._trigger("stop", e) && this._clear(), !1
      },
      _mouseUp: function (e) {
        return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
      },
      cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {target: this.element[0]})) : this._clear(), this
      },
      _getHandle: function (e) {
        return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
      },
      _setHandleClassName: function () {
        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, "ui-draggable-handle")
      },
      _createHelper: function (e) {
        var i = this.options, s = t.isFunction(i.helper),
          n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
        return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
          left: +e[0],
          top: +e[1] || 0
        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0]
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(), i = this.document[0];
        return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
          top: 0,
          left: 0
        }), {
          top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
        }
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return {top: 0, left: 0};
        var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
        }
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0
        }
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
      },
      _setContainment: function () {
        var e, i, s, n = this.options, o = this.document[0];
        this.relativeContainer = null, n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode), (s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i)) : this.containment = n.containment : this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
        return {
          top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
          left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
        }
      },
      _generatePosition: function (t, e) {
        var i, s, n, o, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
        return a && this.offset.scroll || (this.offset.scroll = {
          top: this.scrollParent.scrollTop(),
          left: this.scrollParent.scrollLeft()
        }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1] : n, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
          top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
          left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
        }
      },
      _clear: function () {
        this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
      },
      _trigger: function (e, i, s) {
        return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs
        }
      }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, i, s) {
        var n = t.extend({}, i, {item: s.element});
        s.sortables = [], t(s.options.connectToSortable).each(function () {
          var i = t(this).sortable("instance");
          i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
        })
      }, stop: function (e, i, s) {
        var n = t.extend({}, i, {item: s.element});
        s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
          this.isOver ? (this.isOver = 0, s.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
            position: this.placeholder.css("position"),
            top: this.placeholder.css("top"),
            left: this.placeholder.css("left")
          }, this._mouseStop(e), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", e, n))
        })
      }, drag: function (e, i, s) {
        t.each(s.sortables, function () {
          var n = !1, o = this;
          o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
            return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
          })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
            return i.helper[0]
          }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
            this.refreshPositions()
          }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
            this.refreshPositions()
          }))
        })
      }
    }), t.ui.plugin.add("draggable", "cursor", {
      start: function (e, i, s) {
        var n = t("body"), o = s.options;
        n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
      }, stop: function (e, i, s) {
        var n = s.options;
        n._cursor && t("body").css("cursor", n._cursor)
      }
    }), t.ui.plugin.add("draggable", "opacity", {
      start: function (e, i, s) {
        var n = t(i.helper), o = s.options;
        n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
      }, stop: function (e, i, s) {
        var n = s.options;
        n._opacity && t(i.helper).css("opacity", n._opacity)
      }
    }), t.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
      }, drag: function (e, i, s) {
        var n = s.options, o = !1, r = s.scrollParentNotHidden[0], a = s.document[0];
        r !== a && "HTML" !== r.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + r.offsetHeight - e.pageY < n.scrollSensitivity ? r.scrollTop = o = r.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (r.scrollTop = o = r.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + r.offsetWidth - e.pageX < n.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(a).scrollTop() < n.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < n.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(a).scrollLeft() < n.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < n.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
      }
    }), t.ui.plugin.add("draggable", "snap", {
      start: function (e, i, s) {
        var n = s.options;
        s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
          var e = t(this), i = e.offset();
          this !== s.element[0] && s.snapElements.push({
            item: this,
            width: e.outerWidth(),
            height: e.outerHeight(),
            top: i.top,
            left: i.left
          })
        })
      }, drag: function (e, i, s) {
        var n, o, r, a, l, h, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left,
          v = m + s.helperProportions.width, _ = i.offset.top, y = _ + s.helperProportions.height;
        for (d = s.snapElements.length - 1; d >= 0; d--) h = (l = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width, u = (c = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height, v < l - g || m > h + g || y < c - g || _ > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[d].item})), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - y) <= g, o = Math.abs(u - _) <= g, r = Math.abs(l - v) <= g, a = Math.abs(h - m) <= g, n && (i.position.top = s._convertPositionTo("relative", {
          top: c - s.helperProportions.height,
          left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
          top: u,
          left: 0
        }).top), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l - s.helperProportions.width
        }).left), a && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h
        }).left)), p = n || o || r || a, "outer" !== f.snapMode && (n = Math.abs(c - _) <= g, o = Math.abs(u - y) <= g, r = Math.abs(l - m) <= g, a = Math.abs(h - v) <= g, n && (i.position.top = s._convertPositionTo("relative", {
          top: c,
          left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
          top: u - s.helperProportions.height,
          left: 0
        }).top), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l
        }).left), a && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h - s.helperProportions.width
        }).left)), !s.snapElements[d].snapping && (n || o || r || a || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[d].item})), s.snapElements[d].snapping = n || o || r || a || p)
      }
    }), t.ui.plugin.add("draggable", "stack", {
      start: function (e, i, s) {
        var n, o = s.options, r = t.makeArray(t(o.stack)).sort(function (e, i) {
          return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
        r.length && (n = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function (e) {
          t(this).css("zIndex", n + e)
        }), this.css("zIndex", n + r.length))
      }
    }), t.ui.plugin.add("draggable", "zIndex", {
      start: function (e, i, s) {
        var n = t(i.helper), o = s.options;
        n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
      }, stop: function (e, i, s) {
        var n = s.options;
        n._zIndex && t(i.helper).css("zIndex", n._zIndex)
      }
    }), t.ui.draggable
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(5), i(8), i(9), i(7), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.menu", {
      version: "1.12.1",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: {submenu: "ui-icon-caret-1-e"},
        items: "> *",
        menus: "ul",
        position: {my: "left top", at: "right top"},
        role: "menu",
        blur: null,
        focus: null,
        select: null
      },
      _create: function () {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
          role: this.options.role,
          tabIndex: 0
        }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
          "mousedown .ui-menu-item": function (t) {
            t.preventDefault()
          }, "click .ui-menu-item": function (e) {
            var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
          }, "mouseenter .ui-menu-item": function (e) {
            if (!this.previousFilter) {
              var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
              i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
            }
          }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
            var i = this.active || this.element.find(this.options.items).eq(0);
            e || this.focus(t, i)
          }, blur: function (e) {
            this._delay(function () {
              var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
              i && this.collapseAll(e)
            })
          }, keydown: "_keydown"
        }), this.refresh(), this._on(this.document, {
          click: function (t) {
            this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
          }
        })
      },
      _destroy: function () {
        var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
          var e = t(this);
          e.data("ui-menu-submenu-caret") && e.remove()
        })
      },
      _keydown: function (e) {
        var i, s, n, o, r = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case t.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
          case t.ui.keyCode.END:
            this._move("last", "last", e);
            break;
          case t.ui.keyCode.UP:
            this.previous(e);
            break;
          case t.ui.keyCode.DOWN:
            this.next(e);
            break;
          case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case t.ui.keyCode.RIGHT:
            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
            break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            r = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
              delete this.previousFilter
            }, 1e3)) : delete this.previousFilter
        }
        r && e.preventDefault()
      },
      _activate: function (t) {
        this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
      },
      refresh: function () {
        var e, i, s, n, o, r = this, a = this.options.icons.submenu, l = this.element.find(this.options.menus);
        this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = l.filter(":not(.ui-menu)").hide().attr({
          role: this.options.role,
          "aria-hidden": "true",
          "aria-expanded": "false"
        }).each(function () {
          var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
          r._addClass(s, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
        }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), (i = e.find(this.options.items)).not(".ui-menu-item").each(function () {
          var e = t(this);
          r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content")
        }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
          tabIndex: -1,
          role: this._itemRole()
        }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
      },
      _itemRole: function () {
        return {menu: "menuitem", listbox: "option"}[this.options.role]
      },
      _setOption: function (t, e) {
        if ("icons" === t) {
          var i = this.element.find(".ui-menu-icon");
          this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
        }
        this._super(t, e)
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
      },
      focus: function (t, e) {
        var i, s, n;
        this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
          this._close()
        }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
      },
      _scrollIntoView: function (e) {
        var i, s, n, o, r, a;
        this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), n < 0 ? this.activeMenu.scrollTop(o + n) : n + a > r && this.activeMenu.scrollTop(o + n - r + a))
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
      },
      _startOpening: function (t) {
        clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
          this._close(), this._open(t)
        }, this.delay))
      },
      _open: function (e) {
        var i = t.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer), this.timer = this._delay(function () {
          var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
          s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
        }, this.delay)
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
      },
      _closeOnDocumentClick: function (e) {
        return !t(e.target).closest(".ui-menu").length
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text())
      },
      collapse: function (t) {
        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e))
      },
      expand: function (t) {
        var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
        e && e.length && (this._open(e.parent()), this._delay(function () {
          this.focus(t, e)
        }))
      },
      next: function (t) {
        this._move("next", "first", t)
      },
      previous: function (t) {
        this._move("prev", "last", t)
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
      },
      _move: function (t, e, i) {
        var s;
        this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
      },
      nextPage: function (e) {
        var i, s, n;
        this.active ? this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
          return (i = t(this)).offset().top - s - n < 0
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e)
      },
      previousPage: function (e) {
        var i, s, n;
        this.active ? this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
          return (i = t(this)).offset().top - s + n > 0
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e)
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
      },
      _filterMenuItems: function (e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = new RegExp("^" + i, "i");
        return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
          return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
        })
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  /*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(25), i(26), i(5), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    var e;
    return t.widget("ui.button", {
      version: "1.12.1",
      defaultElement: "<button>",
      options: {
        classes: {"ui-button": "ui-corner-all"},
        disabled: null,
        icon: null,
        iconPosition: "beginning",
        label: null,
        showLabel: !0
      },
      _getCreateOptions: function () {
        var t, e = this._super() || {};
        return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
          keyup: function (e) {
            e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
          }
        })
      },
      _enhance: function () {
        this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
      },
      _updateTooltip: function () {
        this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
      },
      _updateIcon: function (e, i) {
        var s = "iconPosition" !== e, n = s ? this.options.iconPosition : i, o = "top" === n || "bottom" === n;
        this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
      },
      _destroy: function () {
        this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
      },
      _setOptions: function (t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
        e || i || (t.showLabel = !0), this._super(t)
      },
      _setOption: function (t, e) {
        "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
      },
      refresh: function () {
        var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
      }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
      options: {
        text: !0,
        icons: {primary: null, secondary: null}
      }, _create: function () {
        this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
      }, _setOption: function (t, e) {
        "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e)
      }
    }), t.fn.button = (e = t.fn.button, function () {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
    }), t.fn.buttonset = function () {
      return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" === r(arguments[0]) && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
    }), t.ui.button
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.fn.extend({
      disableSelection: (e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
        return this.on(e + ".ui-disableSelection", function (t) {
          t.preventDefault()
        })
      }), enableSelection: function () {
        return this.off(".ui-disableSelection")
      }
    });
    var e
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(12)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.extend(t.expr[":"], {
      tabbable: function (e) {
        var i = t.attr(e, "tabindex"), s = null != i;
        return (!s || i >= 0) && t.ui.focusable(e, s)
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.plugin = {
      add: function (e, i, s) {
        var n, o = t.ui[e].prototype;
        for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
      }, call: function (t, e, i, s) {
        var n, o = t.plugins[e];
        if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
      }
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.ui.safeBlur = function (e) {
      e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(6), i(19), i(22), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.resizable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null
      },
      _num: function (t) {
        return parseFloat(t) || 0
      },
      _isNumber: function (t) {
        return !isNaN(parseFloat(t))
      },
      _hasScroll: function (e, i) {
        if ("hidden" === t(e).css("overflow")) return !1;
        var s, n = i && "left" === i ? "scrollLeft" : "scrollTop";
        return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
      },
      _create: function () {
        var e, i = this.options, s = this;
        this._addClass("ui-resizable"), t.extend(this, {
          _aspectRatio: !!i.aspectRatio,
          aspectRatio: i.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom"),
          marginLeft: this.originalElement.css("marginLeft")
        }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
          i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
        }).on("mouseleave", function () {
          i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
        }), this._mouseInit()
      },
      _destroy: function () {
        this._mouseDestroy();
        var e, i = function (e) {
          t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
        };
        return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
          position: e.css("position"),
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: e.css("top"),
          left: e.css("left")
        }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
      },
      _setOption: function (t, e) {
        switch (this._super(t, e), t) {
          case"handles":
            this._removeHandles(), this._setupHandles()
        }
      },
      _setupHandles: function () {
        var e, i, s, n, o, r = this.options, a = this;
        if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
          n: ".ui-resizable-n",
          e: ".ui-resizable-e",
          s: ".ui-resizable-s",
          w: ".ui-resizable-w",
          se: ".ui-resizable-se",
          sw: ".ui-resizable-sw",
          ne: ".ui-resizable-ne",
          nw: ".ui-resizable-nw"
        } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; i < s.length; i++) n = "ui-resizable-" + (e = t.trim(s[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({zIndex: r.zIndex}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
        this._renderAxis = function (e) {
          var i, s, n, o;
          for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {mousedown: a._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
        }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
          a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
        }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
      },
      _removeHandles: function () {
        this._handles.remove()
      },
      _mouseCapture: function (e) {
        var i, s, n = !1;
        for (i in this.handles) ((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
        return !this.options.disabled && n
      },
      _mouseStart: function (e) {
        var i, s, n, o = this.options, r = this.element;
        return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
          left: i,
          top: s
        }, this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {
          width: r.width(),
          height: r.height()
        }, this.originalSize = this._helper ? {width: r.outerWidth(), height: r.outerHeight()} : {
          width: r.width(),
          height: r.height()
        }, this.sizeDiff = {
          width: r.outerWidth() - r.width(),
          height: r.outerHeight() - r.height()
        }, this.originalPosition = {left: i, top: s}, this.originalMousePosition = {
          left: e.pageX,
          top: e.pageY
        }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
      },
      _mouseDrag: function (e) {
        var i, s, n = this.originalMousePosition, o = this.axis, r = e.pageX - n.left || 0, a = e.pageY - n.top || 0,
          l = this._change[o];
        return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
      },
      _mouseStop: function (e) {
        this.resizing = !1;
        var i, s, n, o, r, a, l, h = this.options;
        return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height, o = s ? 0 : this.sizeDiff.width, r = {
          width: this.helper.width() - o,
          height: this.helper.height() - n
        }, a = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, l = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
          top: l,
          left: a
        })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
      },
      _updatePrevProperties: function () {
        this.prevPosition = {top: this.position.top, left: this.position.left}, this.prevSize = {
          width: this.size.width,
          height: this.size.height
        }
      },
      _applyChanges: function () {
        var t = {};
        return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
      },
      _updateVirtualBoundaries: function (t) {
        var e, i, s, n, o, r = this.options;
        o = {
          minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
          maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
          minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
          maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
        }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
      },
      _updateCache: function (t) {
        this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
      },
      _updateRatio: function (t) {
        var e = this.position, i = this.size, s = this.axis;
        return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
      },
      _respectSize: function (t) {
        var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          a = this.originalPosition.left + this.originalSize.width,
          l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
        return o && (t.width = e.minWidth), r && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), s && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
      },
      _getPaddingPlusBorderDimensions: function (t) {
        for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
        return {height: i[0] + i[2], width: i[1] + i[3]}
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        })
      },
      _renderProxy: function () {
        var e = this.element, i = this.options;
        this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          position: "absolute",
          left: this.elementOffset.left + "px",
          top: this.elementOffset.top + "px",
          zIndex: ++i.zIndex
        }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
      },
      _change: {
        e: function (t, e) {
          return {width: this.originalSize.width + e}
        }, w: function (t, e) {
          var i = this.originalSize;
          return {left: this.originalPosition.left + e, width: i.width - e}
        }, n: function (t, e, i) {
          var s = this.originalSize;
          return {top: this.originalPosition.top + i, height: s.height - i}
        }, s: function (t, e, i) {
          return {height: this.originalSize.height + i}
        }, se: function (e, i, s) {
          return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
        }, sw: function (e, i, s) {
          return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
        }, ne: function (e, i, s) {
          return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
        }, nw: function (e, i, s) {
          return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
        }
      },
      _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition
        }
      }
    }), t.ui.plugin.add("resizable", "animate", {
      stop: function (e) {
        var i = t(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName), r = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          a = o ? 0 : i.sizeDiff.width, l = {width: i.size.width - a, height: i.size.height - r},
          h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(t.extend(l, c && h ? {top: c, left: h} : {}), {
          duration: s.animateDuration,
          easing: s.animateEasing,
          step: function () {
            var s = {
              width: parseFloat(i.element.css("width")),
              height: parseFloat(i.element.css("height")),
              top: parseFloat(i.element.css("top")),
              left: parseFloat(i.element.css("left"))
            };
            n && n.length && t(n[0]).css({
              width: s.width,
              height: s.height
            }), i._updateCache(s), i._propagate("resize", e)
          }
        })
      }
    }), t.ui.plugin.add("resizable", "containment", {
      start: function () {
        var e, i, s, n, o, r, a, l = t(this).resizable("instance"), h = l.options, c = l.element, u = h.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
        d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
          left: 0,
          top: 0
        }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
          element: t(document),
          left: 0,
          top: 0,
          width: t(document).width(),
          height: t(document).height() || document.body.parentNode.scrollHeight
        }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
          i[t] = l._num(e.css("padding" + s))
        }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
          height: e.innerHeight() - i[3],
          width: e.innerWidth() - i[1]
        }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : n, l.parentData = {
          element: d,
          left: s.left,
          top: s.top,
          width: r,
          height: a
        }))
      }, resize: function (e) {
        var i, s, n, o, r = t(this).resizable("instance"), a = r.options, l = r.containerOffset, h = r.position,
          c = r._aspectRatio || e.shiftKey, u = {top: 0, left: 0}, d = r.containerElement, p = !0;
        d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), n = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), n && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), s = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, p = !1)), s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, c && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
      }, stop: function () {
        var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.containerPosition,
          o = e.containerElement, r = t(e.helper), a = r.offset(), l = r.outerWidth() - e.sizeDiff.width,
          h = r.outerHeight() - e.sizeDiff.height;
        e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
          left: a.left - n.left - s.left,
          width: l,
          height: h
        }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
          left: a.left - n.left - s.left,
          width: l,
          height: h
        })
      }
    }), t.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var e = t(this).resizable("instance").options;
        t(e.alsoResize).each(function () {
          var e = t(this);
          e.data("ui-resizable-alsoresize", {
            width: parseFloat(e.width()),
            height: parseFloat(e.height()),
            left: parseFloat(e.css("left")),
            top: parseFloat(e.css("top"))
          })
        })
      }, resize: function (e, i) {
        var s = t(this).resizable("instance"), n = s.options, o = s.originalSize, r = s.originalPosition, a = {
          height: s.size.height - o.height || 0,
          width: s.size.width - o.width || 0,
          top: s.position.top - r.top || 0,
          left: s.position.left - r.left || 0
        };
        t(n.alsoResize).each(function () {
          var e = t(this), s = t(this).data("ui-resizable-alsoresize"), n = {},
            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
          t.each(o, function (t, e) {
            var i = (s[e] || 0) + (a[e] || 0);
            i && i >= 0 && (n[e] = i || null)
          }), e.css(n)
        })
      }, stop: function () {
        t(this).removeData("ui-resizable-alsoresize")
      }
    }), t.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var e = t(this).resizable("instance"), i = e.size;
        e.ghost = e.originalElement.clone(), e.ghost.css({
          opacity: .25,
          display: "block",
          position: "relative",
          height: i.height,
          width: i.width,
          margin: 0,
          left: 0,
          top: 0
        }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
      }, resize: function () {
        var e = t(this).resizable("instance");
        e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
      }, stop: function () {
        var e = t(this).resizable("instance");
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
      }
    }), t.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, r = i.originalPosition,
          a = i.axis, l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, h = l[0] || 1, c = l[1] || 1,
          u = Math.round((n.width - o.width) / h) * h, d = Math.round((n.height - o.height) / c) * c, p = o.width + u,
          f = o.height + d, g = s.maxWidth && s.maxWidth < p, m = s.maxHeight && s.maxHeight < f,
          v = s.minWidth && s.minWidth > p, _ = s.minHeight && s.minHeight > f;
        s.grid = l, v && (p += h), _ && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((f - c <= 0 || p - h <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = c - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = h - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
      }
    }), t.ui.resizable
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    var e = /ui-corner-([a-z]){2,6}/g;
    return t.widget("ui.controlgroup", {
      version: "1.12.1",
      defaultElement: "<div>",
      options: {
        direction: "horizontal",
        disabled: null,
        onlyVisible: !0,
        items: {
          button: "input[type=button], input[type=submit], input[type=reset], button, a",
          controlgroupLabel: ".ui-controlgroup-label",
          checkboxradio: "input[type='checkbox'], input[type='radio']",
          selectmenu: "select",
          spinner: ".ui-spinner-input"
        }
      },
      _create: function () {
        this._enhance()
      },
      _enhance: function () {
        this.element.attr("role", "toolbar"), this.refresh()
      },
      _destroy: function () {
        this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
      },
      _initWidgets: function () {
        var e = this, i = [];
        t.each(this.options.items, function (s, n) {
          var o, r = {};
          if (n) return "controlgroupLabel" === s ? ((o = e.element.find(n)).each(function () {
            var e = t(this);
            e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
          }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[s] && (r = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {classes: {}}, e.element.find(n).each(function () {
            var n = t(this), o = n[s]("instance"), a = t.widget.extend({}, r);
            if ("button" !== s || !n.parent(".ui-spinner").length) {
              o || (o = n[s]()[s]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), n[s](a);
              var l = n[s]("widget");
              t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
            }
          })))
        }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
      },
      _callChildMethod: function (e) {
        this.childWidgets.each(function () {
          var i = t(this), s = i.data("ui-controlgroup-data");
          s && s[e] && s[e]()
        })
      },
      _updateCornerClass: function (t, e) {
        var i = this._buildSimpleOptions(e, "label").classes.label;
        this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
      },
      _buildSimpleOptions: function (t, e) {
        var i = "vertical" === this.options.direction, s = {classes: {}};
        return s.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all"
        }[t], s
      },
      _spinnerOptions: function (t) {
        var e = this._buildSimpleOptions(t, "ui-spinner");
        return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
      },
      _buttonOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-button")
      },
      _checkboxradioOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-checkboxradio-label")
      },
      _selectmenuOptions: function (t) {
        var e = "vertical" === this.options.direction;
        return {
          width: !!e && "auto",
          classes: {
            middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
            first: {
              "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
              "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
            },
            last: {
              "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
              "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
            },
            only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
          }[t]
        }
      },
      _resolveClassesValues: function (i, s) {
        var n = {};
        return t.each(i, function (o) {
          var r = s.options.classes[o] || "";
          r = t.trim(r.replace(e, "")), n[o] = (r + " " + i[o]).replace(/\s+/g, " ")
        }), n
      },
      _setOption: function (t, e) {
        "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
      },
      refresh: function () {
        var e, i = this;
        this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
          var n = e[s]().data("ui-controlgroup-data");
          if (n && i["_" + n.widgetName + "Options"]) {
            var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
            o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
          } else i._updateCornerClass(e[s](), s)
        }), this._callChildMethod("refresh"))
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(10), i(13), i(14), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
      version: "1.12.1",
      options: {
        disabled: null,
        label: null,
        icon: !0,
        classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
      },
      _getCreateOptions: function () {
        var e, i, s = this, n = this._super() || {};
        return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
          s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
        }), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n
      },
      _create: function () {
        var t = this.element[0].checked;
        this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
          change: "_toggleClasses",
          focus: function () {
            this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
          },
          blur: function () {
            this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
          }
        })
      },
      _readType: function () {
        var e = this.element[0].nodeName.toLowerCase();
        this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
      },
      _enhance: function () {
        this._updateIcon(this.element[0].checked)
      },
      widget: function () {
        return this.label
      },
      _getRadioGroup: function () {
        var e = this.element[0].name, i = "input[name='" + t.ui.escapeSelector(e) + "']";
        return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function () {
          return 0 === t(this).form().length
        })).not(this.element) : t([])
      },
      _toggleClasses: function () {
        var e = this.element[0].checked;
        this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
          var e = t(this).checkboxradio("instance");
          e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
        })
      },
      _destroy: function () {
        this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
      },
      _setOption: function (t, e) {
        if ("label" !== t || e) {
          if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e);
          this.refresh()
        }
      },
      _updateIcon: function (e) {
        var i = "ui-icon ui-icon-background ";
        this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
      },
      _updateLabel: function () {
        var t = this.label.contents().not(this.element[0]);
        this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
      },
      refresh: function () {
        var t = this.element[0].checked, e = this.element[0].disabled;
        this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
      }
    }]), t.ui.checkboxradio
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4), i(28)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("scale", function (e, i) {
      var s = t(this), n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
        r = t.extend(!0, {
          from: t.effects.scaledDimensions(s),
          to: t.effects.scaledDimensions(s, o, e.direction || "both"),
          origin: e.origin || ["middle", "center"]
        }, e);
      e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("size", function (e, i) {
      var s, n, o, r = t(this), a = ["fontSize"],
        l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = e.mode, u = "effect" !== c,
        d = e.scale || "both", p = e.origin || ["middle", "center"], f = r.css("position"), g = r.position(),
        m = t.effects.scaledDimensions(r), v = e.from || m, _ = e.to || t.effects.scaledDimensions(r, 0);
      t.effects.createPlaceholder(r), "show" === c && (o = v, v = _, _ = o), n = {
        from: {
          y: v.height / m.height,
          x: v.width / m.width
        }, to: {y: _.height / m.height, x: _.width / m.width}
      }, "box" !== d && "both" !== d || (n.from.y !== n.to.y && (v = t.effects.setTransition(r, l, n.from.y, v), _ = t.effects.setTransition(r, l, n.to.y, _)), n.from.x !== n.to.x && (v = t.effects.setTransition(r, h, n.from.x, v), _ = t.effects.setTransition(r, h, n.to.x, _))), "content" !== d && "both" !== d || n.from.y !== n.to.y && (v = t.effects.setTransition(r, a, n.from.y, v), _ = t.effects.setTransition(r, a, n.to.y, _)), p && (s = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left, _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left), r.css(v), "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function () {
        var i = t(this), s = t.effects.scaledDimensions(i), o = {
          height: s.height * n.from.y,
          width: s.width * n.from.x,
          outerHeight: s.outerHeight * n.from.y,
          outerWidth: s.outerWidth * n.from.x
        }, r = {
          height: s.height * n.to.y,
          width: s.width * n.to.x,
          outerHeight: s.height * n.to.y,
          outerWidth: s.width * n.to.x
        };
        n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), r = t.effects.setTransition(i, l, n.to.y, r)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, h, n.from.x, o), r = t.effects.setTransition(i, h, n.to.x, r)), u && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function () {
          u && t.effects.restoreStyle(i)
        })
      })), r.animate(_, {
        queue: !1, duration: e.duration, easing: e.easing, complete: function () {
          var e = r.offset();
          0 === _.opacity && r.css("opacity", v.opacity), u || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
        }
      })
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  "use strict";
  i.r(e);
  i(0), i(31), i(34), i(35), i(36), i(38), i(104), i(106), i(108)
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {
    }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0, get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e, i) {
  var s = i(32);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e) {
  t.exports = function (t) {
    var e = "undefined" != typeof window && window.location;
    if (!e) throw new Error("fixUrls requires window.location");
    if (!t || "string" != typeof t) return t;
    var i = e.protocol + "//" + e.host, s = i + e.pathname.replace(/\/[^\/]*$/, "/");
    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
      var n, o = e.trim().replace(/^"(.*)"$/, function (t, e) {
        return e
      }).replace(/^'(.*)'$/, function (t, e) {
        return e
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (n = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? i + o : s + o.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
    })
  }
}, function (t, e, i) {
  (function (t, e) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    /**
     * Owl carousel
     * @version 2.3.4
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     * @todo Lazy Load Icon
     * @todo prevent animationend bubling
     * @todo itemsScaleUp
     * @todo Test Zepto
     * @todo stagePadding calculate wrong active classes
     */var s, n;
    !function (t, s, n, o) {
      function r(e, i) {
        this.settings = null, this.options = t.extend({}, r.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {start: null, current: null},
          direction: null
        }, this._states = {
          current: {},
          tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
          this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(r.Plugins, t.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(r.Workers, t.proxy(function (e, i) {
          this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
      }

      r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: s,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
      }, r.Width = {Default: "default", Inner: "inner", Outer: "outer"}, r.Type = {
        Event: "event",
        State: "state"
      }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"], run: function () {
          this._width = this.$element.width()
        }
      }, {
        filter: ["width", "items", "settings"], run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)]
        }
      }, {
        filter: ["items", "settings"], run: function () {
          this.$stage.children(".cloned").remove()
        }
      }, {
        filter: ["width", "items", "settings"], run: function (t) {
          var e = this.settings.margin || "", i = !this.settings.autoWidth, s = this.settings.rtl,
            n = {width: "auto", "margin-left": s ? e : "", "margin-right": s ? "" : e};
          !i && this.$stage.children().css(n), t.css = n
        }
      }, {
        filter: ["width", "items", "settings"], run: function (t) {
          var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
            s = this._items.length, n = !this.settings.autoWidth, o = [];
          for (t.items = {
            merge: !1,
            width: e
          }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
          this._widths = o
        }
      }, {
        filter: ["items", "settings"], run: function () {
          var e = [], i = this._items, s = this.settings, n = Math.max(2 * s.items, 4), o = 2 * Math.ceil(i.length / 2),
            r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0, a = "", l = "";
          for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
          this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
      }, {
        filter: ["width", "items", "settings"], run: function () {
          for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
          this._coordinates = o
        }
      }, {
        filter: ["width", "items", "settings"], run: function () {
          var t = this.settings.stagePadding, e = this._coordinates, i = {
            width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
            "padding-left": t || "",
            "padding-right": t || ""
          };
          this.$stage.css(i)
        }
      }, {
        filter: ["width", "items", "settings"], run: function (t) {
          var e = this._coordinates.length, i = !this.settings.autoWidth, s = this.$stage.children();
          if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css); else i && (t.css.width = t.items.width, s.css(t.css))
        }
      }, {
        filter: ["items"], run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
      }, {
        filter: ["width", "items", "settings"], run: function (t) {
          t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
      }, {
        filter: ["position"], run: function () {
          this.animate(this.coordinates(this._current))
        }
      }, {
        filter: ["width", "position", "items", "settings"], run: function () {
          var t, e, i, s, n = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + o, a = r + this.width() * n, l = [];
          for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
          this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
      }], r.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
      }, r.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function (e) {
          return t(e)
        }), this._mergers = this._items.map(function () {
          return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
      }, r.prototype.initialize = function () {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
      }, r.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
      }, r.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, s = -1, n = null;
        i ? (t.each(i, function (t) {
          t <= e && t > s && (s = Number(t))
        }), "function" == typeof (n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
          property: {
            name: "settings",
            value: n
          }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
          property: {
            name: "settings",
            value: this.settings
          }
        })
      }, r.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
      }, r.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
      }, r.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
          return this[t]
        }, this._invalidated), n = {}; e < i;) (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
      }, r.prototype.width = function (t) {
        switch (t = t || r.Width.Default) {
          case r.Width.Inner:
          case r.Width.Outer:
            return this._width;
          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
      }, r.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
      }, r.prototype.onThrottledResize = function () {
        s.clearTimeout(this.resizeTimer), this.resizeTimer = s.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
      }, r.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
      }, r.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(s, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
          return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
      }, r.prototype.onDragStart = function (e) {
        var i = null;
        3 !== e.which && (t.support.transform ? i = {
          x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
          y: i[16 === i.length ? 13 : 5]
        } : (i = this.$stage.position(), i = {
          x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
          y: i.top
        }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
          var i = this.difference(this._drag.pointer, this.pointer(e));
          t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
      }, r.prototype.onDragMove = function (t) {
        var e = null, i = null, s = null, n = this.difference(this._drag.pointer, this.pointer(t)),
          o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
      }, r.prototype.onDragEnd = function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)), s = this._drag.stage.current,
          o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
          return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
      }, r.prototype.closest = function (e, i) {
        var s = -1, n = this.width(), o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
          return "left" === i && e > r - 30 && e < r + 30 ? s = t : "right" === i && e > r - n - 30 && e < r - n + 30 ? s = t + 1 : this.op(e, "<", r) && this.op(e, ">", void 0 !== o[t + 1] ? o[t + 1] : r - n) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (s = e = this.maximum())), s
      }, r.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
          transform: "translate3d(" + e + "px,0px,0px)",
          transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
      }, r.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
      }, r.prototype.current = function (t) {
        if (void 0 === t) return this._current;
        if (0 !== this._items.length) {
          if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
              property: {
                name: "position",
                value: this._current
              }
            })
          }
          return this._current
        }
      }, r.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
          return e
        })
      }, r.prototype.reset = function (t) {
        void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
      }, r.prototype.normalize = function (t, e) {
        var i = this._items.length, s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = void 0 : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
      }, r.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
      }, r.prototype.maximum = function (t) {
        var e, i, s, n = this.settings, o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1; else if (n.autoWidth || n.merge) {
          if (e = this._items.length) for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s);) ;
          o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
      }, r.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
      }, r.prototype.items = function (t) {
        return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
      }, r.prototype.mergers = function (t) {
        return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
      }, r.prototype.clones = function (e) {
        var i = this._clones.length / 2, s = i + this._items.length, n = function (t) {
          return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
        };
        return void 0 === e ? t.map(this._clones, function (t, e) {
          return n(e)
        }) : t.map(this._clones, function (t, i) {
          return t === e ? n(i) : null
        })
      }, r.prototype.speed = function (t) {
        return void 0 !== t && (this._speed = t), this._speed
      }, r.prototype.coordinates = function (e) {
        var i, s = 1, n = e - 1;
        return void 0 === e ? t.map(this._coordinates, t.proxy(function (t, e) {
          return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, n = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[n] || 0)) / 2 * s) : i = this._coordinates[n] || 0, i = Math.ceil(i))
      }, r.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
      }, r.prototype.to = function (t, e) {
        var i = this.current(), s = null, n = t - this.relative(i), o = (n > 0) - (n < 0), r = this._items.length,
          a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= l && s - n > 0 && (i = s - n, t = s, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
      }, r.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
      }, r.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
      }, r.prototype.onTransitionEnd = function (t) {
        if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
      }, r.prototype.viewport = function () {
        var e;
        return this.options.responsiveBaseElement !== s ? e = t(this.options.responsiveBaseElement).width() : s.innerWidth ? e = s.innerWidth : n.documentElement && n.documentElement.clientWidth ? e = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
      }, r.prototype.replace = function (i) {
        this.$stage.empty(), this._items = [], i && (i = i instanceof e ? i : t(i)), this.settings.nestedItemSelector && (i = i.find("." + this.settings.nestedItemSelector)), i.filter(function () {
          return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
          e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
      }, r.prototype.add = function (i, s) {
        var n = this.relative(this._current);
        s = void 0 === s ? this._items.length : this.normalize(s, !0), i = i instanceof e ? i : t(i), this.trigger("add", {
          content: i,
          position: s
        }), i = this.prepare(i), 0 === this._items.length || s === this._items.length ? (0 === this._items.length && this.$stage.append(i), 0 !== this._items.length && this._items[s - 1].after(i), this._items.push(i), this._mergers.push(1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[s].before(i), this._items.splice(s, 0, i), this._mergers.splice(s, 0, 1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
          content: i,
          position: s
        })
      }, r.prototype.remove = function (t) {
        void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", {
          content: this._items[t],
          position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
          content: null,
          position: t
        }))
      }, r.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
          this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
            i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
          }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
      }, r.prototype.destroy = function () {
        for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (s.clearTimeout(this.resizeTimer), this.off(s, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
      }, r.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
          case"<":
            return s ? t > i : t < i;
          case">":
            return s ? t < i : t > i;
          case">=":
            return s ? t <= i : t >= i;
          case"<=":
            return s ? t >= i : t <= i
        }
      }, r.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
      }, r.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
      }, r.prototype.trigger = function (e, i, s, n, o) {
        var a = {item: {count: this._items.length, index: this.current()}},
          l = t.camelCase(t.grep(["on", e, s], function (t) {
            return t
          }).join("-").toLowerCase()),
          h = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
          e.onTrigger && e.onTrigger(h)
        }), this.register({
          type: r.Type.Event,
          name: e
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
      }, r.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
          void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
      }, r.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
          this._states.current[e]--
        }, this))
      }, r.prototype.register = function (e) {
        if (e.type === r.Type.Event) {
          if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
            var i = t.event.special[e.name]._default;
            t.event.special[e.name]._default = function (t) {
              return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
            }, t.event.special[e.name].owl = !0
          }
        } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, s) {
          return t.inArray(i, this._states.tags[e.name]) === s
        }, this)))
      }, r.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
          this._supress[e] = !0
        }, this))
      }, r.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
          delete this._supress[e]
        }, this))
      }, r.prototype.pointer = function (t) {
        var e = {x: null, y: null};
        return (t = (t = t.originalEvent || t || s.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
      }, r.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
      }, r.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
      }, t.fn.owlCarousel = function (e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var n = t(this), o = n.data("owl.carousel");
          o || (o = new r(this, "object" == i(e) && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
            o.register({type: r.Type.Event, name: i}), o.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
              t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, o))
          })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, s)
        })
      }, t.fn.owlCarousel.Constructor = r
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      var n = function e(i) {
        this._core = i, this._interval = null, this._visible = null, this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch()
          }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
      };
      n.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, n.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
      }, n.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
      }, n.prototype.destroy = function () {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      var n = function e(i) {
        this._core = i, this._loaded = [], this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
            if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
              var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items,
                n = i.center && -1 * s || 0,
                o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n,
                r = this._core.clones().length, a = t.proxy(function (t, e) {
                  this.load(e)
                }, this);
              for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, s++)); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
            }
          }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
      };
      n.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, n.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i), n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
          var n, o = t(s),
            r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
          this._core.trigger("load", {
            element: o,
            url: r
          }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
            o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: r}, "lazy")
          }, this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function () {
            this._core.trigger("loaded", {element: o, url: r}, "lazy")
          }, this)).attr("srcset", r) : ((n = new Image).onload = t.proxy(function () {
            o.css({"background-image": 'url("' + r + '")', opacity: "1"}), this._core.trigger("loaded", {
              element: o,
              url: r
            }, "lazy")
          }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      var n = function i(s) {
        this._core = s, this._previousHeight = null, this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && this.update()
          }, this), "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
          }, this), "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
          }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function () {
          n._core.settings.autoHeight && n.update()
        }), t(e).resize(function () {
          n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function () {
            n.update()
          }, 250))
        })
      };
      n.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, n.prototype.update = function () {
        var e = this._core._current, i = e + this._core.settings.items, s = this._core.settings.lazyLoad,
          n = this._core.$stage.children().toArray().slice(e, i), o = [], r = 0;
        t.each(n, function (e, i) {
          o.push(t(i).height())
        }), (r = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      var n = function e(i) {
        this._core = i, this._videos = {}, this._playing = null, this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
          }, this), "resize.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
          }, this), "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
          }, this), "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" === t.property.name && this._playing && this.stop()
          }, this), "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }
          }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
          this.play(t)
        }, this))
      };
      n.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, n.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
          s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube"; else if (s[3].indexOf("vimeo") > -1) i = "vimeo"; else {
          if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
          i = "vzaar"
        }
        s = s[6], this._videos[r] = {
          type: i,
          id: s,
          width: n,
          height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
      }, n.prototype.thumbnail = function (e, i) {
        var s, n, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
          r = e.find("img"), a = "src", l = "", h = this._core.settings, c = function (i) {
            '<div class="owl-video-play-icon"></div>', s = h.lazyLoad ? t("<div/>", {
              class: "owl-video-tn " + l,
              srcType: i
            }) : t("<div/>", {
              class: "owl-video-tn",
              style: "opacity:1;background-image:url(" + i + ")"
            }), e.after(s), e.after('<div class="owl-video-play-icon"></div>')
          };
        if (e.wrap(t("<div/>", {
          class: "owl-video-wrapper",
          style: o
        })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length) return c(r.attr(a)), r.remove(), !1;
        "youtube" === i.type ? (n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(n)) : "vimeo" === i.type ? t.ajax({
          type: "GET",
          url: "//vimeo.com/api/v2/video/" + i.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function (t) {
            n = t[0].thumbnail_large, c(n)
          }
        }) : "vzaar" === i.type && t.ajax({
          type: "GET",
          url: "//vzaar.com/api/videos/" + i.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function (t) {
            n = t.framegrab_url, c(n)
          }
        })
      }, n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
      }, n.prototype.play = function (e) {
        var i, s = t(e.target).closest("." + this._core.settings.itemClass), n = this._videos[s.attr("data-video")],
          o = n.width || "100%", r = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", o), "youtube" === n.type ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
      }, n.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || t, window, document), s = window.Zepto || t, window, document, (n = function t(e) {
      this.core = e, this.core.options = s.extend({}, t.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
        "change.owl.carousel": s.proxy(function (t) {
          t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
        }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function (t) {
          t.namespace && (this.swapping = "translated" == t.type)
        }, this), "translate.owl.carousel": s.proxy(function (t) {
          t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
        }, this)
      }, this.core.$element.on(this.handlers)
    }).Defaults = {animateOut: !1, animateIn: !1}, n.prototype.swap = function () {
      if (1 === this.core.settings.items && s.support.animation && s.support.transition) {
        this.core.speed(0);
        var t, e = s.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous),
          n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn,
          r = this.core.settings.animateOut;
        this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(s.support.animation.end, e).css({left: t + "px"}).addClass("animated owl-animated-out").addClass(r)), o && n.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o))
      }
    }, n.prototype.clear = function (t) {
      s(t.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, n.prototype.destroy = function () {
      var t, e;
      for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.Animate = n, function (t, e, i, s) {
      var n = function e(i) {
        this._core = i, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
          }, this), "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play()
          }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i)
          }, this), "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop()
          }, this), "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
          }, this), "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
          }, this), "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
          }, this), "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play()
          }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, e.Defaults, this._core.options)
      };
      n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
      }, n.prototype._next = function (s) {
        this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
      }, n.prototype.read = function () {
        return (new Date).getTime() - this._time
      }, n.prototype.play = function (i, s) {
        var n;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - n, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, s), i - n)
      }, n.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
      }, n.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      "use strict";
      var n = function e(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }, this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
          }, this), "added.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
          }, this), "remove.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
          }, this), "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw()
          }, this), "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
          }, this), "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
          }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
      };
      n.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
      }, n.prototype.initialize = function () {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
          this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
          this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
          var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
          e.preventDefault(), this.to(s, i.dotsSpeed)
        }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
      }, n.prototype.destroy = function () {
        var t, e, i, s, n;
        for (t in n = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
      }, n.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2, s = i + this._core.items().length, n = this._core.maximum(!0),
          o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
          if (e >= r || 0 === e) {
            if (this._pages.push({start: Math.min(n, t - i), end: t - i + r - 1}), Math.min(n, t - i) === n) break;
            e = 0, 0
          }
          e += this._core.mergers(this._core.relative(t))
        }
      }, n.prototype.draw = function () {
        var e, i = this._core.settings, s = this._core.items().length <= i.items,
          n = this._core.relative(this._core.current()), o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
      }, n.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
      }, n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
          return t.start <= e && t.end >= e
        }, this)).pop()
      }, n.prototype.getPosition = function (e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
      }, n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
      }, n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
      }, n.prototype.to = function (e, i, s) {
        var n;
        !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
      }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      "use strict";
      var n = function i(s) {
        this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
          }, this), "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content
            }
          }, this), "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var s = this._core.items(this._core.relative(this._core.current())),
                n = t.map(this._hashes, function (t, e) {
                  return t === s ? e : null
                }).join();
              if (!n || e.location.hash.slice(1) === n) return;
              e.location.hash = n
            }
          }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
          var i = e.location.hash.substring(1), s = this._core.$stage.children(),
            n = this._hashes[i] && s.index(this._hashes[i]);
          void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
      };
      n.Defaults = {URLhashListener: !1}, n.prototype.destroy = function () {
        var i, s;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
    }(window.Zepto || t, window, document), function (t, e, i, s) {
      var n = t("<support>").get(0).style, o = "Webkit Moz O ms".split(" "), r = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      }, a = function () {
        return !!c("transform")
      }, l = function () {
        return !!c("perspective")
      }, h = function () {
        return !!c("animation")
      };

      function c(e, i) {
        var r = !1, a = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + o.join(a + " ") + a).split(" "), function (t, e) {
          if (n[e] !== s) return r = !i || e, !1
        }), r
      }

      function u(t) {
        return c(t, !0)
      }

      (function () {
        return !!c("transition")
      })() && (t.support.transition = new String(u("transition")), t.support.transition.end = r.transition.end[t.support.transition]), h() && (t.support.animation = new String(u("animation")), t.support.animation.end = r.animation.end[t.support.animation]), a() && (t.support.transform = new String(u("transform")), t.support.transform3d = l())
    }(window.Zepto || t, window, document)
  }).call(this, i(0), i(0))
}, function (t, e, i) {
  var s, n, o;
  n = [i(0)], void 0 === (o = "function" == typeof (s = function (t) {
    t.fn.jScrollPane = function (e) {
      function i(e, i) {
        var s, n, o, r, a, l, h, c, u, d, p, f, g, m, v, _, y, b, w, x, C, k, D, T, S, I, P, M, E, A, H, z, O, N,
          j = this, W = !0, L = !0, R = !1, F = !1, B = e.clone(!1, !1).empty(), q = !1,
          $ = t.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp", Y = function () {
            0 < s.resizeSensorDelay ? setTimeout(function () {
              U(s)
            }, s.resizeSensorDelay) : U(s)
          };

        function U(i) {
          var x, W, L, R, F, B, ct, ut, dt, pt, ft, gt, mt, vt, _t, yt, bt = !1, wt = !1;
          if (s = i, void 0 === n) F = e.scrollTop(), B = e.scrollLeft(), e.css({
            overflow: "hidden",
            padding: 0
          }), o = e.innerWidth() + O, r = e.innerHeight(), e.width(o), n = t('<div class="jspPane" />').css("padding", z).append(e.children()), a = t('<div class="jspContainer" />').css({
            width: o + "px",
            height: r + "px"
          }).append(n).appendTo(e); else {
            if (e.css("width", ""), a.css({
              width: "auto",
              height: "auto"
            }), n.css("position", "static"), ct = e.innerWidth() + O, ut = e.innerHeight(), n.css("position", "absolute"), bt = s.stickToBottom && 20 < (pt = h - r) && pt - lt() < 10, wt = s.stickToRight && 20 < (dt = l - o) && dt - at() < 10, R = ct !== o || ut !== r, o = ct, r = ut, a.css({
              width: o,
              height: r
            }), !R && N == l && n.outerHeight() == h) return void e.width(o);
            N = l, n.css("width", ""), e.width(o), a.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
          }
          n.css("overflow", "auto"), l = i.contentWidth ? i.contentWidth : n[0].scrollWidth, h = n[0].scrollHeight, n.css("overflow", ""), c = l / o, d = 1 < (u = h / r) || s.alwaysShowVScroll, (p = 1 < c || s.alwaysShowHScroll) || d ? (e.addClass("jspScrollable"), (x = s.maintainPosition && (m || y)) && (W = at(), L = lt()), d && (a.append(t('<div class="jspVerticalBar" />').append(t('<div class="jspCap jspCapTop" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragTop" />'), t('<div class="jspDragBottom" />'))), t('<div class="jspCap jspCapBottom" />'))), b = a.find(">.jspVerticalBar"), w = b.find(">.jspTrack"), f = w.find(">.jspDrag"), s.showArrows && (D = t('<a class="jspArrow jspArrowUp" />').on("mousedown.html", Z(0, -1)).on("click.html", ht), T = t('<a class="jspArrow jspArrowDown" />').on("mousedown.html", Z(0, 1)).on("click.html", ht), s.arrowScrollOnHover && (D.on("mouseover.html", Z(0, -1, D)), T.on("mouseover.html", Z(0, 1, T))), G(w, s.verticalArrowPositions, D, T)), C = r, a.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
            C -= t(this).outerHeight()
          }), f.on("mouseenter", function () {
            f.addClass("jspHover")
          }).on("mouseleave", function () {
            f.removeClass("jspHover")
          }).on("mousedown.html", function (e) {
            t("html").on("dragstart.jsp%20selectstart.html", ht), f.addClass("jspActive");
            var i = e.pageY - f.position().top;
            return t("html").on("mousemove.html", function (t) {
              tt(t.pageY - i, !1)
            }).on("mouseup.jsp%20mouseleave.html", J), !1
          }), K()), p && (a.append(t('<div class="jspHorizontalBar" />').append(t('<div class="jspCap jspCapLeft" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragLeft" />'), t('<div class="jspDragRight" />'))), t('<div class="jspCap jspCapRight" />'))), S = a.find(">.jspHorizontalBar"), I = S.find(">.jspTrack"), v = I.find(">.jspDrag"), s.showArrows && (E = t('<a class="jspArrow jspArrowLeft" />').on("mousedown.html", Z(-1, 0)).on("click.html", ht), A = t('<a class="jspArrow jspArrowRight" />').on("mousedown.html", Z(1, 0)).on("click.html", ht), s.arrowScrollOnHover && (E.on("mouseover.html", Z(-1, 0, E)), A.on("mouseover.html", Z(1, 0, A))), G(I, s.horizontalArrowPositions, E, A)), v.on("mouseenter", function () {
            v.addClass("jspHover")
          }).on("mouseleave", function () {
            v.removeClass("jspHover")
          }).on("mousedown.html", function (e) {
            t("html").on("dragstart.jsp%20selectstart.html", ht), v.addClass("jspActive");
            var i = e.pageX - v.position().left;
            return t("html").on("mousemove.html", function (t) {
              it(t.pageX - i, !1)
            }).on("mouseup.jsp%20mouseleave.html", J), !1
          }), P = a.innerWidth(), X()), function () {
            if (p && d) {
              var e = I.outerHeight(), i = w.outerWidth();
              C -= e, t(S).find(">.jspCap:visible,>.jspArrow").each(function () {
                P += t(this).outerWidth()
              }), P -= i, r -= i, o -= e, I.parent().append(t('<div class="jspCorner" />').css("width", e + "px")), K(), X()
            }
            p && n.width(a.outerWidth() - O + "px"), h = n.outerHeight(), u = h / r, p && ((M = Math.ceil(1 / c * P)) > s.horizontalDragMaxWidth ? M = s.horizontalDragMaxWidth : M < s.horizontalDragMinWidth && (M = s.horizontalDragMinWidth), v.css("width", M + "px"), _ = P - M, st(y)), d && ((k = Math.ceil(1 / u * C)) > s.verticalDragMaxHeight ? k = s.verticalDragMaxHeight : k < s.verticalDragMinHeight && (k = s.verticalDragMinHeight), f.css("height", k + "px"), g = C - k, et(m))
          }(), x && (ot(wt ? l - o : W, !1), nt(bt ? h - r : L, !1)), n.find(":input,a").off("focus.html").on("focus.html", function (t) {
            rt(t.target, !1)
          }), a.off($).on($, function (t, e, i, n) {
            y || (y = 0), m || (m = 0);
            var o = y, r = m, a = t.deltaFactor || s.mouseWheelSpeed;
            return j.scrollBy(i * a, -n * a, !1), o == y && r == m
          }), yt = !1, a.off("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").on("touchstart.html", function (t) {
            var e = t.originalEvent.touches[0];
            ft = at(), gt = lt(), mt = e.pageX, vt = e.pageY, yt = !(_t = !1)
          }).on("touchmove.html", function (t) {
            if (yt) {
              var e = t.originalEvent.touches[0], i = y, s = m;
              return j.scrollTo(ft + mt - e.pageX, gt + vt - e.pageY), _t = _t || 5 < Math.abs(mt - e.pageX) || 5 < Math.abs(vt - e.pageY), i == y && s == m
            }
          }).on("touchend.html", function (t) {
            yt = !1
          }).on("click.jsp-touchclick", function (t) {
            if (_t) return _t = !1
          }), s.enableKeyboardNavigation && function () {
            var i, o, l = [];

            function c() {
              var t = y, e = m;
              switch (i) {
                case 40:
                  j.scrollByY(s.keyboardSpeed, !1);
                  break;
                case 38:
                  j.scrollByY(-s.keyboardSpeed, !1);
                  break;
                case 34:
                case 32:
                  j.scrollByY(r * s.scrollPagePercent, !1);
                  break;
                case 33:
                  j.scrollByY(-r * s.scrollPagePercent, !1);
                  break;
                case 39:
                  j.scrollByX(s.keyboardSpeed, !1);
                  break;
                case 37:
                  j.scrollByX(-s.keyboardSpeed, !1)
              }
              return o = t != y || e != m
            }

            p && l.push(S[0]), d && l.push(b[0]), n.on("focus.html", function () {
              e.focus()
            }), e.attr("tabindex", 0).off("keydown.jsp%20keypress.html").on("keydown.html", function (e) {
              if (e.target === this || l.length && t(e.target).closest(l).length) {
                var s = y, n = m;
                switch (e.keyCode) {
                  case 40:
                  case 38:
                  case 34:
                  case 32:
                  case 33:
                  case 39:
                  case 37:
                    i = e.keyCode, c();
                    break;
                  case 35:
                    nt(h - r), i = null;
                    break;
                  case 36:
                    nt(0), i = null
                }
                return !(o = e.keyCode == i && s != y || n != m)
              }
            }).on("keypress.html", function (e) {
              if (e.keyCode == i && c(), e.target === this || l.length && t(e.target).closest(l).length) return !o
            }), s.hideFocus ? (e.css("outline", "none"), "hideFocus" in a[0] && e.attr("hideFocus", !0)) : (e.css("outline", ""), "hideFocus" in a[0] && e.attr("hideFocus", !1))
          }(), s.clickOnTrack && (Q(), d && w.on("mousedown.html", function (e) {
            if (void 0 === e.originalTarget || e.originalTarget == e.currentTarget) {
              var i, n = t(this), o = n.offset(), a = e.pageY - o.top - m, l = !0, c = function e() {
                i && clearTimeout(i), i = null, t(document).off("mouseup.html", e)
              };
              return function t() {
                var o = n.offset(), u = e.pageY - o.top - k / 2, d = r * s.scrollPagePercent, p = g * d / (h - r);
                if (a < 0) u < m - p ? j.scrollByY(-d) : tt(u); else {
                  if (!(0 < a)) return void c();
                  m + p < u ? j.scrollByY(d) : tt(u)
                }
                i = setTimeout(t, l ? s.initialDelay : s.trackClickRepeatFreq), l = !1
              }(), t(document).on("mouseup.html", c), !1
            }
          }), p && I.on("mousedown.html", function (e) {
            if (void 0 === e.originalTarget || e.originalTarget == e.currentTarget) {
              var i, n = t(this), r = n.offset(), a = e.pageX - r.left - y, h = !0, c = function e() {
                i && clearTimeout(i), i = null, t(document).off("mouseup.html", e)
              };
              return function t() {
                var r = n.offset(), u = e.pageX - r.left - M / 2, d = o * s.scrollPagePercent, p = _ * d / (l - o);
                if (a < 0) u < y - p ? j.scrollByX(-d) : it(u); else {
                  if (!(0 < a)) return void c();
                  y + p < u ? j.scrollByX(d) : it(u)
                }
                i = setTimeout(t, h ? s.initialDelay : s.trackClickRepeatFreq), h = !1
              }(), t(document).on("mouseup.html", c), !1
            }
          })), function () {
            if (location.hash && 1 < location.hash.length) {
              var e, i, s = escape(location.hash.substr(1));
              try {
                e = t("#" + s + ', a[name="' + s + '"]')
              } catch (e) {
                return
              }
              e.length && n.find(s) && (0 === a.scrollTop() ? i = setInterval(function () {
                0 < a.scrollTop() && (rt(e, !0), t(document).scrollTop(a.position().top), clearInterval(i))
              }, 50) : (rt(e, !0), t(document).scrollTop(a.position().top)))
            }
          }(), s.hijackInternalLinks && (t(document.body).data("jspHijack") || (t(document.body).data("jspHijack", !0), t(document.body).delegate('a[href*="#"]', "click", function (e) {
            var i, s, n, o, r, a = this.href.substr(0, this.href.indexOf("#")), l = location.href;
            if (-1 !== location.href.indexOf("#") && (l = location.href.substr(0, location.href.indexOf("#"))), a === l) {
              i = escape(this.href.substr(this.href.indexOf("#") + 1));
              try {
                s = t("#" + i + ', a[name="' + i + '"]')
              } catch (e) {
                return
              }
              s.length && ((n = s.closest(".jspScrollable")).data("jsp").scrollToElement(s, !0), n[0].scrollIntoView && (o = t(window).scrollTop(), ((r = s.offset().top) < o || r > o + t(window).height()) && n[0].scrollIntoView()), e.preventDefault())
            }
          })))) : (e.removeClass("jspScrollable"), n.css({
            top: 0,
            left: 0,
            width: a.width() - O
          }), a.off($), n.find(":input,a").off("focus.jsp"), e.attr("tabindex", "-1").removeAttr("tabindex").off("keydown.jsp keypress.jsp"), n.off(".jsp"), Q()), s.resizeSensor || !s.autoReinitialise || H ? s.resizeSensor || s.autoReinitialise || !H || clearInterval(H) : H = setInterval(function () {
            U(s)
          }, s.autoReinitialiseDelay), s.resizeSensor && !q && (V(n, Y), V(e, Y), V(e.parent(), Y), window.addEventListener("resize", Y), q = !0), F && e.scrollTop(0) && nt(F, !1), B && e.scrollLeft(0) && ot(B, !1), e.trigger("jsp-initialised", [p || d])
        }

        function V(t, e) {
          var i, s, n = document.createElement("div"), o = document.createElement("div"),
            r = document.createElement("div"), a = document.createElement("div"), l = document.createElement("div");
          n.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;", o.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;", a.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;", r.style.cssText = "position: absolute; left: 0; top: 0;", l.style.cssText = "position: absolute; left: 0; top: 0; width: 200%; height: 200%;";
          var h = function () {
            r.style.width = o.offsetWidth + 10 + "px", r.style.height = o.offsetHeight + 10 + "px", o.scrollLeft = o.scrollWidth, o.scrollTop = o.scrollHeight, a.scrollLeft = a.scrollWidth, a.scrollTop = a.scrollHeight, i = t.width(), s = t.height()
          };
          o.addEventListener("scroll", function () {
            (t.width() > i || t.height() > s) && e.apply(this, []), h()
          }.bind(this)), a.addEventListener("scroll", function () {
            (t.width() < i || t.height() < s) && e.apply(this, []), h()
          }.bind(this)), o.appendChild(r), a.appendChild(l), n.appendChild(o), n.appendChild(a), t.append(n), "static" === window.getComputedStyle(t[0], null).getPropertyValue("position") && (t[0].style.position = "relative"), h()
        }

        function K() {
          w.height(C + "px"), m = 0, x = s.verticalGutter + w.outerWidth(), n.width(o - x - O);
          try {
            0 === b.position().left && n.css("margin-left", x + "px")
          } catch (t) {
          }
        }

        function X() {
          a.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
            P -= t(this).outerWidth()
          }), I.width(P + "px"), y = 0
        }

        function G(t, e, i, s) {
          var n, o = "before", r = "after";
          "os" == e && (e = /Mac/.test(navigator.platform) ? "after" : "split"), e == o ? r = e : e == r && (o = e, n = i, i = s, s = n), t[o](i)[r](s)
        }

        function Z(e, i, n) {
          return function () {
            return function (e, i, n, o) {
              n = t(n).addClass("jspActive");
              var r, a, l = !0;
              (function t() {
                0 !== e && j.scrollByX(e * s.arrowButtonSpeed), 0 !== i && j.scrollByY(i * s.arrowButtonSpeed), a = setTimeout(t, l ? s.initialDelay : s.arrowRepeatFreq), l = !1
              })(), r = o ? "mouseout.jsp" : "mouseup.jsp", (o = o || t("html")).on(r, function () {
                n.removeClass("jspActive"), a && clearTimeout(a), a = null, o.off(r)
              })
            }(e, i, this, n), this.blur(), !1
          }
        }

        function Q() {
          I && I.off("mousedown.jsp"), w && w.off("mousedown.jsp")
        }

        function J() {
          t("html").off("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), f && f.removeClass("jspActive"), v && v.removeClass("jspActive")
        }

        function tt(i, n) {
          if (d) {
            i < 0 ? i = 0 : g < i && (i = g);
            var o = new t.Event("jsp-will-scroll-y");
            if (e.trigger(o, [i]), !o.isDefaultPrevented()) {
              var a = i || 0, l = 0 === a, c = a == g, u = -i / g * (h - r);
              void 0 === n && (n = s.animateScroll), n ? j.animate(f, "top", i, et, function () {
                e.trigger("jsp-user-scroll-y", [-u, l, c])
              }) : (f.css("top", i), et(i), e.trigger("jsp-user-scroll-y", [-u, l, c]))
            }
          }
        }

        function et(t) {
          void 0 === t && (t = f.position().top), a.scrollTop(0);
          var i, o, l = 0 === (m = t || 0), c = m == g, u = -t / g * (h - r);
          W == l && R == c || (W = l, R = c, e.trigger("jsp-arrow-change", [W, R, L, F])), i = l, o = c, s.showArrows && (D[i ? "addClass" : "removeClass"]("jspDisabled"), T[o ? "addClass" : "removeClass"]("jspDisabled")), n.css("top", u), e.trigger("jsp-scroll-y", [-u, l, c]).trigger("scroll")
        }

        function it(i, n) {
          if (p) {
            i < 0 ? i = 0 : _ < i && (i = _);
            var r = new t.Event("jsp-will-scroll-x");
            if (e.trigger(r, [i]), !r.isDefaultPrevented()) {
              var a = i || 0, h = 0 === a, c = a == _, u = -i / _ * (l - o);
              void 0 === n && (n = s.animateScroll), n ? j.animate(v, "left", i, st, function () {
                e.trigger("jsp-user-scroll-x", [-u, h, c])
              }) : (v.css("left", i), st(i), e.trigger("jsp-user-scroll-x", [-u, h, c]))
            }
          }
        }

        function st(t) {
          void 0 === t && (t = v.position().left), a.scrollTop(0);
          var i, r, h = 0 === (y = t || 0), c = y == _, u = -t / _ * (l - o);
          L == h && F == c || (L = h, F = c, e.trigger("jsp-arrow-change", [W, R, L, F])), i = h, r = c, s.showArrows && (E[i ? "addClass" : "removeClass"]("jspDisabled"), A[r ? "addClass" : "removeClass"]("jspDisabled")), n.css("left", u), e.trigger("jsp-scroll-x", [-u, h, c]).trigger("scroll")
        }

        function nt(t, e) {
          tt(t / (h - r) * g, e)
        }

        function ot(t, e) {
          it(t / (l - o) * _, e)
        }

        function rt(e, i, n) {
          var l, h, c, u, d, p, f, g, m, v = 0, _ = 0;
          try {
            l = t(e)
          } catch (e) {
            return
          }
          for (h = l.outerHeight(), c = l.outerWidth(), a.scrollTop(0), a.scrollLeft(0); !l.is(".jspPane");) if (v += l.position().top, _ += l.position().left, l = l.offsetParent(), /^body|html$/i.test(l[0].nodeName)) return;
          p = (u = lt()) + r, v < u || i ? g = v - s.horizontalGutter : p < v + h && (g = v - r + h + s.horizontalGutter), isNaN(g) || nt(g, n), f = (d = at()) + o, _ < d || i ? m = _ - s.horizontalGutter : f < _ + c && (m = _ - o + c + s.horizontalGutter), isNaN(m) || ot(m, n)
        }

        function at() {
          return -n.position().left
        }

        function lt() {
          return -n.position().top
        }

        function ht() {
          return !1
        }

        "border-box" === e.css("box-sizing") ? O = z = 0 : (z = e.css("paddingTop") + " " + e.css("paddingRight") + " " + e.css("paddingBottom") + " " + e.css("paddingLeft"), O = (parseInt(e.css("paddingLeft"), 10) || 0) + (parseInt(e.css("paddingRight"), 10) || 0)), t.extend(j, {
          reinitialise: function (e) {
            U(e = t.extend({}, s, e))
          }, scrollToElement: function (t, e, i) {
            rt(t, e, i)
          }, scrollTo: function (t, e, i) {
            ot(t, i), nt(e, i)
          }, scrollToX: function (t, e) {
            ot(t, e)
          }, scrollToY: function (t, e) {
            nt(t, e)
          }, scrollToPercentX: function (t, e) {
            ot(t * (l - o), e)
          }, scrollToPercentY: function (t, e) {
            nt(t * (h - r), e)
          }, scrollBy: function (t, e, i) {
            j.scrollByX(t, i), j.scrollByY(e, i)
          }, scrollByX: function (t, e) {
            it((at() + Math[t < 0 ? "floor" : "ceil"](t)) / (l - o) * _, e)
          }, scrollByY: function (t, e) {
            tt((lt() + Math[t < 0 ? "floor" : "ceil"](t)) / (h - r) * g, e)
          }, positionDragX: function (t, e) {
            it(t, e)
          }, positionDragY: function (t, e) {
            tt(t, e)
          }, animate: function (t, e, i, n, o) {
            var r = {};
            r[e] = i, t.animate(r, {
              duration: s.animateDuration,
              easing: s.animateEase,
              queue: !1,
              step: n,
              complete: o
            })
          }, getContentPositionX: function () {
            return at()
          }, getContentPositionY: function () {
            return lt()
          }, getContentWidth: function () {
            return l
          }, getContentHeight: function () {
            return h
          }, getPercentScrolledX: function () {
            return at() / (l - o)
          }, getPercentScrolledY: function () {
            return lt() / (h - r)
          }, getIsScrollableH: function () {
            return p
          }, getIsScrollableV: function () {
            return d
          }, getContentPane: function () {
            return n
          }, scrollToBottom: function (t) {
            tt(g, t)
          }, hijackInternalLinks: t.noop, destroy: function () {
            var t, i;
            t = lt(), i = at(), e.removeClass("jspScrollable").off(".jsp"), n.off(".jsp"), e.replaceWith(B.append(n.children())), B.scrollTop(t), B.scrollLeft(i), H && clearInterval(H)
          }
        }), U(i)
      }

      return e = t.extend({}, t.fn.jScrollPane.defaults, e), t.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
        e[this] = e[this] || e.speed
      }), this.each(function () {
        var s = t(this), n = s.data("jsp");
        n ? n.reinitialise(e) : (t("script", s).filter('[type="text/javascript"],:not([type])').remove(), n = new i(s, e), s.data("jsp", n))
      })
    }, t.fn.jScrollPane.defaults = {
      showArrows: !1,
      maintainPosition: !0,
      stickToBottom: !1,
      stickToRight: !1,
      clickOnTrack: !0,
      autoReinitialise: !1,
      autoReinitialiseDelay: 500,
      verticalDragMinHeight: 0,
      verticalDragMaxHeight: 99999,
      horizontalDragMinWidth: 0,
      horizontalDragMaxWidth: 99999,
      contentWidth: void 0,
      animateScroll: !1,
      animateDuration: 300,
      animateEase: "linear",
      hijackInternalLinks: !1,
      verticalGutter: 4,
      horizontalGutter: 4,
      mouseWheelSpeed: 3,
      arrowButtonSpeed: 0,
      arrowRepeatFreq: 50,
      arrowScrollOnHover: !1,
      trackClickSpeed: 0,
      trackClickRepeatFreq: 70,
      verticalArrowPositions: "split",
      horizontalArrowPositions: "split",
      enableKeyboardNavigation: !0,
      hideFocus: !1,
      keyboardSpeed: 0,
      initialDelay: 300,
      speed: 30,
      scrollPagePercent: .8,
      alwaysShowVScroll: !1,
      alwaysShowHScroll: !1,
      resizeSensor: !1,
      resizeSensorDelay: 0
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s = i(37);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  i(3), i(8), i(11), i(19), i(12), i(13), i(5), i(14), i(15), i(20), i(7), i(16), i(40), i(24), i(41), i(42), i(43), i(44), i(18), i(26), i(25), i(45), i(46), i(17), i(6), i(47), i(48), i(49), i(50), i(51), i(52), i(4), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(27), i(63), i(28), i(64), i(65), i(66), i(68), i(70), i(72), i(74), i(76), i(78), i(80), i(82), i(84), i(86), i(88), i(90), i(92), i(94), i(96), i(98), i(100), i(102)
}, function (t, e, i) {
  var s, n, o;
  n = [i(0), i(1)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.fn.form = function () {
      return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(16), i(6), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    t.widget("ui.droppable", {
      version: "1.12.1",
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        addClasses: !0,
        greedy: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null
      },
      _create: function () {
        var e, i = this.options, s = i.accept;
        this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
          return t.is(s)
        }, this.proportions = function () {
          if (!arguments.length) return e || (e = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight
          });
          e = arguments[0]
        }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
      },
      _addToManager: function (e) {
        t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
      },
      _splice: function (t) {
        for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
      },
      _destroy: function () {
        var e = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(e)
      },
      _setOption: function (e, i) {
        if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
          return t.is(i)
        }; else if ("scope" === e) {
          var s = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(s), this._addToManager(i)
        }
        this._super(e, i)
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
      },
      _drop: function (i, s) {
        var n = s || t.ui.ddmanager.current, o = !1;
        return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
          var s = t(this).droppable("instance");
          if (s.options.greedy && !s.options.disabled && s.options.scope === n.options.scope && s.accept.call(s.element[0], n.currentItem || n.element) && e(n, t.extend(s, {offset: s.element.offset()}), s.options.tolerance, i)) return o = !0, !1
        }), !o && !!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", i, this.ui(n)), this.element))
      },
      ui: function (t) {
        return {draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs}
      },
      _addHoverClass: function () {
        this._addClass("ui-droppable-hover")
      },
      _removeHoverClass: function () {
        this._removeClass("ui-droppable-hover")
      },
      _addActiveClass: function () {
        this._addClass("ui-droppable-active")
      },
      _removeActiveClass: function () {
        this._removeClass("ui-droppable-active")
      }
    });
    var e = t.ui.intersect = function () {
      function t(t, e, i) {
        return t >= e && t < e + i
      }

      return function (e, i, s, n) {
        if (!i.offset) return !1;
        var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          r = (e.positionAbs || e.position.absolute).top + e.margins.top, a = o + e.helperProportions.width,
          l = r + e.helperProportions.height, h = i.offset.left, c = i.offset.top, u = h + i.proportions().width,
          d = c + i.proportions().height;
        switch (s) {
          case"fit":
            return h <= o && a <= u && c <= r && l <= d;
          case"intersect":
            return h < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < u && c < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
          case"pointer":
            return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
          case"touch":
            return (r >= c && r <= d || l >= c && l <= d || r < c && l > d) && (o >= h && o <= u || a >= h && a <= u || o < h && a > u);
          default:
            return !1
        }
      }
    }();
    return t.ui.ddmanager = {
      current: null, droppables: {default: []}, prepareOffsets: function (e, i) {
        var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], r = i ? i.type : null,
          a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
        t:for (s = 0; s < o.length; s++) if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
          for (n = 0; n < a.length; n++) if (a[n] === o[s].element[0]) {
            o[s].proportions().height = 0;
            continue t
          }
          o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === r && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
            width: o[s].element[0].offsetWidth,
            height: o[s].element[0].offsetHeight
          }))
        }
      }, drop: function (i, s) {
        var n = !1;
        return t.each((t.ui.ddmanager.droppables[i.options.scope] || []).slice(), function () {
          this.options && (!this.options.disabled && this.visible && e(i, this, this.options.tolerance, s) && (n = this._drop.call(this, s) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], i.currentItem || i.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, s)))
        }), n
      }, dragStart: function (e, i) {
        e.element.parentsUntil("body").on("scroll.droppable", function () {
          e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        })
      }, drag: function (i, s) {
        i.options.refreshPositions && t.ui.ddmanager.prepareOffsets(i, s), t.each(t.ui.ddmanager.droppables[i.options.scope] || [], function () {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
            var n, o, r, a = e(i, this, this.options.tolerance, s),
              l = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
            l && (this.options.greedy && (o = this.options.scope, (r = this.element.parents(":data(ui-droppable)").filter(function () {
              return t(this).droppable("instance").options.scope === o
            })).length && ((n = t(r[0]).droppable("instance")).greedyChild = "isover" === l)), n && "isover" === l && (n.isover = !1, n.isout = !0, n._out.call(n, s)), this[l] = !0, this["isout" === l ? "isover" : "isout"] = !1, this["isover" === l ? "_over" : "_out"].call(this, s), n && "isout" === l && (n.isout = !1, n.isover = !0, n._over.call(n, s)))
          }
        })
      }, dragStop: function (e, i) {
        e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
      }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
      options: {hoverClass: !1, activeClass: !1},
      _addActiveClass: function () {
        this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
      },
      _removeActiveClass: function () {
        this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
      },
      _addHoverClass: function () {
        this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
      },
      _removeHoverClass: function () {
        this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
      }
    }), t.ui.droppable
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(6), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.selectable", t.ui.mouse, {
      version: "1.12.1",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null
      },
      _create: function () {
        var e = this;
        this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
          e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
            var i = t(this), s = i.offset(), n = {left: s.left - e.elementPos.left, top: s.top - e.elementPos.top};
            t.data(this, "selectable-item", {
              element: this,
              $element: i,
              left: n.left,
              top: n.top,
              right: n.left + i.outerWidth(),
              bottom: n.top + i.outerHeight(),
              startselected: !1,
              selected: i.hasClass("ui-selected"),
              selecting: i.hasClass("ui-selecting"),
              unselecting: i.hasClass("ui-unselecting")
            })
          })
        }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
      },
      _destroy: function () {
        this.selectees.removeData("selectable-item"), this._mouseDestroy()
      },
      _mouseStart: function (e) {
        var i = this, s = this.options;
        this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
          left: e.pageX,
          top: e.pageY,
          width: 0,
          height: 0
        }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
          var s = t.data(this, "selectable-item");
          s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
        }), t(e.target).parents().addBack().each(function () {
          var s, n = t.data(this, "selectable-item");
          if (n) return s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {selecting: n.element}) : i._trigger("unselecting", e, {unselecting: n.element}), !1
        }))
      },
      _mouseDrag: function (e) {
        if (this.dragged = !0, !this.options.disabled) {
          var i, s = this, n = this.options, o = this.opos[0], r = this.opos[1], a = e.pageX, l = e.pageY;
          return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
            left: o,
            top: r,
            width: a - o,
            height: l - r
          }), this.selectees.each(function () {
            var i = t.data(this, "selectable-item"), h = !1, c = {};
            i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? h = !(c.left > a || c.right < o || c.top > l || c.bottom < r) : "fit" === n.tolerance && (h = c.left > o && c.right < a && c.top > r && c.bottom < l), h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))))
          }), !1
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
          var s = t.data(this, "selectable-item");
          i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
        }), t(".ui-selecting", this.element[0]).each(function () {
          var s = t.data(this, "selectable-item");
          i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
        }), this._trigger("stop", e), this.helper.remove(), !1
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(6), i(11), i(21), i(15), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.sortable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null
      },
      _isOverAxis: function (t, e, i) {
        return t >= e && t < e + i
      },
      _isFloating: function (t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
      },
      _create: function () {
        this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName()
      },
      _setHandleClassName: function () {
        var e = this;
        this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
          e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
        })
      },
      _destroy: function () {
        this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
        return this
      },
      _mouseCapture: function (e, i) {
        var s = null, n = !1, o = this;
        return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(e), t(e.target).parents().each(function () {
          if (t.data(this, o.widgetName + "-item") === o) return s = t(this), !1
        }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !s || this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function () {
          this === e.target && (n = !0)
        }), !n) || (this.currentItem = s, this._removeCurrentsFromItems(), 0)))
      },
      _mouseStart: function (e, i, s) {
        var n, o, r = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left
        }, t.extend(this.offset, {
          click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
        return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
      },
      _mouseDrag: function (e) {
        var i, s, n, o, r = this.options, a = !1;
        for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && !(n === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === n || t.contains(this.placeholder[0], n) || "semi-dynamic" === this.options.type && t.contains(this.element[0], n))) {
          if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(e, s), this._trigger("change", e, this._uiHash());
          break
        }
        return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
      },
      _mouseStop: function (e, i) {
        if (e) {
          if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
            var s = this, n = this.placeholder.offset(), o = this.options.axis, r = {};
            o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function () {
              s._clear(e)
            })
          } else this._clear(e, i);
          return !1
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp(new t.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
          for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
          helper: null,
          dragging: !1,
          reverting: !1,
          _noFinalSort: null
        }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
      },
      serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, t(i).each(function () {
          var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
          i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
        }), !s.length && e.key && s.push(e.key + "="), s.join("&")
      },
      toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, i.each(function () {
          s.push(t(e.item || this).attr(e.attribute || "id") || "")
        }), s
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top,
          n = s + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height,
          h = this.offset.click.top, c = this.offset.click.left,
          u = "x" === this.options.axis || s + h > a && s + h < l,
          d = "y" === this.options.axis || e + c > o && e + c < r, p = u && d;
        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
      },
      _intersectsWithPointer: function (t) {
        var e, i,
          s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;
        return !!o && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
        return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up")
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left")
      },
      refresh: function (t) {
        return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
      },
      _getItemsAsjQuery: function (e) {
        var i, s, n, o, r = [], a = [], l = this._connectWith();
        if (l && e) for (i = l.length - 1; i >= 0; i--) for (n = t(l[i], this.document[0]), s = n.length - 1; s >= 0; s--) (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);

        function h() {
          r.push(this)
        }

        for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
          options: this.options,
          item: this.currentItem
        }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(h);
        return t(r)
      },
      _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function (t) {
          for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
          return !0
        })
      },
      _refreshItems: function (e) {
        this.items = [], this.containers = [this];
        var i, s, n, o, r, a, l, h, c = this.items,
          u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]],
          d = this._connectWith();
        if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
        for (i = u.length - 1; i >= 0; i--) for (r = u[i][1], a = u[i][0], s = 0, h = a.length; s < h; s++) (l = t(a[s])).data(this.widgetName + "-item", r), c.push({
          item: l,
          instance: r,
          width: 0,
          height: 0,
          left: 0,
          top: 0
        })
      },
      refreshPositions: function (e) {
        var i, s, n, o;
        for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--) (s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
        if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        return this
      },
      _createPlaceholder: function (e) {
        var i, s = (e = e || this).options;
        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
          element: function () {
            var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]);
            return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
          }, update: function (t, n) {
            i && !s.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
          }
        }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
      },
      _createTrPlaceholder: function (e, i) {
        var s = this;
        e.children().each(function () {
          t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
        })
      },
      _contactContainers: function (e) {
        var i, s, n, o, r, a, l, h, c, u, d = null, p = null;
        for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
          if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
          d = this.containers[i], p = i
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
        if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
          for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), r = c ? "left" : "top", a = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[r], h = !1, e[u] - l > this.items[s][a] / 2 && (h = !0), Math.abs(e[u] - l) < n && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
          if (!o && !this.options.dropOnEmpty) return;
          if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
          o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
        }
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left")
        }), s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()), s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()), s
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
          left: +e[0],
          top: +e[1] || 0
        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
          top: 0,
          left: 0
        }), {
          top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
        }
      },
      _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
          var t = this.currentItem.position();
          return {
            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
          }
        }
        return {top: 0, left: 0}
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0
        }
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
      },
      _setContainment: function () {
        var e, i, s, n = this.options;
        "parent" === n.containment && (n.containment = this.helper[0].parentNode), "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return {
          top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
          left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
        }
      },
      _generatePosition: function (e) {
        var i, s, n = this.options, o = e.pageX, r = e.pageY,
          a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          l = /(html|body)/i.test(a[0].tagName);
        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
          top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
          left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
        }
      },
      _rearrange: function (t, e, i, s) {
        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s)
        })
      },
      _clear: function (t, e) {
        this.reverting = !1;
        var i, s = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
          for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
          this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
        } else this.currentItem.show();

        function n(t, e, i) {
          return function (s) {
            i._trigger(t, s, e._uiHash(e))
          }
        }

        for (this.fromOutside && !e && s.push(function (t) {
          this._trigger("receive", t, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
          this._trigger("update", t, this._uiHash())
        }), this !== this.currentContainer && (e || (s.push(function (t) {
          this._trigger("remove", t, this._uiHash())
        }), s.push(function (t) {
          return function (e) {
            t._trigger("receive", e, this._uiHash(this))
          }
        }.call(this, this.currentContainer)), s.push(function (t) {
          return function (e) {
            t._trigger("update", e, this._uiHash(this))
          }
        }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
          for (i = 0; i < s.length; i++) s[i].call(this, t);
          this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !this.cancelHelperRemoval
      },
      _trigger: function () {
        !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
      },
      _uiHash: function (e) {
        var i = e || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null
        }
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(5), i(7), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.accordion", {
      version: "1.12.1",
      options: {
        active: 0,
        animate: {},
        classes: {
          "ui-accordion-header": "ui-corner-top",
          "ui-accordion-header-collapsed": "ui-corner-all",
          "ui-accordion-content": "ui-corner-bottom"
        },
        collapsible: !1,
        event: "click",
        header: "> li > :first-child, > :not(li):even",
        heightStyle: "auto",
        icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
        activate: null,
        beforeActivate: null
      },
      hideProps: {
        borderTopWidth: "hide",
        borderBottomWidth: "hide",
        paddingTop: "hide",
        paddingBottom: "hide",
        height: "hide"
      },
      showProps: {
        borderTopWidth: "show",
        borderBottomWidth: "show",
        paddingTop: "show",
        paddingBottom: "show",
        height: "show"
      },
      _create: function () {
        var e = this.options;
        this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
      },
      _getCreateEventData: function () {
        return {header: this.active, panel: this.active.length ? this.active.next() : t()}
      },
      _createIcons: function () {
        var e, i, s = this.options.icons;
        s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
      },
      _destroy: function () {
        var t;
        this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
      },
      _setOption: function (t, e) {
        "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e)
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
      },
      _keydown: function (e) {
        if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1;
          switch (e.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(n + 1) % s];
              break;
            case i.LEFT:
            case i.UP:
              o = this.headers[(n - 1 + s) % s];
              break;
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(e);
              break;
            case i.HOME:
              o = this.headers[0];
              break;
            case i.END:
              o = this.headers[s - 1]
          }
          o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
        }
      },
      _panelKeyDown: function (e) {
        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
      },
      refresh: function () {
        var e = this.options;
        this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
      },
      _processPanels: function () {
        var t = this.headers, e = this.panels;
        this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
      },
      _refresh: function () {
        var e, i = this.options, s = i.heightStyle, n = this.element.parent();
        this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
          var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), n = s.uniqueId().attr("id");
          e.attr("aria-controls", n), s.attr("aria-labelledby", i)
        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1
        }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
          var i = t(this), s = i.css("position");
          "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
        }), this.headers.each(function () {
          e -= t(this).outerHeight(!0)
        }), this.headers.next().each(function () {
          t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
        }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
          var i = t(this).is(":visible");
          i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
        }).height(e))
      },
      _activate: function (e) {
        var i = this._findActive(e)[0];
        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
          target: i,
          currentTarget: i,
          preventDefault: t.noop
        }))
      },
      _findActive: function (e) {
        return "number" == typeof e ? this.headers.eq(e) : t()
      },
      _setupEvents: function (e) {
        var i = {keydown: "_keydown"};
        e && t.each(e.split(" "), function (t, e) {
          i[e] = "_eventHandler"
        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
      },
      _eventHandler: function (e) {
        var i, s, n = this.options, o = this.active, r = t(e.currentTarget), a = r[0] === o[0], l = a && n.collapsible,
          h = l ? t() : r.next(), c = o.next(), u = {oldHeader: o, oldPanel: c, newHeader: l ? t() : r, newPanel: h};
        e.preventDefault(), a && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = r.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
      },
      _toggle: function (e) {
        var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({"aria-hidden": "true"}), s.prev().attr({
          "aria-selected": "false",
          "aria-expanded": "false"
        }), i.length && s.length ? s.prev().attr({
          tabIndex: -1,
          "aria-expanded": "false"
        }) : i.length && this.headers.filter(function () {
          return 0 === parseInt(t(this).attr("tabIndex"), 10)
        }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        })
      },
      _animate: function (t, e, i) {
        var s, n, o, r = this, a = 0, l = t.css("box-sizing"), h = t.length && (!e.length || t.index() < e.index()),
          c = this.options.animate || {}, u = h && c.down || c, d = function () {
            r._toggleComplete(i)
          };
        return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
          duration: o,
          easing: n,
          step: function (t, e) {
            e.now = Math.round(t)
          }
        }), void t.hide().animate(this.showProps, {
          duration: o, easing: n, complete: d, step: function (t, i) {
            i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - a), a = 0)
          }
        })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel, i = e.prev();
        this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(17), i(5), i(8), i(9), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.autocomplete", {
      version: "1.12.1",
      defaultElement: "<input>",
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: {my: "left top", at: "left bottom", collision: "none"},
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, r = "input" === n;
        this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
          keydown: function (n) {
            if (this.element.prop("readOnly")) return e = !0, s = !0, void (i = !0);
            e = !1, s = !1, i = !1;
            var o = t.ui.keyCode;
            switch (n.keyCode) {
              case o.PAGE_UP:
                e = !0, this._move("previousPage", n);
                break;
              case o.PAGE_DOWN:
                e = !0, this._move("nextPage", n);
                break;
              case o.UP:
                e = !0, this._keyEvent("previous", n);
                break;
              case o.DOWN:
                e = !0, this._keyEvent("next", n);
                break;
              case o.ENTER:
                this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                break;
              case o.TAB:
                this.menu.active && this.menu.select(n);
                break;
              case o.ESCAPE:
                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                break;
              default:
                i = !0, this._searchTimeout(n)
            }
          }, keypress: function (s) {
            if (e) return e = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
            if (!i) {
              var n = t.ui.keyCode;
              switch (s.keyCode) {
                case n.PAGE_UP:
                  this._move("previousPage", s);
                  break;
                case n.PAGE_DOWN:
                  this._move("nextPage", s);
                  break;
                case n.UP:
                  this._keyEvent("previous", s);
                  break;
                case n.DOWN:
                  this._keyEvent("next", s)
              }
            }
          }, input: function (t) {
            if (s) return s = !1, void t.preventDefault();
            this._searchTimeout(t)
          }, focus: function () {
            this.selectedItem = null, this.previous = this._value()
          }, blur: function (t) {
            this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t))
          }
        }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
          mousedown: function (e) {
            e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
              delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
            })
          }, menufocus: function (e, i) {
            var s, n;
            if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
              t(e.target).trigger(e.originalEvent)
            });
            n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {item: n}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), (s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))
          }, menuselect: function (e, i) {
            var s = i.item.data("ui-autocomplete-item"), n = this.previous;
            this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
              this.previous = n, this.selectedItem = s
            })), !1 !== this._trigger("select", e, {item: s}) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
          }
        }), this.liveRegion = t("<div>", {
          role: "status",
          "aria-live": "assertive",
          "aria-relevant": "additions"
        }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete")
          }
        })
      },
      _destroy: function () {
        clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
      },
      _setOption: function (t, e) {
        this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
      },
      _isEventTargetInWidget: function (e) {
        var i = this.menu.element[0];
        return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
      },
      _closeOnClickOutside: function (t) {
        this._isEventTargetInWidget(t) || this.close()
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
      },
      _initSource: function () {
        var e, i, s = this;
        t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
          s(t.ui.autocomplete.filter(e, i.term))
        }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
          s.xhr && s.xhr.abort(), s.xhr = t.ajax({
            url: i, data: e, dataType: "json", success: function (t) {
              n(t)
            }, error: function () {
              n([])
            }
          })
        }) : this.source = this.options.source
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching), this.searching = this._delay(function () {
          var e = this.term === this._value(), i = this.menu.element.is(":visible"),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
          e && (!e || i || s) || (this.selectedItem = null, this.search(null, t))
        }, this.options.delay)
      },
      search: function (t, e) {
        return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
      },
      _search: function (t) {
        this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
      },
      _response: function () {
        var e = ++this.requestIndex;
        return t.proxy(function (t) {
          e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
        }, this)
      },
      __response: function (t) {
        t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
      },
      close: function (t) {
        this.cancelSearch = !0, this._close(t)
      },
      _close: function (t) {
        this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
      },
      _change: function (t) {
        this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
      },
      _normalize: function (e) {
        return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
          return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {
            label: e.label || e.value,
            value: e.value || e.label
          })
        })
      },
      _suggest: function (e) {
        var i = this.menu.element.empty();
        this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
      },
      _renderMenu: function (e, i) {
        var s = this;
        t.each(i, function (t, i) {
          s._renderItemData(e, i)
        })
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-autocomplete-item", e)
      },
      _renderItem: function (e, i) {
        return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
      },
      _move: function (t, e) {
        if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e);
        this.search(null, e)
      },
      widget: function () {
        return this.menu.element
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments)
      },
      _keyEvent: function (t, e) {
        this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
      },
      _isContentEditable: function (t) {
        if (!t.length) return !1;
        var e = t.prop("contentEditable");
        return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
      }
    }), t.extend(t.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      }, filter: function (e, i) {
        var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
        return t.grep(e, function (t) {
          return s.test(t.label || t.value || t)
        })
      }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (t) {
            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
          }
        }
      }, __response: function (e) {
        var i;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
      }
    }), t.ui.autocomplete
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  /*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(5)], void 0 === (o = "function" == typeof (s = function (t) {
    var e;

    function i() {
      this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }, this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(e) {
      var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e.on("mouseout", i, function () {
        t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
      }).on("mouseover", i, n)
    }

    function n() {
      t.datepicker._isDisabledDatepicker(e.inline ? e.dpDiv.parent()[0] : e.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function o(e, i) {
      for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]);
      return e
    }

    return t.extend(t.ui, {datepicker: {version: "1.12.1"}}), t.extend(i.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv
      },
      setDefaults: function (t) {
        return o(this._defaults, t || {}), this
      },
      _attachDatepicker: function (e, i) {
        var s, n, o;
        n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
      },
      _newInst: function (e, i) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: i,
          dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
        }
      },
      _connectDatepicker: function (e, i) {
        var s = t(e);
        i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
      },
      _attachments: function (e, i) {
        var s, n, o, r = this._get(i, "appendText"), a = this._get(i, "isRTL");
        i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), "focus" !== (s = this._get(i, "showOn")) && "both" !== s || e.on("focus", this._showDatepicker), "button" !== s && "both" !== s || (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
          src: o,
          alt: n,
          title: n
        }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
          src: o,
          alt: n,
          title: n
        }) : n)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
          return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
        }))
      },
      _autoSize: function (t) {
        if (this._get(t, "autoSize") && !t.inline) {
          var e, i, s, n, o = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
          r.match(/[DM]/) && (e = function (t) {
            for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
            return s
          }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
        }
      },
      _inlineDatepicker: function (e, i) {
        var s = t(e);
        s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
      },
      _dialogDatepicker: function (e, i, s, n, r) {
        var a, l, h, c, u, d = this._dialogInst;
        return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
      },
      _destroyDatepicker: function (i) {
        var s, n = t(i), o = t.data(i, "datepicker");
        n.hasClass(this.markerClassName) && (s = i.nodeName.toLowerCase(), t.removeData(i, "datepicker"), "input" === s ? (o.append.remove(), o.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== s && "span" !== s || n.removeClass(this.markerClassName).empty(), e === o && (e = null))
      },
      _enableDatepicker: function (e) {
        var i, s, n = t(e), o = t.data(e, "datepicker");
        n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function () {
          this.disabled = !1
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        })) : "div" !== i && "span" !== i || ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t
        }))
      },
      _disableDatepicker: function (e) {
        var i, s, n = t(e), o = t.data(e, "datepicker");
        n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function () {
          this.disabled = !0
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        })) : "div" !== i && "span" !== i || ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t
        }), this._disabledInputs[this._disabledInputs.length] = e)
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
        return !1
      },
      _getInst: function (e) {
        try {
          return t.data(e, "datepicker")
        } catch (t) {
          throw"Missing instance data for this datepicker"
        }
      },
      _optionDatepicker: function (e, i, s) {
        var n, r, a, l, h = this._getInst(e);
        if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null;
        n = i || {}, "string" == typeof i && ((n = {})[i] = s), h && (this._curInst === h && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, n), null !== a && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, r), this._updateAlternate(h), this._updateDatepicker(h))
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i)
      },
      _refreshDatepicker: function (t) {
        var e = this._getInst(t);
        e && this._updateDatepicker(e)
      },
      _setDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
      },
      _getDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
      },
      _doKeyDown: function (e) {
        var i, s, n, o = t.datepicker._getInst(e.target), r = !0, a = o.dpDiv.is(".ui-datepicker-rtl");
        if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
          case 9:
            t.datepicker._hideDatepicker(), r = !1;
            break;
          case 13:
            return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
          case 27:
            t.datepicker._hideDatepicker();
            break;
          case 33:
            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
            break;
          case 34:
            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
            break;
          case 35:
            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
            break;
          case 36:
            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
            break;
          case 37:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
            break;
          case 38:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
            break;
          case 39:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
            break;
          case 40:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
            break;
          default:
            r = !1
        } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
        r && (e.preventDefault(), e.stopPropagation())
      },
      _doKeyPress: function (e) {
        var i, s, n = t.datepicker._getInst(e.target);
        if (t.datepicker._get(n, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
      },
      _doKeyUp: function (e) {
        var i = t.datepicker._getInst(e.target);
        if (i.input.val() !== i.lastVal) try {
          t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
        } catch (t) {
        }
        return !0
      },
      _showDatepicker: function (e) {
        var i, s, n, r, a, l, h;
        "input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (o(i.settings, n), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
          return !(r |= "fixed" === t(this).css("position"))
        }), a = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: a.left + "px",
          top: a.top + "px"
        }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function (t) {
          for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
          }
          return 0
        }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
      },
      _updateDatepicker: function (i) {
        this.maxRows = 4, e = i, i.dpDiv.empty().append(this._generateHTML(i)), this._attachHandlers(i);
        var s, o = this._getNumberOfMonths(i), r = o[1], a = i.dpDiv.find("." + this._dayOverClass + " a");
        a.length > 0 && n.apply(a.get(0)), i.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && i.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", 17 * r + "em"), i.dpDiv[(1 !== o[0] || 1 !== o[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), i.dpDiv[(this._get(i, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), i === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), i.yearshtml && (s = i.yearshtml, setTimeout(function () {
          s === i.yearshtml && i.yearshtml && i.dpDiv.find("select.ui-datepicker-year:first").replaceWith(i.yearshtml), s = i.yearshtml = null
        }, 0))
      },
      _shouldFocusInput: function (t) {
        return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
      },
      _checkOffset: function (e, i, s) {
        var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth() : 0,
          a = e.input ? e.input.outerHeight() : 0,
          l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
          h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
        return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
      },
      _findPos: function (e) {
        for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
        return [(i = t(e).offset()).left, i.top]
      },
      _hideDatepicker: function (e) {
        var i, s, n, o, r = this._curInst;
        !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function () {
          t.datepicker._tidyDialog(r)
        }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
      },
      _tidyDialog: function (t) {
        t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
      },
      _checkExternalClick: function (e) {
        if (t.datepicker._curInst) {
          var i = t(e.target), s = t.datepicker._getInst(i[0]);
          (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker()
        }
      },
      _adjustDate: function (e, i, s) {
        var n = t(e), o = this._getInst(n[0]);
        this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
      },
      _gotoToday: function (e) {
        var i, s = t(e), n = this._getInst(s[0]);
        this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
      },
      _selectMonthYear: function (e, i, s) {
        var n = t(e), o = this._getInst(n[0]);
        o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
      },
      _selectDay: function (e, i, s, n) {
        var o, r = t(e);
        t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((o = this._getInst(r[0])).selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
      },
      _clearDate: function (e) {
        var i = t(e);
        this._selectDate(i, "")
      },
      _selectDate: function (e, i) {
        var s, n = t(e), o = this._getInst(n[0]);
        i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" !== r(o.input[0]) && o.input.trigger("focus"), this._lastInput = null)
      },
      _updateAlternate: function (e) {
        var i, s, n, o = this._get(e, "altField");
        o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
      },
      noWeekends: function (t) {
        var e = t.getDay();
        return [e > 0 && e < 6, ""]
      },
      iso8601Week: function (t) {
        var e, i = new Date(t.getTime());
        return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
      },
      parseDate: function (e, i, s) {
        if (null == e || null == i) throw"Invalid arguments";
        if ("" === (i = "object" === r(i) ? i.toString() : i + "")) return null;
        var n, o, a, l, h = 0, c = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
          d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          p = (s ? s.dayNames : null) || this._defaults.dayNames,
          f = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          g = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, v = -1, _ = -1, y = -1, b = !1,
          w = function (t) {
            var i = n + 1 < e.length && e.charAt(n + 1) === t;
            return i && n++, i
          }, x = function (t) {
            var e = w(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
              n = new RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"), o = i.substring(h).match(n);
            if (!o) throw"Missing number at position " + h;
            return h += o[0].length, parseInt(o[0], 10)
          }, C = function (e, s, n) {
            var o = -1, r = t.map(w(e) ? n : s, function (t, e) {
              return [[e, t]]
            }).sort(function (t, e) {
              return -(t[1].length - e[1].length)
            });
            if (t.each(r, function (t, e) {
              var s = e[1];
              if (i.substr(h, s.length).toLowerCase() === s.toLowerCase()) return o = e[0], h += s.length, !1
            }), -1 !== o) return o + 1;
            throw"Unknown name at position " + h
          }, k = function () {
            if (i.charAt(h) !== e.charAt(n)) throw"Unexpected literal at position " + h;
            h++
          };
        for (n = 0; n < e.length; n++) if (b) "'" !== e.charAt(n) || w("'") ? k() : b = !1; else switch (e.charAt(n)) {
          case"d":
            _ = x("d");
            break;
          case"D":
            C("D", d, p);
            break;
          case"o":
            y = x("o");
            break;
          case"m":
            v = x("m");
            break;
          case"M":
            v = C("M", f, g);
            break;
          case"y":
            m = x("y");
            break;
          case"@":
            m = (l = new Date(x("@"))).getFullYear(), v = l.getMonth() + 1, _ = l.getDate();
            break;
          case"!":
            m = (l = new Date((x("!") - this._ticksTo1970) / 1e4)).getFullYear(), v = l.getMonth() + 1, _ = l.getDate();
            break;
          case"'":
            w("'") ? k() : b = !0;
            break;
          default:
            k()
        }
        if (h < i.length && (a = i.substr(h), !/^\s+/.test(a))) throw"Extra/unparsed characters found in date: " + a;
        if (-1 === m ? m = (new Date).getFullYear() : m < 100 && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= u ? 0 : -100)), y > -1) for (v = 1, _ = y; !(_ <= (o = this._getDaysInMonth(m, v - 1)));) v++, _ -= o;
        if ((l = this._daylightSavingAdjust(new Date(m, v - 1, _))).getFullYear() !== m || l.getMonth() + 1 !== v || l.getDate() !== _) throw"Invalid date";
        return l
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
      formatDate: function (t, e, i) {
        if (!e) return "";
        var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
            var i = s + 1 < t.length && t.charAt(s + 1) === e;
            return i && s++, i
          }, h = function (t, e, i) {
            var s = "" + e;
            if (l(t)) for (; s.length < i;) s = "0" + s;
            return s
          }, c = function (t, e, i, s) {
            return l(t) ? s[e] : i[e]
          }, u = "", d = !1;
        if (e) for (s = 0; s < t.length; s++) if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) {
          case"d":
            u += h("d", e.getDate(), 2);
            break;
          case"D":
            u += c("D", e.getDay(), n, o);
            break;
          case"o":
            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;
          case"m":
            u += h("m", e.getMonth() + 1, 2);
            break;
          case"M":
            u += c("M", e.getMonth(), r, a);
            break;
          case"y":
            u += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
            break;
          case"@":
            u += e.getTime();
            break;
          case"!":
            u += 1e4 * e.getTime() + this._ticksTo1970;
            break;
          case"'":
            l("'") ? u += "'" : d = !0;
            break;
          default:
            u += t.charAt(s)
        }
        return u
      },
      _possibleChars: function (t) {
        var e, i = "", s = !1, n = function (i) {
          var s = e + 1 < t.length && t.charAt(e + 1) === i;
          return s && e++, s
        };
        for (e = 0; e < t.length; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
          case"d":
          case"m":
          case"y":
          case"@":
            i += "0123456789";
            break;
          case"D":
          case"M":
            return null;
          case"'":
            n("'") ? i += "'" : s = !0;
            break;
          default:
            i += t.charAt(e)
        }
        return i
      },
      _get: function (t, e) {
        return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t), o = n, r = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, s, r) || n
          } catch (t) {
            s = e ? "" : s
          }
          t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
      },
      _determineDate: function (e, i, s) {
        var n = null == i || "" === i ? s : "string" == typeof i ? function (i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (t) {
          }
          for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), r = s.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
            switch (l[2] || "d") {
              case"d":
              case"D":
                r += parseInt(l[1], 10);
                break;
              case"w":
              case"W":
                r += 7 * parseInt(l[1], 10);
                break;
              case"m":
              case"M":
                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(n, o));
                break;
              case"y":
              case"Y":
                n += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(n, o))
            }
            l = a.exec(i)
          }
          return new Date(n, o, r)
        }(i) : "number" == typeof i ? isNaN(i) ? s : function (t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
        }(i) : new Date(i.getTime());
        return (n = n && "Invalid Date" === n.toString() ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
      },
      _daylightSavingAdjust: function (t) {
        return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
      },
      _setDate: function (t, e, i) {
        var s = !e, n = t.selectedMonth, o = t.selectedYear,
          r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
        t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
      },
      _getDate: function (t) {
        return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
      },
      _attachHandlers: function (e) {
        var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
          var e = {
            prev: function () {
              t.datepicker._adjustDate(s, -i, "M")
            }, next: function () {
              t.datepicker._adjustDate(s, +i, "M")
            }, hide: function () {
              t.datepicker._hideDatepicker()
            }, today: function () {
              t.datepicker._gotoToday(s)
            }, selectDay: function () {
              return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
              return t.datepicker._selectMonthYear(s, this, "M"), !1
            }, selectYear: function () {
              return t.datepicker._selectMonthYear(s, this, "Y"), !1
            }
          };
          t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
        })
      },
      _generateHTML: function (t) {
        var e, i, s, n, o, r, a, l, h, c, u, d, p, f, g, m, v, _, y, b, w, x, C, k, D, T, S, I, P, M, E, A, H, z, O, N,
          j, W, L, R = new Date, F = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          B = this._get(t, "isRTL"), q = this._get(t, "showButtonPanel"), $ = this._get(t, "hideIfNoPrevNext"),
          Y = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t),
          V = this._get(t, "showCurrentAtPos"), K = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1],
          G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          Z = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), J = t.drawMonth - V, tt = t.drawYear;
        if (J < 0 && (J += 12, tt--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = Z && e < Z ? Z : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) --J < 0 && (J = 11, tt--);
        for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - K, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : $ ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + K, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : $ ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : F, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), b = "", x = 0; x < U[0]; x++) {
          for (C = "", this.maxRows = 4, k = 0; k < U[1]; k++) {
            if (D = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), T = " ui-corner-all", S = "", X) {
              if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
                case 0:
                  S += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                  break;
                case U[1] - 1:
                  S += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                  break;
                default:
                  S += " ui-datepicker-group-middle", T = ""
              }
              S += "'>"
            }
            for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? B ? o : s : "") + (/all|right/.test(T) && 0 === x ? B ? s : o : "") + this._generateMonthYearHeader(t, J, tt, Z, Q, x > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) I += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P = (w + c) % 7] + "'>" + p[P] + "</span></th>";
            for (S += I + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), E = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, A = Math.ceil((E + M) / 7), H = X && this.maxRows > A ? this.maxRows : A, this.maxRows = H, z = this._daylightSavingAdjust(new Date(tt, J, 1 - E)), O = 0; O < H; O++) {
              for (S += "<tr>", N = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; w < 7; w++) j = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], L = (W = z.getMonth() !== J) && !_ || !j[0] || Z && z < Z || Q && z > Q, N += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && J === t.selectedMonth && t._keyEvent || y.getTime() === z.getTime() && y.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + j[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === F.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
              S += N + "</tr>"
            }
            ++J > 11 && (J = 0, tt++), C += S += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
          }
          b += C
        }
        return b += h, t._keyEvent = !1, b
      },
      _generateMonthYearHeader: function (t, e, i, s, n, o, r, a) {
        var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"),
          _ = this._get(t, "showMonthAfterYear"), y = "<div class='ui-datepicker-title'>", b = "";
        if (o || !m) b += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else {
          for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++) (!l || c >= s.getMonth()) && (!h || c <= n.getMonth()) && (b += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
          b += "</select>"
        }
        if (_ || (y += b + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
          for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function (t) {
            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
            return isNaN(e) ? d : e
          })(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
        }
        return y += this._get(t, "yearSuffix"), _ && (y += (!o && m && v ? "" : "&#xa0;") + b), y += "</div>"
      },
      _adjustInstDate: function (t, e, i) {
        var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
        t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && e < i ? i : e;
        return s && n > s ? s : n
      },
      _notifyChange: function (t) {
        var e = this._get(t, "onChangeMonthYear");
        e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
      },
      _getNumberOfMonths: function (t) {
        var e = this._get(t, "numberOfMonths");
        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + "Date"), null)
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay()
      },
      _canAdjustMonth: function (t, e, i, s) {
        var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
        return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
      },
      _isInRange: function (t, e) {
        var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), r = null, a = null,
          l = this._get(t, "yearRange");
        return l && (i = l.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (a += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, "shortYearCutoff");
        return {
          shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames")
        }
      },
      _formatDate: function (t, e, i, s) {
        e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
        var n = e ? "object" === r(e) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
        return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
      }
    }), t.fn.datepicker = function (e) {
      if (!this.length) return this;
      t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
        "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
      }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(18), i(16), i(6), i(24), i(12), i(5), i(8), i(9), i(23), i(20), i(7), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.dialog", {
      version: "1.12.1",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
        closeOnEscape: !0,
        closeText: "Close",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center", at: "center", of: window, collision: "fit", using: function (e) {
            var i = t(this).css(e).offset().top;
            i < 0 && t(this).css("top", e.top - i)
          }
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
      },
      resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
      _create: function () {
        this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height
        }, this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element)
        }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
      },
      _init: function () {
        this.options.autoOpen && this.open()
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
      },
      _destroy: function () {
        var t, e = this.originalPosition;
        this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
      },
      widget: function () {
        return this.uiDialog
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i = this;
        this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
          i._trigger("close", e)
        }))
      },
      isOpen: function () {
        return this._isOpen
      },
      moveToTop: function () {
        this._moveToTop()
      },
      _moveToTop: function (e, i) {
        var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () {
          return +t(this).css("z-index")
        }).get(), o = Math.max.apply(null, n);
        return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
      },
      open: function () {
        var e = this;
        this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
          e._focusTabbable(), e._trigger("focus")
        }), this._makeFocusTarget(), this._trigger("open"))
      },
      _focusTabbable: function () {
        var t = this._focusedElement;
        t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
      },
      _keepFocus: function (e) {
        function i() {
          var e = t.ui.safeActiveElement(this.document[0]);
          this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
        }

        e.preventDefault(), i.call(this), this._delay(i)
      },
      _createWrapper: function () {
        this.uiDialog = t("<div>").hide().attr({
          tabIndex: -1,
          role: "dialog"
        }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
          keydown: function (e) {
            if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
            if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
              var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
              e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                n.trigger("focus")
              }), e.preventDefault()) : (this._delay(function () {
                s.trigger("focus")
              }), e.preventDefault())
            }
          }, mousedown: function (t) {
            this._moveToTop(t) && this._focusTabbable()
          }
        }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
      },
      _createTitlebar: function () {
        var e;
        this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
          mousedown: function (e) {
            t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
          }
        }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
          label: t("<a>").text(this.options.closeText).html(),
          icon: "ui-icon-closethick",
          showLabel: !1
        }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
          click: function (t) {
            t.preventDefault(), this.close(t)
          }
        }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": e.attr("id")})
      },
      _title: function (t) {
        this.options.title ? t.text(this.options.title) : t.html("&#160;")
      },
      _createButtonPane: function () {
        this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
      },
      _createButtons: function () {
        var e = this, i = this.options.buttons;
        this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function (i, s) {
          var n, o;
          s = t.isFunction(s) ? {
            click: s,
            text: i
          } : s, s = t.extend({type: "button"}, s), n = s.click, o = {
            icon: s.icon,
            iconPosition: s.iconPosition,
            showLabel: s.showLabel,
            icons: s.icons,
            text: s.text
          }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
            n.apply(e.element[0], arguments)
          })
        }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
      },
      _makeDraggable: function () {
        var e = this, i = this.options;

        function s(t) {
          return {position: t.position, offset: t.offset}
        }

        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (i, n) {
            e._addClass(t(this), "ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, s(n))
          },
          drag: function (t, i) {
            e._trigger("drag", t, s(i))
          },
          stop: function (n, o) {
            var r = o.offset.left - e.document.scrollLeft(), a = o.offset.top - e.document.scrollTop();
            i.position = {
              my: "left top",
              at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
              of: e.window
            }, e._removeClass(t(this), "ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", n, s(o))
          }
        })
      },
      _makeResizable: function () {
        var e = this, i = this.options, s = i.resizable, n = this.uiDialog.css("position"),
          o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";

        function r(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size
          }
        }

        this.uiDialog.resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: i.maxWidth,
          maxHeight: i.maxHeight,
          minWidth: i.minWidth,
          minHeight: this._minHeight(),
          handles: o,
          start: function (i, s) {
            e._addClass(t(this), "ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, r(s))
          },
          resize: function (t, i) {
            e._trigger("resize", t, r(i))
          },
          stop: function (s, n) {
            var o = e.uiDialog.offset(), a = o.left - e.document.scrollLeft(), l = o.top - e.document.scrollTop();
            i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = {
              my: "left top",
              at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
              of: e.window
            }, e._removeClass(t(this), "ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", s, r(n))
          }
        }).css("position", n)
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (e) {
            this._makeFocusTarget(), this._focusedElement = t(e.target)
          }
        })
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this)
      },
      _untrackInstance: function () {
        var e = this._trackingInstances(), i = t.inArray(this, e);
        -1 !== i && e.splice(i, 1)
      },
      _trackingInstances: function () {
        var t = this.document.data("ui-dialog-instances");
        return t || (t = [], this.document.data("ui-dialog-instances", t)), t
      },
      _minHeight: function () {
        var t = this.options;
        return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
      },
      _position: function () {
        var t = this.uiDialog.is(":visible");
        t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
      },
      _setOptions: function (e) {
        var i = this, s = !1, n = {};
        t.each(e, function (t, e) {
          i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
        }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
      },
      _setOption: function (e, i) {
        var s, n, o = this.uiDialog;
        "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: t("<a>").text("" + this.options.closeText).html()}), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
      },
      _size: function () {
        var t, e, i, s = this.options;
        this.element.show().css({
          width: "auto",
          minHeight: 0,
          maxHeight: "none",
          height: 0
        }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
          height: "auto",
          width: s.width
        }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
          minHeight: e,
          maxHeight: i,
          height: "auto"
        }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
          var e = t(this);
          return t("<div>").css({
            position: "absolute",
            width: e.outerWidth(),
            height: e.outerHeight()
          }).appendTo(e.parent()).offset(e.offset())[0]
        })
      },
      _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _allowInteraction: function (e) {
        return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = !0;
          this._delay(function () {
            e = !1
          }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
            focusin: function (t) {
              e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
            }
          }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
        }
      },
      _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
          var t = this.document.data("ui-dialog-overlays") - 1;
          t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
        }
      }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
      options: {dialogClass: ""},
      _createWrapper: function () {
        this._super(), this.uiDialog.addClass(this.options.dialogClass)
      },
      _setOption: function (t, e) {
        "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
      }
    }), t.ui.dialog
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.progressbar", {
      version: "1.12.1",
      options: {
        classes: {
          "ui-progressbar": "ui-corner-all",
          "ui-progressbar-value": "ui-corner-left",
          "ui-progressbar-complete": "ui-corner-right"
        }, max: 100, value: 0, change: null, complete: null
      },
      min: 0,
      _create: function () {
        this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
          role: "progressbar",
          "aria-valuemin": this.min
        }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
      },
      _destroy: function () {
        this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
      },
      value: function (t) {
        if (void 0 === t) return this.options.value;
        this.options.value = this._constrainedValue(t), this._refreshValue()
      },
      _constrainedValue: function (t) {
        return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
      },
      _percentage: function () {
        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
      },
      _refreshValue: function () {
        var e = this.options.value, i = this._percentage();
        this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
          "aria-valuemax": this.options.max,
          "aria-valuenow": e
        }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(17), i(10), i(13), i(5), i(14), i(8), i(7), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.selectmenu", [t.ui.formResetMixin, {
      version: "1.12.1",
      defaultElement: "<select>",
      options: {
        appendTo: null,
        classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
        disabled: null,
        icons: {button: "ui-icon-triangle-1-s"},
        position: {my: "left top", at: "left bottom", collision: "none"},
        width: !1,
        change: null,
        close: null,
        focus: null,
        open: null,
        select: null
      },
      _create: function () {
        var e = this.element.uniqueId().attr("id");
        this.ids = {
          element: e,
          button: e + "-button",
          menu: e + "-menu"
        }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
      },
      _drawButton: function () {
        var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
        this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
          click: function (t) {
            this.button.focus(), t.preventDefault()
          }
        }), this.element.hide(), this.button = t("<span>", {
          tabindex: this.options.disabled ? -1 : 0,
          id: this.ids.button,
          role: "combobox",
          "aria-expanded": "false",
          "aria-autocomplete": "list",
          "aria-owns": this.ids.menu,
          "aria-haspopup": "true",
          title: this.element.attr("title")
        }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
          i._rendered || i._refreshMenu()
        })
      },
      _drawMenu: function () {
        var e = this;
        this.menu = t("<ul>", {
          "aria-hidden": "true",
          "aria-labelledby": this.ids.button,
          id: this.ids.menu
        }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
          classes: {"ui-menu": "ui-corner-bottom"},
          role: "listbox",
          select: function (t, i) {
            t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
          },
          focus: function (t, i) {
            var s = i.item.data("ui-selectmenu-item");
            null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {item: s}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
          }
        }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
          return !1
        }, this.menuInstance._isDivider = function () {
          return !1
        }
      },
      refresh: function () {
        this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
      },
      _refreshMenu: function () {
        var t, e = this.element.find("option");
        this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
      },
      open: function (t) {
        this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
      },
      _position: function () {
        this.menuWrap.position(t.extend({of: this.button}, this.options.position))
      },
      close: function (t) {
        this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
      },
      widget: function () {
        return this.button
      },
      menuWidget: function () {
        return this.menu
      },
      _renderButtonItem: function (e) {
        var i = t("<span>");
        return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
      },
      _renderMenu: function (e, i) {
        var s = this, n = "";
        t.each(i, function (i, o) {
          var r;
          o.optgroup !== n && (r = t("<li>", {text: o.optgroup}), s._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
        })
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-selectmenu-item", e)
      },
      _renderItem: function (e, i) {
        var s = t("<li>"), n = t("<div>", {title: i.element.attr("title")});
        return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
      },
      _setText: function (t, e) {
        e ? t.text(e) : t.html("&#160;")
      },
      _move: function (t, e) {
        var i, s, n = ".ui-menu-item";
        this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
      },
      _getSelectedItem: function () {
        return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
      },
      _toggle: function (t) {
        this[this.isOpen ? "close" : "open"](t)
      },
      _setSelection: function () {
        var t;
        this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
      },
      _documentClick: {
        mousedown: function (e) {
          this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
        }
      },
      _buttonEvents: {
        mousedown: function () {
          var t;
          window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
        }, click: function (t) {
          this._setSelection(), this._toggle(t)
        }, keydown: function (e) {
          var i = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.TAB:
            case t.ui.keyCode.ESCAPE:
              this.close(e), i = !1;
              break;
            case t.ui.keyCode.ENTER:
              this.isOpen && this._selectFocusedItem(e);
              break;
            case t.ui.keyCode.UP:
              e.altKey ? this._toggle(e) : this._move("prev", e);
              break;
            case t.ui.keyCode.DOWN:
              e.altKey ? this._toggle(e) : this._move("next", e);
              break;
            case t.ui.keyCode.SPACE:
              this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
              break;
            case t.ui.keyCode.LEFT:
              this._move("prev", e);
              break;
            case t.ui.keyCode.RIGHT:
              this._move("next", e);
              break;
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.PAGE_UP:
              this._move("first", e);
              break;
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_DOWN:
              this._move("last", e);
              break;
            default:
              this.menu.trigger(e), i = !1
          }
          i && e.preventDefault()
        }
      },
      _selectFocusedItem: function (t) {
        var e = this.menuItems.eq(this.focusIndex).parent("li");
        e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
      },
      _select: function (t, e) {
        var i = this.element[0].selectedIndex;
        this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
      },
      _setAria: function (t) {
        var e = this.menuItems.eq(t.index).attr("id");
        this.button.attr({"aria-labelledby": e, "aria-activedescendant": e}), this.menu.attr("aria-activedescendant", e)
      },
      _setOption: function (t, e) {
        if ("icons" === t) {
          var i = this.button.find("span.ui-icon");
          this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
        }
        this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
      },
      _toggleAttr: function () {
        this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
      },
      _resizeButton: function () {
        var t = this.options.width;
        !1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)) : this.button.css("width", "")
      },
      _resizeMenu: function () {
        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
      },
      _getCreateOptions: function () {
        var t = this._super();
        return t.disabled = this.element.prop("disabled"), t
      },
      _parseOptions: function (e) {
        var i = this, s = [];
        e.each(function (e, n) {
          s.push(i._parseOption(t(n), e))
        }), this.items = s
      },
      _parseOption: function (t, e) {
        var i = t.parent("optgroup");
        return {
          element: t,
          index: e,
          value: t.val(),
          label: t.text(),
          optgroup: i.attr("label") || "",
          disabled: i.prop("disabled") || t.prop("disabled")
        }
      },
      _destroy: function () {
        this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
      }
    }])
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(6), i(5), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.slider", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header"
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function () {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
      },
      _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
      },
      _createHandles: function () {
        var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = [];
        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) o.push("<span tabindex='0'></span>");
        this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
          t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
        })
      },
      _createRange: function () {
        var e = this.options;
        e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
          left: "",
          bottom: ""
        })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
      },
      _setupEvents: function () {
        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
      },
      _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
      },
      _mouseCapture: function (e) {
        var i, s, n, o, r, a, l, h = this, c = this.options;
        return !c.disabled && (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
        }, this.elementOffset = this.element.offset(), i = {
          x: e.pageX,
          y: e.pageY
        }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
          var i = Math.abs(s - h.values(e));
          (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, o = t(this), r = e)
        }), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
          left: 0,
          top: 0
        } : {
          left: e.pageX - a.left - o.width() / 2,
          top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
        }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
      },
      _mouseStart: function () {
        return !0
      },
      _mouseDrag: function (t) {
        var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1
      },
      _mouseStop: function (t) {
        return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
      },
      _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
      },
      _uiHash: function (t, e, i) {
        var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
        return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e))
      },
      _slide: function (t, e, i) {
        var s, n = this.value(), o = this.values();
        this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e))
      },
      _change: function (t, e) {
        this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
      },
      value: function (t) {
        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
        for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
        this._refreshValue()
      },
      _setOption: function (e, i) {
        var s, n = 0;
        switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
          case"orientation":
            this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case"value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;
          case"values":
            for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
            this._animateOff = !1;
            break;
          case"step":
          case"min":
          case"max":
            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
            break;
          case"range":
            this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
      },
      _value: function () {
        var t = this.options.value;
        return t = this._trimAlignValue(t)
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
          return i
        }
        return []
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
      },
      _calculateNewMax: function () {
        var t = this.options.max, e = this._valueMin(), i = this.options.step, s = Math.round((t - e) / i) * i;
        (t = s + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
      },
      _precisionOf: function (t) {
        var e = t.toString(), i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1
      },
      _valueMin: function () {
        return this.options.min
      },
      _valueMax: function () {
        return this.max
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({
          height: "",
          bottom: ""
        })
      },
      _refreshValue: function () {
        var e, i, s, n, o, r = this.options.range, a = this.options, l = this, h = !this._animateOff && a.animate,
          c = {};
        this._hasMultipleValues() ? this.handles.each(function (s) {
          i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === s && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {
            queue: !1,
            duration: a.animate
          })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === s && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {
            queue: !1,
            duration: a.animate
          }))), e = i
        }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: 100 - i + "%"}, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: 100 - i + "%"}, a.animate))
      },
      _handleEvents: {
        keydown: function (e) {
          var i, s, n, o = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
          }
          switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
            case t.ui.keyCode.HOME:
              s = this._valueMin();
              break;
            case t.ui.keyCode.END:
              s = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (i === this._valueMax()) return;
              s = this._trimAlignValue(i + n);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (i === this._valueMin()) return;
              s = this._trimAlignValue(i - n)
          }
          this._slide(e, o, s)
        }, keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
        }
      }
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(18), i(1), i(5), i(9), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    function e(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
      }
    }

    return t.widget("ui.spinner", {
      version: "1.12.1",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        classes: {
          "ui-spinner": "ui-corner-all",
          "ui-spinner-down": "ui-corner-br",
          "ui-spinner-up": "ui-corner-tr"
        },
        culture: null,
        icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null
      },
      _create: function () {
        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete")
          }
        })
      },
      _getCreateOptions: function () {
        var e = this._super(), i = this.element;
        return t.each(["min", "max", "step"], function (t, s) {
          var n = i.attr(s);
          null != n && n.length && (e[s] = n)
        }), e
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault()
        }, keyup: "_stop", focus: function () {
          this.previous = this.element.val()
        }, blur: function (t) {
          this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t))
        }, mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
              this.spinning && this._stop(t)
            }, 100), t.preventDefault()
          }
        }, "mousedown .ui-spinner-button": function (e) {
          var i;

          function s() {
            this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = i, this._delay(function () {
              this.previous = i
            }))
          }

          i = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), s.call(this), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, s.call(this)
          }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
        }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
          if (t(e.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
        }, "mouseleave .ui-spinner-button": "_stop"
      },
      _enhance: function () {
        this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
      },
      _draw: function () {
        this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
          icon: this.options.icons.up,
          showLabel: !1
        }), this.buttons.last().button({
          icon: this.options.icons.down,
          showLabel: !1
        }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
      },
      _keydown: function (e) {
        var i = this.options, s = t.ui.keyCode;
        switch (e.keyCode) {
          case s.UP:
            return this._repeat(null, 1, e), !0;
          case s.DOWN:
            return this._repeat(null, -1, e), !0;
          case s.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case s.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0
        }
        return !1
      },
      _start: function (t) {
        return !(!this.spinning && !1 === this._trigger("start", t) || (this.counter || (this.counter = 1), this.spinning = !0, 0))
      },
      _repeat: function (t, e, i) {
        t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
          this._repeat(40, e, i)
        }, t), this._spin(e * this.options.step, i)
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
      },
      _precisionOf: function (t) {
        var e = t.toString(), i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1
      },
      _adjustValue: function (t) {
        var e, i, s = this.options;
        return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
      },
      _stop: function (t) {
        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
      },
      _setOption: function (t, e) {
        var i, s, n;
        if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
        "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e)
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
      },
      _setOptions: e(function (t) {
        this._super(t)
      }),
      _parse: function (t) {
        return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
      },
      _format: function (t) {
        return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val())
        })
      },
      isValid: function () {
        var t = this.value();
        return null !== t && t === this._adjustValue(t)
      },
      _value: function (t, e) {
        var i;
        "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
      },
      _destroy: function () {
        this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
      },
      stepUp: e(function (t) {
        this._stepUp(t)
      }),
      _stepUp: function (t) {
        this._start() && (this._spin((t || 1) * this.options.step), this._stop())
      },
      stepDown: e(function (t) {
        this._stepDown(t)
      }),
      _stepDown: function (t) {
        this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
      },
      pageUp: e(function (t) {
        this._stepUp((t || 1) * this.options.page)
      }),
      pageDown: e(function (t) {
        this._stepDown((t || 1) * this.options.page)
      }),
      value: function (t) {
        if (!arguments.length) return this._parse(this.element.val());
        e(this._value).call(this, t)
      },
      widget: function () {
        return this.uiSpinner
      }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
      _enhance: function () {
        this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
      }, _uiSpinnerHtml: function () {
        return "<span>"
      }, _buttonHtml: function () {
        return "<a></a><a></a>"
      }
    }), t.ui.spinner
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(10), i(5), i(9), i(7), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    var e;
    return t.widget("ui.tabs", {
      version: "1.12.1",
      delay: 300,
      options: {
        active: null,
        classes: {
          "ui-tabs": "ui-corner-all",
          "ui-tabs-nav": "ui-corner-all",
          "ui-tabs-panel": "ui-corner-bottom",
          "ui-tabs-tab": "ui-corner-top"
        },
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null
      },
      _isLocal: (e = /#.*$/, function (t) {
        var i, s;
        i = t.href.replace(e, ""), s = location.href.replace(e, "");
        try {
          i = decodeURIComponent(i)
        } catch (t) {
        }
        try {
          s = decodeURIComponent(s)
        } catch (t) {
        }
        return t.hash.length > 1 && i === s
      }),
      _create: function () {
        var e = this, i = this.options;
        this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
          return e.tabs.index(t)
        }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
      },
      _initialActive: function () {
        var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
        return null === e && (s && this.tabs.each(function (i, n) {
          if (t(n).attr("aria-controls") === s) return e = i, !1
        }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && -1 !== e || (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
      },
      _getCreateEventData: function () {
        return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
      },
      _tabKeydown: function (e) {
        var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0;
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              s++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              n = !1, s--;
              break;
            case t.ui.keyCode.END:
              s = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              s = 0;
              break;
            case t.ui.keyCode.SPACE:
              return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
            case t.ui.keyCode.ENTER:
              return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
            default:
              return
          }
          e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
            this.option("active", s)
          }, this.delay))
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
      },
      _findNextTab: function (e, i) {
        for (var s = this.tabs.length - 1; -1 !== t.inArray((e > s && (e = 0), e < 0 && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1;
        return e
      },
      _focusNextTab: function (t, e) {
        return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
      },
      _setOption: function (t, e) {
        "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e)
      },
      _sanitizeSelector: function (t) {
        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
      },
      refresh: function () {
        var e = this.options, i = this.tablist.children(":has(a[href])");
        e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
          return i.index(t)
        }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
      },
      _refresh: function () {
        this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
          "aria-selected": "false",
          "aria-expanded": "false",
          tabIndex: -1
        }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
      },
      _processTabs: function () {
        var e = this, i = this.tabs, s = this.anchors, n = this.panels;
        this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
          t(this).is(".ui-state-disabled") && e.preventDefault()
        }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
          t(this).closest("li").is(".ui-state-disabled") && this.blur()
        }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
          role: "tab",
          tabIndex: -1
        }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
          return t("a", this)[0]
        }).attr({
          role: "presentation",
          tabIndex: -1
        }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
          var n, o, r, a = t(s).uniqueId().attr("id"), l = t(s).closest("li"), h = l.attr("aria-controls");
          e._isLocal(s) ? (r = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (r = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(n)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
            "aria-controls": r,
            "aria-labelledby": a
          }), o.attr("aria-labelledby", a)
        }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
      },
      _getList: function () {
        return this.tablist || this.element.find("ol, ul").eq(0)
      },
      _createPanel: function (e) {
        return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
      },
      _setOptionDisabled: function (e) {
        var i, s, n;
        for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
        this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
      },
      _setupEvents: function (e) {
        var i = {};
        e && t.each(e.split(" "), function (t, e) {
          i[e] = "_eventHandler"
        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
          click: function (t) {
            t.preventDefault()
          }
        }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
      },
      _setupHeightStyle: function (e) {
        var i, s = this.element.parent();
        "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
          var e = t(this), s = e.css("position");
          "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
        }), this.element.children().not(this.panels).each(function () {
          i -= t(this).outerHeight(!0)
        }), this.panels.each(function () {
          t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
        }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
          i = Math.max(i, t(this).height("").height())
        }).height(i))
      },
      _eventHandler: function (e) {
        var i = this.options, s = this.active, n = t(e.currentTarget).closest("li"), o = n[0] === s[0],
          r = o && i.collapsible, a = r ? t() : this._getPanelForTab(n), l = s.length ? this._getPanelForTab(s) : t(),
          h = {oldTab: s, oldPanel: l, newTab: r ? t() : n, newPanel: a};
        e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(n), e), this._toggle(e, h))
      },
      _toggle: function (e, i) {
        var s = this, n = i.newPanel, o = i.oldPanel;

        function r() {
          s.running = !1, s._trigger("activate", e, i)
        }

        function a() {
          s._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.length && s.options.show ? s._show(n, s.options.show, r) : (n.show(), r())
        }

        this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
          s._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a()
        }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), a()), o.attr("aria-hidden", "true"), i.oldTab.attr({
          "aria-selected": "false",
          "aria-expanded": "false"
        }), n.length && o.length ? i.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function () {
          return 0 === t(this).attr("tabIndex")
        }).attr("tabIndex", -1), n.attr("aria-hidden", "false"), i.newTab.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        })
      },
      _activate: function (e) {
        var i, s = this._findActive(e);
        s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
          target: i,
          currentTarget: i,
          preventDefault: t.noop
        }))
      },
      _findActive: function (e) {
        return !1 === e ? t() : this.tabs.eq(e)
      },
      _getIndex: function (e) {
        return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
          t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
        }), this.tabs.each(function () {
          var e = t(this), i = e.data("ui-tabs-aria-controls");
          i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
      },
      enable: function (e) {
        var i = this.options.disabled;
        !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
          return t !== e ? t : null
        }) : t.map(this.tabs, function (t, i) {
          return i !== e ? i : null
        })), this._setOptionDisabled(i))
      },
      disable: function (e) {
        var i = this.options.disabled;
        if (!0 !== i) {
          if (void 0 === e) i = !0; else {
            if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
            i = t.isArray(i) ? t.merge([e], i).sort() : [e]
          }
          this._setOptionDisabled(i)
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), r = this._getPanelForTab(n),
          a = {tab: n, panel: r}, l = function (t, e) {
            "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
          };
        this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
          setTimeout(function () {
            r.html(t), s._trigger("load", i, a), l(n, e)
          }, 1)
        }).fail(function (t, e) {
          setTimeout(function () {
            l(t, e)
          }, 1)
        })))
      },
      _ajaxSettings: function (e, i, s) {
        var n = this;
        return {
          url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, o) {
            return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, s))
          }
        }
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i))
      }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
      _processTabs: function () {
        this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
      }
    }), t.ui.tabs
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(5), i(8), i(7), i(1), i(3)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.widget("ui.tooltip", {
      version: "1.12.1", options: {
        classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
        content: function () {
          var e = t(this).attr("title") || "";
          return t("<a>").text(e).html()
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
        show: !0,
        track: !1,
        close: null,
        open: null
      }, _addDescribedBy: function (e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
      }, _removeDescribedBy: function (e) {
        var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
      }, _create: function () {
        this._on({
          mouseover: "open",
          focusin: "open"
        }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
          role: "log",
          "aria-live": "assertive",
          "aria-relevant": "additions"
        }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
      }, _setOption: function (e, i) {
        var s = this;
        this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
          s._updateContent(e.element)
        })
      }, _setOptionDisabled: function (t) {
        this[t ? "_disable" : "_enable"]()
      }, _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event("blur");
          n.target = n.currentTarget = s.element[0], e.close(n, !0)
        }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
          var e = t(this);
          if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
        }))
      }, _enable: function () {
        this.disabledTitles.each(function () {
          var e = t(this);
          e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
        }), this.disabledTitles = t([])
      }, open: function (e) {
        var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
        s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
          var e, s = t(this);
          s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
            element: this,
            title: s.attr("title")
          }, s.attr("title", ""))
        }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
      }, _updateContent: function (t, e) {
        var i, s = this.options.content, n = this, o = e ? e.type : null;
        if ("string" == typeof s || s.nodeType || s.jquery) return this._open(e, t, s);
        (i = s.call(t[0], function (i) {
          n._delay(function () {
            t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
          })
        })) && this._open(e, t, i)
      }, _open: function (e, i, s) {
        var n, o, r, a, l = t.extend({}, this.options.position);

        function h(t) {
          l.of = t, o.is(":hidden") || o.position(l)
        }

        s && ((n = this._find(i)) ? n.tooltip.find(".ui-tooltip-content").html(s) : (i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), n = this._tooltip(i), o = n.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (a = t("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), a.removeAttr("id").find("[id]").removeAttr("id"), a.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {mousemove: h}), h(e)) : o.position(t.extend({of: i}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
          o.is(":visible") && (h(l.of), clearInterval(r))
        }, t.fx.interval)), this._trigger("open", e, {tooltip: o})))
      }, _registerCloseHandlers: function (e, i) {
        var s = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var s = t.Event(e);
              s.currentTarget = i[0], this.close(s, !0)
            }
          }
        };
        i[0] !== this.element[0] && (s.remove = function () {
          this._removeTooltip(this._find(i).tooltip)
        }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
      }, close: function (e) {
        var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
        o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
          s._removeTooltip(t(this))
        }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
          t(i.element).attr("title", i.title), delete s.parents[e]
        }), o.closing = !0, this._trigger("close", e, {tooltip: i}), o.hiding || (o.closing = !1))) : n.removeData("ui-tooltip-open")
      }, _tooltip: function (e) {
        var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), n = i.uniqueId().attr("id");
        return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
          element: e,
          tooltip: i
        }
      }, _find: function (t) {
        var e = t.data("ui-tooltip-id");
        return e ? this.tooltips[e] : null
      }, _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")]
      }, _appendTo: function (t) {
        var e = t.closest(".ui-front, dialog");
        return e.length || (e = this.document[0].body), e
      }, _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event("blur"), o = s.element;
          n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
        }), this.liveRegion.remove()
      }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
      options: {tooltipClass: null},
      _tooltip: function () {
        var t = this._superApply(arguments);
        return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
      }
    }), t.ui.tooltip
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("blind", "hide", function (e, i) {
      var s = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"]
        }, n = t(this), o = e.direction || "up", r = n.cssClip(), a = {clip: t.extend({}, r)},
        l = t.effects.createPlaceholder(n);
      a.clip[s[o][0]] = a.clip[s[o][1]], "show" === e.mode && (n.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), n.animate(a, {
        queue: !1,
        duration: e.duration,
        easing: e.easing,
        complete: i
      })
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("bounce", function (e, i) {
      var s, n, o, r = t(this), a = e.mode, l = "hide" === a, h = "show" === a, c = e.direction || "up", u = e.distance,
        d = e.times || 5, p = 2 * d + (h || l ? 1 : 0), f = e.duration / p, g = e.easing,
        m = "up" === c || "down" === c ? "top" : "left", v = "up" === c || "left" === c, _ = 0, y = r.queue().length;
      for (t.effects.createPlaceholder(r), o = r.css(m), u || (u = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && ((n = {opacity: 1})[m] = o, r.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(n, f, g)), l && (u /= Math.pow(2, d - 1)), (n = {})[m] = o; _ < d; _++) (s = {})[m] = (v ? "-=" : "+=") + u, r.animate(s, f, g).animate(n, f, g), u = l ? 2 * u : u / 2;
      l && ((s = {opacity: 0})[m] = (v ? "-=" : "+=") + u, r.animate(s, f, g)), r.queue(i), t.effects.unshift(r, y, p + 1)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("clip", "hide", function (e, i) {
      var s, n = {}, o = t(this), r = e.direction || "vertical", a = "both" === r, l = a || "horizontal" === r,
        h = a || "vertical" === r;
      s = o.cssClip(), n.clip = {
        top: h ? (s.bottom - s.top) / 2 : s.top,
        right: l ? (s.right - s.left) / 2 : s.right,
        bottom: h ? (s.bottom - s.top) / 2 : s.bottom,
        left: l ? (s.right - s.left) / 2 : s.left
      }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
        queue: !1,
        duration: e.duration,
        easing: e.easing,
        complete: i
      })
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("drop", "hide", function (e, i) {
      var s, n = t(this), o = e.mode, r = "show" === o, a = e.direction || "left",
        l = "up" === a || "down" === a ? "top" : "left", h = "up" === a || "left" === a ? "-=" : "+=",
        c = "+=" === h ? "-=" : "+=", u = {opacity: 0};
      t.effects.createPlaceholder(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = h + s, r && (n.css(u), u[l] = c + s, u.opacity = 1), n.animate(u, {
        queue: !1,
        duration: e.duration,
        easing: e.easing,
        complete: i
      })
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("explode", "hide", function (e, i) {
      var s, n, o, r, a, l, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, c = h, u = t(this), d = e.mode,
        p = "show" === d, f = u.show().css("visibility", "hidden").offset(), g = Math.ceil(u.outerWidth() / c),
        m = Math.ceil(u.outerHeight() / h), v = [];

      function _() {
        v.push(this), v.length === h * c && (u.css({visibility: "visible"}), t(v).remove(), i())
      }

      for (s = 0; s < h; s++) for (r = f.top + s * m, l = s - (h - 1) / 2, n = 0; n < c; n++) o = f.left + n * g, a = n - (c - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
        position: "absolute",
        visibility: "visible",
        left: -n * g,
        top: -s * m
      }).parent().addClass("ui-effects-explode").css({
        position: "absolute",
        overflow: "hidden",
        width: g,
        height: m,
        left: o + (p ? a * g : 0),
        top: r + (p ? l * m : 0),
        opacity: p ? 0 : 1
      }).animate({
        left: o + (p ? 0 : a * g),
        top: r + (p ? 0 : l * m),
        opacity: p ? 1 : 0
      }, e.duration || 500, e.easing, _)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("fade", "toggle", function (e, i) {
      var s = "show" === e.mode;
      t(this).css("opacity", s ? 0 : 1).animate({opacity: s ? 1 : 0}, {
        queue: !1,
        duration: e.duration,
        easing: e.easing,
        complete: i
      })
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("fold", "hide", function (e, i) {
      var s = t(this), n = e.mode, o = "show" === n, r = "hide" === n, a = e.size || 15, l = /([0-9]+)%/.exec(a),
        h = !!e.horizFirst, c = h ? ["right", "bottom"] : ["bottom", "right"], u = e.duration / 2,
        d = t.effects.createPlaceholder(s), p = s.cssClip(), f = {clip: t.extend({}, p)}, g = {clip: t.extend({}, p)},
        m = [p[c[0]], p[c[1]]], v = s.queue().length;
      l && (a = parseInt(l[1], 10) / 100 * m[r ? 0 : 1]), f.clip[c[0]] = a, g.clip[c[0]] = a, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
        d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
      }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, v, 4)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("highlight", "show", function (e, i) {
      var s = t(this), n = {backgroundColor: s.css("backgroundColor")};
      "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
        backgroundImage: "none",
        backgroundColor: e.color || "#ffff99"
      }).animate(n, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4), i(27)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("puff", "hide", function (e, i) {
      var s = t.extend(!0, {}, e, {fade: !0, percent: parseInt(e.percent, 10) || 150});
      t.effects.effect.scale.call(this, s, i)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("pulsate", "show", function (e, i) {
      var s = t(this), n = e.mode, o = "show" === n, r = "hide" === n, a = o || r, l = 2 * (e.times || 5) + (a ? 1 : 0),
        h = e.duration / l, c = 0, u = 1, d = s.queue().length;
      for (!o && s.is(":visible") || (s.css("opacity", 0).show(), c = 1); u < l; u++) s.animate({opacity: c}, h, e.easing), c = 1 - c;
      s.animate({opacity: c}, h, e.easing), s.queue(i), t.effects.unshift(s, d, l + 1)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("shake", function (e, i) {
      var s = 1, n = t(this), o = e.direction || "left", r = e.distance || 20, a = e.times || 3, l = 2 * a + 1,
        h = Math.round(e.duration / l), c = "up" === o || "down" === o ? "top" : "left", u = "up" === o || "left" === o,
        d = {}, p = {}, f = {}, g = n.queue().length;
      for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + r, p[c] = (u ? "+=" : "-=") + 2 * r, f[c] = (u ? "-=" : "+=") + 2 * r, n.animate(d, h, e.easing); s < a; s++) n.animate(p, h, e.easing).animate(f, h, e.easing);
      n.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(n, g, l + 1)
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    return t.effects.define("slide", "show", function (e, i) {
      var s, n, o = t(this),
        r = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
        a = e.mode, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left",
        c = "up" === l || "left" === l, u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0), d = {};
      t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, {
        queue: !1,
        duration: e.duration,
        easing: e.easing,
        complete: i
      })
    })
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s, n, o;
  /*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
  n = [i(0), i(1), i(4)], void 0 === (o = "function" == typeof (s = function (t) {
    var e;
    return !1 !== t.uiBackCompat && (e = t.effects.define("transfer", function (e, i) {
      t(this).transfer(e, i)
    })), e
  }) ? s.apply(e, n) : s) || (t.exports = o)
}, function (t, e, i) {
  var s = i(67);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(69);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(71);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(73);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(75);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(77);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(79);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(81);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(83);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(85);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(87);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(89);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(91);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(93);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(95);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(97);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(99);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(101);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(103);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(105);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  var s = i(107);
  "string" == typeof s && (s = [[t.i, s, ""]]);
  var n = {hmr: !0, transform: void 0, insertInto: void 0};
  i(2)(s, n);
  s.locals && (t.exports = s.locals)
}, function (t, e, i) {
}, function (t, e, i) {
  (function (t) {
    t(document).ready(function () {
      try {
        ymaps.ready(function () {
          var t;
          t = new ymaps.Map("map", {center: [55.752045, 37.66998], zoom: 16});
          var e = new ymaps.Placemark(t.getCenter());
          t.geoObjects.add(e)
        })
      } catch (t) {
      }


      (function ($) {
        $(function () {
          $(document).foundation();

          // Modals
          function modals() {
            var $modal = $('#modalAjax');
            var $content = $('#modalContentAjax');

            $('[data-modal]').off('click').on('click', function (e) {
              e.preventDefault();

              // Получить данные
              ajaxs('ajaxs_' + $(e.currentTarget).data('modal'))
                .done(function (resp) {
                  $content.empty().html(resp).foundation();
                  // Запустим формы CF7
                  $('.wpcf7 form', $content).each(function () {
                    var form = $(this);

                    //$('.post-url > input', form).val(window.location.href);

                    wpcf7.initForm(form);
                    // Если есть кеш, то очищаем
                    if (wpcf7.cached) {
                      wpcf7.refill(form);
                    }
                  });
                  //t(".f-select").selectmenu();
                  $modal.foundation('open');
                });
            });
          }

          modals();

        });
      })(jQuery);


      document.addEventListener("wpcf7mailsent", function (t) {
        window.location = "thanks/index.html"
      }, !1), t(".f-select").selectmenu(), t(".f-spinner").spinner({min: 1}), t(window).width() < 800 ? t(".today .owl-carousel").owlCarousel({
        margin: 10,
        items: 1,
        dots: !1
      }) : (t(".today .list > li").length > 3 ? t(".today .list > li").each(function (e, i) {
        e >= 3 && t(i).hide()
      }) : t(".today .show-more").hide(), t(".today .show-more").click(function () {
        t(".today .list > li").show(300), t(this).hide(300)
      })), t(window).width() < 600 ? t(".catalog .owl-carousel").owlCarousel({
        margin: 10,
        items: 1,
        dots: !1
      }) : (t(".catalog .list > li").length > 8 ? t(".catalog .list > li").each(function (e, i) {
        e >= 8 && t(i).hide()
      }) : t(".catalog .show-more").hide(), t(".catalog .show-more").click(function () {
        t(".catalog .list > li").show(300), t(this).hide(300)
      })), t(document).on("click", ".mobile-menu", function () {
        t(".mobile-nav").fadeIn(300), t(".mobile-menu").addClass("active"), t(".top").addClass("open")
      }), t(document).on("click", ".mobile-menu.active", function () {
        t(".mobile-nav").fadeOut(300), t(".mobile-menu").removeClass("active"), t(".top").removeClass("open")
      }), t(".mobile-nav a").click(function () {
        t(".mobile-nav").fadeOut(300), t(".mobile-menu").removeClass("active"), t(".top .logo").show()
      }), t(".scrollTo").click(function () {
        if ("/" == document.location.pathname) {
          var e = t(this).attr("href");
          return t("html, body").animate({scrollTop: t(e).offset().top}, 300), !1
        }
      }), t(".rates .change .val").each(function (e, i) {
        "-" == t(i).text()[0] ? (t(i).text(t(i).text().slice(1)), t(i).parent().addClass("down")) : t(i).parent().addClass("up")
      }), t(".catalog .btn-show a").click(function () {
        return "open" == t(this).parent(".btn-show").data("open") ? (t(this).parents(".slide").find(".desc").fadeIn(300), t(this).parents(".slide").find(".img2").fadeIn(300), t(this).parents(".slide").find(".img1").fadeOut(300), t(this).find(".text").text("Скрыть"), t(this).parent(".btn-show").data("open", "close")) : (t(this).parents(".slide").find(".desc").fadeOut(200), t(this).parents(".slide").find(".img1").fadeIn(300), t(this).parents(".slide").find(".img2").fadeOut(300), t(this).find(".text").text("Подробнее"), t(this).parent(".btn-show").data("open", "open")), !1
      })
    })
  }).call(this, i(0))
}]);

/*(function ($) {
  $(function () {
    $(document).foundation();

    // Modals
    function modals() {
      var $modal = $('#modalAjax');
      var $content = $('#modalContentAjax');

      $('[data-modal]').off('click').on('click', function (e) {
        e.preventDefault();

        // Получить данные
        ajaxs('ajaxs_' + $(e.currentTarget).data('modal'))
          .done(function (resp) {
            $content.empty().html(resp).foundation();
            // Запустим формы CF7
            $('.wpcf7 form', $content).each(function () {
              var form = $(this);

              //$('.post-url > input', form).val(window.location.href);

              wpcf7.initForm(form);
              // Если есть кеш, то очищаем
              if (wpcf7.cached) {
                wpcf7.refill(form);
              }
            });
            $modal.foundation('open');
          });
      });
    }

    modals();

  });
})(jQuery);*/