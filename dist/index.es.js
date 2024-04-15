import * as qe from "react";
import y, { useLayoutEffect as Es, useEffect as we, createContext as dt, useState as Ze, useMemo as Te, useCallback as ct, useContext as le, forwardRef as ks, createElement as Lt, Fragment as xo, useRef as Fe, Children as Kn, cloneElement as Xn, isValidElement as Jn, useId as Ep, startTransition as kp, memo as Tp, useSyncExternalStore as Ap } from "react";
import { createPortal as td } from "react-dom";
var Ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vi = { exports: {} }, fn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ll;
function Pp() {
  if (Ll)
    return fn;
  Ll = 1;
  var e = y, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, d = {}, f = null, m = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l)
      n.call(l, u) && !o.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: f, ref: m, props: d, _owner: a.current };
  }
  return fn.Fragment = r, fn.jsx = i, fn.jsxs = i, fn;
}
var pn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Il;
function Rp() {
  return Il || (Il = 1, process.env.NODE_ENV !== "production" && function() {
    var e = y, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), p = Symbol.iterator, h = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var A = p && g[p] || g[h];
      return typeof A == "function" ? A : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(g) {
      {
        for (var A = arguments.length, M = new Array(A > 1 ? A - 1 : 0), H = 1; H < A; H++)
          M[H - 1] = arguments[H];
        k("error", g, M);
      }
    }
    function k(g, A, M) {
      {
        var H = C.ReactDebugCurrentFrame, J = H.getStackAddendum();
        J !== "" && (A += "%s", M = M.concat([J]));
        var K = M.map(function(G) {
          return String(G);
        });
        K.unshift("Warning: " + A), Function.prototype.apply.call(console[g], console, K);
      }
    }
    var T = !1, w = !1, I = !1, R = !1, z = !1, V;
    V = Symbol.for("react.module.reference");
    function Y(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === n || g === o || z || g === a || g === c || g === u || R || g === m || T || w || I || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === d || g.$$typeof === i || g.$$typeof === s || g.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === V || g.getModuleId !== void 0));
    }
    function Se(g, A, M) {
      var H = g.displayName;
      if (H)
        return H;
      var J = A.displayName || A.name || "";
      return J !== "" ? M + "(" + J + ")" : M;
    }
    function fe(g) {
      return g.displayName || "Context";
    }
    function se(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var A = g;
            return fe(A) + ".Consumer";
          case i:
            var M = g;
            return fe(M._context) + ".Provider";
          case l:
            return Se(g, g.render, "ForwardRef");
          case d:
            var H = g.displayName || null;
            return H !== null ? H : se(g.type) || "Memo";
          case f: {
            var J = g, K = J._payload, G = J._init;
            try {
              return se(G(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var he = Object.assign, Ee = 0, $e, Pe, Je, Qe, ot, et, ke;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function L() {
      {
        if (Ee === 0) {
          $e = console.log, Pe = console.info, Je = console.warn, Qe = console.error, ot = console.group, et = console.groupCollapsed, ke = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        Ee++;
      }
    }
    function D() {
      {
        if (Ee--, Ee === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: he({}, g, {
              value: $e
            }),
            info: he({}, g, {
              value: Pe
            }),
            warn: he({}, g, {
              value: Je
            }),
            error: he({}, g, {
              value: Qe
            }),
            group: he({}, g, {
              value: ot
            }),
            groupCollapsed: he({}, g, {
              value: et
            }),
            groupEnd: he({}, g, {
              value: ke
            })
          });
        }
        Ee < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = C.ReactCurrentDispatcher, He;
    function Le(g, A, M) {
      {
        if (He === void 0)
          try {
            throw Error();
          } catch (J) {
            var H = J.stack.trim().match(/\n( *(at )?)/);
            He = H && H[1] || "";
          }
        return `
` + He + g;
      }
    }
    var it = !1, wt;
    {
      var kr = typeof WeakMap == "function" ? WeakMap : Map;
      wt = new kr();
    }
    function F(g, A) {
      if (!g || it)
        return "";
      {
        var M = wt.get(g);
        if (M !== void 0)
          return M;
      }
      var H;
      it = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = ue.current, ue.current = null, L();
      try {
        if (A) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Ye) {
              H = Ye;
            }
            Reflect.construct(g, [], G);
          } else {
            try {
              G.call();
            } catch (Ye) {
              H = Ye;
            }
            g.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            H = Ye;
          }
          g();
        }
      } catch (Ye) {
        if (Ye && H && typeof Ye.stack == "string") {
          for (var q = Ye.stack.split(`
`), Ie = H.stack.split(`
`), be = q.length - 1, xe = Ie.length - 1; be >= 1 && xe >= 0 && q[be] !== Ie[xe]; )
            xe--;
          for (; be >= 1 && xe >= 0; be--, xe--)
            if (q[be] !== Ie[xe]) {
              if (be !== 1 || xe !== 1)
                do
                  if (be--, xe--, xe < 0 || q[be] !== Ie[xe]) {
                    var Ue = `
` + q[be].replace(" at new ", " at ");
                    return g.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", g.displayName)), typeof g == "function" && wt.set(g, Ue), Ue;
                  }
                while (be >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        it = !1, ue.current = K, D(), Error.prepareStackTrace = J;
      }
      var Et = g ? g.displayName || g.name : "", xa = Et ? Le(Et) : "";
      return typeof g == "function" && wt.set(g, xa), xa;
    }
    function fr(g, A, M) {
      return F(g, !1);
    }
    function Xt(g) {
      var A = g.prototype;
      return !!(A && A.isReactComponent);
    }
    function Vt(g, A, M) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return F(g, Xt(g));
      if (typeof g == "string")
        return Le(g);
      switch (g) {
        case c:
          return Le("Suspense");
        case u:
          return Le("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            return fr(g.render);
          case d:
            return Vt(g.type, A, M);
          case f: {
            var H = g, J = H._payload, K = H._init;
            try {
              return Vt(K(J), A, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Tr = Object.prototype.hasOwnProperty, ua = {}, da = C.ReactDebugCurrentFrame;
    function Ar(g) {
      if (g) {
        var A = g._owner, M = Vt(g.type, g._source, A ? A.type : null);
        da.setExtraStackFrame(M);
      } else
        da.setExtraStackFrame(null);
    }
    function Pr(g, A, M, H, J) {
      {
        var K = Function.call.bind(Tr);
        for (var G in g)
          if (K(g, G)) {
            var q = void 0;
            try {
              if (typeof g[G] != "function") {
                var Ie = Error((H || "React class") + ": " + M + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ie.name = "Invariant Violation", Ie;
              }
              q = g[G](A, G, H, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              q = be;
            }
            q && !(q instanceof Error) && (Ar(J), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", M, G, typeof q), Ar(null)), q instanceof Error && !(q.message in ua) && (ua[q.message] = !0, Ar(J), _("Failed %s type: %s", M, q.message), Ar(null));
          }
      }
    }
    var an = Array.isArray;
    function Jt(g) {
      return an(g);
    }
    function pt(g) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, M = A && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return M;
      }
    }
    function fa(g) {
      try {
        return on(g), !1;
      } catch {
        return !0;
      }
    }
    function on(g) {
      return "" + g;
    }
    function pa(g) {
      if (fa(g))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(g)), on(g);
    }
    var pr = C.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, ln, Mr;
    Mr = {};
    function ma(g) {
      if (Tr.call(g, "ref")) {
        var A = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function va(g) {
      if (Tr.call(g, "key")) {
        var A = Object.getOwnPropertyDescriptor(g, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Ho(g, A) {
      if (typeof g.ref == "string" && pr.current && A && pr.current.stateNode !== A) {
        var M = se(pr.current.type);
        Mr[M] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(pr.current.type), g.ref), Mr[M] = !0);
      }
    }
    function Uo(g, A) {
      {
        var M = function() {
          sn || (sn = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        M.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Ft(g, A) {
      {
        var M = function() {
          ln || (ln = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        M.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Lr = function(g, A, M, H, J, K, G) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: A,
        ref: M,
        props: G,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function Yo(g, A, M, H, J) {
      {
        var K, G = {}, q = null, Ie = null;
        M !== void 0 && (pa(M), q = "" + M), va(A) && (pa(A.key), q = "" + A.key), ma(A) && (Ie = A.ref, Ho(A, J));
        for (K in A)
          Tr.call(A, K) && !Rr.hasOwnProperty(K) && (G[K] = A[K]);
        if (g && g.defaultProps) {
          var be = g.defaultProps;
          for (K in be)
            G[K] === void 0 && (G[K] = be[K]);
        }
        if (q || Ie) {
          var xe = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          q && Uo(G, xe), Ie && Ft(G, xe);
        }
        return Lr(g, q, Ie, J, H, pr.current, G);
      }
    }
    var Ir = C.ReactCurrentOwner, ha = C.ReactDebugCurrentFrame;
    function $t(g) {
      if (g) {
        var A = g._owner, M = Vt(g.type, g._source, A ? A.type : null);
        ha.setExtraStackFrame(M);
      } else
        ha.setExtraStackFrame(null);
    }
    var Dt;
    Dt = !1;
    function cn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function _t() {
      {
        if (Ir.current) {
          var g = se(Ir.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function qo(g) {
      {
        if (g !== void 0) {
          var A = g.fileName.replace(/^.*[\\\/]/, ""), M = g.lineNumber;
          return `

Check your code at ` + A + ":" + M + ".";
        }
        return "";
      }
    }
    var ga = {};
    function Go(g) {
      {
        var A = _t();
        if (!A) {
          var M = typeof g == "string" ? g : g.displayName || g.name;
          M && (A = `

Check the top-level render call using <` + M + ">.");
        }
        return A;
      }
    }
    function ya(g, A) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var M = Go(A);
        if (ga[M])
          return;
        ga[M] = !0;
        var H = "";
        g && g._owner && g._owner !== Ir.current && (H = " It was passed a child from " + se(g._owner.type) + "."), $t(g), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, H), $t(null);
      }
    }
    function ba(g, A) {
      {
        if (typeof g != "object")
          return;
        if (Jt(g))
          for (var M = 0; M < g.length; M++) {
            var H = g[M];
            cn(H) && ya(H, A);
          }
        else if (cn(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var J = x(g);
          if (typeof J == "function" && J !== g.entries)
            for (var K = J.call(g), G; !(G = K.next()).done; )
              cn(G.value) && ya(G.value, A);
        }
      }
    }
    function mt(g) {
      {
        var A = g.type;
        if (A == null || typeof A == "string")
          return;
        var M;
        if (typeof A == "function")
          M = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === d))
          M = A.propTypes;
        else
          return;
        if (M) {
          var H = se(A);
          Pr(M, g.props, "prop", H, g);
        } else if (A.PropTypes !== void 0 && !Dt) {
          Dt = !0;
          var J = se(A);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zo(g) {
      {
        for (var A = Object.keys(g.props), M = 0; M < A.length; M++) {
          var H = A[M];
          if (H !== "children" && H !== "key") {
            $t(g), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), $t(null);
            break;
          }
        }
        g.ref !== null && ($t(g), _("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function Sa(g, A, M, H, J, K) {
      {
        var G = Y(g);
        if (!G) {
          var q = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ie = qo(J);
          Ie ? q += Ie : q += _t();
          var be;
          g === null ? be = "null" : Jt(g) ? be = "array" : g !== void 0 && g.$$typeof === t ? (be = "<" + (se(g.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : be = typeof g, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, q);
        }
        var xe = Yo(g, A, M, J, K);
        if (xe == null)
          return xe;
        if (G) {
          var Ue = A.children;
          if (Ue !== void 0)
            if (H)
              if (Jt(Ue)) {
                for (var Et = 0; Et < Ue.length; Et++)
                  ba(Ue[Et], g);
                Object.freeze && Object.freeze(Ue);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ba(Ue, g);
        }
        return g === n ? Zo(xe) : mt(xe), xe;
      }
    }
    function Ko(g, A, M) {
      return Sa(g, A, M, !0);
    }
    function Xo(g, A, M) {
      return Sa(g, A, M, !1);
    }
    var Jo = Xo, Qt = Ko;
    pn.Fragment = n, pn.jsx = Jo, pn.jsxs = Qt;
  }()), pn;
}
process.env.NODE_ENV === "production" ? Vi.exports = Pp() : Vi.exports = Rp();
var Ts = Vi.exports;
const Mp = Ts.Fragment, rt = Ts.jsx, ka = Ts.jsxs;
var ro = globalThis != null && globalThis.document ? Es : we, As = dt({});
As.displayName = "ColorModeContext";
function Ps() {
  const e = le(As);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ta = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function Lp(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const a = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, a == null || a();
    },
    setClassName(n) {
      document.body.classList.add(n ? Ta.dark : Ta.light), document.body.classList.remove(n ? Ta.light : Ta.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      return r.query().matches ?? n === "dark" ? "dark" : "light";
    },
    addListener(n) {
      const a = r.query(), o = (i) => {
        n(i.matches ? "dark" : "light");
      };
      return typeof a.addListener == "function" ? a.addListener(o) : a.addEventListener("change", o), () => {
        typeof a.removeListener == "function" ? a.removeListener(o) : a.removeEventListener("change", o);
      };
    },
    preventTransition() {
      const n = document.createElement("style");
      return n.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(n), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(n);
          });
        });
      };
    }
  };
  return r;
}
var Ip = "chakra-ui-color-mode";
function Op(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var zp = Op(Ip), Ol = () => {
};
function zl(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function nd(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: a,
      disableTransitionOnChange: o
    } = {},
    colorModeManager: i = zp
  } = e, s = a === "dark" ? "dark" : "light", [l, c] = Ze(() => zl(i, s)), [u, d] = Ze(() => zl(i)), { getSystemTheme: f, setClassName: m, setDataset: p, addListener: h } = Te(() => Lp({ preventTransition: o }), [o]), x = a === "system" && !l ? u : l, C = ct((T) => {
    const w = T === "system" ? f() : T;
    c(w), m(w === "dark"), p(w), i.set(w);
  }, [i, f, m, p]);
  ro(() => {
    a === "system" && d(f());
  }, []), we(() => {
    const T = i.get();
    if (T) {
      C(T);
      return;
    }
    if (a === "system") {
      C("system");
      return;
    }
    C(s);
  }, [i, s, a, C]);
  const _ = ct(() => {
    C(x === "dark" ? "light" : "dark");
  }, [x, C]);
  we(() => {
    if (n)
      return h(C);
  }, [n, h, C]);
  const k = Te(() => ({
    colorMode: t ?? x,
    toggleColorMode: t ? Ol : _,
    setColorMode: t ? Ol : C,
    forced: t !== void 0
  }), [x, _, C, t]);
  return /* @__PURE__ */ y.createElement(As.Provider, {
    value: k
  }, r);
}
nd.displayName = "ColorModeProvider";
var no = { exports: {} };
no.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", a = 800, o = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", m = "[object Function]", p = "[object GeneratorFunction]", h = "[object Map]", x = "[object Number]", C = "[object Null]", _ = "[object Object]", k = "[object Proxy]", T = "[object RegExp]", w = "[object Set]", I = "[object String]", R = "[object Undefined]", z = "[object WeakMap]", V = "[object ArrayBuffer]", Y = "[object DataView]", Se = "[object Float32Array]", fe = "[object Float64Array]", se = "[object Int8Array]", he = "[object Int16Array]", Ee = "[object Int32Array]", $e = "[object Uint8Array]", Pe = "[object Uint8ClampedArray]", Je = "[object Uint16Array]", Qe = "[object Uint32Array]", ot = /[\\^$.*+?()[\]{}|]/g, et = /^\[object .+?Constructor\]$/, ke = /^(?:0|[1-9]\d*)$/, N = {};
  N[Se] = N[fe] = N[se] = N[he] = N[Ee] = N[$e] = N[Pe] = N[Je] = N[Qe] = !0, N[s] = N[l] = N[V] = N[u] = N[Y] = N[d] = N[f] = N[m] = N[h] = N[x] = N[_] = N[T] = N[w] = N[I] = N[z] = !1;
  var L = typeof Ea == "object" && Ea && Ea.Object === Object && Ea, D = typeof self == "object" && self && self.Object === Object && self, ue = L || D || Function("return this")(), He = t && !t.nodeType && t, Le = He && !0 && e && !e.nodeType && e, it = Le && Le.exports === He, wt = it && L.process, kr = function() {
    try {
      var v = Le && Le.require && Le.require("util").types;
      return v || wt && wt.binding && wt.binding("util");
    } catch {
    }
  }(), F = kr && kr.isTypedArray;
  function fr(v, b, E) {
    switch (E.length) {
      case 0:
        return v.call(b);
      case 1:
        return v.call(b, E[0]);
      case 2:
        return v.call(b, E[0], E[1]);
      case 3:
        return v.call(b, E[0], E[1], E[2]);
    }
    return v.apply(b, E);
  }
  function Xt(v, b) {
    for (var E = -1, O = Array(v); ++E < v; )
      O[E] = b(E);
    return O;
  }
  function Vt(v) {
    return function(b) {
      return v(b);
    };
  }
  function Tr(v, b) {
    return v == null ? void 0 : v[b];
  }
  function ua(v, b) {
    return function(E) {
      return v(b(E));
    };
  }
  var da = Array.prototype, Ar = Function.prototype, Pr = Object.prototype, an = ue["__core-js_shared__"], Jt = Ar.toString, pt = Pr.hasOwnProperty, fa = function() {
    var v = /[^.]+$/.exec(an && an.keys && an.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), on = Pr.toString, pa = Jt.call(Object), pr = RegExp(
    "^" + Jt.call(pt).replace(ot, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Rr = it ? ue.Buffer : void 0, sn = ue.Symbol, ln = ue.Uint8Array, Mr = Rr ? Rr.allocUnsafe : void 0, ma = ua(Object.getPrototypeOf, Object), va = Object.create, Ho = Pr.propertyIsEnumerable, Uo = da.splice, Ft = sn ? sn.toStringTag : void 0, Lr = function() {
    try {
      var v = ei(Object, "defineProperty");
      return v({}, "", {}), v;
    } catch {
    }
  }(), Yo = Rr ? Rr.isBuffer : void 0, Ir = Math.max, ha = Date.now, $t = ei(ue, "Map"), Dt = ei(Object, "create"), cn = function() {
    function v() {
    }
    return function(b) {
      if (!mr(b))
        return {};
      if (va)
        return va(b);
      v.prototype = b;
      var E = new v();
      return v.prototype = void 0, E;
    };
  }();
  function _t(v) {
    var b = -1, E = v == null ? 0 : v.length;
    for (this.clear(); ++b < E; ) {
      var O = v[b];
      this.set(O[0], O[1]);
    }
  }
  function qo() {
    this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
  }
  function ga(v) {
    var b = this.has(v) && delete this.__data__[v];
    return this.size -= b ? 1 : 0, b;
  }
  function Go(v) {
    var b = this.__data__;
    if (Dt) {
      var E = b[v];
      return E === n ? void 0 : E;
    }
    return pt.call(b, v) ? b[v] : void 0;
  }
  function ya(v) {
    var b = this.__data__;
    return Dt ? b[v] !== void 0 : pt.call(b, v);
  }
  function ba(v, b) {
    var E = this.__data__;
    return this.size += this.has(v) ? 0 : 1, E[v] = Dt && b === void 0 ? n : b, this;
  }
  _t.prototype.clear = qo, _t.prototype.delete = ga, _t.prototype.get = Go, _t.prototype.has = ya, _t.prototype.set = ba;
  function mt(v) {
    var b = -1, E = v == null ? 0 : v.length;
    for (this.clear(); ++b < E; ) {
      var O = v[b];
      this.set(O[0], O[1]);
    }
  }
  function Zo() {
    this.__data__ = [], this.size = 0;
  }
  function Sa(v) {
    var b = this.__data__, E = Ye(b, v);
    if (E < 0)
      return !1;
    var O = b.length - 1;
    return E == O ? b.pop() : Uo.call(b, E, 1), --this.size, !0;
  }
  function Ko(v) {
    var b = this.__data__, E = Ye(b, v);
    return E < 0 ? void 0 : b[E][1];
  }
  function Xo(v) {
    return Ye(this.__data__, v) > -1;
  }
  function Jo(v, b) {
    var E = this.__data__, O = Ye(E, v);
    return O < 0 ? (++this.size, E.push([v, b])) : E[O][1] = b, this;
  }
  mt.prototype.clear = Zo, mt.prototype.delete = Sa, mt.prototype.get = Ko, mt.prototype.has = Xo, mt.prototype.set = Jo;
  function Qt(v) {
    var b = -1, E = v == null ? 0 : v.length;
    for (this.clear(); ++b < E; ) {
      var O = v[b];
      this.set(O[0], O[1]);
    }
  }
  function g() {
    this.size = 0, this.__data__ = {
      hash: new _t(),
      map: new ($t || mt)(),
      string: new _t()
    };
  }
  function A(v) {
    var b = wa(this, v).delete(v);
    return this.size -= b ? 1 : 0, b;
  }
  function M(v) {
    return wa(this, v).get(v);
  }
  function H(v) {
    return wa(this, v).has(v);
  }
  function J(v, b) {
    var E = wa(this, v), O = E.size;
    return E.set(v, b), this.size += E.size == O ? 0 : 1, this;
  }
  Qt.prototype.clear = g, Qt.prototype.delete = A, Qt.prototype.get = M, Qt.prototype.has = H, Qt.prototype.set = J;
  function K(v) {
    var b = this.__data__ = new mt(v);
    this.size = b.size;
  }
  function G() {
    this.__data__ = new mt(), this.size = 0;
  }
  function q(v) {
    var b = this.__data__, E = b.delete(v);
    return this.size = b.size, E;
  }
  function Ie(v) {
    return this.__data__.get(v);
  }
  function be(v) {
    return this.__data__.has(v);
  }
  function xe(v, b) {
    var E = this.__data__;
    if (E instanceof mt) {
      var O = E.__data__;
      if (!$t || O.length < r - 1)
        return O.push([v, b]), this.size = ++E.size, this;
      E = this.__data__ = new Qt(O);
    }
    return E.set(v, b), this.size = E.size, this;
  }
  K.prototype.clear = G, K.prototype.delete = q, K.prototype.get = Ie, K.prototype.has = be, K.prototype.set = xe;
  function Ue(v, b) {
    var E = ni(v), O = !E && ri(v), X = !E && !O && kl(v), de = !E && !O && !X && Al(v), ge = E || O || X || de, Z = ge ? Xt(v.length, String) : [], ye = Z.length;
    for (var st in v)
      (b || pt.call(v, st)) && !(ge && // Safari 9 has enumerable `arguments.length` in strict mode.
      (st == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      X && (st == "offset" || st == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      de && (st == "buffer" || st == "byteLength" || st == "byteOffset") || // Skip index properties.
      _l(st, ye))) && Z.push(st);
    return Z;
  }
  function Et(v, b, E) {
    (E !== void 0 && !_a(v[b], E) || E === void 0 && !(b in v)) && Qo(v, b, E);
  }
  function xa(v, b, E) {
    var O = v[b];
    (!(pt.call(v, b) && _a(O, E)) || E === void 0 && !(b in v)) && Qo(v, b, E);
  }
  function Ye(v, b) {
    for (var E = v.length; E--; )
      if (_a(v[E][0], b))
        return E;
    return -1;
  }
  function Qo(v, b, E) {
    b == "__proto__" && Lr ? Lr(v, b, {
      configurable: !0,
      enumerable: !0,
      value: E,
      writable: !0
    }) : v[b] = E;
  }
  var G0 = sp();
  function Ca(v) {
    return v == null ? v === void 0 ? R : C : Ft && Ft in Object(v) ? lp(v) : mp(v);
  }
  function Cl(v) {
    return un(v) && Ca(v) == s;
  }
  function Z0(v) {
    if (!mr(v) || fp(v))
      return !1;
    var b = oi(v) ? pr : et;
    return b.test(yp(v));
  }
  function K0(v) {
    return un(v) && Tl(v.length) && !!N[Ca(v)];
  }
  function X0(v) {
    if (!mr(v))
      return pp(v);
    var b = El(v), E = [];
    for (var O in v)
      O == "constructor" && (b || !pt.call(v, O)) || E.push(O);
    return E;
  }
  function wl(v, b, E, O, X) {
    v !== b && G0(b, function(de, ge) {
      if (X || (X = new K()), mr(de))
        J0(v, b, ge, E, wl, O, X);
      else {
        var Z = O ? O(ti(v, ge), de, ge + "", v, b, X) : void 0;
        Z === void 0 && (Z = de), Et(v, ge, Z);
      }
    }, Pl);
  }
  function J0(v, b, E, O, X, de, ge) {
    var Z = ti(v, E), ye = ti(b, E), st = ge.get(ye);
    if (st) {
      Et(v, E, st);
      return;
    }
    var tt = de ? de(Z, ye, E + "", v, b, ge) : void 0, dn = tt === void 0;
    if (dn) {
      var ii = ni(ye), si = !ii && kl(ye), Ml = !ii && !si && Al(ye);
      tt = ye, ii || si || Ml ? ni(Z) ? tt = Z : bp(Z) ? tt = ap(Z) : si ? (dn = !1, tt = tp(ye, !0)) : Ml ? (dn = !1, tt = np(ye, !0)) : tt = [] : Sp(ye) || ri(ye) ? (tt = Z, ri(Z) ? tt = xp(Z) : (!mr(Z) || oi(Z)) && (tt = cp(ye))) : dn = !1;
    }
    dn && (ge.set(ye, tt), X(tt, ye, O, de, ge), ge.delete(ye)), Et(v, E, tt);
  }
  function Q0(v, b) {
    return hp(vp(v, b, Rl), v + "");
  }
  var ep = Lr ? function(v, b) {
    return Lr(v, "toString", {
      configurable: !0,
      enumerable: !1,
      value: wp(b),
      writable: !0
    });
  } : Rl;
  function tp(v, b) {
    if (b)
      return v.slice();
    var E = v.length, O = Mr ? Mr(E) : new v.constructor(E);
    return v.copy(O), O;
  }
  function rp(v) {
    var b = new v.constructor(v.byteLength);
    return new ln(b).set(new ln(v)), b;
  }
  function np(v, b) {
    var E = b ? rp(v.buffer) : v.buffer;
    return new v.constructor(E, v.byteOffset, v.length);
  }
  function ap(v, b) {
    var E = -1, O = v.length;
    for (b || (b = Array(O)); ++E < O; )
      b[E] = v[E];
    return b;
  }
  function op(v, b, E, O) {
    var X = !E;
    E || (E = {});
    for (var de = -1, ge = b.length; ++de < ge; ) {
      var Z = b[de], ye = O ? O(E[Z], v[Z], Z, E, v) : void 0;
      ye === void 0 && (ye = v[Z]), X ? Qo(E, Z, ye) : xa(E, Z, ye);
    }
    return E;
  }
  function ip(v) {
    return Q0(function(b, E) {
      var O = -1, X = E.length, de = X > 1 ? E[X - 1] : void 0, ge = X > 2 ? E[2] : void 0;
      for (de = v.length > 3 && typeof de == "function" ? (X--, de) : void 0, ge && up(E[0], E[1], ge) && (de = X < 3 ? void 0 : de, X = 1), b = Object(b); ++O < X; ) {
        var Z = E[O];
        Z && v(b, Z, O, de);
      }
      return b;
    });
  }
  function sp(v) {
    return function(b, E, O) {
      for (var X = -1, de = Object(b), ge = O(b), Z = ge.length; Z--; ) {
        var ye = ge[v ? Z : ++X];
        if (E(de[ye], ye, de) === !1)
          break;
      }
      return b;
    };
  }
  function wa(v, b) {
    var E = v.__data__;
    return dp(b) ? E[typeof b == "string" ? "string" : "hash"] : E.map;
  }
  function ei(v, b) {
    var E = Tr(v, b);
    return Z0(E) ? E : void 0;
  }
  function lp(v) {
    var b = pt.call(v, Ft), E = v[Ft];
    try {
      v[Ft] = void 0;
      var O = !0;
    } catch {
    }
    var X = on.call(v);
    return O && (b ? v[Ft] = E : delete v[Ft]), X;
  }
  function cp(v) {
    return typeof v.constructor == "function" && !El(v) ? cn(ma(v)) : {};
  }
  function _l(v, b) {
    var E = typeof v;
    return b = b ?? i, !!b && (E == "number" || E != "symbol" && ke.test(v)) && v > -1 && v % 1 == 0 && v < b;
  }
  function up(v, b, E) {
    if (!mr(E))
      return !1;
    var O = typeof b;
    return (O == "number" ? ai(E) && _l(b, E.length) : O == "string" && b in E) ? _a(E[b], v) : !1;
  }
  function dp(v) {
    var b = typeof v;
    return b == "string" || b == "number" || b == "symbol" || b == "boolean" ? v !== "__proto__" : v === null;
  }
  function fp(v) {
    return !!fa && fa in v;
  }
  function El(v) {
    var b = v && v.constructor, E = typeof b == "function" && b.prototype || Pr;
    return v === E;
  }
  function pp(v) {
    var b = [];
    if (v != null)
      for (var E in Object(v))
        b.push(E);
    return b;
  }
  function mp(v) {
    return on.call(v);
  }
  function vp(v, b, E) {
    return b = Ir(b === void 0 ? v.length - 1 : b, 0), function() {
      for (var O = arguments, X = -1, de = Ir(O.length - b, 0), ge = Array(de); ++X < de; )
        ge[X] = O[b + X];
      X = -1;
      for (var Z = Array(b + 1); ++X < b; )
        Z[X] = O[X];
      return Z[b] = E(ge), fr(v, this, Z);
    };
  }
  function ti(v, b) {
    if (!(b === "constructor" && typeof v[b] == "function") && b != "__proto__")
      return v[b];
  }
  var hp = gp(ep);
  function gp(v) {
    var b = 0, E = 0;
    return function() {
      var O = ha(), X = o - (O - E);
      if (E = O, X > 0) {
        if (++b >= a)
          return arguments[0];
      } else
        b = 0;
      return v.apply(void 0, arguments);
    };
  }
  function yp(v) {
    if (v != null) {
      try {
        return Jt.call(v);
      } catch {
      }
      try {
        return v + "";
      } catch {
      }
    }
    return "";
  }
  function _a(v, b) {
    return v === b || v !== v && b !== b;
  }
  var ri = Cl(function() {
    return arguments;
  }()) ? Cl : function(v) {
    return un(v) && pt.call(v, "callee") && !Ho.call(v, "callee");
  }, ni = Array.isArray;
  function ai(v) {
    return v != null && Tl(v.length) && !oi(v);
  }
  function bp(v) {
    return un(v) && ai(v);
  }
  var kl = Yo || _p;
  function oi(v) {
    if (!mr(v))
      return !1;
    var b = Ca(v);
    return b == m || b == p || b == c || b == k;
  }
  function Tl(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= i;
  }
  function mr(v) {
    var b = typeof v;
    return v != null && (b == "object" || b == "function");
  }
  function un(v) {
    return v != null && typeof v == "object";
  }
  function Sp(v) {
    if (!un(v) || Ca(v) != _)
      return !1;
    var b = ma(v);
    if (b === null)
      return !0;
    var E = pt.call(b, "constructor") && b.constructor;
    return typeof E == "function" && E instanceof E && Jt.call(E) == pa;
  }
  var Al = F ? Vt(F) : K0;
  function xp(v) {
    return op(v, Pl(v));
  }
  function Pl(v) {
    return ai(v) ? Ue(v, !0) : X0(v);
  }
  var Cp = ip(function(v, b, E, O) {
    wl(v, b, E, O);
  });
  function wp(v) {
    return function() {
      return v;
    };
  }
  function Rl(v) {
    return v;
  }
  function _p() {
    return !1;
  }
  e.exports = Cp;
})(no, no.exports);
var Np = no.exports;
const Rt = /* @__PURE__ */ rd(Np);
function xt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function br(e, ...t) {
  return Vp(e) ? e(...t) : e;
}
var Vp = (e) => typeof e == "function", Fp = (e) => /!(important)?$/.test(e), Nl = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, Fi = (e, t) => (r) => {
  const n = String(t), a = Fp(n), o = Nl(n), i = e ? `${e}.${o}` : o;
  let s = xt(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = Nl(s), a ? `${s} !important` : s;
};
function zn(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (o, i) => {
    const s = Fi(t, o)(i);
    let l = (r == null ? void 0 : r(s, i)) ?? s;
    return n && (l = n(l, i)), l;
  };
}
var Aa = (...e) => (t) => e.reduce((r, n) => n(r), t);
function vt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = zn({
      scale: e,
      transform: t
    }), n;
  };
}
var $p = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function Dp(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: $p(t),
    transform: r ? zn({
      scale: r,
      compose: n
    }) : n
  };
}
var ad = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function Bp() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...ad
  ].join(" ");
}
function jp() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...ad
  ].join(" ");
}
var Wp = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, Hp = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function Up(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var Yp = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, od = "& > :not(style) ~ :not(style)", qp = {
  [od]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
}, Gp = {
  [od]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
}, $i = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Zp = new Set(Object.values($i)), id = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), Kp = (e) => e.trim();
function Xp(e, t) {
  var r;
  if (e == null || id.has(e))
    return e;
  const n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g, { type: a, values: o } = ((r = n.exec(e)) == null ? void 0 : r.groups) ?? {};
  if (!a || !o)
    return e;
  const i = a.includes("-gradient") ? a : `${a}-gradient`, [s, ...l] = o.split(",").map(Kp).filter(Boolean);
  if ((l == null ? void 0 : l.length) === 0)
    return e;
  const c = s in $i ? $i[s] : s;
  l.unshift(c);
  const u = l.map((d) => {
    if (Zp.has(d))
      return d;
    const f = d.indexOf(" "), [m, p] = f !== -1 ? [d.substr(0, f), d.substr(f + 1)] : [d], h = sd(p) ? p : p && p.split(" "), x = `colors.${m}`, C = x in t.__cssMap ? t.__cssMap[x].varRef : m;
    return h ? [
      C,
      ...Array.isArray(h) ? h : [h]
    ].join(" ") : C;
  });
  return `${i}(${u.join(", ")})`;
}
var sd = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), Jp = (e, t) => Xp(e, t ?? {});
function Qp(e) {
  return /^var\(--.+\)$/.test(e);
}
var em = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, kt = (e) => (t) => `${e}(${t})`, Q = {
  filter(e) {
    return e !== "auto" ? e : Wp;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Hp;
  },
  ring(e) {
    return Up(Q.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? Bp() : e === "auto-gpu" ? jp() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = em(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (Qp(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: Jp,
  blur: kt("blur"),
  opacity: kt("opacity"),
  brightness: kt("brightness"),
  contrast: kt("contrast"),
  dropShadow: kt("drop-shadow"),
  grayscale: kt("grayscale"),
  hueRotate: kt("hue-rotate"),
  invert: kt("invert"),
  saturate: kt("saturate"),
  sepia: kt("sepia"),
  bgImage(e) {
    return e == null || sd(e) || id.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: t, divide: r } = Yp[e] ?? {}, n = { flexDirection: e };
    return t && (n[t] = 1), r && (n[r] = 1), n;
  }
}, S = {
  borderWidths: vt("borderWidths"),
  borderStyles: vt("borderStyles"),
  colors: vt("colors"),
  borders: vt("borders"),
  radii: vt("radii", Q.px),
  space: vt("space", Aa(Q.vh, Q.px)),
  spaceT: vt("space", Aa(Q.vh, Q.px)),
  degreeT(e) {
    return { property: e, transform: Q.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: zn({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: vt("sizes", Aa(Q.vh, Q.px)),
  sizesT: vt("sizes", Aa(Q.vh, Q.fraction)),
  shadows: vt("shadows"),
  logical: Dp,
  blur: vt("blur", Q.blur)
}, Ha = {
  background: S.colors("background"),
  backgroundColor: S.colors("backgroundColor"),
  backgroundImage: S.propT("backgroundImage", Q.bgImage),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Q.bgClip },
  bgSize: S.prop("backgroundSize"),
  bgPosition: S.prop("backgroundPosition"),
  bg: S.colors("background"),
  bgColor: S.colors("backgroundColor"),
  bgPos: S.prop("backgroundPosition"),
  bgRepeat: S.prop("backgroundRepeat"),
  bgAttachment: S.prop("backgroundAttachment"),
  bgGradient: S.propT("backgroundImage", Q.gradient),
  bgClip: { transform: Q.bgClip }
};
Object.assign(Ha, {
  bgImage: Ha.backgroundImage,
  bgImg: Ha.backgroundImage
});
var ee = {
  border: S.borders("border"),
  borderWidth: S.borderWidths("borderWidth"),
  borderStyle: S.borderStyles("borderStyle"),
  borderColor: S.colors("borderColor"),
  borderRadius: S.radii("borderRadius"),
  borderTop: S.borders("borderTop"),
  borderBlockStart: S.borders("borderBlockStart"),
  borderTopLeftRadius: S.radii("borderTopLeftRadius"),
  borderStartStartRadius: S.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: S.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: S.radii("borderTopRightRadius"),
  borderStartEndRadius: S.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: S.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: S.borders("borderRight"),
  borderInlineEnd: S.borders("borderInlineEnd"),
  borderBottom: S.borders("borderBottom"),
  borderBlockEnd: S.borders("borderBlockEnd"),
  borderBottomLeftRadius: S.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: S.radii("borderBottomRightRadius"),
  borderLeft: S.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: S.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: S.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: S.borders(["borderLeft", "borderRight"]),
  borderInline: S.borders("borderInline"),
  borderY: S.borders(["borderTop", "borderBottom"]),
  borderBlock: S.borders("borderBlock"),
  borderTopWidth: S.borderWidths("borderTopWidth"),
  borderBlockStartWidth: S.borderWidths("borderBlockStartWidth"),
  borderTopColor: S.colors("borderTopColor"),
  borderBlockStartColor: S.colors("borderBlockStartColor"),
  borderTopStyle: S.borderStyles("borderTopStyle"),
  borderBlockStartStyle: S.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: S.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: S.borderWidths("borderBlockEndWidth"),
  borderBottomColor: S.colors("borderBottomColor"),
  borderBlockEndColor: S.colors("borderBlockEndColor"),
  borderBottomStyle: S.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: S.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: S.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: S.borderWidths("borderInlineStartWidth"),
  borderLeftColor: S.colors("borderLeftColor"),
  borderInlineStartColor: S.colors("borderInlineStartColor"),
  borderLeftStyle: S.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: S.borderStyles("borderInlineStartStyle"),
  borderRightWidth: S.borderWidths("borderRightWidth"),
  borderInlineEndWidth: S.borderWidths("borderInlineEndWidth"),
  borderRightColor: S.colors("borderRightColor"),
  borderInlineEndColor: S.colors("borderInlineEndColor"),
  borderRightStyle: S.borderStyles("borderRightStyle"),
  borderInlineEndStyle: S.borderStyles("borderInlineEndStyle"),
  borderTopRadius: S.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: S.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: S.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: S.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ee, {
  rounded: ee.borderRadius,
  roundedTop: ee.borderTopRadius,
  roundedTopLeft: ee.borderTopLeftRadius,
  roundedTopRight: ee.borderTopRightRadius,
  roundedTopStart: ee.borderStartStartRadius,
  roundedTopEnd: ee.borderStartEndRadius,
  roundedBottom: ee.borderBottomRadius,
  roundedBottomLeft: ee.borderBottomLeftRadius,
  roundedBottomRight: ee.borderBottomRightRadius,
  roundedBottomStart: ee.borderEndStartRadius,
  roundedBottomEnd: ee.borderEndEndRadius,
  roundedLeft: ee.borderLeftRadius,
  roundedRight: ee.borderRightRadius,
  roundedStart: ee.borderInlineStartRadius,
  roundedEnd: ee.borderInlineEndRadius,
  borderStart: ee.borderInlineStart,
  borderEnd: ee.borderInlineEnd,
  borderTopStartRadius: ee.borderStartStartRadius,
  borderTopEndRadius: ee.borderStartEndRadius,
  borderBottomStartRadius: ee.borderEndStartRadius,
  borderBottomEndRadius: ee.borderEndEndRadius,
  borderStartRadius: ee.borderInlineStartRadius,
  borderEndRadius: ee.borderInlineEndRadius,
  borderStartWidth: ee.borderInlineStartWidth,
  borderEndWidth: ee.borderInlineEndWidth,
  borderStartColor: ee.borderInlineStartColor,
  borderEndColor: ee.borderInlineEndColor,
  borderStartStyle: ee.borderInlineStartStyle,
  borderEndStyle: ee.borderInlineEndStyle
});
var tm = {
  color: S.colors("color"),
  textColor: S.colors("color"),
  fill: S.colors("fill"),
  stroke: S.colors("stroke")
}, Di = {
  boxShadow: S.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: S.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: S.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Di, {
  shadow: Di.boxShadow
});
var rm = {
  filter: { transform: Q.filter },
  blur: S.blur("--chakra-blur"),
  brightness: S.propT("--chakra-brightness", Q.brightness),
  contrast: S.propT("--chakra-contrast", Q.contrast),
  hueRotate: S.degreeT("--chakra-hue-rotate"),
  invert: S.propT("--chakra-invert", Q.invert),
  saturate: S.propT("--chakra-saturate", Q.saturate),
  dropShadow: S.propT("--chakra-drop-shadow", Q.dropShadow),
  backdropFilter: { transform: Q.backdropFilter },
  backdropBlur: S.blur("--chakra-backdrop-blur"),
  backdropBrightness: S.propT("--chakra-backdrop-brightness", Q.brightness),
  backdropContrast: S.propT("--chakra-backdrop-contrast", Q.contrast),
  backdropHueRotate: S.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: S.propT("--chakra-backdrop-invert", Q.invert),
  backdropSaturate: S.propT("--chakra-backdrop-saturate", Q.saturate)
}, ao = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Q.flexDirection },
  experimental_spaceX: {
    static: qp,
    transform: zn({
      scale: "space",
      transform: (e) => e !== null ? { "--chakra-space-x": e } : null
    })
  },
  experimental_spaceY: {
    static: Gp,
    transform: zn({
      scale: "space",
      transform: (e) => e != null ? { "--chakra-space-y": e } : null
    })
  },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: S.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: S.space("gap"),
  rowGap: S.space("rowGap"),
  columnGap: S.space("columnGap")
};
Object.assign(ao, {
  flexDir: ao.flexDirection
});
var ld = {
  gridGap: S.space("gridGap"),
  gridColumnGap: S.space("gridColumnGap"),
  gridRowGap: S.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, nm = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Q.outline },
  outlineOffset: !0,
  outlineColor: S.colors("outlineColor")
}, lt = {
  width: S.sizesT("width"),
  inlineSize: S.sizesT("inlineSize"),
  height: S.sizes("height"),
  blockSize: S.sizes("blockSize"),
  boxSize: S.sizes(["width", "height"]),
  minWidth: S.sizes("minWidth"),
  minInlineSize: S.sizes("minInlineSize"),
  minHeight: S.sizes("minHeight"),
  minBlockSize: S.sizes("minBlockSize"),
  maxWidth: S.sizes("maxWidth"),
  maxInlineSize: S.sizes("maxInlineSize"),
  maxHeight: S.sizes("maxHeight"),
  maxBlockSize: S.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: S.propT("float", Q.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(lt, {
  w: lt.width,
  h: lt.height,
  minW: lt.minWidth,
  maxW: lt.maxWidth,
  minH: lt.minHeight,
  maxH: lt.maxHeight,
  overscroll: lt.overscrollBehavior,
  overscrollX: lt.overscrollBehaviorX,
  overscrollY: lt.overscrollBehaviorY
});
var am = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: S.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: S.prop("listStyleImage")
};
function om(e, t, r, n) {
  const a = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < a.length && e; n += 1)
    e = e[a[n]];
  return e === void 0 ? r : e;
}
var im = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, a, o, i) => {
    if (typeof n > "u")
      return e(n, a, o);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(a))
      return s.get(a);
    const l = e(n, a, o, i);
    return s.set(a, l), l;
  };
}, sm = im(om), lm = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, cm = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, li = (e, t, r) => {
  const n = {}, a = sm(e, t, {});
  for (const o in a)
    o in r && r[o] != null || (n[o] = a[o]);
  return n;
}, um = {
  srOnly: {
    transform(e) {
      return e === !0 ? lm : e === "focusable" ? cm : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => li(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => li(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => li(t, e, r)
  }
}, Cn = {
  position: !0,
  pos: S.prop("position"),
  zIndex: S.prop("zIndex", "zIndices"),
  inset: S.spaceT("inset"),
  insetX: S.spaceT(["left", "right"]),
  insetInline: S.spaceT("insetInline"),
  insetY: S.spaceT(["top", "bottom"]),
  insetBlock: S.spaceT("insetBlock"),
  top: S.spaceT("top"),
  insetBlockStart: S.spaceT("insetBlockStart"),
  bottom: S.spaceT("bottom"),
  insetBlockEnd: S.spaceT("insetBlockEnd"),
  left: S.spaceT("left"),
  insetInlineStart: S.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: S.spaceT("right"),
  insetInlineEnd: S.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Cn, {
  insetStart: Cn.insetInlineStart,
  insetEnd: Cn.insetInlineEnd
});
var dm = {
  ring: { transform: Q.ring },
  ringColor: S.colors("--chakra-ring-color"),
  ringOffset: S.prop("--chakra-ring-offset-width"),
  ringOffsetColor: S.colors("--chakra-ring-offset-color"),
  ringInset: S.prop("--chakra-ring-inset")
}, me = {
  margin: S.spaceT("margin"),
  marginTop: S.spaceT("marginTop"),
  marginBlockStart: S.spaceT("marginBlockStart"),
  marginRight: S.spaceT("marginRight"),
  marginInlineEnd: S.spaceT("marginInlineEnd"),
  marginBottom: S.spaceT("marginBottom"),
  marginBlockEnd: S.spaceT("marginBlockEnd"),
  marginLeft: S.spaceT("marginLeft"),
  marginInlineStart: S.spaceT("marginInlineStart"),
  marginX: S.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: S.spaceT("marginInline"),
  marginY: S.spaceT(["marginTop", "marginBottom"]),
  marginBlock: S.spaceT("marginBlock"),
  padding: S.space("padding"),
  paddingTop: S.space("paddingTop"),
  paddingBlockStart: S.space("paddingBlockStart"),
  paddingRight: S.space("paddingRight"),
  paddingBottom: S.space("paddingBottom"),
  paddingBlockEnd: S.space("paddingBlockEnd"),
  paddingLeft: S.space("paddingLeft"),
  paddingInlineStart: S.space("paddingInlineStart"),
  paddingInlineEnd: S.space("paddingInlineEnd"),
  paddingX: S.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: S.space("paddingInline"),
  paddingY: S.space(["paddingTop", "paddingBottom"]),
  paddingBlock: S.space("paddingBlock")
};
Object.assign(me, {
  m: me.margin,
  mt: me.marginTop,
  mr: me.marginRight,
  me: me.marginInlineEnd,
  marginEnd: me.marginInlineEnd,
  mb: me.marginBottom,
  ml: me.marginLeft,
  ms: me.marginInlineStart,
  marginStart: me.marginInlineStart,
  mx: me.marginX,
  my: me.marginY,
  p: me.padding,
  pt: me.paddingTop,
  py: me.paddingY,
  px: me.paddingX,
  pb: me.paddingBottom,
  pl: me.paddingLeft,
  ps: me.paddingInlineStart,
  paddingStart: me.paddingInlineStart,
  pr: me.paddingRight,
  pe: me.paddingInlineEnd,
  paddingEnd: me.paddingInlineEnd
});
var fm = {
  textDecorationColor: S.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: S.shadows("textShadow")
}, pm = {
  clipPath: !0,
  transform: S.propT("transform", Q.transform),
  transformOrigin: !0,
  translateX: S.spaceT("--chakra-translate-x"),
  translateY: S.spaceT("--chakra-translate-y"),
  skewX: S.degreeT("--chakra-skew-x"),
  skewY: S.degreeT("--chakra-skew-y"),
  scaleX: S.prop("--chakra-scale-x"),
  scaleY: S.prop("--chakra-scale-y"),
  scale: S.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: S.degreeT("--chakra-rotate")
}, mm = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: S.prop("transitionDuration", "transition.duration"),
  transitionProperty: S.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: S.prop("transitionTimingFunction", "transition.easing")
}, vm = {
  fontFamily: S.prop("fontFamily", "fonts"),
  fontSize: S.prop("fontSize", "fontSizes", Q.px),
  fontWeight: S.prop("fontWeight", "fontWeights"),
  lineHeight: S.prop("lineHeight", "lineHeights"),
  letterSpacing: S.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, hm = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: S.spaceT("scrollMargin"),
  scrollMarginTop: S.spaceT("scrollMarginTop"),
  scrollMarginBottom: S.spaceT("scrollMarginBottom"),
  scrollMarginLeft: S.spaceT("scrollMarginLeft"),
  scrollMarginRight: S.spaceT("scrollMarginRight"),
  scrollMarginX: S.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: S.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: S.spaceT("scrollPadding"),
  scrollPaddingTop: S.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: S.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: S.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: S.spaceT("scrollPaddingRight"),
  scrollPaddingX: S.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: S.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function cd(e) {
  return xt(e) && e.reference ? e.reference : String(e);
}
var Co = (e, ...t) => t.map(cd).join(` ${e} `).replace(/calc/g, ""), Vl = (...e) => `calc(${Co("+", ...e)})`, Fl = (...e) => `calc(${Co("-", ...e)})`, Bi = (...e) => `calc(${Co("*", ...e)})`, $l = (...e) => `calc(${Co("/", ...e)})`, Dl = (e) => {
  const t = cd(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Bi(t, -1);
}, gr = Object.assign((e) => ({
  add: (...t) => gr(Vl(e, ...t)),
  subtract: (...t) => gr(Fl(e, ...t)),
  multiply: (...t) => gr(Bi(e, ...t)),
  divide: (...t) => gr($l(e, ...t)),
  negate: () => gr(Dl(e)),
  toString: () => e.toString()
}), {
  add: Vl,
  subtract: Fl,
  multiply: Bi,
  divide: $l,
  negate: Dl
});
function gm(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ym(e) {
  const t = gm(e.toString());
  return Sm(bm(t));
}
function bm(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Sm(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function xm(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Cm(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function wm(e, t = "") {
  return ym(`--${xm(e, t)}`);
}
function ce(e, t, r) {
  const n = wm(e, r);
  return {
    variable: n,
    reference: Cm(n, t)
  };
}
function _m(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Em(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function ji(e) {
  if (e == null)
    return e;
  const { unitless: t } = Em(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var ud = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Rs = (e) => Object.fromEntries(Object.entries(e).sort(ud));
function Bl(e) {
  const t = Rs(e);
  return Object.assign(Object.values(t), t);
}
function km(e) {
  const t = Object.keys(Rs(e));
  return new Set(t);
}
function jl(e) {
  if (!e)
    return e;
  e = ji(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return typeof e == "number" ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function bn(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${ji(e)})`), t && r.push("and", `(max-width: ${ji(t)})`), r.join(" ");
}
function Tm(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = Bl(e), r = Object.entries(e).sort(ud).map(([o, i], s, l) => {
    let [, c] = l[s + 1] ?? [];
    return c = parseFloat(c) > 0 ? jl(c) : void 0, {
      _minW: jl(i),
      breakpoint: o,
      minW: i,
      maxW: c,
      maxWQuery: bn(null, c),
      minWQuery: bn(i),
      minMaxQuery: bn(i, c)
    };
  }), n = km(e), a = Array.from(n.values());
  return {
    keys: n,
    normalized: t,
    isResponsive(o) {
      const i = Object.keys(o);
      return i.length > 0 && i.every((s) => n.has(s));
    },
    asObject: Rs(e),
    asArray: Bl(e),
    details: r,
    media: [
      null,
      ...t.map((o) => bn(o)).slice(1)
    ],
    toArrayValue(o) {
      if (!xt(o))
        throw new Error("toArrayValue: value must be an object");
      const i = a.map((s) => o[s] ?? null);
      for (; _m(i) === null; )
        i.pop();
      return i;
    },
    toObjectValue(o) {
      if (!Array.isArray(o))
        throw new Error("toObjectValue: value must be an array");
      return o.reduce((i, s, l) => {
        const c = a[l];
        return c != null && s != null && (i[c] = s), i;
      }, {});
    }
  };
}
var Oe = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, er = (e) => dd((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Bt = (e) => dd((t) => e(t, "~ &"), "[data-peer]", ".peer"), dd = (e, ...t) => t.map(e).join(", "), wo = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: er(Oe.hover),
  _peerHover: Bt(Oe.hover),
  _groupFocus: er(Oe.focus),
  _peerFocus: Bt(Oe.focus),
  _groupFocusVisible: er(Oe.focusVisible),
  _peerFocusVisible: Bt(Oe.focusVisible),
  _groupActive: er(Oe.active),
  _peerActive: Bt(Oe.active),
  _groupDisabled: er(Oe.disabled),
  _peerDisabled: Bt(Oe.disabled),
  _groupInvalid: er(Oe.invalid),
  _peerInvalid: Bt(Oe.invalid),
  _groupChecked: er(Oe.checked),
  _peerChecked: Bt(Oe.checked),
  _groupFocusWithin: er(Oe.focusWithin),
  _peerFocusWithin: Bt(Oe.focusWithin),
  _peerPlaceholderShown: Bt(Oe.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
}, Am = Object.keys(wo);
function Wl(e, t) {
  return ce(String(e).replace(/\./g, "-"), void 0, t);
}
function Pm(e, t) {
  let r = {};
  const n = {};
  for (const [a, o] of Object.entries(e)) {
    const { isSemantic: i, value: s } = o, { variable: l, reference: c } = Wl(a, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (a.startsWith("space")) {
        const f = a.split("."), [m, ...p] = f, h = `${m}.-${p.join(".")}`, x = gr.negate(s), C = gr.negate(c);
        n[h] = {
          value: x,
          var: l,
          varRef: C
        };
      }
      r[l] = s, n[a] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (f) => {
      const p = [String(a).split(".")[0], f].join(".");
      if (!e[p])
        return f;
      const { reference: x } = Wl(p, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = xt(s) ? s : { default: s };
    r = Rt(r, Object.entries(d).reduce((f, [m, p]) => {
      var h;
      const x = u(p);
      if (m === "default")
        return f[l] = x, f;
      const C = ((h = wo) == null ? void 0 : h[m]) ?? m;
      return f[C] = { [l]: x }, f;
    }, {})), n[a] = {
      value: c,
      var: l,
      varRef: c
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function Rm(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function Mm(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var Lm = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur"
];
function Im(e) {
  return Mm(e, Lm);
}
function Om(e) {
  return e.semanticTokens;
}
function zm(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...a } = e;
  return a;
}
function Nm({
  tokens: e,
  semanticTokens: t
}) {
  const r = Object.entries(Wi(e) ?? {}).map(([a, o]) => [a, { isSemantic: !1, value: o }]), n = Object.entries(Wi(t, 1) ?? {}).map(([a, o]) => [a, { isSemantic: !0, value: o }]);
  return Object.fromEntries([
    ...r,
    ...n
  ]);
}
function Wi(e, t = 1 / 0) {
  return !xt(e) && !Array.isArray(e) || !t ? e : Object.entries(e).reduce((r, [n, a]) => (xt(a) || Array.isArray(a) ? Object.entries(Wi(a, t - 1)).forEach(([o, i]) => {
    r[`${n}.${o}`] = i;
  }) : r[n] = a, r), {});
}
function Vm(e) {
  var t;
  const r = zm(e), n = Im(r), a = Om(r), o = Nm({ tokens: n, semanticTokens: a }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = Pm(o, { cssVarPrefix: i });
  return Object.assign(r, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: Tm(r.breakpoints)
  }), r;
}
var Ms = Rt({}, Ha, ee, tm, ao, lt, rm, dm, nm, ld, um, Cn, Di, me, hm, vm, fm, pm, am, mm), Fm = Object.assign({}, me, lt, ao, ld, Cn), $m = Object.keys(Fm), Dm = [...Object.keys(Ms), ...Am], Bm = { ...Ms, ...wo }, jm = (e) => e in Bm, Wm = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: a } = t.__breakpoints, o = {};
  for (const i in e) {
    let s = br(e[i], t);
    if (s == null)
      continue;
    if (s = xt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      o[i] = s;
      continue;
    }
    const l = s.slice(0, a.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = a == null ? void 0 : a[c];
      if (!u) {
        o[i] = s[c];
        continue;
      }
      o[u] = o[u] || {}, s[c] != null && (o[u][i] = s[c]);
    }
  }
  return o;
};
function Hm(e) {
  const t = [];
  let r = "", n = !1;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    o === "(" ? (n = !0, r += o) : o === ")" ? (n = !1, r += o) : o === "," && !n ? (t.push(r), r = "") : r += o;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Um(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ym = (e, t) => e.startsWith("--") && typeof t == "string" && !Um(t), qm = (e, t) => {
  if (t == null)
    return t;
  const r = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.varRef;
  }, n = (i) => r(i) ?? i, [a, o] = Hm(t);
  return t = r(a) ?? n(o) ?? n(t), t;
};
function Gm(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, a = (o, i = !1) => {
    var s;
    const l = br(o, n), c = Wm(l)(n);
    let u = {};
    for (let d in c) {
      const f = c[d];
      let m = br(f, n);
      d in r && (d = r[d]), Ym(d, m) && (m = qm(n, m));
      let p = t[d];
      if (p === !0 && (p = { property: d }), xt(m)) {
        u[d] = u[d] ?? {}, u[d] = Rt({}, u[d], a(m, !0));
        continue;
      }
      let h = ((s = p == null ? void 0 : p.transform) == null ? void 0 : s.call(p, m, n, l)) ?? m;
      h = p != null && p.processResult ? a(h, !0) : h;
      const x = br(p == null ? void 0 : p.property, n);
      if (!i && (p != null && p.static)) {
        const C = br(p.static, n);
        u = Rt({}, u, C);
      }
      if (x && Array.isArray(x)) {
        for (const C of x)
          u[C] = h;
        continue;
      }
      if (x) {
        x === "&" && xt(h) ? u = Rt({}, u, h) : u[x] = h;
        continue;
      }
      if (xt(h)) {
        u = Rt({}, u, h);
        continue;
      }
      u[d] = h;
    }
    return u;
  };
  return a;
}
var fd = (e) => (t) => Gm({
  theme: t,
  pseudos: wo,
  configs: Ms
})(e);
function ve(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Zm(e, t) {
  if (Array.isArray(e))
    return e;
  if (xt(e))
    return t(e);
  if (e != null)
    return [e];
}
function Km(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Xm(e) {
  const t = e.__breakpoints;
  return function(n, a, o, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Zm(o, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, m = !!n.parts;
    for (let p = 0; p < d; p++) {
      const h = t.details[p], x = t.details[Km(u, p)], C = bn(h.minW, x == null ? void 0 : x._minW), _ = br((s = n[a]) == null ? void 0 : s[u[p]], i);
      if (_) {
        if (m) {
          (l = n.parts) == null || l.forEach((k) => {
            Rt(c, {
              [k]: f ? _[k] : { [C]: _[k] }
            });
          });
          continue;
        }
        if (!m) {
          f ? Rt(c, _) : c[C] = _;
          continue;
        }
        c[C] = _;
      }
    }
    return c;
  };
}
function Jm(e) {
  return (t) => {
    const { variant: r, size: n, theme: a } = t, o = Xm(a);
    return Rt({}, br(e.baseStyle ?? {}, t), o(e, "sizes", n, t), o(e, "variants", r, t));
  };
}
function Me(e) {
  return Rm(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Qm(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ev(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var tv = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(a) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ev(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var i = Qm(a);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ne = "-ms-", oo = "-moz-", te = "-webkit-", Ls = "comm", Is = "rule", Os = "decl", rv = "@import", pd = "@keyframes", nv = Math.abs, _o = String.fromCharCode, av = Object.assign;
function ov(e, t) {
  return ze(e, 0) ^ 45 ? (((t << 2 ^ ze(e, 0)) << 2 ^ ze(e, 1)) << 2 ^ ze(e, 2)) << 2 ^ ze(e, 3) : 0;
}
function md(e) {
  return e.trim();
}
function iv(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, r) {
  return e.replace(t, r);
}
function Hi(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Nn(e, t, r) {
  return e.slice(t, r);
}
function Pt(e) {
  return e.length;
}
function zs(e) {
  return e.length;
}
function Pa(e, t) {
  return t.push(e), e;
}
function sv(e, t) {
  return e.map(t).join("");
}
var Eo = 1, Zr = 1, vd = 0, Ke = 0, Ae = 0, Qr = "";
function ko(e, t, r, n, a, o, i) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: Eo, column: Zr, length: i, return: "" };
}
function mn(e, t) {
  return av(ko("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lv() {
  return Ae;
}
function cv() {
  return Ae = Ke > 0 ? ze(Qr, --Ke) : 0, Zr--, Ae === 10 && (Zr = 1, Eo--), Ae;
}
function nt() {
  return Ae = Ke < vd ? ze(Qr, Ke++) : 0, Zr++, Ae === 10 && (Zr = 1, Eo++), Ae;
}
function It() {
  return ze(Qr, Ke);
}
function Ua() {
  return Ke;
}
function Qn(e, t) {
  return Nn(Qr, e, t);
}
function Vn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hd(e) {
  return Eo = Zr = 1, vd = Pt(Qr = e), Ke = 0, [];
}
function gd(e) {
  return Qr = "", e;
}
function Ya(e) {
  return md(Qn(Ke - 1, Ui(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function uv(e) {
  for (; (Ae = It()) && Ae < 33; )
    nt();
  return Vn(e) > 2 || Vn(Ae) > 3 ? "" : " ";
}
function dv(e, t) {
  for (; --t && nt() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return Qn(e, Ua() + (t < 6 && It() == 32 && nt() == 32));
}
function Ui(e) {
  for (; nt(); )
    switch (Ae) {
      case e:
        return Ke;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ui(Ae);
        break;
      case 40:
        e === 41 && Ui(e);
        break;
      case 92:
        nt();
        break;
    }
  return Ke;
}
function fv(e, t) {
  for (; nt() && e + Ae !== 47 + 10; )
    if (e + Ae === 42 + 42 && It() === 47)
      break;
  return "/*" + Qn(t, Ke - 1) + "*" + _o(e === 47 ? e : nt());
}
function pv(e) {
  for (; !Vn(It()); )
    nt();
  return Qn(e, Ke);
}
function mv(e) {
  return gd(qa("", null, null, null, [""], e = hd(e), 0, [0], e));
}
function qa(e, t, r, n, a, o, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, m = 0, p = 0, h = 1, x = 1, C = 1, _ = 0, k = "", T = a, w = o, I = n, R = k; x; )
    switch (p = _, _ = nt()) {
      case 40:
        if (p != 108 && ze(R, d - 1) == 58) {
          Hi(R += oe(Ya(_), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Ya(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += uv(p);
        break;
      case 92:
        R += dv(Ua() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            Pa(vv(fv(nt(), Ua()), t, r), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * h:
        s[c++] = Pt(R) * C;
      case 125 * h:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            m > 0 && Pt(R) - d && Pa(m > 32 ? Ul(R + ";", n, r, d - 1) : Ul(oe(R, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            R += ";";
          default:
            if (Pa(I = Hl(R, t, r, c, u, a, s, k, T = [], w = [], d), o), _ === 123)
              if (u === 0)
                qa(R, t, I, I, T, o, d, s, w);
              else
                switch (f === 99 && ze(R, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    qa(e, I, I, n && Pa(Hl(e, I, I, 0, 0, a, s, k, a, T = [], d), w), a, w, d, s, n ? T : w);
                    break;
                  default:
                    qa(R, I, I, I, [""], w, 0, s, w);
                }
        }
        c = u = m = 0, h = C = 1, k = R = "", d = i;
        break;
      case 58:
        d = 1 + Pt(R), m = p;
      default:
        if (h < 1) {
          if (_ == 123)
            --h;
          else if (_ == 125 && h++ == 0 && cv() == 125)
            continue;
        }
        switch (R += _o(_), _ * h) {
          case 38:
            C = u > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            s[c++] = (Pt(R) - 1) * C, C = 1;
            break;
          case 64:
            It() === 45 && (R += Ya(nt())), f = It(), u = d = Pt(k = R += pv(Ua())), _++;
            break;
          case 45:
            p === 45 && Pt(R) == 2 && (h = 0);
        }
    }
  return o;
}
function Hl(e, t, r, n, a, o, i, s, l, c, u) {
  for (var d = a - 1, f = a === 0 ? o : [""], m = zs(f), p = 0, h = 0, x = 0; p < n; ++p)
    for (var C = 0, _ = Nn(e, d + 1, d = nv(h = i[p])), k = e; C < m; ++C)
      (k = md(h > 0 ? f[C] + " " + _ : oe(_, /&\f/g, f[C]))) && (l[x++] = k);
  return ko(e, t, r, a === 0 ? Is : s, l, c, u);
}
function vv(e, t, r) {
  return ko(e, t, r, Ls, _o(lv()), Nn(e, 2, -2), 0);
}
function Ul(e, t, r, n) {
  return ko(e, t, r, Os, Nn(e, 0, n), Nn(e, n + 1, -1), n);
}
function $r(e, t) {
  for (var r = "", n = zs(e), a = 0; a < n; a++)
    r += t(e[a], a, e, t) || "";
  return r;
}
function hv(e, t, r, n) {
  switch (e.type) {
    case rv:
    case Os:
      return e.return = e.return || e.value;
    case Ls:
      return "";
    case pd:
      return e.return = e.value + "{" + $r(e.children, n) + "}";
    case Is:
      e.value = e.props.join(",");
  }
  return Pt(r = $r(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function gv(e) {
  var t = zs(e);
  return function(r, n, a, o) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, a, o) || "";
    return i;
  };
}
function yv(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Yl = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var a = t(n);
    return r.set(n, a), a;
  };
};
function yd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bv = function(t, r, n) {
  for (var a = 0, o = 0; a = o, o = It(), a === 38 && o === 12 && (r[n] = 1), !Vn(o); )
    nt();
  return Qn(t, Ke);
}, Sv = function(t, r) {
  var n = -1, a = 44;
  do
    switch (Vn(a)) {
      case 0:
        a === 38 && It() === 12 && (r[n] = 1), t[n] += bv(Ke - 1, r, n);
        break;
      case 2:
        t[n] += Ya(a);
        break;
      case 4:
        if (a === 44) {
          t[++n] = It() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += _o(a);
    }
  while (a = nt());
  return t;
}, xv = function(t, r) {
  return gd(Sv(hd(t), r));
}, ql = /* @__PURE__ */ new WeakMap(), Cv = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ql.get(n)) && !a) {
      ql.set(t, !0);
      for (var o = [], i = xv(r, o), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = o[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, wv = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, _v = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ev = function(t) {
  return t.type === "comm" && t.children.indexOf(_v) > -1;
}, kv = function(t) {
  return function(r, n, a) {
    if (!(r.type !== "rule" || t.compat)) {
      var o = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var i = r.parent === a[0], s = i ? a[0].children : (
          // global rule at the root level
          a
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (Ev(c))
              return;
            break;
          }
        }
        o.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, bd = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Tv = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!bd(r[n]))
      return !0;
  return !1;
}, Gl = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Av = function(t, r, n) {
  bd(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Gl(t)) : Tv(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Gl(t)));
};
function Sd(e, t) {
  switch (ov(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + oo + e + Ne + e + e;
    case 6828:
    case 4268:
      return te + e + Ne + e + e;
    case 6165:
      return te + e + Ne + "flex-" + e + e;
    case 5187:
      return te + e + oe(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Ne + "flex-$1$2") + e;
    case 5443:
      return te + e + Ne + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + Ne + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + Ne + oe(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Ne + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + oe(e, "-grow", "") + te + e + Ne + oe(e, "grow", "positive") + e;
    case 4554:
      return te + oe(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Ne + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pt(e) - 1 - t > 6)
        switch (ze(e, t + 1)) {
          case 109:
            if (ze(e, t + 4) !== 45)
              break;
          case 102:
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + oo + (ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Hi(e, "stretch") ? Sd(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ze(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ze(e, Pt(e) - 3 - (~Hi(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + te) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + te + (ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + Ne + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ze(e, t + 11)) {
        case 114:
          return te + e + Ne + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Ne + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Ne + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Ne + e + e;
  }
  return e;
}
var Pv = function(t, r, n, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Os:
        t.return = Sd(t.value, t.length);
        break;
      case pd:
        return $r([mn(t, {
          value: oe(t.value, "@", "@" + te)
        })], a);
      case Is:
        if (t.length)
          return sv(t.props, function(o) {
            switch (iv(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return $r([mn(t, {
                  props: [oe(o, /:(read-\w+)/, ":" + oo + "$1")]
                })], a);
              case "::placeholder":
                return $r([mn(t, {
                  props: [oe(o, /:(plac\w+)/, ":" + te + "input-$1")]
                }), mn(t, {
                  props: [oe(o, /:(plac\w+)/, ":" + oo + "$1")]
                }), mn(t, {
                  props: [oe(o, /:(plac\w+)/, Ne + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Rv = [Pv], Mv = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var x = h.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || Rv;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var o = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var x = h.getAttribute("data-emotion").split(" "), C = 1; C < x.length; C++)
        o[x[C]] = !0;
      s.push(h);
    }
  );
  var l, c = [Cv, wv];
  process.env.NODE_ENV !== "production" && c.push(kv({
    get compat() {
      return p.compat;
    }
  }), Av);
  {
    var u, d = [hv, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== Ls && u.insert(h.value + "{}"));
    } : yv(function(h) {
      u.insert(h);
    })], f = gv(c.concat(a, d)), m = function(x) {
      return $r(mv(x), f);
    };
    l = function(x, C, _, k) {
      u = _, process.env.NODE_ENV !== "production" && C.map !== void 0 && (u = {
        insert: function(w) {
          _.insert(w + C.map);
        }
      }), m(x ? x + "{" + C.styles + "}" : C.styles), k && (p.inserted[C.name] = !0);
    };
  }
  var p = {
    key: r,
    sheet: new tv({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: l
  };
  return p.sheet.hydrate(s), p;
};
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, io.apply(this, arguments);
}
var Yi = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zl;
function Lv() {
  if (Zl)
    return ne;
  Zl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function k(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case o:
            case a:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case u:
                case p:
                case m:
                case i:
                  return w;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function T(w) {
    return k(w) === c;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = c, ne.ContextConsumer = s, ne.ContextProvider = i, ne.Element = t, ne.ForwardRef = u, ne.Fragment = n, ne.Lazy = p, ne.Memo = m, ne.Portal = r, ne.Profiler = o, ne.StrictMode = a, ne.Suspense = d, ne.isAsyncMode = function(w) {
    return T(w) || k(w) === l;
  }, ne.isConcurrentMode = T, ne.isContextConsumer = function(w) {
    return k(w) === s;
  }, ne.isContextProvider = function(w) {
    return k(w) === i;
  }, ne.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, ne.isForwardRef = function(w) {
    return k(w) === u;
  }, ne.isFragment = function(w) {
    return k(w) === n;
  }, ne.isLazy = function(w) {
    return k(w) === p;
  }, ne.isMemo = function(w) {
    return k(w) === m;
  }, ne.isPortal = function(w) {
    return k(w) === r;
  }, ne.isProfiler = function(w) {
    return k(w) === o;
  }, ne.isStrictMode = function(w) {
    return k(w) === a;
  }, ne.isSuspense = function(w) {
    return k(w) === d;
  }, ne.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === o || w === a || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === p || w.$$typeof === m || w.$$typeof === i || w.$$typeof === s || w.$$typeof === u || w.$$typeof === x || w.$$typeof === C || w.$$typeof === _ || w.$$typeof === h);
  }, ne.typeOf = k, ne;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kl;
function Iv() {
  return Kl || (Kl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function k(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === n || F === c || F === o || F === a || F === d || F === f || typeof F == "object" && F !== null && (F.$$typeof === p || F.$$typeof === m || F.$$typeof === i || F.$$typeof === s || F.$$typeof === u || F.$$typeof === x || F.$$typeof === C || F.$$typeof === _ || F.$$typeof === h);
    }
    function T(F) {
      if (typeof F == "object" && F !== null) {
        var fr = F.$$typeof;
        switch (fr) {
          case t:
            var Xt = F.type;
            switch (Xt) {
              case l:
              case c:
              case n:
              case o:
              case a:
              case d:
                return Xt;
              default:
                var Vt = Xt && Xt.$$typeof;
                switch (Vt) {
                  case s:
                  case u:
                  case p:
                  case m:
                  case i:
                    return Vt;
                  default:
                    return fr;
                }
            }
          case r:
            return fr;
        }
      }
    }
    var w = l, I = c, R = s, z = i, V = t, Y = u, Se = n, fe = p, se = m, he = r, Ee = o, $e = a, Pe = d, Je = !1;
    function Qe(F) {
      return Je || (Je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ot(F) || T(F) === l;
    }
    function ot(F) {
      return T(F) === c;
    }
    function et(F) {
      return T(F) === s;
    }
    function ke(F) {
      return T(F) === i;
    }
    function N(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function L(F) {
      return T(F) === u;
    }
    function D(F) {
      return T(F) === n;
    }
    function ue(F) {
      return T(F) === p;
    }
    function He(F) {
      return T(F) === m;
    }
    function Le(F) {
      return T(F) === r;
    }
    function it(F) {
      return T(F) === o;
    }
    function wt(F) {
      return T(F) === a;
    }
    function kr(F) {
      return T(F) === d;
    }
    ae.AsyncMode = w, ae.ConcurrentMode = I, ae.ContextConsumer = R, ae.ContextProvider = z, ae.Element = V, ae.ForwardRef = Y, ae.Fragment = Se, ae.Lazy = fe, ae.Memo = se, ae.Portal = he, ae.Profiler = Ee, ae.StrictMode = $e, ae.Suspense = Pe, ae.isAsyncMode = Qe, ae.isConcurrentMode = ot, ae.isContextConsumer = et, ae.isContextProvider = ke, ae.isElement = N, ae.isForwardRef = L, ae.isFragment = D, ae.isLazy = ue, ae.isMemo = He, ae.isPortal = Le, ae.isProfiler = it, ae.isStrictMode = wt, ae.isSuspense = kr, ae.isValidElementType = k, ae.typeOf = T;
  }()), ae;
}
process.env.NODE_ENV === "production" ? Yi.exports = Lv() : Yi.exports = Iv();
var Ov = Yi.exports, xd = Ov, zv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Nv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cd = {};
Cd[xd.ForwardRef] = zv;
Cd[xd.Memo] = Nv;
var Vv = !0;
function Ns(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : n += a + " ";
  }), n;
}
var To = function(t, r, n) {
  var a = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Vv === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
}, Ao = function(t, r, n) {
  To(t, r, n);
  var a = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + a : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Fv(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var $v = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Xl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Dv = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Bv = /[A-Z]|^ms/g, wd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vs = function(t) {
  return t.charCodeAt(1) === 45;
}, Jl = function(t) {
  return t != null && typeof t != "boolean";
}, ci = /* @__PURE__ */ yd(function(e) {
  return Vs(e) ? e : e.replace(Bv, "-$&").toLowerCase();
}), so = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(wd, function(n, a, o) {
          return bt = {
            name: a,
            styles: o,
            next: bt
          }, a;
        });
  }
  return $v[t] !== 1 && !Vs(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var jv = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Wv = ["normal", "none", "initial", "inherit", "unset"], Hv = so, Uv = /^-ms-/, Yv = /-(.)/g, Ql = {};
  so = function(t, r) {
    if (t === "content" && (typeof r != "string" || Wv.indexOf(r) === -1 && !jv.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Hv(t, r);
    return n !== "" && !Vs(t) && t.indexOf("-") !== -1 && Ql[t] === void 0 && (Ql[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Uv, "ms-").replace(Yv, function(a, o) {
      return o.toUpperCase();
    }) + "?")), n;
  };
}
var _d = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Fn(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(_d);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return bt = {
          name: r.name,
          styles: r.styles,
          next: bt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            bt = {
              name: n.name,
              styles: n.styles,
              next: bt
            }, n = n.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return qv(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = bt, i = r(e);
        return bt = o, Fn(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(wd, function(u, d, f) {
          var m = "animation" + s.length;
          return s.push("const " + m + " = keyframes`" + f.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + m + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function qv(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      n += Fn(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += o + "{" + t[i] + "}" : Jl(i) && (n += ci(o) + ":" + so(o, i) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(_d);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Jl(i[s]) && (n += ci(o) + ":" + so(o, i[s]) + ";");
        else {
          var l = Fn(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              n += ci(o) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(Dv), n += o + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var ec = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ed;
process.env.NODE_ENV !== "production" && (Ed = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var bt, Kr = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var a = !0, o = "";
  bt = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (a = !1, o += Fn(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Xl), o += i[0]);
  for (var s = 1; s < t.length; s++)
    o += Fn(n, r, t[s]), a && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Xl), o += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (o = o.replace(Ed, function(f) {
    return l = f, "";
  })), ec.lastIndex = 0;
  for (var c = "", u; (u = ec.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = Fv(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: o,
    map: l,
    next: bt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: o,
    next: bt
  };
}, Gv = function(t) {
  return t();
}, kd = qe["useInsertionEffect"] ? qe["useInsertionEffect"] : !1, Fs = kd || Gv, tc = kd || Es, Zv = {}.hasOwnProperty, $s = /* @__PURE__ */ dt(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Mv({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && ($s.displayName = "EmotionCacheContext");
$s.Provider;
var Po = function(t) {
  return /* @__PURE__ */ ks(function(r, n) {
    var a = le($s);
    return t(r, a, n);
  });
}, cr = /* @__PURE__ */ dt({});
process.env.NODE_ENV !== "production" && (cr.displayName = "EmotionThemeContext");
var Kv = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return io({}, t, r);
}, Xv = /* @__PURE__ */ Yl(function(e) {
  return Yl(function(t) {
    return Kv(e, t);
  });
}), Jv = function(t) {
  var r = le(cr);
  return t.theme !== r && (r = Xv(r)(t.theme)), /* @__PURE__ */ Lt(cr.Provider, {
    value: r
  }, t.children);
}, rc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", nc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Qv = function(t) {
  var r = t.cache, n = t.serialized, a = t.isStringTag;
  return To(r, n, a), Fs(function() {
    return Ao(r, n, a);
  }), null;
}, eh = /* @__PURE__ */ Po(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var a = e[rc], o = [n], i = "";
  typeof e.className == "string" ? i = Ns(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var s = Kr(o, void 0, le(cr));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[nc];
    l && (s = Kr([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    Zv.call(e, u) && u !== "css" && u !== rc && (process.env.NODE_ENV === "production" || u !== nc) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ Lt(xo, null, /* @__PURE__ */ Lt(Qv, {
    cache: t,
    serialized: s,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ Lt(a, c));
});
process.env.NODE_ENV !== "production" && (eh.displayName = "EmotionCssPropInternal");
var th = {
  name: "@emotion/react",
  version: "11.10.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.18.5",
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.5",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, ac = !1, ea = /* @__PURE__ */ Po(function(e, t) {
  process.env.NODE_ENV !== "production" && !ac && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), ac = !0);
  var r = e.styles, n = Kr([r], void 0, le(cr)), a = Fe();
  return tc(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + o + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", o), i.hydrate([l])), a.current = [i, s], function() {
      i.flush();
    };
  }, [t]), tc(function() {
    var o = a.current, i = o[0], s = o[1];
    if (s) {
      o[1] = !1;
      return;
    }
    if (n.next !== void 0 && Ao(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ea.displayName = "EmotionGlobal");
function rh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Kr(t);
}
var nh = function() {
  var t = rh.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ah = function e(t) {
  for (var r = t.length, n = 0, a = ""; n < r; n++) {
    var o = t[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            i = e(o);
          else {
            process.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var s in o)
              o[s] && s && (i && (i += " "), i += s);
          }
          break;
        }
        default:
          i = o;
      }
      i && (a && (a += " "), a += i);
    }
  }
  return a;
};
function oh(e, t, r) {
  var n = [], a = Ns(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var ih = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Fs(function() {
    for (var a = 0; a < n.length; a++)
      Ao(r, n[a], !1);
  }), null;
}, sh = /* @__PURE__ */ Po(function(e, t) {
  var r = !1, n = [], a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = Kr(u, t.registered);
    return n.push(f), To(t, f, !1), t.key + "-" + f.name;
  }, o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return oh(t.registered, a, ah(u));
  }, i = {
    css: a,
    cx: o,
    theme: le(cr)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ Lt(xo, null, /* @__PURE__ */ Lt(ih, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (sh.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var oc = !0, lh = typeof jest < "u" || typeof vi < "u";
  if (oc && !lh) {
    var ic = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : oc ? window : global
    ), sc = "__EMOTION_REACT_" + th.version.split(".")[0] + "__";
    ic[sc] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ic[sc] = !0;
  }
}
function ch(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function uh(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function dh(e, t, r, n) {
  const a = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < a.length && e; n += 1)
    e = e[a[n]];
  return e === void 0 ? r : e;
}
var fh = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, a, o, i) => {
    if (typeof n > "u")
      return e(n, a, o);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(a))
      return s.get(a);
    const l = e(n, a, o, i);
    return s.set(a, l), l;
  };
}, Td = fh(dh);
function Ad(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const a = e[n];
    t(a, n, e) && (r[n] = a);
  }), r;
}
var Pd = (e) => Ad(e, (t) => t != null);
function Rd(e, ...t) {
  return ch(e) ? e(...t) : e;
}
function ph(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, a = dt(void 0);
  a.displayName = n;
  function o() {
    var i;
    const s = le(a);
    if (!s && t) {
      const l = new Error(r);
      throw l.name = "ContextError", (i = Error.captureStackTrace) == null || i.call(Error, l, o), l;
    }
    return s;
  }
  return [
    a.Provider,
    o,
    a
  ];
}
var mh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vh = /* @__PURE__ */ yd(
  function(e) {
    return mh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hh = vh, gh = function(t) {
  return t !== "theme";
}, lc = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? hh : gh;
}, cc = function(t, r, n) {
  var a;
  if (r) {
    var o = r.shouldForwardProp;
    a = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof a != "function" && n && (a = t.__emotion_forwardProp), a;
}, uc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, yh = function(t) {
  var r = t.cache, n = t.serialized, a = t.isStringTag;
  return To(r, n, a), Fs(function() {
    return Ao(r, n, a);
  }), null;
}, bh = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, a = n && t.__emotion_base || t, o, i;
  r !== void 0 && (o = r.label, i = r.target);
  var s = cc(t, r, n), l = s || lc(a), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(uc), d.push(u[0][0]);
      for (var f = u.length, m = 1; m < f; m++)
        process.env.NODE_ENV !== "production" && u[0][m] === void 0 && console.error(uc), d.push(u[m], u[0][m]);
    }
    var p = Po(function(h, x, C) {
      var _ = c && h.as || a, k = "", T = [], w = h;
      if (h.theme == null) {
        w = {};
        for (var I in h)
          w[I] = h[I];
        w.theme = le(cr);
      }
      typeof h.className == "string" ? k = Ns(x.registered, T, h.className) : h.className != null && (k = h.className + " ");
      var R = Kr(d.concat(T), x.registered, w);
      k += x.key + "-" + R.name, i !== void 0 && (k += " " + i);
      var z = c && s === void 0 ? lc(_) : l, V = {};
      for (var Y in h)
        c && Y === "as" || // $FlowFixMe
        z(Y) && (V[Y] = h[Y]);
      return V.className = k, V.ref = C, /* @__PURE__ */ Lt(xo, null, /* @__PURE__ */ Lt(yh, {
        cache: x,
        serialized: R,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ Lt(_, V));
    });
    return p.displayName = o !== void 0 ? o : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = a, p.__emotion_styles = d, p.__emotion_forwardProp = s, Object.defineProperty(p, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), p.withComponent = function(h, x) {
      return e(h, io({}, r, x, {
        shouldForwardProp: cc(p, x, !0)
      })).apply(void 0, d);
    }, p;
  };
}, Sh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], qi = bh.bind();
Sh.forEach(function(e) {
  qi[e] = qi(e);
});
function ie(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
  }
  function a(...u) {
    n();
    for (const d of u)
      t[d] = l(d);
    return ie(e, t);
  }
  function o(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return ie(e, t);
  }
  function i() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]));
  }
  function s() {
    return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]));
  }
  function l(u) {
    const m = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: m,
      selector: `.${m}`,
      toString: () => u
    };
  }
  return {
    parts: a,
    toPart: l,
    extend: o,
    selectors: i,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var xh = ie("accordion").parts("root", "container", "button", "panel").extend("icon"), Ch = ie("alert").parts("title", "description", "container").extend("icon", "spinner"), wh = ie("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), _h = ie("breadcrumb").parts("link", "item", "container").extend("separator");
ie("button").parts();
var Eh = ie("checkbox").parts("control", "icon", "container").extend("label");
ie("progress").parts("track", "filledTrack").extend("label");
var kh = ie("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Th = ie("editable").parts("preview", "input", "textarea"), Ah = ie("form").parts("container", "requiredIndicator", "helperText"), Ph = ie("formError").parts("text", "icon"), Rh = ie("input").parts("addon", "field", "element"), Mh = ie("list").parts("container", "item", "icon"), Lh = ie("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), Ih = ie("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Oh = ie("numberinput").parts("root", "field", "stepperGroup", "stepper");
ie("pininput").parts("field");
var zh = ie("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), Nh = ie("progress").parts("label", "filledTrack", "track"), Vh = ie("radio").parts("container", "control", "label"), Fh = ie("select").parts("field", "icon"), $h = ie("slider").parts("container", "track", "thumb", "filledTrack", "mark"), Dh = ie("stat").parts("container", "label", "helpText", "number", "icon"), Bh = ie("switch").parts("container", "track", "thumb"), jh = ie("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"), Wh = ie("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"), Hh = ie("tag").parts("container", "label", "closeButton"), Uh = ie("card").parts("container", "header", "body", "footer");
function Sr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class Yh extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Sn = Yh;
function Ds(e) {
  if (typeof e != "string")
    throw new Sn(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = e1.test(e) ? Zh(e) : e;
  const r = Kh.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt($n(s, 2), 16)), parseInt($n(i[3] || "f", 2), 16) / 255];
  }
  const n = Xh.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const a = Jh.exec(t);
  if (a) {
    const i = Array.from(a).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const o = Qh.exec(t);
  if (o) {
    const [i, s, l, c] = Array.from(o).slice(1).map(parseFloat);
    if (Sr(0, 100, s) !== s)
      throw new Sn(e);
    if (Sr(0, 100, l) !== l)
      throw new Sn(e);
    return [...t1(i, s, l), c || 1];
  }
  throw new Sn(e);
}
function qh(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const dc = (e) => parseInt(e.replace(/_/g, ""), 36), Gh = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = dc(t.substring(0, 3)), n = dc(t.substring(3)).toString(16);
  let a = "";
  for (let o = 0; o < 6 - n.length; o++)
    a += "0";
  return e[r] = `${a}${n}`, e;
}, {});
function Zh(e) {
  const t = e.toLowerCase().trim(), r = Gh[qh(t)];
  if (!r)
    throw new Sn(e);
  return `#${r}`;
}
const $n = (e, t) => Array.from(Array(t)).map(() => e).join(""), Kh = new RegExp(`^#${$n("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Xh = new RegExp(`^#${$n("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Jh = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${$n(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Qh = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, e1 = /^[a-z]+$/i, fc = (e) => Math.round(e * 255), t1 = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(fc);
  const a = (e % 360 + 360) % 360 / 60, o = (1 - Math.abs(2 * n - 1)) * (t / 100), i = o * (1 - Math.abs(a % 2 - 1));
  let s = 0, l = 0, c = 0;
  a >= 0 && a < 1 ? (s = o, l = i) : a >= 1 && a < 2 ? (s = i, l = o) : a >= 2 && a < 3 ? (l = o, c = i) : a >= 3 && a < 4 ? (l = i, c = o) : a >= 4 && a < 5 ? (s = i, c = o) : a >= 5 && a < 6 && (s = o, c = i);
  const u = n - o / 2, d = s + u, f = l + u, m = c + u;
  return [d, f, m].map(fc);
};
function r1(e, t, r, n) {
  return `rgba(${Sr(0, 255, e).toFixed()}, ${Sr(0, 255, t).toFixed()}, ${Sr(0, 255, r).toFixed()}, ${parseFloat(Sr(0, 1, n).toFixed(3))})`;
}
function n1(e, t) {
  const [r, n, a, o] = Ds(e);
  return r1(r, n, a, o - t);
}
function a1(e) {
  const [t, r, n, a] = Ds(e);
  let o = (i) => {
    const s = Sr(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${o(t)}${o(r)}${o(n)}${a < 1 ? o(Math.round(a * 255)) : ""}`;
}
function o1(e, t, r, n, a) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : a;
  return e === a ? r : e;
}
var i1 = (e) => Object.keys(e).length === 0, Be = (e, t, r) => {
  const n = o1(e, `colors.${t}`, t);
  try {
    return a1(n), n;
  } catch {
    return r ?? "#000000";
  }
}, s1 = (e) => {
  const [t, r, n] = Ds(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, l1 = (e) => (t) => {
  const r = Be(t, e);
  return s1(r) < 128 ? "dark" : "light";
}, c1 = (e) => (t) => l1(e)(t) === "dark", Xr = (e, t) => (r) => {
  const n = Be(r, e);
  return n1(n, 1 - t);
};
function pc(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var u1 = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function d1(e) {
  const t = u1();
  return !e || i1(e) ? t : e.string && e.colors ? p1(e.string, e.colors) : e.string && !e.colors ? f1(e.string) : e.colors && !e.string ? m1(e.colors) : t;
}
function f1(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const a = t >> n * 8 & 255;
    r += `00${a.toString(16)}`.substr(-2);
  }
  return r;
}
function p1(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function m1(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function B(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Bs(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function v1(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Md(e) {
  return v1(e) && e.reference ? e.reference : String(e);
}
var Ro = (e, ...t) => t.map(Md).join(` ${e} `).replace(/calc/g, ""), mc = (...e) => `calc(${Ro("+", ...e)})`, vc = (...e) => `calc(${Ro("-", ...e)})`, Gi = (...e) => `calc(${Ro("*", ...e)})`, hc = (...e) => `calc(${Ro("/", ...e)})`, gc = (e) => {
  const t = Md(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Gi(t, -1);
}, Ht = Object.assign((e) => ({
  add: (...t) => Ht(mc(e, ...t)),
  subtract: (...t) => Ht(vc(e, ...t)),
  multiply: (...t) => Ht(Gi(e, ...t)),
  divide: (...t) => Ht(hc(e, ...t)),
  negate: () => Ht(gc(e)),
  toString: () => e.toString()
}), {
  add: mc,
  subtract: vc,
  multiply: Gi,
  divide: hc,
  negate: gc
});
function h1(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function g1(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Ld(e) {
  const t = g1(e.toString());
  return t.includes("\\.") ? e : h1(e) ? t.replace(".", "\\.") : e;
}
function y1(e, t = "") {
  return [t, Ld(e)].filter(Boolean).join("-");
}
function b1(e, t) {
  return `var(${Ld(e)}${t ? `, ${t}` : ""})`;
}
function S1(e, t = "") {
  return `--${y1(e, t)}`;
}
function Re(e, t) {
  const r = S1(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: b1(r, x1(t == null ? void 0 : t.fallback))
  };
}
function x1(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { definePartsStyle: C1, defineMultiStyleConfig: w1 } = ve(xh.keys), _1 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, E1 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, k1 = {
  pt: "2",
  px: "4",
  pb: "5"
}, T1 = {
  fontSize: "1.25em"
}, A1 = C1({
  container: _1,
  button: E1,
  panel: k1,
  icon: T1
}), P1 = w1({ baseStyle: A1 }), { definePartsStyle: ta, defineMultiStyleConfig: R1 } = ve(Ch.keys), at = ce("alert-fg"), Yt = ce("alert-bg"), M1 = ta({
  container: {
    bg: Yt.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: at.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: at.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function js(e) {
  const { theme: t, colorScheme: r } = e, n = Xr(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var L1 = ta((e) => {
  const { colorScheme: t } = e, r = js(e);
  return {
    container: {
      [at.variable]: `colors.${t}.500`,
      [Yt.variable]: r.light,
      _dark: {
        [at.variable]: `colors.${t}.200`,
        [Yt.variable]: r.dark
      }
    }
  };
}), I1 = ta((e) => {
  const { colorScheme: t } = e, r = js(e);
  return {
    container: {
      [at.variable]: `colors.${t}.500`,
      [Yt.variable]: r.light,
      _dark: {
        [at.variable]: `colors.${t}.200`,
        [Yt.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: at.reference
    }
  };
}), O1 = ta((e) => {
  const { colorScheme: t } = e, r = js(e);
  return {
    container: {
      [at.variable]: `colors.${t}.500`,
      [Yt.variable]: r.light,
      _dark: {
        [at.variable]: `colors.${t}.200`,
        [Yt.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: at.reference
    }
  };
}), z1 = ta((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [at.variable]: "colors.white",
      [Yt.variable]: `colors.${t}.500`,
      _dark: {
        [at.variable]: "colors.gray.900",
        [Yt.variable]: `colors.${t}.200`
      },
      color: at.reference
    }
  };
}), N1 = {
  subtle: L1,
  "left-accent": I1,
  "top-accent": O1,
  solid: z1
}, V1 = R1({
  baseStyle: M1,
  variants: N1,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), Id = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, F1 = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, $1 = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, D1 = {
  ...Id,
  ...F1,
  container: $1
}, Od = D1, B1 = (e) => typeof e == "function";
function je(e, ...t) {
  return B1(e) ? e(...t) : e;
}
var { definePartsStyle: zd, defineMultiStyleConfig: j1 } = ve(wh.keys), Dr = ce("avatar-border-color"), ui = ce("avatar-bg"), W1 = {
  borderRadius: "full",
  border: "0.2em solid",
  [Dr.variable]: "white",
  _dark: {
    [Dr.variable]: "colors.gray.800"
  },
  borderColor: Dr.reference
}, H1 = {
  [ui.variable]: "colors.gray.200",
  _dark: {
    [ui.variable]: "colors.whiteAlpha.400"
  },
  bgColor: ui.reference
}, yc = ce("avatar-background"), U1 = (e) => {
  const { name: t, theme: r } = e, n = t ? d1({ string: t }) : "colors.gray.400", a = c1(n)(r);
  let o = "white";
  return a || (o = "gray.800"), {
    bg: yc.reference,
    "&:not([data-loaded])": {
      [yc.variable]: n
    },
    color: o,
    [Dr.variable]: "colors.white",
    _dark: {
      [Dr.variable]: "colors.gray.800"
    },
    borderColor: Dr.reference,
    verticalAlign: "top"
  };
}, Y1 = zd((e) => ({
  badge: je(W1, e),
  excessLabel: je(H1, e),
  container: je(U1, e)
}));
function tr(e) {
  const t = e !== "100%" ? Od[e] : void 0;
  return zd({
    container: {
      width: e,
      height: e,
      fontSize: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      width: e,
      height: e
    },
    label: {
      fontSize: `calc(${t ?? e} / 2.5)`,
      lineHeight: e !== "100%" ? t ?? e : void 0
    }
  });
}
var q1 = {
  "2xs": tr(4),
  xs: tr(6),
  sm: tr(8),
  md: tr(12),
  lg: tr(16),
  xl: tr(24),
  "2xl": tr(32),
  full: tr("100%")
}, G1 = j1({
  baseStyle: Y1,
  sizes: q1,
  defaultProps: { size: "md" }
}), Z1 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
}, Br = ce("badge-bg"), Mt = ce("badge-color"), K1 = (e) => {
  const { colorScheme: t, theme: r } = e, n = Xr(`${t}.500`, 0.6)(r);
  return {
    [Br.variable]: `colors.${t}.500`,
    [Mt.variable]: "colors.white",
    _dark: {
      [Br.variable]: n,
      [Mt.variable]: "colors.whiteAlpha.800"
    },
    bg: Br.reference,
    color: Mt.reference
  };
}, X1 = (e) => {
  const { colorScheme: t, theme: r } = e, n = Xr(`${t}.200`, 0.16)(r);
  return {
    [Br.variable]: `colors.${t}.100`,
    [Mt.variable]: `colors.${t}.800`,
    _dark: {
      [Br.variable]: n,
      [Mt.variable]: `colors.${t}.200`
    },
    bg: Br.reference,
    color: Mt.reference
  };
}, J1 = (e) => {
  const { colorScheme: t, theme: r } = e, n = Xr(`${t}.200`, 0.8)(r);
  return {
    [Mt.variable]: `colors.${t}.500`,
    _dark: {
      [Mt.variable]: n
    },
    color: Mt.reference,
    boxShadow: `inset 0 0 0px 1px ${Mt.reference}`
  };
}, Q1 = {
  solid: K1,
  subtle: X1,
  outline: J1
}, wn = {
  baseStyle: Z1,
  variants: Q1,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: eg, definePartsStyle: tg } = ve(_h.keys), rg = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, ng = tg({
  link: rg
}), ag = eg({
  baseStyle: ng
}), og = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, Nd = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: B("inherit", "whiteAlpha.900")(e),
      _hover: {
        bg: B("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: B("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Xr(`${t}.200`, 0.12)(r), a = Xr(`${t}.200`, 0.24)(r);
  return {
    color: B(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: B(`${t}.50`, n)(e)
    },
    _active: {
      bg: B(`${t}.100`, a)(e)
    }
  };
}, ig = (e) => {
  const { colorScheme: t } = e, r = B("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...je(Nd, e)
  };
}, sg = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, lg = (e) => {
  const { colorScheme: t } = e;
  if (t === "gray") {
    const s = B("gray.100", "whiteAlpha.200")(e);
    return {
      bg: s,
      _hover: {
        bg: B("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: s
        }
      },
      _active: { bg: B("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${t}.500`,
    color: n = "white",
    hoverBg: a = `${t}.600`,
    activeBg: o = `${t}.700`
  } = sg[t] ?? {}, i = B(r, `${t}.200`)(e);
  return {
    bg: i,
    color: B(n, "gray.800")(e),
    _hover: {
      bg: B(a, `${t}.300`)(e),
      _disabled: {
        bg: i
      }
    },
    _active: { bg: B(o, `${t}.400`)(e) }
  };
}, cg = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: B(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: B(`${t}.700`, `${t}.500`)(e)
    }
  };
}, ug = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, dg = {
  ghost: Nd,
  outline: ig,
  solid: lg,
  link: cg,
  unstyled: ug
}, fg = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, pg = {
  baseStyle: og,
  variants: dg,
  sizes: fg,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Cr, defineMultiStyleConfig: mg } = ve(Uh.keys), lo = ce("card-bg"), jr = ce("card-padding"), vg = Cr({
  container: {
    [lo.variable]: "chakra-body-bg",
    backgroundColor: lo.reference,
    color: "chakra-body-text"
  },
  body: {
    padding: jr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: jr.reference
  },
  footer: {
    padding: jr.reference
  }
}), hg = {
  sm: Cr({
    container: {
      borderRadius: "base",
      [jr.variable]: "space.3"
    }
  }),
  md: Cr({
    container: {
      borderRadius: "md",
      [jr.variable]: "space.5"
    }
  }),
  lg: Cr({
    container: {
      borderRadius: "xl",
      [jr.variable]: "space.7"
    }
  })
}, gg = {
  elevated: Cr({
    container: {
      boxShadow: "base",
      _dark: {
        [lo.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Cr({
    container: {
      borderWidth: "1px",
      borderColor: "chakra-border-color"
    }
  }),
  filled: Cr({
    container: {
      [lo.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: { padding: 0 },
    header: { padding: 0 },
    footer: { padding: 0 }
  }
}, yg = mg({
  baseStyle: vg,
  variants: gg,
  sizes: hg,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), { definePartsStyle: Ga, defineMultiStyleConfig: bg } = ve(Eh.keys), _n = ce("checkbox-size"), Sg = (e) => {
  const { colorScheme: t } = e;
  return {
    w: _n.reference,
    h: _n.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: B(`${t}.500`, `${t}.200`)(e),
      borderColor: B(`${t}.500`, `${t}.200`)(e),
      color: B("white", "gray.900")(e),
      _hover: {
        bg: B(`${t}.600`, `${t}.300`)(e),
        borderColor: B(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: B("gray.200", "transparent")(e),
        bg: B("gray.200", "whiteAlpha.300")(e),
        color: B("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: B(`${t}.500`, `${t}.200`)(e),
      borderColor: B(`${t}.500`, `${t}.200`)(e),
      color: B("white", "gray.900")(e)
    },
    _disabled: {
      bg: B("gray.100", "whiteAlpha.100")(e),
      borderColor: B("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: B("red.500", "red.300")(e)
    }
  };
}, xg = {
  _disabled: { cursor: "not-allowed" }
}, Cg = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, wg = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, _g = Ga((e) => ({
  icon: wg,
  container: xg,
  control: je(Sg, e),
  label: Cg
})), Eg = {
  sm: Ga({
    control: { [_n.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Ga({
    control: { [_n.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Ga({
    control: { [_n.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, co = bg({
  baseStyle: _g,
  sizes: Eg,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), En = Re("close-button-size"), vn = Re("close-button-bg"), kg = {
  w: [En.reference],
  h: [En.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [vn.variable]: "colors.blackAlpha.100",
    _dark: {
      [vn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [vn.variable]: "colors.blackAlpha.200",
    _dark: {
      [vn.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: vn.reference
}, Tg = {
  lg: {
    [En.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [En.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [En.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Ag = {
  baseStyle: kg,
  sizes: Tg,
  defaultProps: {
    size: "md"
  }
}, { variants: Pg, defaultProps: Rg } = wn, Mg = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
}, Lg = {
  baseStyle: Mg,
  variants: Pg,
  defaultProps: Rg
}, Ig = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Og = {
  baseStyle: Ig
}, zg = {
  opacity: 0.6,
  borderColor: "inherit"
}, Ng = {
  borderStyle: "solid"
}, Vg = {
  borderStyle: "dashed"
}, Fg = {
  solid: Ng,
  dashed: Vg
}, $g = {
  baseStyle: zg,
  variants: Fg,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Zi, defineMultiStyleConfig: Dg } = ve(kh.keys), di = ce("drawer-bg"), fi = ce("drawer-box-shadow");
function Or(e) {
  return Zi(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var Bg = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, jg = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, Wg = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [di.variable]: "colors.white",
    [fi.variable]: "shadows.lg",
    _dark: {
      [di.variable]: "colors.gray.700",
      [fi.variable]: "shadows.dark-lg"
    },
    bg: di.reference,
    boxShadow: fi.reference
  };
}, Hg = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Ug = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Yg = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, qg = {
  px: "6",
  py: "4"
}, Gg = Zi((e) => ({
  overlay: Bg,
  dialogContainer: jg,
  dialog: je(Wg, e),
  header: Hg,
  closeButton: Ug,
  body: Yg,
  footer: qg
})), Zg = {
  xs: Or("xs"),
  sm: Or("md"),
  md: Or("lg"),
  lg: Or("2xl"),
  xl: Or("4xl"),
  full: Or("full")
}, Kg = Dg({
  baseStyle: Gg,
  sizes: Zg,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: Xg, defineMultiStyleConfig: Jg } = ve(Th.keys), Qg = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, ey = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, ty = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, ry = Xg({
  preview: Qg,
  input: ey,
  textarea: ty
}), ny = Jg({
  baseStyle: ry
}), { definePartsStyle: ay, defineMultiStyleConfig: oy } = ve(Ah.keys), Wr = ce("form-control-color"), iy = {
  marginStart: "1",
  [Wr.variable]: "colors.red.500",
  _dark: {
    [Wr.variable]: "colors.red.300"
  },
  color: Wr.reference
}, sy = {
  mt: "2",
  [Wr.variable]: "colors.gray.600",
  _dark: {
    [Wr.variable]: "colors.whiteAlpha.600"
  },
  color: Wr.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, ly = ay({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: iy,
  helperText: sy
}), cy = oy({
  baseStyle: ly
}), { definePartsStyle: uy, defineMultiStyleConfig: dy } = ve(Ph.keys), Hr = ce("form-error-color"), fy = {
  [Hr.variable]: "colors.red.500",
  _dark: {
    [Hr.variable]: "colors.red.300"
  },
  color: Hr.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, py = {
  marginEnd: "0.5em",
  [Hr.variable]: "colors.red.500",
  _dark: {
    [Hr.variable]: "colors.red.300"
  },
  color: Hr.reference
}, my = uy({
  text: fy,
  icon: py
}), vy = dy({
  baseStyle: my
}), hy = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, gy = {
  baseStyle: hy
}, yy = {
  fontFamily: "heading",
  fontWeight: "bold"
}, by = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, Sy = {
  baseStyle: yy,
  sizes: by,
  defaultProps: {
    size: "xl"
  }
}, { definePartsStyle: Ut, defineMultiStyleConfig: xy } = ve(Rh.keys), Cy = Ut({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), rr = {
  lg: {
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  }
}, wy = {
  lg: Ut({
    field: rr.lg,
    addon: rr.lg
  }),
  md: Ut({
    field: rr.md,
    addon: rr.md
  }),
  sm: Ut({
    field: rr.sm,
    addon: rr.sm
  }),
  xs: Ut({
    field: rr.xs,
    addon: rr.xs
  })
};
function Ws(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || B("blue.500", "blue.300")(e),
    errorBorderColor: r || B("red.500", "red.300")(e)
  };
}
var _y = Ut((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ws(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: B("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Be(t, n),
        boxShadow: `0 0 0 1px ${Be(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Be(t, r),
        boxShadow: `0 0 0 1px ${Be(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: B("inherit", "whiteAlpha.50")(e),
      bg: B("gray.100", "whiteAlpha.300")(e)
    }
  };
}), Ey = Ut((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ws(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: B("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: B("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Be(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Be(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: B("gray.100", "whiteAlpha.50")(e)
    }
  };
}), ky = Ut((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ws(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Be(t, n),
        boxShadow: `0px 1px 0px 0px ${Be(t, n)}`
      },
      _focusVisible: {
        borderColor: Be(t, r),
        boxShadow: `0px 1px 0px 0px ${Be(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), Ty = Ut({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), Ay = {
  outline: _y,
  filled: Ey,
  flushed: ky,
  unstyled: Ty
}, re = xy({
  baseStyle: Cy,
  sizes: wy,
  variants: Ay,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), pi = ce("kbd-bg"), Py = {
  [pi.variable]: "colors.gray.100",
  _dark: {
    [pi.variable]: "colors.whiteAlpha.100"
  },
  bg: pi.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, Ry = {
  baseStyle: Py
}, My = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, Ly = {
  baseStyle: My
}, { defineMultiStyleConfig: Iy, definePartsStyle: Oy } = ve(Mh.keys), zy = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, Ny = Oy({
  icon: zy
}), Vy = Iy({
  baseStyle: Ny
}), { defineMultiStyleConfig: Fy, definePartsStyle: $y } = ve(Lh.keys), At = ce("menu-bg"), mi = ce("menu-shadow"), Dy = {
  [At.variable]: "#fff",
  [mi.variable]: "shadows.sm",
  _dark: {
    [At.variable]: "colors.gray.700",
    [mi.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: At.reference,
  boxShadow: mi.reference
}, By = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [At.variable]: "colors.gray.100",
    _dark: {
      [At.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [At.variable]: "colors.gray.200",
    _dark: {
      [At.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [At.variable]: "colors.gray.100",
    _dark: {
      [At.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: At.reference
}, jy = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, Wy = {
  opacity: 0.6
}, Hy = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, Uy = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, Yy = $y({
  button: Uy,
  list: Dy,
  item: By,
  groupTitle: jy,
  command: Wy,
  divider: Hy
}), qy = Fy({
  baseStyle: Yy
}), { defineMultiStyleConfig: Gy, definePartsStyle: Ki } = ve(Ih.keys), Zy = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Ky = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, Xy = (e) => {
  const { scrollBehavior: t } = e;
  return {
    borderRadius: "md",
    bg: B("white", "gray.700")(e),
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: B("lg", "dark-lg")(e)
  };
}, Jy = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Qy = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, eb = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, tb = {
  px: "6",
  py: "4"
}, rb = Ki((e) => ({
  overlay: Zy,
  dialogContainer: je(Ky, e),
  dialog: je(Xy, e),
  header: Jy,
  closeButton: Qy,
  body: je(eb, e),
  footer: tb
}));
function ht(e) {
  return Ki(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var nb = {
  xs: ht("xs"),
  sm: ht("sm"),
  md: ht("md"),
  lg: ht("lg"),
  xl: ht("xl"),
  "2xl": ht("2xl"),
  "3xl": ht("3xl"),
  "4xl": ht("4xl"),
  "5xl": ht("5xl"),
  "6xl": ht("6xl"),
  full: ht("full")
}, ab = Gy({
  baseStyle: rb,
  sizes: nb,
  defaultProps: { size: "md" }
}), ob = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, Vd = ob, { defineMultiStyleConfig: ib, definePartsStyle: Fd } = ve(Oh.keys), Hs = Re("number-input-stepper-width"), $d = Re("number-input-input-padding"), sb = Ht(Hs).add("0.5rem").toString(), hi = Re("number-input-bg"), gi = Re("number-input-color"), yi = Re("number-input-border-color"), lb = {
  [Hs.variable]: "sizes.6",
  [$d.variable]: sb
}, cb = (e) => {
  var t;
  return ((t = je(re.baseStyle, e)) == null ? void 0 : t.field) ?? {};
}, ub = {
  width: Hs.reference
}, db = {
  borderStart: "1px solid",
  borderStartColor: yi.reference,
  color: gi.reference,
  bg: hi.reference,
  [gi.variable]: "colors.chakra-body-text",
  [yi.variable]: "colors.chakra-border-color",
  _dark: {
    [gi.variable]: "colors.whiteAlpha.800",
    [yi.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [hi.variable]: "colors.gray.200",
    _dark: {
      [hi.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, fb = Fd((e) => ({
  root: lb,
  field: je(cb, e) ?? {},
  stepperGroup: ub,
  stepper: db
}));
function Ra(e) {
  var t, r;
  const n = (t = re.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, o = ((r = n.field) == null ? void 0 : r.fontSize) ?? "md", i = Vd.fontSizes[o];
  return Fd({
    field: {
      ...n.field,
      paddingInlineEnd: $d.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Ht(i).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: a[e]
      },
      _last: {
        borderBottomEndRadius: a[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var pb = {
  xs: Ra("xs"),
  sm: Ra("sm"),
  md: Ra("md"),
  lg: Ra("lg")
}, mb = ib({
  baseStyle: fb,
  sizes: pb,
  variants: re.variants,
  defaultProps: re.defaultProps
}), bc, vb = {
  ...(bc = re.baseStyle) == null ? void 0 : bc.field,
  textAlign: "center"
}, hb = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, Sc, gb = {
  outline: (e) => {
    var t, r;
    return ((r = je((t = re.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) ?? {};
  },
  flushed: (e) => {
    var t, r;
    return ((r = je((t = re.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) ?? {};
  },
  filled: (e) => {
    var t, r;
    return ((r = je((t = re.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) ?? {};
  },
  unstyled: ((Sc = re.variants) == null ? void 0 : Sc.unstyled.field) ?? {}
}, yb = {
  baseStyle: vb,
  sizes: hb,
  variants: gb,
  defaultProps: re.defaultProps
}, { defineMultiStyleConfig: bb, definePartsStyle: Sb } = ve(zh.keys), Ma = Re("popper-bg"), xb = Re("popper-arrow-bg"), xc = Re("popper-arrow-shadow-color"), Cb = { zIndex: 10 }, wb = {
  [Ma.variable]: "colors.white",
  bg: Ma.reference,
  [xb.variable]: Ma.reference,
  [xc.variable]: "colors.gray.200",
  _dark: {
    [Ma.variable]: "colors.gray.700",
    [xc.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, _b = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, Eb = {
  px: 3,
  py: 2
}, kb = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Tb = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, Ab = Sb({
  popper: Cb,
  content: wb,
  header: _b,
  body: Eb,
  footer: kb,
  closeButton: Tb
}), Pb = bb({
  baseStyle: Ab
}), { defineMultiStyleConfig: Rb, definePartsStyle: xn } = ve(Nh.keys), Mb = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: a } = e, o = B(pc(), pc("1rem", "rgba(0,0,0,0.1)"))(e), i = B(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Be(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && a && o,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, Lb = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Ib = (e) => ({
  bg: B("gray.100", "whiteAlpha.300")(e)
}), Ob = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Mb(e)
}), zb = xn((e) => ({
  label: Lb,
  filledTrack: Ob(e),
  track: Ib(e)
})), Nb = {
  xs: xn({
    track: { h: "1" }
  }),
  sm: xn({
    track: { h: "2" }
  }),
  md: xn({
    track: { h: "3" }
  }),
  lg: xn({
    track: { h: "4" }
  })
}, Vb = Rb({
  sizes: Nb,
  baseStyle: zb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Fb, definePartsStyle: Za } = ve(Vh.keys), $b = (e) => {
  var t;
  const r = (t = je(co.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, Db = Za((e) => {
  var t, r, n, a;
  return {
    label: (r = (t = co).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (a = (n = co).baseStyle) == null ? void 0 : a.call(n, e).container,
    control: $b(e)
  };
}), Bb = {
  md: Za({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Za({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Za({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, jb = Fb({
  baseStyle: Db,
  sizes: Bb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Wb, definePartsStyle: Hb } = ve(Fh.keys), La = ce("select-bg"), Cc, Ub = {
  ...(Cc = re.baseStyle) == null ? void 0 : Cc.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: La.reference,
  [La.variable]: "colors.white",
  _dark: {
    [La.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: La.reference
  }
}, Yb = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, qb = Hb({
  field: Ub,
  icon: Yb
}), Ia = {
  paddingInlineEnd: "8"
}, wc, _c, Ec, kc, Tc, Ac, Pc, Rc, Gb = {
  lg: {
    ...(wc = re.sizes) == null ? void 0 : wc.lg,
    field: {
      ...(_c = re.sizes) == null ? void 0 : _c.lg.field,
      ...Ia
    }
  },
  md: {
    ...(Ec = re.sizes) == null ? void 0 : Ec.md,
    field: {
      ...(kc = re.sizes) == null ? void 0 : kc.md.field,
      ...Ia
    }
  },
  sm: {
    ...(Tc = re.sizes) == null ? void 0 : Tc.sm,
    field: {
      ...(Ac = re.sizes) == null ? void 0 : Ac.sm.field,
      ...Ia
    }
  },
  xs: {
    ...(Pc = re.sizes) == null ? void 0 : Pc.xs,
    field: {
      ...(Rc = re.sizes) == null ? void 0 : Rc.xs.field,
      ...Ia
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Zb = Wb({
  baseStyle: qb,
  sizes: Gb,
  variants: re.variants,
  defaultProps: re.defaultProps
}), bi = ce("skeleton-start-color"), Si = ce("skeleton-end-color"), Kb = {
  [bi.variable]: "colors.gray.100",
  [Si.variable]: "colors.gray.400",
  _dark: {
    [bi.variable]: "colors.gray.800",
    [Si.variable]: "colors.gray.600"
  },
  background: bi.reference,
  borderColor: Si.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, Xb = {
  baseStyle: Kb
}, xi = ce("skip-link-bg"), Jb = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [xi.variable]: "colors.white",
    _dark: {
      [xi.variable]: "colors.gray.700"
    },
    bg: xi.reference
  }
}, Qb = {
  baseStyle: Jb
}, { defineMultiStyleConfig: e2, definePartsStyle: Mo } = ve($h.keys), Dn = ce("slider-thumb-size"), Bn = ce("slider-track-size"), ir = ce("slider-bg"), t2 = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Bs({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, r2 = (e) => ({
  ...Bs({
    orientation: e.orientation,
    horizontal: { h: Bn.reference },
    vertical: { w: Bn.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [ir.variable]: "colors.gray.200",
  _dark: {
    [ir.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [ir.variable]: "colors.gray.300",
    _dark: {
      [ir.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: ir.reference
}), n2 = (e) => {
  const { orientation: t } = e;
  return {
    ...Bs({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Dn.reference,
    h: Dn.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, a2 = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [ir.variable]: `colors.${t}.500`,
    _dark: {
      [ir.variable]: `colors.${t}.200`
    },
    bg: ir.reference
  };
}, o2 = Mo((e) => ({
  container: t2(e),
  track: r2(e),
  thumb: n2(e),
  filledTrack: a2(e)
})), i2 = Mo({
  container: {
    [Dn.variable]: "sizes.4",
    [Bn.variable]: "sizes.1"
  }
}), s2 = Mo({
  container: {
    [Dn.variable]: "sizes.3.5",
    [Bn.variable]: "sizes.1"
  }
}), l2 = Mo({
  container: {
    [Dn.variable]: "sizes.2.5",
    [Bn.variable]: "sizes.0.5"
  }
}), c2 = {
  lg: i2,
  md: s2,
  sm: l2
}, u2 = e2({
  baseStyle: o2,
  sizes: c2,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), yr = Re("spinner-size"), d2 = {
  width: [yr.reference],
  height: [yr.reference]
}, f2 = {
  xs: {
    [yr.variable]: "sizes.3"
  },
  sm: {
    [yr.variable]: "sizes.4"
  },
  md: {
    [yr.variable]: "sizes.6"
  },
  lg: {
    [yr.variable]: "sizes.8"
  },
  xl: {
    [yr.variable]: "sizes.12"
  }
}, p2 = {
  baseStyle: d2,
  sizes: f2,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: m2, definePartsStyle: Dd } = ve(Dh.keys), v2 = {
  fontWeight: "medium"
}, h2 = {
  opacity: 0.8,
  marginBottom: "2"
}, g2 = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, y2 = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, b2 = Dd({
  container: {},
  label: v2,
  helpText: h2,
  number: g2,
  icon: y2
}), S2 = {
  md: Dd({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, x2 = m2({
  baseStyle: b2,
  sizes: S2,
  defaultProps: {
    size: "md"
  }
}), { defineMultiStyleConfig: C2, definePartsStyle: Ka } = ve(Bh.keys), kn = Re("switch-track-width"), wr = Re("switch-track-height"), Ci = Re("switch-track-diff"), w2 = Ht.subtract(kn, wr), Xi = Re("switch-thumb-x"), hn = Re("switch-bg"), _2 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [kn.reference],
    height: [wr.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [hn.variable]: "colors.gray.300",
    _dark: {
      [hn.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [hn.variable]: `colors.${t}.500`,
      _dark: {
        [hn.variable]: `colors.${t}.200`
      }
    },
    bg: hn.reference
  };
}, E2 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [wr.reference],
  height: [wr.reference],
  _checked: {
    transform: `translateX(${Xi.reference})`
  }
}, k2 = Ka((e) => ({
  container: {
    [Ci.variable]: w2,
    [Xi.variable]: Ci.reference,
    _rtl: {
      [Xi.variable]: Ht(Ci).negate().toString()
    }
  },
  track: _2(e),
  thumb: E2
})), T2 = {
  sm: Ka({
    container: {
      [kn.variable]: "1.375rem",
      [wr.variable]: "sizes.3"
    }
  }),
  md: Ka({
    container: {
      [kn.variable]: "1.875rem",
      [wr.variable]: "sizes.4"
    }
  }),
  lg: Ka({
    container: {
      [kn.variable]: "2.875rem",
      [wr.variable]: "sizes.6"
    }
  })
}, A2 = C2({
  baseStyle: k2,
  sizes: T2,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: P2, definePartsStyle: Ur } = ve(jh.keys), R2 = Ur({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), uo = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, M2 = Ur((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: B("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...uo
    },
    td: {
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...uo
    },
    caption: {
      color: B("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), L2 = Ur((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: B("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...uo
    },
    td: {
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...uo
    },
    caption: {
      color: B("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: B(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: B(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), I2 = {
  simple: M2,
  striped: L2,
  unstyled: {}
}, O2 = {
  sm: Ur({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: Ur({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: Ur({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, z2 = P2({
  baseStyle: R2,
  variants: I2,
  sizes: O2,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Ge = ce("tabs-color"), St = ce("tabs-bg"), Oa = ce("tabs-border-color"), { defineMultiStyleConfig: N2, definePartsStyle: Ot } = ve(Wh.keys), V2 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, F2 = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, $2 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, D2 = {
  p: 4
}, B2 = Ot((e) => ({
  root: V2(e),
  tab: F2(e),
  tablist: $2(e),
  tabpanel: D2
})), j2 = {
  sm: Ot({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ot({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ot({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, W2 = Ot((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", a = r === "vertical" ? "borderStart" : "borderBottom", o = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [a]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [a]: "2px solid",
      borderColor: "transparent",
      [o]: "-2px",
      _selected: {
        [Ge.variable]: `colors.${t}.600`,
        _dark: {
          [Ge.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [St.variable]: "colors.gray.200",
        _dark: {
          [St.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Ge.reference,
      bg: St.reference
    }
  };
}), H2 = Ot((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Oa.variable]: "transparent",
      _selected: {
        [Ge.variable]: `colors.${t}.600`,
        [Oa.variable]: "colors.white",
        _dark: {
          [Ge.variable]: `colors.${t}.300`,
          [Oa.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Oa.reference
      },
      color: Ge.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), U2 = Ot((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [St.variable]: "colors.gray.50",
      _dark: {
        [St.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [St.variable]: "colors.white",
        [Ge.variable]: `colors.${t}.600`,
        _dark: {
          [St.variable]: "colors.gray.800",
          [Ge.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Ge.reference,
      bg: St.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Y2 = Ot((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Be(r, `${t}.700`),
        bg: Be(r, `${t}.100`)
      }
    }
  };
}), q2 = Ot((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Ge.variable]: "colors.gray.600",
      _dark: {
        [Ge.variable]: "inherit"
      },
      _selected: {
        [Ge.variable]: "colors.white",
        [St.variable]: `colors.${t}.600`,
        _dark: {
          [Ge.variable]: "colors.gray.800",
          [St.variable]: `colors.${t}.300`
        }
      },
      color: Ge.reference,
      bg: St.reference
    }
  };
}), G2 = Ot({}), Z2 = {
  line: W2,
  enclosed: H2,
  "enclosed-colored": U2,
  "soft-rounded": Y2,
  "solid-rounded": q2,
  unstyled: G2
}, K2 = N2({
  baseStyle: B2,
  sizes: j2,
  variants: Z2,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: X2, definePartsStyle: _r } = ve(Hh.keys), J2 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
}, Q2 = {
  lineHeight: 1.2,
  overflow: "visible"
}, e5 = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, t5 = _r({
  container: J2,
  label: Q2,
  closeButton: e5
}), r5 = {
  sm: _r({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: _r({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: _r({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
}, n5 = {
  subtle: _r((e) => {
    var t;
    return {
      container: (t = wn.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: _r((e) => {
    var t;
    return {
      container: (t = wn.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: _r((e) => {
    var t;
    return {
      container: (t = wn.variants) == null ? void 0 : t.outline(e)
    };
  })
}, a5 = X2({
  variants: n5,
  baseStyle: t5,
  sizes: r5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), Mc, o5 = {
  ...(Mc = re.baseStyle) == null ? void 0 : Mc.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Lc, i5 = {
  outline: (e) => {
    var t;
    return ((t = re.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = re.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = re.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((Lc = re.variants) == null ? void 0 : Lc.unstyled.field) ?? {}
}, Ic, Oc, zc, Nc, s5 = {
  xs: ((Ic = re.sizes) == null ? void 0 : Ic.xs.field) ?? {},
  sm: ((Oc = re.sizes) == null ? void 0 : Oc.sm.field) ?? {},
  md: ((zc = re.sizes) == null ? void 0 : zc.md.field) ?? {},
  lg: ((Nc = re.sizes) == null ? void 0 : Nc.lg.field) ?? {}
}, l5 = {
  baseStyle: o5,
  sizes: s5,
  variants: i5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, za = Re("tooltip-bg"), wi = Re("tooltip-fg"), c5 = Re("popper-arrow-bg"), u5 = {
  bg: za.reference,
  color: wi.reference,
  [za.variable]: "colors.gray.700",
  [wi.variable]: "colors.whiteAlpha.900",
  _dark: {
    [za.variable]: "colors.gray.300",
    [wi.variable]: "colors.gray.900"
  },
  [c5.variable]: za.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, d5 = {
  baseStyle: u5
}, f5 = {
  Accordion: P1,
  Alert: V1,
  Avatar: G1,
  Badge: wn,
  Breadcrumb: ag,
  Button: pg,
  Checkbox: co,
  CloseButton: Ag,
  Code: Lg,
  Container: Og,
  Divider: $g,
  Drawer: Kg,
  Editable: ny,
  Form: cy,
  FormError: vy,
  FormLabel: gy,
  Heading: Sy,
  Input: re,
  Kbd: Ry,
  Link: Ly,
  List: Vy,
  Menu: qy,
  Modal: ab,
  NumberInput: mb,
  PinInput: yb,
  Popover: Pb,
  Progress: Vb,
  Radio: jb,
  Select: Zb,
  Skeleton: Xb,
  SkipLink: Qb,
  Slider: u2,
  Spinner: p2,
  Stat: x2,
  Switch: A2,
  Table: z2,
  Tabs: K2,
  Tag: a5,
  Textarea: l5,
  Tooltip: d5,
  Card: yg
}, p5 = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, m5 = p5, v5 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, h5 = v5, g5 = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, y5 = g5, b5 = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, S5 = b5, x5 = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, C5 = x5, w5 = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, _5 = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, E5 = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, k5 = {
  property: w5,
  easing: _5,
  duration: E5
}, T5 = k5, A5 = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, P5 = A5, R5 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, M5 = R5, L5 = {
  breakpoints: h5,
  zIndices: P5,
  radii: S5,
  blur: M5,
  colors: y5,
  ...Vd,
  sizes: Od,
  shadows: C5,
  space: Id,
  borders: m5,
  transition: T5
}, I5 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, O5 = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word"
    }
  }
}, z5 = "ltr", N5 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, V5 = {
  semanticTokens: I5,
  direction: z5,
  ...L5,
  components: f5,
  styles: O5,
  config: N5
}, F5 = typeof Element < "u", $5 = typeof Map == "function", D5 = typeof Set == "function", B5 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Xa(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, a;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Xa(e[n], t[n]))
          return !1;
      return !0;
    }
    var o;
    if ($5 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!Xa(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (D5 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (B5 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[n]))
        return !1;
    if (F5 && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && e.$$typeof) && !Xa(e[a[n]], t[a[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var j5 = function(t, r) {
  try {
    return Xa(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const W5 = /* @__PURE__ */ rd(j5);
function Bd() {
  const e = le(cr);
  if (!e)
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  return e;
}
function H5() {
  const e = Ps(), t = Bd();
  return { ...e, theme: t };
}
function U5(e, t, r) {
  if (t == null)
    return t;
  const n = (a) => {
    var o, i;
    return (i = (o = e.__breakpoints) == null ? void 0 : o.asArray) == null ? void 0 : i[a];
  };
  return n(t) ?? n(r) ?? r;
}
function Y5(e, t, r) {
  if (t == null)
    return t;
  const n = (a) => {
    var o, i;
    return (i = (o = e.__cssMap) == null ? void 0 : o[a]) == null ? void 0 : i.value;
  };
  return n(t) ?? n(r) ?? r;
}
function q5(e, t, r) {
  const n = Array.isArray(t) ? t : [t], a = Array.isArray(r) ? r : [r];
  return (o) => {
    const i = a.filter(Boolean), s = n.map((l, c) => {
      if (e === "breakpoints")
        return U5(o, l, i[c] ?? l);
      const u = `${e}.${l}`;
      return Y5(o, u, i[c] ?? l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
function G5(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, a = Te(() => Vm(r), [r]);
  return /* @__PURE__ */ y.createElement(Jv, {
    theme: a
  }, /* @__PURE__ */ y.createElement(Z5, {
    root: t
  }), n);
}
function Z5({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ y.createElement(ea, {
    styles: (r) => ({ [t]: r.__cssVars })
  });
}
ph({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function K5() {
  const { colorMode: e } = Ps();
  return /* @__PURE__ */ y.createElement(ea, {
    styles: (t) => {
      const r = Td(t, "styles.global"), n = Rd(r, { theme: t, colorMode: e });
      return n ? fd(n)(t) : void 0;
    }
  });
}
var X5 = /* @__PURE__ */ new Set([
  ...Dm,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), J5 = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function Q5(e) {
  return J5.has(e) || !X5.has(e);
}
var eS = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: a, sx: o, ...i } = t, s = Ad(i, (d, f) => jm(f)), l = Rd(e, t), c = Object.assign({}, a, l, Pd(s), o), u = fd(c)(t.theme);
  return n ? [u, n] : u;
};
function _i(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Q5);
  const a = eS({ baseStyle: r }), o = qi(e, n)(a);
  return y.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = Ps();
    return y.createElement(o, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function U(e) {
  return ks(e);
}
function jd(e, t = {}) {
  const { styleConfig: r, ...n } = t, { theme: a, colorMode: o } = H5(), i = e ? Td(a, `components.${e}`) : void 0, s = r || i, l = Rt({ theme: a, colorMode: o }, (s == null ? void 0 : s.defaultProps) ?? {}, Pd(uh(n, ["children"]))), c = Fe({});
  if (s) {
    const d = Jm(s)(l);
    W5(c.current, d) || (c.current = d);
  }
  return c.current;
}
function Xe(e, t = {}) {
  return jd(e, t);
}
function ra(e, t = {}) {
  return jd(e, t);
}
function tS() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(_i, {
    apply(t, r, n) {
      return _i(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, _i(r)), e.get(r);
    }
  });
}
var W = tS(), We = (...e) => e.filter(Boolean).join(" "), Vc = {
  path: /* @__PURE__ */ y.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ y.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ y.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  })),
  viewBox: "0 0 24 24"
}, dr = U((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: a = "currentColor",
    focusable: o = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = We("chakra-icon", s), d = Xe("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: a,
    ...l,
    ...d
  }, m = {
    ref: t,
    focusable: o,
    className: u,
    __css: f
  }, p = n ?? Vc.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ y.createElement(W.svg, {
      as: r,
      ...m,
      ...c
    });
  const h = i ?? Vc.path;
  return /* @__PURE__ */ y.createElement(W.svg, {
    verticalAlign: "middle",
    viewBox: p,
    ...m,
    ...c
  }, h);
});
dr.displayName = "Icon";
function $(e) {
  const {
    viewBox: t = "0 0 24 24",
    d: r,
    displayName: n,
    defaultProps: a = {}
  } = e, o = Kn.toArray(e.path), i = U((s, l) => /* @__PURE__ */ y.createElement(dr, {
    ref: l,
    viewBox: t,
    ...a,
    ...s
  }, o.length ? o : /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: r
  })));
  return i.displayName = n, i;
}
$({
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
  displayName: "CopyIcon"
});
$({
  d: "M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",
  displayName: "SearchIcon"
});
$({
  d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",
  displayName: "Search2Icon"
});
$({
  d: "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",
  displayName: "MoonIcon"
});
$({
  displayName: "SunIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeWidth: "2",
    fill: "none",
    stroke: "currentColor"
  }, /* @__PURE__ */ y.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M12 1v2"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M12 21v2"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M4.22 4.22l1.42 1.42"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M18.36 18.36l1.42 1.42"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M1 12h2"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M21 12h2"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M4.22 19.78l1.42-1.42"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M18.36 5.64l1.42-1.42"
  }))
});
$({
  d: "M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",
  displayName: "AddIcon"
});
$({
  displayName: "SmallAddIcon",
  viewBox: "0 0 20 20",
  path: /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: "M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z",
    fillRule: "evenodd"
  })
});
$({
  viewBox: "0 0 14 14",
  d: "M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z",
  displayName: "SettingsIcon"
});
$({
  displayName: "CheckCircleIcon",
  d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
});
$({
  d: "M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",
  displayName: "LockIcon"
});
$({
  d: "M19.5,9.5h-.75V6.75A6.751,6.751,0,0,0,5.533,4.811a1.25,1.25,0,1,0,2.395.717A4.251,4.251,0,0,1,16.25,6.75V9a.5.5,0,0,1-.5.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5Z",
  displayName: "UnlockIcon"
});
$({
  displayName: "ViewIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"
  }), /* @__PURE__ */ y.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }))
});
$({
  displayName: "ViewOffIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"
  }))
});
$({
  d: "M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z",
  displayName: "DownloadIcon",
  viewBox: "0 0 14 14"
});
$({
  displayName: "DeleteIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"
  }))
});
$({
  displayName: "RepeatIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"
  }))
});
$({
  displayName: "RepeatClockIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M12.965,6a1,1,0,0,0-1,1v5.5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2h-3.75a.25.25,0,0,1-.25-.25V7A1,1,0,0,0,12.965,6Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M12.567,1.258A10.822,10.822,0,0,0,2.818,8.4a.25.25,0,0,1-.271.163L.858,8.309a.514.514,0,0,0-.485.213.5.5,0,0,0-.021.53l2.679,4.7a.5.5,0,0,0,.786.107l3.77-3.746a.5.5,0,0,0-.279-.85L5.593,9.007a.25.25,0,0,1-.192-.35,8.259,8.259,0,1,1,7.866,11.59,1.25,1.25,0,0,0,.045,2.5h.047a10.751,10.751,0,1,0-.792-21.487Z"
  }))
});
$({
  displayName: "EditIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }))
});
$({
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  displayName: "ChevronLeftIcon"
});
$({
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  displayName: "ChevronRightIcon"
});
$({
  displayName: "ChevronDownIcon",
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
});
$({
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
  displayName: "ChevronUpIcon"
});
$({
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  displayName: "ArrowBackIcon"
});
$({
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  displayName: "ArrowForwardIcon"
});
$({
  d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",
  displayName: "ArrowUpIcon"
});
$({
  viewBox: "0 0 16 16",
  d: "M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z",
  displayName: "ArrowUpDownIcon"
});
$({
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
  displayName: "ArrowDownIcon"
});
$({
  displayName: "ExternalLinkIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M15 3h6v6"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M10 14L21 3"
  }))
});
$({
  displayName: "LinkIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"
  }))
});
$({
  displayName: "PlusSquareIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /* @__PURE__ */ y.createElement("rect", {
    height: "18",
    width: "18",
    rx: "2",
    ry: "2",
    x: "3",
    y: "3"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M12 8v8"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M8 12h8"
  }))
});
$({
  displayName: "CalendarIcon",
  viewBox: "0 0 14 14",
  d: "M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"
});
$({
  d: "M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z",
  displayName: "ChatIcon",
  viewBox: "0 0 14 14"
});
$({
  displayName: "TimeIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
  }))
});
var rS = $({
  displayName: "ArrowRightIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"
  }))
}), nS = $({
  displayName: "ArrowLeftIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"
  }))
});
$({
  displayName: "AtSignIcon",
  d: "M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z"
});
$({
  displayName: "AttachmentIcon",
  d: "M21.843,3.455a6.961,6.961,0,0,0-9.846,0L1.619,13.832a5.128,5.128,0,0,0,7.252,7.252L17.3,12.653A3.293,3.293,0,1,0,12.646,8L7.457,13.184A1,1,0,1,0,8.871,14.6L14.06,9.409a1.294,1.294,0,0,1,1.829,1.83L7.457,19.67a3.128,3.128,0,0,1-4.424-4.424L13.411,4.869a4.962,4.962,0,1,1,7.018,7.018L12.646,19.67a1,1,0,1,0,1.414,1.414L21.843,13.3a6.96,6.96,0,0,0,0-9.846Z"
});
$({
  displayName: "UpDownIcon",
  viewBox: "-1 -1 9 11",
  d: "M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
});
$({
  d: "M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",
  displayName: "StarIcon"
});
$({
  displayName: "EmailIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("path", {
    d: "M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"
  }))
});
$({
  d: "M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",
  displayName: "PhoneIcon",
  viewBox: "0 0 14 14"
});
$({
  viewBox: "0 0 10 10",
  d: "M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z",
  displayName: "DragHandleIcon"
});
$({
  displayName: "SpinnerIcon",
  path: /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("defs", null, /* @__PURE__ */ y.createElement("linearGradient", {
    x1: "28.154%",
    y1: "63.74%",
    x2: "74.629%",
    y2: "17.783%",
    id: "a"
  }, /* @__PURE__ */ y.createElement("stop", {
    stopColor: "currentColor",
    offset: "0%"
  }), /* @__PURE__ */ y.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: "0",
    offset: "100%"
  }))), /* @__PURE__ */ y.createElement("g", {
    transform: "translate(2)",
    fill: "none"
  }, /* @__PURE__ */ y.createElement("circle", {
    stroke: "url(#a)",
    strokeWidth: "4",
    cx: "10",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ y.createElement("path", {
    d: "M10 2C4.477 2 0 6.477 0 12",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ y.createElement("rect", {
    fill: "currentColor",
    x: "8",
    width: "4",
    height: "4",
    rx: "8"
  })))
});
$({
  displayName: "CloseIcon",
  d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
});
$({
  displayName: "SmallCloseIcon",
  viewBox: "0 0 16 16",
  path: /* @__PURE__ */ y.createElement("path", {
    d: "M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",
    fillRule: "evenodd",
    fill: "currentColor"
  })
});
$({
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
  displayName: "NotAllowedIcon"
});
$({
  d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",
  displayName: "TriangleDownIcon"
});
$({
  d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",
  displayName: "TriangleUpIcon"
});
$({
  displayName: "InfoOutlineIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeWidth: "2"
  }, /* @__PURE__ */ y.createElement("circle", {
    cx: "12",
    cy: "12",
    fill: "none",
    r: "11",
    stroke: "currentColor"
  }), /* @__PURE__ */ y.createElement("line", {
    fill: "none",
    x1: "11.959",
    x2: "11.959",
    y1: "11",
    y2: "17"
  }), /* @__PURE__ */ y.createElement("circle", {
    cx: "11.959",
    cy: "7",
    r: "1",
    stroke: "none"
  }))
});
$({
  displayName: "BellIcon",
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
});
$({
  d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
});
$({
  d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z",
  displayName: "QuestionIcon"
});
$({
  displayName: "QuestionOutlineIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ y.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ y.createElement("path", {
    fill: "none",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ y.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  }))
});
$({
  d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
  displayName: "WarningIcon"
});
$({
  displayName: "WarningTwoIcon",
  d: "M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
});
$({
  viewBox: "0 0 14 14",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("polygon", {
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }))
});
$({
  displayName: "MinusIcon",
  path: /* @__PURE__ */ y.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ y.createElement("rect", {
    height: "4",
    width: "20",
    x: "2",
    y: "10"
  }))
});
$({
  displayName: "HamburgerIcon",
  viewBox: "0 0 24 24",
  d: "M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
});
function aS(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Kt(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: a = "Provider",
    errorMessage: o
  } = e, i = dt(void 0);
  i.displayName = t;
  function s() {
    var l;
    const c = le(i);
    if (!c && r) {
      const u = new Error(o ?? aS(n, a));
      throw u.name = "ContextError", (l = Error.captureStackTrace) == null || l.call(Error, u, s), u;
    }
    return c;
  }
  return [i.Provider, s, i];
}
function oS(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Ji(...e) {
  return (t) => {
    e.forEach((r) => {
      oS(r, t);
    });
  };
}
function iS(...e) {
  return Te(() => Ji(...e), e);
}
function sS(e, t = []) {
  const r = Fe(e);
  return we(() => {
    r.current = e;
  }), ct((...n) => {
    var a;
    return (a = r.current) == null ? void 0 : a.call(r, ...n);
  }, t);
}
var Qi = function(e, t) {
  return Qi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Qi(e, t);
};
function Wd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Qi(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var P = function() {
  return P = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, P.apply(this, arguments);
};
function ft(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
function lS(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function _e(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), a, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}
function Ct(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Fc = "production", Us = typeof process > "u" || process.env === void 0 ? Fc : process.env.NODE_ENV || Fc, jt = function(e) {
  return {
    isEnabled: function(t) {
      return e.some(function(r) {
        return !!t[r];
      });
    }
  };
}, jn = {
  measureLayout: jt(["layout", "layoutId", "drag"]),
  animation: jt([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: jt(["exit"]),
  drag: jt(["drag", "dragControls"]),
  focus: jt(["whileFocus"]),
  hover: jt(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: jt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: jt([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: jt([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function cS(e) {
  for (var t in e)
    e[t] !== null && (t === "projectionNodeConstructor" ? jn.projectionNodeConstructor = e[t] : jn[t].Component = e[t]);
}
var na = function() {
}, ut = function() {
};
process.env.NODE_ENV !== "production" && (na = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, ut = function(e, t) {
  if (!e)
    throw new Error(t);
});
var Hd = dt({ strict: !1 }), Ud = Object.keys(jn), uS = Ud.length;
function dS(e, t, r) {
  var n = [], a = le(Hd);
  if (!t)
    return null;
  Us !== "production" && r && a.strict && ut(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var o = 0; o < uS; o++) {
    var i = Ud[o], s = jn[i], l = s.isEnabled, c = s.Component;
    l(e) && c && n.push(qe.createElement(c, P({ key: i }, e, { visualElement: t })));
  }
  return n;
}
var Ys = dt({
  transformPagePoint: function(e) {
    return e;
  },
  isStatic: !1,
  reducedMotion: "never"
}), Lo = dt({});
function fS() {
  return le(Lo).visualElement;
}
var en = dt(null), tn = typeof document < "u", fo = tn ? Es : we, es = { current: null }, Yd = !1;
function pS() {
  if (Yd = !0, !!tn)
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return es.current = e.matches;
      };
      e.addListener(t), t();
    } else
      es.current = !1;
}
function mS() {
  !Yd && pS();
  var e = _e(Ze(es.current), 1), t = e[0];
  return t;
}
function vS() {
  var e = mS(), t = le(Ys).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function hS(e, t, r, n) {
  var a = le(Hd), o = fS(), i = le(en), s = vS(), l = Fe(void 0);
  n || (n = a.renderer), !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceId: i == null ? void 0 : i.id,
    blockInitialAnimation: (i == null ? void 0 : i.initial) === !1,
    shouldReduceMotion: s
  }));
  var c = l.current;
  return fo(function() {
    c == null || c.syncRender();
  }), we(function() {
    var u;
    (u = c == null ? void 0 : c.animationState) === null || u === void 0 || u.animateChanges();
  }), fo(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function Vr(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function gS(e, t, r) {
  return ct(
    function(n) {
      var a;
      n && ((a = e.mount) === null || a === void 0 || a.call(e, n)), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Vr(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function qd(e) {
  return Array.isArray(e);
}
function yt(e) {
  return typeof e == "string" || qd(e);
}
function yS(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.get();
  }), t;
}
function bS(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.getVelocity();
  }), t;
}
function Gd(e, t, r, n, a) {
  var o;
  return n === void 0 && (n = {}), a === void 0 && (a = {}), typeof t == "function" && (t = t(r ?? e.custom, n, a)), typeof t == "string" && (t = (o = e.variants) === null || o === void 0 ? void 0 : o[t]), typeof t == "function" && (t = t(r ?? e.custom, n, a)), t;
}
function Io(e, t, r) {
  var n = e.getProps();
  return Gd(n, t, r ?? n.custom, yS(e), bS(e));
}
function Oo(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || yt(e.initial) || yt(e.animate) || yt(e.whileHover) || yt(e.whileDrag) || yt(e.whileTap) || yt(e.whileFocus) || yt(e.exit);
}
function Zd(e) {
  return !!(Oo(e) || e.variants);
}
function SS(e, t) {
  if (Oo(e)) {
    var r = e.initial, n = e.animate;
    return {
      initial: r === !1 || yt(r) ? r : void 0,
      animate: yt(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function xS(e) {
  var t = SS(e, le(Lo)), r = t.initial, n = t.animate;
  return Te(function() {
    return { initial: r, animate: n };
  }, [$c(r), $c(n)]);
}
function $c(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function aa(e) {
  var t = Fe(null);
  return t.current === null && (t.current = e()), t.current;
}
var Tn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, CS = 1;
function wS() {
  return aa(function() {
    if (Tn.hasEverUpdated)
      return CS++;
  });
}
var qs = dt({}), Kd = dt({});
function _S(e, t, r, n) {
  var a, o = t.layoutId, i = t.layout, s = t.drag, l = t.dragConstraints, c = t.layoutScroll, u = le(Kd);
  !n || !r || r != null && r.projection || (r.projection = new n(e, r.getLatestValues(), (a = r.parent) === null || a === void 0 ? void 0 : a.projection), r.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || l && Vr(l),
    visualElement: r,
    scheduleRender: function() {
      return r.scheduleRender();
    },
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: u,
    layoutScroll: c
  }));
}
var ES = (
  /** @class */
  function(e) {
    Wd(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.getSnapshotBeforeUpdate = function() {
      return this.updateProps(), null;
    }, t.prototype.componentDidUpdate = function() {
    }, t.prototype.updateProps = function() {
      var r = this.props, n = r.visualElement, a = r.props;
      n && n.setProps(a);
    }, t.prototype.render = function() {
      return this.props.children;
    }, t;
  }(y.Component)
);
function kS(e) {
  var t = e.preloadedFeatures, r = e.createVisualElement, n = e.projectionNodeConstructor, a = e.useRender, o = e.useVisualState, i = e.Component;
  t && cS(t);
  function s(l, c) {
    var u = TS(l);
    l = P(P({}, l), { layoutId: u });
    var d = le(Ys), f = null, m = xS(l), p = d.isStatic ? void 0 : wS(), h = o(l, d.isStatic);
    return !d.isStatic && tn && (m.visualElement = hS(i, h, P(P({}, d), l), r), _S(p, l, m.visualElement, n || jn.projectionNodeConstructor), f = dS(l, m.visualElement, t)), qe.createElement(
      ES,
      { visualElement: m.visualElement, props: P(P({}, d), l) },
      f,
      qe.createElement(Lo.Provider, { value: m }, a(i, l, p, gS(h, m.visualElement, c), h, d.isStatic, m.visualElement))
    );
  }
  return ks(s);
}
function TS(e) {
  var t, r = e.layoutId, n = (t = le(qs)) === null || t === void 0 ? void 0 : t.id;
  return n && r !== void 0 ? n + "-" + r : r;
}
function AS(e) {
  function t(n, a) {
    return a === void 0 && (a = {}), kS(e(n, a));
  }
  if (typeof Proxy > "u")
    return t;
  var r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: function(n, a) {
      return r.has(a) || r.set(a, t(a)), r.get(a);
    }
  });
}
var PS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];
function Gs(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(PS.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
var po = {};
function RS(e) {
  Object.assign(po, e);
}
var ts = ["", "X", "Y", "Z"], MS = ["translate", "scale", "rotate", "skew"], Wn = ["transformPerspective", "x", "y", "z"];
MS.forEach(function(e) {
  return ts.forEach(function(t) {
    return Wn.push(e + t);
  });
});
function LS(e, t) {
  return Wn.indexOf(e) - Wn.indexOf(t);
}
var IS = new Set(Wn);
function oa(e) {
  return IS.has(e);
}
var OS = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function Xd(e) {
  return OS.has(e);
}
function Jd(e, t) {
  var r = t.layout, n = t.layoutId;
  return oa(e) || Xd(e) || (r || n !== void 0) && (!!po[e] || e === "opacity");
}
var qt = function(e) {
  return !!(e !== null && typeof e == "object" && e.getVelocity);
}, zS = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function NS(e, t, r, n) {
  var a = e.transform, o = e.transformKeys, i = t.enableHardwareAcceleration, s = i === void 0 ? !0 : i, l = t.allowTransformNone, c = l === void 0 ? !0 : l, u = "";
  o.sort(LS);
  for (var d = !1, f = o.length, m = 0; m < f; m++) {
    var p = o[m];
    u += "".concat(zS[p] || p, "(").concat(a[p], ") "), p === "z" && (d = !0);
  }
  return !d && s ? u += "translateZ(0)" : u = u.trim(), n ? u = n(a, r ? "" : u) : c && r && (u = "none"), u;
}
function VS(e) {
  var t = e.originX, r = t === void 0 ? "50%" : t, n = e.originY, a = n === void 0 ? "50%" : n, o = e.originZ, i = o === void 0 ? 0 : o;
  return "".concat(r, " ").concat(a, " ").concat(i);
}
function Qd(e) {
  return e.startsWith("--");
}
var FS = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
const ef = (e, t) => (r) => Math.max(Math.min(r, t), e), An = (e) => e % 1 ? Number(e.toFixed(5)) : e, Hn = /(-)?([\d]*\.?[\d])+/g, rs = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, $S = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function ia(e) {
  return typeof e == "string";
}
const Er = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Pn = Object.assign(Object.assign({}, Er), { transform: ef(0, 1) }), Na = Object.assign(Object.assign({}, Er), { default: 1 }), sa = (e) => ({
  test: (t) => ia(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), nr = sa("deg"), zt = sa("%"), j = sa("px"), DS = sa("vh"), BS = sa("vw"), Dc = Object.assign(Object.assign({}, zt), { parse: (e) => zt.parse(e) / 100, transform: (e) => zt.transform(e * 100) }), Zs = (e, t) => (r) => !!(ia(r) && $S.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), tf = (e, t, r) => (n) => {
  if (!ia(n))
    return n;
  const [a, o, i, s] = n.match(Hn);
  return {
    [e]: parseFloat(a),
    [t]: parseFloat(o),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, xr = {
  test: Zs("hsl", "hue"),
  parse: tf("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + zt.transform(An(t)) + ", " + zt.transform(An(r)) + ", " + An(Pn.transform(n)) + ")"
}, jS = ef(0, 255), Ei = Object.assign(Object.assign({}, Er), { transform: (e) => Math.round(jS(e)) }), sr = {
  test: Zs("rgb", "red"),
  parse: tf("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Ei.transform(e) + ", " + Ei.transform(t) + ", " + Ei.transform(r) + ", " + An(Pn.transform(n)) + ")"
};
function WS(e) {
  let t = "", r = "", n = "", a = "";
  return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), a = e.substr(4, 1), t += t, r += r, n += n, a += a), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const ns = {
  test: Zs("#"),
  parse: WS,
  transform: sr.transform
}, De = {
  test: (e) => sr.test(e) || ns.test(e) || xr.test(e),
  parse: (e) => sr.test(e) ? sr.parse(e) : xr.test(e) ? xr.parse(e) : ns.parse(e),
  transform: (e) => ia(e) ? e : e.hasOwnProperty("red") ? sr.transform(e) : xr.transform(e)
}, rf = "${c}", nf = "${n}";
function HS(e) {
  var t, r, n, a;
  return isNaN(e) && ia(e) && ((r = (t = e.match(Hn)) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) + ((a = (n = e.match(rs)) === null || n === void 0 ? void 0 : n.length) !== null && a !== void 0 ? a : 0) > 0;
}
function af(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let r = 0;
  const n = e.match(rs);
  n && (r = n.length, e = e.replace(rs, rf), t.push(...n.map(De.parse)));
  const a = e.match(Hn);
  return a && (e = e.replace(Hn, nf), t.push(...a.map(Er.parse))), { values: t, numColors: r, tokenised: e };
}
function of(e) {
  return af(e).values;
}
function sf(e) {
  const { values: t, numColors: r, tokenised: n } = af(e), a = t.length;
  return (o) => {
    let i = n;
    for (let s = 0; s < a; s++)
      i = i.replace(s < r ? rf : nf, s < r ? De.transform(o[s]) : An(o[s]));
    return i;
  };
}
const US = (e) => typeof e == "number" ? 0 : e;
function YS(e) {
  const t = of(e);
  return sf(e)(t.map(US));
}
const Gt = { test: HS, parse: of, createTransformer: sf, getAnimatableNone: YS }, qS = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function GS(e) {
  let [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Hn) || [];
  if (!n)
    return e;
  const a = r.replace(n, "");
  let o = qS.has(t) ? 1 : 0;
  return n !== r && (o *= 100), t + "(" + o + a + ")";
}
const ZS = /([a-z-]*)\(.*?\)/g, as = Object.assign(Object.assign({}, Gt), { getAnimatableNone: (e) => {
  const t = e.match(ZS);
  return t ? t.map(GS).join(" ") : e;
} });
var Bc = P(P({}, Er), { transform: Math.round }), lf = {
  // Border props
  borderWidth: j,
  borderTopWidth: j,
  borderRightWidth: j,
  borderBottomWidth: j,
  borderLeftWidth: j,
  borderRadius: j,
  radius: j,
  borderTopLeftRadius: j,
  borderTopRightRadius: j,
  borderBottomRightRadius: j,
  borderBottomLeftRadius: j,
  // Positioning props
  width: j,
  maxWidth: j,
  height: j,
  maxHeight: j,
  size: j,
  top: j,
  right: j,
  bottom: j,
  left: j,
  // Spacing props
  padding: j,
  paddingTop: j,
  paddingRight: j,
  paddingBottom: j,
  paddingLeft: j,
  margin: j,
  marginTop: j,
  marginRight: j,
  marginBottom: j,
  marginLeft: j,
  // Transform props
  rotate: nr,
  rotateX: nr,
  rotateY: nr,
  rotateZ: nr,
  scale: Na,
  scaleX: Na,
  scaleY: Na,
  scaleZ: Na,
  skew: nr,
  skewX: nr,
  skewY: nr,
  distance: j,
  translateX: j,
  translateY: j,
  translateZ: j,
  x: j,
  y: j,
  z: j,
  perspective: j,
  transformPerspective: j,
  opacity: Pn,
  originX: Dc,
  originY: Dc,
  originZ: j,
  // Misc
  zIndex: Bc,
  // SVG
  fillOpacity: Pn,
  strokeOpacity: Pn,
  numOctaves: Bc
};
function Ks(e, t, r, n) {
  var a, o = e.style, i = e.vars, s = e.transform, l = e.transformKeys, c = e.transformOrigin;
  l.length = 0;
  var u = !1, d = !1, f = !0;
  for (var m in t) {
    var p = t[m];
    if (Qd(m)) {
      i[m] = p;
      continue;
    }
    var h = lf[m], x = FS(p, h);
    if (oa(m)) {
      if (u = !0, s[m] = x, l.push(m), !f)
        continue;
      p !== ((a = h.default) !== null && a !== void 0 ? a : 0) && (f = !1);
    } else
      Xd(m) ? (c[m] = x, d = !0) : o[m] = x;
  }
  u ? o.transform = NS(e, r, f, n) : n ? o.transform = n({}, "") : !t.transform && o.transform && (o.transform = "none"), d && (o.transformOrigin = VS(c));
}
var Xs = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function cf(e, t, r) {
  for (var n in t)
    !qt(t[n]) && !Jd(n, r) && (e[n] = t[n]);
}
function KS(e, t, r) {
  var n = e.transformTemplate;
  return Te(function() {
    var a = Xs();
    Ks(a, t, { enableHardwareAcceleration: !r }, n);
    var o = a.vars, i = a.style;
    return P(P({}, o), i);
  }, [t]);
}
function XS(e, t, r) {
  var n = e.style || {}, a = {};
  return cf(a, n, e), Object.assign(a, KS(e, t, r)), e.transformValues && (a = e.transformValues(a)), a;
}
function JS(e, t, r) {
  var n = {}, a = XS(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), n.style = a, n;
}
var QS = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function mo(e) {
  return QS.has(e);
}
var uf = function(e) {
  return !mo(e);
};
function ex(e) {
  e && (uf = function(t) {
    return t.startsWith("on") ? !mo(t) : e(t);
  });
}
try {
  ex(require("@emotion/is-prop-valid").default);
} catch {
}
function tx(e, t, r) {
  var n = {};
  for (var a in e)
    (uf(a) || r === !0 && mo(a) || !t && !mo(a) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && a.startsWith("onDrag")) && (n[a] = e[a]);
  return n;
}
function jc(e, t, r) {
  return typeof e == "string" ? e : j.transform(t + r * e);
}
function rx(e, t, r) {
  var n = jc(t, e.x, e.width), a = jc(r, e.y, e.height);
  return "".concat(n, " ").concat(a);
}
var nx = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ax = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ox(e, t, r, n, a) {
  r === void 0 && (r = 1), n === void 0 && (n = 0), a === void 0 && (a = !0), e.pathLength = 1;
  var o = a ? nx : ax;
  e[o.offset] = j.transform(-n);
  var i = j.transform(t), s = j.transform(r);
  e[o.array] = "".concat(i, " ").concat(s);
}
function Js(e, t, r, n) {
  var a = t.attrX, o = t.attrY, i = t.originX, s = t.originY, l = t.pathLength, c = t.pathSpacing, u = c === void 0 ? 1 : c, d = t.pathOffset, f = d === void 0 ? 0 : d, m = ft(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Ks(e, m, r, n), e.attrs = e.style, e.style = {};
  var p = e.attrs, h = e.style, x = e.dimensions;
  p.transform && (x && (h.transform = p.transform), delete p.transform), x && (i !== void 0 || s !== void 0 || h.transform) && (h.transformOrigin = rx(x, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), a !== void 0 && (p.x = a), o !== void 0 && (p.y = o), l !== void 0 && ox(p, l, u, f, !1);
}
var df = function() {
  return P(P({}, Xs()), { attrs: {} });
};
function ix(e, t) {
  var r = Te(function() {
    var a = df();
    return Js(a, t, { enableHardwareAcceleration: !1 }, e.transformTemplate), P(P({}, a.attrs), { style: P({}, a.style) });
  }, [t]);
  if (e.style) {
    var n = {};
    cf(n, e.style, e), r.style = P(P({}, n), r.style);
  }
  return r;
}
function sx(e) {
  e === void 0 && (e = !1);
  var t = function(r, n, a, o, i, s) {
    var l = i.latestValues, c = Gs(r) ? ix : JS, u = c(n, l, s), d = tx(n, typeof r == "string", e), f = P(P(P({}, d), u), { ref: o });
    return a && (f["data-projection-id"] = a), Lt(r, f);
  };
  return t;
}
var lx = /([a-z])([A-Z])/g, cx = "$1-$2", ff = function(e) {
  return e.replace(lx, cx).toLowerCase();
};
function pf(e, t, r, n) {
  var a = t.style, o = t.vars;
  Object.assign(e.style, a, n && n.getProjectionStyles(r));
  for (var i in o)
    e.style.setProperty(i, o[i]);
}
var mf = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);
function vf(e, t, r, n) {
  pf(e, t, void 0, n);
  for (var a in t.attrs)
    e.setAttribute(mf.has(a) ? a : ff(a), t.attrs[a]);
}
function Qs(e) {
  var t = e.style, r = {};
  for (var n in t)
    (qt(t[n]) || Jd(n, e)) && (r[n] = t[n]);
  return r;
}
function hf(e) {
  var t = Qs(e);
  for (var r in e)
    if (qt(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function el(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var Un = function(e) {
  return Array.isArray(e);
}, ux = function(e) {
  return !!(e && typeof e == "object" && e.mix && e.toValue);
}, gf = function(e) {
  return Un(e) ? e[e.length - 1] || 0 : e;
};
function Ja(e) {
  var t = qt(e) ? e.get() : e;
  return ux(t) ? t.toValue() : t;
}
function Wc(e, t, r, n) {
  var a = e.scrapeMotionValuesFromProps, o = e.createRenderState, i = e.onMount, s = {
    latestValues: dx(t, r, n, a),
    renderState: o()
  };
  return i && (s.mount = function(l) {
    return i(t, l, s);
  }), s;
}
var yf = function(e) {
  return function(t, r) {
    var n = le(Lo), a = le(en);
    return r ? Wc(e, t, n, a) : aa(function() {
      return Wc(e, t, n, a);
    });
  };
};
function dx(e, t, r, n) {
  var a = {}, o = (r == null ? void 0 : r.initial) === !1, i = n(e);
  for (var s in i)
    a[s] = Ja(i[s]);
  var l = e.initial, c = e.animate, u = Oo(e), d = Zd(e);
  t && d && !u && e.inherit !== !1 && (l ?? (l = t.initial), c ?? (c = t.animate));
  var f = o || l === !1, m = f ? c : l;
  if (m && typeof m != "boolean" && !el(m)) {
    var p = Array.isArray(m) ? m : [m];
    p.forEach(function(h) {
      var x = Gd(e, h);
      if (x) {
        var C = x.transitionEnd;
        x.transition;
        var _ = ft(x, ["transitionEnd", "transition"]);
        for (var k in _) {
          var T = _[k];
          if (Array.isArray(T)) {
            var w = f ? T.length - 1 : 0;
            T = T[w];
          }
          T !== null && (a[k] = T);
        }
        for (var k in C)
          a[k] = C[k];
      }
    });
  }
  return a;
}
var fx = {
  useVisualState: yf({
    scrapeMotionValuesFromProps: hf,
    createRenderState: df,
    onMount: function(e, t, r) {
      var n = r.renderState, a = r.latestValues;
      try {
        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Js(n, a, { enableHardwareAcceleration: !1 }, e.transformTemplate), vf(t, n);
    }
  })
}, px = {
  useVisualState: yf({
    scrapeMotionValuesFromProps: Qs,
    createRenderState: Xs
  })
};
function mx(e, t, r, n, a) {
  var o = t.forwardMotionProps, i = o === void 0 ? !1 : o, s = Gs(e) ? fx : px;
  return P(P({}, s), { preloadedFeatures: r, useRender: sx(i), createVisualElement: n, projectionNodeConstructor: a, Component: e });
}
var pe;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(pe || (pe = {}));
function zo(e, t, r, n) {
  return n === void 0 && (n = { passive: !0 }), e.addEventListener(t, r, n), function() {
    return e.removeEventListener(t, r);
  };
}
function os(e, t, r, n) {
  we(function() {
    var a = e.current;
    if (r && a)
      return zo(a, t, r, n);
  }, [e, t, r, n]);
}
function vx(e) {
  var t = e.whileFocus, r = e.visualElement, n = function() {
    var o;
    (o = r.animationState) === null || o === void 0 || o.setActive(pe.Focus, !0);
  }, a = function() {
    var o;
    (o = r.animationState) === null || o === void 0 || o.setActive(pe.Focus, !1);
  };
  os(r, "focus", t ? n : void 0), os(r, "blur", t ? a : void 0);
}
function bf(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function Sf(e) {
  var t = !!e.touches;
  return t;
}
function hx(e) {
  return function(t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var gx = { pageX: 0, pageY: 0 };
function yx(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || gx;
  return {
    x: n[t + "X"],
    y: n[t + "Y"]
  };
}
function bx(e, t) {
  return t === void 0 && (t = "page"), {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function tl(e, t) {
  return t === void 0 && (t = "page"), {
    point: Sf(e) ? yx(e, t) : bx(e, t)
  };
}
var xf = function(e, t) {
  t === void 0 && (t = !1);
  var r = function(n) {
    return e(n, tl(n));
  };
  return t ? hx(r) : r;
}, Sx = function() {
  return tn && window.onpointerdown === null;
}, xx = function() {
  return tn && window.ontouchstart === null;
}, Cx = function() {
  return tn && window.onmousedown === null;
}, wx = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, _x = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function Cf(e) {
  return Sx() ? e : xx() ? _x[e] : Cx() ? wx[e] : e;
}
function Yr(e, t, r, n) {
  return zo(e, Cf(t), xf(r, t === "pointerdown"), n);
}
function vo(e, t, r, n) {
  return os(e, Cf(t), r && xf(r, t === "pointerdown"), n);
}
function wf(e) {
  var t = null;
  return function() {
    var r = function() {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
var Hc = wf("dragHorizontal"), Uc = wf("dragVertical");
function _f(e) {
  var t = !1;
  if (e === "y")
    t = Uc();
  else if (e === "x")
    t = Hc();
  else {
    var r = Hc(), n = Uc();
    r && n ? t = function() {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Ef() {
  var e = _f(!0);
  return e ? (e(), !1) : !0;
}
function Yc(e, t, r) {
  return function(n, a) {
    var o;
    !bf(n) || Ef() || ((o = e.animationState) === null || o === void 0 || o.setActive(pe.Hover, t), r == null || r(n, a));
  };
}
function Ex(e) {
  var t = e.onHoverStart, r = e.onHoverEnd, n = e.whileHover, a = e.visualElement;
  vo(a, "pointerenter", t || n ? Yc(a, !0, t) : void 0, { passive: !t }), vo(a, "pointerleave", r || n ? Yc(a, !1, r) : void 0, { passive: !r });
}
var kf = function(e, t) {
  return t ? e === t ? !0 : kf(e, t.parentElement) : !1;
};
function rl(e) {
  return we(function() {
    return function() {
      return e();
    };
  }, []);
}
const ho = (e, t, r) => Math.min(Math.max(r, e), t), ki = 1e-3, kx = 0.01, qc = 10, Tx = 0.05, Ax = 1;
function Px({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let a, o;
  na(e <= qc * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = ho(Tx, Ax, i), e = ho(kx, qc, e / 1e3), i < 1 ? (a = (c) => {
    const u = c * i, d = u * e, f = u - r, m = is(c, i), p = Math.exp(-d);
    return ki - f / m * p;
  }, o = (c) => {
    const d = c * i * e, f = d * r + r, m = Math.pow(i, 2) * Math.pow(c, 2) * e, p = Math.exp(-d), h = is(Math.pow(c, 2), i);
    return (-a(c) + ki > 0 ? -1 : 1) * ((f - m) * p) / h;
  }) : (a = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -ki + u * d;
  }, o = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = Mx(a, o, s);
  if (e = e * 1e3, isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const Rx = 12;
function Mx(e, t, r) {
  let n = r;
  for (let a = 1; a < Rx; a++)
    n = n - e(n) / t(n);
  return n;
}
function is(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Lx = ["duration", "bounce"], Ix = ["stiffness", "damping", "mass"];
function Gc(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function Ox(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e);
  if (!Gc(e, Ix) && Gc(e, Lx)) {
    const r = Px(e);
    t = Object.assign(Object.assign(Object.assign({}, t), r), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = !0;
  }
  return t;
}
function nl(e) {
  var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: a } = e, o = ft(e, ["from", "to", "restSpeed", "restDelta"]);
  const i = { done: !1, value: t };
  let { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = Ox(o), m = Zc, p = Zc;
  function h() {
    const x = u ? -(u / 1e3) : 0, C = r - t, _ = l / (2 * Math.sqrt(s * c)), k = Math.sqrt(s / c) / 1e3;
    if (a === void 0 && (a = Math.min(Math.abs(r - t) / 100, 0.4)), _ < 1) {
      const T = is(k, _);
      m = (w) => {
        const I = Math.exp(-_ * k * w);
        return r - I * ((x + _ * k * C) / T * Math.sin(T * w) + C * Math.cos(T * w));
      }, p = (w) => {
        const I = Math.exp(-_ * k * w);
        return _ * k * I * (Math.sin(T * w) * (x + _ * k * C) / T + C * Math.cos(T * w)) - I * (Math.cos(T * w) * (x + _ * k * C) - T * C * Math.sin(T * w));
      };
    } else if (_ === 1)
      m = (T) => r - Math.exp(-k * T) * (C + (x + k * C) * T);
    else {
      const T = k * Math.sqrt(_ * _ - 1);
      m = (w) => {
        const I = Math.exp(-_ * k * w), R = Math.min(T * w, 300);
        return r - I * ((x + _ * k * C) * Math.sinh(R) + T * C * Math.cosh(R)) / T;
      };
    }
  }
  return h(), {
    next: (x) => {
      const C = m(x);
      if (f)
        i.done = x >= d;
      else {
        const _ = p(x) * 1e3, k = Math.abs(_) <= n, T = Math.abs(r - C) <= a;
        i.done = k && T;
      }
      return i.value = i.done ? r : C, i;
    },
    flipTarget: () => {
      u = -u, [t, r] = [r, t], h();
    }
  };
}
nl.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const Zc = (e) => 0, Yn = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Ce = (e, t, r) => -r * e + r * t + e;
function Ti(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Kc({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let a = 0, o = 0, i = 0;
  if (!t)
    a = o = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    a = Ti(l, s, e + 1 / 3), o = Ti(l, s, e), i = Ti(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const zx = (e, t, r) => {
  const n = e * e, a = t * t;
  return Math.sqrt(Math.max(0, r * (a - n) + n));
}, Nx = [ns, sr, xr], Xc = (e) => Nx.find((t) => t.test(e)), Jc = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, Tf = (e, t) => {
  let r = Xc(e), n = Xc(t);
  ut(!!r, Jc(e)), ut(!!n, Jc(t));
  let a = r.parse(e), o = n.parse(t);
  r === xr && (a = Kc(a), r = sr), n === xr && (o = Kc(o), n = sr);
  const i = Object.assign({}, a);
  return (s) => {
    for (const l in i)
      l !== "alpha" && (i[l] = zx(a[l], o[l], s));
    return i.alpha = Ce(a.alpha, o.alpha, s), r.transform(i);
  };
}, ss = (e) => typeof e == "number", Vx = (e, t) => (r) => t(e(r)), No = (...e) => e.reduce(Vx);
function Af(e, t) {
  return ss(e) ? (r) => Ce(e, t, r) : De.test(e) ? Tf(e, t) : Rf(e, t);
}
const Pf = (e, t) => {
  const r = [...e], n = r.length, a = e.map((o, i) => Af(o, t[i]));
  return (o) => {
    for (let i = 0; i < n; i++)
      r[i] = a[i](o);
    return r;
  };
}, Fx = (e, t) => {
  const r = Object.assign(Object.assign({}, e), t), n = {};
  for (const a in r)
    e[a] !== void 0 && t[a] !== void 0 && (n[a] = Af(e[a], t[a]));
  return (a) => {
    for (const o in n)
      r[o] = n[o](a);
    return r;
  };
};
function Qc(e) {
  const t = Gt.parse(e), r = t.length;
  let n = 0, a = 0, o = 0;
  for (let i = 0; i < r; i++)
    n || typeof t[i] == "number" ? n++ : t[i].hue !== void 0 ? o++ : a++;
  return { parsed: t, numNumbers: n, numRGB: a, numHSL: o };
}
const Rf = (e, t) => {
  const r = Gt.createTransformer(t), n = Qc(e), a = Qc(t);
  return n.numHSL === a.numHSL && n.numRGB === a.numRGB && n.numNumbers >= a.numNumbers ? No(Pf(n.parsed, a.parsed), r) : (na(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, $x = (e, t) => (r) => Ce(e, t, r);
function Dx(e) {
  if (typeof e == "number")
    return $x;
  if (typeof e == "string")
    return De.test(e) ? Tf : Rf;
  if (Array.isArray(e))
    return Pf;
  if (typeof e == "object")
    return Fx;
}
function Bx(e, t, r) {
  const n = [], a = r || Dx(e[0]), o = e.length - 1;
  for (let i = 0; i < o; i++) {
    let s = a(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] : t;
      s = No(l, s);
    }
    n.push(s);
  }
  return n;
}
function jx([e, t], [r]) {
  return (n) => r(Yn(e, t, n));
}
function Wx(e, t) {
  const r = e.length, n = r - 1;
  return (a) => {
    let o = 0, i = !1;
    if (a <= e[0] ? i = !0 : a >= e[n] && (o = n - 1, i = !0), !i) {
      let l = 1;
      for (; l < r && !(e[l] > a || l === n); l++)
        ;
      o = l - 1;
    }
    const s = Yn(e[o], e[o + 1], a);
    return t[o](s);
  };
}
function Mf(e, t, { clamp: r = !0, ease: n, mixer: a } = {}) {
  const o = e.length;
  ut(o === t.length, "Both input and output ranges must be the same length"), ut(!n || !Array.isArray(n) || n.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[o - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  const i = Bx(t, n, a), s = o === 2 ? jx(e, i) : Wx(e, i);
  return r ? (l) => s(ho(e[0], e[o - 1], l)) : s;
}
const Vo = (e) => (t) => 1 - e(1 - t), al = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Hx = (e) => (t) => Math.pow(t, e), Lf = (e) => (t) => t * t * ((e + 1) * t - e), Ux = (e) => {
  const t = Lf(e);
  return (r) => (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
}, If = 1.525, Yx = 4 / 11, qx = 8 / 11, Gx = 9 / 10, ol = (e) => e, il = Hx(2), Zx = Vo(il), Of = al(il), zf = (e) => 1 - Math.sin(Math.acos(e)), sl = Vo(zf), Kx = al(sl), ll = Lf(If), Xx = Vo(ll), Jx = al(ll), Qx = Ux(If), e4 = 4356 / 361, t4 = 35442 / 1805, r4 = 16061 / 1805, go = (e) => {
  if (e === 1 || e === 0)
    return e;
  const t = e * e;
  return e < Yx ? 7.5625 * t : e < qx ? 9.075 * t - 9.9 * e + 3.4 : e < Gx ? e4 * t - t4 * e + r4 : 10.8 * e * e - 20.52 * e + 10.72;
}, n4 = Vo(go), a4 = (e) => e < 0.5 ? 0.5 * (1 - go(1 - e * 2)) : 0.5 * go(e * 2 - 1) + 0.5;
function o4(e, t) {
  return e.map(() => t || Of).splice(0, e.length - 1);
}
function i4(e) {
  const t = e.length;
  return e.map((r, n) => n !== 0 ? n / (t - 1) : 0);
}
function s4(e, t) {
  return e.map((r) => r * t);
}
function Qa({ from: e = 0, to: t = 1, ease: r, offset: n, duration: a = 300 }) {
  const o = { done: !1, value: e }, i = Array.isArray(t) ? t : [e, t], s = s4(n && n.length === i.length ? n : i4(i), a);
  function l() {
    return Mf(s, i, {
      ease: Array.isArray(r) ? r : o4(i, r)
    });
  }
  let c = l();
  return {
    next: (u) => (o.value = c(u), o.done = u >= a, o),
    flipTarget: () => {
      i.reverse(), c = l();
    }
  };
}
function l4({ velocity: e = 0, from: t = 0, power: r = 0.8, timeConstant: n = 350, restDelta: a = 0.5, modifyTarget: o }) {
  const i = { done: !1, value: t };
  let s = r * e;
  const l = t + s, c = o === void 0 ? l : o(l);
  return c !== l && (s = c - t), {
    next: (u) => {
      const d = -s * Math.exp(-u / n);
      return i.done = !(d > a || d < -a), i.value = i.done ? c : c + d, i;
    },
    flipTarget: () => {
    }
  };
}
const eu = { keyframes: Qa, spring: nl, decay: l4 };
function c4(e) {
  if (Array.isArray(e.to))
    return Qa;
  if (eu[e.type])
    return eu[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Qa : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? nl : Qa;
}
const Nf = 1 / 60 * 1e3, u4 = typeof performance < "u" ? () => performance.now() : () => Date.now(), Vf = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(u4()), Nf);
function d4(e) {
  let t = [], r = [], n = 0, a = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    schedule: (l, c = !1, u = !1) => {
      const d = u && a, f = d ? t : r;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && a && (n = t.length)), l;
    },
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), i.delete(l);
    },
    process: (l) => {
      if (a) {
        o = !0;
        return;
      }
      if (a = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      a = !1, o && (o = !1, s.process(l));
    }
  };
  return s;
}
const f4 = 40;
let ls = !0, qn = !1, cs = !1;
const qr = {
  delta: 0,
  timestamp: 0
}, la = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Fo = la.reduce((e, t) => (e[t] = d4(() => qn = !0), e), {}), p4 = la.reduce((e, t) => {
  const r = Fo[t];
  return e[t] = (n, a = !1, o = !1) => (qn || h4(), r.schedule(n, a, o)), e;
}, {}), m4 = la.reduce((e, t) => (e[t] = Fo[t].cancel, e), {});
la.reduce((e, t) => (e[t] = () => Fo[t].process(qr), e), {});
const v4 = (e) => Fo[e].process(qr), Ff = (e) => {
  qn = !1, qr.delta = ls ? Nf : Math.max(Math.min(e - qr.timestamp, f4), 1), qr.timestamp = e, cs = !0, la.forEach(v4), cs = !1, qn && (ls = !1, Vf(Ff));
}, h4 = () => {
  qn = !0, ls = !0, cs || Vf(Ff);
}, g4 = () => qr;
function $f(e, t, r = 0) {
  return e - t - r;
}
function y4(e, t, r = 0, n = !0) {
  return n ? $f(t + -e, t, r) : t - (e - t) + r;
}
function b4(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const S4 = (e) => {
  const t = ({ delta: r }) => e(r);
  return {
    start: () => p4.update(t, !0),
    stop: () => m4.update(t)
  };
};
function Df(e) {
  var t, r, { from: n, autoplay: a = !0, driver: o = S4, elapsed: i = 0, repeat: s = 0, repeatType: l = "loop", repeatDelay: c = 0, onPlay: u, onStop: d, onComplete: f, onRepeat: m, onUpdate: p } = e, h = ft(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: x } = h, C, _ = 0, k = h.duration, T, w = !1, I = !0, R;
  const z = c4(h);
  !((r = (t = z).needsInterpolation) === null || r === void 0) && r.call(t, n, x) && (R = Mf([0, 100], [n, x], {
    clamp: !1
  }), n = 0, x = 100);
  const V = z(Object.assign(Object.assign({}, h), { from: n, to: x }));
  function Y() {
    _++, l === "reverse" ? (I = _ % 2 === 0, i = y4(i, k, c, I)) : (i = $f(i, k, c), l === "mirror" && V.flipTarget()), w = !1, m && m();
  }
  function Se() {
    C.stop(), f && f();
  }
  function fe(he) {
    if (I || (he = -he), i += he, !w) {
      const Ee = V.next(Math.max(0, i));
      T = Ee.value, R && (T = R(T)), w = I ? Ee.done : i <= 0;
    }
    p == null || p(T), w && (_ === 0 && (k ?? (k = i)), _ < s ? b4(i, k, c, I) && Y() : Se());
  }
  function se() {
    u == null || u(), C = o(fe), C.start();
  }
  return a && se(), {
    stop: () => {
      d == null || d(), C.stop();
    }
  };
}
function Bf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function x4({ from: e = 0, velocity: t = 0, min: r, max: n, power: a = 0.8, timeConstant: o = 750, bounceStiffness: i = 500, bounceDamping: s = 10, restDelta: l = 1, modifyTarget: c, driver: u, onUpdate: d, onComplete: f, onStop: m }) {
  let p;
  function h(k) {
    return r !== void 0 && k < r || n !== void 0 && k > n;
  }
  function x(k) {
    return r === void 0 ? n : n === void 0 || Math.abs(r - k) < Math.abs(n - k) ? r : n;
  }
  function C(k) {
    p == null || p.stop(), p = Df(Object.assign(Object.assign({}, k), {
      driver: u,
      onUpdate: (T) => {
        var w;
        d == null || d(T), (w = k.onUpdate) === null || w === void 0 || w.call(k, T);
      },
      onComplete: f,
      onStop: m
    }));
  }
  function _(k) {
    C(Object.assign({ type: "spring", stiffness: i, damping: s, restDelta: l }, k));
  }
  if (h(e))
    _({ from: e, velocity: t, to: x(e) });
  else {
    let k = a * t + e;
    typeof c < "u" && (k = c(k));
    const T = x(k), w = T === r ? -1 : 1;
    let I, R;
    const z = (V) => {
      I = R, R = V, t = Bf(V - I, g4().delta), (w === 1 && V > T || w === -1 && V < T) && _({ from: V, to: T, velocity: t });
    };
    C({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: o,
      power: a,
      restDelta: l,
      modifyTarget: c,
      onUpdate: h(k) ? z : void 0
    });
  }
  return {
    stop: () => p == null ? void 0 : p.stop()
  };
}
const us = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"), tu = (e) => us(e) && e.hasOwnProperty("z"), Va = (e, t) => Math.abs(e - t);
function jf(e, t) {
  if (ss(e) && ss(t))
    return Va(e, t);
  if (us(e) && us(t)) {
    const r = Va(e.x, t.x), n = Va(e.y, t.y), a = tu(e) && tu(t) ? Va(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(a, 2));
  }
}
const Wf = (e, t) => 1 - 3 * t + 3 * e, Hf = (e, t) => 3 * t - 6 * e, Uf = (e) => 3 * e, yo = (e, t, r) => ((Wf(t, r) * e + Hf(t, r)) * e + Uf(t)) * e, Yf = (e, t, r) => 3 * Wf(t, r) * e * e + 2 * Hf(t, r) * e + Uf(t), C4 = 1e-7, w4 = 10;
function _4(e, t, r, n, a) {
  let o, i, s = 0;
  do
    i = t + (r - t) / 2, o = yo(i, n, a) - e, o > 0 ? r = i : t = i;
  while (Math.abs(o) > C4 && ++s < w4);
  return i;
}
const E4 = 8, k4 = 1e-3;
function T4(e, t, r, n) {
  for (let a = 0; a < E4; ++a) {
    const o = Yf(t, r, n);
    if (o === 0)
      return t;
    const i = yo(t, r, n) - e;
    t -= i / o;
  }
  return t;
}
const eo = 11, Fa = 1 / (eo - 1);
function A4(e, t, r, n) {
  if (e === t && r === n)
    return ol;
  const a = new Float32Array(eo);
  for (let i = 0; i < eo; ++i)
    a[i] = yo(i * Fa, e, r);
  function o(i) {
    let s = 0, l = 1;
    const c = eo - 1;
    for (; l !== c && a[l] <= i; ++l)
      s += Fa;
    --l;
    const u = (i - a[l]) / (a[l + 1] - a[l]), d = s + u * Fa, f = Yf(d, e, r);
    return f >= k4 ? T4(i, d, e, r) : f === 0 ? d : _4(i, s, s + Fa, e, r);
  }
  return (i) => i === 0 || i === 1 ? i : yo(o(i), t, n);
}
function P4(e) {
  var t = e.onTap, r = e.onTapStart, n = e.onTapCancel, a = e.whileTap, o = e.visualElement, i = t || r || n || a, s = Fe(!1), l = Fe(null), c = {
    passive: !(r || t || n || p)
  };
  function u() {
    var h;
    (h = l.current) === null || h === void 0 || h.call(l), l.current = null;
  }
  function d() {
    var h;
    return u(), s.current = !1, (h = o.animationState) === null || h === void 0 || h.setActive(pe.Tap, !1), !Ef();
  }
  function f(h, x) {
    d() && (kf(o.getInstance(), h.target) ? t == null || t(h, x) : n == null || n(h, x));
  }
  function m(h, x) {
    d() && (n == null || n(h, x));
  }
  function p(h, x) {
    var C;
    u(), !s.current && (s.current = !0, l.current = No(Yr(window, "pointerup", f, c), Yr(window, "pointercancel", m, c)), (C = o.animationState) === null || C === void 0 || C.setActive(pe.Tap, !0), r == null || r(h, x));
  }
  vo(o, "pointerdown", i ? p : void 0, c), rl(u);
}
var ru = /* @__PURE__ */ new Set();
function qf(e, t, r) {
  e || ru.has(t) || (console.warn(t), r && console.warn(r), ru.add(t));
}
var ds = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), R4 = function(e) {
  var t;
  (t = ds.get(e.target)) === null || t === void 0 || t(e);
}, M4 = function(e) {
  e.forEach(R4);
};
function L4(e) {
  var t = e.root, r = ft(e, ["root"]), n = t || document;
  Ai.has(n) || Ai.set(n, {});
  var a = Ai.get(n), o = JSON.stringify(r);
  return a[o] || (a[o] = new IntersectionObserver(M4, P({ root: t }, r))), a[o];
}
function I4(e, t, r) {
  var n = L4(t);
  return ds.set(e, r), n.observe(e), function() {
    ds.delete(e), n.unobserve(e);
  };
}
function O4(e) {
  var t = e.visualElement, r = e.whileInView, n = e.onViewportEnter, a = e.onViewportLeave, o = e.viewport, i = o === void 0 ? {} : o, s = Fe({
    hasEnteredView: !1,
    isInView: !1
  }), l = !!(r || n || a);
  i.once && s.current.hasEnteredView && (l = !1);
  var c = typeof IntersectionObserver > "u" ? V4 : N4;
  c(l, s.current, t, i);
}
var z4 = {
  some: 0,
  all: 1
};
function N4(e, t, r, n) {
  var a = n.root, o = n.margin, i = n.amount, s = i === void 0 ? "some" : i, l = n.once;
  we(function() {
    if (e) {
      var c = {
        root: a == null ? void 0 : a.current,
        rootMargin: o,
        threshold: typeof s == "number" ? s : z4[s]
      }, u = function(d) {
        var f, m = d.isIntersecting;
        if (t.isInView !== m && (t.isInView = m, !(l && !m && t.hasEnteredView))) {
          m && (t.hasEnteredView = !0), (f = r.animationState) === null || f === void 0 || f.setActive(pe.InView, m);
          var p = r.getProps(), h = m ? p.onViewportEnter : p.onViewportLeave;
          h == null || h(d);
        }
      };
      return I4(r.getInstance(), c, u);
    }
  }, [e, a, o, s]);
}
function V4(e, t, r, n) {
  var a = n.fallback, o = a === void 0 ? !0 : a;
  we(function() {
    !e || !o || (Us !== "production" && qf(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
      var i;
      t.hasEnteredView = !0;
      var s = r.getProps().onViewportEnter;
      s == null || s(null), (i = r.animationState) === null || i === void 0 || i.setActive(pe.InView, !0);
    }));
  }, [e]);
}
var lr = function(e) {
  return function(t) {
    return e(t), null;
  };
}, F4 = {
  inView: lr(O4),
  tap: lr(P4),
  focus: lr(vx),
  hover: lr(Ex)
}, $4 = 0, D4 = function() {
  return $4++;
}, Gf = function() {
  return aa(D4);
};
function Zf() {
  var e = le(en);
  if (e === null)
    return [!0, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, a = Gf();
  we(function() {
    return n(a);
  }, []);
  var o = function() {
    return r == null ? void 0 : r(a);
  };
  return !t && r ? [!1, o] : [!0];
}
function B4() {
  return j4(le(en));
}
function j4(e) {
  return e === null ? !0 : e.isPresent;
}
function Kf(e, t) {
  if (!Array.isArray(t))
    return !1;
  var r = t.length;
  if (r !== e.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var bo = function(e) {
  return e * 1e3;
}, nu = {
  linear: ol,
  easeIn: il,
  easeInOut: Of,
  easeOut: Zx,
  circIn: zf,
  circInOut: Kx,
  circOut: sl,
  backIn: ll,
  backInOut: Jx,
  backOut: Xx,
  anticipate: Qx,
  bounceIn: n4,
  bounceInOut: a4,
  bounceOut: go
}, au = function(e) {
  if (Array.isArray(e)) {
    ut(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = _e(e, 4), r = t[0], n = t[1], a = t[2], o = t[3];
    return A4(r, n, a, o);
  } else if (typeof e == "string")
    return ut(nu[e] !== void 0, "Invalid easing type '".concat(e, "'")), nu[e];
  return e;
}, W4 = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}, ou = function(e, t) {
  return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
  Gt.test(t) && // And it contains numbers and/or colors
  !t.startsWith("url("));
}, vr = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
}, $a = function(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
}, Pi = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
}, H4 = function(e) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: e
  };
}, iu = {
  x: vr,
  y: vr,
  z: vr,
  rotate: vr,
  rotateX: vr,
  rotateY: vr,
  rotateZ: vr,
  scaleX: $a,
  scaleY: $a,
  scale: $a,
  opacity: Pi,
  backgroundColor: Pi,
  color: Pi,
  default: $a
}, U4 = function(e, t) {
  var r;
  return Un(t) ? r = H4 : r = iu[e] || iu.default, P({ to: t }, r(t));
}, Y4 = P(P({}, lf), {
  // Color props
  color: De,
  backgroundColor: De,
  outlineColor: De,
  fill: De,
  stroke: De,
  // Border props
  borderColor: De,
  borderTopColor: De,
  borderRightColor: De,
  borderBottomColor: De,
  borderLeftColor: De,
  filter: as,
  WebkitFilter: as
}), cl = function(e) {
  return Y4[e];
};
function ul(e, t) {
  var r, n = cl(e);
  return n !== as && (n = Gt), (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
function q4(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = ft(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var su = !1;
function G4(e) {
  var t = e.ease, r = e.times, n = e.yoyo, a = e.flip, o = e.loop, i = ft(e, ["ease", "times", "yoyo", "flip", "loop"]), s = P({}, i);
  return r && (s.offset = r), i.duration && (s.duration = bo(i.duration)), i.repeatDelay && (s.repeatDelay = bo(i.repeatDelay)), t && (s.ease = W4(t) ? t.map(au) : au(t)), i.type === "tween" && (s.type = "keyframes"), (n || o || a) && (na(!su, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), su = !0, n ? s.repeatType = "reverse" : o ? s.repeatType = "loop" : a && (s.repeatType = "mirror"), s.repeat = o || n || a || i.repeat), i.type !== "spring" && (s.type = "keyframes"), s;
}
function Z4(e, t) {
  var r, n, a = dl(e, t) || {};
  return (n = (r = a.delay) !== null && r !== void 0 ? r : e.delay) !== null && n !== void 0 ? n : 0;
}
function K4(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = Ct([], _e(e.to), !1), e.to[0] = e.from), e;
}
function X4(e, t, r) {
  var n;
  return Array.isArray(t.to) && ((n = e.duration) !== null && n !== void 0 || (e.duration = 0.8)), K4(t), q4(e) || (e = P(P({}, e), U4(r, t.to))), P(P({}, t), G4(e));
}
function J4(e, t, r, n, a) {
  var o, i = dl(n, e), s = (o = i.from) !== null && o !== void 0 ? o : t.get(), l = ou(e, r);
  s === "none" && l && typeof r == "string" ? s = ul(e, r) : lu(s) && typeof r == "string" ? s = cu(r) : !Array.isArray(r) && lu(r) && typeof s == "string" && (r = cu(s));
  var c = ou(e, s);
  na(c === l, "You are trying to animate ".concat(e, ' from "').concat(s, '" to "').concat(r, '". ').concat(s, " is not an animatable value - to enable this animation set ").concat(s, " to a value animatable to ").concat(r, " via the `style` property."));
  function u() {
    var f = {
      from: s,
      to: r,
      velocity: t.getVelocity(),
      onComplete: a,
      onUpdate: function(m) {
        return t.set(m);
      }
    };
    return i.type === "inertia" || i.type === "decay" ? x4(P(P({}, f), i)) : Df(P(P({}, X4(i, f, e)), { onUpdate: function(m) {
      var p;
      f.onUpdate(m), (p = i.onUpdate) === null || p === void 0 || p.call(i, m);
    }, onComplete: function() {
      var m;
      f.onComplete(), (m = i.onComplete) === null || m === void 0 || m.call(i);
    } }));
  }
  function d() {
    var f, m, p = gf(r);
    return t.set(p), a(), (f = i == null ? void 0 : i.onUpdate) === null || f === void 0 || f.call(i, p), (m = i == null ? void 0 : i.onComplete) === null || m === void 0 || m.call(i), { stop: function() {
    } };
  }
  return !c || !l || i.type === !1 ? d : u;
}
function lu(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function cu(e) {
  return typeof e == "number" ? 0 : ul("", e);
}
function dl(e, t) {
  return e[t] || e.default || e;
}
function fl(e, t, r, n) {
  return n === void 0 && (n = {}), t.start(function(a) {
    var o, i, s = J4(e, t, r, n, a), l = Z4(n, e), c = function() {
      return i = s();
    };
    return l ? o = window.setTimeout(c, bo(l)) : c(), function() {
      clearTimeout(o), i == null || i.stop();
    };
  });
}
var Q4 = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
}, e3 = function(e) {
  return /^0[^.\s]+$/.test(e);
};
const Xf = 1 / 60 * 1e3, t3 = typeof performance < "u" ? () => performance.now() : () => Date.now(), Jf = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(t3()), Xf);
function r3(e) {
  let t = [], r = [], n = 0, a = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    schedule: (l, c = !1, u = !1) => {
      const d = u && a, f = d ? t : r;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && a && (n = t.length)), l;
    },
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), i.delete(l);
    },
    process: (l) => {
      if (a) {
        o = !0;
        return;
      }
      if (a = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      a = !1, o && (o = !1, s.process(l));
    }
  };
  return s;
}
const n3 = 40;
let fs = !0, Gn = !1, ps = !1;
const Gr = {
  delta: 0,
  timestamp: 0
}, ca = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], $o = ca.reduce((e, t) => (e[t] = r3(() => Gn = !0), e), {}), Nt = ca.reduce((e, t) => {
  const r = $o[t];
  return e[t] = (n, a = !1, o = !1) => (Gn || o3(), r.schedule(n, a, o)), e;
}, {}), Zn = ca.reduce((e, t) => (e[t] = $o[t].cancel, e), {}), Ri = ca.reduce((e, t) => (e[t] = () => $o[t].process(Gr), e), {}), a3 = (e) => $o[e].process(Gr), Qf = (e) => {
  Gn = !1, Gr.delta = fs ? Xf : Math.max(Math.min(e - Gr.timestamp, n3), 1), Gr.timestamp = e, ps = !0, ca.forEach(a3), ps = !1, Gn && (fs = !1, Jf(Qf));
}, o3 = () => {
  Gn = !0, fs = !0, ps || Jf(Qf);
}, ms = () => Gr;
function pl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ml(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var Rn = (
  /** @class */
  function() {
    function e() {
      this.subscriptions = [];
    }
    return e.prototype.add = function(t) {
      var r = this;
      return pl(this.subscriptions, t), function() {
        return ml(r.subscriptions, t);
      };
    }, e.prototype.notify = function(t, r, n) {
      var a = this.subscriptions.length;
      if (a)
        if (a === 1)
          this.subscriptions[0](t, r, n);
        else
          for (var o = 0; o < a; o++) {
            var i = this.subscriptions[o];
            i && i(t, r, n);
          }
    }, e.prototype.getSize = function() {
      return this.subscriptions.length;
    }, e.prototype.clear = function() {
      this.subscriptions.length = 0;
    }, e;
  }()
), i3 = function(e) {
  return !isNaN(parseFloat(e));
}, s3 = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Rn(), this.velocityUpdateSubscribers = new Rn(), this.renderSubscribers = new Rn(), this.canTrackVelocity = !1, this.updateAndNotify = function(n, a) {
        a === void 0 && (a = !0), r.prev = r.current, r.current = n;
        var o = ms(), i = o.delta, s = o.timestamp;
        r.lastUpdated !== s && (r.timeDelta = i, r.lastUpdated = s, Nt.postRender(r.scheduleVelocityCheck)), r.prev !== r.current && r.updateSubscribers.notify(r.current), r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()), a && r.renderSubscribers.notify(r.current);
      }, this.scheduleVelocityCheck = function() {
        return Nt.postRender(r.velocityCheck);
      }, this.velocityCheck = function(n) {
        var a = n.timestamp;
        a !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()));
      }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = i3(this.current);
    }
    return e.prototype.onChange = function(t) {
      return this.updateSubscribers.add(t);
    }, e.prototype.clearListeners = function() {
      this.updateSubscribers.clear();
    }, e.prototype.onRenderRequest = function(t) {
      return t(this.get()), this.renderSubscribers.add(t);
    }, e.prototype.attach = function(t) {
      this.passiveEffect = t;
    }, e.prototype.set = function(t, r) {
      r === void 0 && (r = !0), !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
    }, e.prototype.get = function() {
      return this.current;
    }, e.prototype.getPrevious = function() {
      return this.prev;
    }, e.prototype.getVelocity = function() {
      return this.canTrackVelocity ? (
        // These casts could be avoided if parseFloat would be typed better
        Bf(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      ) : 0;
    }, e.prototype.start = function(t) {
      var r = this;
      return this.stop(), new Promise(function(n) {
        r.hasAnimated = !0, r.stopAnimation = t(n);
      }).then(function() {
        return r.clearAnimation();
      });
    }, e.prototype.stop = function() {
      this.stopAnimation && this.stopAnimation(), this.clearAnimation();
    }, e.prototype.isAnimating = function() {
      return !!this.stopAnimation;
    }, e.prototype.clearAnimation = function() {
      this.stopAnimation = null;
    }, e.prototype.destroy = function() {
      this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
    }, e;
  }()
);
function Jr(e) {
  return new s3(e);
}
var e0 = function(e) {
  return function(t) {
    return t.test(e);
  };
}, l3 = {
  test: function(e) {
    return e === "auto";
  },
  parse: function(e) {
    return e;
  }
}, t0 = [Er, j, zt, nr, BS, DS, l3], gn = function(e) {
  return t0.find(e0(e));
}, c3 = Ct(Ct([], _e(t0), !1), [De, Gt], !1), u3 = function(e) {
  return c3.find(e0(e));
};
function d3(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Jr(r));
}
function f3(e, t) {
  var r = Io(e, t), n = r ? e.makeTargetAnimatable(r, !1) : {}, a = n.transitionEnd, o = a === void 0 ? {} : a;
  n.transition;
  var i = ft(n, ["transitionEnd", "transition"]);
  i = P(P({}, i), o);
  for (var s in i) {
    var l = gf(i[s]);
    d3(e, s, l);
  }
}
function p3(e, t, r) {
  var n, a, o, i, s = Object.keys(t).filter(function(m) {
    return !e.hasValue(m);
  }), l = s.length;
  if (l)
    for (var c = 0; c < l; c++) {
      var u = s[c], d = t[u], f = null;
      Array.isArray(d) && (f = d[0]), f === null && (f = (a = (n = r[u]) !== null && n !== void 0 ? n : e.readValue(u)) !== null && a !== void 0 ? a : t[u]), f != null && (typeof f == "string" && (Q4(f) || e3(f)) ? f = parseFloat(f) : !u3(f) && Gt.test(d) && (f = ul(u, d)), e.addValue(u, Jr(f)), (o = (i = r)[u]) !== null && o !== void 0 || (i[u] = f), e.setBaseTarget(u, f));
    }
}
function m3(e, t) {
  if (t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function v3(e, t, r) {
  var n, a, o = {};
  for (var i in e)
    o[i] = (n = m3(i, t)) !== null && n !== void 0 ? n : (a = r.getValue(i)) === null || a === void 0 ? void 0 : a.get();
  return o;
}
function h3(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart(t);
  var n;
  if (Array.isArray(t)) {
    var a = t.map(function(i) {
      return vs(e, i, r);
    });
    n = Promise.all(a);
  } else if (typeof t == "string")
    n = vs(e, t, r);
  else {
    var o = typeof t == "function" ? Io(e, t, r.custom) : t;
    n = r0(e, o, r);
  }
  return n.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function vs(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var a = Io(e, t, r.custom), o = (a || {}).transition, i = o === void 0 ? e.getDefaultTransition() || {} : o;
  r.transitionOverride && (i = r.transitionOverride);
  var s = a ? function() {
    return r0(e, a, r);
  } : function() {
    return Promise.resolve();
  }, l = !((n = e.variantChildren) === null || n === void 0) && n.size ? function(m) {
    m === void 0 && (m = 0);
    var p = i.delayChildren, h = p === void 0 ? 0 : p, x = i.staggerChildren, C = i.staggerDirection;
    return g3(e, t, h + m, x, C, r);
  } : function() {
    return Promise.resolve();
  }, c = i.when;
  if (c) {
    var u = _e(c === "beforeChildren" ? [s, l] : [l, s], 2), d = u[0], f = u[1];
    return d().then(f);
  } else
    return Promise.all([s(), l(r.delay)]);
}
function r0(e, t, r) {
  var n, a = r === void 0 ? {} : r, o = a.delay, i = o === void 0 ? 0 : o, s = a.transitionOverride, l = a.type, c = e.makeTargetAnimatable(t), u = c.transition, d = u === void 0 ? e.getDefaultTransition() : u, f = c.transitionEnd, m = ft(c, ["transition", "transitionEnd"]);
  s && (d = s);
  var p = [], h = l && ((n = e.animationState) === null || n === void 0 ? void 0 : n.getState()[l]);
  for (var x in m) {
    var C = e.getValue(x), _ = m[x];
    if (!(!C || _ === void 0 || h && b3(h, x))) {
      var k = P({ delay: i }, d);
      e.shouldReduceMotion && oa(x) && (k = P(P({}, k), { type: !1, delay: 0 }));
      var T = fl(x, C, _, k);
      p.push(T);
    }
  }
  return Promise.all(p).then(function() {
    f && f3(e, f);
  });
}
function g3(e, t, r, n, a, o) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), a === void 0 && (a = 1);
  var i = [], s = (e.variantChildren.size - 1) * n, l = a === 1 ? function(c) {
    return c === void 0 && (c = 0), c * n;
  } : function(c) {
    return c === void 0 && (c = 0), s - c * n;
  };
  return Array.from(e.variantChildren).sort(y3).forEach(function(c, u) {
    i.push(vs(c, t, P(P({}, o), { delay: r + l(u) })).then(function() {
      return c.notifyAnimationComplete(t);
    }));
  }), Promise.all(i);
}
function y3(e, t) {
  return e.sortNodePosition(t);
}
function b3(e, t) {
  var r = e.protectedKeys, n = e.needsAnimating, a = r.hasOwnProperty(t) && n[t] !== !0;
  return n[t] = !1, a;
}
var vl = [
  pe.Animate,
  pe.InView,
  pe.Focus,
  pe.Hover,
  pe.Tap,
  pe.Drag,
  pe.Exit
], S3 = Ct([], _e(vl), !1).reverse(), x3 = vl.length;
function C3(e) {
  return function(t) {
    return Promise.all(t.map(function(r) {
      var n = r.animation, a = r.options;
      return h3(e, n, a);
    }));
  };
}
function w3(e) {
  var t = C3(e), r = E3(), n = {}, a = !0, o = function(u, d) {
    var f = Io(e, d);
    if (f) {
      f.transition;
      var m = f.transitionEnd, p = ft(f, ["transition", "transitionEnd"]);
      u = P(P(P({}, u), p), m);
    }
    return u;
  };
  function i(u) {
    return n[u] !== void 0;
  }
  function s(u) {
    t = u(e);
  }
  function l(u, d) {
    for (var f, m = e.getProps(), p = e.getVariantContext(!0) || {}, h = [], x = /* @__PURE__ */ new Set(), C = {}, _ = 1 / 0, k = function(R) {
      var z = S3[R], V = r[z], Y = (f = m[z]) !== null && f !== void 0 ? f : p[z], Se = yt(Y), fe = z === d ? V.isActive : null;
      fe === !1 && (_ = R);
      var se = Y === p[z] && Y !== m[z] && Se;
      if (se && a && e.manuallyAnimateOnMount && (se = !1), V.protectedKeys = P({}, C), // If it isn't active and hasn't *just* been set as inactive
      !V.isActive && fe === null || // If we didn't and don't have any defined prop for this animation type
      !Y && !V.prevProp || // Or if the prop doesn't define an animation
      el(Y) || typeof Y == "boolean")
        return "continue";
      var he = _3(V.prevProp, Y), Ee = he || // If we're making this variant active, we want to always make it active
      z === d && V.isActive && !se && Se || // If we removed a higher-priority variant (i is in reverse order)
      R > _ && Se, $e = Array.isArray(Y) ? Y : [Y], Pe = $e.reduce(o, {});
      fe === !1 && (Pe = {});
      var Je = V.prevResolvedValues, Qe = Je === void 0 ? {} : Je, ot = P(P({}, Qe), Pe), et = function(D) {
        Ee = !0, x.delete(D), V.needsAnimating[D] = !0;
      };
      for (var ke in ot) {
        var N = Pe[ke], L = Qe[ke];
        C.hasOwnProperty(ke) || (N !== L ? Un(N) && Un(L) ? !Kf(N, L) || he ? et(ke) : V.protectedKeys[ke] = !0 : N !== void 0 ? et(ke) : x.add(ke) : N !== void 0 && x.has(ke) ? et(ke) : V.protectedKeys[ke] = !0);
      }
      V.prevProp = Y, V.prevResolvedValues = Pe, V.isActive && (C = P(P({}, C), Pe)), a && e.blockInitialAnimation && (Ee = !1), Ee && !se && h.push.apply(h, Ct([], _e($e.map(function(D) {
        return {
          animation: D,
          options: P({ type: z }, u)
        };
      })), !1));
    }, T = 0; T < x3; T++)
      k(T);
    if (n = P({}, C), x.size) {
      var w = {};
      x.forEach(function(R) {
        var z = e.getBaseTarget(R);
        z !== void 0 && (w[R] = z);
      }), h.push({ animation: w });
    }
    var I = !!h.length;
    return a && m.initial === !1 && !e.manuallyAnimateOnMount && (I = !1), a = !1, I ? t(h) : Promise.resolve();
  }
  function c(u, d, f) {
    var m;
    if (r[u].isActive === d)
      return Promise.resolve();
    (m = e.variantChildren) === null || m === void 0 || m.forEach(function(x) {
      var C;
      return (C = x.animationState) === null || C === void 0 ? void 0 : C.setActive(u, d);
    }), r[u].isActive = d;
    var p = l(f, u);
    for (var h in r)
      r[h].protectedKeys = {};
    return p;
  }
  return {
    isAnimated: i,
    animateChanges: l,
    setActive: c,
    setAnimateFunction: s,
    getState: function() {
      return r;
    }
  };
}
function _3(e, t) {
  return typeof t == "string" ? t !== e : qd(t) ? !Kf(t, e) : !1;
}
function hr(e) {
  return e === void 0 && (e = !1), {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function E3() {
  var e;
  return e = {}, e[pe.Animate] = hr(!0), e[pe.InView] = hr(), e[pe.Hover] = hr(), e[pe.Tap] = hr(), e[pe.Drag] = hr(), e[pe.Focus] = hr(), e[pe.Exit] = hr(), e;
}
var k3 = {
  animation: lr(function(e) {
    var t = e.visualElement, r = e.animate;
    t.animationState || (t.animationState = w3(t)), el(r) && we(function() {
      return r.subscribe(t);
    }, [r]);
  }),
  exit: lr(function(e) {
    var t = e.custom, r = e.visualElement, n = _e(Zf(), 2), a = n[0], o = n[1], i = le(en);
    we(function() {
      var s, l;
      r.isPresent = a;
      var c = (s = r.animationState) === null || s === void 0 ? void 0 : s.setActive(pe.Exit, !a, { custom: (l = i == null ? void 0 : i.custom) !== null && l !== void 0 ? l : t });
      !a && (c == null || c.then(o));
    }, [a]);
  })
}, n0 = (
  /** @class */
  function() {
    function e(t, r, n) {
      var a = this, o = n === void 0 ? {} : n, i = o.transformPagePoint;
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
        if (a.lastMoveEvent && a.lastMoveEventInfo) {
          var f = Li(a.lastMoveEventInfo, a.history), m = a.startEvent !== null, p = jf(f.offset, { x: 0, y: 0 }) >= 3;
          if (!(!m && !p)) {
            var h = f.point, x = ms().timestamp;
            a.history.push(P(P({}, h), { timestamp: x }));
            var C = a.handlers, _ = C.onStart, k = C.onMove;
            m || (_ && _(a.lastMoveEvent, f), a.startEvent = a.lastMoveEvent), k && k(a.lastMoveEvent, f);
          }
        }
      }, this.handlePointerMove = function(f, m) {
        if (a.lastMoveEvent = f, a.lastMoveEventInfo = Mi(m, a.transformPagePoint), bf(f) && f.buttons === 0) {
          a.handlePointerUp(f, m);
          return;
        }
        Nt.update(a.updatePoint, !0);
      }, this.handlePointerUp = function(f, m) {
        a.end();
        var p = a.handlers, h = p.onEnd, x = p.onSessionEnd, C = Li(Mi(m, a.transformPagePoint), a.history);
        a.startEvent && h && h(f, C), x && x(f, C);
      }, !(Sf(t) && t.touches.length > 1)) {
        this.handlers = r, this.transformPagePoint = i;
        var s = tl(t), l = Mi(s, this.transformPagePoint), c = l.point, u = ms().timestamp;
        this.history = [P(P({}, c), { timestamp: u })];
        var d = r.onSessionStart;
        d && d(t, Li(l, this.history)), this.removeListeners = No(Yr(window, "pointermove", this.handlePointerMove), Yr(window, "pointerup", this.handlePointerUp), Yr(window, "pointercancel", this.handlePointerUp));
      }
    }
    return e.prototype.updateHandlers = function(t) {
      this.handlers = t;
    }, e.prototype.end = function() {
      this.removeListeners && this.removeListeners(), Zn.update(this.updatePoint);
    }, e;
  }()
);
function Mi(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uu(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Li(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: uu(r, a0(t)),
    offset: uu(r, T3(t)),
    velocity: A3(t, 0.1)
  };
}
function T3(e) {
  return e[0];
}
function a0(e) {
  return e[e.length - 1];
}
function A3(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var r = e.length - 1, n = null, a = a0(e); r >= 0 && (n = e[r], !(a.timestamp - n.timestamp > bo(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  var o = (a.timestamp - n.timestamp) / 1e3;
  if (o === 0)
    return { x: 0, y: 0 };
  var i = {
    x: (a.x - n.x) / o,
    y: (a.y - n.y) / o
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Zt(e) {
  return e.max - e.min;
}
function du(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), jf(e, t) < r;
}
function fu(e, t, r, n) {
  n === void 0 && (n = 0.5), e.origin = n, e.originPoint = Ce(t.min, t.max, e.origin), e.scale = Zt(r) / Zt(t), (du(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ce(r.min, r.max, e.origin) - e.originPoint, (du(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Mn(e, t, r, n) {
  fu(e.x, t.x, r.x, n == null ? void 0 : n.originX), fu(e.y, t.y, r.y, n == null ? void 0 : n.originY);
}
function pu(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Zt(t);
}
function P3(e, t, r) {
  pu(e.x, t.x, r.x), pu(e.y, t.y, r.y);
}
function mu(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Zt(t);
}
function Ln(e, t, r) {
  mu(e.x, t.x, r.x), mu(e.y, t.y, r.y);
}
function R3(e, t, r) {
  var n = t.min, a = t.max;
  return n !== void 0 && e < n ? e = r ? Ce(n, e, r.min) : Math.max(e, n) : a !== void 0 && e > a && (e = r ? Ce(a, e, r.max) : Math.min(e, a)), e;
}
function vu(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function M3(e, t) {
  var r = t.top, n = t.left, a = t.bottom, o = t.right;
  return {
    x: vu(e.x, n, o),
    y: vu(e.y, r, a)
  };
}
function hu(e, t) {
  var r, n = t.min - e.min, a = t.max - e.max;
  return t.max - t.min < e.max - e.min && (r = _e([a, n], 2), n = r[0], a = r[1]), { min: n, max: a };
}
function L3(e, t) {
  return {
    x: hu(e.x, t.x),
    y: hu(e.y, t.y)
  };
}
function I3(e, t) {
  var r = 0.5, n = Zt(e), a = Zt(t);
  return a > n ? r = Yn(t.min, t.max - n, e.min) : n > a && (r = Yn(e.min, e.max - a, t.min)), ho(0, 1, r);
}
function O3(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
var hs = 0.35;
function z3(e) {
  return e === void 0 && (e = hs), e === !1 ? e = 0 : e === !0 && (e = hs), {
    x: gu(e, "left", "right"),
    y: gu(e, "top", "bottom")
  };
}
function gu(e, t, r) {
  return {
    min: yu(e, t),
    max: yu(e, r)
  };
}
function yu(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
var bu = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
}, In = function() {
  return {
    x: bu(),
    y: bu()
  };
}, Su = function() {
  return { min: 0, max: 0 };
}, Ve = function() {
  return {
    x: Su(),
    y: Su()
  };
};
function Tt(e) {
  return [e("x"), e("y")];
}
function o0(e) {
  var t = e.top, r = e.left, n = e.right, a = e.bottom;
  return {
    x: { min: r, max: n },
    y: { min: t, max: a }
  };
}
function N3(e) {
  var t = e.x, r = e.y;
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function V3(e, t) {
  if (!t)
    return e;
  var r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function Ii(e) {
  return e === void 0 || e === 1;
}
function i0(e) {
  var t = e.scale, r = e.scaleX, n = e.scaleY;
  return !Ii(t) || !Ii(r) || !Ii(n);
}
function ar(e) {
  return i0(e) || xu(e.x) || xu(e.y) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function xu(e) {
  return e && e !== "0%";
}
function So(e, t, r) {
  var n = e - r, a = t * n;
  return r + a;
}
function Cu(e, t, r, n, a) {
  return a !== void 0 && (e = So(e, a, n)), So(e, r, n) + t;
}
function gs(e, t, r, n, a) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), e.min = Cu(e.min, t, r, n, a), e.max = Cu(e.max, t, r, n, a);
}
function s0(e, t) {
  var r = t.x, n = t.y;
  gs(e.x, r.translate, r.scale, r.originPoint), gs(e.y, n.translate, n.scale, n.originPoint);
}
function F3(e, t, r, n) {
  var a, o;
  n === void 0 && (n = !1);
  var i = r.length;
  if (i) {
    t.x = t.y = 1;
    for (var s, l, c = 0; c < i; c++)
      s = r[c], l = s.projectionDelta, ((o = (a = s.instance) === null || a === void 0 ? void 0 : a.style) === null || o === void 0 ? void 0 : o.display) !== "contents" && (n && s.options.layoutScroll && s.scroll && s !== s.root && Fr(e, { x: -s.scroll.x, y: -s.scroll.y }), l && (t.x *= l.x.scale, t.y *= l.y.scale, s0(e, l)), n && ar(s.latestValues) && Fr(e, s.latestValues));
  }
}
function or(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function wu(e, t, r) {
  var n = _e(r, 3), a = n[0], o = n[1], i = n[2], s = t[i] !== void 0 ? t[i] : 0.5, l = Ce(e.min, e.max, s);
  gs(e, t[a], t[o], l, t.scale);
}
var $3 = ["x", "scaleX", "originX"], D3 = ["y", "scaleY", "originY"];
function Fr(e, t) {
  wu(e.x, t, $3), wu(e.y, t, D3);
}
function l0(e, t) {
  return o0(V3(e.getBoundingClientRect(), t));
}
function B3(e, t, r) {
  var n = l0(e, r), a = t.scroll;
  return a && (or(n.x, a.x), or(n.y, a.y)), n;
}
var j3 = /* @__PURE__ */ new WeakMap(), W3 = (
  /** @class */
  function() {
    function e(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ve(), this.visualElement = t;
    }
    return e.prototype.start = function(t, r) {
      var n = this, a = r === void 0 ? {} : r, o = a.snapToCursor, i = o === void 0 ? !1 : o;
      if (this.visualElement.isPresent !== !1) {
        var s = function(d) {
          n.stopAnimation(), i && n.snapToCursor(tl(d, "page").point);
        }, l = function(d, f) {
          var m, p = n.getProps(), h = p.drag, x = p.dragPropagation, C = p.onDragStart;
          h && !x && (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = _f(h), !n.openGlobalLock) || (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), Tt(function(_) {
            var k, T, w = n.getAxisMotionValue(_).get() || 0;
            if (zt.test(w)) {
              var I = (T = (k = n.visualElement.projection) === null || k === void 0 ? void 0 : k.layout) === null || T === void 0 ? void 0 : T.actual[_];
              if (I) {
                var R = Zt(I);
                w = R * (parseFloat(w) / 100);
              }
            }
            n.originPoint[_] = w;
          }), C == null || C(d, f), (m = n.visualElement.animationState) === null || m === void 0 || m.setActive(pe.Drag, !0));
        }, c = function(d, f) {
          var m = n.getProps(), p = m.dragPropagation, h = m.dragDirectionLock, x = m.onDirectionLock, C = m.onDrag;
          if (!(!p && !n.openGlobalLock)) {
            var _ = f.offset;
            if (h && n.currentDirection === null) {
              n.currentDirection = H3(_), n.currentDirection !== null && (x == null || x(n.currentDirection));
              return;
            }
            n.updateAxis("x", f.point, _), n.updateAxis("y", f.point, _), n.visualElement.syncRender(), C == null || C(d, f);
          }
        }, u = function(d, f) {
          return n.stop(d, f);
        };
        this.panSession = new n0(t, {
          onSessionStart: s,
          onStart: l,
          onMove: c,
          onSessionEnd: u
        }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
      }
    }, e.prototype.stop = function(t, r) {
      var n = this.isDragging;
      if (this.cancel(), !!n) {
        var a = r.velocity;
        this.startAnimation(a);
        var o = this.getProps().onDragEnd;
        o == null || o(t, r);
      }
    }, e.prototype.cancel = function() {
      var t, r;
      this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
      var n = this.getProps().dragPropagation;
      !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (r = this.visualElement.animationState) === null || r === void 0 || r.setActive(pe.Drag, !1);
    }, e.prototype.updateAxis = function(t, r, n) {
      var a = this.getProps().drag;
      if (!(!n || !Da(t, a, this.currentDirection))) {
        var o = this.getAxisMotionValue(t), i = this.originPoint[t] + n[t];
        this.constraints && this.constraints[t] && (i = R3(i, this.constraints[t], this.elastic[t])), o.set(i);
      }
    }, e.prototype.resolveConstraints = function() {
      var t = this, r = this.getProps(), n = r.dragConstraints, a = r.dragElastic, o = (this.visualElement.projection || {}).layout, i = this.constraints;
      n && Vr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = M3(o.actual, n) : this.constraints = !1, this.elastic = z3(a), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Tt(function(s) {
        t.getAxisMotionValue(s) && (t.constraints[s] = O3(o.actual[s], t.constraints[s]));
      });
    }, e.prototype.resolveRefConstraints = function() {
      var t = this.getProps(), r = t.dragConstraints, n = t.onMeasureDragConstraints;
      if (!r || !Vr(r))
        return !1;
      var a = r.current;
      ut(a !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      var o = this.visualElement.projection;
      if (!o || !o.layout)
        return !1;
      var i = B3(a, o.root, this.visualElement.getTransformPagePoint()), s = L3(o.layout.actual, i);
      if (n) {
        var l = n(N3(s));
        this.hasMutatedConstraints = !!l, l && (s = o0(l));
      }
      return s;
    }, e.prototype.startAnimation = function(t) {
      var r = this, n = this.getProps(), a = n.drag, o = n.dragMomentum, i = n.dragElastic, s = n.dragTransition, l = n.dragSnapToOrigin, c = n.onDragTransitionEnd, u = this.constraints || {}, d = Tt(function(f) {
        var m;
        if (Da(f, a, r.currentDirection)) {
          var p = (m = u == null ? void 0 : u[f]) !== null && m !== void 0 ? m : {};
          l && (p = { min: 0, max: 0 });
          var h = i ? 200 : 1e6, x = i ? 40 : 1e7, C = P(P({ type: "inertia", velocity: o ? t[f] : 0, bounceStiffness: h, bounceDamping: x, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), p);
          return r.startAxisValueAnimation(f, C);
        }
      });
      return Promise.all(d).then(c);
    }, e.prototype.startAxisValueAnimation = function(t, r) {
      var n = this.getAxisMotionValue(t);
      return fl(t, n, 0, r);
    }, e.prototype.stopAnimation = function() {
      var t = this;
      Tt(function(r) {
        return t.getAxisMotionValue(r).stop();
      });
    }, e.prototype.getAxisMotionValue = function(t) {
      var r, n, a = "_drag" + t.toUpperCase(), o = this.visualElement.getProps()[a];
      return o || this.visualElement.getValue(t, (n = (r = this.visualElement.getProps().initial) === null || r === void 0 ? void 0 : r[t]) !== null && n !== void 0 ? n : 0);
    }, e.prototype.snapToCursor = function(t) {
      var r = this;
      Tt(function(n) {
        var a = r.getProps().drag;
        if (Da(n, a, r.currentDirection)) {
          var o = r.visualElement.projection, i = r.getAxisMotionValue(n);
          if (o && o.layout) {
            var s = o.layout.actual[n], l = s.min, c = s.max;
            i.set(t[n] - Ce(l, c, 0.5));
          }
        }
      });
    }, e.prototype.scalePositionWithinConstraints = function() {
      var t = this, r, n = this.getProps(), a = n.drag, o = n.dragConstraints, i = this.visualElement.projection;
      if (!(!Vr(o) || !i || !this.constraints)) {
        this.stopAnimation();
        var s = { x: 0, y: 0 };
        Tt(function(c) {
          var u = t.getAxisMotionValue(c);
          if (u) {
            var d = u.get();
            s[c] = I3({ min: d, max: d }, t.constraints[c]);
          }
        });
        var l = this.visualElement.getProps().transformTemplate;
        this.visualElement.getInstance().style.transform = l ? l({}, "") : "none", (r = i.root) === null || r === void 0 || r.updateScroll(), i.updateLayout(), this.resolveConstraints(), Tt(function(c) {
          if (Da(c, a, null)) {
            var u = t.getAxisMotionValue(c), d = t.constraints[c], f = d.min, m = d.max;
            u.set(Ce(f, m, s[c]));
          }
        });
      }
    }, e.prototype.addListeners = function() {
      var t = this, r;
      j3.set(this.visualElement, this);
      var n = this.visualElement.getInstance(), a = Yr(n, "pointerdown", function(c) {
        var u = t.getProps(), d = u.drag, f = u.dragListener, m = f === void 0 ? !0 : f;
        d && m && t.start(c);
      }), o = function() {
        var c = t.getProps().dragConstraints;
        Vr(c) && (t.constraints = t.resolveRefConstraints());
      }, i = this.visualElement.projection, s = i.addEventListener("measure", o);
      i && !i.layout && ((r = i.root) === null || r === void 0 || r.updateScroll(), i.updateLayout()), o();
      var l = zo(window, "resize", function() {
        return t.scalePositionWithinConstraints();
      });
      return i.addEventListener("didUpdate", function(c) {
        var u = c.delta, d = c.hasLayoutChanged;
        t.isDragging && d && (Tt(function(f) {
          var m = t.getAxisMotionValue(f);
          m && (t.originPoint[f] += u[f].translate, m.set(m.get() + u[f].translate));
        }), t.visualElement.syncRender());
      }), function() {
        l(), a(), s();
      };
    }, e.prototype.getProps = function() {
      var t = this.visualElement.getProps(), r = t.drag, n = r === void 0 ? !1 : r, a = t.dragDirectionLock, o = a === void 0 ? !1 : a, i = t.dragPropagation, s = i === void 0 ? !1 : i, l = t.dragConstraints, c = l === void 0 ? !1 : l, u = t.dragElastic, d = u === void 0 ? hs : u, f = t.dragMomentum, m = f === void 0 ? !0 : f;
      return P(P({}, t), { drag: n, dragDirectionLock: o, dragPropagation: s, dragConstraints: c, dragElastic: d, dragMomentum: m });
    }, e;
  }()
);
function Da(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function H3(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function U3(e) {
  var t = e.dragControls, r = e.visualElement, n = aa(function() {
    return new W3(r);
  });
  we(function() {
    return t && t.subscribe(n);
  }, [n, t]), we(function() {
    return n.addListeners();
  }, [n]);
}
function Y3(e) {
  var t = e.onPan, r = e.onPanStart, n = e.onPanEnd, a = e.onPanSessionStart, o = e.visualElement, i = t || r || n || a, s = Fe(null), l = le(Ys).transformPagePoint, c = {
    onSessionStart: a,
    onStart: r,
    onMove: t,
    onEnd: function(d, f) {
      s.current = null, n && n(d, f);
    }
  };
  we(function() {
    s.current !== null && s.current.updateHandlers(c);
  });
  function u(d) {
    s.current = new n0(d, c, {
      transformPagePoint: l
    });
  }
  vo(o, "pointerdown", i && u), rl(function() {
    return s.current && s.current.end();
  });
}
var q3 = {
  pan: lr(Y3),
  drag: lr(U3)
}, Ba = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function G3() {
  var e = Ba.map(function() {
    return new Rn();
  }), t = {}, r = {
    clearAllListeners: function() {
      return e.forEach(function(n) {
        return n.clear();
      });
    },
    updatePropListeners: function(n) {
      Ba.forEach(function(a) {
        var o, i = "on" + a, s = n[i];
        (o = t[a]) === null || o === void 0 || o.call(t), s && (t[a] = r[i](s));
      });
    }
  };
  return e.forEach(function(n, a) {
    r["on" + Ba[a]] = function(o) {
      return n.add(o);
    }, r["notify" + Ba[a]] = function() {
      for (var o = [], i = 0; i < arguments.length; i++)
        o[i] = arguments[i];
      return n.notify.apply(n, Ct([], _e(o), !1));
    };
  }), r;
}
function Z3(e, t, r) {
  var n;
  for (var a in t) {
    var o = t[a], i = r[a];
    if (qt(o))
      e.addValue(a, o), process.env.NODE_ENV === "development" && qf(o.version === "6.5.1", "Attempting to mix Framer Motion versions ".concat(o.version, " with 6.5.1 may not work as expected."));
    else if (qt(i))
      e.addValue(a, Jr(o));
    else if (i !== o)
      if (e.hasValue(a)) {
        var s = e.getValue(a);
        !s.hasAnimated && s.set(o);
      } else
        e.addValue(a, Jr((n = e.getStaticValue(a)) !== null && n !== void 0 ? n : o));
  }
  for (var a in r)
    t[a] === void 0 && e.removeValue(a);
  return t;
}
var c0 = function(e) {
  var t = e.treeType, r = t === void 0 ? "" : t, n = e.build, a = e.getBaseTarget, o = e.makeTargetAnimatable, i = e.measureViewportBox, s = e.render, l = e.readValueFromInstance, c = e.removeValueFromRenderState, u = e.sortNodePosition, d = e.scrapeMotionValuesFromProps;
  return function(f, m) {
    var p = f.parent, h = f.props, x = f.presenceId, C = f.blockInitialAnimation, _ = f.visualState, k = f.shouldReduceMotion;
    m === void 0 && (m = {});
    var T = !1, w = _.latestValues, I = _.renderState, R, z = G3(), V = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), Se = {}, fe = P({}, w), se;
    function he() {
      !R || !T || (Ee(), s(R, I, h.style, N.projection));
    }
    function Ee() {
      n(N, I, w, m, h);
    }
    function $e() {
      z.notifyUpdate(w);
    }
    function Pe(L, D) {
      var ue = D.onChange(function(Le) {
        w[L] = Le, h.onUpdate && Nt.update($e, !1, !0);
      }), He = D.onRenderRequest(N.scheduleRender);
      Y.set(L, function() {
        ue(), He();
      });
    }
    var Je = d(h);
    for (var Qe in Je) {
      var ot = Je[Qe];
      w[Qe] !== void 0 && qt(ot) && ot.set(w[Qe], !1);
    }
    var et = Oo(h), ke = Zd(h), N = P(P({
      treeType: r,
      /**
       * This is a mirror of the internal instance prop, which keeps
       * VisualElement type-compatible with React's RefObject.
       */
      current: null,
      /**
       * The depth of this visual element within the visual element tree.
       */
      depth: p ? p.depth + 1 : 0,
      parent: p,
      children: /* @__PURE__ */ new Set(),
      /**
       *
       */
      presenceId: x,
      shouldReduceMotion: k,
      /**
       * If this component is part of the variant tree, it should track
       * any children that are also part of the tree. This is essentially
       * a shadow tree to simplify logic around how to stagger over children.
       */
      variantChildren: ke ? /* @__PURE__ */ new Set() : void 0,
      /**
       * Whether this instance is visible. This can be changed imperatively
       * by the projection tree, is analogous to CSS's visibility in that
       * hidden elements should take up layout, and needs enacting by the configured
       * render function.
       */
      isVisible: void 0,
      /**
       * Normally, if a component is controlled by a parent's variants, it can
       * rely on that ancestor to trigger animations further down the tree.
       * However, if a component is created after its parent is mounted, the parent
       * won't trigger that mount animation so the child needs to.
       *
       * TODO: This might be better replaced with a method isParentMounted
       */
      manuallyAnimateOnMount: !!(p != null && p.isMounted()),
      /**
       * This can be set by AnimatePresence to force components that mount
       * at the same time as it to mount as if they have initial={false} set.
       */
      blockInitialAnimation: C,
      /**
       * Determine whether this component has mounted yet. This is mostly used
       * by variant children to determine whether they need to trigger their
       * own animations on mount.
       */
      isMounted: function() {
        return !!R;
      },
      mount: function(L) {
        T = !0, R = N.current = L, N.projection && N.projection.mount(L), ke && p && !et && (se = p == null ? void 0 : p.addVariantChild(N)), V.forEach(function(D, ue) {
          return Pe(ue, D);
        }), p == null || p.children.add(N), N.setProps(h);
      },
      /**
       *
       */
      unmount: function() {
        var L;
        (L = N.projection) === null || L === void 0 || L.unmount(), Zn.update($e), Zn.render(he), Y.forEach(function(D) {
          return D();
        }), se == null || se(), p == null || p.children.delete(N), z.clearAllListeners(), R = void 0, T = !1;
      },
      /**
       * Add a child visual element to our set of children.
       */
      addVariantChild: function(L) {
        var D, ue = N.getClosestVariantNode();
        if (ue)
          return (D = ue.variantChildren) === null || D === void 0 || D.add(L), function() {
            return ue.variantChildren.delete(L);
          };
      },
      sortNodePosition: function(L) {
        return !u || r !== L.treeType ? 0 : u(N.getInstance(), L.getInstance());
      },
      /**
       * Returns the closest variant node in the tree starting from
       * this visual element.
       */
      getClosestVariantNode: function() {
        return ke ? N : p == null ? void 0 : p.getClosestVariantNode();
      },
      /**
       * Expose the latest layoutId prop.
       */
      getLayoutId: function() {
        return h.layoutId;
      },
      /**
       * Returns the current instance.
       */
      getInstance: function() {
        return R;
      },
      /**
       * Get/set the latest static values.
       */
      getStaticValue: function(L) {
        return w[L];
      },
      setStaticValue: function(L, D) {
        return w[L] = D;
      },
      /**
       * Returns the latest motion value state. Currently only used to take
       * a snapshot of the visual element - perhaps this can return the whole
       * visual state
       */
      getLatestValues: function() {
        return w;
      },
      /**
       * Set the visiblity of the visual element. If it's changed, schedule
       * a render to reflect these changes.
       */
      setVisibility: function(L) {
        N.isVisible !== L && (N.isVisible = L, N.scheduleRender());
      },
      /**
       * Make a target animatable by Popmotion. For instance, if we're
       * trying to animate width from 100px to 100vw we need to measure 100vw
       * in pixels to determine what we really need to animate to. This is also
       * pluggable to support Framer's custom value types like Color,
       * and CSS variables.
       */
      makeTargetAnimatable: function(L, D) {
        return D === void 0 && (D = !0), o(N, L, h, D);
      },
      /**
       * Measure the current viewport box with or without transforms.
       * Only measures axis-aligned boxes, rotate and skew must be manually
       * removed with a re-render to work.
       */
      measureViewportBox: function() {
        return i(R, h);
      },
      // Motion values ========================
      /**
       * Add a motion value and bind it to this visual element.
       */
      addValue: function(L, D) {
        N.hasValue(L) && N.removeValue(L), V.set(L, D), w[L] = D.get(), Pe(L, D);
      },
      /**
       * Remove a motion value and unbind any active subscriptions.
       */
      removeValue: function(L) {
        var D;
        V.delete(L), (D = Y.get(L)) === null || D === void 0 || D(), Y.delete(L), delete w[L], c(L, I);
      },
      /**
       * Check whether we have a motion value for this key
       */
      hasValue: function(L) {
        return V.has(L);
      },
      /**
       * Get a motion value for this key. If called with a default
       * value, we'll create one if none exists.
       */
      getValue: function(L, D) {
        var ue = V.get(L);
        return ue === void 0 && D !== void 0 && (ue = Jr(D), N.addValue(L, ue)), ue;
      },
      /**
       * Iterate over our motion values.
       */
      forEachValue: function(L) {
        return V.forEach(L);
      },
      /**
       * If we're trying to animate to a previously unencountered value,
       * we need to check for it in our state and as a last resort read it
       * directly from the instance (which might have performance implications).
       */
      readValue: function(L) {
        var D;
        return (D = w[L]) !== null && D !== void 0 ? D : l(R, L, m);
      },
      /**
       * Set the base target to later animate back to. This is currently
       * only hydrated on creation and when we first read a value.
       */
      setBaseTarget: function(L, D) {
        fe[L] = D;
      },
      /**
       * Find the base target for a value thats been removed from all animation
       * props.
       */
      getBaseTarget: function(L) {
        if (a) {
          var D = a(h, L);
          if (D !== void 0 && !qt(D))
            return D;
        }
        return fe[L];
      }
    }, z), {
      /**
       * Build the renderer state based on the latest visual state.
       */
      build: function() {
        return Ee(), I;
      },
      /**
       * Schedule a render on the next animation frame.
       */
      scheduleRender: function() {
        Nt.render(he, !1, !0);
      },
      /**
       * Synchronously fire render. It's prefered that we batch renders but
       * in many circumstances, like layout measurement, we need to run this
       * synchronously. However in those instances other measures should be taken
       * to batch reads/writes.
       */
      syncRender: he,
      /**
       * Update the provided props. Ensure any newly-added motion values are
       * added to our map, old ones removed, and listeners updated.
       */
      setProps: function(L) {
        (L.transformTemplate || h.transformTemplate) && N.scheduleRender(), h = L, z.updatePropListeners(L), Se = Z3(N, d(h), Se);
      },
      getProps: function() {
        return h;
      },
      // Variants ==============================
      /**
       * Returns the variant definition with a given name.
       */
      getVariant: function(L) {
        var D;
        return (D = h.variants) === null || D === void 0 ? void 0 : D[L];
      },
      /**
       * Returns the defined default transition on this component.
       */
      getDefaultTransition: function() {
        return h.transition;
      },
      getTransformPagePoint: function() {
        return h.transformPagePoint;
      },
      /**
       * Used by child variant nodes to get the closest ancestor variant props.
       */
      getVariantContext: function(L) {
        if (L === void 0 && (L = !1), L)
          return p == null ? void 0 : p.getVariantContext();
        if (!et) {
          var D = (p == null ? void 0 : p.getVariantContext()) || {};
          return h.initial !== void 0 && (D.initial = h.initial), D;
        }
        for (var ue = {}, He = 0; He < K3; He++) {
          var Le = u0[He], it = h[Le];
          (yt(it) || it === !1) && (ue[Le] = it);
        }
        return ue;
      }
    });
    return N;
  };
}, u0 = Ct(["initial"], _e(vl), !1), K3 = u0.length;
function ys(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var d0 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function X3(e) {
  var t = d0.exec(e);
  if (!t)
    return [,];
  var r = _e(t, 3), n = r[1], a = r[2];
  return [n, a];
}
var J3 = 4;
function bs(e, t, r) {
  r === void 0 && (r = 1), ut(r <= J3, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
  var n = _e(X3(e), 2), a = n[0], o = n[1];
  if (a) {
    var i = window.getComputedStyle(t).getPropertyValue(a);
    return i ? i.trim() : ys(o) ? bs(o, t, r + 1) : o;
  }
}
function Q3(e, t, r) {
  var n, a = ft(t, []), o = e.getInstance();
  if (!(o instanceof Element))
    return { target: a, transitionEnd: r };
  r && (r = P({}, r)), e.forEachValue(function(c) {
    var u = c.get();
    if (ys(u)) {
      var d = bs(u, o);
      d && c.set(d);
    }
  });
  for (var i in a) {
    var s = a[i];
    if (ys(s)) {
      var l = bs(s, o);
      l && (a[i] = l, r && ((n = r[i]) !== null && n !== void 0 || (r[i] = s)));
    }
  }
  return { target: a, transitionEnd: r };
}
var eC = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), f0 = function(e) {
  return eC.has(e);
}, tC = function(e) {
  return Object.keys(e).some(f0);
}, p0 = function(e, t) {
  e.set(t, !1), e.set(t);
}, ja = function(e) {
  return e === Er || e === j;
}, _u;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(_u || (_u = {}));
var Eu = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, ku = function(e, t) {
  return function(r, n) {
    var a = n.transform;
    if (a === "none" || !a)
      return 0;
    var o = a.match(/^matrix3d\((.+)\)$/);
    if (o)
      return Eu(o[1], t);
    var i = a.match(/^matrix\((.+)\)$/);
    return i ? Eu(i[1], e) : 0;
  };
}, rC = /* @__PURE__ */ new Set(["x", "y", "z"]), nC = Wn.filter(function(e) {
  return !rC.has(e);
});
function aC(e) {
  var t = [];
  return nC.forEach(function(r) {
    var n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var Tu = {
  // Dimensions
  width: function(e, t) {
    var r = e.x, n = t.paddingLeft, a = n === void 0 ? "0" : n, o = t.paddingRight, i = o === void 0 ? "0" : o;
    return r.max - r.min - parseFloat(a) - parseFloat(i);
  },
  height: function(e, t) {
    var r = e.y, n = t.paddingTop, a = n === void 0 ? "0" : n, o = t.paddingBottom, i = o === void 0 ? "0" : o;
    return r.max - r.min - parseFloat(a) - parseFloat(i);
  },
  top: function(e, t) {
    var r = t.top;
    return parseFloat(r);
  },
  left: function(e, t) {
    var r = t.left;
    return parseFloat(r);
  },
  bottom: function(e, t) {
    var r = e.y, n = t.top;
    return parseFloat(n) + (r.max - r.min);
  },
  right: function(e, t) {
    var r = e.x, n = t.left;
    return parseFloat(n) + (r.max - r.min);
  },
  // Transform
  x: ku(4, 13),
  y: ku(5, 14)
}, oC = function(e, t, r) {
  var n = t.measureViewportBox(), a = t.getInstance(), o = getComputedStyle(a), i = o.display, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach(function(c) {
    s[c] = Tu[c](n, o);
  }), t.syncRender();
  var l = t.measureViewportBox();
  return r.forEach(function(c) {
    var u = t.getValue(c);
    p0(u, s[c]), e[c] = Tu[c](l, o);
  }), e;
}, iC = function(e, t, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {}), t = P({}, t), n = P({}, n);
  var a = Object.keys(t).filter(f0), o = [], i = !1, s = [];
  if (a.forEach(function(u) {
    var d = e.getValue(u);
    if (e.hasValue(u)) {
      var f = r[u], m = gn(f), p = t[u], h;
      if (Un(p)) {
        var x = p.length, C = p[0] === null ? 1 : 0;
        f = p[C], m = gn(f);
        for (var _ = C; _ < x; _++)
          h ? ut(gn(p[_]) === h, "All keyframes must be of the same type") : (h = gn(p[_]), ut(h === m || ja(m) && ja(h), "Keyframes must be of the same dimension as the current value"));
      } else
        h = gn(p);
      if (m !== h)
        if (ja(m) && ja(h)) {
          var k = d.get();
          typeof k == "string" && d.set(parseFloat(k)), typeof p == "string" ? t[u] = parseFloat(p) : Array.isArray(p) && h === j && (t[u] = p.map(parseFloat));
        } else
          m != null && m.transform && (h != null && h.transform) && (f === 0 || p === 0) ? f === 0 ? d.set(h.transform(f)) : t[u] = m.transform(p) : (i || (o = aC(e), i = !0), s.push(u), n[u] = n[u] !== void 0 ? n[u] : t[u], p0(d, p));
    }
  }), s.length) {
    var l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = oC(t, e, s);
    return o.length && o.forEach(function(u) {
      var d = _e(u, 2), f = d[0], m = d[1];
      e.getValue(f).set(m);
    }), e.syncRender(), l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function sC(e, t, r, n) {
  return tC(t) ? iC(e, t, r, n) : { target: t, transitionEnd: n };
}
var lC = function(e, t, r, n) {
  var a = Q3(e, t, n);
  return t = a.target, n = a.transitionEnd, sC(e, t, r, n);
};
function cC(e) {
  return window.getComputedStyle(e);
}
var m0 = {
  treeType: "dom",
  readValueFromInstance: function(e, t) {
    if (oa(t)) {
      var r = cl(t);
      return r && r.default || 0;
    } else {
      var n = cC(e);
      return (Qd(t) ? n.getPropertyValue(t) : n[t]) || 0;
    }
  },
  sortNodePosition: function(e, t) {
    return e.compareDocumentPosition(t) & 2 ? 1 : -1;
  },
  getBaseTarget: function(e, t) {
    var r;
    return (r = e.style) === null || r === void 0 ? void 0 : r[t];
  },
  measureViewportBox: function(e, t) {
    var r = t.transformPagePoint;
    return l0(e, r);
  },
  /**
   * Reset the transform on the current Element. This is called as part
   * of a batched process across the entire layout tree. To remove this write
   * cycle it'd be interesting to see if it's possible to "undo" all the current
   * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
   * works
   */
  resetTransform: function(e, t, r) {
    var n = r.transformTemplate;
    t.style.transform = n ? n({}, "") : "none", e.scheduleRender();
  },
  restoreTransform: function(e, t) {
    e.style.transform = t.style.transform;
  },
  removeValueFromRenderState: function(e, t) {
    var r = t.vars, n = t.style;
    delete r[e], delete n[e];
  },
  /**
   * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
   * can be animated by Motion.
   */
  makeTargetAnimatable: function(e, t, r, n) {
    var a = r.transformValues;
    n === void 0 && (n = !0);
    var o = t.transition, i = t.transitionEnd, s = ft(t, ["transition", "transitionEnd"]), l = v3(s, o || {}, e);
    if (a && (i && (i = a(i)), s && (s = a(s)), l && (l = a(l))), n) {
      p3(e, s, l);
      var c = lC(e, s, l, i);
      i = c.transitionEnd, s = c.target;
    }
    return P({ transition: o, transitionEnd: i }, s);
  },
  scrapeMotionValuesFromProps: Qs,
  build: function(e, t, r, n, a) {
    e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Ks(t, r, n, a.transformTemplate);
  },
  render: pf
}, uC = c0(m0), dC = c0(P(P({}, m0), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var r;
  return oa(t) ? ((r = cl(t)) === null || r === void 0 ? void 0 : r.default) || 0 : (t = mf.has(t) ? t : ff(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: hf, build: function(e, t, r, n, a) {
  Js(t, r, n, a.transformTemplate);
}, render: vf })), fC = function(e, t) {
  return Gs(e) ? dC(t, { enableHardwareAcceleration: !1 }) : uC(t, { enableHardwareAcceleration: !0 });
};
function Au(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var yn = {
  correct: function(e, t) {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (j.test(e))
        e = parseFloat(e);
      else
        return e;
    var r = Au(e, t.target.x), n = Au(e, t.target.y);
    return "".concat(r, "% ").concat(n, "%");
  }
}, Pu = "_$css", pC = {
  correct: function(e, t) {
    var r = t.treeScale, n = t.projectionDelta, a = e, o = e.includes("var("), i = [];
    o && (e = e.replace(d0, function(h) {
      return i.push(h), Pu;
    }));
    var s = Gt.parse(e);
    if (s.length > 5)
      return a;
    var l = Gt.createTransformer(e), c = typeof s[0] != "number" ? 1 : 0, u = n.x.scale * r.x, d = n.y.scale * r.y;
    s[0 + c] /= u, s[1 + c] /= d;
    var f = Ce(u, d, 0.5);
    typeof s[2 + c] == "number" && (s[2 + c] /= f), typeof s[3 + c] == "number" && (s[3 + c] /= f);
    var m = l(s);
    if (o) {
      var p = 0;
      m = m.replace(Pu, function() {
        var h = i[p];
        return p++, h;
      });
    }
    return m;
  }
}, mC = (
  /** @class */
  function(e) {
    Wd(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function() {
      var r = this, n = this.props, a = n.visualElement, o = n.layoutGroup, i = n.switchLayoutGroup, s = n.layoutId, l = a.projection;
      RS(hC), l && (o != null && o.group && o.group.add(l), i != null && i.register && s && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", function() {
        r.safeToRemove();
      }), l.setOptions(P(P({}, l.options), { onExitComplete: function() {
        return r.safeToRemove();
      } }))), Tn.hasEverUpdated = !0;
    }, t.prototype.getSnapshotBeforeUpdate = function(r) {
      var n = this, a = this.props, o = a.layoutDependency, i = a.visualElement, s = a.drag, l = a.isPresent, c = i.projection;
      return c && (c.isPresent = l, s || r.layoutDependency !== o || o === void 0 ? c.willUpdate() : this.safeToRemove(), r.isPresent !== l && (l ? c.promote() : c.relegate() || Nt.postRender(function() {
        var u;
        !((u = c.getStack()) === null || u === void 0) && u.members.length || n.safeToRemove();
      }))), null;
    }, t.prototype.componentDidUpdate = function() {
      var r = this.props.visualElement.projection;
      r && (r.root.didUpdate(), !r.currentAnimation && r.isLead() && this.safeToRemove());
    }, t.prototype.componentWillUnmount = function() {
      var r = this.props, n = r.visualElement, a = r.layoutGroup, o = r.switchLayoutGroup, i = n.projection;
      i && (i.scheduleCheckAfterUnmount(), a != null && a.group && a.group.remove(i), o != null && o.deregister && o.deregister(i));
    }, t.prototype.safeToRemove = function() {
      var r = this.props.safeToRemove;
      r == null || r();
    }, t.prototype.render = function() {
      return null;
    }, t;
  }(y.Component)
);
function vC(e) {
  var t = _e(Zf(), 2), r = t[0], n = t[1], a = le(qs);
  return y.createElement(mC, P({}, e, { layoutGroup: a, switchLayoutGroup: le(Kd), isPresent: r, safeToRemove: n }));
}
var hC = {
  borderRadius: P(P({}, yn), { applyTo: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ] }),
  borderTopLeftRadius: yn,
  borderTopRightRadius: yn,
  borderBottomLeftRadius: yn,
  borderBottomRightRadius: yn,
  boxShadow: pC
}, gC = {
  measureLayout: vC
};
function yC(e, t, r) {
  r === void 0 && (r = {});
  var n = qt(e) ? e : Jr(e);
  return fl("", n, t, r), {
    stop: function() {
      return n.stop();
    },
    isAnimating: function() {
      return n.isAnimating();
    }
  };
}
var v0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], bC = v0.length, Ru = function(e) {
  return typeof e == "string" ? parseFloat(e) : e;
}, Mu = function(e) {
  return typeof e == "number" || j.test(e);
};
function SC(e, t, r, n, a, o) {
  var i, s, l, c;
  a ? (e.opacity = Ce(
    0,
    // (follow?.opacity as number) ?? 0,
    // TODO Reinstate this if only child
    (i = r.opacity) !== null && i !== void 0 ? i : 1,
    xC(n)
  ), e.opacityExit = Ce((s = t.opacity) !== null && s !== void 0 ? s : 1, 0, CC(n))) : o && (e.opacity = Ce((l = t.opacity) !== null && l !== void 0 ? l : 1, (c = r.opacity) !== null && c !== void 0 ? c : 1, n));
  for (var u = 0; u < bC; u++) {
    var d = "border".concat(v0[u], "Radius"), f = Lu(t, d), m = Lu(r, d);
    if (!(f === void 0 && m === void 0)) {
      f || (f = 0), m || (m = 0);
      var p = f === 0 || m === 0 || Mu(f) === Mu(m);
      p ? (e[d] = Math.max(Ce(Ru(f), Ru(m), n), 0), (zt.test(m) || zt.test(f)) && (e[d] += "%")) : e[d] = m;
    }
  }
  (t.rotate || r.rotate) && (e.rotate = Ce(t.rotate || 0, r.rotate || 0, n));
}
function Lu(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
var xC = h0(0, 0.5, sl), CC = h0(0.5, 0.95, ol);
function h0(e, t, r) {
  return function(n) {
    return n < e ? 0 : n > t ? 1 : r(Yn(e, t, n));
  };
}
function Iu(e, t) {
  e.min = t.min, e.max = t.max;
}
function gt(e, t) {
  Iu(e.x, t.x), Iu(e.y, t.y);
}
function Ou(e, t, r, n, a) {
  return e -= t, e = So(e, 1 / r, n), a !== void 0 && (e = So(e, 1 / a, n)), e;
}
function wC(e, t, r, n, a, o, i) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5), o === void 0 && (o = e), i === void 0 && (i = e), zt.test(t)) {
    t = parseFloat(t);
    var s = Ce(i.min, i.max, t / 100);
    t = s - i.min;
  }
  if (typeof t == "number") {
    var l = Ce(o.min, o.max, n);
    e === o && (l -= t), e.min = Ou(e.min, t, r, l, a), e.max = Ou(e.max, t, r, l, a);
  }
}
function zu(e, t, r, n, a) {
  var o = _e(r, 3), i = o[0], s = o[1], l = o[2];
  wC(e, t[i], t[s], t[l], t.scale, n, a);
}
var _C = ["x", "scaleX", "originX"], EC = ["y", "scaleY", "originY"];
function Nu(e, t, r, n) {
  zu(e.x, t, _C, r == null ? void 0 : r.x, n == null ? void 0 : n.x), zu(e.y, t, EC, r == null ? void 0 : r.y, n == null ? void 0 : n.y);
}
function Vu(e) {
  return e.translate === 0 && e.scale === 1;
}
function g0(e) {
  return Vu(e.x) && Vu(e.y);
}
function y0(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
var kC = (
  /** @class */
  function() {
    function e() {
      this.members = [];
    }
    return e.prototype.add = function(t) {
      pl(this.members, t), t.scheduleRender();
    }, e.prototype.remove = function(t) {
      if (ml(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
        var r = this.members[this.members.length - 1];
        r && this.promote(r);
      }
    }, e.prototype.relegate = function(t) {
      var r = this.members.findIndex(function(i) {
        return t === i;
      });
      if (r === 0)
        return !1;
      for (var n, a = r; a >= 0; a--) {
        var o = this.members[a];
        if (o.isPresent !== !1) {
          n = o;
          break;
        }
      }
      return n ? (this.promote(n), !0) : !1;
    }, e.prototype.promote = function(t, r) {
      var n, a = this.lead;
      if (t !== a && (this.prevLead = a, this.lead = t, t.show(), a)) {
        a.instance && a.scheduleRender(), t.scheduleRender(), t.resumeFrom = a, r && (t.resumeFrom.preserveOpacity = !0), a.snapshot && (t.snapshot = a.snapshot, t.snapshot.latestValues = a.animationValues || a.latestValues, t.snapshot.isShared = !0), !((n = t.root) === null || n === void 0) && n.isUpdating && (t.isLayoutDirty = !0);
        var o = t.options.crossfade;
        o === !1 && a.hide();
      }
    }, e.prototype.exitAnimationComplete = function() {
      this.members.forEach(function(t) {
        var r, n, a, o, i;
        (n = (r = t.options).onExitComplete) === null || n === void 0 || n.call(r), (i = (a = t.resumingFrom) === null || a === void 0 ? void 0 : (o = a.options).onExitComplete) === null || i === void 0 || i.call(o);
      });
    }, e.prototype.scheduleRender = function() {
      this.members.forEach(function(t) {
        t.instance && t.scheduleRender(!1);
      });
    }, e.prototype.removeLeadSnapshot = function() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }, e;
  }()
), TC = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function Fu(e, t, r) {
  var n = e.x.translate / t.x, a = e.y.translate / t.y, o = "translate3d(".concat(n, "px, ").concat(a, "px, 0) ");
  if (o += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") "), r) {
    var i = r.rotate, s = r.rotateX, l = r.rotateY;
    i && (o += "rotate(".concat(i, "deg) ")), s && (o += "rotateX(".concat(s, "deg) ")), l && (o += "rotateY(".concat(l, "deg) "));
  }
  var c = e.x.scale * t.x, u = e.y.scale * t.y;
  return o += "scale(".concat(c, ", ").concat(u, ")"), o === TC ? "none" : o;
}
var AC = function(e, t) {
  return e.depth - t.depth;
}, PC = (
  /** @class */
  function() {
    function e() {
      this.children = [], this.isDirty = !1;
    }
    return e.prototype.add = function(t) {
      pl(this.children, t), this.isDirty = !0;
    }, e.prototype.remove = function(t) {
      ml(this.children, t), this.isDirty = !0;
    }, e.prototype.forEach = function(t) {
      this.isDirty && this.children.sort(AC), this.isDirty = !1, this.children.forEach(t);
    }, e;
  }()
), $u = 1e3;
function b0(e) {
  var t = e.attachResizeListener, r = e.defaultParent, n = e.measureScroll, a = e.checkIsScrollRoot, o = e.resetTransform;
  return (
    /** @class */
    function() {
      function i(s, l, c) {
        var u = this;
        l === void 0 && (l = {}), c === void 0 && (c = r == null ? void 0 : r()), this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = function() {
          u.isUpdating && (u.isUpdating = !1, u.clearAllSnapshots());
        }, this.updateProjection = function() {
          u.nodes.forEach(zC), u.nodes.forEach(NC);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.id = s, this.latestValues = l, this.root = c ? c.root || c : this, this.path = c ? Ct(Ct([], _e(c.path), !1), [c], !1) : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, s && this.root.registerPotentialNode(s, this);
        for (var d = 0; d < this.path.length; d++)
          this.path[d].shouldResetTransform = !0;
        this.root === this && (this.nodes = new PC());
      }
      return i.prototype.addEventListener = function(s, l) {
        return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Rn()), this.eventHandlers.get(s).add(l);
      }, i.prototype.notifyListeners = function(s) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        var u = this.eventHandlers.get(s);
        u == null || u.notify.apply(u, Ct([], _e(l), !1));
      }, i.prototype.hasListeners = function(s) {
        return this.eventHandlers.has(s);
      }, i.prototype.registerPotentialNode = function(s, l) {
        this.potentialNodes.set(s, l);
      }, i.prototype.mount = function(s, l) {
        var c = this, u;
        if (l === void 0 && (l = !1), !this.instance) {
          this.isSVG = s instanceof SVGElement && s.tagName !== "svg", this.instance = s;
          var d = this.options, f = d.layoutId, m = d.layout, p = d.visualElement;
          if (p && !p.getInstance() && p.mount(s), this.root.nodes.add(this), (u = this.parent) === null || u === void 0 || u.children.add(this), this.id && this.root.potentialNodes.delete(this.id), l && (m || f) && (this.isLayoutDirty = !0), t) {
            var h, x = function() {
              return c.root.updateBlockedByResize = !1;
            };
            t(s, function() {
              c.root.updateBlockedByResize = !0, clearTimeout(h), h = window.setTimeout(x, 250), Tn.hasAnimatedSinceResize && (Tn.hasAnimatedSinceResize = !1, c.nodes.forEach(OC));
            });
          }
          f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && p && (f || m) && this.addEventListener("didUpdate", function(C) {
            var _, k, T, w, I, R = C.delta, z = C.hasLayoutChanged, V = C.hasRelativeTargetChanged, Y = C.layout;
            if (c.isTreeAnimationBlocked()) {
              c.target = void 0, c.relativeTarget = void 0;
              return;
            }
            var Se = (k = (_ = c.options.transition) !== null && _ !== void 0 ? _ : p.getDefaultTransition()) !== null && k !== void 0 ? k : BC, fe = p.getProps(), se = fe.onLayoutAnimationStart, he = fe.onLayoutAnimationComplete, Ee = !c.targetLayout || !y0(c.targetLayout, Y) || V, $e = !z && V;
            if (!((T = c.resumeFrom) === null || T === void 0) && T.instance || $e || z && (Ee || !c.currentAnimation)) {
              c.resumeFrom && (c.resumingFrom = c.resumeFrom, c.resumingFrom.resumingFrom = void 0), c.setAnimationOrigin(R, $e);
              var Pe = P(P({}, dl(Se, "layout")), { onPlay: se, onComplete: he });
              p.shouldReduceMotion && (Pe.delay = 0, Pe.type = !1), c.startAnimation(Pe);
            } else
              !z && c.animationProgress === 0 && c.finishAnimation(), c.isLead() && ((I = (w = c.options).onExitComplete) === null || I === void 0 || I.call(w));
            c.targetLayout = Y;
          });
        }
      }, i.prototype.unmount = function() {
        var s, l;
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (s = this.getStack()) === null || s === void 0 || s.remove(this), (l = this.parent) === null || l === void 0 || l.children.delete(this), this.instance = void 0, Zn.preRender(this.updateProjection);
      }, i.prototype.blockUpdate = function() {
        this.updateManuallyBlocked = !0;
      }, i.prototype.unblockUpdate = function() {
        this.updateManuallyBlocked = !1;
      }, i.prototype.isUpdateBlocked = function() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }, i.prototype.isTreeAnimationBlocked = function() {
        var s;
        return this.isAnimationBlocked || ((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimationBlocked()) || !1;
      }, i.prototype.startUpdate = function() {
        var s;
        this.isUpdateBlocked() || (this.isUpdating = !0, (s = this.nodes) === null || s === void 0 || s.forEach(VC));
      }, i.prototype.willUpdate = function(s) {
        var l, c, u;
        if (s === void 0 && (s = !0), this.root.isUpdateBlocked()) {
          (c = (l = this.options).onExitComplete) === null || c === void 0 || c.call(l);
          return;
        }
        if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
          this.isLayoutDirty = !0;
          for (var d = 0; d < this.path.length; d++) {
            var f = this.path[d];
            f.shouldResetTransform = !0, f.updateScroll();
          }
          var m = this.options, p = m.layoutId, h = m.layout;
          if (!(p === void 0 && !h)) {
            var x = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
            this.prevTransformTemplateValue = x == null ? void 0 : x(this.latestValues, ""), this.updateSnapshot(), s && this.notifyListeners("willUpdate");
          }
        }
      }, i.prototype.didUpdate = function() {
        var s = this.isUpdateBlocked();
        if (s) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Du);
          return;
        }
        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(jC), this.potentialNodes.clear()), this.nodes.forEach(IC), this.nodes.forEach(RC), this.nodes.forEach(MC), this.clearAllSnapshots(), Ri.update(), Ri.preRender(), Ri.render());
      }, i.prototype.clearAllSnapshots = function() {
        this.nodes.forEach(LC), this.sharedNodes.forEach(FC);
      }, i.prototype.scheduleUpdateProjection = function() {
        Nt.preRender(this.updateProjection, !1, !0);
      }, i.prototype.scheduleCheckAfterUnmount = function() {
        var s = this;
        Nt.postRender(function() {
          s.isLayoutDirty ? s.root.didUpdate() : s.root.checkUpdateFailed();
        });
      }, i.prototype.updateSnapshot = function() {
        if (!(this.snapshot || !this.instance)) {
          var s = this.measure(), l = this.removeTransform(this.removeElementScroll(s));
          Hu(l), this.snapshot = {
            measured: s,
            layout: l,
            latestValues: {}
          };
        }
      }, i.prototype.updateLayout = function() {
        var s;
        if (this.instance && (this.updateScroll(), !(!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))) {
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (var l = 0; l < this.path.length; l++) {
              var c = this.path[l];
              c.updateScroll();
            }
          var u = this.measure();
          Hu(u);
          var d = this.layout;
          this.layout = {
            measured: u,
            actual: this.removeElementScroll(u)
          }, this.layoutCorrected = Ve(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), (s = this.options.visualElement) === null || s === void 0 || s.notifyLayoutMeasure(this.layout.actual, d == null ? void 0 : d.actual);
        }
      }, i.prototype.updateScroll = function() {
        this.options.layoutScroll && this.instance && (this.isScrollRoot = a(this.instance), this.scroll = n(this.instance));
      }, i.prototype.resetTransform = function() {
        var s;
        if (o) {
          var l = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !g0(this.projectionDelta), u = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate, d = u == null ? void 0 : u(this.latestValues, ""), f = d !== this.prevTransformTemplateValue;
          l && (c || ar(this.latestValues) || f) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
        }
      }, i.prototype.measure = function() {
        var s = this.options.visualElement;
        if (!s)
          return Ve();
        var l = s.measureViewportBox(), c = this.root.scroll;
        return c && (or(l.x, c.x), or(l.y, c.y)), l;
      }, i.prototype.removeElementScroll = function(s) {
        var l = Ve();
        gt(l, s);
        for (var c = 0; c < this.path.length; c++) {
          var u = this.path[c], d = u.scroll, f = u.options, m = u.isScrollRoot;
          if (u !== this.root && d && f.layoutScroll) {
            if (m) {
              gt(l, s);
              var p = this.root.scroll;
              p && (or(l.x, -p.x), or(l.y, -p.y));
            }
            or(l.x, d.x), or(l.y, d.y);
          }
        }
        return l;
      }, i.prototype.applyTransform = function(s, l) {
        l === void 0 && (l = !1);
        var c = Ve();
        gt(c, s);
        for (var u = 0; u < this.path.length; u++) {
          var d = this.path[u];
          !l && d.options.layoutScroll && d.scroll && d !== d.root && Fr(c, {
            x: -d.scroll.x,
            y: -d.scroll.y
          }), ar(d.latestValues) && Fr(c, d.latestValues);
        }
        return ar(this.latestValues) && Fr(c, this.latestValues), c;
      }, i.prototype.removeTransform = function(s) {
        var l, c = Ve();
        gt(c, s);
        for (var u = 0; u < this.path.length; u++) {
          var d = this.path[u];
          if (d.instance && ar(d.latestValues)) {
            i0(d.latestValues) && d.updateSnapshot();
            var f = Ve(), m = d.measure();
            gt(f, m), Nu(c, d.latestValues, (l = d.snapshot) === null || l === void 0 ? void 0 : l.layout, f);
          }
        }
        return ar(this.latestValues) && Nu(c, this.latestValues), c;
      }, i.prototype.setTargetDelta = function(s) {
        this.targetDelta = s, this.root.scheduleUpdateProjection();
      }, i.prototype.setOptions = function(s) {
        var l;
        this.options = P(P(P({}, this.options), s), { crossfade: (l = s.crossfade) !== null && l !== void 0 ? l : !0 });
      }, i.prototype.clearMeasurements = function() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
      }, i.prototype.resolveTargetDelta = function() {
        var s, l = this.options, c = l.layout, u = l.layoutId;
        !this.layout || !(c || u) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = Ve(), this.relativeTargetOrigin = Ve(), Ln(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), gt(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ve(), this.targetWithTransforms = Ve()), this.relativeTarget && this.relativeTargetOrigin && (!((s = this.relativeParent) === null || s === void 0) && s.target) ? P3(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.actual) : gt(this.target, this.layout.actual), s0(this.target, this.targetDelta)) : gt(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && !!this.relativeParent.resumingFrom == !!this.resumingFrom && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = Ve(), this.relativeTargetOrigin = Ve(), Ln(this.relativeTargetOrigin, this.target, this.relativeParent.target), gt(this.relativeTarget, this.relativeTargetOrigin)))));
      }, i.prototype.getClosestProjectingParent = function() {
        if (!(!this.parent || ar(this.parent.latestValues)))
          return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
      }, i.prototype.calcProjection = function() {
        var s, l = this.options, c = l.layout, u = l.layoutId;
        if (this.isTreeAnimating = !!(!((s = this.parent) === null || s === void 0) && s.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(c || u))) {
          var d = this.getLead();
          gt(this.layoutCorrected, this.layout.actual), F3(this.layoutCorrected, this.treeScale, this.path, !!this.resumingFrom || this !== d);
          var f = d.target;
          if (f) {
            this.projectionDelta || (this.projectionDelta = In(), this.projectionDeltaWithTransform = In());
            var m = this.treeScale.x, p = this.treeScale.y, h = this.projectionTransform;
            Mn(this.projectionDelta, this.layoutCorrected, f, this.latestValues), this.projectionTransform = Fu(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== m || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
          }
        }
      }, i.prototype.hide = function() {
        this.isVisible = !1;
      }, i.prototype.show = function() {
        this.isVisible = !0;
      }, i.prototype.scheduleRender = function(s) {
        var l, c, u;
        s === void 0 && (s = !0), (c = (l = this.options).scheduleRender) === null || c === void 0 || c.call(l), s && ((u = this.getStack()) === null || u === void 0 || u.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }, i.prototype.setAnimationOrigin = function(s, l) {
        var c = this, u;
        l === void 0 && (l = !1);
        var d = this.snapshot, f = (d == null ? void 0 : d.latestValues) || {}, m = P({}, this.latestValues), p = In();
        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !l;
        var h = Ve(), x = d == null ? void 0 : d.isShared, C = (((u = this.getStack()) === null || u === void 0 ? void 0 : u.members.length) || 0) <= 1, _ = !!(x && !C && this.options.crossfade === !0 && !this.path.some(DC));
        this.animationProgress = 0, this.mixTargetDelta = function(k) {
          var T, w = k / 1e3;
          Bu(p.x, s.x, w), Bu(p.y, s.y, w), c.setTargetDelta(p), c.relativeTarget && c.relativeTargetOrigin && c.layout && (!((T = c.relativeParent) === null || T === void 0) && T.layout) && (Ln(h, c.layout.actual, c.relativeParent.layout.actual), $C(c.relativeTarget, c.relativeTargetOrigin, h, w)), x && (c.animationValues = m, SC(m, f, c.latestValues, w, _, C)), c.root.scheduleUpdateProjection(), c.scheduleRender(), c.animationProgress = w;
        }, this.mixTargetDelta(0);
      }, i.prototype.startAnimation = function(s) {
        var l = this, c, u;
        this.notifyListeners("animationStart"), (c = this.currentAnimation) === null || c === void 0 || c.stop(), this.resumingFrom && ((u = this.resumingFrom.currentAnimation) === null || u === void 0 || u.stop()), this.pendingAnimation && (Zn.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Nt.update(function() {
          Tn.hasAnimatedSinceResize = !0, l.currentAnimation = yC(0, $u, P(P({}, s), { onUpdate: function(d) {
            var f;
            l.mixTargetDelta(d), (f = s.onUpdate) === null || f === void 0 || f.call(s, d);
          }, onComplete: function() {
            var d;
            (d = s.onComplete) === null || d === void 0 || d.call(s), l.completeAnimation();
          } })), l.resumingFrom && (l.resumingFrom.currentAnimation = l.currentAnimation), l.pendingAnimation = void 0;
        });
      }, i.prototype.completeAnimation = function() {
        var s;
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (s = this.getStack()) === null || s === void 0 || s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }, i.prototype.finishAnimation = function() {
        var s;
        this.currentAnimation && ((s = this.mixTargetDelta) === null || s === void 0 || s.call(this, $u), this.currentAnimation.stop()), this.completeAnimation();
      }, i.prototype.applyTransformsToTarget = function() {
        var s = this.getLead(), l = s.targetWithTransforms, c = s.target, u = s.layout, d = s.latestValues;
        !l || !c || !u || (gt(l, c), Fr(l, d), Mn(this.projectionDeltaWithTransform, this.layoutCorrected, l, d));
      }, i.prototype.registerSharedNode = function(s, l) {
        var c, u, d;
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new kC());
        var f = this.sharedNodes.get(s);
        f.add(l), l.promote({
          transition: (c = l.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.transition,
          preserveFollowOpacity: (d = (u = l.options.initialPromotionConfig) === null || u === void 0 ? void 0 : u.shouldPreserveFollowOpacity) === null || d === void 0 ? void 0 : d.call(u, l)
        });
      }, i.prototype.isLead = function() {
        var s = this.getStack();
        return s ? s.lead === this : !0;
      }, i.prototype.getLead = function() {
        var s, l = this.options.layoutId;
        return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
      }, i.prototype.getPrevLead = function() {
        var s, l = this.options.layoutId;
        return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
      }, i.prototype.getStack = function() {
        var s = this.options.layoutId;
        if (s)
          return this.root.sharedNodes.get(s);
      }, i.prototype.promote = function(s) {
        var l = s === void 0 ? {} : s, c = l.needsReset, u = l.transition, d = l.preserveFollowOpacity, f = this.getStack();
        f && f.promote(this, d), c && (this.projectionDelta = void 0, this.needsReset = !0), u && this.setOptions({ transition: u });
      }, i.prototype.relegate = function() {
        var s = this.getStack();
        return s ? s.relegate(this) : !1;
      }, i.prototype.resetRotation = function() {
        var s = this.options.visualElement;
        if (s) {
          for (var l = !1, c = {}, u = 0; u < ts.length; u++) {
            var d = ts[u], f = "rotate" + d;
            s.getStaticValue(f) && (l = !0, c[f] = s.getStaticValue(f), s.setStaticValue(f, 0));
          }
          if (l) {
            s == null || s.syncRender();
            for (var f in c)
              s.setStaticValue(f, c[f]);
            s.scheduleRender();
          }
        }
      }, i.prototype.getProjectionStyles = function(s) {
        var l, c, u, d, f, m;
        s === void 0 && (s = {});
        var p = {};
        if (!this.instance || this.isSVG)
          return p;
        if (this.isVisible)
          p.visibility = "";
        else
          return { visibility: "hidden" };
        var h = (l = this.options.visualElement) === null || l === void 0 ? void 0 : l.getProps().transformTemplate;
        if (this.needsReset)
          return this.needsReset = !1, p.opacity = "", p.pointerEvents = Ja(s.pointerEvents) || "", p.transform = h ? h(this.latestValues, "") : "none", p;
        var x = this.getLead();
        if (!this.projectionDelta || !this.layout || !x.target) {
          var C = {};
          return this.options.layoutId && (C.opacity = (c = this.latestValues.opacity) !== null && c !== void 0 ? c : 1, C.pointerEvents = Ja(s.pointerEvents) || ""), this.hasProjected && !ar(this.latestValues) && (C.transform = h ? h({}, "") : "none", this.hasProjected = !1), C;
        }
        var _ = x.animationValues || x.latestValues;
        this.applyTransformsToTarget(), p.transform = Fu(this.projectionDeltaWithTransform, this.treeScale, _), h && (p.transform = h(_, p.transform));
        var k = this.projectionDelta, T = k.x, w = k.y;
        p.transformOrigin = "".concat(T.origin * 100, "% ").concat(w.origin * 100, "% 0"), x.animationValues ? p.opacity = x === this ? (d = (u = _.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && d !== void 0 ? d : 1 : this.preserveOpacity ? this.latestValues.opacity : _.opacityExit : p.opacity = x === this ? (f = _.opacity) !== null && f !== void 0 ? f : "" : (m = _.opacityExit) !== null && m !== void 0 ? m : 0;
        for (var I in po)
          if (_[I] !== void 0) {
            var R = po[I], z = R.correct, V = R.applyTo, Y = z(_[I], x);
            if (V)
              for (var Se = V.length, fe = 0; fe < Se; fe++)
                p[V[fe]] = Y;
            else
              p[I] = Y;
          }
        return this.options.layoutId && (p.pointerEvents = x === this ? Ja(s.pointerEvents) || "" : "none"), p;
      }, i.prototype.clearSnapshot = function() {
        this.resumeFrom = this.snapshot = void 0;
      }, i.prototype.resetTree = function() {
        this.root.nodes.forEach(function(s) {
          var l;
          return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
        }), this.root.nodes.forEach(Du), this.root.sharedNodes.clear();
      }, i;
    }()
  );
}
function RC(e) {
  e.updateLayout();
}
function MC(e) {
  var t, r, n, a, o = (r = (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !== null && r !== void 0 ? r : e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    var i = e.layout, s = i.actual, l = i.measured;
    e.options.animationType === "size" ? Tt(function(_) {
      var k = o.isShared ? o.measured[_] : o.layout[_], T = Zt(k);
      k.min = s[_].min, k.max = k.min + T;
    }) : e.options.animationType === "position" && Tt(function(_) {
      var k = o.isShared ? o.measured[_] : o.layout[_], T = Zt(s[_]);
      k.max = k.min + T;
    });
    var c = In();
    Mn(c, s, o.layout);
    var u = In();
    o.isShared ? Mn(u, e.applyTransform(l, !0), o.measured) : Mn(u, s, o.layout);
    var d = !g0(c), f = !1;
    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
      var m = e.relativeParent, p = m.snapshot, h = m.layout;
      if (p && h) {
        var x = Ve();
        Ln(x, o.layout, p.layout);
        var C = Ve();
        Ln(C, s, h.actual), y0(x, C) || (f = !0);
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: u,
      layoutDelta: c,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: f
    });
  } else
    e.isLead() && ((a = (n = e.options).onExitComplete) === null || a === void 0 || a.call(n));
  e.options.transition = void 0;
}
function LC(e) {
  e.clearSnapshot();
}
function Du(e) {
  e.clearMeasurements();
}
function IC(e) {
  var t = e.options.visualElement;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(), e.resetTransform();
}
function OC(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function zC(e) {
  e.resolveTargetDelta();
}
function NC(e) {
  e.calcProjection();
}
function VC(e) {
  e.resetRotation();
}
function FC(e) {
  e.removeLeadSnapshot();
}
function Bu(e, t, r) {
  e.translate = Ce(t.translate, 0, r), e.scale = Ce(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ju(e, t, r, n) {
  e.min = Ce(t.min, r.min, n), e.max = Ce(t.max, r.max, n);
}
function $C(e, t, r, n) {
  ju(e.x, t.x, r.x, n), ju(e.y, t.y, r.y, n);
}
function DC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var BC = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function jC(e, t) {
  for (var r = e.root, n = e.path.length - 1; n >= 0; n--)
    if (e.path[n].instance) {
      r = e.path[n];
      break;
    }
  var a = r && r !== e.root ? r.instance : document, o = a.querySelector('[data-projection-id="'.concat(t, '"]'));
  o && e.mount(o, !0);
}
function Wu(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function Hu(e) {
  Wu(e.x), Wu(e.y);
}
var WC = b0({
  attachResizeListener: function(e, t) {
    return zo(e, "resize", t);
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  },
  checkIsScrollRoot: function() {
    return !0;
  }
}), Oi = {
  current: void 0
}, HC = b0({
  measureScroll: function(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  },
  defaultParent: function() {
    if (!Oi.current) {
      var e = new WC(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Oi.current = e;
    }
    return Oi.current;
  },
  resetTransform: function(e, t) {
    e.style.transform = t ?? "none";
  },
  checkIsScrollRoot: function(e) {
    return window.getComputedStyle(e).position === "fixed";
  }
}), UC = P(P(P(P({}, k3), F4), q3), gC), YC = /* @__PURE__ */ AS(function(e, t) {
  return mx(e, t, UC, fC, HC);
});
function S0() {
  var e = Fe(!1);
  return fo(function() {
    return e.current = !0, function() {
      e.current = !1;
    };
  }, []), e;
}
function qC() {
  var e = S0(), t = _e(Ze(0), 2), r = t[0], n = t[1], a = ct(function() {
    e.current && n(r + 1);
  }, [r]), o = ct(function() {
    return Nt.postRender(a);
  }, [a]);
  return [o, r];
}
var zi = function(e) {
  var t = e.children, r = e.initial, n = e.isPresent, a = e.onExitComplete, o = e.custom, i = e.presenceAffectsLayout, s = aa(GC), l = Gf(), c = Te(
    function() {
      return {
        id: l,
        initial: r,
        isPresent: n,
        custom: o,
        onExitComplete: function(u) {
          var d, f;
          s.set(u, !0);
          try {
            for (var m = lS(s.values()), p = m.next(); !p.done; p = m.next()) {
              var h = p.value;
              if (!h)
                return;
            }
          } catch (x) {
            d = { error: x };
          } finally {
            try {
              p && !p.done && (f = m.return) && f.call(m);
            } finally {
              if (d)
                throw d.error;
            }
          }
          a == null || a();
        },
        register: function(u) {
          return s.set(u, !1), function() {
            return s.delete(u);
          };
        }
      };
    },
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [n]
  );
  return Te(function() {
    s.forEach(function(u, d) {
      return s.set(d, !1);
    });
  }, [n]), qe.useEffect(function() {
    !n && !s.size && (a == null || a());
  }, [n]), qe.createElement(en.Provider, { value: c }, t);
};
function GC() {
  return /* @__PURE__ */ new Map();
}
var Nr = function(e) {
  return e.key || "";
};
function ZC(e, t) {
  e.forEach(function(r) {
    var n = Nr(r);
    t.set(n, r);
  });
}
function KC(e) {
  var t = [];
  return Kn.forEach(e, function(r) {
    Jn(r) && t.push(r);
  }), t;
}
var XC = function(e) {
  var t = e.children, r = e.custom, n = e.initial, a = n === void 0 ? !0 : n, o = e.onExitComplete, i = e.exitBeforeEnter, s = e.presenceAffectsLayout, l = s === void 0 ? !0 : s, c = _e(qC(), 1), u = c[0], d = le(qs).forceRender;
  d && (u = d);
  var f = S0(), m = KC(t), p = m, h = /* @__PURE__ */ new Set(), x = Fe(p), C = Fe(/* @__PURE__ */ new Map()).current, _ = Fe(!0);
  if (fo(function() {
    _.current = !1, ZC(m, C), x.current = p;
  }), rl(function() {
    _.current = !0, C.clear(), h.clear();
  }), _.current)
    return qe.createElement(qe.Fragment, null, p.map(function(z) {
      return qe.createElement(zi, { key: Nr(z), isPresent: !0, initial: a ? void 0 : !1, presenceAffectsLayout: l }, z);
    }));
  p = Ct([], _e(p), !1);
  for (var k = x.current.map(Nr), T = m.map(Nr), w = k.length, I = 0; I < w; I++) {
    var R = k[I];
    T.indexOf(R) === -1 && h.add(R);
  }
  return i && h.size && (p = []), h.forEach(function(z) {
    if (T.indexOf(z) === -1) {
      var V = C.get(z);
      if (V) {
        var Y = k.indexOf(z), Se = function() {
          C.delete(z), h.delete(z);
          var fe = x.current.findIndex(function(se) {
            return se.key === z;
          });
          if (x.current.splice(fe, 1), !h.size) {
            if (x.current = m, f.current === !1)
              return;
            u(), o && o();
          }
        };
        p.splice(Y, 0, qe.createElement(zi, { key: Nr(V), isPresent: !1, onExitComplete: Se, custom: r, presenceAffectsLayout: l }, V));
      }
    }
  }), p = p.map(function(z) {
    var V = z.key;
    return h.has(V) ? z : qe.createElement(zi, { key: Nr(z), isPresent: !0, presenceAffectsLayout: l }, z);
  }), Us !== "production" && i && p.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), qe.createElement(qe.Fragment, null, h.size ? p : p.map(function(z) {
    return Xn(z);
  }));
}, JC = (...e) => e.filter(Boolean).join(" "), QC = nh({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), hl = U((e, t) => {
  const r = Xe("Spinner", e), {
    label: n = "Loading...",
    thickness: a = "2px",
    speed: o = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = Me(e), c = JC("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: a,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${QC} ${o} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: t,
    __css: u,
    className: c,
    ...l
  }, n && /* @__PURE__ */ y.createElement(W.span, {
    srOnly: !0
  }, n));
});
hl.displayName = "Spinner";
var Do = (...e) => e.filter(Boolean).join(" ");
function ew(e) {
  return /* @__PURE__ */ y.createElement(dr, {
    viewBox: "0 0 24 24",
    ...e
  }, /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
  }));
}
function tw(e) {
  return /* @__PURE__ */ y.createElement(dr, {
    viewBox: "0 0 24 24",
    ...e
  }, /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
  }));
}
function Uu(e) {
  return /* @__PURE__ */ y.createElement(dr, {
    viewBox: "0 0 24 24",
    ...e
  }, /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  }));
}
var [rw, nw] = Kt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [aw, gl] = Kt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), x0 = {
  info: { icon: tw, colorScheme: "blue" },
  warning: { icon: Uu, colorScheme: "orange" },
  success: { icon: ew, colorScheme: "green" },
  error: { icon: Uu, colorScheme: "red" },
  loading: { icon: hl, colorScheme: "blue" }
};
function ow(e) {
  return x0[e].colorScheme;
}
function iw(e) {
  return x0[e].icon;
}
var C0 = U(function(t, r) {
  const { status: n = "info", addRole: a = !0, ...o } = Me(t), i = t.colorScheme ?? ow(n), s = ra("Alert", { ...t, colorScheme: i }), l = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...s.container
  };
  return /* @__PURE__ */ y.createElement(rw, {
    value: { status: n }
  }, /* @__PURE__ */ y.createElement(aw, {
    value: s
  }, /* @__PURE__ */ y.createElement(W.div, {
    role: a ? "alert" : void 0,
    ref: r,
    ...o,
    className: Do("chakra-alert", t.className),
    __css: l
  })));
});
C0.displayName = "Alert";
var w0 = U(function(t, r) {
  const a = {
    display: "inline",
    ...gl().description
  };
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    ...t,
    className: Do("chakra-alert__desc", t.className),
    __css: a
  });
});
w0.displayName = "AlertDescription";
function _0(e) {
  const { status: t } = nw(), r = iw(t), n = gl(), a = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ y.createElement(W.span, {
    display: "inherit",
    ...e,
    className: Do("chakra-alert__icon", e.className),
    __css: a
  }, e.children || /* @__PURE__ */ y.createElement(r, {
    h: "100%",
    w: "100%"
  }));
}
_0.displayName = "AlertIcon";
var E0 = U(function(t, r) {
  const n = gl();
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    ...t,
    className: Do("chakra-alert__title", t.className),
    __css: n.title
  });
});
E0.displayName = "AlertTitle";
function k0(e) {
  return Kn.toArray(e).filter((t) => Jn(t));
}
var Bo = (...e) => e.filter(Boolean).join(" "), Yu = (e) => e ? "" : void 0, [sw, lw] = Kt({
  strict: !1,
  name: "ButtonGroupContext"
});
function Ss(e) {
  const { children: t, className: r, ...n } = e, a = Jn(t) ? Xn(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, o = Bo("chakra-button__icon", r);
  return /* @__PURE__ */ y.createElement(W.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: o
  }, a);
}
Ss.displayName = "ButtonIcon";
function xs(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: a = /* @__PURE__ */ y.createElement(hl, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className: o,
    __css: i,
    ...s
  } = e, l = Bo("chakra-button__spinner", o), c = r === "start" ? "marginEnd" : "marginStart", u = Te(() => ({
    display: "flex",
    alignItems: "center",
    position: t ? "relative" : "absolute",
    [c]: t ? n : 0,
    fontSize: "1em",
    lineHeight: "normal",
    ...i
  }), [i, t, c, n]);
  return /* @__PURE__ */ y.createElement(W.div, {
    className: l,
    ...s,
    __css: u
  }, a);
}
xs.displayName = "ButtonSpinner";
function cw(e) {
  const [t, r] = Ze(!e);
  return { ref: ct((o) => {
    o && r(o.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
var yl = U((e, t) => {
  const r = lw(), n = Xe("Button", { ...r, ...e }), {
    isDisabled: a = r == null ? void 0 : r.isDisabled,
    isLoading: o,
    isActive: i,
    children: s,
    leftIcon: l,
    rightIcon: c,
    loadingText: u,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: m,
    spinnerPlacement: p = "start",
    className: h,
    as: x,
    ...C
  } = Me(e), _ = Te(() => {
    const I = { ...n == null ? void 0 : n._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...n,
      ...!!r && { _focus: I }
    };
  }, [n, r]), { ref: k, type: T } = cw(x), w = { rightIcon: c, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ y.createElement(W.button, {
    disabled: a || o,
    ref: iS(t, k),
    as: x,
    type: f ?? T,
    "data-active": Yu(i),
    "data-loading": Yu(o),
    __css: _,
    className: Bo("chakra-button", h),
    ...C
  }, o && p === "start" && /* @__PURE__ */ y.createElement(xs, {
    className: "chakra-button__spinner--start",
    label: u,
    placement: "start",
    spacing: d
  }, m), o ? u || /* @__PURE__ */ y.createElement(W.span, {
    opacity: 0
  }, /* @__PURE__ */ y.createElement(qu, {
    ...w
  })) : /* @__PURE__ */ y.createElement(qu, {
    ...w
  }), o && p === "end" && /* @__PURE__ */ y.createElement(xs, {
    className: "chakra-button__spinner--end",
    label: u,
    placement: "end",
    spacing: d
  }, m));
});
yl.displayName = "Button";
function qu(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: a } = e;
  return /* @__PURE__ */ y.createElement(y.Fragment, null, t && /* @__PURE__ */ y.createElement(Ss, {
    marginEnd: a
  }, t), n, r && /* @__PURE__ */ y.createElement(Ss, {
    marginStart: a
  }, r));
}
var uw = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
}, dw = {
  horizontal: (e) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: e }
  }),
  vertical: (e) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: e }
  })
}, fw = U(function(t, r) {
  const {
    size: n,
    colorScheme: a,
    variant: o,
    className: i,
    spacing: s = "0.5rem",
    isAttached: l,
    isDisabled: c,
    orientation: u = "horizontal",
    ...d
  } = t, f = Bo("chakra-button__group", i), m = Te(() => ({ size: n, colorScheme: a, variant: o, isDisabled: c }), [n, a, o, c]);
  let p = {
    display: "inline-flex",
    ...l ? uw[u] : dw[u](s)
  };
  const h = u === "vertical";
  return /* @__PURE__ */ y.createElement(sw, {
    value: m
  }, /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    role: "group",
    __css: p,
    className: f,
    "data-attached": l ? "" : void 0,
    "data-orientation": u,
    flexDir: h ? "column" : void 0,
    ...d
  }));
});
fw.displayName = "ButtonGroup";
var Cs = U((e, t) => {
  const { icon: r, children: n, isRound: a, "aria-label": o, ...i } = e, s = r || n, l = Jn(s) ? Xn(s, {
    "aria-hidden": !0,
    focusable: !1
  }) : null;
  return /* @__PURE__ */ y.createElement(yl, {
    padding: "0",
    borderRadius: a ? "full" : void 0,
    ref: t,
    "aria-label": o,
    ...i
  }, l);
});
Cs.displayName = "IconButton";
var rn = (...e) => e.filter(Boolean).join(" "), Wa = (e) => e ? "" : void 0, Ni = (e) => e ? !0 : void 0;
function Gu(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
var [pw, T0] = Kt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [mw, nn] = Kt({
  strict: !1,
  name: "FormControlContext"
});
function vw(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: a,
    isReadOnly: o,
    ...i
  } = e, s = Ep(), l = t || `field-${s}`, c = `${l}-label`, u = `${l}-feedback`, d = `${l}-helptext`, [f, m] = Ze(!1), [p, h] = Ze(!1), [x, C] = Ze(!1), _ = ct((R = {}, z = null) => ({
    id: d,
    ...R,
    ref: Ji(z, (V) => {
      V && h(!0);
    })
  }), [d]), k = ct((R = {}, z = null) => ({
    ...R,
    ref: z,
    "data-focus": Wa(x),
    "data-disabled": Wa(a),
    "data-invalid": Wa(n),
    "data-readonly": Wa(o),
    id: R.id ?? c,
    htmlFor: R.htmlFor ?? l
  }), [l, a, x, n, o, c]), T = ct((R = {}, z = null) => ({
    id: u,
    ...R,
    ref: Ji(z, (V) => {
      V && m(!0);
    }),
    "aria-live": "polite"
  }), [u]), w = ct((R = {}, z = null) => ({
    ...R,
    ...i,
    ref: z,
    role: "group"
  }), [i]), I = ct((R = {}, z = null) => ({
    ...R,
    ref: z,
    role: "presentation",
    "aria-hidden": !0,
    children: R.children || "*"
  }), []);
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!o,
    isDisabled: !!a,
    isFocused: !!x,
    onFocus: () => C(!0),
    onBlur: () => C(!1),
    hasFeedbackText: f,
    setHasFeedbackText: m,
    hasHelpText: p,
    setHasHelpText: h,
    id: l,
    labelId: c,
    feedbackId: u,
    helpTextId: d,
    htmlProps: i,
    getHelpTextProps: _,
    getErrorMessageProps: T,
    getRootProps: w,
    getLabelProps: k,
    getRequiredIndicatorProps: I
  };
}
var hw = U(function(t, r) {
  const n = ra("Form", t), a = Me(t), {
    getRootProps: o,
    htmlProps: i,
    ...s
  } = vw(a), l = rn("chakra-form-control", t.className);
  return /* @__PURE__ */ y.createElement(mw, {
    value: s
  }, /* @__PURE__ */ y.createElement(pw, {
    value: n
  }, /* @__PURE__ */ y.createElement(W.div, {
    ...o({}, r),
    className: l,
    __css: n.container
  })));
});
hw.displayName = "FormControl";
var gw = U(function(t, r) {
  const n = nn(), a = T0(), o = rn("chakra-form__helper-text", t.className);
  return /* @__PURE__ */ y.createElement(W.div, {
    ...n == null ? void 0 : n.getHelpTextProps(t, r),
    __css: a.helperText,
    className: o
  });
});
gw.displayName = "FormHelperText";
function yw(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: a, ...o } = bw(e);
  return {
    ...o,
    disabled: t,
    readOnly: n,
    required: a,
    "aria-invalid": Ni(r),
    "aria-required": Ni(a),
    "aria-readonly": Ni(n)
  };
}
function bw(e) {
  const t = nn(), {
    id: r,
    disabled: n,
    readOnly: a,
    required: o,
    isRequired: i,
    isInvalid: s,
    isReadOnly: l,
    isDisabled: c,
    onFocus: u,
    onBlur: d,
    ...f
  } = e, m = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return t != null && t.hasFeedbackText && (t != null && t.isInvalid) && m.push(t.feedbackId), t != null && t.hasHelpText && m.push(t.helpTextId), {
    ...f,
    "aria-describedby": m.join(" ") || void 0,
    id: r ?? (t == null ? void 0 : t.id),
    isDisabled: n ?? c ?? (t == null ? void 0 : t.isDisabled),
    isReadOnly: a ?? l ?? (t == null ? void 0 : t.isReadOnly),
    isRequired: o ?? i ?? (t == null ? void 0 : t.isRequired),
    isInvalid: s ?? (t == null ? void 0 : t.isInvalid),
    onFocus: Gu(t == null ? void 0 : t.onFocus, u),
    onBlur: Gu(t == null ? void 0 : t.onBlur, d)
  };
}
var [Sw, xw] = Kt({
  name: "FormErrorStylesContext",
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
}), Cw = U((e, t) => {
  const r = ra("FormError", e), n = Me(e), a = nn();
  return a != null && a.isInvalid ? /* @__PURE__ */ y.createElement(Sw, {
    value: r
  }, /* @__PURE__ */ y.createElement(W.div, {
    ...a == null ? void 0 : a.getErrorMessageProps(n, t),
    className: rn("chakra-form__error-message", e.className),
    __css: {
      display: "flex",
      alignItems: "center",
      ...r.text
    }
  })) : null;
});
Cw.displayName = "FormErrorMessage";
var ww = U((e, t) => {
  const r = xw(), n = nn();
  if (!(n != null && n.isInvalid))
    return null;
  const a = rn("chakra-form__error-icon", e.className);
  return /* @__PURE__ */ y.createElement(dr, {
    ref: t,
    "aria-hidden": !0,
    ...e,
    __css: r.icon,
    className: a
  }, /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  }));
});
ww.displayName = "FormErrorIcon";
var _w = U(function(t, r) {
  const n = Xe("FormLabel", t), a = Me(t), {
    className: o,
    children: i,
    requiredIndicator: s = /* @__PURE__ */ y.createElement(A0, null),
    optionalIndicator: l = null,
    ...c
  } = a, u = nn(), d = (u == null ? void 0 : u.getLabelProps(c, r)) ?? { ref: r, ...c };
  return /* @__PURE__ */ y.createElement(W.label, {
    ...d,
    className: rn("chakra-form__label", a.className),
    __css: {
      display: "block",
      textAlign: "start",
      ...n
    }
  }, i, u != null && u.isRequired ? s : l);
});
_w.displayName = "FormLabel";
var A0 = U(function(t, r) {
  const n = nn(), a = T0();
  if (!(n != null && n.isRequired))
    return null;
  const o = rn("chakra-form__required-indicator", t.className);
  return /* @__PURE__ */ y.createElement(W.span, {
    ...n == null ? void 0 : n.getRequiredIndicatorProps(t, r),
    __css: a.requiredIndicator,
    className: o
  });
});
A0.displayName = "RequiredIndicator";
function Zu(e, t) {
  const r = Fe(!1), n = Fe(!1);
  we(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), we(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
function Ew(e) {
  return /* @__PURE__ */ y.createElement(dr, {
    focusable: "false",
    "aria-hidden": !0,
    ...e
  }, /* @__PURE__ */ y.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}
var P0 = U(function(t, r) {
  const n = Xe("CloseButton", t), { children: a, isDisabled: o, __css: i, ...s } = Me(t), l = {
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  };
  return /* @__PURE__ */ y.createElement(W.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: o,
    __css: {
      ...l,
      ...n,
      ...i
    },
    ...s
  }, a || /* @__PURE__ */ y.createElement(Ew, {
    width: "1em",
    height: "1em"
  }));
});
P0.displayName = "CloseButton";
var R0 = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`, kw = () => /* @__PURE__ */ y.createElement(ea, {
  styles: R0
}), Tw = () => /* @__PURE__ */ y.createElement(ea, {
  styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${R0}
    `
});
function M0(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Aw(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function ur(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Aw(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var Pw = U(function(e, t) {
  const { ratio: r = 4 / 3, children: n, className: a, ...o } = e, i = Kn.only(n), s = We("chakra-aspect-ratio", a);
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: t,
    position: "relative",
    className: s,
    _before: {
      height: 0,
      content: '""',
      display: "block",
      paddingBottom: ur(r, (l) => `${1 / l * 100}%`)
    },
    __css: {
      "& > *:not(style)": {
        overflow: "hidden",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      "& > img, & > video": {
        objectFit: "cover"
      }
    },
    ...o
  }, i);
});
Pw.displayName = "AspectRatio";
var Rw = U(function(t, r) {
  const n = Xe("Badge", t), { className: a, ...o } = Me(t);
  return /* @__PURE__ */ y.createElement(W.span, {
    ref: r,
    className: We("chakra-badge", t.className),
    ...o,
    __css: {
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      ...n
    }
  });
});
Rw.displayName = "Badge";
var jo = W("div");
jo.displayName = "Box";
var L0 = U(function(t, r) {
  const { size: n, centerContent: a = !0, ...o } = t, i = a ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ y.createElement(jo, {
    ref: r,
    boxSize: n,
    __css: {
      ...i,
      flexShrink: 0,
      flexGrow: 0
    },
    ...o
  });
});
L0.displayName = "Square";
var Mw = U(function(t, r) {
  const { size: n, ...a } = t;
  return /* @__PURE__ */ y.createElement(L0, {
    size: n,
    ref: r,
    borderRadius: "9999px",
    ...a
  });
});
Mw.displayName = "Circle";
var Lw = W("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
Lw.displayName = "Center";
var Iw = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
U(function(t, r) {
  const { axis: n = "both", ...a } = t;
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    __css: Iw[n],
    ...a,
    position: "absolute"
  });
});
var Ow = U(function(t, r) {
  const n = Xe("Code", t), { className: a, ...o } = Me(t);
  return /* @__PURE__ */ y.createElement(W.code, {
    ref: r,
    className: We("chakra-code", t.className),
    ...o,
    __css: {
      display: "inline-block",
      ...n
    }
  });
});
Ow.displayName = "Code";
var zw = U(function(t, r) {
  const { className: n, centerContent: a, ...o } = Me(t), i = Xe("Container", t);
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    className: We("chakra-container", n),
    ...o,
    __css: {
      ...i,
      ...a && {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }
  });
});
zw.displayName = "Container";
var Nw = U(function(t, r) {
  const {
    borderLeftWidth: n,
    borderBottomWidth: a,
    borderTopWidth: o,
    borderRightWidth: i,
    borderWidth: s,
    borderStyle: l,
    borderColor: c,
    ...u
  } = Xe("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: m,
    ...p
  } = Me(t), h = {
    vertical: {
      borderLeftWidth: n || i || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: a || o || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ y.createElement(W.hr, {
    ref: r,
    "aria-orientation": f,
    ...p,
    __css: {
      ...u,
      border: "0",
      borderColor: c,
      borderStyle: l,
      ...h[f],
      ...m
    },
    className: We("chakra-divider", d)
  });
});
Nw.displayName = "Divider";
var Vw = U(function(t, r) {
  const { direction: n, align: a, justify: o, wrap: i, basis: s, grow: l, shrink: c, ...u } = t, d = {
    display: "flex",
    flexDirection: n,
    alignItems: a,
    justifyContent: o,
    flexWrap: i,
    flexBasis: s,
    flexGrow: l,
    flexShrink: c
  };
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    __css: d,
    ...u
  });
});
Vw.displayName = "Flex";
var I0 = U(function(t, r) {
  const {
    templateAreas: n,
    gap: a,
    rowGap: o,
    columnGap: i,
    column: s,
    row: l,
    autoFlow: c,
    autoRows: u,
    templateRows: d,
    autoColumns: f,
    templateColumns: m,
    ...p
  } = t, h = {
    display: "grid",
    gridTemplateAreas: n,
    gridGap: a,
    gridRowGap: o,
    gridColumnGap: i,
    gridAutoColumns: f,
    gridColumn: s,
    gridRow: l,
    gridAutoFlow: c,
    gridAutoRows: u,
    gridTemplateRows: d,
    gridTemplateColumns: m
  };
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    __css: h,
    ...p
  });
});
I0.displayName = "Grid";
function Ku(e) {
  return ur(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
var Fw = U(function(t, r) {
  const {
    area: n,
    colSpan: a,
    colStart: o,
    colEnd: i,
    rowEnd: s,
    rowSpan: l,
    rowStart: c,
    ...u
  } = t, d = M0({
    gridArea: n,
    gridColumn: Ku(a),
    gridRow: Ku(l),
    gridColumnStart: o,
    gridColumnEnd: i,
    gridRowStart: c,
    gridRowEnd: s
  });
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    __css: d,
    ...u
  });
});
Fw.displayName = "GridItem";
var $w = U(function(t, r) {
  const n = Xe("Heading", t), { className: a, ...o } = Me(t);
  return /* @__PURE__ */ y.createElement(W.h2, {
    ref: r,
    className: We("chakra-heading", t.className),
    ...o,
    __css: n
  });
});
$w.displayName = "Heading";
U(function(t, r) {
  const n = Xe("Mark", t), a = Me(t);
  return /* @__PURE__ */ y.createElement(jo, {
    ref: r,
    ...a,
    as: "mark",
    __css: { bg: "transparent", whiteSpace: "nowrap", ...n }
  });
});
var Dw = U(function(t, r) {
  const n = Xe("Kbd", t), { className: a, ...o } = Me(t);
  return /* @__PURE__ */ y.createElement(W.kbd, {
    ref: r,
    className: We("chakra-kbd", a),
    ...o,
    __css: {
      fontFamily: "mono",
      ...n
    }
  });
});
Dw.displayName = "Kbd";
var Bw = U(function(t, r) {
  const n = Xe("Link", t), { className: a, isExternal: o, ...i } = Me(t);
  return /* @__PURE__ */ y.createElement(W.a, {
    target: o ? "_blank" : void 0,
    rel: o ? "noopener" : void 0,
    ref: r,
    className: We("chakra-link", a),
    ...i,
    __css: n
  });
});
Bw.displayName = "Link";
U(function(t, r) {
  const { isExternal: n, target: a, rel: o, className: i, ...s } = t;
  return /* @__PURE__ */ y.createElement(W.a, {
    ...s,
    ref: r,
    className: We("chakra-linkbox__overlay", i),
    rel: n ? "noopener noreferrer" : o,
    target: n ? "_blank" : a,
    __css: {
      position: "static",
      "&::before": {
        content: "''",
        cursor: "inherit",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%"
      }
    }
  });
});
U(function(t, r) {
  const { className: n, ...a } = t;
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    position: "relative",
    ...a,
    className: We("chakra-linkbox", n),
    __css: {
      "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
        position: "relative",
        zIndex: 1
      }
    }
  });
});
var [jw, O0] = Kt({
  name: "ListStylesContext",
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
}), bl = U(function(t, r) {
  const n = ra("List", t), {
    children: a,
    styleType: o = "none",
    stylePosition: i,
    spacing: s,
    ...l
  } = Me(t), c = k0(a), d = s ? { ["& > *:not(style) ~ *:not(style)"]: { mt: s } } : {};
  return /* @__PURE__ */ y.createElement(jw, {
    value: n
  }, /* @__PURE__ */ y.createElement(W.ul, {
    ref: r,
    listStyleType: o,
    listStylePosition: i,
    role: "list",
    __css: { ...n.container, ...d },
    ...l
  }, c));
});
bl.displayName = "List";
var Ww = U((e, t) => {
  const { as: r, ...n } = e;
  return /* @__PURE__ */ y.createElement(bl, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...n
  });
});
Ww.displayName = "OrderedList";
var Hw = U(function(t, r) {
  const { as: n, ...a } = t;
  return /* @__PURE__ */ y.createElement(bl, {
    ref: r,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...a
  });
});
Hw.displayName = "UnorderedList";
var Uw = U(function(t, r) {
  const n = O0();
  return /* @__PURE__ */ y.createElement(W.li, {
    ref: r,
    ...t,
    __css: n.item
  });
});
Uw.displayName = "ListItem";
var Yw = U(function(t, r) {
  const n = O0();
  return /* @__PURE__ */ y.createElement(dr, {
    ref: r,
    role: "presentation",
    ...t,
    __css: n.icon
  });
});
Yw.displayName = "ListIcon";
var qw = U(function(t, r) {
  const { columns: n, spacingX: a, spacingY: o, spacing: i, minChildWidth: s, ...l } = t, c = Bd(), u = s ? Zw(s, c) : Kw(n);
  return /* @__PURE__ */ y.createElement(I0, {
    ref: r,
    gap: i,
    columnGap: a,
    rowGap: o,
    templateColumns: u,
    ...l
  });
});
qw.displayName = "SimpleGrid";
function Gw(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function Zw(e, t) {
  return ur(e, (r) => {
    const n = q5("sizes", r, Gw(r))(t);
    return r === null ? null : `repeat(auto-fit, minmax(${n}, 1fr))`;
  });
}
function Kw(e) {
  return ur(e, (t) => t === null ? null : `repeat(${t}, minmax(0, 1fr))`);
}
var Xw = W("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Xw.displayName = "Spacer";
var ws = "& > *:not(style) ~ *:not(style)";
function Jw(e) {
  const { spacing: t, direction: r } = e, n = {
    column: {
      marginTop: t,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: t },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: t,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: t,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return {
    flexDirection: r,
    [ws]: ur(r, (a) => n[a])
  };
}
function Qw(e) {
  const { spacing: t, direction: r } = e, n = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": ur(r, (a) => n[a])
  };
}
var z0 = (e) => /* @__PURE__ */ y.createElement(W.div, {
  className: "chakra-stack__item",
  ...e,
  __css: {
    display: "inline-block",
    flex: "0 0 auto",
    minWidth: 0,
    ...e.__css
  }
});
z0.displayName = "StackItem";
var Sl = U((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: a,
    justify: o,
    spacing: i = "0.5rem",
    wrap: s,
    children: l,
    divider: c,
    className: u,
    shouldWrapChildren: d,
    ...f
  } = e, m = r ? "row" : n ?? "column", p = Te(() => Jw({ direction: m, spacing: i }), [m, i]), h = Te(() => Qw({ spacing: i, direction: m }), [i, m]), x = !!c, C = !d && !x, _ = Te(() => {
    const T = k0(l);
    return C ? T : T.map((w, I) => {
      const R = typeof w.key < "u" ? w.key : I, z = I + 1 === T.length, Y = d ? /* @__PURE__ */ y.createElement(z0, {
        key: R
      }, w) : w;
      if (!x)
        return Y;
      const Se = Xn(c, {
        __css: h
      }), fe = z ? null : Se;
      return /* @__PURE__ */ y.createElement(xo, {
        key: R
      }, Y, fe);
    });
  }, [
    c,
    h,
    x,
    C,
    d,
    l
  ]), k = We("chakra-stack", u);
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: t,
    display: "flex",
    alignItems: a,
    justifyContent: o,
    flexDirection: p.flexDirection,
    flexWrap: s,
    className: k,
    __css: x ? {} : { [ws]: p[ws] },
    ...f
  }, _);
});
Sl.displayName = "Stack";
var to = U((e, t) => /* @__PURE__ */ y.createElement(Sl, {
  align: "center",
  ...e,
  direction: "row",
  ref: t
}));
to.displayName = "HStack";
var e_ = U((e, t) => /* @__PURE__ */ y.createElement(Sl, {
  align: "center",
  ...e,
  direction: "column",
  ref: t
}));
e_.displayName = "VStack";
var _s = U(function(t, r) {
  const n = Xe("Text", t), { className: a, align: o, decoration: i, casing: s, ...l } = Me(t), c = M0({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ y.createElement(W.p, {
    ref: r,
    className: We("chakra-text", t.className),
    ...c,
    ...l,
    __css: n
  });
});
_s.displayName = "Text";
function Xu(e) {
  return typeof e == "number" ? `${e}px` : e;
}
var t_ = U(function(t, r) {
  const {
    spacing: n = "0.5rem",
    spacingX: a,
    spacingY: o,
    children: i,
    justify: s,
    direction: l,
    align: c,
    className: u,
    shouldWrapChildren: d,
    ...f
  } = t, m = Te(() => {
    const { spacingX: h = n, spacingY: x = n } = {
      spacingX: a,
      spacingY: o
    };
    return {
      "--chakra-wrap-x-spacing": (C) => ur(h, (_) => Xu(Fi("space", _)(C))),
      "--chakra-wrap-y-spacing": (C) => ur(x, (_) => Xu(Fi("space", _)(C))),
      "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
      "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: s,
      alignItems: c,
      flexDirection: l,
      listStyleType: "none",
      padding: "0",
      margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
      "& > *:not(style)": {
        margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
      }
    };
  }, [n, a, o, s, c, l]), p = Te(() => d ? Kn.map(i, (h, x) => /* @__PURE__ */ y.createElement(N0, {
    key: x
  }, h)) : i, [i, d]);
  return /* @__PURE__ */ y.createElement(W.div, {
    ref: r,
    className: We("chakra-wrap", u),
    overflow: "hidden",
    ...f
  }, /* @__PURE__ */ y.createElement(W.ul, {
    className: "chakra-wrap__list",
    __css: m
  }, p));
});
t_.displayName = "Wrap";
var N0 = U(function(t, r) {
  const { className: n, ...a } = t;
  return /* @__PURE__ */ y.createElement(W.li, {
    ref: r,
    __css: { display: "flex", alignItems: "flex-start" },
    className: We("chakra-wrap__listitem", n),
    ...a
  });
});
N0.displayName = "WrapItem";
var r_ = {
  body: {
    classList: {
      add() {
      },
      remove() {
      }
    }
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  }
}, V0 = r_, zr = () => {
}, n_ = {
  document: V0,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener: zr,
  removeEventListener: zr,
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia() {
    return {
      matches: !1,
      addListener: zr,
      removeListener: zr
    };
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
  setTimeout: () => 0,
  clearTimeout: zr,
  setInterval: () => 0,
  clearInterval: zr
}, a_ = n_, o_ = {
  window: a_,
  document: V0
}, F0 = typeof window < "u" ? { window, document } : o_, $0 = dt(F0);
$0.displayName = "EnvironmentContext";
function D0(e) {
  const { children: t, environment: r } = e, [n, a] = Ze(null), [o, i] = Ze(!1);
  we(() => i(!0), []);
  const s = Te(() => {
    if (r)
      return r;
    const l = n == null ? void 0 : n.ownerDocument, c = n == null ? void 0 : n.ownerDocument.defaultView;
    return l ? { document: l, window: c } : F0;
  }, [n, r]);
  return /* @__PURE__ */ y.createElement($0.Provider, {
    value: s
  }, t, !r && o && /* @__PURE__ */ y.createElement("span", {
    id: "__chakra_env",
    hidden: !0,
    ref: (l) => {
      kp(() => {
        l && a(l);
      });
    }
  }));
}
D0.displayName = "EnvironmentProvider";
var [i_, s_] = Kt({
  strict: !1,
  name: "PortalManagerContext"
});
function B0(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ y.createElement(i_, {
    value: { zIndex: r }
  }, t);
}
B0.displayName = "PortalManager";
var [j0, l_] = Kt({
  strict: !1,
  name: "PortalContext"
}), xl = "chakra-portal", c_ = ".chakra-portal", u_ = (e) => /* @__PURE__ */ y.createElement("div", {
  className: "chakra-portal-zIndex",
  style: {
    position: "absolute",
    zIndex: e.zIndex,
    top: 0,
    left: 0,
    right: 0
  }
}, e.children), d_ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, a] = Ze(null), o = Fe(null), [, i] = Ze({});
  we(() => i({}), []);
  const s = l_(), l = s_();
  ro(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    o.current = u.createElement("div"), o.current.className = xl, d.appendChild(o.current), i({});
    const f = o.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ y.createElement(u_, {
    zIndex: l == null ? void 0 : l.zIndex
  }, r) : r;
  return o.current ? td(/* @__PURE__ */ y.createElement(j0, {
    value: o.current
  }, c), o.current) : /* @__PURE__ */ y.createElement("span", {
    ref: (u) => {
      u && a(u);
    }
  });
}, f_ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, a = r.current, o = a ?? (typeof window < "u" ? document.body : void 0), i = Te(() => {
    const l = a == null ? void 0 : a.ownerDocument.createElement("div");
    return l && (l.className = xl), l;
  }, [a]), [, s] = Ze({});
  return ro(() => s({}), []), ro(() => {
    if (!(!i || !o))
      return o.appendChild(i), () => {
        o.removeChild(i);
      };
  }, [i, o]), o && i ? td(/* @__PURE__ */ y.createElement(j0, {
    value: n ? i : null
  }, t), i) : null;
};
function Wo(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ y.createElement(f_, {
    containerRef: r,
    ...n
  }) : /* @__PURE__ */ y.createElement(d_, {
    ...n
  });
}
Wo.className = xl;
Wo.selector = c_;
Wo.displayName = "Portal";
var p_ = (...e) => e.filter(Boolean).join(" "), m_ = (e) => e ? "" : void 0;
function v_(e, t) {
  const r = {}, n = {};
  for (const [a, o] of Object.entries(e))
    t.includes(a) ? r[a] = o : n[a] = o;
  return [r, n];
}
var W0 = U(function(t, r) {
  const { children: n, placeholder: a, className: o, ...i } = t;
  return /* @__PURE__ */ y.createElement(W.select, {
    ...i,
    ref: r,
    className: p_("chakra-select", o)
  }, a && /* @__PURE__ */ y.createElement("option", {
    value: ""
  }, a), n);
});
W0.displayName = "SelectField";
var H0 = U((e, t) => {
  var r;
  const n = ra("Select", e), {
    rootProps: a,
    placeholder: o,
    icon: i,
    color: s,
    height: l,
    h: c,
    minH: u,
    minHeight: d,
    iconColor: f,
    iconSize: m,
    ...p
  } = Me(e), [h, x] = v_(p, $m), C = yw(x), _ = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: s
  }, k = {
    paddingEnd: "2rem",
    ...n.field,
    _focus: {
      zIndex: "unset",
      ...(r = n.field) == null ? void 0 : r._focus
    }
  };
  return /* @__PURE__ */ y.createElement(W.div, {
    className: "chakra-select__wrapper",
    __css: _,
    ...h,
    ...a
  }, /* @__PURE__ */ y.createElement(W0, {
    ref: t,
    height: c ?? l,
    minH: u ?? d,
    placeholder: o,
    ...C,
    __css: k
  }, e.children), /* @__PURE__ */ y.createElement(U0, {
    "data-disabled": m_(C.disabled),
    ...(f || s) && { color: f || s },
    __css: n.icon,
    ...m && { fontSize: m }
  }, i));
});
H0.displayName = "Select";
var h_ = (e) => /* @__PURE__ */ y.createElement("svg", {
  viewBox: "0 0 24 24",
  ...e
}, /* @__PURE__ */ y.createElement("path", {
  fill: "currentColor",
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
})), g_ = W("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
}), U0 = (e) => {
  const { children: t = /* @__PURE__ */ y.createElement(h_, null), ...r } = e, n = Xn(t, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: !1,
    "aria-hidden": !0,
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return /* @__PURE__ */ y.createElement(g_, {
    ...r,
    className: "chakra-select__icon-wrapper"
  }, Jn(t) ? n : null);
};
U0.displayName = "SelectIcon";
function y_(e, t) {
  const r = sS(e);
  we(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function b_(e, ...t) {
  return S_(e) ? e(...t) : e;
}
var S_ = (e) => typeof e == "function", x_ = (e, t) => e.find((r) => r.id === t);
function Ju(e, t) {
  const r = Y0(e, t), n = r ? e[r].findIndex((a) => a.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function Y0(e, t) {
  for (const [r, n] of Object.entries(e))
    if (x_(n, t))
      return r;
}
function C_(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function w_(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, a = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, o = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", i = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: 5500,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: a,
    right: o,
    left: i
  };
}
var __ = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, On = E_(__);
function E_(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (a) => {
    t = a(t), r.forEach((o) => o());
  };
  return {
    getState: () => t,
    subscribe: (a) => (r.add(a), () => {
      n(() => e), r.delete(a);
    }),
    removeToast: (a, o) => {
      n((i) => ({
        ...i,
        [o]: i[o].filter((s) => s.id != a)
      }));
    },
    notify: (a, o) => {
      const i = k_(a, o), { position: s, id: l } = i;
      return n((c) => {
        const d = s.includes("top") ? [i, ...c[s] ?? []] : [...c[s] ?? [], i];
        return {
          ...c,
          [s]: d
        };
      }), l;
    },
    update: (a, o) => {
      a && n((i) => {
        const s = { ...i }, { position: l, index: c } = Ju(s, a);
        return l && c !== -1 && (s[l][c] = {
          ...s[l][c],
          ...o,
          message: A_(o)
        }), s;
      });
    },
    closeAll: ({ positions: a } = {}) => {
      n((o) => (a ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce((l, c) => (l[c] = o[c].map((u) => ({
        ...u,
        requestClose: !0
      })), l), { ...o }));
    },
    close: (a) => {
      n((o) => {
        const i = Y0(o, a);
        return i ? {
          ...o,
          [i]: o[i].map((s) => s.id == a ? {
            ...s,
            requestClose: !0
          } : s)
        } : o;
      });
    },
    isActive: (a) => !!Ju(On.getState(), a).position
  };
}
var Qu = 0;
function k_(e, t = {}) {
  Qu += 1;
  const r = t.id ?? Qu, n = t.position ?? "bottom";
  return {
    id: r,
    message: e,
    position: n,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => On.removeToast(String(r), n),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var T_ = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: a,
    isClosable: o,
    onClose: i,
    description: s,
    icon: l
  } = e, c = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ y.createElement(C0, {
    addRole: !1,
    status: t,
    variant: r,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto"
  }, /* @__PURE__ */ y.createElement(_0, null, l), /* @__PURE__ */ y.createElement(W.div, {
    flex: "1",
    maxWidth: "100%"
  }, a && /* @__PURE__ */ y.createElement(E0, {
    id: c == null ? void 0 : c.title
  }, a), s && /* @__PURE__ */ y.createElement(w0, {
    id: c == null ? void 0 : c.description,
    display: "block"
  }, s)), o && /* @__PURE__ */ y.createElement(P0, {
    size: "sm",
    onClick: i,
    position: "absolute",
    insetEnd: 1,
    top: 1
  }));
};
function A_(e = {}) {
  const { render: t, toastComponent: r = T_ } = e;
  return (a) => typeof t == "function" ? t({ ...a, ...e }) : /* @__PURE__ */ y.createElement(r, {
    ...a,
    ...e
  });
}
var P_ = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, q0 = Tp((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: a,
    requestClose: o = !1,
    position: i = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: c = P_,
    toastSpacing: u = "0.5rem"
  } = e, [d, f] = Ze(s), m = B4();
  Zu(() => {
    m || n == null || n();
  }, [m]), Zu(() => {
    f(s);
  }, [s]);
  const p = () => f(null), h = () => f(s), x = () => {
    m && a();
  };
  we(() => {
    m && o && a();
  }, [m, o, a]), y_(x, d);
  const C = Te(() => ({
    pointerEvents: "auto",
    maxWidth: 560,
    minWidth: 300,
    margin: u,
    ...l
  }), [l, u]), _ = Te(() => C_(i), [i]);
  return /* @__PURE__ */ y.createElement(YC.li, {
    layout: !0,
    className: "chakra-toast",
    variants: c,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    onHoverStart: p,
    onHoverEnd: h,
    custom: { position: i },
    style: _
  }, /* @__PURE__ */ y.createElement(W.div, {
    role: "status",
    "aria-atomic": "true",
    className: "chakra-toast__inner",
    __css: C
  }, b_(r, { id: t, onClose: x })));
});
q0.displayName = "ToastComponent";
var R_ = (e) => {
  const t = Ap(On.subscribe, On.getState, On.getState), {
    children: r,
    motionVariants: n,
    component: a = q0,
    portalProps: o
  } = e, s = Object.keys(t).map((l) => {
    const c = t[l];
    return /* @__PURE__ */ y.createElement("ul", {
      role: "region",
      "aria-live": "polite",
      key: l,
      id: `chakra-toast-manager-${l}`,
      style: w_(l)
    }, /* @__PURE__ */ y.createElement(XC, {
      initial: !1
    }, c.map((u) => /* @__PURE__ */ y.createElement(a, {
      key: u.id,
      motionVariants: n,
      ...u
    }))));
  });
  return /* @__PURE__ */ y.createElement(y.Fragment, null, r, /* @__PURE__ */ y.createElement(Wo, {
    ...o
  }, s));
}, M_ = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetCSS: a = !0,
    theme: o = {},
    environment: i,
    cssVarsRoot: s
  } = e, l = /* @__PURE__ */ y.createElement(D0, {
    environment: i
  }, t);
  return /* @__PURE__ */ y.createElement(G5, {
    theme: o,
    cssVarsRoot: s
  }, /* @__PURE__ */ y.createElement(nd, {
    colorModeManager: r,
    options: o.config
  }, a ? /* @__PURE__ */ y.createElement(Tw, null) : /* @__PURE__ */ y.createElement(kw, null), /* @__PURE__ */ y.createElement(K5, null), n ? /* @__PURE__ */ y.createElement(B0, {
    zIndex: n
  }, l) : l));
}, L_ = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: a,
  ...o
}) {
  return /* @__PURE__ */ y.createElement(M_, {
    theme: n,
    ...o
  }, r, /* @__PURE__ */ y.createElement(R_, {
    ...a
  }));
}, I_ = L_(V5);
const ed = (e) => {
  const {
    children: t,
    index: r,
    setPageIndex: n,
    pageIndex: a,
    colorScheme: o = "teal"
  } = e;
  return /* @__PURE__ */ rt(
    yl,
    {
      size: "sm",
      onClick: () => {
        n(r);
      },
      colorScheme: o,
      variant: a === r ? "solid" : "link",
      children: t
    }
  );
}, N_ = (e) => {
  const {
    pageSize: t,
    setPageSize: r,
    pageIndex: n,
    setPageIndex: a,
    totalItemsCount: o,
    pageSizeOptions: i = [10, 25, 50],
    showOptions: s = !0,
    labelOptions: l = "Items mostrados",
    colorScheme: c = "teal",
    showQuantity: u = !1
  } = e, d = () => {
    let f = [];
    const m = Math.ceil(o / t);
    if (m <= 5)
      for (let p = 0; p < m; p++)
        f.push(
          /* @__PURE__ */ rt(
            ed,
            {
              colorScheme: c,
              setPageIndex: a,
              index: p,
              pageIndex: n,
              children: p + 1
            }
          )
        );
    else {
      let p = Math.max(0, n - 2), h = Math.min(m - 1, p + 4);
      h === m - 1 && (p = Math.max(0, h - 4));
      for (let x = p; x <= h; x++)
        f.push(
          /* @__PURE__ */ rt(
            ed,
            {
              colorScheme: c,
              setPageIndex: a,
              index: x,
              pageIndex: n,
              children: x + 1
            }
          )
        );
    }
    return f.unshift(
      /* @__PURE__ */ rt(
        Cs,
        {
          icon: /* @__PURE__ */ rt(nS, {}),
          size: "sm",
          onClick: () => {
            a(n - 1);
          },
          isDisabled: !(n > 0),
          colorScheme: c,
          variant: "link",
          children: "Atras"
        }
      )
    ), f.push(
      /* @__PURE__ */ rt(
        Cs,
        {
          icon: /* @__PURE__ */ rt(rS, {}),
          size: "sm",
          onClick: () => {
            a(n + 1);
          },
          isDisabled: !(n + 1 < m),
          colorScheme: c,
          variant: "link",
          children: "Atras"
        }
      )
    ), f;
  };
  return /* @__PURE__ */ rt(I_, { children: /* @__PURE__ */ ka(to, { w: "100%", p: 2, children: [
    /* @__PURE__ */ rt(to, { w: "40%", children: s && /* @__PURE__ */ ka(Mp, { children: [
      /* @__PURE__ */ ka(_s, { fontSize: "sm", children: [
        " ",
        l,
        ": "
      ] }),
      /* @__PURE__ */ rt(
        H0,
        {
          w: "auto",
          size: "sm",
          variant: "unstyled",
          value: t,
          onChange: (f) => {
            r(f.target.value);
          },
          children: i.map((f) => /* @__PURE__ */ rt("option", { value: f, children: f }, f.id))
        }
      ),
      u && /* @__PURE__ */ ka(_s, { fontSize: "sm", children: [
        "Total: ",
        o
      ] })
    ] }) }),
    /* @__PURE__ */ rt(jo, { w: "60%", justifyContent: "right", display: "flex", children: /* @__PURE__ */ rt(to, { children: d() }) })
  ] }) });
};
let Wt = "asc";
const V_ = (e, t) => {
  Wt === "asc" ? Wt = "des" : Wt = "asc";
  let r = e.split(".");
  return { sortedData: t.sort((a, o) => {
    let i = a, s = o;
    for (let l = 0; l < r.length; l++)
      i = i[r[l]], s = s[r[l]];
    return !isNaN(i) && !isNaN(s) && typeof i != "boolean" && typeof s != "boolean" ? (i = parseInt(i), s = parseInt(s), Wt === "asc" ? i - s : s - i) : typeof i == "string" && typeof s == "string" ? (i = i.toLowerCase(), i = i.trim(), s = s.toLowerCase(), s = s.trim(), Wt === "asc" ? i.localeCompare(s) : s.localeCompare(i)) : Date.parse(i) && Date.parse(s) ? (i = Date.parse(i), s = Date.parse(s), Wt === "asc" ? i - s : s - i) : typeof i == "boolean" && typeof s == "boolean" ? Wt === "asc" ? i === s ? 0 : i ? -1 : 1 : s === i ? 0 : s ? -1 : 1 : Wt === "asc" ? i - s : s - i;
  }), direction: Wt };
};
export {
  N_ as PaginationTable,
  V_ as sortData
};
//# sourceMappingURL=index.es.js.map
