import { Button as nr } from "antd";
import we from "react";
var xe = { exports: {} }, D = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var z, je;
function Ce() {
  if (je)
    return z;
  je = 1;
  var _ = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
  function T(h) {
    if (h == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(h);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var h = new String("abc");
      if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
        return !1;
      for (var m = {}, c = 0; c < 10; c++)
        m["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(m).map(function(f) {
        return m[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        p[f] = f;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return z = C() ? Object.assign : function(h, m) {
    for (var c, l = T(h), p, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var b in c)
        x.call(c, b) && (l[b] = c[b]);
      if (_) {
        p = _(c);
        for (var g = 0; g < p.length; g++)
          O.call(c, p[g]) && (l[p[g]] = c[p[g]]);
      }
    }
    return l;
  }, z;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function ar() {
  if (Pe)
    return D;
  Pe = 1, Ce();
  var _ = we, x = 60103;
  if (D.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var O = Symbol.for;
    x = O("react.element"), D.Fragment = O("react.fragment");
  }
  var T = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = Object.prototype.hasOwnProperty, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(c, l, p) {
    var f, b = {}, g = null, w = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (f in l)
      C.call(l, f) && !h.hasOwnProperty(f) && (b[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        b[f] === void 0 && (b[f] = l[f]);
    return { $$typeof: x, type: c, key: g, ref: w, props: b, _owner: T.current };
  }
  return D.jsx = m, D.jsxs = m, D;
}
var H = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ir() {
  return Te || (Te = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      var x = we, O = Ce(), T = 60103, C = 60106;
      _.Fragment = 60107;
      var h = 60108, m = 60114, c = 60109, l = 60110, p = 60112, f = 60113, b = 60120, g = 60115, w = 60116, $ = 60121, X = 60122, Z = 60117, Q = 60129, ee = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var d = Symbol.for;
        T = d("react.element"), C = d("react.portal"), _.Fragment = d("react.fragment"), h = d("react.strict_mode"), m = d("react.profiler"), c = d("react.provider"), l = d("react.context"), p = d("react.forward_ref"), f = d("react.suspense"), b = d("react.suspense_list"), g = d("react.memo"), w = d("react.lazy"), $ = d("react.block"), X = d("react.server.block"), Z = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), Q = d("react.debug_trace_mode"), d("react.offscreen"), ee = d("react.legacy_hidden");
      }
      var re = typeof Symbol == "function" && Symbol.iterator, Se = "@@iterator";
      function ke(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = re && e[re] || e[Se];
        return typeof r == "function" ? r : null;
      }
      var S = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function R(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          Ae("error", e, t);
        }
      }
      function Ae(e, r, t) {
        {
          var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
          o !== "" && (r += "%s", t = t.concat([o]));
          var u = t.map(function(i) {
            return "" + i;
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var De = !1;
      function Ie(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === _.Fragment || e === m || e === Q || e === h || e === f || e === b || e === ee || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === c || e.$$typeof === l || e.$$typeof === p || e.$$typeof === Z || e.$$typeof === $ || e[0] === X));
      }
      function Ye(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function te(e) {
        return e.displayName || "Context";
      }
      function y(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && R("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case _.Fragment:
            return "Fragment";
          case C:
            return "Portal";
          case m:
            return "Profiler";
          case h:
            return "StrictMode";
          case f:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var r = e;
              return te(r) + ".Consumer";
            case c:
              var t = e;
              return te(t._context) + ".Provider";
            case p:
              return Ye(e, e.render, "ForwardRef");
            case g:
              return y(e.type);
            case $:
              return y(e._render);
            case w: {
              var n = e, o = n._payload, u = n._init;
              try {
                return y(u(o));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var I = 0, ne, ae, ie, oe, ue, fe, ce;
      function se() {
      }
      se.__reactDisabledLog = !0;
      function $e() {
        {
          if (I === 0) {
            ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, fe = console.groupCollapsed, ce = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: se,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          I++;
        }
      }
      function We() {
        {
          if (I--, I === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: O({}, e, {
                value: ne
              }),
              info: O({}, e, {
                value: ae
              }),
              warn: O({}, e, {
                value: ie
              }),
              error: O({}, e, {
                value: oe
              }),
              group: O({}, e, {
                value: ue
              }),
              groupCollapsed: O({}, e, {
                value: fe
              }),
              groupEnd: O({}, e, {
                value: ce
              })
            });
          }
          I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var V = S.ReactCurrentDispatcher, F;
      function W(e, r, t) {
        {
          if (F === void 0)
            try {
              throw Error();
            } catch (o) {
              var n = o.stack.trim().match(/\n( *(at )?)/);
              F = n && n[1] || "";
            }
          return `
` + F + e;
        }
      }
      var B = !1, L;
      {
        var Le = typeof WeakMap == "function" ? WeakMap : Map;
        L = new Le();
      }
      function le(e, r) {
        if (!e || B)
          return "";
        {
          var t = L.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        B = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var u;
        u = V.current, V.current = null, $e();
        try {
          if (r) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (P) {
                n = P;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (P) {
                n = P;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (P) {
              n = P;
            }
            e();
          }
        } catch (P) {
          if (P && n && typeof P.stack == "string") {
            for (var a = P.stack.split(`
`), E = n.stack.split(`
`), s = a.length - 1, v = E.length - 1; s >= 1 && v >= 0 && a[s] !== E[v]; )
              v--;
            for (; s >= 1 && v >= 0; s--, v--)
              if (a[s] !== E[v]) {
                if (s !== 1 || v !== 1)
                  do
                    if (s--, v--, v < 0 || a[s] !== E[v]) {
                      var j = `
` + a[s].replace(" at new ", " at ");
                      return typeof e == "function" && L.set(e, j), j;
                    }
                  while (s >= 1 && v >= 0);
                break;
              }
          }
        } finally {
          B = !1, V.current = u, We(), Error.prepareStackTrace = o;
        }
        var A = e ? e.displayName || e.name : "", ye = A ? W(A) : "";
        return typeof e == "function" && L.set(e, ye), ye;
      }
      function de(e, r, t) {
        return le(e, !1);
      }
      function Ne(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function N(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return le(e, Ne(e));
        if (typeof e == "string")
          return W(e);
        switch (e) {
          case f:
            return W("Suspense");
          case b:
            return W("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case p:
              return de(e.render);
            case g:
              return N(e.type, r, t);
            case $:
              return de(e._render);
            case w: {
              var n = e, o = n._payload, u = n._init;
              try {
                return N(u(o), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var ve = {}, pe = S.ReactDebugCurrentFrame;
      function U(e) {
        if (e) {
          var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
          pe.setExtraStackFrame(t);
        } else
          pe.setExtraStackFrame(null);
      }
      function Ue(e, r, t, n, o) {
        {
          var u = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (u(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (s) {
                a = s;
              }
              a && !(a instanceof Error) && (U(o), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, U(o), R("Failed %s type: %s", t, a.message), U(null));
            }
        }
      }
      var Y = S.ReactCurrentOwner, M = Object.prototype.hasOwnProperty, Ve = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, _e, ge, q;
      q = {};
      function Fe(e) {
        if (M.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Be(e) {
        if (M.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Me(e, r) {
        if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
          var t = y(Y.current.type);
          q[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(Y.current.type), e.ref), q[t] = !0);
        }
      }
      function qe(e, r) {
        {
          var t = function() {
            _e || (_e = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Ge(e, r) {
        {
          var t = function() {
            ge || (ge = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var Je = function(e, r, t, n, o, u, i) {
        var a = {
          $$typeof: T,
          type: e,
          key: r,
          ref: t,
          props: i,
          _owner: u
        };
        return a._store = {}, Object.defineProperty(a._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(a, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n
        }), Object.defineProperty(a, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function Ke(e, r, t, n, o) {
        {
          var u, i = {}, a = null, E = null;
          t !== void 0 && (a = "" + t), Be(r) && (a = "" + r.key), Fe(r) && (E = r.ref, Me(r, o));
          for (u in r)
            M.call(r, u) && !Ve.hasOwnProperty(u) && (i[u] = r[u]);
          if (e && e.defaultProps) {
            var s = e.defaultProps;
            for (u in s)
              i[u] === void 0 && (i[u] = s[u]);
          }
          if (a || E) {
            var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && qe(i, v), E && Ge(i, v);
          }
          return Je(e, a, E, o, n, Y.current, i);
        }
      }
      var G = S.ReactCurrentOwner, Ee = S.ReactDebugCurrentFrame;
      function k(e) {
        if (e) {
          var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
          Ee.setExtraStackFrame(t);
        } else
          Ee.setExtraStackFrame(null);
      }
      var J;
      J = !1;
      function K(e) {
        return typeof e == "object" && e !== null && e.$$typeof === T;
      }
      function he() {
        {
          if (G.current) {
            var e = y(G.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function ze(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var Re = {};
      function He(e) {
        {
          var r = he();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function be(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = He(r);
          if (Re[t])
            return;
          Re[t] = !0;
          var n = "";
          e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), k(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
        }
      }
      function Oe(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              K(n) && be(n, r);
            }
          else if (K(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var o = ke(e);
            if (typeof o == "function" && o !== e.entries)
              for (var u = o.call(e), i; !(i = u.next()).done; )
                K(i.value) && be(i.value, r);
          }
        }
      }
      function Xe(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === g))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = y(r);
            Ue(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !J) {
            J = !0;
            var o = y(r);
            R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ze(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              k(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
              break;
            }
          }
          e.ref !== null && (k(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
        }
      }
      function me(e, r, t, n, o, u) {
        {
          var i = Ie(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var E = ze(o);
            E ? a += E : a += he();
            var s;
            e === null ? s = "null" : Array.isArray(e) ? s = "array" : e !== void 0 && e.$$typeof === T ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
          }
          var v = Ke(e, r, t, o, u);
          if (v == null)
            return v;
          if (i) {
            var j = r.children;
            if (j !== void 0)
              if (n)
                if (Array.isArray(j)) {
                  for (var A = 0; A < j.length; A++)
                    Oe(j[A], e);
                  Object.freeze && Object.freeze(j);
                } else
                  R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Oe(j, e);
          }
          return e === _.Fragment ? Ze(v) : Xe(v), v;
        }
      }
      function Qe(e, r, t) {
        return me(e, r, t, !0);
      }
      function er(e, r, t) {
        return me(e, r, t, !1);
      }
      var rr = er, tr = Qe;
      _.jsx = rr, _.jsxs = tr;
    }();
  }(H)), H;
}
(function(_) {
  process.env.NODE_ENV === "production" ? _.exports = ar() : _.exports = ir();
})(xe);
const or = xe.exports.jsx;
function ur() {
  return /* @__PURE__ */ or(nr, {
    type: "primary",
    children: "Click"
  });
}
const sr = {
  Button: ur
};
export {
  sr as default
};