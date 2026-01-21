var vc = e => {
    throw TypeError(e)
};
var al = (e, t, n) => t.has(e) || vc("Cannot " + n);
var b = (e, t, n) => (al(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Z = (e, t, n) => t.has(e) ? vc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    B = (e, t, n, r) => (al(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    be = (e, t, n) => (al(e, t, "access private method"), n);
var hi = (e, t, n, r) => ({
    set _(o) {
        B(e, t, o, n)
    }, get _() {
        return b(e, t, r)
    }
});

function kg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r) if (o !== "default" && !(o in e)) {
                const i = Object.getOwnPropertyDescriptor(r, o);
                i && Object.defineProperty(e, o, i.get ? i : {enumerable: !0, get: () => r[o]})
            }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
}

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {childList: !0, subtree: !0});

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function Sf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var Ef = {exports: {}}, Rs = {}, Cf = {exports: {}}, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri = Symbol.for("react.element"), Pg = Symbol.for("react.portal"), bg = Symbol.for("react.fragment"),
    Tg = Symbol.for("react.strict_mode"), Ng = Symbol.for("react.profiler"), Rg = Symbol.for("react.provider"),
    Og = Symbol.for("react.context"), Ag = Symbol.for("react.forward_ref"), _g = Symbol.for("react.suspense"),
    Mg = Symbol.for("react.memo"), jg = Symbol.for("react.lazy"), yc = Symbol.iterator;

function Lg(e) {
    return e === null || typeof e != "object" ? null : (e = yc && e[yc] || e["@@iterator"], typeof e == "function" ? e : null)
}

var kf = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, Pf = Object.assign, bf = {};

function eo(e, t, n) {
    this.props = e, this.context = t, this.refs = bf, this.updater = n || kf
}

eo.prototype.isReactComponent = {};
eo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
eo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Tf() {
}

Tf.prototype = eo.prototype;

function Xa(e, t, n) {
    this.props = e, this.context = t, this.refs = bf, this.updater = n || kf
}

var Za = Xa.prototype = new Tf;
Za.constructor = Xa;
Pf(Za, eo.prototype);
Za.isPureReactComponent = !0;
var wc = Array.isArray, Nf = Object.prototype.hasOwnProperty, Ja = {current: null},
    Rf = {key: !0, ref: !0, __self: !0, __source: !0};

function Of(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Nf.call(t, r) && !Rf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n; else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {$$typeof: ri, type: e, key: i, ref: s, props: o, _owner: Ja.current}
}

function Ig(e, t) {
    return {$$typeof: ri, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function eu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ri
}

function Dg(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var xc = /\/+/g;

function ul(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Dg("" + e.key) : t.toString(36)
}

function Di(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0; else switch (i) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case ri:
                case Pg:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + ul(s, 0) : r, wc(o) ? (n = "", e != null && (n = e.replace(xc, "$&/") + "/"), Di(o, t, n, "", function (u) {
        return u
    })) : o != null && (eu(o) && (o = Ig(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(xc, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", wc(e)) for (var l = 0; l < e.length; l++) {
        i = e[l];
        var a = r + ul(i, l);
        s += Di(i, t, n, a, o)
    } else if (a = Lg(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done;) i = i.value, a = r + ul(i, l++), s += Di(i, t, n, a, o); else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function mi(e, t, n) {
    if (e == null) return e;
    var r = [], o = 0;
    return Di(e, r, "", "", function (i) {
        return t.call(n, i, o++)
    }), r
}

function zg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var Ie = {current: null}, zi = {transition: null},
    Fg = {ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: zi, ReactCurrentOwner: Ja};

function Af() {
    throw Error("act(...) is not supported in production builds of React.")
}

G.Children = {
    map: mi, forEach: function (e, t, n) {
        mi(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return mi(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return mi(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!eu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = eo;
G.Fragment = bg;
G.Profiler = Ng;
G.PureComponent = Xa;
G.StrictMode = Tg;
G.Suspense = _g;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fg;
G.act = Af;
G.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pf({}, e.props), o = e.key, i = e.ref, s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Ja.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Nf.call(t, a) && !Rf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n; else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {$$typeof: ri, type: e.type, key: o, ref: i, props: r, _owner: s}
};
G.createContext = function (e) {
    return e = {
        $$typeof: Og,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: Rg, _context: e}, e.Consumer = e
};
G.createElement = Of;
G.createFactory = function (e) {
    var t = Of.bind(null, e);
    return t.type = e, t
};
G.createRef = function () {
    return {current: null}
};
G.forwardRef = function (e) {
    return {$$typeof: Ag, render: e}
};
G.isValidElement = eu;
G.lazy = function (e) {
    return {$$typeof: jg, _payload: {_status: -1, _result: e}, _init: zg}
};
G.memo = function (e, t) {
    return {$$typeof: Mg, type: e, compare: t === void 0 ? null : t}
};
G.startTransition = function (e) {
    var t = zi.transition;
    zi.transition = {};
    try {
        e()
    } finally {
        zi.transition = t
    }
};
G.unstable_act = Af;
G.useCallback = function (e, t) {
    return Ie.current.useCallback(e, t)
};
G.useContext = function (e) {
    return Ie.current.useContext(e)
};
G.useDebugValue = function () {
};
G.useDeferredValue = function (e) {
    return Ie.current.useDeferredValue(e)
};
G.useEffect = function (e, t) {
    return Ie.current.useEffect(e, t)
};
G.useId = function () {
    return Ie.current.useId()
};
G.useImperativeHandle = function (e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
};
G.useInsertionEffect = function (e, t) {
    return Ie.current.useInsertionEffect(e, t)
};
G.useLayoutEffect = function (e, t) {
    return Ie.current.useLayoutEffect(e, t)
};
G.useMemo = function (e, t) {
    return Ie.current.useMemo(e, t)
};
G.useReducer = function (e, t, n) {
    return Ie.current.useReducer(e, t, n)
};
G.useRef = function (e) {
    return Ie.current.useRef(e)
};
G.useState = function (e) {
    return Ie.current.useState(e)
};
G.useSyncExternalStore = function (e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
};
G.useTransition = function () {
    return Ie.current.useTransition()
};
G.version = "18.3.1";
Cf.exports = G;
var w = Cf.exports;
const A = Sf(w), _f = kg({__proto__: null, default: A}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g = w, Ug = Symbol.for("react.element"), Bg = Symbol.for("react.fragment"),
    Vg = Object.prototype.hasOwnProperty, Wg = $g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Hg = {key: !0, ref: !0, __self: !0, __source: !0};

function Mf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Vg.call(t, r) && !Hg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {$$typeof: Ug, type: e, key: i, ref: s, props: o, _owner: Wg.current}
}

Rs.Fragment = Bg;
Rs.jsx = Mf;
Rs.jsxs = Mf;
Ef.exports = Rs;
var S = Ef.exports, jf = {exports: {}}, Ze = {}, Lf = {exports: {}}, If = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(T, N) {
        var L = T.length;
        T.push(N);
        e:for (; 0 < L;) {
            var W = L - 1 >>> 1, z = T[W];
            if (0 < o(z, N)) T[W] = N, T[L] = z, L = W; else break e
        }
    }

    function n(T) {
        return T.length === 0 ? null : T[0]
    }

    function r(T) {
        if (T.length === 0) return null;
        var N = T[0], L = T.pop();
        if (L !== N) {
            T[0] = L;
            e:for (var W = 0, z = T.length, K = z >>> 1; W < K;) {
                var q = 2 * (W + 1) - 1, me = T[q], Pe = q + 1, J = T[Pe];
                if (0 > o(me, L)) Pe < z && 0 > o(J, me) ? (T[W] = J, T[Pe] = L, W = Pe) : (T[W] = me, T[q] = L, W = q); else if (Pe < z && 0 > o(J, L)) T[W] = J, T[Pe] = L, W = Pe; else break e
            }
        }
        return N
    }

    function o(T, N) {
        var L = T.sortIndex - N.sortIndex;
        return L !== 0 ? L : T.id - N.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var s = Date, l = s.now();
        e.unstable_now = function () {
            return s.now() - l
        }
    }
    var a = [], u = [], c = 1, f = null, h = 3, d = !1, x = !1, v = !1,
        y = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(T) {
        for (var N = n(u); N !== null;) {
            if (N.callback === null) r(u); else if (N.startTime <= T) r(u), N.sortIndex = N.expirationTime, t(a, N); else break;
            N = n(u)
        }
    }

    function E(T) {
        if (v = !1, g(T), !x) if (n(a) !== null) x = !0, $(C); else {
            var N = n(u);
            N !== null && V(E, N.startTime - T)
        }
    }

    function C(T, N) {
        x = !1, v && (v = !1, m(R), R = -1), d = !0;
        var L = h;
        try {
            for (g(N), f = n(a); f !== null && (!(f.expirationTime > N) || T && !F());) {
                var W = f.callback;
                if (typeof W == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var z = W(f.expirationTime <= N);
                    N = e.unstable_now(), typeof z == "function" ? f.callback = z : f === n(a) && r(a), g(N)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var K = !0; else {
                var q = n(u);
                q !== null && V(E, q.startTime - N), K = !1
            }
            return K
        } finally {
            f = null, h = L, d = !1
        }
    }

    var k = !1, P = null, R = -1, M = 5, _ = -1;

    function F() {
        return !(e.unstable_now() - _ < M)
    }

    function D() {
        if (P !== null) {
            var T = e.unstable_now();
            _ = T;
            var N = !0;
            try {
                N = P(!0, T)
            } finally {
                N ? Q() : (k = !1, P = null)
            }
        } else k = !1
    }

    var Q;
    if (typeof p == "function") Q = function () {
        p(D)
    }; else if (typeof MessageChannel < "u") {
        var j = new MessageChannel, Y = j.port2;
        j.port1.onmessage = D, Q = function () {
            Y.postMessage(null)
        }
    } else Q = function () {
        y(D, 0)
    };

    function $(T) {
        P = T, k || (k = !0, Q())
    }

    function V(T, N) {
        R = y(function () {
            T(e.unstable_now())
        }, N)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (T) {
        T.callback = null
    }, e.unstable_continueExecution = function () {
        x || d || (x = !0, $(C))
    }, e.unstable_forceFrameRate = function (T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < T ? Math.floor(1e3 / T) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return h
    }, e.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, e.unstable_next = function (T) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = h
        }
        var L = h;
        h = N;
        try {
            return T()
        } finally {
            h = L
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (T, N) {
        switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
        }
        var L = h;
        h = T;
        try {
            return N()
        } finally {
            h = L
        }
    }, e.unstable_scheduleCallback = function (T, N, L) {
        var W = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? W + L : W) : L = W, T) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
        }
        return z = L + z, T = {
            id: c++,
            callback: N,
            priorityLevel: T,
            startTime: L,
            expirationTime: z,
            sortIndex: -1
        }, L > W ? (T.sortIndex = L, t(u, T), n(a) === null && T === n(u) && (v ? (m(R), R = -1) : v = !0, V(E, L - W))) : (T.sortIndex = z, t(a, T), x || d || (x = !0, $(C))), T
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function (T) {
        var N = h;
        return function () {
            var L = h;
            h = N;
            try {
                return T.apply(this, arguments)
            } finally {
                h = L
            }
        }
    }
})(If);
Lf.exports = If;
var Qg = Lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg = w, Xe = Qg;

function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var Df = new Set, jo = {};

function sr(e, t) {
    Hr(e, t), Hr(e + "Capture", t)
}

function Hr(e, t) {
    for (jo[e] = t, e = 0; e < t.length; e++) Df.add(t[e])
}

var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Bl = Object.prototype.hasOwnProperty,
    Gg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Sc = {}, Ec = {};

function Yg(e) {
    return Bl.call(Ec, e) ? !0 : Bl.call(Sc, e) ? !1 : Gg.test(e) ? Ec[e] = !0 : (Sc[e] = !0, !1)
}

function qg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Xg(e, t, n, r) {
    if (t === null || typeof t > "u" || qg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function De(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}

var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ke[e] = new De(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    ke[t] = new De(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ke[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ke[e] = new De(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    ke[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ke[e] = new De(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    ke[e] = new De(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ke[e] = new De(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    ke[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var tu = /[\-:]([a-z])/g;

function nu(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(tu, nu);
    ke[t] = new De(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(tu, nu);
    ke[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(tu, nu);
    ke[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ke.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ru(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Xg(t, n, o, r) && (n = null), r || o === null ? Yg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var Xt = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gi = Symbol.for("react.element"),
    gr = Symbol.for("react.portal"), vr = Symbol.for("react.fragment"), ou = Symbol.for("react.strict_mode"),
    Vl = Symbol.for("react.profiler"), zf = Symbol.for("react.provider"), Ff = Symbol.for("react.context"),
    iu = Symbol.for("react.forward_ref"), Wl = Symbol.for("react.suspense"), Hl = Symbol.for("react.suspense_list"),
    su = Symbol.for("react.memo"), un = Symbol.for("react.lazy"), $f = Symbol.for("react.offscreen"),
    Cc = Symbol.iterator;

function ao(e) {
    return e === null || typeof e != "object" ? null : (e = Cc && e[Cc] || e["@@iterator"], typeof e == "function" ? e : null)
}

var ce = Object.assign, cl;

function wo(e) {
    if (cl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        cl = t && t[1] || ""
    }
    return `
` + cl + e
}

var dl = !1;

function fl(e, t) {
    if (!e || dl) return "";
    dl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
                if (s !== 1 || l !== 1) do if (s--, l--, 0 > l || o[s] !== i[l]) {
                    var a = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                } while (1 <= s && 0 <= l);
                break
            }
        }
    } finally {
        dl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wo(e) : ""
}

function Zg(e) {
    switch (e.tag) {
        case 5:
            return wo(e.type);
        case 16:
            return wo("Lazy");
        case 13:
            return wo("Suspense");
        case 19:
            return wo("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = fl(e.type, !1), e;
        case 11:
            return e = fl(e.type.render, !1), e;
        case 1:
            return e = fl(e.type, !0), e;
        default:
            return ""
    }
}

function Ql(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case vr:
            return "Fragment";
        case gr:
            return "Portal";
        case Vl:
            return "Profiler";
        case ou:
            return "StrictMode";
        case Wl:
            return "Suspense";
        case Hl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ff:
            return (e.displayName || "Context") + ".Consumer";
        case zf:
            return (e._context.displayName || "Context") + ".Provider";
        case iu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case su:
            return t = e.displayName || null, t !== null ? t : Ql(e.type) || "Memo";
        case un:
            t = e._payload, e = e._init;
            try {
                return Ql(e(t))
            } catch {
            }
    }
    return null
}

function Jg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ql(t);
        case 8:
            return t === ou ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Rn(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function Uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function ev(e) {
    var t = Uf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get, i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return o.call(this)
            }, set: function (s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (s) {
                r = "" + s
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function vi(e) {
    e._valueTracker || (e._valueTracker = ev(e))
}

function Bf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Uf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Kl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function kc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Rn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Vf(e, t) {
    t = t.checked, t != null && ru(e, "checked", t, !1)
}

function Gl(e, t) {
    Vf(e, t);
    var n = Rn(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yl(e, t.type, Rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Yl(e, t, n) {
    (t !== "number" || Zi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var xo = Array.isArray;

function Nr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function ql(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return ce({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function bc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(O(92));
            if (xo(n)) {
                if (1 < n.length) throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: Rn(n)}
}

function Wf(e, t) {
    var n = Rn(t.value), r = Rn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Tc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Hf(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Xl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var yi, Qf = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (yi = yi || document.createElement("div"), yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Lo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Co = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, tv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Co).forEach(function (e) {
    tv.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Co[t] = Co[e]
    })
});

function Kf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Co.hasOwnProperty(e) && Co[e] ? ("" + t).trim() : t + "px"
}

function Gf(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = Kf(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}

var nv = ce({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Zl(e, t) {
    if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(O(62))
    }
}

function Jl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var ea = null;

function lu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var ta = null, Rr = null, Or = null;

function Nc(e) {
    if (e = si(e)) {
        if (typeof ta != "function") throw Error(O(280));
        var t = e.stateNode;
        t && (t = js(t), ta(e.stateNode, e.type, t))
    }
}

function Yf(e) {
    Rr ? Or ? Or.push(e) : Or = [e] : Rr = e
}

function qf() {
    if (Rr) {
        var e = Rr, t = Or;
        if (Or = Rr = null, Nc(e), t) for (e = 0; e < t.length; e++) Nc(t[e])
    }
}

function Xf(e, t) {
    return e(t)
}

function Zf() {
}

var pl = !1;

function Jf(e, t, n) {
    if (pl) return e(t, n);
    pl = !0;
    try {
        return Xf(e, t, n)
    } finally {
        pl = !1, (Rr !== null || Or !== null) && (Zf(), qf())
    }
}

function Io(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = js(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(O(231, t, typeof n));
    return n
}

var na = !1;
if (Ht) try {
    var uo = {};
    Object.defineProperty(uo, "passive", {
        get: function () {
            na = !0
        }
    }), window.addEventListener("test", uo, uo), window.removeEventListener("test", uo, uo)
} catch {
    na = !1
}

function rv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}

var ko = !1, Ji = null, es = !1, ra = null, ov = {
    onError: function (e) {
        ko = !0, Ji = e
    }
};

function iv(e, t, n, r, o, i, s, l, a) {
    ko = !1, Ji = null, rv.apply(ov, arguments)
}

function sv(e, t, n, r, o, i, s, l, a) {
    if (iv.apply(this, arguments), ko) {
        if (ko) {
            var u = Ji;
            ko = !1, Ji = null
        } else throw Error(O(198));
        es || (es = !0, ra = u)
    }
}

function lr(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function ep(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Rc(e) {
    if (lr(e) !== e) throw Error(O(188))
}

function lv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = lr(e), t === null) throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Rc(o), e;
                if (i === r) return Rc(o), t;
                i = i.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return) n = o, r = i; else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(O(189))
            }
        }
        if (n.alternate !== r) throw Error(O(190))
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? e : t
}

function tp(e) {
    return e = lv(e), e !== null ? np(e) : null
}

function np(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = np(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var rp = Xe.unstable_scheduleCallback, Oc = Xe.unstable_cancelCallback, av = Xe.unstable_shouldYield,
    uv = Xe.unstable_requestPaint, he = Xe.unstable_now, cv = Xe.unstable_getCurrentPriorityLevel,
    au = Xe.unstable_ImmediatePriority, op = Xe.unstable_UserBlockingPriority, ts = Xe.unstable_NormalPriority,
    dv = Xe.unstable_LowPriority, ip = Xe.unstable_IdlePriority, Os = null, _t = null;

function fv(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function") try {
        _t.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var wt = Math.clz32 ? Math.clz32 : mv, pv = Math.log, hv = Math.LN2;

function mv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pv(e) / hv | 0) | 0
}

var wi = 64, xi = 4194304;

function So(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = So(l) : (i &= s, i !== 0 && (r = So(i)))
    } else s = n & ~o, s !== 0 ? r = So(s) : i !== 0 && (r = So(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - wt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function gv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function vv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - wt(i), l = 1 << s, a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = gv(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function oa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function sp() {
    var e = wi;
    return wi <<= 1, !(wi & 4194240) && (wi = 64), e
}

function hl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function oi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n
}

function yv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - wt(n), i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function uu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - wt(n), o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}

var ee = 0;

function lp(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var ap, cu, up, cp, dp, ia = !1, Si = [], Sn = null, En = null, Cn = null, Do = new Map, zo = new Map, dn = [],
    wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ac(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Sn = null;
            break;
        case"dragenter":
        case"dragleave":
            En = null;
            break;
        case"mouseover":
        case"mouseout":
            Cn = null;
            break;
        case"pointerover":
        case"pointerout":
            Do.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            zo.delete(t.pointerId)
    }
}

function co(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = si(t), t !== null && cu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function xv(e, t, n, r, o) {
    switch (t) {
        case"focusin":
            return Sn = co(Sn, e, t, n, r, o), !0;
        case"dragenter":
            return En = co(En, e, t, n, r, o), !0;
        case"mouseover":
            return Cn = co(Cn, e, t, n, r, o), !0;
        case"pointerover":
            var i = o.pointerId;
            return Do.set(i, co(Do.get(i) || null, e, t, n, r, o)), !0;
        case"gotpointercapture":
            return i = o.pointerId, zo.set(i, co(zo.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function fp(e) {
    var t = Vn(e.target);
    if (t !== null) {
        var n = lr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = ep(n), t !== null) {
                    e.blockedOn = t, dp(e.priority, function () {
                        up(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ea = r, n.target.dispatchEvent(r), ea = null
        } else return t = si(n), t !== null && cu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function _c(e, t, n) {
    Fi(e) && n.delete(t)
}

function Sv() {
    ia = !1, Sn !== null && Fi(Sn) && (Sn = null), En !== null && Fi(En) && (En = null), Cn !== null && Fi(Cn) && (Cn = null), Do.forEach(_c), zo.forEach(_c)
}

function fo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ia || (ia = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Sv)))
}

function Fo(e) {
    function t(o) {
        return fo(o, e)
    }

    if (0 < Si.length) {
        fo(Si[0], e);
        for (var n = 1; n < Si.length; n++) {
            var r = Si[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Sn !== null && fo(Sn, e), En !== null && fo(En, e), Cn !== null && fo(Cn, e), Do.forEach(t), zo.forEach(t), n = 0; n < dn.length; n++) r = dn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0], n.blockedOn === null);) fp(n), n.blockedOn === null && dn.shift()
}

var Ar = Xt.ReactCurrentBatchConfig, rs = !0;

function Ev(e, t, n, r) {
    var o = ee, i = Ar.transition;
    Ar.transition = null;
    try {
        ee = 1, du(e, t, n, r)
    } finally {
        ee = o, Ar.transition = i
    }
}

function Cv(e, t, n, r) {
    var o = ee, i = Ar.transition;
    Ar.transition = null;
    try {
        ee = 4, du(e, t, n, r)
    } finally {
        ee = o, Ar.transition = i
    }
}

function du(e, t, n, r) {
    if (rs) {
        var o = sa(e, t, n, r);
        if (o === null) kl(e, t, r, os, n), Ac(e, r); else if (xv(o, e, t, n, r)) r.stopPropagation(); else if (Ac(e, r), t & 4 && -1 < wv.indexOf(e)) {
            for (; o !== null;) {
                var i = si(o);
                if (i !== null && ap(i), i = sa(e, t, n, r), i === null && kl(e, t, r, os, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else kl(e, t, r, null, n)
    }
}

var os = null;

function sa(e, t, n, r) {
    if (os = null, e = lu(r), e = Vn(e), e !== null) if (t = lr(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = ep(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return os = e, null
}

function pp(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (cv()) {
                case au:
                    return 1;
                case op:
                    return 4;
                case ts:
                case dv:
                    return 16;
                case ip:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var yn = null, fu = null, $i = null;

function hp() {
    if ($i) return $i;
    var e, t = fu, n = t.length, r, o = "value" in yn ? yn.value : yn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
    return $i = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Ui(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ei() {
    return !0
}

function Mc() {
    return !1
}

function Je(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ei : Mc, this.isPropagationStopped = Mc, this
    }

    return ce(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ei)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ei)
        }, persist: function () {
        }, isPersistent: Ei
    }), t
}

var to = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, pu = Je(to), ii = ce({}, to, {view: 0, detail: 0}), kv = Je(ii), ml, gl, po, As = ce({}, ii, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: hu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== po && (po && e.type === "mousemove" ? (ml = e.screenX - po.screenX, gl = e.screenY - po.screenY) : gl = ml = 0, po = e), ml)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : gl
        }
    }), jc = Je(As), Pv = ce({}, As, {dataTransfer: 0}), bv = Je(Pv), Tv = ce({}, ii, {relatedTarget: 0}), vl = Je(Tv),
    Nv = ce({}, to, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), Rv = Je(Nv), Ov = ce({}, to, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), Av = Je(Ov), _v = ce({}, to, {data: 0}), Lc = Je(_v), Mv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, jv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Lv = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function Iv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lv[e]) ? !!t[e] : !1
}

function hu() {
    return Iv
}

var Dv = ce({}, ii, {
    key: function (e) {
        if (e.key) {
            var t = Mv[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hu,
    charCode: function (e) {
        return e.type === "keypress" ? Ui(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), zv = Je(Dv), Fv = ce({}, As, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Ic = Je(Fv), $v = ce({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hu
}), Uv = Je($v), Bv = ce({}, to, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), Vv = Je(Bv), Wv = ce({}, As, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), Hv = Je(Wv), Qv = [9, 13, 27, 32], mu = Ht && "CompositionEvent" in window, Po = null;
Ht && "documentMode" in document && (Po = document.documentMode);
var Kv = Ht && "TextEvent" in window && !Po, mp = Ht && (!mu || Po && 8 < Po && 11 >= Po), Dc = " ", zc = !1;

function gp(e, t) {
    switch (e) {
        case"keyup":
            return Qv.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function vp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var yr = !1;

function Gv(e, t) {
    switch (e) {
        case"compositionend":
            return vp(t);
        case"keypress":
            return t.which !== 32 ? null : (zc = !0, Dc);
        case"textInput":
            return e = t.data, e === Dc && zc ? null : e;
        default:
            return null
    }
}

function Yv(e, t) {
    if (yr) return e === "compositionend" || !mu && gp(e, t) ? (e = hp(), $i = fu = yn = null, yr = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return mp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var qv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qv[e.type] : t === "textarea"
}

function yp(e, t, n, r) {
    Yf(r), t = is(t, "onChange"), 0 < t.length && (n = new pu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var bo = null, $o = null;

function Xv(e) {
    Rp(e, 0)
}

function _s(e) {
    var t = Sr(e);
    if (Bf(t)) return e
}

function Zv(e, t) {
    if (e === "change") return t
}

var wp = !1;
if (Ht) {
    var yl;
    if (Ht) {
        var wl = "oninput" in document;
        if (!wl) {
            var $c = document.createElement("div");
            $c.setAttribute("oninput", "return;"), wl = typeof $c.oninput == "function"
        }
        yl = wl
    } else yl = !1;
    wp = yl && (!document.documentMode || 9 < document.documentMode)
}

function Uc() {
    bo && (bo.detachEvent("onpropertychange", xp), $o = bo = null)
}

function xp(e) {
    if (e.propertyName === "value" && _s($o)) {
        var t = [];
        yp(t, $o, e, lu(e)), Jf(Xv, t)
    }
}

function Jv(e, t, n) {
    e === "focusin" ? (Uc(), bo = t, $o = n, bo.attachEvent("onpropertychange", xp)) : e === "focusout" && Uc()
}

function ey(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _s($o)
}

function ty(e, t) {
    if (e === "click") return _s(t)
}

function ny(e, t) {
    if (e === "input" || e === "change") return _s(t)
}

function ry(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var St = typeof Object.is == "function" ? Object.is : ry;

function Uo(e, t) {
    if (St(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Bl.call(t, o) || !St(e[o], t[o])) return !1
    }
    return !0
}

function Bc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Vc(e, t) {
    var n = Bc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Bc(n)
    }
}

function Sp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Ep() {
    for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = Zi(e.document)
    }
    return t
}

function gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function oy(e) {
    var t = Ep(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sp(n.ownerDocument.documentElement, n)) {
        if (r !== null && gu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length, i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Vc(n, i);
                var s = Vc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var iy = Ht && "documentMode" in document && 11 >= document.documentMode, wr = null, la = null, To = null, aa = !1;

function Wc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    aa || wr == null || wr !== Zi(r) || (r = wr, "selectionStart" in r && gu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), To && Uo(To, r) || (To = r, r = is(la, "onSelect"), 0 < r.length && (t = new pu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = wr)))
}

function Ci(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var xr = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionend: Ci("Transition", "TransitionEnd")
}, xl = {}, Cp = {};
Ht && (Cp = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);

function Ms(e) {
    if (xl[e]) return xl[e];
    if (!xr[e]) return e;
    var t = xr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Cp) return xl[e] = t[n];
    return e
}

var kp = Ms("animationend"), Pp = Ms("animationiteration"), bp = Ms("animationstart"), Tp = Ms("transitionend"),
    Np = new Map,
    Hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ln(e, t) {
    Np.set(e, t), sr(t, [e])
}

for (var Sl = 0; Sl < Hc.length; Sl++) {
    var El = Hc[Sl], sy = El.toLowerCase(), ly = El[0].toUpperCase() + El.slice(1);
    Ln(sy, "on" + ly)
}
Ln(kp, "onAnimationEnd");
Ln(Pp, "onAnimationIteration");
Ln(bp, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Tp, "onTransitionEnd");
Hr("onMouseEnter", ["mouseout", "mouseover"]);
Hr("onMouseLeave", ["mouseout", "mouseover"]);
Hr("onPointerEnter", ["pointerout", "pointerover"]);
Hr("onPointerLeave", ["pointerout", "pointerover"]);
sr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));

function Qc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, sv(r, t, void 0, e), e.currentTarget = null
}

function Rp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], o = r.event;
        r = r.listeners;
        e:{
            var i = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
                var l = r[s], a = l.instance, u = l.currentTarget;
                if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
                Qc(o, l, u), i = a
            } else for (s = 0; s < r.length; s++) {
                if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
                Qc(o, l, u), i = a
            }
        }
    }
    if (es) throw e = ra, es = !1, ra = null, e
}

function oe(e, t) {
    var n = t[pa];
    n === void 0 && (n = t[pa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Op(t, e, 2, !1), n.add(r))
}

function Cl(e, t, n) {
    var r = 0;
    t && (r |= 4), Op(n, e, r, t)
}

var ki = "_reactListening" + Math.random().toString(36).slice(2);

function Bo(e) {
    if (!e[ki]) {
        e[ki] = !0, Df.forEach(function (n) {
            n !== "selectionchange" && (ay.has(n) || Cl(n, !1, e), Cl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ki] || (t[ki] = !0, Cl("selectionchange", !1, t))
    }
}

function Op(e, t, n, r) {
    switch (pp(t)) {
        case 1:
            var o = Ev;
            break;
        case 4:
            o = Cv;
            break;
        default:
            o = du
    }
    n = o.bind(null, t, n, e), o = void 0, !na || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
}

function kl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4) for (s = r.return; s !== null;) {
                var a = s.tag;
                if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                s = s.return
            }
            for (; l !== null;) {
                if (s = Vn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Jf(function () {
        var u = i, c = lu(n), f = [];
        e:{
            var h = Np.get(e);
            if (h !== void 0) {
                var d = pu, x = e;
                switch (e) {
                    case"keypress":
                        if (Ui(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        d = zv;
                        break;
                    case"focusin":
                        x = "focus", d = vl;
                        break;
                    case"focusout":
                        x = "blur", d = vl;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        d = vl;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        d = jc;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        d = bv;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        d = Uv;
                        break;
                    case kp:
                    case Pp:
                    case bp:
                        d = Rv;
                        break;
                    case Tp:
                        d = Vv;
                        break;
                    case"scroll":
                        d = kv;
                        break;
                    case"wheel":
                        d = Hv;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        d = Av;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        d = Ic
                }
                var v = (t & 4) !== 0, y = !v && e === "scroll", m = v ? h !== null ? h + "Capture" : null : h;
                v = [];
                for (var p = u, g; p !== null;) {
                    g = p;
                    var E = g.stateNode;
                    if (g.tag === 5 && E !== null && (g = E, m !== null && (E = Io(p, m), E != null && v.push(Vo(p, E, g)))), y) break;
                    p = p.return
                }
                0 < v.length && (h = new d(h, x, null, n, c), f.push({event: h, listeners: v}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (h = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", h && n !== ea && (x = n.relatedTarget || n.fromElement) && (Vn(x) || x[Qt])) break e;
                if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = u, x = x ? Vn(x) : null, x !== null && (y = lr(x), x !== y || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = u), d !== x)) {
                    if (v = jc, E = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Ic, E = "onPointerLeave", m = "onPointerEnter", p = "pointer"), y = d == null ? h : Sr(d), g = x == null ? h : Sr(x), h = new v(E, p + "leave", d, n, c), h.target = y, h.relatedTarget = g, E = null, Vn(c) === u && (v = new v(m, p + "enter", x, n, c), v.target = g, v.relatedTarget = y, E = v), y = E, d && x) t:{
                        for (v = d, m = x, p = 0, g = v; g; g = mr(g)) p++;
                        for (g = 0, E = m; E; E = mr(E)) g++;
                        for (; 0 < p - g;) v = mr(v), p--;
                        for (; 0 < g - p;) m = mr(m), g--;
                        for (; p--;) {
                            if (v === m || m !== null && v === m.alternate) break t;
                            v = mr(v), m = mr(m)
                        }
                        v = null
                    } else v = null;
                    d !== null && Kc(f, h, d, v, !1), x !== null && y !== null && Kc(f, y, x, v, !0)
                }
            }
            e:{
                if (h = u ? Sr(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var C = Zv; else if (Fc(h)) if (wp) C = ny; else {
                    C = ey;
                    var k = Jv
                } else (d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = ty);
                if (C && (C = C(e, u))) {
                    yp(f, C, n, c);
                    break e
                }
                k && k(e, h, u), e === "focusout" && (k = h._wrapperState) && k.controlled && h.type === "number" && Yl(h, "number", h.value)
            }
            switch (k = u ? Sr(u) : window, e) {
                case"focusin":
                    (Fc(k) || k.contentEditable === "true") && (wr = k, la = u, To = null);
                    break;
                case"focusout":
                    To = la = wr = null;
                    break;
                case"mousedown":
                    aa = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    aa = !1, Wc(f, n, c);
                    break;
                case"selectionchange":
                    if (iy) break;
                case"keydown":
                case"keyup":
                    Wc(f, n, c)
            }
            var P;
            if (mu) e:{
                switch (e) {
                    case"compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case"compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            } else yr ? gp(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
            R && (mp && n.locale !== "ko" && (yr || R !== "onCompositionStart" ? R === "onCompositionEnd" && yr && (P = hp()) : (yn = c, fu = "value" in yn ? yn.value : yn.textContent, yr = !0)), k = is(u, R), 0 < k.length && (R = new Lc(R, e, null, n, c), f.push({
                event: R,
                listeners: k
            }), P ? R.data = P : (P = vp(n), P !== null && (R.data = P)))), (P = Kv ? Gv(e, n) : Yv(e, n)) && (u = is(u, "onBeforeInput"), 0 < u.length && (c = new Lc("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: u
            }), c.data = P))
        }
        Rp(f, t)
    })
}

function Vo(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e, i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Io(e, n), i != null && r.unshift(Vo(e, i, o)), i = Io(e, t), i != null && r.push(Vo(e, i, o))), e = e.return
    }
    return r
}

function mr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Kc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n, a = l.alternate, u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, o ? (a = Io(n, i), a != null && s.unshift(Vo(n, a, l))) : o || (a = Io(n, i), a != null && s.push(Vo(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({event: t, listeners: s})
}

var uy = /\r\n?/g, cy = /\u0000|\uFFFD/g;

function Gc(e) {
    return (typeof e == "string" ? e : "" + e).replace(uy, `
`).replace(cy, "")
}

function Pi(e, t, n) {
    if (t = Gc(t), Gc(e) !== t && n) throw Error(O(425))
}

function ss() {
}

var ua = null, ca = null;

function da(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var fa = typeof setTimeout == "function" ? setTimeout : void 0,
    dy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yc = typeof Promise == "function" ? Promise : void 0,
    fy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yc < "u" ? function (e) {
        return Yc.resolve(null).then(e).catch(py)
    } : fa;

function py(e) {
    setTimeout(function () {
        throw e
    })
}

function Pl(e, t) {
    var n = t, r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), Fo(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Fo(t)
}

function kn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function qc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var no = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + no, Wo = "__reactProps$" + no,
    Qt = "__reactContainer$" + no, pa = "__reactEvents$" + no, hy = "__reactListeners$" + no,
    my = "__reactHandles$" + no;

function Vn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Qt] || n[Ot]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = qc(e); e !== null;) {
                if (n = e[Ot]) return n;
                e = qc(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function si(e) {
    return e = e[Ot] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Sr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(O(33))
}

function js(e) {
    return e[Wo] || null
}

var ha = [], Er = -1;

function In(e) {
    return {current: e}
}

function ie(e) {
    0 > Er || (e.current = ha[Er], ha[Er] = null, Er--)
}

function ne(e, t) {
    Er++, ha[Er] = e.current, e.current = t
}

var On = {}, Ae = In(On), Ue = In(!1), er = On;

function Qr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return On;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Be(e) {
    return e = e.childContextTypes, e != null
}

function ls() {
    ie(Ue), ie(Ae)
}

function Xc(e, t, n) {
    if (Ae.current !== On) throw Error(O(168));
    ne(Ae, t), ne(Ue, n)
}

function Ap(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(O(108, Jg(e) || "Unknown", o));
    return ce({}, n, r)
}

function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || On, er = Ae.current, ne(Ae, e), ne(Ue, Ue.current), !0
}

function Zc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(O(169));
    n ? (e = Ap(e, t, er), r.__reactInternalMemoizedMergedChildContext = e, ie(Ue), ie(Ae), ne(Ae, e)) : ie(Ue), ne(Ue, n)
}

var $t = null, Ls = !1, bl = !1;

function _p(e) {
    $t === null ? $t = [e] : $t.push(e)
}

function gy(e) {
    Ls = !0, _p(e)
}

function Dn() {
    if (!bl && $t !== null) {
        bl = !0;
        var e = 0, t = ee;
        try {
            var n = $t;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            $t = null, Ls = !1
        } catch (o) {
            throw $t !== null && ($t = $t.slice(e + 1)), rp(au, Dn), o
        } finally {
            ee = t, bl = !1
        }
    }
    return null
}

var Cr = [], kr = 0, us = null, cs = 0, nt = [], rt = 0, tr = null, Bt = 1, Vt = "";

function Un(e, t) {
    Cr[kr++] = cs, Cr[kr++] = us, us = e, cs = t
}

function Mp(e, t, n) {
    nt[rt++] = Bt, nt[rt++] = Vt, nt[rt++] = tr, tr = e;
    var r = Bt;
    e = Vt;
    var o = 32 - wt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - wt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Bt = 1 << 32 - wt(t) + o | n << o | r, Vt = i + e
    } else Bt = 1 << i | n << o | r, Vt = e
}

function vu(e) {
    e.return !== null && (Un(e, 1), Mp(e, 1, 0))
}

function yu(e) {
    for (; e === us;) us = Cr[--kr], Cr[kr] = null, cs = Cr[--kr], Cr[kr] = null;
    for (; e === tr;) tr = nt[--rt], nt[rt] = null, Vt = nt[--rt], nt[rt] = null, Bt = nt[--rt], nt[rt] = null
}

var Ye = null, Ge = null, le = !1, yt = null;

function jp(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Jc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ge = kn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tr !== null ? {
                id: Bt,
                overflow: Vt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Ge = null, !0) : !1;
        default:
            return !1
    }
}

function ma(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ga(e) {
    if (le) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!Jc(e, t)) {
                if (ma(e)) throw Error(O(418));
                t = kn(n.nextSibling);
                var r = Ye;
                t && Jc(e, t) ? jp(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Ye = e)
            }
        } else {
            if (ma(e)) throw Error(O(418));
            e.flags = e.flags & -4097 | 2, le = !1, Ye = e
        }
    }
}

function ed(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ye = e
}

function bi(e) {
    if (e !== Ye) return !1;
    if (!le) return ed(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !da(e.type, e.memoizedProps)), t && (t = Ge)) {
        if (ma(e)) throw Lp(), Error(O(418));
        for (; t;) jp(e, t), t = kn(t.nextSibling)
    }
    if (ed(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = kn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else Ge = Ye ? kn(e.stateNode.nextSibling) : null;
    return !0
}

function Lp() {
    for (var e = Ge; e;) e = kn(e.nextSibling)
}

function Kr() {
    Ge = Ye = null, le = !1
}

function wu(e) {
    yt === null ? yt = [e] : yt.push(e)
}

var vy = Xt.ReactCurrentBatchConfig;

function ho(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(O(309));
                var r = n.stateNode
            }
            if (!r) throw Error(O(147, e));
            var o = r, i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(O(284));
        if (!n._owner) throw Error(O(290, e))
    }
    return e
}

function Ti(e, t) {
    throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function td(e) {
    var t = e._init;
    return t(e._payload)
}

function Ip(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p], m.flags |= 16) : g.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function o(m, p) {
        return m = Nn(m, p), m.index = 0, m.sibling = null, m
    }

    function i(m, p, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < p ? (m.flags |= 2, p) : g) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function l(m, p, g, E) {
        return p === null || p.tag !== 6 ? (p = Ml(g, m.mode, E), p.return = m, p) : (p = o(p, g), p.return = m, p)
    }

    function a(m, p, g, E) {
        var C = g.type;
        return C === vr ? c(m, p, g.props.children, E, g.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === un && td(C) === p.type) ? (E = o(p, g.props), E.ref = ho(m, p, g), E.return = m, E) : (E = Gi(g.type, g.key, g.props, null, m.mode, E), E.ref = ho(m, p, g), E.return = m, E)
    }

    function u(m, p, g, E) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = jl(g, m.mode, E), p.return = m, p) : (p = o(p, g.children || []), p.return = m, p)
    }

    function c(m, p, g, E, C) {
        return p === null || p.tag !== 7 ? (p = Jn(g, m.mode, E, C), p.return = m, p) : (p = o(p, g), p.return = m, p)
    }

    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Ml("" + p, m.mode, g), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case gi:
                    return g = Gi(p.type, p.key, p.props, null, m.mode, g), g.ref = ho(m, null, p), g.return = m, g;
                case gr:
                    return p = jl(p, m.mode, g), p.return = m, p;
                case un:
                    var E = p._init;
                    return f(m, E(p._payload), g)
            }
            if (xo(p) || ao(p)) return p = Jn(p, m.mode, g, null), p.return = m, p;
            Ti(m, p)
        }
        return null
    }

    function h(m, p, g, E) {
        var C = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : l(m, p, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case gi:
                    return g.key === C ? a(m, p, g, E) : null;
                case gr:
                    return g.key === C ? u(m, p, g, E) : null;
                case un:
                    return C = g._init, h(m, p, C(g._payload), E)
            }
            if (xo(g) || ao(g)) return C !== null ? null : c(m, p, g, E, null);
            Ti(m, g)
        }
        return null
    }

    function d(m, p, g, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number") return m = m.get(g) || null, l(p, m, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case gi:
                    return m = m.get(E.key === null ? g : E.key) || null, a(p, m, E, C);
                case gr:
                    return m = m.get(E.key === null ? g : E.key) || null, u(p, m, E, C);
                case un:
                    var k = E._init;
                    return d(m, p, g, k(E._payload), C)
            }
            if (xo(E) || ao(E)) return m = m.get(g) || null, c(p, m, E, C, null);
            Ti(p, E)
        }
        return null
    }

    function x(m, p, g, E) {
        for (var C = null, k = null, P = p, R = p = 0, M = null; P !== null && R < g.length; R++) {
            P.index > R ? (M = P, P = null) : M = P.sibling;
            var _ = h(m, P, g[R], E);
            if (_ === null) {
                P === null && (P = M);
                break
            }
            e && P && _.alternate === null && t(m, P), p = i(_, p, R), k === null ? C = _ : k.sibling = _, k = _, P = M
        }
        if (R === g.length) return n(m, P), le && Un(m, R), C;
        if (P === null) {
            for (; R < g.length; R++) P = f(m, g[R], E), P !== null && (p = i(P, p, R), k === null ? C = P : k.sibling = P, k = P);
            return le && Un(m, R), C
        }
        for (P = r(m, P); R < g.length; R++) M = d(P, m, R, g[R], E), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? R : M.key), p = i(M, p, R), k === null ? C = M : k.sibling = M, k = M);
        return e && P.forEach(function (F) {
            return t(m, F)
        }), le && Un(m, R), C
    }

    function v(m, p, g, E) {
        var C = ao(g);
        if (typeof C != "function") throw Error(O(150));
        if (g = C.call(g), g == null) throw Error(O(151));
        for (var k = C = null, P = p, R = p = 0, M = null, _ = g.next(); P !== null && !_.done; R++, _ = g.next()) {
            P.index > R ? (M = P, P = null) : M = P.sibling;
            var F = h(m, P, _.value, E);
            if (F === null) {
                P === null && (P = M);
                break
            }
            e && P && F.alternate === null && t(m, P), p = i(F, p, R), k === null ? C = F : k.sibling = F, k = F, P = M
        }
        if (_.done) return n(m, P), le && Un(m, R), C;
        if (P === null) {
            for (; !_.done; R++, _ = g.next()) _ = f(m, _.value, E), _ !== null && (p = i(_, p, R), k === null ? C = _ : k.sibling = _, k = _);
            return le && Un(m, R), C
        }
        for (P = r(m, P); !_.done; R++, _ = g.next()) _ = d(P, m, R, _.value, E), _ !== null && (e && _.alternate !== null && P.delete(_.key === null ? R : _.key), p = i(_, p, R), k === null ? C = _ : k.sibling = _, k = _);
        return e && P.forEach(function (D) {
            return t(m, D)
        }), le && Un(m, R), C
    }

    function y(m, p, g, E) {
        if (typeof g == "object" && g !== null && g.type === vr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case gi:
                    e:{
                        for (var C = g.key, k = p; k !== null;) {
                            if (k.key === C) {
                                if (C = g.type, C === vr) {
                                    if (k.tag === 7) {
                                        n(m, k.sibling), p = o(k, g.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === un && td(C) === k.type) {
                                    n(m, k.sibling), p = o(k, g.props), p.ref = ho(m, k, g), p.return = m, m = p;
                                    break e
                                }
                                n(m, k);
                                break
                            } else t(m, k);
                            k = k.sibling
                        }
                        g.type === vr ? (p = Jn(g.props.children, m.mode, E, g.key), p.return = m, m = p) : (E = Gi(g.type, g.key, g.props, null, m.mode, E), E.ref = ho(m, p, g), E.return = m, m = E)
                    }
                    return s(m);
                case gr:
                    e:{
                        for (k = g.key; p !== null;) {
                            if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(m, p.sibling), p = o(p, g.children || []), p.return = m, m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            } else t(m, p);
                            p = p.sibling
                        }
                        p = jl(g, m.mode, E), p.return = m, m = p
                    }
                    return s(m);
                case un:
                    return k = g._init, y(m, p, k(g._payload), E)
            }
            if (xo(g)) return x(m, p, g, E);
            if (ao(g)) return v(m, p, g, E);
            Ti(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, g), p.return = m, m = p) : (n(m, p), p = Ml(g, m.mode, E), p.return = m, m = p), s(m)) : n(m, p)
    }

    return y
}

var Gr = Ip(!0), Dp = Ip(!1), ds = In(null), fs = null, Pr = null, xu = null;

function Su() {
    xu = Pr = fs = null
}

function Eu(e) {
    var t = ds.current;
    ie(ds), e._currentValue = t
}

function va(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function _r(e, t) {
    fs = e, xu = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), e.firstContext = null)
}

function st(e) {
    var t = e._currentValue;
    if (xu !== e) if (e = {context: e, memoizedValue: t, next: null}, Pr === null) {
        if (fs === null) throw Error(O(308));
        Pr = e, fs.dependencies = {lanes: 0, firstContext: e}
    } else Pr = Pr.next = e;
    return t
}

var Wn = null;

function Cu(e) {
    Wn === null ? Wn = [e] : Wn.push(e)
}

function zp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Cu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Kt(e, r)
}

function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var cn = !1;

function ku(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function Fp(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Wt(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function Pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Kt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Cu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Kt(e, n)
}

function Bi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, uu(e, n)
    }
}

function nd(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null, i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ps(e, t, n, r) {
    var o = e.updateQueue;
    cn = !1;
    var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l, u = a.next;
        a.next = null, s === null ? i = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0, c = u = a = null, l = i;
        do {
            var h = l.lane, d = l.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e:{
                    var x = e, v = l;
                    switch (h = t, d = n, v.tag) {
                        case 1:
                            if (x = v.payload, typeof x == "function") {
                                f = x.call(d, f, h);
                                break e
                            }
                            f = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = v.payload, h = typeof x == "function" ? x.call(d, f, h) : x, h == null) break e;
                            f = ce({}, f, h);
                            break e;
                        case 2:
                            cn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [l] : h.push(l))
            } else d = {
                eventTime: d,
                lane: h,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = d, a = f) : c = c.next = d, s |= h;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        rr |= s, e.lanes = s, e.memoizedState = f
    }
}

function rd(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function") throw Error(O(191, o));
            o.call(r)
        }
    }
}

var li = {}, Mt = In(li), Ho = In(li), Qo = In(li);

function Hn(e) {
    if (e === li) throw Error(O(174));
    return e
}

function Pu(e, t) {
    switch (ne(Qo, t), ne(Ho, e), ne(Mt, li), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Xl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xl(t, e)
    }
    ie(Mt), ne(Mt, t)
}

function Yr() {
    ie(Mt), ie(Ho), ie(Qo)
}

function $p(e) {
    Hn(Qo.current);
    var t = Hn(Mt.current), n = Xl(t, e.type);
    t !== n && (ne(Ho, e), ne(Mt, n))
}

function bu(e) {
    Ho.current === e && (ie(Mt), ie(Ho))
}

var ae = In(0);

function hs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var Tl = [];

function Tu() {
    for (var e = 0; e < Tl.length; e++) Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0
}

var Vi = Xt.ReactCurrentDispatcher, Nl = Xt.ReactCurrentBatchConfig, nr = 0, ue = null, ve = null, xe = null, ms = !1,
    No = !1, Ko = 0, yy = 0;

function Te() {
    throw Error(O(321))
}

function Nu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
    return !0
}

function Ru(e, t, n, r, o, i) {
    if (nr = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vi.current = e === null || e.memoizedState === null ? Ey : Cy, e = n(r, o), No) {
        i = 0;
        do {
            if (No = !1, Ko = 0, 25 <= i) throw Error(O(301));
            i += 1, xe = ve = null, t.updateQueue = null, Vi.current = ky, e = n(r, o)
        } while (No)
    }
    if (Vi.current = gs, t = ve !== null && ve.next !== null, nr = 0, xe = ve = ue = null, ms = !1, t) throw Error(O(300));
    return e
}

function Ou() {
    var e = Ko !== 0;
    return Ko = 0, e
}

function bt() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e, xe
}

function lt() {
    if (ve === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ve.next;
    var t = xe === null ? ue.memoizedState : xe.next;
    if (t !== null) xe = t, ve = e; else {
        if (e === null) throw Error(O(310));
        ve = e, e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
        }, xe === null ? ue.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}

function Go(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Rl(e) {
    var t = lt(), n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = ve, o = r.baseQueue, i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null, a = null, u = i;
        do {
            var c = u.lane;
            if ((nr & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = r) : a = a.next = f, ue.lanes |= c, rr |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l, St(r, t.memoizedState) || ($e = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ue.lanes |= i, rr |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Ol(e) {
    var t = lt(), n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        St(i, t.memoizedState) || ($e = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Up() {
}

function Bp(e, t) {
    var n = ue, r = lt(), o = t(), i = !St(r.memoizedState, o);
    if (i && (r.memoizedState = o, $e = !0), r = r.queue, Au(Hp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048, Yo(9, Wp.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(O(349));
        nr & 30 || Vp(n, t, o)
    }
    return o
}

function Vp(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Wp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qp(t) && Kp(e)
}

function Hp(e, t, n) {
    return n(function () {
        Qp(t) && Kp(e)
    })
}

function Qp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !St(e, n)
    } catch {
        return !0
    }
}

function Kp(e) {
    var t = Kt(e, 1);
    t !== null && xt(t, e, 1, -1)
}

function od(e) {
    var t = bt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Go,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Sy.bind(null, ue, e), [t.memoizedState, e]
}

function Yo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Gp() {
    return lt().memoizedState
}

function Wi(e, t, n, r) {
    var o = bt();
    ue.flags |= e, o.memoizedState = Yo(1 | t, n, void 0, r === void 0 ? null : r)
}

function Is(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
        var s = ve.memoizedState;
        if (i = s.destroy, r !== null && Nu(r, s.deps)) {
            o.memoizedState = Yo(t, n, i, r);
            return
        }
    }
    ue.flags |= e, o.memoizedState = Yo(1 | t, n, i, r)
}

function id(e, t) {
    return Wi(8390656, 8, e, t)
}

function Au(e, t) {
    return Is(2048, 8, e, t)
}

function Yp(e, t) {
    return Is(4, 2, e, t)
}

function qp(e, t) {
    return Is(4, 4, e, t)
}

function Xp(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function Zp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Is(4, 4, Xp.bind(null, t, e), n)
}

function _u() {
}

function Jp(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function eh(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function th(e, t, n) {
    return nr & 21 ? (St(n, t) || (n = sp(), ue.lanes |= n, rr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = n)
}

function wy(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Nl.transition;
    Nl.transition = {};
    try {
        e(!1), t()
    } finally {
        ee = n, Nl.transition = r
    }
}

function nh() {
    return lt().memoizedState
}

function xy(e, t, n) {
    var r = Tn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, rh(e)) oh(t, n); else if (n = zp(e, t, n, r), n !== null) {
        var o = Le();
        xt(n, e, r, o), ih(n, t, r)
    }
}

function Sy(e, t, n) {
    var r = Tn(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (rh(e)) oh(t, o); else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState, l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, St(l, s)) {
                var a = t.interleaved;
                a === null ? (o.next = o, Cu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {
        } finally {
        }
        n = zp(e, t, o, r), n !== null && (o = Le(), xt(n, e, r, o), ih(n, t, r))
    }
}

function rh(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function oh(e, t) {
    No = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ih(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, uu(e, n)
    }
}

var gs = {
    readContext: st,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}, Ey = {
    readContext: st, useCallback: function (e, t) {
        return bt().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: st, useEffect: id, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, Wi(4194308, 4, Xp.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return Wi(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return Wi(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = bt();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = bt();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = xy.bind(null, ue, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = bt();
        return e = {current: e}, t.memoizedState = e
    }, useState: od, useDebugValue: _u, useDeferredValue: function (e) {
        return bt().memoizedState = e
    }, useTransition: function () {
        var e = od(!1), t = e[0];
        return e = wy.bind(null, e[1]), bt().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = ue, o = bt();
        if (le) {
            if (n === void 0) throw Error(O(407));
            n = n()
        } else {
            if (n = t(), Se === null) throw Error(O(349));
            nr & 30 || Vp(r, t, n)
        }
        o.memoizedState = n;
        var i = {value: n, getSnapshot: t};
        return o.queue = i, id(Hp.bind(null, r, i, e), [e]), r.flags |= 2048, Yo(9, Wp.bind(null, r, i, n, t), void 0, null), n
    }, useId: function () {
        var e = bt(), t = Se.identifierPrefix;
        if (le) {
            var n = Vt, r = Bt;
            n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ko++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = yy++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, Cy = {
    readContext: st,
    useCallback: Jp,
    useContext: st,
    useEffect: Au,
    useImperativeHandle: Zp,
    useInsertionEffect: Yp,
    useLayoutEffect: qp,
    useMemo: eh,
    useReducer: Rl,
    useRef: Gp,
    useState: function () {
        return Rl(Go)
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
        var t = lt();
        return th(t, ve.memoizedState, e)
    },
    useTransition: function () {
        var e = Rl(Go)[0], t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Up,
    useSyncExternalStore: Bp,
    useId: nh,
    unstable_isNewReconciler: !1
}, ky = {
    readContext: st,
    useCallback: Jp,
    useContext: st,
    useEffect: Au,
    useImperativeHandle: Zp,
    useInsertionEffect: Yp,
    useLayoutEffect: qp,
    useMemo: eh,
    useReducer: Ol,
    useRef: Gp,
    useState: function () {
        return Ol(Go)
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
        var t = lt();
        return ve === null ? t.memoizedState = e : th(t, ve.memoizedState, e)
    },
    useTransition: function () {
        var e = Ol(Go)[0], t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Up,
    useSyncExternalStore: Bp,
    useId: nh,
    unstable_isNewReconciler: !1
};

function pt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function ya(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var Ds = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? lr(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Le(), o = Tn(e), i = Wt(r, o);
        i.payload = t, n != null && (i.callback = n), t = Pn(e, i, o), t !== null && (xt(t, e, o, r), Bi(t, e, o))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Le(), o = Tn(e), i = Wt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Pn(e, i, o), t !== null && (xt(t, e, o, r), Bi(t, e, o))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Le(), r = Tn(e), o = Wt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Pn(e, o, r), t !== null && (xt(t, e, r, n), Bi(t, e, r))
    }
};

function sd(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Uo(n, r) || !Uo(o, i) : !0
}

function sh(e, t, n) {
    var r = !1, o = On, i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (o = Be(t) ? er : Ae.current, r = t.contextTypes, i = (r = r != null) ? Qr(e, o) : On), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function ld(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ds.enqueueReplaceState(t, t.state, null)
}

function wa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, ku(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = st(i) : (i = Be(t) ? er : Ae.current, o.context = Qr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ya(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ds.enqueueReplaceState(o, o.state, null), ps(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function qr(e, t) {
    try {
        var n = "", r = t;
        do n += Zg(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {value: e, source: t, stack: o, digest: null}
}

function Al(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function xa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var Py = typeof WeakMap == "function" ? WeakMap : Map;

function lh(e, t, n) {
    n = Wt(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        ys || (ys = !0, Oa = r), xa(e, t)
    }, n
}

function ah(e, t, n) {
    n = Wt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }, n.callback = function () {
            xa(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        xa(e, t), typeof r != "function" && (bn === null ? bn = new Set([this]) : bn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""})
    }), n
}

function ad(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Py;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Fy.bind(null, e, t, n), t.then(e, e))
}

function ud(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function cd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Wt(-1, 1), t.tag = 2, Pn(n, t, 1))), n.lanes |= 1), e)
}

var by = Xt.ReactCurrentOwner, $e = !1;

function Me(e, t, n, r) {
    t.child = e === null ? Dp(t, null, n, r) : Gr(t, e.child, n, r)
}

function dd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return _r(t, o), r = Ru(e, t, n, r, i, o), n = Ou(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Gt(e, t, o)) : (le && n && vu(t), t.flags |= 1, Me(e, t, r, o), t.child)
}

function fd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !$u(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, uh(e, t, i, r, o)) : (e = Gi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Uo, n(s, r) && e.ref === t.ref) return Gt(e, t, o)
    }
    return t.flags |= 1, e = Nn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function uh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Uo(i, r) && e.ref === t.ref) if ($e = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && ($e = !0); else return t.lanes = e.lanes, Gt(e, t, o)
    }
    return Sa(e, t, n, r, o)
}

function ch(e, t, n) {
    var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, ne(Tr, Qe), Qe |= n; else {
        if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, ne(Tr, Qe), Qe |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = i !== null ? i.baseLanes : n, ne(Tr, Qe), Qe |= r
    } else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ne(Tr, Qe), Qe |= r;
    return Me(e, t, o, n), t.child
}

function dh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Sa(e, t, n, r, o) {
    var i = Be(n) ? er : Ae.current;
    return i = Qr(t, i), _r(t, o), n = Ru(e, t, n, r, i, o), r = Ou(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Gt(e, t, o)) : (le && r && vu(t), t.flags |= 1, Me(e, t, n, o), t.child)
}

function pd(e, t, n, r, o) {
    if (Be(n)) {
        var i = !0;
        as(t)
    } else i = !1;
    if (_r(t, o), t.stateNode === null) Hi(e, t), sh(t, n, r), wa(t, n, r, o), r = !0; else if (e === null) {
        var s = t.stateNode, l = t.memoizedProps;
        s.props = l;
        var a = s.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = st(u) : (u = Be(n) ? er : Ae.current, u = Qr(t, u));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && ld(t, s, r, u), cn = !1;
        var h = t.memoizedState;
        s.state = h, ps(t, r, s, o), a = t.memoizedState, l !== r || h !== a || Ue.current || cn ? (typeof c == "function" && (ya(t, n, c, r), a = t.memoizedState), (l = cn || sd(t, n, l, r, h, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Fp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : pt(t.type, l), s.props = u, f = t.pendingProps, h = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = st(a) : (a = Be(n) ? er : Ae.current, a = Qr(t, a));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || h !== a) && ld(t, s, r, a), cn = !1, h = t.memoizedState, s.state = h, ps(t, r, s, o);
        var x = t.memoizedState;
        l !== f || h !== x || Ue.current || cn ? (typeof d == "function" && (ya(t, n, d, r), x = t.memoizedState), (u = cn || sd(t, n, u, r, h, x, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ea(e, t, n, r, i, o)
}

function Ea(e, t, n, r, o, i) {
    dh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Zc(t, n, !1), Gt(e, t, i);
    r = t.stateNode, by.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Gr(t, e.child, null, i), t.child = Gr(t, null, l, i)) : Me(e, t, l, i), t.memoizedState = r.state, o && Zc(t, n, !0), t.child
}

function fh(e) {
    var t = e.stateNode;
    t.pendingContext ? Xc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xc(e, t.context, !1), Pu(e, t.containerInfo)
}

function hd(e, t, n, r, o) {
    return Kr(), wu(o), t.flags |= 256, Me(e, t, n, r), t.child
}

var Ca = {dehydrated: null, treeContext: null, retryLane: 0};

function ka(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function ph(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ne(ae, o & 1), e === null) return ga(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = $s(s, r, 0, null), e = Jn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ka(n), t.memoizedState = Ca, e) : Mu(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Ty(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var a = {mode: "hidden", children: r.children};
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Nn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Nn(l, i) : (i = Jn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? ka(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ca, r
    }
    return i = e.child, e = i.sibling, r = Nn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Mu(e, t) {
    return t = $s({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Ni(e, t, n, r) {
    return r !== null && wu(r), Gr(t, e.child, null, n), e = Mu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Ty(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Al(Error(O(422))), Ni(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = $s({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Jn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Gr(t, e.child, null, s), t.child.memoizedState = ka(s), t.memoizedState = Ca, i);
    if (!(t.mode & 1)) return Ni(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(O(419)), r = Al(i, r, void 0), Ni(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, $e || l) {
        if (r = Se, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Kt(e, o), xt(r, e, o, -1))
        }
        return Fu(), r = Al(Error(O(421))), Ni(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $y.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ge = kn(o.nextSibling), Ye = t, le = !0, yt = null, e !== null && (nt[rt++] = Bt, nt[rt++] = Vt, nt[rt++] = tr, Bt = e.id, Vt = e.overflow, tr = t), t = Mu(t, r.children), t.flags |= 4096, t)
}

function md(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), va(e.return, t, n)
}

function _l(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function hh(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (Me(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && md(e, n, t); else if (e.tag === 19) md(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ne(ae, r), !(t.mode & 1)) t.memoizedState = null; else switch (o) {
        case"forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && hs(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), _l(t, !1, o, n, i);
            break;
        case"backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && hs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            _l(t, !0, n, null, i);
            break;
        case"together":
            _l(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Hi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Gt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), rr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Nn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Ny(e, t, n) {
    switch (t.tag) {
        case 3:
            fh(t), Kr();
            break;
        case 5:
            $p(t);
            break;
        case 1:
            Be(t.type) && as(t);
            break;
        case 4:
            Pu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, o = t.memoizedProps.value;
            ne(ds, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ne(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ph(e, t, n) : (ne(ae, ae.current & 1), e = Gt(e, t, n), e !== null ? e.sibling : null);
            ne(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return hh(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(ae, ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, ch(e, t, n)
    }
    return Gt(e, t, n)
}

var mh, Pa, gh, vh;
mh = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Pa = function () {
};
gh = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Hn(Mt.current);
        var i = null;
        switch (n) {
            case"input":
                o = Kl(e, o), r = Kl(e, r), i = [];
                break;
            case"select":
                o = ce({}, o, {value: void 0}), r = ce({}, r, {value: void 0}), i = [];
                break;
            case"textarea":
                o = ql(e, o), r = ql(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss)
        }
        Zl(n, r);
        var s;
        n = null;
        for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
            var l = o[u];
            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
                for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
            } else n || (i || (i = []), i.push(u, n)), n = a; else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (jo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
vh = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function mo(e, t) {
    if (!le) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling; else for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ry(e, t, n) {
    var r = t.pendingProps;
    switch (yu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ne(t), null;
        case 1:
            return Be(t.type) && ls(), Ne(t), null;
        case 3:
            return r = t.stateNode, Yr(), ie(Ue), ie(Ae), Tu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (Ma(yt), yt = null))), Pa(e, t), Ne(t), null;
        case 5:
            bu(t);
            var o = Hn(Qo.current);
            if (n = t.type, e !== null && t.stateNode != null) gh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(O(166));
                    return Ne(t), null
                }
                if (e = Hn(Mt.current), bi(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Ot] = t, r[Wo] = i, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            oe("cancel", r), oe("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            oe("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (o = 0; o < Eo.length; o++) oe(Eo[o], r);
                            break;
                        case"source":
                            oe("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            oe("error", r), oe("load", r);
                            break;
                        case"details":
                            oe("toggle", r);
                            break;
                        case"input":
                            kc(r, i), oe("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!i.multiple}, oe("invalid", r);
                            break;
                        case"textarea":
                            bc(r, i), oe("invalid", r)
                    }
                    Zl(n, i), o = null;
                    for (var s in i) if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Pi(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Pi(r.textContent, l, e), o = ["children", "" + l]) : jo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            vi(r), Pc(r, i, !0);
                            break;
                        case"textarea":
                            vi(r), Tc(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ss)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ot] = t, e[Wo] = r, mh(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (s = Jl(n, r), n) {
                            case"dialog":
                                oe("cancel", e), oe("close", e), o = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                oe("load", e), o = r;
                                break;
                            case"video":
                            case"audio":
                                for (o = 0; o < Eo.length; o++) oe(Eo[o], e);
                                o = r;
                                break;
                            case"source":
                                oe("error", e), o = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                oe("error", e), oe("load", e), o = r;
                                break;
                            case"details":
                                oe("toggle", e), o = r;
                                break;
                            case"input":
                                kc(e, r), o = Kl(e, r), oe("invalid", e);
                                break;
                            case"option":
                                o = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, o = ce({}, r, {value: void 0}), oe("invalid", e);
                                break;
                            case"textarea":
                                bc(e, r), o = ql(e, r), oe("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Zl(n, o), l = o;
                        for (i in l) if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Gf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Qf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Lo(e, a) : typeof a == "number" && Lo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (jo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && ru(e, i, a, s))
                        }
                        switch (n) {
                            case"input":
                                vi(e), Pc(e, r, !1);
                                break;
                            case"textarea":
                                vi(e), Tc(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Nr(e, !!r.multiple, i, !1) : r.defaultValue != null && Nr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ss)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Ne(t), null;
        case 6:
            if (e && t.stateNode != null) vh(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
                if (n = Hn(Qo.current), Hn(Mt.current), bi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (i = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
                        case 3:
                            Pi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Pi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r
            }
            return Ne(t), null;
        case 13:
            if (ie(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (le && Ge !== null && t.mode & 1 && !(t.flags & 128)) Lp(), Kr(), t.flags |= 98560, i = !1; else if (i = bi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(O(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(O(317));
                        i[Ot] = t
                    } else Kr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Ne(t), i = !1
                } else yt !== null && (Ma(yt), yt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? we === 0 && (we = 3) : Fu())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
        case 4:
            return Yr(), Pa(e, t), e === null && Bo(t.stateNode.containerInfo), Ne(t), null;
        case 10:
            return Eu(t.type._context), Ne(t), null;
        case 17:
            return Be(t.type) && ls(), Ne(t), null;
        case 19:
            if (ie(ae), i = t.memoizedState, i === null) return Ne(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) mo(i, !1); else {
                if (we !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (s = hs(e), s !== null) {
                        for (t.flags |= 128, mo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return ne(ae, ae.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                i.tail !== null && he() > Xr && (t.flags |= 128, r = !0, mo(i, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = hs(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !le) return Ne(t), null
                } else 2 * he() - i.renderingStartTime > Xr && n !== 1073741824 && (t.flags |= 128, r = !0, mo(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = he(), t.sibling = null, n = ae.current, ne(ae, r ? n & 1 | 2 : n & 1), t) : (Ne(t), null);
        case 22:
        case 23:
            return zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(O(156, t.tag))
}

function Oy(e, t) {
    switch (yu(t), t.tag) {
        case 1:
            return Be(t.type) && ls(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Yr(), ie(Ue), ie(Ae), Tu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return bu(t), null;
        case 13:
            if (ie(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(O(340));
                Kr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ie(ae), null;
        case 4:
            return Yr(), null;
        case 10:
            return Eu(t.type._context), null;
        case 22:
        case 23:
            return zu(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var Ri = !1, Oe = !1, Ay = typeof WeakSet == "function" ? WeakSet : Set, I = null;

function br(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        pe(e, t, r)
    } else n.current = null
}

function ba(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}

var gd = !1;

function _y(e, t) {
    if (ua = rs, e = Ep(), gu(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0, l = -1, a = -1, u = 0, c = 0, f = e, h = null;
                t:for (; ;) {
                    for (var d; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (d = f.firstChild) !== null;) h = f, f = d;
                    for (; ;) {
                        if (f === e) break t;
                        if (h === n && ++u === o && (l = s), h === i && ++c === r && (a = s), (d = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = d
                }
                n = l === -1 || a === -1 ? null : {start: l, end: a}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (ca = {
        focusedElem: e,
        selectionRange: n
    }, rs = !1, I = t; I !== null;) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e; else for (; I !== null;) {
        t = I;
        try {
            var x = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (x !== null) {
                        var v = x.memoizedProps, y = x.memoizedState, m = t.stateNode,
                            p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : pt(t.type, v), y);
                        m.__reactInternalSnapshotBeforeUpdate = p
                    }
                    break;
                case 3:
                    var g = t.stateNode.containerInfo;
                    g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(O(163))
            }
        } catch (E) {
            pe(t, t.return, E)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, I = e;
            break
        }
        I = t.return
    }
    return x = gd, gd = !1, x
}

function Ro(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && ba(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function zs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ta(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function yh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[Wo], delete t[pa], delete t[hy], delete t[my])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function wh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function vd(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || wh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Na(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ss)); else if (r !== 4 && (e = e.child, e !== null)) for (Na(e, t, n), e = e.sibling; e !== null;) Na(e, t, n), e = e.sibling
}

function Ra(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (Ra(e, t, n), e = e.sibling; e !== null;) Ra(e, t, n), e = e.sibling
}

var Ee = null, vt = !1;

function on(e, t, n) {
    for (n = n.child; n !== null;) xh(e, t, n), n = n.sibling
}

function xh(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function") try {
        _t.onCommitFiberUnmount(Os, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            Oe || br(n, t);
        case 6:
            var r = Ee, o = vt;
            Ee = null, on(e, t, n), Ee = r, vt = o, Ee !== null && (vt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
            break;
        case 18:
            Ee !== null && (vt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? Pl(e.parentNode, n) : e.nodeType === 1 && Pl(e, n), Fo(e)) : Pl(Ee, n.stateNode));
            break;
        case 4:
            r = Ee, o = vt, Ee = n.stateNode.containerInfo, vt = !0, on(e, t, n), Ee = r, vt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o, s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && ba(n, t, s), o = o.next
                } while (o !== r)
            }
            on(e, t, n);
            break;
        case 1:
            if (!Oe && (br(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                pe(n, t, l)
            }
            on(e, t, n);
            break;
        case 21:
            on(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, on(e, t, n), Oe = r) : on(e, t, n);
            break;
        default:
            on(e, t, n)
    }
}

function yd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ay), t.forEach(function (r) {
            var o = Uy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function dt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, s = t, l = s;
            e:for (; l !== null;) {
                switch (l.tag) {
                    case 5:
                        Ee = l.stateNode, vt = !1;
                        break e;
                    case 3:
                        Ee = l.stateNode.containerInfo, vt = !0;
                        break e;
                    case 4:
                        Ee = l.stateNode.containerInfo, vt = !0;
                        break e
                }
                l = l.return
            }
            if (Ee === null) throw Error(O(160));
            xh(i, s, o), Ee = null, vt = !1;
            var a = o.alternate;
            a !== null && (a.return = null), o.return = null
        } catch (u) {
            pe(o, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Sh(t, e), t = t.sibling
}

function Sh(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e), Pt(e), r & 4) {
                try {
                    Ro(3, e, e.return), zs(3, e)
                } catch (v) {
                    pe(e, e.return, v)
                }
                try {
                    Ro(5, e, e.return)
                } catch (v) {
                    pe(e, e.return, v)
                }
            }
            break;
        case 1:
            dt(t, e), Pt(e), r & 512 && n !== null && br(n, n.return);
            break;
        case 5:
            if (dt(t, e), Pt(e), r & 512 && n !== null && br(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Lo(o, "")
                } catch (v) {
                    pe(e, e.return, v)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && Vf(o, i), Jl(l, s);
                    var u = Jl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s], f = a[s + 1];
                        c === "style" ? Gf(o, f) : c === "dangerouslySetInnerHTML" ? Qf(o, f) : c === "children" ? Lo(o, f) : ru(o, c, f, u)
                    }
                    switch (l) {
                        case"input":
                            Gl(o, i);
                            break;
                        case"textarea":
                            Wf(o, i);
                            break;
                        case"select":
                            var h = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var d = i.value;
                            d != null ? Nr(o, !!i.multiple, d, !1) : h !== !!i.multiple && (i.defaultValue != null ? Nr(o, !!i.multiple, i.defaultValue, !0) : Nr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Wo] = i
                } catch (v) {
                    pe(e, e.return, v)
                }
            }
            break;
        case 6:
            if (dt(t, e), Pt(e), r & 4) {
                if (e.stateNode === null) throw Error(O(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (v) {
                    pe(e, e.return, v)
                }
            }
            break;
        case 3:
            if (dt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fo(t.containerInfo)
            } catch (v) {
                pe(e, e.return, v)
            }
            break;
        case 4:
            dt(t, e), Pt(e);
            break;
        case 13:
            dt(t, e), Pt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Iu = he())), r & 4 && yd(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || c, dt(t, e), Oe = u) : dt(t, e), Pt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (I = e, c = e.child; c !== null;) {
                    for (f = I = c; I !== null;) {
                        switch (h = I, d = h.child, h.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Ro(4, h, h.return);
                                break;
                            case 1:
                                br(h, h.return);
                                var x = h.stateNode;
                                if (typeof x.componentWillUnmount == "function") {
                                    r = h, n = h.return;
                                    try {
                                        t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                    } catch (v) {
                                        pe(r, n, v)
                                    }
                                }
                                break;
                            case 5:
                                br(h, h.return);
                                break;
                            case 22:
                                if (h.memoizedState !== null) {
                                    xd(f);
                                    continue
                                }
                        }
                        d !== null ? (d.return = h, I = d) : xd(f)
                    }
                    c = c.sibling
                }
                e:for (c = null, f = e; ;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Kf("display", s))
                            } catch (v) {
                                pe(e, e.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            pe(e, e.return, v)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            dt(t, e), Pt(e), r & 4 && yd(e);
            break;
        case 21:
            break;
        default:
            dt(t, e), Pt(e)
    }
}

function Pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (wh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Lo(o, ""), r.flags &= -33);
                    var i = vd(e);
                    Ra(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo, l = vd(e);
                    Na(e, l, s);
                    break;
                default:
                    throw Error(O(161))
            }
        } catch (a) {
            pe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function My(e, t, n) {
    I = e, Eh(e)
}

function Eh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null;) {
        var o = I, i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ri;
            if (!s) {
                var l = o.alternate, a = l !== null && l.memoizedState !== null || Oe;
                l = Ri;
                var u = Oe;
                if (Ri = s, (Oe = a) && !u) for (I = o; I !== null;) s = I, a = s.child, s.tag === 22 && s.memoizedState !== null ? Sd(o) : a !== null ? (a.return = s, I = a) : Sd(o);
                for (; i !== null;) I = i, Eh(i), i = i.sibling;
                I = o, Ri = l, Oe = u
            }
            wd(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, I = i) : wd(e)
    }
}

function wd(e) {
    for (; I !== null;) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || zs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe) if (n === null) r.componentDidMount(); else {
                            var o = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                            r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var i = t.updateQueue;
                        i !== null && rd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            rd(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case"img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Fo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                }
                Oe || t.flags & 512 && Ta(t)
            } catch (h) {
                pe(t, t.return, h)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, I = n;
            break
        }
        I = t.return
    }
}

function xd(e) {
    for (; I !== null;) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, I = n;
            break
        }
        I = t.return
    }
}

function Sd(e) {
    for (; I !== null;) {
        var t = I;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        zs(4, t)
                    } catch (a) {
                        pe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            pe(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Ta(t)
                    } catch (a) {
                        pe(t, i, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ta(t)
                    } catch (a) {
                        pe(t, s, a)
                    }
            }
        } catch (a) {
            pe(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, I = l;
            break
        }
        I = t.return
    }
}

var jy = Math.ceil, vs = Xt.ReactCurrentDispatcher, ju = Xt.ReactCurrentOwner, it = Xt.ReactCurrentBatchConfig, X = 0,
    Se = null, ge = null, Ce = 0, Qe = 0, Tr = In(0), we = 0, qo = null, rr = 0, Fs = 0, Lu = 0, Oo = null, Fe = null,
    Iu = 0, Xr = 1 / 0, Ft = null, ys = !1, Oa = null, bn = null, Oi = !1, wn = null, ws = 0, Ao = 0, Aa = null,
    Qi = -1, Ki = 0;

function Le() {
    return X & 6 ? he() : Qi !== -1 ? Qi : Qi = he()
}

function Tn(e) {
    return e.mode & 1 ? X & 2 && Ce !== 0 ? Ce & -Ce : vy.transition !== null ? (Ki === 0 && (Ki = sp()), Ki) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pp(e.type)), e) : 1
}

function xt(e, t, n, r) {
    if (50 < Ao) throw Ao = 0, Aa = null, Error(O(185));
    oi(e, n, r), (!(X & 2) || e !== Se) && (e === Se && (!(X & 2) && (Fs |= n), we === 4 && fn(e, Ce)), Ve(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Xr = he() + 500, Ls && Dn()))
}

function Ve(e, t) {
    var n = e.callbackNode;
    vv(e, t);
    var r = ns(e, e === Se ? Ce : 0);
    if (r === 0) n !== null && Oc(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Oc(n), t === 1) e.tag === 0 ? gy(Ed.bind(null, e)) : _p(Ed.bind(null, e)), fy(function () {
            !(X & 6) && Dn()
        }), n = null; else {
            switch (lp(r)) {
                case 1:
                    n = au;
                    break;
                case 4:
                    n = op;
                    break;
                case 16:
                    n = ts;
                    break;
                case 536870912:
                    n = ip;
                    break;
                default:
                    n = ts
            }
            n = Oh(n, Ch.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ch(e, t) {
    if (Qi = -1, Ki = 0, X & 6) throw Error(O(327));
    var n = e.callbackNode;
    if (Mr() && e.callbackNode !== n) return null;
    var r = ns(e, e === Se ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = xs(e, r); else {
        t = r;
        var o = X;
        X |= 2;
        var i = Ph();
        (Se !== e || Ce !== t) && (Ft = null, Xr = he() + 500, Zn(e, t));
        do try {
            Dy();
            break
        } catch (l) {
            kh(e, l)
        } while (!0);
        Su(), vs.current = i, X = o, ge !== null ? t = 0 : (Se = null, Ce = 0, t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = oa(e), o !== 0 && (r = o, t = _a(e, o))), t === 1) throw n = qo, Zn(e, 0), fn(e, r), Ve(e, he()), n;
        if (t === 6) fn(e, r); else {
            if (o = e.current.alternate, !(r & 30) && !Ly(o) && (t = xs(e, r), t === 2 && (i = oa(e), i !== 0 && (r = i, t = _a(e, i))), t === 1)) throw n = qo, Zn(e, 0), fn(e, r), Ve(e, he()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(O(345));
                case 2:
                    Bn(e, Fe, Ft);
                    break;
                case 3:
                    if (fn(e, r), (r & 130023424) === r && (t = Iu + 500 - he(), 10 < t)) {
                        if (ns(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Le(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = fa(Bn.bind(null, e, Fe, Ft), t);
                        break
                    }
                    Bn(e, Fe, Ft);
                    break;
                case 4:
                    if (fn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - wt(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jy(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = fa(Bn.bind(null, e, Fe, Ft), r);
                        break
                    }
                    Bn(e, Fe, Ft);
                    break;
                case 5:
                    Bn(e, Fe, Ft);
                    break;
                default:
                    throw Error(O(329))
            }
        }
    }
    return Ve(e, he()), e.callbackNode === n ? Ch.bind(null, e) : null
}

function _a(e, t) {
    var n = Oo;
    return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256), e = xs(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Ma(t)), e
}

function Ma(e) {
    Fe === null ? Fe = e : Fe.push.apply(Fe, e)
}

function Ly(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!St(i(), o)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function fn(e, t) {
    for (t &= ~Lu, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - wt(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ed(e) {
    if (X & 6) throw Error(O(327));
    Mr();
    var t = ns(e, 0);
    if (!(t & 1)) return Ve(e, he()), null;
    var n = xs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = oa(e);
        r !== 0 && (t = r, n = _a(e, r))
    }
    if (n === 1) throw n = qo, Zn(e, 0), fn(e, t), Ve(e, he()), n;
    if (n === 6) throw Error(O(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, Fe, Ft), Ve(e, he()), null
}

function Du(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n, X === 0 && (Xr = he() + 500, Ls && Dn())
    }
}

function or(e) {
    wn !== null && wn.tag === 0 && !(X & 6) && Mr();
    var t = X;
    X |= 1;
    var n = it.transition, r = ee;
    try {
        if (it.transition = null, ee = 1, e) return e()
    } finally {
        ee = r, it.transition = n, X = t, !(X & 6) && Dn()
    }
}

function zu() {
    Qe = Tr.current, ie(Tr)
}

function Zn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, dy(n)), ge !== null) for (n = ge.return; n !== null;) {
        var r = n;
        switch (yu(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && ls();
                break;
            case 3:
                Yr(), ie(Ue), ie(Ae), Tu();
                break;
            case 5:
                bu(r);
                break;
            case 4:
                Yr();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                Eu(r.type._context);
                break;
            case 22:
            case 23:
                zu()
        }
        n = n.return
    }
    if (Se = e, ge = e = Nn(e.current, null), Ce = Qe = t, we = 0, qo = null, Lu = Fs = rr = 0, Fe = Oo = null, Wn !== null) {
        for (t = 0; t < Wn.length; t++) if (n = Wn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var s = i.next;
                i.next = o, r.next = s
            }
            n.pending = r
        }
        Wn = null
    }
    return e
}

function kh(e, t) {
    do {
        var n = ge;
        try {
            if (Su(), Vi.current = gs, ms) {
                for (var r = ue.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                ms = !1
            }
            if (nr = 0, xe = ve = ue = null, No = !1, Ko = 0, ju.current = null, n === null || n.return === null) {
                we = 1, qo = t, ge = null;
                break
            }
            e:{
                var i = e, s = n.return, l = n, a = t;
                if (t = Ce, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a, c = l, f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var d = ud(s);
                    if (d !== null) {
                        d.flags &= -257, cd(d, s, l, i, t), d.mode & 1 && ad(i, u, t), t = d, a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var v = new Set;
                            v.add(a), t.updateQueue = v
                        } else x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ad(i, u, t), Fu();
                            break e
                        }
                        a = Error(O(426))
                    }
                } else if (le && l.mode & 1) {
                    var y = ud(s);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256), cd(y, s, l, i, t), wu(qr(a, l));
                        break e
                    }
                }
                i = a = qr(a, l), we !== 4 && (we = 2), Oo === null ? Oo = [i] : Oo.push(i), i = s;
                do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var m = lh(i, a, t);
                            nd(i, m);
                            break e;
                        case 1:
                            l = a;
                            var p = i.type, g = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (bn === null || !bn.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var E = ah(i, l, t);
                                nd(i, E);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Th(n)
        } catch (C) {
            t = C, ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Ph() {
    var e = vs.current;
    return vs.current = gs, e === null ? gs : e
}

function Fu() {
    (we === 0 || we === 3 || we === 2) && (we = 4), Se === null || !(rr & 268435455) && !(Fs & 268435455) || fn(Se, Ce)
}

function xs(e, t) {
    var n = X;
    X |= 2;
    var r = Ph();
    (Se !== e || Ce !== t) && (Ft = null, Zn(e, t));
    do try {
        Iy();
        break
    } catch (o) {
        kh(e, o)
    } while (!0);
    if (Su(), X = n, vs.current = r, ge !== null) throw Error(O(261));
    return Se = null, Ce = 0, we
}

function Iy() {
    for (; ge !== null;) bh(ge)
}

function Dy() {
    for (; ge !== null && !av();) bh(ge)
}

function bh(e) {
    var t = Rh(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, t === null ? Th(e) : ge = t, ju.current = null
}

function Th(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Oy(n, t), n !== null) {
                n.flags &= 32767, ge = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                we = 6, ge = null;
                return
            }
        } else if (n = Ry(n, t, Qe), n !== null) {
            ge = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ge = t;
            return
        }
        ge = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}

function Bn(e, t, n) {
    var r = ee, o = it.transition;
    try {
        it.transition = null, ee = 1, zy(e, t, n, r)
    } finally {
        it.transition = o, ee = r
    }
    return null
}

function zy(e, t, n, r) {
    do Mr(); while (wn !== null);
    if (X & 6) throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (yv(e, i), e === Se && (ge = Se = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Oi || (Oi = !0, Oh(ts, function () {
        return Mr(), null
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = it.transition, it.transition = null;
        var s = ee;
        ee = 1;
        var l = X;
        X |= 4, ju.current = null, _y(e, n), Sh(n, e), oy(ca), rs = !!ua, ca = ua = null, e.current = n, My(n), uv(), X = l, ee = s, it.transition = i
    } else e.current = n;
    if (Oi && (Oi = !1, wn = e, ws = o), i = e.pendingLanes, i === 0 && (bn = null), fv(n.stateNode), Ve(e, he()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
        componentStack: o.stack,
        digest: o.digest
    });
    if (ys) throw ys = !1, e = Oa, Oa = null, e;
    return ws & 1 && e.tag !== 0 && Mr(), i = e.pendingLanes, i & 1 ? e === Aa ? Ao++ : (Ao = 0, Aa = e) : Ao = 0, Dn(), null
}

function Mr() {
    if (wn !== null) {
        var e = lp(ws), t = it.transition, n = ee;
        try {
            if (it.transition = null, ee = 16 > e ? 16 : e, wn === null) var r = !1; else {
                if (e = wn, wn = null, ws = 0, X & 6) throw Error(O(331));
                var o = X;
                for (X |= 4, I = e.current; I !== null;) {
                    var i = I, s = i.child;
                    if (I.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (I = u; I !== null;) {
                                    var c = I;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ro(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, I = f; else for (; I !== null;) {
                                        c = I;
                                        var h = c.sibling, d = c.return;
                                        if (yh(c), c === u) {
                                            I = null;
                                            break
                                        }
                                        if (h !== null) {
                                            h.return = d, I = h;
                                            break
                                        }
                                        I = d
                                    }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var v = x.child;
                                if (v !== null) {
                                    x.child = null;
                                    do {
                                        var y = v.sibling;
                                        v.sibling = null, v = y
                                    } while (v !== null)
                                }
                            }
                            I = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, I = s; else e:for (; I !== null;) {
                        if (i = I, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ro(9, i, i.return)
                        }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, I = m;
                            break e
                        }
                        I = i.return
                    }
                }
                var p = e.current;
                for (I = p; I !== null;) {
                    s = I;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, I = g; else e:for (s = p; I !== null;) {
                        if (l = I, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zs(9, l)
                            }
                        } catch (C) {
                            pe(l, l.return, C)
                        }
                        if (l === s) {
                            I = null;
                            break e
                        }
                        var E = l.sibling;
                        if (E !== null) {
                            E.return = l.return, I = E;
                            break e
                        }
                        I = l.return
                    }
                }
                if (X = o, Dn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                    _t.onPostCommitFiberRoot(Os, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            ee = n, it.transition = t
        }
    }
    return !1
}

function Cd(e, t, n) {
    t = qr(n, t), t = lh(e, t, 1), e = Pn(e, t, 1), t = Le(), e !== null && (oi(e, 1, t), Ve(e, t))
}

function pe(e, t, n) {
    if (e.tag === 3) Cd(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            Cd(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
                e = qr(n, e), e = ah(t, e, 1), t = Pn(t, e, 1), e = Le(), t !== null && (oi(t, 1, e), Ve(t, e));
                break
            }
        }
        t = t.return
    }
}

function Fy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ce & n) === n && (we === 4 || we === 3 && (Ce & 130023424) === Ce && 500 > he() - Iu ? Zn(e, 0) : Lu |= n), Ve(e, t)
}

function Nh(e, t) {
    t === 0 && (e.mode & 1 ? (t = xi, xi <<= 1, !(xi & 130023424) && (xi = 4194304)) : t = 1);
    var n = Le();
    e = Kt(e, t), e !== null && (oi(e, t, n), Ve(e, n))
}

function $y(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Nh(e, n)
}

function Uy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(O(314))
    }
    r !== null && r.delete(t), Nh(e, n)
}

var Rh;
Rh = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ue.current) $e = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return $e = !1, Ny(e, t, n);
        $e = !!(e.flags & 131072)
    } else $e = !1, le && t.flags & 1048576 && Mp(t, cs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Hi(e, t), e = t.pendingProps;
            var o = Qr(t, Ae.current);
            _r(t, n), o = Ru(null, t, r, e, o, n);
            var i = Ou();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, as(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ku(t), o.updater = Ds, t.stateNode = o, o._reactInternals = t, wa(t, r, e, n), t = Ea(null, t, r, !0, i, n)) : (t.tag = 0, le && i && vu(t), Me(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (Hi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Vy(r), e = pt(r, e), o) {
                    case 0:
                        t = Sa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = pd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = dd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = fd(null, t, r, pt(r.type, e), n);
                        break e
                }
                throw Error(O(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Sa(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), pd(e, t, r, o, n);
        case 3:
            e:{
                if (fh(t), e === null) throw Error(O(387));
                r = t.pendingProps, i = t.memoizedState, o = i.element, Fp(e, t), ps(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated) if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = qr(Error(O(423)), t), t = hd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = qr(Error(O(424)), t), t = hd(e, t, r, n, o);
                    break e
                } else for (Ge = kn(t.stateNode.containerInfo.firstChild), Ye = t, le = !0, yt = null, n = Dp(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (Kr(), r === o) {
                        t = Gt(e, t, n);
                        break e
                    }
                    Me(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return $p(t), e === null && ga(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, da(r, o) ? s = null : i !== null && da(r, i) && (t.flags |= 32), dh(e, t), Me(e, t, s, n), t.child;
        case 6:
            return e === null && ga(t), null;
        case 13:
            return ph(e, t, n);
        case 4:
            return Pu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gr(t, null, r, n) : Me(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), dd(e, t, r, o, n);
        case 7:
            return Me(e, t, t.pendingProps, n), t.child;
        case 8:
            return Me(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ne(ds, r._currentValue), r._currentValue = s, i !== null) if (St(i.value, s)) {
                    if (i.children === o.children && !Ue.current) {
                        t = Gt(e, t, n);
                        break e
                    }
                } else for (i = t.child, i !== null && (i.return = t); i !== null;) {
                    var l = i.dependencies;
                    if (l !== null) {
                        s = i.child;
                        for (var a = l.firstContext; a !== null;) {
                            if (a.context === r) {
                                if (i.tag === 1) {
                                    a = Wt(-1, n & -n), a.tag = 2;
                                    var u = i.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var c = u.pending;
                                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                    }
                                }
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), va(i.return, n, t), l.lanes |= n;
                                break
                            }
                            a = a.next
                        }
                    } else if (i.tag === 10) s = i.type === t.type ? null : i.child; else if (i.tag === 18) {
                        if (s = i.return, s === null) throw Error(O(341));
                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), va(s, n, t), s = i.sibling
                    } else s = i.child;
                    if (s !== null) s.return = i; else for (s = i; s !== null;) {
                        if (s === t) {
                            s = null;
                            break
                        }
                        if (i = s.sibling, i !== null) {
                            i.return = s.return, s = i;
                            break
                        }
                        s = s.return
                    }
                    i = s
                }
                Me(e, t, o.children, n), t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, _r(t, n), o = st(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = pt(r, t.pendingProps), o = pt(r.type, o), fd(e, t, r, o, n);
        case 15:
            return uh(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Hi(e, t), t.tag = 1, Be(r) ? (e = !0, as(t)) : e = !1, _r(t, n), sh(t, r, o), wa(t, r, o, n), Ea(null, t, r, !0, e, n);
        case 19:
            return hh(e, t, n);
        case 22:
            return ch(e, t, n)
    }
    throw Error(O(156, t.tag))
};

function Oh(e, t) {
    return rp(e, t)
}

function By(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ot(e, t, n, r) {
    return new By(e, t, n, r)
}

function $u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Vy(e) {
    if (typeof e == "function") return $u(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === iu) return 11;
        if (e === su) return 14
    }
    return 2
}

function Nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Gi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") $u(e) && (s = 1); else if (typeof e == "string") s = 5; else e:switch (e) {
        case vr:
            return Jn(n.children, o, i, t);
        case ou:
            s = 8, o |= 8;
            break;
        case Vl:
            return e = ot(12, n, t, o | 2), e.elementType = Vl, e.lanes = i, e;
        case Wl:
            return e = ot(13, n, t, o), e.elementType = Wl, e.lanes = i, e;
        case Hl:
            return e = ot(19, n, t, o), e.elementType = Hl, e.lanes = i, e;
        case $f:
            return $s(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case zf:
                    s = 10;
                    break e;
                case Ff:
                    s = 9;
                    break e;
                case iu:
                    s = 11;
                    break e;
                case su:
                    s = 14;
                    break e;
                case un:
                    s = 16, r = null;
                    break e
            }
            throw Error(O(130, e == null ? e : typeof e, ""))
    }
    return t = ot(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Jn(e, t, n, r) {
    return e = ot(7, e, r, t), e.lanes = n, e
}

function $s(e, t, n, r) {
    return e = ot(22, e, r, t), e.elementType = $f, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function Ml(e, t, n) {
    return e = ot(6, e, null, t), e.lanes = n, e
}

function jl(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Wy(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Uu(e, t, n, r, o, i, s, l, a) {
    return e = new Wy(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ot(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ku(i), e
}

function Hy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function Ah(e) {
    if (!e) return On;
    e = e._reactInternals;
    e:{
        if (lr(e) !== e || e.tag !== 1) throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Be(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n)) return Ap(e, n, t)
    }
    return t
}

function _h(e, t, n, r, o, i, s, l, a) {
    return e = Uu(n, r, !0, e, o, i, s, l, a), e.context = Ah(null), n = e.current, r = Le(), o = Tn(n), i = Wt(r, o), i.callback = t ?? null, Pn(n, i, o), e.current.lanes = o, oi(e, o, r), Ve(e, r), e
}

function Us(e, t, n, r) {
    var o = t.current, i = Le(), s = Tn(o);
    return n = Ah(n), t.context === null ? t.context = n : t.pendingContext = n, t = Wt(i, s), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pn(o, t, s), e !== null && (xt(e, o, s, i), Bi(e, o, s)), s
}

function Ss(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function kd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Bu(e, t) {
    kd(e, t), (e = e.alternate) && kd(e, t)
}

function Qy() {
    return null
}

var Mh = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Vu(e) {
    this._internalRoot = e
}

Bs.prototype.render = Vu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    Us(e, t, null, null)
};
Bs.prototype.unmount = Vu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        or(function () {
            Us(null, e, null, null)
        }), t[Qt] = null
    }
};

function Bs(e) {
    this._internalRoot = e
}

Bs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = cp();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++) ;
        dn.splice(n, 0, e), n === 0 && fp(e)
    }
};

function Wu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Pd() {
}

function Ky(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = Ss(s);
                i.call(u)
            }
        }
        var s = _h(t, r, e, 0, null, !1, !1, "", Pd);
        return e._reactRootContainer = s, e[Qt] = s.current, Bo(e.nodeType === 8 ? e.parentNode : e), or(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = Ss(a);
            l.call(u)
        }
    }
    var a = Uu(e, 0, !1, null, null, !1, !1, "", Pd);
    return e._reactRootContainer = a, e[Qt] = a.current, Bo(e.nodeType === 8 ? e.parentNode : e), or(function () {
        Us(t, a, n, r)
    }), a
}

function Ws(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function () {
                var a = Ss(s);
                l.call(a)
            }
        }
        Us(t, s, e, o)
    } else s = Ky(n, t, e, o, r);
    return Ss(s)
}

ap = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = So(t.pendingLanes);
                n !== 0 && (uu(t, n | 1), Ve(t, he()), !(X & 6) && (Xr = he() + 500, Dn()))
            }
            break;
        case 13:
            or(function () {
                var r = Kt(e, 1);
                if (r !== null) {
                    var o = Le();
                    xt(r, e, 1, o)
                }
            }), Bu(e, 1)
    }
};
cu = function (e) {
    if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
            var n = Le();
            xt(t, e, 134217728, n)
        }
        Bu(e, 134217728)
    }
};
up = function (e) {
    if (e.tag === 13) {
        var t = Tn(e), n = Kt(e, t);
        if (n !== null) {
            var r = Le();
            xt(n, e, t, r)
        }
        Bu(e, t)
    }
};
cp = function () {
    return ee
};
dp = function (e, t) {
    var n = ee;
    try {
        return ee = e, t()
    } finally {
        ee = n
    }
};
ta = function (e, t, n) {
    switch (t) {
        case"input":
            if (Gl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = js(r);
                        if (!o) throw Error(O(90));
                        Bf(r), Gl(r, o)
                    }
                }
            }
            break;
        case"textarea":
            Wf(e, n);
            break;
        case"select":
            t = n.value, t != null && Nr(e, !!n.multiple, t, !1)
    }
};
Xf = Du;
Zf = or;
var Gy = {usingClientEntryPoint: !1, Events: [si, Sr, js, Yf, qf, Du]},
    go = {findFiberByHostInstance: Vn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom"}, Yy = {
        bundleType: go.bundleType,
        version: go.version,
        rendererPackageName: go.rendererPackageName,
        rendererConfig: go.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = tp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: go.findFiberByHostInstance || Qy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber) try {
        Os = Ai.inject(Yy), _t = Ai
    } catch {
    }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
Ze.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wu(t)) throw Error(O(200));
    return Hy(e, t, null, n)
};
Ze.createRoot = function (e, t) {
    if (!Wu(e)) throw Error(O(299));
    var n = !1, r = "", o = Mh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Uu(e, 1, !1, null, null, n, !1, r, o), e[Qt] = t.current, Bo(e.nodeType === 8 ? e.parentNode : e), new Vu(t)
};
Ze.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
    return e = tp(t), e = e === null ? null : e.stateNode, e
};
Ze.flushSync = function (e) {
    return or(e)
};
Ze.hydrate = function (e, t, n) {
    if (!Vs(t)) throw Error(O(200));
    return Ws(null, e, t, !0, n)
};
Ze.hydrateRoot = function (e, t, n) {
    if (!Wu(e)) throw Error(O(405));
    var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Mh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = _h(t, null, e, 1, n ?? null, o, !1, i, s), e[Qt] = t.current, Bo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Bs(t)
};
Ze.render = function (e, t, n) {
    if (!Vs(t)) throw Error(O(200));
    return Ws(null, e, t, !1, n)
};
Ze.unmountComponentAtNode = function (e) {
    if (!Vs(e)) throw Error(O(40));
    return e._reactRootContainer ? (or(function () {
        Ws(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Qt] = null
        })
    }), !0) : !1
};
Ze.unstable_batchedUpdates = Du;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Vs(n)) throw Error(O(200));
    if (e == null || e._reactInternals === void 0) throw Error(O(38));
    return Ws(e, t, n, !1, r)
};
Ze.version = "18.3.1-next-f1338f8080-20240426";

function jh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jh)
    } catch (e) {
        console.error(e)
    }
}

jh(), jf.exports = Ze;
var ai = jf.exports;
const Lh = Sf(ai);
var Ih, bd = ai;
Ih = bd.createRoot, bd.hydrateRoot;
const qy = 1, Xy = 1e6;
let Ll = 0;

function Zy() {
    return Ll = (Ll + 1) % Number.MAX_SAFE_INTEGER, Ll.toString()
}

const Il = new Map, Td = e => {
    if (Il.has(e)) return;
    const t = setTimeout(() => {
        Il.delete(e), _o({type: "REMOVE_TOAST", toastId: e})
    }, Xy);
    Il.set(e, t)
}, Jy = (e, t) => {
    switch (t.type) {
        case"ADD_TOAST":
            return {...e, toasts: [t.toast, ...e.toasts].slice(0, qy)};
        case"UPDATE_TOAST":
            return {...e, toasts: e.toasts.map(n => n.id === t.toast.id ? {...n, ...t.toast} : n)};
        case"DISMISS_TOAST": {
            const {toastId: n} = t;
            return n ? Td(n) : e.toasts.forEach(r => {
                Td(r.id)
            }), {...e, toasts: e.toasts.map(r => r.id === n || n === void 0 ? {...r, open: !1} : r)}
        }
        case"REMOVE_TOAST":
            return t.toastId === void 0 ? {...e, toasts: []} : {...e, toasts: e.toasts.filter(n => n.id !== t.toastId)}
    }
}, Yi = [];
let qi = {toasts: []};

function _o(e) {
    qi = Jy(qi, e), Yi.forEach(t => {
        t(qi)
    })
}

function e0({...e}) {
    const t = Zy(), n = o => _o({type: "UPDATE_TOAST", toast: {...o, id: t}}),
        r = () => _o({type: "DISMISS_TOAST", toastId: t});
    return _o({
        type: "ADD_TOAST", toast: {
            ...e, id: t, open: !0, onOpenChange: o => {
                o || r()
            }
        }
    }), {id: t, dismiss: r, update: n}
}

function t0() {
    const [e, t] = w.useState(qi);
    return w.useEffect(() => (Yi.push(t), () => {
        const n = Yi.indexOf(t);
        n > -1 && Yi.splice(n, 1)
    }), [e]), {...e, toast: e0, dismiss: n => _o({type: "DISMISS_TOAST", toastId: n})}
}

function ye(e, t, {checkForDefaultPrevented: n = !0} = {}) {
    return function (o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Nd(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Dh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Nd(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : Nd(e[o], null)
            }
        }
    }
}

function Et(...e) {
    return w.useCallback(Dh(...e), e)
}

function Hs(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = w.createContext(s), a = n.length;
        n = [...n, s];
        const u = f => {
            var m;
            const {scope: h, children: d, ...x} = f, v = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l,
                y = w.useMemo(() => x, Object.values(x));
            return S.jsx(v.Provider, {value: y, children: d})
        };
        u.displayName = i + "Provider";

        function c(f, h) {
            var v;
            const d = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[a]) || l, x = w.useContext(d);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }

        return [u, c]
    }

    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function (l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo(() => ({[`__scope${e}`]: {...l, [e]: a}}), [l, a])
        }
    };
    return o.scopeName = e, [r, n0(o, ...t)]
}

function n0(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({useScope: o(), scopeName: o.scopeName}));
        return function (i) {
            const s = r.reduce((l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {...l, ...f}
            }, {});
            return w.useMemo(() => ({[`__scope${t.scopeName}`]: s}), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function ja(e) {
    const t = r0(e), n = w.forwardRef((r, o) => {
        const {children: i, ...s} = r, l = w.Children.toArray(i), a = l.find(i0);
        if (a) {
            const u = a.props.children,
                c = l.map(f => f === a ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : f);
            return S.jsx(t, {...s, ref: o, children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null})
        }
        return S.jsx(t, {...s, ref: o, children: i})
    });
    return n.displayName = `${e}.Slot`, n
}

function r0(e) {
    const t = w.forwardRef((n, r) => {
        const {children: o, ...i} = n;
        if (w.isValidElement(o)) {
            const s = l0(o), l = s0(i, o.props);
            return o.type !== w.Fragment && (l.ref = r ? Dh(r, s) : s), w.cloneElement(o, l)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}

var zh = Symbol("radix.slottable");

function o0(e) {
    const t = ({children: n}) => S.jsx(S.Fragment, {children: n});
    return t.displayName = `${e}.Slottable`, t.__radixId = zh, t
}

function i0(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zh
}

function s0(e, t) {
    const n = {...t};
    for (const r in t) {
        const o = e[r], i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a
        } : o && (n[r] = o) : r === "style" ? n[r] = {...o, ...i} : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {...e, ...n}
}

function l0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function a0(e) {
    const t = e + "CollectionProvider", [n, r] = Hs(t), [o, i] = n(t, {
        collectionRef: {current: null},
        itemMap: new Map
    }), s = v => {
        const {scope: y, children: m} = v, p = A.useRef(null), g = A.useRef(new Map).current;
        return S.jsx(o, {scope: y, itemMap: g, collectionRef: p, children: m})
    };
    s.displayName = t;
    const l = e + "CollectionSlot", a = ja(l), u = A.forwardRef((v, y) => {
        const {scope: m, children: p} = v, g = i(l, m), E = Et(y, g.collectionRef);
        return S.jsx(a, {ref: E, children: p})
    });
    u.displayName = l;
    const c = e + "CollectionItemSlot", f = "data-radix-collection-item", h = ja(c), d = A.forwardRef((v, y) => {
        const {scope: m, children: p, ...g} = v, E = A.useRef(null), C = Et(y, E), k = i(c, m);
        return A.useEffect(() => (k.itemMap.set(E, {ref: E, ...g}), () => void k.itemMap.delete(E))), S.jsx(h, {
            [f]: "",
            ref: C,
            children: p
        })
    });
    d.displayName = c;

    function x(v) {
        const y = i(e + "CollectionConsumer", v);
        return A.useCallback(() => {
            const p = y.collectionRef.current;
            if (!p) return [];
            const g = Array.from(p.querySelectorAll(`[${f}]`));
            return Array.from(y.itemMap.values()).sort((k, P) => g.indexOf(k.ref.current) - g.indexOf(P.ref.current))
        }, [y.collectionRef, y.itemMap])
    }

    return [{Provider: s, Slot: u, ItemSlot: d}, x, r]
}

var u0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    He = u0.reduce((e, t) => {
        const n = ja(`Primitive.${t}`), r = w.forwardRef((o, i) => {
            const {asChild: s, ...l} = o, a = s ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), S.jsx(a, {...l, ref: i})
        });
        return r.displayName = `Primitive.${t}`, {...e, [t]: r}
    }, {});

function Fh(e, t) {
    e && ai.flushSync(() => e.dispatchEvent(t))
}

function An(e) {
    const t = w.useRef(e);
    return w.useEffect(() => {
        t.current = e
    }), w.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function c0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = An(e);
    w.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {capture: !0}), () => t.removeEventListener("keydown", r, {capture: !0})
    }, [n, t])
}

var d0 = "DismissableLayer", La = "dismissableLayer.update", f0 = "dismissableLayer.pointerDownOutside",
    p0 = "dismissableLayer.focusOutside", Rd,
    $h = w.createContext({layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set}),
    Hu = w.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: i,
                onInteractOutside: s,
                onDismiss: l,
                ...a
            } = e, u = w.useContext($h), [c, f] = w.useState(null),
            h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = w.useState({}),
            x = Et(t, P => f(P)),
            v = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(y),
            p = c ? v.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, E = p >= m, C = m0(P => {
                const R = P.target, M = [...u.branches].some(_ => _.contains(R));
                !E || M || (o == null || o(P), s == null || s(P), P.defaultPrevented || l == null || l())
            }, h), k = g0(P => {
                const R = P.target;
                [...u.branches].some(_ => _.contains(R)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || l == null || l())
            }, h);
        return c0(P => {
            p === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && l && (P.preventDefault(), l()))
        }, h), w.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Rd = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Od(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Rd)
            }
        }, [c, h, n, u]), w.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Od())
        }, [c, u]), w.useEffect(() => {
            const P = () => d({});
            return document.addEventListener(La, P), () => document.removeEventListener(La, P)
        }, []), S.jsx(He.div, {
            ...a,
            ref: x,
            style: {pointerEvents: g ? E ? "auto" : "none" : void 0, ...e.style},
            onFocusCapture: ye(e.onFocusCapture, k.onFocusCapture),
            onBlurCapture: ye(e.onBlurCapture, k.onBlurCapture),
            onPointerDownCapture: ye(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
Hu.displayName = d0;
var h0 = "DismissableLayerBranch", Uh = w.forwardRef((e, t) => {
    const n = w.useContext($h), r = w.useRef(null), o = Et(t, r);
    return w.useEffect(() => {
        const i = r.current;
        if (i) return n.branches.add(i), () => {
            n.branches.delete(i)
        }
    }, [n.branches]), S.jsx(He.div, {...e, ref: o})
});
Uh.displayName = h0;

function m0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = An(e), r = w.useRef(!1), o = w.useRef(() => {
    });
    return w.useEffect(() => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function () {
                    Bh(f0, n, u, {discrete: !0})
                };
                const u = {originalEvent: l};
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {once: !0})) : a()
            } else t.removeEventListener("click", o.current);
            r.current = !1
        }, s = window.setTimeout(() => {
            t.addEventListener("pointerdown", i)
        }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {onPointerDownCapture: () => r.current = !0}
}

function g0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = An(e), r = w.useRef(!1);
    return w.useEffect(() => {
        const o = i => {
            i.target && !r.current && Bh(p0, n, {originalEvent: i}, {discrete: !1})
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {onFocusCapture: () => r.current = !0, onBlurCapture: () => r.current = !1}
}

function Od() {
    const e = new CustomEvent(La);
    document.dispatchEvent(e)
}

function Bh(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target, i = new CustomEvent(e, {bubbles: !1, cancelable: !0, detail: n});
    t && o.addEventListener(e, t, {once: !0}), r ? Fh(o, i) : o.dispatchEvent(i)
}

var v0 = Hu, y0 = Uh, _n = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, w0 = "Portal", Vh = w.forwardRef((e, t) => {
    var l;
    const {container: n, ...r} = e, [o, i] = w.useState(!1);
    _n(() => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Lh.createPortal(S.jsx(He.div, {...r, ref: t}), s) : null
});
Vh.displayName = w0;

function x0(e, t) {
    return w.useReducer((n, r) => t[n][r] ?? n, e)
}

var Qu = e => {
    const {present: t, children: n} = e, r = S0(t),
        o = typeof n == "function" ? n({present: r.isPresent}) : w.Children.only(n), i = Et(r.ref, E0(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {ref: i}) : null
};
Qu.displayName = "Presence";

function S0(e) {
    const [t, n] = w.useState(), r = w.useRef(null), o = w.useRef(e), i = w.useRef("none"),
        s = e ? "mounted" : "unmounted", [l, a] = x0(s, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            }, unmountSuspended: {MOUNT: "mounted", ANIMATION_END: "unmounted"}, unmounted: {MOUNT: "mounted"}
        });
    return w.useEffect(() => {
        const u = _i(r.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), _n(() => {
        const u = r.current, c = o.current;
        if (c !== e) {
            const h = i.current, d = _i(u);
            e ? a("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, a]), _n(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window, f = d => {
                const v = _i(r.current).includes(d.animationName);
                if (d.target === t && v && (a("ANIMATION_END"), !o.current)) {
                    const y = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y)
                    })
                }
            }, h = d => {
                d.target === t && (i.current = _i(r.current))
            };
            return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l), ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function _i(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function E0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

var C0 = _f[" useInsertionEffect ".trim().toString()] || _n;

function k0({
                prop: e, defaultProp: t, onChange: n = () => {
    }, caller: r
            }) {
    const [o, i, s] = P0({defaultProp: t, onChange: n}), l = e !== void 0, a = l ? e : o;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect(() => {
            const f = c.current;
            f !== l && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = l
        }, [l, r])
    }
    const u = w.useCallback(c => {
        var f;
        if (l) {
            const h = b0(c) ? c(e) : c;
            h !== e && ((f = s.current) == null || f.call(s, h))
        } else i(c)
    }, [l, e, i, s]);
    return [a, u]
}

function P0({defaultProp: e, onChange: t}) {
    const [n, r] = w.useState(e), o = w.useRef(n), i = w.useRef(t);
    return C0(() => {
        i.current = t
    }, [t]), w.useEffect(() => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n)
    }, [n, o]), [n, r, i]
}

function b0(e) {
    return typeof e == "function"
}

var T0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
}), N0 = "VisuallyHidden", Qs = w.forwardRef((e, t) => S.jsx(He.span, {...e, ref: t, style: {...T0, ...e.style}}));
Qs.displayName = N0;
var R0 = Qs, Ku = "ToastProvider", [Gu, O0, A0] = a0("Toast"), [Wh, V2] = Hs("Toast", [A0]), [_0, Ks] = Wh(Ku),
    Hh = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [l, a] = w.useState(null), [u, c] = w.useState(0), f = w.useRef(!1), h = w.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`), S.jsx(Gu.Provider, {
            scope: t,
            children: S.jsx(_0, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: l,
                onViewportChange: a,
                onToastAdd: w.useCallback(() => c(d => d + 1), []),
                onToastRemove: w.useCallback(() => c(d => d - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: h,
                children: s
            })
        })
    };
Hh.displayName = Ku;
var Qh = "ToastViewport", M0 = ["F8"], Ia = "toast.viewportPause", Da = "toast.viewportResume",
    Kh = w.forwardRef((e, t) => {
        const {__scopeToast: n, hotkey: r = M0, label: o = "Notifications ({hotkey})", ...i} = e, s = Ks(Qh, n),
            l = O0(n), a = w.useRef(null), u = w.useRef(null), c = w.useRef(null), f = w.useRef(null),
            h = Et(t, f, s.onViewportChange), d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            x = s.toastCount > 0;
        w.useEffect(() => {
            const y = m => {
                var g;
                r.length !== 0 && r.every(E => m[E] || m.code === E) && ((g = f.current) == null || g.focus())
            };
            return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y)
        }, [r]), w.useEffect(() => {
            const y = a.current, m = f.current;
            if (x && y && m) {
                const p = () => {
                    if (!s.isClosePausedRef.current) {
                        const k = new CustomEvent(Ia);
                        m.dispatchEvent(k), s.isClosePausedRef.current = !0
                    }
                }, g = () => {
                    if (s.isClosePausedRef.current) {
                        const k = new CustomEvent(Da);
                        m.dispatchEvent(k), s.isClosePausedRef.current = !1
                    }
                }, E = k => {
                    !y.contains(k.relatedTarget) && g()
                }, C = () => {
                    y.contains(document.activeElement) || g()
                };
                return y.addEventListener("focusin", p), y.addEventListener("focusout", E), y.addEventListener("pointermove", p), y.addEventListener("pointerleave", C), window.addEventListener("blur", p), window.addEventListener("focus", g), () => {
                    y.removeEventListener("focusin", p), y.removeEventListener("focusout", E), y.removeEventListener("pointermove", p), y.removeEventListener("pointerleave", C), window.removeEventListener("blur", p), window.removeEventListener("focus", g)
                }
            }
        }, [x, s.isClosePausedRef]);
        const v = w.useCallback(({tabbingDirection: y}) => {
            const p = l().map(g => {
                const E = g.ref.current, C = [E, ...Q0(E)];
                return y === "forwards" ? C : C.reverse()
            });
            return (y === "forwards" ? p.reverse() : p).flat()
        }, [l]);
        return w.useEffect(() => {
            const y = f.current;
            if (y) {
                const m = p => {
                    var C, k, P;
                    const g = p.altKey || p.ctrlKey || p.metaKey;
                    if (p.key === "Tab" && !g) {
                        const R = document.activeElement, M = p.shiftKey;
                        if (p.target === y && M) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const D = v({tabbingDirection: M ? "backwards" : "forwards"}), Q = D.findIndex(j => j === R);
                        Dl(D.slice(Q + 1)) ? p.preventDefault() : M ? (k = u.current) == null || k.focus() : (P = c.current) == null || P.focus()
                    }
                };
                return y.addEventListener("keydown", m), () => y.removeEventListener("keydown", m)
            }
        }, [l, v]), S.jsxs(y0, {
            ref: a,
            role: "region",
            "aria-label": o.replace("{hotkey}", d),
            tabIndex: -1,
            style: {pointerEvents: x ? void 0 : "none"},
            children: [x && S.jsx(za, {
                ref: u, onFocusFromOutsideViewport: () => {
                    const y = v({tabbingDirection: "forwards"});
                    Dl(y)
                }
            }), S.jsx(Gu.Slot, {
                scope: n,
                children: S.jsx(He.ol, {tabIndex: -1, ...i, ref: h})
            }), x && S.jsx(za, {
                ref: c, onFocusFromOutsideViewport: () => {
                    const y = v({tabbingDirection: "backwards"});
                    Dl(y)
                }
            })]
        })
    });
Kh.displayName = Qh;
var Gh = "ToastFocusProxy", za = w.forwardRef((e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e, i = Ks(Gh, n);
    return S.jsx(Qs, {
        "aria-hidden": !0, tabIndex: 0, ...o, ref: t, style: {position: "fixed"}, onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
});
za.displayName = Gh;
var ui = "Toast", j0 = "toast.swipeStart", L0 = "toast.swipeMove", I0 = "toast.swipeCancel", D0 = "toast.swipeEnd",
    Yh = w.forwardRef((e, t) => {
        const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e, [l, a] = k0({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: ui
        });
        return S.jsx(Qu, {
            present: n || l, children: S.jsx($0, {
                open: l, ...s,
                ref: t,
                onClose: () => a(!1),
                onPause: An(e.onPause),
                onResume: An(e.onResume),
                onSwipeStart: ye(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: ye(e.onSwipeMove, u => {
                    const {x: c, y: f} = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
                }),
                onSwipeCancel: ye(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: ye(e.onSwipeEnd, u => {
                    const {x: c, y: f} = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), a(!1)
                })
            })
        })
    });
Yh.displayName = ui;
var [z0, F0] = Wh(ui, {
    onClose() {
    }
}), $0 = w.forwardRef((e, t) => {
    const {
            __scopeToast: n,
            type: r = "foreground",
            duration: o,
            open: i,
            onClose: s,
            onEscapeKeyDown: l,
            onPause: a,
            onResume: u,
            onSwipeStart: c,
            onSwipeMove: f,
            onSwipeCancel: h,
            onSwipeEnd: d,
            ...x
        } = e, v = Ks(ui, n), [y, m] = w.useState(null), p = Et(t, j => m(j)), g = w.useRef(null), E = w.useRef(null),
        C = o || v.duration, k = w.useRef(0), P = w.useRef(C), R = w.useRef(0), {onToastAdd: M, onToastRemove: _} = v,
        F = An(() => {
            var Y;
            (y == null ? void 0 : y.contains(document.activeElement)) && ((Y = v.viewport) == null || Y.focus()), s()
        }), D = w.useCallback(j => {
            !j || j === 1 / 0 || (window.clearTimeout(R.current), k.current = new Date().getTime(), R.current = window.setTimeout(F, j))
        }, [F]);
    w.useEffect(() => {
        const j = v.viewport;
        if (j) {
            const Y = () => {
                D(P.current), u == null || u()
            }, $ = () => {
                const V = new Date().getTime() - k.current;
                P.current = P.current - V, window.clearTimeout(R.current), a == null || a()
            };
            return j.addEventListener(Ia, $), j.addEventListener(Da, Y), () => {
                j.removeEventListener(Ia, $), j.removeEventListener(Da, Y)
            }
        }
    }, [v.viewport, C, a, u, D]), w.useEffect(() => {
        i && !v.isClosePausedRef.current && D(C)
    }, [i, C, v.isClosePausedRef, D]), w.useEffect(() => (M(), () => _()), [M, _]);
    const Q = w.useMemo(() => y ? nm(y) : null, [y]);
    return v.viewport ? S.jsxs(S.Fragment, {
        children: [Q && S.jsx(U0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), S.jsx(z0, {
            scope: n, onClose: F, children: ai.createPortal(S.jsx(Gu.ItemSlot, {
                scope: n, children: S.jsx(v0, {
                    asChild: !0, onEscapeKeyDown: ye(l, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || F(), v.isFocusedToastEscapeKeyDownRef.current = !1
                    }), children: S.jsx(He.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection, ...x,
                        ref: p,
                        style: {userSelect: "none", touchAction: "none", ...e.style},
                        onKeyDown: ye(e.onKeyDown, j => {
                            j.key === "Escape" && (l == null || l(j.nativeEvent), j.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, F()))
                        }),
                        onPointerDown: ye(e.onPointerDown, j => {
                            j.button === 0 && (g.current = {x: j.clientX, y: j.clientY})
                        }),
                        onPointerMove: ye(e.onPointerMove, j => {
                            if (!g.current) return;
                            const Y = j.clientX - g.current.x, $ = j.clientY - g.current.y, V = !!E.current,
                                T = ["left", "right"].includes(v.swipeDirection),
                                N = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                                L = T ? N(0, Y) : 0, W = T ? 0 : N(0, $), z = j.pointerType === "touch" ? 10 : 2,
                                K = {x: L, y: W}, q = {originalEvent: j, delta: K};
                            V ? (E.current = K, Mi(L0, f, q, {discrete: !1})) : Ad(K, v.swipeDirection, z) ? (E.current = K, Mi(j0, c, q, {discrete: !1}), j.target.setPointerCapture(j.pointerId)) : (Math.abs(Y) > z || Math.abs($) > z) && (g.current = null)
                        }),
                        onPointerUp: ye(e.onPointerUp, j => {
                            const Y = E.current, $ = j.target;
                            if ($.hasPointerCapture(j.pointerId) && $.releasePointerCapture(j.pointerId), E.current = null, g.current = null, Y) {
                                const V = j.currentTarget, T = {originalEvent: j, delta: Y};
                                Ad(Y, v.swipeDirection, v.swipeThreshold) ? Mi(D0, d, T, {discrete: !0}) : Mi(I0, h, T, {discrete: !0}), V.addEventListener("click", N => N.preventDefault(), {once: !0})
                            }
                        })
                    })
                })
            }), v.viewport)
        })]
    }) : null
}), U0 = e => {
    const {__scopeToast: t, children: n, ...r} = e, o = Ks(ui, t), [i, s] = w.useState(!1), [l, a] = w.useState(!1);
    return W0(() => s(!0)), w.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), l ? null : S.jsx(Vh, {
        asChild: !0,
        children: S.jsx(Qs, {...r, children: i && S.jsxs(S.Fragment, {children: [o.label, " ", n]})})
    })
}, B0 = "ToastTitle", qh = w.forwardRef((e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(He.div, {...r, ref: t})
});
qh.displayName = B0;
var V0 = "ToastDescription", Xh = w.forwardRef((e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(He.div, {...r, ref: t})
});
Xh.displayName = V0;
var Zh = "ToastAction", Jh = w.forwardRef((e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? S.jsx(tm, {
        altText: n,
        asChild: !0,
        children: S.jsx(Yu, {...r, ref: t})
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Zh}\`. Expected non-empty \`string\`.`), null)
});
Jh.displayName = Zh;
var em = "ToastClose", Yu = w.forwardRef((e, t) => {
    const {__scopeToast: n, ...r} = e, o = F0(em, n);
    return S.jsx(tm, {
        asChild: !0,
        children: S.jsx(He.button, {type: "button", ...r, ref: t, onClick: ye(e.onClick, o.onClose)})
    })
});
Yu.displayName = em;
var tm = w.forwardRef((e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return S.jsx(He.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0, ...o,
        ref: t
    })
});

function nm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), H0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o) if (i) {
                const s = r.dataset.radixToastAnnounceAlt;
                s && t.push(s)
            } else t.push(...nm(r))
        }
    }), t
}

function Mi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget, i = new CustomEvent(e, {bubbles: !0, cancelable: !0, detail: n});
    t && o.addEventListener(e, t, {once: !0}), r ? Fh(o, i) : o.dispatchEvent(i)
}

var Ad = (e, t, n = 0) => {
    const r = Math.abs(e.x), o = Math.abs(e.y), i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function W0(e = () => {
}) {
    const t = An(e);
    _n(() => {
        let n = 0, r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function H0(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Q0(e) {
    const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Dl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}

var K0 = Hh, rm = Kh, om = Yh, im = qh, sm = Xh, lm = Jh, am = Yu;

function um(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e; else if (typeof e == "object") if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++) e[t] && (n = um(e[t])) && (r && (r += " "), r += n)
    } else for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function cm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = um(e)) && (r && (r += " "), r += t);
    return r
}

const _d = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Md = cm, G0 = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return Md(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t, s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u], f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = _d(c) || _d(f);
        return o[u][h]
    }), l = n && Object.entries(n).reduce((u, c) => {
        let [f, h] = c;
        return h === void 0 || (u[f] = h), u
    }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
        let {class: f, className: h, ...d} = c;
        return Object.entries(d).every(x => {
            let [v, y] = x;
            return Array.isArray(y) ? y.includes({...i, ...l}[v]) : {...i, ...l}[v] === y
        }) ? [...u, f, h] : u
    }, []);
    return Md(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    dm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0 = w.forwardRef(({
                                color: e = "currentColor",
                                size: t = 24,
                                strokeWidth: n = 2,
                                absoluteStrokeWidth: r,
                                className: o = "",
                                children: i,
                                iconNode: s,
                                ...l
                            }, a) => w.createElement("svg", {
    ref: a, ...q0,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: dm("lucide", o), ...l
}, [...s.map(([u, c]) => w.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de = (e, t) => {
    const n = w.forwardRef(({className: r, ...o}, i) => w.createElement(X0, {
        ref: i,
        iconNode: t,
        className: dm(`lucide-${Y0(e)}`, r), ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0 = de("ArrowRightLeft", [["path", {d: "m16 3 4 4-4 4", key: "1x1c3m"}], ["path", {
    d: "M20 7H4",
    key: "zbl0bi"
}], ["path", {d: "m8 21-4-4 4-4", key: "h9nckh"}], ["path", {d: "M4 17h16", key: "g4d7ey"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0 = de("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs"}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {d: "M10 10h4", key: "tcdvrf"}], ["path", {d: "M10 14h4", key: "kelpxr"}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo = de("Check", [["path", {d: "M20 6 9 17l-5-5", key: "1gmf2c"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1 = de("ChevronLeft", [["path", {d: "m15 18-6-6 6-6", key: "1wnfg3"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1 = de("ChevronRight", [["path", {d: "m9 18 6-6-6-6", key: "mthhwq"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1 = de("Cloud", [["path", {d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1 = de("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1 = de("Database", [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7"}], ["path", {d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1 = de("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {cx: "12", cy: "12", r: "3", key: "1v7zrd"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1 = de("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb"}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {d: "M16 13H8", key: "t4e002"}], ["path", {d: "M16 17H8", key: "z1uh3a"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu = de("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl"}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1 = de("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1 = de("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {d: "M3 3v5h5", key: "1xhq8a"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1 = de("Search", [["circle", {cx: "11", cy: "11", r: "8", key: "4ej97u"}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu = de("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {cx: "12", cy: "12", r: "3", key: "1v7zrd"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm = de("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {d: "M12 18h.01", key: "mhygvu"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1 = de("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {d: "M20 3v4", key: "1olli1"}], ["path", {d: "M22 5h-4", key: "1gvqau"}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {d: "M5 18H3", key: "zchphs"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1 = de("SquareCheckBig", [["path", {
    d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
    key: "1uzm8b"
}], ["path", {d: "m9 11 3 3L22 4", key: "1pflzl"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd = de("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1 = de("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp"}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1 = de("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {cx: "12", cy: "7", r: "4", key: "17ys0d"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1 = de("X", [["path", {d: "M18 6 6 18", key: "1bl5f8"}], ["path", {d: "m6 6 12 12", key: "d8bk6v"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1 = de("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]), Zu = "-", g1 = e => {
    const t = y1(e), {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(Zu);
            return l[0] === "" && l.length !== 1 && l.shift(), pm(l, t) || v1(s)
        }, getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}, pm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0], r = t.nextPart.get(n), o = r ? pm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Zu);
    return (s = t.validators.find(({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}, Ld = /^\[(.+)\]$/, v1 = e => {
    if (Ld.test(e)) {
        const t = Ld.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}, y1 = e => {
    const {theme: t, prefix: n} = e, r = {nextPart: new Map, validators: []};
    return x1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Fa(s, r, i, t)
    }), r
}, Fa = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Id(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (w1(o)) {
                Fa(o(r), t, n, r);
                return
            }
            t.validators.push({validator: o, classGroupId: n});
            return
        }
        Object.entries(o).forEach(([i, s]) => {
            Fa(s, Id(t, i), n, r)
        })
    })
}, Id = (e, t) => {
    let n = e;
    return t.split(Zu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {nextPart: new Map, validators: []}), n = n.nextPart.get(r)
    }), n
}, w1 = e => e.isThemeGetter, x1 = (e, t) => t ? e.map(([n, r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
    return [n, o]
}) : e, S1 = e => {
    if (e < 1) return {
        get: () => {
        }, set: () => {
        }
    };
    let t = 0, n = new Map, r = new Map;
    const o = (i, s) => {
        n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
    };
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0) return s;
            if ((s = r.get(i)) !== void 0) return o(i, s), s
        }, set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}, hm = "!", E1 = e => {
    const {separator: t, experimentalParseClassName: n} = e, r = t.length === 1, o = t[0], i = t.length, s = l => {
        const a = [];
        let u = 0, c = 0, f;
        for (let y = 0; y < l.length; y++) {
            let m = l[y];
            if (u === 0) {
                if (m === o && (r || l.slice(y, y + i) === t)) {
                    a.push(l.slice(c, y)), c = y + i;
                    continue
                }
                if (m === "/") {
                    f = y;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const h = a.length === 0 ? l : l.substring(c), d = h.startsWith(hm), x = d ? h.substring(1) : h,
            v = f && f > c ? f - c : void 0;
        return {modifiers: a, hasImportantModifier: d, baseClassName: x, maybePostfixModifierPosition: v}
    };
    return n ? l => n({className: l, parseClassName: s}) : s
}, C1 = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
}, k1 = e => ({cache: S1(e.cacheSize), parseClassName: E1(e), ...g1(e)}), P1 = /\s+/, b1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t, i = [], s = e.trim().split(P1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a], {
            modifiers: c,
            hasImportantModifier: f,
            baseClassName: h,
            maybePostfixModifierPosition: d
        } = n(u);
        let x = !!d, v = r(x ? h.substring(0, d) : h);
        if (!v) {
            if (!x) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (v = r(h), !v) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            x = !1
        }
        const y = C1(c).join(":"), m = f ? y + hm : y, p = m + v;
        if (i.includes(p)) continue;
        i.push(p);
        const g = o(v, x);
        for (let E = 0; E < g.length; ++E) {
            const C = g[E];
            i.push(m + C)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
};

function T1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length;) (t = arguments[e++]) && (n = mm(t)) && (r && (r += " "), r += n);
    return r
}

const mm = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = mm(e[r])) && (n && (n += " "), n += t);
    return n
};

function N1(e, ...t) {
    let n, r, o, i = s;

    function s(a) {
        const u = t.reduce((c, f) => f(c), e());
        return n = k1(u), r = n.cache.get, o = n.cache.set, i = l, l(a)
    }

    function l(a) {
        const u = r(a);
        if (u) return u;
        const c = b1(a, n);
        return o(a, c), c
    }

    return function () {
        return i(T1.apply(null, arguments))
    }
}

const re = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    }, gm = /^\[(?:([a-z-]+):)?(.+)\]$/i, R1 = /^\d+\/\d+$/, O1 = new Set(["px", "full", "screen"]),
    A1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    _1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    M1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    j1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    L1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Dt = e => jr(e) || O1.has(e) || R1.test(e), sn = e => ro(e, "length", V1),
    jr = e => !!e && !Number.isNaN(Number(e)), zl = e => ro(e, "number", jr),
    vo = e => !!e && Number.isInteger(Number(e)), I1 = e => e.endsWith("%") && jr(e.slice(0, -1)), H = e => gm.test(e),
    ln = e => A1.test(e), D1 = new Set(["length", "size", "percentage"]), z1 = e => ro(e, D1, vm),
    F1 = e => ro(e, "position", vm), $1 = new Set(["image", "url"]), U1 = e => ro(e, $1, H1), B1 = e => ro(e, "", W1),
    yo = () => !0, ro = (e, t, n) => {
        const r = gm.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    }, V1 = e => _1.test(e) && !M1.test(e), vm = () => !1, W1 = e => j1.test(e), H1 = e => L1.test(e), Q1 = () => {
        const e = re("colors"), t = re("spacing"), n = re("blur"), r = re("brightness"), o = re("borderColor"),
            i = re("borderRadius"), s = re("borderSpacing"), l = re("borderWidth"), a = re("contrast"), u = re("grayscale"),
            c = re("hueRotate"), f = re("invert"), h = re("gap"), d = re("gradientColorStops"),
            x = re("gradientColorStopPositions"), v = re("inset"), y = re("margin"), m = re("opacity"), p = re("padding"),
            g = re("saturate"), E = re("scale"), C = re("sepia"), k = re("skew"), P = re("space"), R = re("translate"),
            M = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
            F = () => ["auto", H, t], D = () => [H, t], Q = () => ["", Dt, sn], j = () => ["auto", jr, H],
            Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", H],
            L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [jr, H];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [yo],
                spacing: [Dt, sn],
                blur: ["none", "", ln, H],
                brightness: W(),
                borderColor: [e],
                borderRadius: ["none", "", "full", ln, H],
                borderSpacing: D(),
                borderWidth: Q(),
                contrast: W(),
                grayscale: N(),
                hueRotate: W(),
                invert: N(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [I1, sn],
                inset: F(),
                margin: F(),
                opacity: W(),
                padding: D(),
                saturate: W(),
                scale: W(),
                sepia: N(),
                skew: W(),
                space: D(),
                translate: D()
            },
            classGroups: {
                aspect: [{aspect: ["auto", "square", "video", H]}],
                container: ["container"],
                columns: [{columns: [ln]}],
                "break-after": [{"break-after": L()}],
                "break-before": [{"break-before": L()}],
                "break-inside": [{"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]}],
                "box-decoration": [{"box-decoration": ["slice", "clone"]}],
                box: [{box: ["border", "content"]}],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{float: ["right", "left", "none", "start", "end"]}],
                clear: [{clear: ["left", "right", "both", "none", "start", "end"]}],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{object: ["contain", "cover", "fill", "none", "scale-down"]}],
                "object-position": [{object: [...Y(), H]}],
                overflow: [{overflow: _()}],
                "overflow-x": [{"overflow-x": _()}],
                "overflow-y": [{"overflow-y": _()}],
                overscroll: [{overscroll: M()}],
                "overscroll-x": [{"overscroll-x": M()}],
                "overscroll-y": [{"overscroll-y": M()}],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{inset: [v]}],
                "inset-x": [{"inset-x": [v]}],
                "inset-y": [{"inset-y": [v]}],
                start: [{start: [v]}],
                end: [{end: [v]}],
                top: [{top: [v]}],
                right: [{right: [v]}],
                bottom: [{bottom: [v]}],
                left: [{left: [v]}],
                visibility: ["visible", "invisible", "collapse"],
                z: [{z: ["auto", vo, H]}],
                basis: [{basis: F()}],
                "flex-direction": [{flex: ["row", "row-reverse", "col", "col-reverse"]}],
                "flex-wrap": [{flex: ["wrap", "wrap-reverse", "nowrap"]}],
                flex: [{flex: ["1", "auto", "initial", "none", H]}],
                grow: [{grow: N()}],
                shrink: [{shrink: N()}],
                order: [{order: ["first", "last", "none", vo, H]}],
                "grid-cols": [{"grid-cols": [yo]}],
                "col-start-end": [{col: ["auto", {span: ["full", vo, H]}, H]}],
                "col-start": [{"col-start": j()}],
                "col-end": [{"col-end": j()}],
                "grid-rows": [{"grid-rows": [yo]}],
                "row-start-end": [{row: ["auto", {span: [vo, H]}, H]}],
                "row-start": [{"row-start": j()}],
                "row-end": [{"row-end": j()}],
                "grid-flow": [{"grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]}],
                "auto-cols": [{"auto-cols": ["auto", "min", "max", "fr", H]}],
                "auto-rows": [{"auto-rows": ["auto", "min", "max", "fr", H]}],
                gap: [{gap: [h]}],
                "gap-x": [{"gap-x": [h]}],
                "gap-y": [{"gap-y": [h]}],
                "justify-content": [{justify: ["normal", ...T()]}],
                "justify-items": [{"justify-items": ["start", "end", "center", "stretch"]}],
                "justify-self": [{"justify-self": ["auto", "start", "end", "center", "stretch"]}],
                "align-content": [{content: ["normal", ...T(), "baseline"]}],
                "align-items": [{items: ["start", "end", "center", "baseline", "stretch"]}],
                "align-self": [{self: ["auto", "start", "end", "center", "stretch", "baseline"]}],
                "place-content": [{"place-content": [...T(), "baseline"]}],
                "place-items": [{"place-items": ["start", "end", "center", "baseline", "stretch"]}],
                "place-self": [{"place-self": ["auto", "start", "end", "center", "stretch"]}],
                p: [{p: [p]}],
                px: [{px: [p]}],
                py: [{py: [p]}],
                ps: [{ps: [p]}],
                pe: [{pe: [p]}],
                pt: [{pt: [p]}],
                pr: [{pr: [p]}],
                pb: [{pb: [p]}],
                pl: [{pl: [p]}],
                m: [{m: [y]}],
                mx: [{mx: [y]}],
                my: [{my: [y]}],
                ms: [{ms: [y]}],
                me: [{me: [y]}],
                mt: [{mt: [y]}],
                mr: [{mr: [y]}],
                mb: [{mb: [y]}],
                ml: [{ml: [y]}],
                "space-x": [{"space-x": [P]}],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{"space-y": [P]}],
                "space-y-reverse": ["space-y-reverse"],
                w: [{w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]}],
                "min-w": [{"min-w": [H, t, "min", "max", "fit"]}],
                "max-w": [{"max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {screen: [ln]}, ln]}],
                h: [{h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]}],
                "min-h": [{"min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]}],
                "max-h": [{"max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]}],
                size: [{size: [H, t, "auto", "min", "max", "fit"]}],
                "font-size": [{text: ["base", ln, sn]}],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zl]}],
                "font-family": [{font: [yo]}],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]}],
                "line-clamp": [{"line-clamp": ["none", jr, zl]}],
                leading: [{leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, H]}],
                "list-image": [{"list-image": ["none", H]}],
                "list-style-type": [{list: ["none", "disc", "decimal", H]}],
                "list-style-position": [{list: ["inside", "outside"]}],
                "placeholder-color": [{placeholder: [e]}],
                "placeholder-opacity": [{"placeholder-opacity": [m]}],
                "text-alignment": [{text: ["left", "center", "right", "justify", "start", "end"]}],
                "text-color": [{text: [e]}],
                "text-opacity": [{"text-opacity": [m]}],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{decoration: [...$(), "wavy"]}],
                "text-decoration-thickness": [{decoration: ["auto", "from-font", Dt, sn]}],
                "underline-offset": [{"underline-offset": ["auto", Dt, H]}],
                "text-decoration-color": [{decoration: [e]}],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{text: ["wrap", "nowrap", "balance", "pretty"]}],
                indent: [{indent: D()}],
                "vertical-align": [{align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]}],
                whitespace: [{whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]}],
                break: [{break: ["normal", "words", "all", "keep"]}],
                hyphens: [{hyphens: ["none", "manual", "auto"]}],
                content: [{content: ["none", H]}],
                "bg-attachment": [{bg: ["fixed", "local", "scroll"]}],
                "bg-clip": [{"bg-clip": ["border", "padding", "content", "text"]}],
                "bg-opacity": [{"bg-opacity": [m]}],
                "bg-origin": [{"bg-origin": ["border", "padding", "content"]}],
                "bg-position": [{bg: [...Y(), F1]}],
                "bg-repeat": [{bg: ["no-repeat", {repeat: ["", "x", "y", "round", "space"]}]}],
                "bg-size": [{bg: ["auto", "cover", "contain", z1]}],
                "bg-image": [{bg: ["none", {"gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]}, U1]}],
                "bg-color": [{bg: [e]}],
                "gradient-from-pos": [{from: [x]}],
                "gradient-via-pos": [{via: [x]}],
                "gradient-to-pos": [{to: [x]}],
                "gradient-from": [{from: [d]}],
                "gradient-via": [{via: [d]}],
                "gradient-to": [{to: [d]}],
                rounded: [{rounded: [i]}],
                "rounded-s": [{"rounded-s": [i]}],
                "rounded-e": [{"rounded-e": [i]}],
                "rounded-t": [{"rounded-t": [i]}],
                "rounded-r": [{"rounded-r": [i]}],
                "rounded-b": [{"rounded-b": [i]}],
                "rounded-l": [{"rounded-l": [i]}],
                "rounded-ss": [{"rounded-ss": [i]}],
                "rounded-se": [{"rounded-se": [i]}],
                "rounded-ee": [{"rounded-ee": [i]}],
                "rounded-es": [{"rounded-es": [i]}],
                "rounded-tl": [{"rounded-tl": [i]}],
                "rounded-tr": [{"rounded-tr": [i]}],
                "rounded-br": [{"rounded-br": [i]}],
                "rounded-bl": [{"rounded-bl": [i]}],
                "border-w": [{border: [l]}],
                "border-w-x": [{"border-x": [l]}],
                "border-w-y": [{"border-y": [l]}],
                "border-w-s": [{"border-s": [l]}],
                "border-w-e": [{"border-e": [l]}],
                "border-w-t": [{"border-t": [l]}],
                "border-w-r": [{"border-r": [l]}],
                "border-w-b": [{"border-b": [l]}],
                "border-w-l": [{"border-l": [l]}],
                "border-opacity": [{"border-opacity": [m]}],
                "border-style": [{border: [...$(), "hidden"]}],
                "divide-x": [{"divide-x": [l]}],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{"divide-y": [l]}],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{"divide-opacity": [m]}],
                "divide-style": [{divide: $()}],
                "border-color": [{border: [o]}],
                "border-color-x": [{"border-x": [o]}],
                "border-color-y": [{"border-y": [o]}],
                "border-color-s": [{"border-s": [o]}],
                "border-color-e": [{"border-e": [o]}],
                "border-color-t": [{"border-t": [o]}],
                "border-color-r": [{"border-r": [o]}],
                "border-color-b": [{"border-b": [o]}],
                "border-color-l": [{"border-l": [o]}],
                "divide-color": [{divide: [o]}],
                "outline-style": [{outline: ["", ...$()]}],
                "outline-offset": [{"outline-offset": [Dt, H]}],
                "outline-w": [{outline: [Dt, sn]}],
                "outline-color": [{outline: [e]}],
                "ring-w": [{ring: Q()}],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ring: [e]}],
                "ring-opacity": [{"ring-opacity": [m]}],
                "ring-offset-w": [{"ring-offset": [Dt, sn]}],
                "ring-offset-color": [{"ring-offset": [e]}],
                shadow: [{shadow: ["", "inner", "none", ln, B1]}],
                "shadow-color": [{shadow: [yo]}],
                opacity: [{opacity: [m]}],
                "mix-blend": [{"mix-blend": [...V(), "plus-lighter", "plus-darker"]}],
                "bg-blend": [{"bg-blend": V()}],
                filter: [{filter: ["", "none"]}],
                blur: [{blur: [n]}],
                brightness: [{brightness: [r]}],
                contrast: [{contrast: [a]}],
                "drop-shadow": [{"drop-shadow": ["", "none", ln, H]}],
                grayscale: [{grayscale: [u]}],
                "hue-rotate": [{"hue-rotate": [c]}],
                invert: [{invert: [f]}],
                saturate: [{saturate: [g]}],
                sepia: [{sepia: [C]}],
                "backdrop-filter": [{"backdrop-filter": ["", "none"]}],
                "backdrop-blur": [{"backdrop-blur": [n]}],
                "backdrop-brightness": [{"backdrop-brightness": [r]}],
                "backdrop-contrast": [{"backdrop-contrast": [a]}],
                "backdrop-grayscale": [{"backdrop-grayscale": [u]}],
                "backdrop-hue-rotate": [{"backdrop-hue-rotate": [c]}],
                "backdrop-invert": [{"backdrop-invert": [f]}],
                "backdrop-opacity": [{"backdrop-opacity": [m]}],
                "backdrop-saturate": [{"backdrop-saturate": [g]}],
                "backdrop-sepia": [{"backdrop-sepia": [C]}],
                "border-collapse": [{border: ["collapse", "separate"]}],
                "border-spacing": [{"border-spacing": [s]}],
                "border-spacing-x": [{"border-spacing-x": [s]}],
                "border-spacing-y": [{"border-spacing-y": [s]}],
                "table-layout": [{table: ["auto", "fixed"]}],
                caption: [{caption: ["top", "bottom"]}],
                transition: [{transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]}],
                duration: [{duration: W()}],
                ease: [{ease: ["linear", "in", "out", "in-out", H]}],
                delay: [{delay: W()}],
                animate: [{animate: ["none", "spin", "ping", "pulse", "bounce", H]}],
                transform: [{transform: ["", "gpu", "none"]}],
                scale: [{scale: [E]}],
                "scale-x": [{"scale-x": [E]}],
                "scale-y": [{"scale-y": [E]}],
                rotate: [{rotate: [vo, H]}],
                "translate-x": [{"translate-x": [R]}],
                "translate-y": [{"translate-y": [R]}],
                "skew-x": [{"skew-x": [k]}],
                "skew-y": [{"skew-y": [k]}],
                "transform-origin": [{origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]}],
                accent: [{accent: ["auto", e]}],
                appearance: [{appearance: ["none", "auto"]}],
                cursor: [{cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]}],
                "caret-color": [{caret: [e]}],
                "pointer-events": [{"pointer-events": ["none", "auto"]}],
                resize: [{resize: ["none", "y", "x", ""]}],
                "scroll-behavior": [{scroll: ["auto", "smooth"]}],
                "scroll-m": [{"scroll-m": D()}],
                "scroll-mx": [{"scroll-mx": D()}],
                "scroll-my": [{"scroll-my": D()}],
                "scroll-ms": [{"scroll-ms": D()}],
                "scroll-me": [{"scroll-me": D()}],
                "scroll-mt": [{"scroll-mt": D()}],
                "scroll-mr": [{"scroll-mr": D()}],
                "scroll-mb": [{"scroll-mb": D()}],
                "scroll-ml": [{"scroll-ml": D()}],
                "scroll-p": [{"scroll-p": D()}],
                "scroll-px": [{"scroll-px": D()}],
                "scroll-py": [{"scroll-py": D()}],
                "scroll-ps": [{"scroll-ps": D()}],
                "scroll-pe": [{"scroll-pe": D()}],
                "scroll-pt": [{"scroll-pt": D()}],
                "scroll-pr": [{"scroll-pr": D()}],
                "scroll-pb": [{"scroll-pb": D()}],
                "scroll-pl": [{"scroll-pl": D()}],
                "snap-align": [{snap: ["start", "end", "center", "align-none"]}],
                "snap-stop": [{snap: ["normal", "always"]}],
                "snap-type": [{snap: ["none", "x", "y", "both"]}],
                "snap-strictness": [{snap: ["mandatory", "proximity"]}],
                touch: [{touch: ["auto", "none", "manipulation"]}],
                "touch-x": [{"touch-pan": ["x", "left", "right"]}],
                "touch-y": [{"touch-pan": ["y", "up", "down"]}],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{select: ["none", "text", "all", "auto"]}],
                "will-change": [{"will-change": ["auto", "scroll", "contents", "transform", H]}],
                fill: [{fill: [e, "none"]}],
                "stroke-w": [{stroke: [Dt, sn, zl]}],
                stroke: [{stroke: [e, "none"]}],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{"forced-color-adjust": ["auto", "none"]}]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {"font-size": ["leading"]}
        }
    }, K1 = N1(Q1);

function ar(...e) {
    return K1(cm(e))
}

const G1 = K0, ym = w.forwardRef(({className: e, ...t}, n) => S.jsx(rm, {
    ref: n,
    className: ar("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e), ...t
}));
ym.displayName = rm.displayName;
const Y1 = G0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    }, defaultVariants: {variant: "default"}
}), wm = w.forwardRef(({className: e, variant: t, ...n}, r) => S.jsx(om, {
    ref: r,
    className: ar(Y1({variant: t}), e), ...n
}));
wm.displayName = om.displayName;
const q1 = w.forwardRef(({className: e, ...t}, n) => S.jsx(lm, {
    ref: n,
    className: ar("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e), ...t
}));
q1.displayName = lm.displayName;
const xm = w.forwardRef(({className: e, ...t}, n) => S.jsx(am, {
    ref: n,
    className: ar("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "", ...t,
    children: S.jsx(h1, {className: "h-4 w-4"})
}));
xm.displayName = am.displayName;
const Sm = w.forwardRef(({className: e, ...t}, n) => S.jsx(im, {
    ref: n,
    className: ar("text-sm font-semibold", e), ...t
}));
Sm.displayName = im.displayName;
const Em = w.forwardRef(({className: e, ...t}, n) => S.jsx(sm, {ref: n, className: ar("text-sm opacity-90", e), ...t}));
Em.displayName = sm.displayName;

function X1() {
    const {toasts: e} = t0();
    return S.jsxs(G1, {
        children: [e.map(function ({id: t, title: n, description: r, action: o, ...i}) {
            return S.jsxs(wm, {
                ...i,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(Sm, {children: n}), r && S.jsx(Em, {children: r})]
                }), o, S.jsx(xm, {})]
            }, t)
        }), S.jsx(ym, {})]
    })
}

var Dd = ["light", "dark"], Z1 = "(prefers-color-scheme: dark)", J1 = w.createContext(void 0), ew = {
    setTheme: e => {
    }, themes: []
}, tw = () => {
    var e;
    return (e = w.useContext(J1)) != null ? e : ew
};
w.memo(({
            forcedTheme: e,
            storageKey: t,
            attribute: n,
            enableSystem: r,
            enableColorScheme: o,
            defaultTheme: i,
            value: s,
            attrs: l,
            nonce: a
        }) => {
    let u = i === "system",
        c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        f = o ? Dd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        h = (x, v = !1, y = !0) => {
            let m = s ? s[x] : x, p = v ? x + "|| ''" : `'${m}'`, g = "";
            return o && y && !v && Dd.includes(x) && (g += `d.style.colorScheme = '${x}';`), n === "class" ? v || m ? g += `c.add(${p})` : g += "null" : m && (g += `d[s](n,${p})`), g
        },
        d = e ? `!function(){${c}${h(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Z1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${h(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${h(s ? "x[e]" : "e", !0)}}else{${h(i, !1, !1)};}${f}}catch(t){}}();`;
    return w.createElement("script", {nonce: a, dangerouslySetInnerHTML: {__html: d}})
});
var nw = e => {
        switch (e) {
            case"success":
                return iw;
            case"info":
                return lw;
            case"warning":
                return sw;
            case"error":
                return aw;
            default:
                return null
        }
    }, rw = Array(12).fill(0), ow = ({
                                         visible: e,
                                         className: t
                                     }) => A.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, A.createElement("div", {className: "sonner-spinner"}, rw.map((n, r) => A.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))), iw = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })), sw = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })), lw = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })), aw = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })), uw = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, A.createElement("line", {x1: "18", y1: "6", x2: "6", y2: "18"}), A.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })), cw = () => {
        let [e, t] = A.useState(document.hidden);
        return A.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    }, $a = 1, dw = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {message: n, ...r} = e,
                    o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : $a++,
                    i = this.toasts.find(l => l.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                    ...l, ...e,
                    id: o,
                    title: n
                }), {...l, ...e, id: o, dismissible: s, title: n}) : l) : this.addToast({
                    title: n, ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({id: t.id, dismiss: !0}))
            }), this.subscribers.forEach(t => t({id: e, dismiss: !0})), e), this.message = (e, t) => this.create({
                ...t,
                message: e
            }), this.error = (e, t) => this.create({
                ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({
                ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({
                ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({
                ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({...t, type: "loading", message: e}), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({
                    ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async a => {
                    if (i = ["resolve", a], A.isValidElement(a)) o = !1, this.create({
                        id: n,
                        type: "default",
                        message: a
                    }); else if (pw(a) && !a.ok) {
                        o = !1;
                        let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error,
                            c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                        this.create({id: n, type: "error", message: u, description: c})
                    } else if (t.success !== void 0) {
                        o = !1;
                        let u = typeof t.success == "function" ? await t.success(a) : t.success,
                            c = typeof t.description == "function" ? await t.description(a) : t.description;
                        this.create({id: n, type: "success", message: u, description: c})
                    }
                }).catch(async a => {
                    if (i = ["reject", a], t.error !== void 0) {
                        o = !1;
                        let u = typeof t.error == "function" ? await t.error(a) : t.error,
                            c = typeof t.description == "function" ? await t.description(a) : t.description;
                        this.create({id: n, type: "error", message: u, description: c})
                    }
                }).finally(() => {
                    var a;
                    o && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t)
                }), l = () => new Promise((a, u) => s.then(() => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
                return typeof n != "string" && typeof n != "number" ? {unwrap: l} : Object.assign(n, {unwrap: l})
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || $a++;
                return this.create({jsx: e(n), id: n, ...t}), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    }, ze = new dw, fw = (e, t) => {
        let n = (t == null ? void 0 : t.id) || $a++;
        return ze.addToast({title: e, ...t, id: n}), n
    },
    pw = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    hw = fw, mw = () => ze.toasts, gw = () => ze.getActiveToasts();
Object.assign(hw, {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading
}, {getHistory: mw, getToasts: gw});

function vw(e, {insertAt: t} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}

vw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function ji(e) {
    return e.label !== void 0
}

var yw = 3, ww = "32px", xw = "16px", zd = 4e3, Sw = 356, Ew = 14, Cw = 20, kw = 200;

function ft(...e) {
    return e.filter(Boolean).join(" ")
}

function Pw(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}

var bw = e => {
    var t, n, r, o, i, s, l, a, u, c, f;
    let {
            invert: h,
            toast: d,
            unstyled: x,
            interacting: v,
            setHeights: y,
            visibleToasts: m,
            heights: p,
            index: g,
            toasts: E,
            expanded: C,
            removeToast: k,
            defaultRichColors: P,
            closeButton: R,
            style: M,
            cancelButtonStyle: _,
            actionButtonStyle: F,
            className: D = "",
            descriptionClassName: Q = "",
            duration: j,
            position: Y,
            gap: $,
            loadingIcon: V,
            expandByDefault: T,
            classNames: N,
            icons: L,
            closeButtonAriaLabel: W = "Close toast",
            pauseWhenPageIsHidden: z
        } = e, [K, q] = A.useState(null), [me, Pe] = A.useState(null), [J, ur] = A.useState(!1), [Zt, zn] = A.useState(!1), [Jt, cr] = A.useState(!1), [en, di] = A.useState(!1), [ol, fi] = A.useState(!1), [il, so] = A.useState(0), [dr, dc] = A.useState(0),
        lo = A.useRef(d.duration || j || zd), fc = A.useRef(null), Fn = A.useRef(null), mg = g === 0, gg = g + 1 <= m,
        et = d.type, fr = d.dismissible !== !1, vg = d.className || "", yg = d.descriptionClassName || "",
        pi = A.useMemo(() => p.findIndex(U => U.toastId === d.id) || 0, [p, d.id]), wg = A.useMemo(() => {
            var U;
            return (U = d.closeButton) != null ? U : R
        }, [d.closeButton, R]), pc = A.useMemo(() => d.duration || j || zd, [d.duration, j]), sl = A.useRef(0),
        pr = A.useRef(0), hc = A.useRef(0), hr = A.useRef(null), [xg, Sg] = Y.split("-"),
        mc = A.useMemo(() => p.reduce((U, te, se) => se >= pi ? U : U + te.height, 0), [p, pi]), gc = cw(),
        Eg = d.invert || h, ll = et === "loading";
    pr.current = A.useMemo(() => pi * $ + mc, [pi, mc]), A.useEffect(() => {
        lo.current = pc
    }, [pc]), A.useEffect(() => {
        ur(!0)
    }, []), A.useEffect(() => {
        let U = Fn.current;
        if (U) {
            let te = U.getBoundingClientRect().height;
            return dc(te), y(se => [{
                toastId: d.id,
                height: te,
                position: d.position
            }, ...se]), () => y(se => se.filter(at => at.toastId !== d.id))
        }
    }, [y, d.id]), A.useLayoutEffect(() => {
        if (!J) return;
        let U = Fn.current, te = U.style.height;
        U.style.height = "auto";
        let se = U.getBoundingClientRect().height;
        U.style.height = te, dc(se), y(at => at.find(ut => ut.toastId === d.id) ? at.map(ut => ut.toastId === d.id ? {
            ...ut,
            height: se
        } : ut) : [{toastId: d.id, height: se, position: d.position}, ...at])
    }, [J, d.title, d.description, y, d.id]);
    let tn = A.useCallback(() => {
        zn(!0), so(pr.current), y(U => U.filter(te => te.toastId !== d.id)), setTimeout(() => {
            k(d)
        }, kw)
    }, [d, k, y, pr]);
    A.useEffect(() => {
        if (d.promise && et === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
        let U;
        return C || v || z && gc ? (() => {
            if (hc.current < sl.current) {
                let te = new Date().getTime() - sl.current;
                lo.current = lo.current - te
            }
            hc.current = new Date().getTime()
        })() : lo.current !== 1 / 0 && (sl.current = new Date().getTime(), U = setTimeout(() => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d), tn()
        }, lo.current)), () => clearTimeout(U)
    }, [C, v, d, et, z, gc, tn]), A.useEffect(() => {
        d.delete && tn()
    }, [tn, d.delete]);

    function Cg() {
        var U, te, se;
        return L != null && L.loading ? A.createElement("div", {
            className: ft(N == null ? void 0 : N.loader, (U = d == null ? void 0 : d.classNames) == null ? void 0 : U.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, L.loading) : V ? A.createElement("div", {
            className: ft(N == null ? void 0 : N.loader, (te = d == null ? void 0 : d.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, V) : A.createElement(ow, {
            className: ft(N == null ? void 0 : N.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader),
            visible: et === "loading"
        })
    }

    return A.createElement("li", {
        tabIndex: 0,
        ref: Fn,
        className: ft(D, vg, N == null ? void 0 : N.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[et], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[et]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : P,
        "data-styled": !(d.jsx || d.unstyled || x),
        "data-mounted": J,
        "data-promise": !!d.promise,
        "data-swiped": ol,
        "data-removed": Zt,
        "data-visible": gg,
        "data-y-position": xg,
        "data-x-position": Sg,
        "data-index": g,
        "data-front": mg,
        "data-swiping": Jt,
        "data-dismissible": fr,
        "data-type": et,
        "data-invert": Eg,
        "data-swipe-out": en,
        "data-swipe-direction": me,
        "data-expanded": !!(C || T && J),
        style: {
            "--index": g,
            "--toasts-before": g,
            "--z-index": E.length - g,
            "--offset": `${Zt ? il : pr.current}px`,
            "--initial-height": T ? "auto" : `${dr}px`, ...M, ...d.style
        },
        onDragEnd: () => {
            cr(!1), q(null), hr.current = null
        },
        onPointerDown: U => {
            ll || !fr || (fc.current = new Date, so(pr.current), U.target.setPointerCapture(U.pointerId), U.target.tagName !== "BUTTON" && (cr(!0), hr.current = {
                x: U.clientX,
                y: U.clientY
            }))
        },
        onPointerUp: () => {
            var U, te, se, at;
            if (en || !fr) return;
            hr.current = null;
            let ut = Number(((U = Fn.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                nn = Number(((te = Fn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                $n = new Date().getTime() - ((se = fc.current) == null ? void 0 : se.getTime()),
                ct = K === "x" ? ut : nn, rn = Math.abs(ct) / $n;
            if (Math.abs(ct) >= Cw || rn > .11) {
                so(pr.current), (at = d.onDismiss) == null || at.call(d, d), Pe(K === "x" ? ut > 0 ? "right" : "left" : nn > 0 ? "down" : "up"), tn(), di(!0), fi(!1);
                return
            }
            cr(!1), q(null)
        },
        onPointerMove: U => {
            var te, se, at, ut;
            if (!hr.current || !fr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0) return;
            let nn = U.clientY - hr.current.y, $n = U.clientX - hr.current.x,
                ct = (se = e.swipeDirections) != null ? se : Pw(Y);
            !K && (Math.abs($n) > 1 || Math.abs(nn) > 1) && q(Math.abs($n) > Math.abs(nn) ? "x" : "y");
            let rn = {x: 0, y: 0};
            K === "y" ? (ct.includes("top") || ct.includes("bottom")) && (ct.includes("top") && nn < 0 || ct.includes("bottom") && nn > 0) && (rn.y = nn) : K === "x" && (ct.includes("left") || ct.includes("right")) && (ct.includes("left") && $n < 0 || ct.includes("right") && $n > 0) && (rn.x = $n), (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && fi(!0), (at = Fn.current) == null || at.style.setProperty("--swipe-amount-x", `${rn.x}px`), (ut = Fn.current) == null || ut.style.setProperty("--swipe-amount-y", `${rn.y}px`)
        }
    }, wg && !d.jsx ? A.createElement("button", {
        "aria-label": W,
        "data-disabled": ll,
        "data-close-button": !0,
        onClick: ll || !fr ? () => {
        } : () => {
            var U;
            tn(), (U = d.onDismiss) == null || U.call(d, d)
        },
        className: ft(N == null ? void 0 : N.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, (i = L == null ? void 0 : L.close) != null ? i : uw) : null, d.jsx || w.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : A.createElement(A.Fragment, null, et || d.icon || d.promise ? A.createElement("div", {
        "data-icon": "",
        className: ft(N == null ? void 0 : N.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Cg() : null, d.type !== "loading" ? d.icon || (L == null ? void 0 : L[et]) || nw(et) : null) : null, A.createElement("div", {
        "data-content": "",
        className: ft(N == null ? void 0 : N.content, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.content)
    }, A.createElement("div", {
        "data-title": "",
        className: ft(N == null ? void 0 : N.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? A.createElement("div", {
        "data-description": "",
        className: ft(Q, yg, N == null ? void 0 : N.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), w.isValidElement(d.cancel) ? d.cancel : d.cancel && ji(d.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || _,
        onClick: U => {
            var te, se;
            ji(d.cancel) && fr && ((se = (te = d.cancel).onClick) == null || se.call(te, U), tn())
        },
        className: ft(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, w.isValidElement(d.action) ? d.action : d.action && ji(d.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || F,
        onClick: U => {
            var te, se;
            ji(d.action) && ((se = (te = d.action).onClick) == null || se.call(te, U), !U.defaultPrevented && tn())
        },
        className: ft(N == null ? void 0 : N.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null))
};

function Fd() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function Tw(e, t) {
    let n = {};
    return [e, t].forEach((r, o) => {
        let i = o === 1, s = i ? "--mobile-offset" : "--offset", l = i ? xw : ww;

        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            })
        }

        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }) : a(l)
    }), n
}

var Nw = w.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: i,
            closeButton: s,
            className: l,
            offset: a,
            mobileOffset: u,
            theme: c = "light",
            richColors: f,
            duration: h,
            style: d,
            visibleToasts: x = yw,
            toastOptions: v,
            dir: y = Fd(),
            gap: m = Ew,
            loadingIcon: p,
            icons: g,
            containerAriaLabel: E = "Notifications",
            pauseWhenPageIsHidden: C
        } = e, [k, P] = A.useState([]),
        R = A.useMemo(() => Array.from(new Set([r].concat(k.filter(z => z.position).map(z => z.position)))), [k, r]), [M, _] = A.useState([]), [F, D] = A.useState(!1), [Q, j] = A.useState(!1), [Y, $] = A.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
        V = A.useRef(null), T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = A.useRef(null),
        L = A.useRef(!1), W = A.useCallback(z => {
            P(K => {
                var q;
                return (q = K.find(me => me.id === z.id)) != null && q.delete || ze.dismiss(z.id), K.filter(({id: me}) => me !== z.id)
            })
        }, []);
    return A.useEffect(() => ze.subscribe(z => {
        if (z.dismiss) {
            P(K => K.map(q => q.id === z.id ? {...q, delete: !0} : q));
            return
        }
        setTimeout(() => {
            Lh.flushSync(() => {
                P(K => {
                    let q = K.findIndex(me => me.id === z.id);
                    return q !== -1 ? [...K.slice(0, q), {...K[q], ...z}, ...K.slice(q + 1)] : [z, ...K]
                })
            })
        })
    }), []), A.useEffect(() => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window > "u") return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: K}) => {
                $(K ? "dark" : "light")
            })
        } catch {
            z.addListener(({matches: q}) => {
                try {
                    $(q ? "dark" : "light")
                } catch (me) {
                    console.error(me)
                }
            })
        }
    }, [c]), A.useEffect(() => {
        k.length <= 1 && D(!1)
    }, [k]), A.useEffect(() => {
        let z = K => {
            var q, me;
            o.every(Pe => K[Pe] || K.code === Pe) && (D(!0), (q = V.current) == null || q.focus()), K.code === "Escape" && (document.activeElement === V.current || (me = V.current) != null && me.contains(document.activeElement)) && D(!1)
        };
        return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z)
    }, [o]), A.useEffect(() => {
        if (V.current) return () => {
            N.current && (N.current.focus({preventScroll: !0}), N.current = null, L.current = !1)
        }
    }, [V.current]), A.createElement("section", {
        ref: t,
        "aria-label": `${E} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map((z, K) => {
        var q;
        let [me, Pe] = z.split("-");
        return k.length ? A.createElement("ol", {
            key: z,
            dir: y === "auto" ? Fd() : y,
            tabIndex: -1,
            ref: V,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": me,
            "data-lifted": F && k.length > 1 && !i,
            "data-x-position": Pe,
            style: {
                "--front-toast-height": `${((q = M[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${Sw}px`,
                "--gap": `${m}px`, ...d, ...Tw(a, u)
            },
            onBlur: J => {
                L.current && !J.currentTarget.contains(J.relatedTarget) && (L.current = !1, N.current && (N.current.focus({preventScroll: !0}), N.current = null))
            },
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || L.current || (L.current = !0, N.current = J.relatedTarget)
            },
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                Q || D(!1)
            },
            onDragEnd: () => D(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || j(!0)
            },
            onPointerUp: () => j(!1)
        }, k.filter(J => !J.position && K === 0 || J.position === z).map((J, ur) => {
            var Zt, zn;
            return A.createElement(bw, {
                key: J.id,
                icons: g,
                index: ur,
                toast: J,
                defaultRichColors: f,
                duration: (Zt = v == null ? void 0 : v.duration) != null ? Zt : h,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (zn = v == null ? void 0 : v.closeButton) != null ? zn : s,
                interacting: Q,
                position: z,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: W,
                toasts: k.filter(Jt => Jt.position == J.position),
                heights: M.filter(Jt => Jt.position == J.position),
                setHeights: _,
                expandByDefault: i,
                gap: m,
                loadingIcon: p,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const Rw = ({...e}) => {
        const {theme: t = "system"} = tw();
        return S.jsx(Nw, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            }, ...e
        })
    }, Ow = ["top", "right", "bottom", "left"], Mn = Math.min, Ke = Math.max, Es = Math.round, Li = Math.floor,
    jt = e => ({x: e, y: e}), Aw = {left: "right", right: "left", bottom: "top", top: "bottom"},
    _w = {start: "end", end: "start"};

function Ua(e, t, n) {
    return Ke(e, Mn(t, n))
}

function Yt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function qt(e) {
    return e.split("-")[0]
}

function oo(e) {
    return e.split("-")[1]
}

function Ju(e) {
    return e === "x" ? "y" : "x"
}

function ec(e) {
    return e === "y" ? "height" : "width"
}

const Mw = new Set(["top", "bottom"]);

function At(e) {
    return Mw.has(qt(e)) ? "y" : "x"
}

function tc(e) {
    return Ju(At(e))
}

function jw(e, t, n) {
    n === void 0 && (n = !1);
    const r = oo(e), o = tc(e), i = ec(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Cs(s)), [s, Cs(s)]
}

function Lw(e) {
    const t = Cs(e);
    return [Ba(e), t, Ba(t)]
}

function Ba(e) {
    return e.replace(/start|end/g, t => _w[t])
}

const $d = ["left", "right"], Ud = ["right", "left"], Iw = ["top", "bottom"], Dw = ["bottom", "top"];

function zw(e, t, n) {
    switch (e) {
        case"top":
        case"bottom":
            return n ? t ? Ud : $d : t ? $d : Ud;
        case"left":
        case"right":
            return t ? Iw : Dw;
        default:
            return []
    }
}

function Fw(e, t, n, r) {
    const o = oo(e);
    let i = zw(qt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Ba)))), i
}

function Cs(e) {
    return e.replace(/left|right|bottom|top/g, t => Aw[t])
}

function $w(e) {
    return {top: 0, right: 0, bottom: 0, left: 0, ...e}
}

function Cm(e) {
    return typeof e != "number" ? $w(e) : {top: e, right: e, bottom: e, left: e}
}

function ks(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n}
}

function Bd(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = At(t), s = tc(t), l = ec(s), a = qt(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2, h = r[l] / 2 - o[l] / 2;
    let d;
    switch (a) {
        case"top":
            d = {x: c, y: r.y - o.height};
            break;
        case"bottom":
            d = {x: c, y: r.y + r.height};
            break;
        case"right":
            d = {x: r.x + r.width, y: f};
            break;
        case"left":
            d = {x: r.x - o.width, y: f};
            break;
        default:
            d = {x: r.x, y: r.y}
    }
    switch (oo(t)) {
        case"start":
            d[s] -= h * (n && u ? -1 : 1);
            break;
        case"end":
            d[s] += h * (n && u ? -1 : 1);
            break
    }
    return d
}

const Uw = async (e, t, n) => {
    const {placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s} = n,
        l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({reference: e, floating: t, strategy: o}), {x: c, y: f} = Bd(u, r, a), h = r,
        d = {}, x = 0;
    for (let v = 0; v < l.length; v++) {
        const {name: y, fn: m} = l[v], {x: p, y: g, data: E, reset: C} = await m({
            x: c,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: d,
            rects: u,
            platform: s,
            elements: {reference: e, floating: t}
        });
        c = p ?? c, f = g ?? f, d = {
            ...d,
            [y]: {...d[y], ...E}
        }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {x: c, y: f} = Bd(u, h, a)), v = -1)
    }
    return {x: c, y: f, placement: h, strategy: o, middlewareData: d}
};

async function Xo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e, {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: h = !1,
            padding: d = 0
        } = Yt(t, e), x = Cm(d), y = l[h ? f === "floating" ? "reference" : "floating" : f],
        m = ks(await i.getClippingRect({
            element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
            boundary: u,
            rootBoundary: c,
            strategy: a
        })), p = f === "floating" ? {x: r, y: o, width: s.floating.width, height: s.floating.height} : s.reference,
        g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)),
        E = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
            x: 1,
            y: 1
        } : {x: 1, y: 1},
        C = ks(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: p,
            offsetParent: g,
            strategy: a
        }) : p);
    return {
        top: (m.top - C.top + x.top) / E.y,
        bottom: (C.bottom - m.bottom + x.bottom) / E.y,
        left: (m.left - C.left + x.left) / E.x,
        right: (C.right - m.right + x.right) / E.x
    }
}

const Bw = e => ({
    name: "arrow", options: e, async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t, {
            element: u,
            padding: c = 0
        } = Yt(e, t) || {};
        if (u == null) return {};
        const f = Cm(c), h = {x: n, y: r}, d = tc(o), x = ec(d), v = await s.getDimensions(u), y = d === "y",
            m = y ? "top" : "left", p = y ? "bottom" : "right", g = y ? "clientHeight" : "clientWidth",
            E = i.reference[x] + i.reference[d] - h[d] - i.floating[x], C = h[d] - i.reference[d],
            k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let P = k ? k[g] : 0;
        (!P || !await (s.isElement == null ? void 0 : s.isElement(k))) && (P = l.floating[g] || i.floating[x]);
        const R = E / 2 - C / 2, M = P / 2 - v[x] / 2 - 1, _ = Mn(f[m], M), F = Mn(f[p], M), D = _, Q = P - v[x] - F,
            j = P / 2 - v[x] / 2 + R, Y = Ua(D, j, Q),
            $ = !a.arrow && oo(o) != null && j !== Y && i.reference[x] / 2 - (j < D ? _ : F) - v[x] / 2 < 0,
            V = $ ? j < D ? j - D : j - Q : 0;
        return {[d]: h[d] + V, data: {[d]: Y, centerOffset: j - Y - V, ...$ && {alignmentOffset: V}}, reset: $}
    }
}), Vw = function (e) {
    return e === void 0 && (e = {}), {
        name: "flip", options: e, async fn(t) {
            var n, r;
            const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: l,
                platform: a,
                elements: u
            } = t, {
                mainAxis: c = !0,
                crossAxis: f = !0,
                fallbackPlacements: h,
                fallbackStrategy: d = "bestFit",
                fallbackAxisSideDirection: x = "none",
                flipAlignment: v = !0,
                ...y
            } = Yt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const m = qt(o), p = At(l), g = qt(l) === l, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                C = h || (g || !v ? [Cs(l)] : Lw(l)), k = x !== "none";
            !h && k && C.push(...Fw(l, v, x, E));
            const P = [l, ...C], R = await Xo(t, y), M = [];
            let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && M.push(R[m]), f) {
                const j = jw(o, s, E);
                M.push(R[j[0]], R[j[1]])
            }
            if (_ = [..._, {placement: o, overflows: M}], !M.every(j => j <= 0)) {
                var F, D;
                const j = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1, Y = P[j];
                if (Y && (!(f === "alignment" ? p !== At(Y) : !1) || _.every(T => T.overflows[0] > 0 && At(T.placement) === p))) return {
                    data: {
                        index: j,
                        overflows: _
                    }, reset: {placement: Y}
                };
                let $ = (D = _.filter(V => V.overflows[0] <= 0).sort((V, T) => V.overflows[1] - T.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!$) switch (d) {
                    case"bestFit": {
                        var Q;
                        const V = (Q = _.filter(T => {
                            if (k) {
                                const N = At(T.placement);
                                return N === p || N === "y"
                            }
                            return !0
                        }).map(T => [T.placement, T.overflows.filter(N => N > 0).reduce((N, L) => N + L, 0)]).sort((T, N) => T[1] - N[1])[0]) == null ? void 0 : Q[0];
                        V && ($ = V);
                        break
                    }
                    case"initialPlacement":
                        $ = l;
                        break
                }
                if (o !== $) return {reset: {placement: $}}
            }
            return {}
        }
    }
};

function Vd(e, t) {
    return {top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width}
}

function Wd(e) {
    return Ow.some(t => e[t] >= 0)
}

const Ww = function (e) {
    return e === void 0 && (e = {}), {
        name: "hide", options: e, async fn(t) {
            const {rects: n} = t, {strategy: r = "referenceHidden", ...o} = Yt(e, t);
            switch (r) {
                case"referenceHidden": {
                    const i = await Xo(t, {...o, elementContext: "reference"}), s = Vd(i, n.reference);
                    return {data: {referenceHiddenOffsets: s, referenceHidden: Wd(s)}}
                }
                case"escaped": {
                    const i = await Xo(t, {...o, altBoundary: !0}), s = Vd(i, n.floating);
                    return {data: {escapedOffsets: s, escaped: Wd(s)}}
                }
                default:
                    return {}
            }
        }
    }
}, km = new Set(["left", "top"]);

async function Hw(e, t) {
    const {placement: n, platform: r, elements: o} = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        s = qt(n), l = oo(n), a = At(n) === "y", u = km.has(s) ? -1 : 1, c = i && a ? -1 : 1, f = Yt(t, e);
    let {mainAxis: h, crossAxis: d, alignmentAxis: x} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis};
    return l && typeof x == "number" && (d = l === "end" ? x * -1 : x), a ? {x: d * c, y: h * u} : {x: h * u, y: d * c}
}

const Qw = function (e) {
    return e === void 0 && (e = 0), {
        name: "offset", options: e, async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t, a = await Hw(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {...a, placement: s}
            }
        }
    }
}, Kw = function (e) {
    return e === void 0 && (e = {}), {
        name: "shift", options: e, async fn(t) {
            const {x: n, y: r, placement: o} = t, {
                mainAxis: i = !0, crossAxis: s = !1, limiter: l = {
                    fn: y => {
                        let {x: m, y: p} = y;
                        return {x: m, y: p}
                    }
                }, ...a
            } = Yt(e, t), u = {x: n, y: r}, c = await Xo(t, a), f = At(qt(o)), h = Ju(f);
            let d = u[h], x = u[f];
            if (i) {
                const y = h === "y" ? "top" : "left", m = h === "y" ? "bottom" : "right", p = d + c[y], g = d - c[m];
                d = Ua(p, d, g)
            }
            if (s) {
                const y = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", p = x + c[y], g = x - c[m];
                x = Ua(p, x, g)
            }
            const v = l.fn({...t, [h]: d, [f]: x});
            return {...v, data: {x: v.x - n, y: v.y - r, enabled: {[h]: i, [f]: s}}}
        }
    }
}, Gw = function (e) {
    return e === void 0 && (e = {}), {
        options: e, fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t, {
                offset: l = 0,
                mainAxis: a = !0,
                crossAxis: u = !0
            } = Yt(e, t), c = {x: n, y: r}, f = At(o), h = Ju(f);
            let d = c[h], x = c[f];
            const v = Yt(l, t),
                y = typeof v == "number" ? {mainAxis: v, crossAxis: 0} : {mainAxis: 0, crossAxis: 0, ...v};
            if (a) {
                const g = h === "y" ? "height" : "width", E = i.reference[h] - i.floating[g] + y.mainAxis,
                    C = i.reference[h] + i.reference[g] - y.mainAxis;
                d < E ? d = E : d > C && (d = C)
            }
            if (u) {
                var m, p;
                const g = h === "y" ? "width" : "height", E = km.has(qt(o)),
                    C = i.reference[f] - i.floating[g] + (E && ((m = s.offset) == null ? void 0 : m[f]) || 0) + (E ? 0 : y.crossAxis),
                    k = i.reference[f] + i.reference[g] + (E ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) - (E ? y.crossAxis : 0);
                x < C ? x = C : x > k && (x = k)
            }
            return {[h]: d, [f]: x}
        }
    }
}, Yw = function (e) {
    return e === void 0 && (e = {}), {
        name: "size", options: e, async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t, {
                apply: a = () => {
                }, ...u
            } = Yt(e, t), c = await Xo(t, u), f = qt(o), h = oo(o), d = At(o) === "y", {
                width: x,
                height: v
            } = i.floating;
            let y, m;
            f === "top" || f === "bottom" ? (y = f, m = h === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = f, y = h === "end" ? "top" : "bottom");
            const p = v - c.top - c.bottom, g = x - c.left - c.right, E = Mn(v - c[y], p), C = Mn(x - c[m], g),
                k = !t.middlewareData.shift;
            let P = E, R = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = g), (r = t.middlewareData.shift) != null && r.enabled.y && (P = p), k && !h) {
                const _ = Ke(c.left, 0), F = Ke(c.right, 0), D = Ke(c.top, 0), Q = Ke(c.bottom, 0);
                d ? R = x - 2 * (_ !== 0 || F !== 0 ? _ + F : Ke(c.left, c.right)) : P = v - 2 * (D !== 0 || Q !== 0 ? D + Q : Ke(c.top, c.bottom))
            }
            await a({...t, availableWidth: R, availableHeight: P});
            const M = await s.getDimensions(l.floating);
            return x !== M.width || v !== M.height ? {reset: {rects: !0}} : {}
        }
    }
};

function Gs() {
    return typeof window < "u"
}

function io(e) {
    return Pm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function It(e) {
    var t;
    return (t = (Pm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Pm(e) {
    return Gs() ? e instanceof Node || e instanceof qe(e).Node : !1
}

function Ct(e) {
    return Gs() ? e instanceof Element || e instanceof qe(e).Element : !1
}

function Lt(e) {
    return Gs() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}

function Hd(e) {
    return !Gs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}

const qw = new Set(["inline", "contents"]);

function ci(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !qw.has(o)
}

const Xw = new Set(["table", "td", "th"]);

function Zw(e) {
    return Xw.has(io(e))
}

const Jw = [":popover-open", ":modal"];

function Ys(e) {
    return Jw.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

const ex = ["transform", "translate", "scale", "rotate", "perspective"],
    tx = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    nx = ["paint", "layout", "strict", "content"];

function nc(e) {
    const t = rc(), n = Ct(e) ? kt(e) : e;
    return ex.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || tx.some(r => (n.willChange || "").includes(r)) || nx.some(r => (n.contain || "").includes(r))
}

function rx(e) {
    let t = jn(e);
    for (; Lt(t) && !Zr(t);) {
        if (nc(t)) return t;
        if (Ys(t)) return null;
        t = jn(t)
    }
    return null
}

function rc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

const ox = new Set(["html", "body", "#document"]);

function Zr(e) {
    return ox.has(io(e))
}

function kt(e) {
    return qe(e).getComputedStyle(e)
}

function qs(e) {
    return Ct(e) ? {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop} : {scrollLeft: e.scrollX, scrollTop: e.scrollY}
}

function jn(e) {
    if (io(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Hd(e) && e.host || It(e);
    return Hd(t) ? t.host : t
}

function bm(e) {
    const t = jn(e);
    return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lt(t) && ci(t) ? t : bm(t)
}

function Zo(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = bm(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = qe(o);
    if (i) {
        const l = Va(s);
        return t.concat(s, s.visualViewport || [], ci(o) ? o : [], l && n ? Zo(l) : [])
    }
    return t.concat(o, Zo(o, [], n))
}

function Va(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Tm(e) {
    const t = kt(e);
    let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
    const o = Lt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Es(n) !== i || Es(r) !== s;
    return l && (n = i, r = s), {width: n, height: r, $: l}
}

function oc(e) {
    return Ct(e) ? e : e.contextElement
}

function Lr(e) {
    const t = oc(e);
    if (!Lt(t)) return jt(1);
    const n = t.getBoundingClientRect(), {width: r, height: o, $: i} = Tm(t);
    let s = (i ? Es(n.width) : n.width) / r, l = (i ? Es(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {x: s, y: l}
}

const ix = jt(0);

function Nm(e) {
    const t = qe(e);
    return !rc() || !t.visualViewport ? ix : {x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop}
}

function sx(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== qe(e) ? !1 : t
}

function ir(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(), i = oc(e);
    let s = jt(1);
    t && (r ? Ct(r) && (s = Lr(r)) : s = Lr(e));
    const l = sx(i, n, r) ? Nm(i) : jt(0);
    let a = (o.left + l.x) / s.x, u = (o.top + l.y) / s.y, c = o.width / s.x, f = o.height / s.y;
    if (i) {
        const h = qe(i), d = r && Ct(r) ? qe(r) : r;
        let x = h, v = Va(x);
        for (; v && r && d !== x;) {
            const y = Lr(v), m = v.getBoundingClientRect(), p = kt(v),
                g = m.left + (v.clientLeft + parseFloat(p.paddingLeft)) * y.x,
                E = m.top + (v.clientTop + parseFloat(p.paddingTop)) * y.y;
            a *= y.x, u *= y.y, c *= y.x, f *= y.y, a += g, u += E, x = qe(v), v = Va(x)
        }
    }
    return ks({width: c, height: f, x: a, y: u})
}

function ic(e, t) {
    const n = qs(e).scrollLeft;
    return t ? t.left + n : ir(It(e)).left + n
}

function Rm(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : ic(e, r)), i = r.top + t.scrollTop;
    return {x: o, y: i}
}

function lx(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed", s = It(r), l = t ? Ys(t.floating) : !1;
    if (r === s || l && i) return n;
    let a = {scrollLeft: 0, scrollTop: 0}, u = jt(1);
    const c = jt(0), f = Lt(r);
    if ((f || !f && !i) && ((io(r) !== "body" || ci(s)) && (a = qs(r)), Lt(r))) {
        const d = ir(r);
        u = Lr(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop
    }
    const h = s && !f && !i ? Rm(s, a, !0) : jt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y + h.y
    }
}

function ax(e) {
    return Array.from(e.getClientRects())
}

function ux(e) {
    const t = It(e), n = qs(e), r = e.ownerDocument.body,
        o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + ic(e);
    const l = -n.scrollTop;
    return kt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o), {width: o, height: i, x: s, y: l}
}

function cx(e, t) {
    const n = qe(e), r = It(e), o = n.visualViewport;
    let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
    if (o) {
        i = o.width, s = o.height;
        const u = rc();
        (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop)
    }
    return {width: i, height: s, x: l, y: a}
}

const dx = new Set(["absolute", "fixed"]);

function fx(e, t) {
    const n = ir(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Lt(e) ? Lr(e) : jt(1),
        s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
    return {width: s, height: l, x: a, y: u}
}

function Qd(e, t, n) {
    let r;
    if (t === "viewport") r = cx(e, n); else if (t === "document") r = ux(It(e)); else if (Ct(t)) r = fx(t, n); else {
        const o = Nm(e);
        r = {x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height}
    }
    return ks(r)
}

function Om(e, t) {
    const n = jn(e);
    return n === t || !Ct(n) || Zr(n) ? !1 : kt(n).position === "fixed" || Om(n, t)
}

function px(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Zo(e, [], !1).filter(l => Ct(l) && io(l) !== "body"), o = null;
    const i = kt(e).position === "fixed";
    let s = i ? jn(e) : e;
    for (; Ct(s) && !Zr(s);) {
        const l = kt(s), a = nc(s);
        !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && dx.has(o.position) || ci(s) && !a && Om(e, s)) ? r = r.filter(c => c !== s) : o = l, s = jn(s)
    }
    return t.set(e, r), r
}

function hx(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? Ys(t) ? [] : px(t, this._c) : [].concat(n), r], l = s[0],
        a = s.reduce((u, c) => {
            const f = Qd(t, c, o);
            return u.top = Ke(f.top, u.top), u.right = Mn(f.right, u.right), u.bottom = Mn(f.bottom, u.bottom), u.left = Ke(f.left, u.left), u
        }, Qd(t, l, o));
    return {width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top}
}

function mx(e) {
    const {width: t, height: n} = Tm(e);
    return {width: t, height: n}
}

function gx(e, t, n) {
    const r = Lt(t), o = It(t), i = n === "fixed", s = ir(e, !0, i, t);
    let l = {scrollLeft: 0, scrollTop: 0};
    const a = jt(0);

    function u() {
        a.x = ic(o)
    }

    if (r || !r && !i) if ((io(t) !== "body" || ci(o)) && (l = qs(t)), r) {
        const d = ir(t, !0, i, t);
        a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop
    } else o && u();
    i && !r && o && u();
    const c = o && !r && !i ? Rm(o, l) : jt(0), f = s.left + l.scrollLeft - a.x - c.x,
        h = s.top + l.scrollTop - a.y - c.y;
    return {x: f, y: h, width: s.width, height: s.height}
}

function Fl(e) {
    return kt(e).position === "static"
}

function Kd(e, t) {
    if (!Lt(e) || kt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return It(e) === n && (n = n.ownerDocument.body), n
}

function Am(e, t) {
    const n = qe(e);
    if (Ys(e)) return n;
    if (!Lt(e)) {
        let o = jn(e);
        for (; o && !Zr(o);) {
            if (Ct(o) && !Fl(o)) return o;
            o = jn(o)
        }
        return n
    }
    let r = Kd(e, t);
    for (; r && Zw(r) && Fl(r);) r = Kd(r, t);
    return r && Zr(r) && Fl(r) && !nc(r) ? n : r || rx(e) || n
}

const vx = async function (e) {
    const t = this.getOffsetParent || Am, n = this.getDimensions, r = await n(e.floating);
    return {
        reference: gx(e.reference, await t(e.floating), e.strategy),
        floating: {x: 0, y: 0, width: r.width, height: r.height}
    }
};

function yx(e) {
    return kt(e).direction === "rtl"
}

const wx = {
    convertOffsetParentRelativeRectToViewportRelativeRect: lx,
    getDocumentElement: It,
    getClippingRect: hx,
    getOffsetParent: Am,
    getElementRects: vx,
    getClientRects: ax,
    getDimensions: mx,
    getScale: Lr,
    isElement: Ct,
    isRTL: yx
};

function _m(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function xx(e, t) {
    let n = null, r;
    const o = It(e);

    function i() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), n = null
    }

    function s(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), i();
        const u = e.getBoundingClientRect(), {left: c, top: f, width: h, height: d} = u;
        if (l || t(), !h || !d) return;
        const x = Li(f), v = Li(o.clientWidth - (c + h)), y = Li(o.clientHeight - (f + d)), m = Li(c),
            g = {rootMargin: -x + "px " + -v + "px " + -y + "px " + -m + "px", threshold: Ke(0, Mn(1, a)) || 1};
        let E = !0;

        function C(k) {
            const P = k[0].intersectionRatio;
            if (P !== a) {
                if (!E) return s();
                P ? s(!1, P) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            P === 1 && !_m(u, e.getBoundingClientRect()) && s(), E = !1
        }

        try {
            n = new IntersectionObserver(C, {...g, root: o.ownerDocument})
        } catch {
            n = new IntersectionObserver(C, g)
        }
        n.observe(e)
    }

    return s(!0), i
}

function Sx(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: a = !1
    } = r, u = oc(e), c = o || i ? [...u ? Zo(u) : [], ...Zo(t)] : [];
    c.forEach(m => {
        o && m.addEventListener("scroll", n, {passive: !0}), i && m.addEventListener("resize", n)
    });
    const f = u && l ? xx(u, n) : null;
    let h = -1, d = null;
    s && (d = new ResizeObserver(m => {
        let [p] = m;
        p && p.target === u && d && (d.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var g;
            (g = d) == null || g.observe(t)
        })), n()
    }), u && !a && d.observe(u), d.observe(t));
    let x, v = a ? ir(e) : null;
    a && y();

    function y() {
        const m = ir(e);
        v && !_m(v, m) && n(), v = m, x = requestAnimationFrame(y)
    }

    return n(), () => {
        var m;
        c.forEach(p => {
            o && p.removeEventListener("scroll", n), i && p.removeEventListener("resize", n)
        }), f == null || f(), (m = d) == null || m.disconnect(), d = null, a && cancelAnimationFrame(x)
    }
}

const Ex = Qw, Cx = Kw, kx = Vw, Px = Yw, bx = Ww, Gd = Bw, Tx = Gw, Nx = (e, t, n) => {
    const r = new Map, o = {platform: wx, ...n}, i = {...o.platform, _c: r};
    return Uw(e, t, {...o, platform: i})
};
var Rx = typeof document < "u", Ox = function () {
}, Xi = Rx ? w.useLayoutEffect : Ox;

function Ps(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;) if (!Ps(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ps(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Mm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Yd(e, t) {
    const n = Mm(e);
    return Math.round(t * n) / n
}

function $l(e) {
    const t = w.useRef(e);
    return Xi(() => {
        t.current = e
    }), t
}

function Ax(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {reference: i, floating: s} = {},
        transform: l = !0,
        whileElementsMounted: a,
        open: u
    } = e, [c, f] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, d] = w.useState(r);
    Ps(h, r) || d(r);
    const [x, v] = w.useState(null), [y, m] = w.useState(null), p = w.useCallback(T => {
            T !== k.current && (k.current = T, v(T))
        }, []), g = w.useCallback(T => {
            T !== P.current && (P.current = T, m(T))
        }, []), E = i || x, C = s || y, k = w.useRef(null), P = w.useRef(null), R = w.useRef(c), M = a != null, _ = $l(a),
        F = $l(o), D = $l(u), Q = w.useCallback(() => {
            if (!k.current || !P.current) return;
            const T = {placement: t, strategy: n, middleware: h};
            F.current && (T.platform = F.current), Nx(k.current, P.current, T).then(N => {
                const L = {...N, isPositioned: D.current !== !1};
                j.current && !Ps(R.current, L) && (R.current = L, ai.flushSync(() => {
                    f(L)
                }))
            })
        }, [h, t, n, F, D]);
    Xi(() => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f(T => ({...T, isPositioned: !1})))
    }, [u]);
    const j = w.useRef(!1);
    Xi(() => (j.current = !0, () => {
        j.current = !1
    }), []), Xi(() => {
        if (E && (k.current = E), C && (P.current = C), E && C) {
            if (_.current) return _.current(E, C, Q);
            Q()
        }
    }, [E, C, Q, _, M]);
    const Y = w.useMemo(() => ({reference: k, floating: P, setReference: p, setFloating: g}), [p, g]),
        $ = w.useMemo(() => ({reference: E, floating: C}), [E, C]), V = w.useMemo(() => {
            const T = {position: n, left: 0, top: 0};
            if (!$.floating) return T;
            const N = Yd($.floating, c.x), L = Yd($.floating, c.y);
            return l ? {
                ...T,
                transform: "translate(" + N + "px, " + L + "px)", ...Mm($.floating) >= 1.5 && {willChange: "transform"}
            } : {position: n, left: N, top: L}
        }, [n, l, $.floating, c.x, c.y]);
    return w.useMemo(() => ({...c, update: Q, refs: Y, elements: $, floatingStyles: V}), [c, Q, Y, $, V])
}

const _x = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }

        return {
            name: "arrow", options: e, fn(n) {
                const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? Gd({element: r.current, padding: o}).fn(n) : {} : r ? Gd({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    }, Mx = (e, t) => ({...Ex(e), options: [e, t]}), jx = (e, t) => ({...Cx(e), options: [e, t]}),
    Lx = (e, t) => ({...Tx(e), options: [e, t]}), Ix = (e, t) => ({...kx(e), options: [e, t]}),
    Dx = (e, t) => ({...Px(e), options: [e, t]}), zx = (e, t) => ({...bx(e), options: [e, t]}),
    Fx = (e, t) => ({..._x(e), options: [e, t]});
var $x = "Arrow", jm = w.forwardRef((e, t) => {
    const {children: n, width: r = 10, height: o = 5, ...i} = e;
    return S.jsx(He.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : S.jsx("polygon", {points: "0,0 30,0 15,10"})
    })
});
jm.displayName = $x;
var Ux = jm;

function Bx(e) {
    const [t, n] = w.useState(void 0);
    return _n(() => {
        if (e) {
            n({width: e.offsetWidth, height: e.offsetHeight});
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const a = i.borderBoxSize, u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize, l = u.blockSize
                } else s = e.offsetWidth, l = e.offsetHeight;
                n({width: s, height: l})
            });
            return r.observe(e, {box: "border-box"}), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}

var Lm = "Popper", [Im, Dm] = Hs(Lm), [W2, zm] = Im(Lm), Fm = "PopperAnchor", $m = w.forwardRef((e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e, i = zm(Fm, n), s = w.useRef(null), l = Et(t, s);
    return w.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }), r ? null : S.jsx(He.div, {...o, ref: l})
});
$m.displayName = Fm;
var sc = "PopperContent", [Vx, Wx] = Im(sc), Um = w.forwardRef((e, t) => {
    var J, ur, Zt, zn, Jt, cr;
    const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: l = 0,
            avoidCollisions: a = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: d = "optimized",
            onPlaced: x,
            ...v
        } = e, y = zm(sc, n), [m, p] = w.useState(null), g = Et(t, en => p(en)), [E, C] = w.useState(null), k = Bx(E),
        P = (k == null ? void 0 : k.width) ?? 0, R = (k == null ? void 0 : k.height) ?? 0,
        M = r + (i !== "center" ? "-" + i : ""),
        _ = typeof c == "number" ? c : {top: 0, right: 0, bottom: 0, left: 0, ...c}, F = Array.isArray(u) ? u : [u],
        D = F.length > 0, Q = {padding: _, boundary: F.filter(Qx), altBoundary: D}, {
            refs: j,
            floatingStyles: Y,
            placement: $,
            isPositioned: V,
            middlewareData: T
        } = Ax({
            strategy: "fixed",
            placement: M,
            whileElementsMounted: (...en) => Sx(...en, {animationFrame: d === "always"}),
            elements: {reference: y.anchor},
            middleware: [Mx({mainAxis: o + R, alignmentAxis: s}), a && jx({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? Lx() : void 0, ...Q
            }), a && Ix({...Q}), Dx({
                ...Q, apply: ({elements: en, rects: di, availableWidth: ol, availableHeight: fi}) => {
                    const {width: il, height: so} = di.reference, dr = en.floating.style;
                    dr.setProperty("--radix-popper-available-width", `${ol}px`), dr.setProperty("--radix-popper-available-height", `${fi}px`), dr.setProperty("--radix-popper-anchor-width", `${il}px`), dr.setProperty("--radix-popper-anchor-height", `${so}px`)
                }
            }), E && Fx({element: E, padding: l}), Kx({
                arrowWidth: P,
                arrowHeight: R
            }), h && zx({strategy: "referenceHidden", ...Q})]
        }), [N, L] = Wm($), W = An(x);
    _n(() => {
        V && (W == null || W())
    }, [V, W]);
    const z = (J = T.arrow) == null ? void 0 : J.x, K = (ur = T.arrow) == null ? void 0 : ur.y,
        q = ((Zt = T.arrow) == null ? void 0 : Zt.centerOffset) !== 0, [me, Pe] = w.useState();
    return _n(() => {
        m && Pe(window.getComputedStyle(m).zIndex)
    }, [m]), S.jsx("div", {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: V ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: me,
            "--radix-popper-transform-origin": [(zn = T.transformOrigin) == null ? void 0 : zn.x, (Jt = T.transformOrigin) == null ? void 0 : Jt.y].join(" "), ...((cr = T.hide) == null ? void 0 : cr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S.jsx(Vx, {
            scope: n,
            placedSide: N,
            onArrowChange: C,
            arrowX: z,
            arrowY: K,
            shouldHideArrow: q,
            children: S.jsx(He.div, {
                "data-side": N,
                "data-align": L, ...v,
                ref: g,
                style: {...v.style, animation: V ? void 0 : "none"}
            })
        })
    })
});
Um.displayName = sc;
var Bm = "PopperArrow", Hx = {top: "bottom", right: "left", bottom: "top", left: "right"},
    Vm = w.forwardRef(function (t, n) {
        const {__scopePopper: r, ...o} = t, i = Wx(Bm, r), s = Hx[i.placedSide];
        return S.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {top: "", right: "0 0", bottom: "center 0", left: "100% 0"}[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: S.jsx(Ux, {...o, ref: n, style: {...o.style, display: "block"}})
        })
    });
Vm.displayName = Bm;

function Qx(e) {
    return e !== null
}

var Kx = e => ({
    name: "transformOrigin", options: e, fn(t) {
        var y, m, p;
        const {placement: n, rects: r, middlewareData: o} = t,
            s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, l = s ? 0 : e.arrowWidth,
            a = s ? 0 : e.arrowHeight, [u, c] = Wm(n), f = {start: "0%", center: "50%", end: "100%"}[c],
            h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
            d = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
        let x = "", v = "";
        return u === "bottom" ? (x = s ? f : `${h}px`, v = `${-a}px`) : u === "top" ? (x = s ? f : `${h}px`, v = `${r.floating.height + a}px`) : u === "right" ? (x = `${-a}px`, v = s ? f : `${d}px`) : u === "left" && (x = `${r.floating.width + a}px`, v = s ? f : `${d}px`), {
            data: {
                x,
                y: v
            }
        }
    }
});

function Wm(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}

var Gx = $m, Yx = Um, qx = Vm, [Xs, H2] = Hs("Tooltip", [Dm]), lc = Dm(), Hm = "TooltipProvider", Xx = 700,
    qd = "tooltip.open", [Zx, Qm] = Xs(Hm), Km = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = Xx,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
        } = e, s = w.useRef(!0), l = w.useRef(!1), a = w.useRef(0);
        return w.useEffect(() => {
            const u = a.current;
            return () => window.clearTimeout(u)
        }, []), S.jsx(Zx, {
            scope: t, isOpenDelayedRef: s, delayDuration: n, onOpen: w.useCallback(() => {
                window.clearTimeout(a.current), s.current = !1
            }, []), onClose: w.useCallback(() => {
                window.clearTimeout(a.current), a.current = window.setTimeout(() => s.current = !0, r)
            }, [r]), isPointerInTransitRef: l, onPointerInTransitChange: w.useCallback(u => {
                l.current = u
            }, []), disableHoverableContent: o, children: i
        })
    };
Km.displayName = Hm;
var Gm = "Tooltip", [Q2, Zs] = Xs(Gm), Wa = "TooltipTrigger", Jx = w.forwardRef((e, t) => {
    const {__scopeTooltip: n, ...r} = e, o = Zs(Wa, n), i = Qm(Wa, n), s = lc(n), l = w.useRef(null),
        a = Et(t, l, o.onTriggerChange), u = w.useRef(!1), c = w.useRef(!1),
        f = w.useCallback(() => u.current = !1, []);
    return w.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), S.jsx(Gx, {
        asChild: !0, ...s,
        children: S.jsx(He.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute, ...r,
            ref: a,
            onPointerMove: ye(e.onPointerMove, h => {
                h.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), c.current = !0)
            }),
            onPointerLeave: ye(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
            }),
            onPointerDown: ye(e.onPointerDown, () => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, {once: !0})
            }),
            onFocus: ye(e.onFocus, () => {
                u.current || o.onOpen()
            }),
            onBlur: ye(e.onBlur, o.onClose),
            onClick: ye(e.onClick, o.onClose)
        })
    })
});
Jx.displayName = Wa;
var eS = "TooltipPortal", [K2, tS] = Xs(eS, {forceMount: void 0}), Jr = "TooltipContent", Ym = w.forwardRef((e, t) => {
    const n = tS(Jr, e.__scopeTooltip), {forceMount: r = n.forceMount, side: o = "top", ...i} = e,
        s = Zs(Jr, e.__scopeTooltip);
    return S.jsx(Qu, {
        present: r || s.open,
        children: s.disableHoverableContent ? S.jsx(qm, {side: o, ...i, ref: t}) : S.jsx(nS, {side: o, ...i, ref: t})
    })
}), nS = w.forwardRef((e, t) => {
    const n = Zs(Jr, e.__scopeTooltip), r = Qm(Jr, e.__scopeTooltip), o = w.useRef(null),
        i = Et(t, o), [s, l] = w.useState(null), {trigger: a, onClose: u} = n,
        c = o.current, {onPointerInTransitChange: f} = r, h = w.useCallback(() => {
            l(null), f(!1)
        }, [f]), d = w.useCallback((x, v) => {
            const y = x.currentTarget, m = {x: x.clientX, y: x.clientY}, p = lS(m, y.getBoundingClientRect()), g = aS(m, p),
                E = uS(v.getBoundingClientRect()), C = dS([...g, ...E]);
            l(C), f(!0)
        }, [f]);
    return w.useEffect(() => () => h(), [h]), w.useEffect(() => {
        if (a && c) {
            const x = y => d(y, c), v = y => d(y, a);
            return a.addEventListener("pointerleave", x), c.addEventListener("pointerleave", v), () => {
                a.removeEventListener("pointerleave", x), c.removeEventListener("pointerleave", v)
            }
        }
    }, [a, c, d, h]), w.useEffect(() => {
        if (s) {
            const x = v => {
                const y = v.target, m = {x: v.clientX, y: v.clientY},
                    p = (a == null ? void 0 : a.contains(y)) || (c == null ? void 0 : c.contains(y)), g = !cS(m, s);
                p ? h() : g && (h(), u())
            };
            return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x)
        }
    }, [a, c, s, u, h]), S.jsx(qm, {...e, ref: i})
}), [rS, oS] = Xs(Gm, {isInside: !1}), iS = o0("TooltipContent"), qm = w.forwardRef((e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e,
        a = Zs(Jr, n), u = lc(n), {onClose: c} = a;
    return w.useEffect(() => (document.addEventListener(qd, c), () => document.removeEventListener(qd, c)), [c]), w.useEffect(() => {
        if (a.trigger) {
            const f = h => {
                const d = h.target;
                d != null && d.contains(a.trigger) && c()
            };
            return window.addEventListener("scroll", f, {capture: !0}), () => window.removeEventListener("scroll", f, {capture: !0})
        }
    }, [a.trigger, c]), S.jsx(Hu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: c,
        children: S.jsxs(Yx, {
            "data-state": a.stateAttribute, ...u, ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [S.jsx(iS, {children: r}), S.jsx(rS, {
                scope: n,
                isInside: !0,
                children: S.jsx(R0, {id: a.contentId, role: "tooltip", children: o || r})
            })]
        })
    })
});
Ym.displayName = Jr;
var Xm = "TooltipArrow", sS = w.forwardRef((e, t) => {
    const {__scopeTooltip: n, ...r} = e, o = lc(n);
    return oS(Xm, n).isInside ? null : S.jsx(qx, {...o, ...r, ref: t})
});
sS.displayName = Xm;

function lS(e, t) {
    const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function aS(e, t, n = 5) {
    const r = [];
    switch (t) {
        case"top":
            r.push({x: e.x - n, y: e.y + n}, {x: e.x + n, y: e.y + n});
            break;
        case"bottom":
            r.push({x: e.x - n, y: e.y - n}, {x: e.x + n, y: e.y - n});
            break;
        case"left":
            r.push({x: e.x + n, y: e.y - n}, {x: e.x + n, y: e.y + n});
            break;
        case"right":
            r.push({x: e.x - n, y: e.y - n}, {x: e.x - n, y: e.y + n});
            break
    }
    return r
}

function uS(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{x: o, y: t}, {x: n, y: t}, {x: n, y: r}, {x: o, y: r}]
}

function cS(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i], a = t[s], u = l.x, c = l.y, f = a.x, h = a.y;
        c > r != h > r && n < (f - u) * (r - c) / (h - c) + u && (o = !o)
    }
    return o
}

function dS(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), fS(t)
}

function fS(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1], s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop(); else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1], s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop(); else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}

var pS = Km, Zm = Ym;
const hS = pS, mS = w.forwardRef(({className: e, sideOffset: t = 4, ...n}, r) => S.jsx(Zm, {
    ref: r,
    sideOffset: t,
    className: ar("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...n
}));
mS.displayName = Zm.displayName;
var Js = class {
    constructor() {
        this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }

    subscribe(e) {
        return this.listeners.add(e), this.onSubscribe(), () => {
            this.listeners.delete(e), this.onUnsubscribe()
        }
    }

    hasListeners() {
        return this.listeners.size > 0
    }

    onSubscribe() {
    }

    onUnsubscribe() {
    }
}, el = typeof window > "u" || "Deno" in globalThis;

function ht() {
}

function gS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function vS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function yS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Ha(e, t) {
    return typeof e == "function" ? e(t) : e
}

function wS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Xd(e, t) {
    const {type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== ac(s, t.options)) return !1
        } else if (!ei(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}

function Zd(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Jo(t.options.mutationKey) !== Jo(i)) return !1
        } else if (!ei(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function ac(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e)
}

function Jo(e) {
    return JSON.stringify(e, (t, n) => Qa(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function ei(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ei(e[n], t[n])) : !1
}

function Jm(e, t) {
    if (e === t) return e;
    const n = Jd(e) && Jd(t);
    if (n || Qa(e) && Qa(t)) {
        const r = n ? e : Object.keys(e), o = r.length, i = n ? t : Object.keys(t), s = i.length, l = n ? [] : {},
            a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const f = n ? c : i[c];
            (!n && a.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (l[f] = void 0, u++) : (l[f] = Jm(e[f], t[f]), l[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}

function Jd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Qa(e) {
    if (!ef(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!ef(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function ef(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function xS(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function SS(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Jm(e, t) : t
}

function ES(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function CS(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}

var uc = Symbol();

function eg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === uc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

var Qn, pn, Dr, pf, kS = (pf = class extends Js {
    constructor() {
        super();
        Z(this, Qn);
        Z(this, pn);
        Z(this, Dr);
        B(this, Dr, t => {
            if (!el && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1), () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        })
    }

    onSubscribe() {
        b(this, pn) || this.setEventListener(b(this, Dr))
    }

    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, pn)) == null || t.call(this), B(this, pn, void 0))
    }

    setEventListener(t) {
        var n;
        B(this, Dr, t), (n = b(this, pn)) == null || n.call(this), B(this, pn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }))
    }

    setFocused(t) {
        b(this, Qn) !== t && (B(this, Qn, t), this.onFocus())
    }

    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        })
    }

    isFocused() {
        var t;
        return typeof b(this, Qn) == "boolean" ? b(this, Qn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}, Qn = new WeakMap, pn = new WeakMap, Dr = new WeakMap, pf), tg = new kS, zr, hn, Fr, hf, PS = (hf = class extends Js {
    constructor() {
        super();
        Z(this, zr, !0);
        Z(this, hn);
        Z(this, Fr);
        B(this, Fr, t => {
            if (!el && window.addEventListener) {
                const n = () => t(!0), r = () => t(!1);
                return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                    window.removeEventListener("online", n), window.removeEventListener("offline", r)
                }
            }
        })
    }

    onSubscribe() {
        b(this, hn) || this.setEventListener(b(this, Fr))
    }

    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, hn)) == null || t.call(this), B(this, hn, void 0))
    }

    setEventListener(t) {
        var n;
        B(this, Fr, t), (n = b(this, hn)) == null || n.call(this), B(this, hn, t(this.setOnline.bind(this)))
    }

    setOnline(t) {
        b(this, zr) !== t && (B(this, zr, t), this.listeners.forEach(r => {
            r(t)
        }))
    }

    isOnline() {
        return b(this, zr)
    }
}, zr = new WeakMap, hn = new WeakMap, Fr = new WeakMap, hf), bs = new PS;

function bS() {
    let e, t;
    const n = new Promise((o, i) => {
        e = o, t = i
    });
    n.status = "pending", n.catch(() => {
    });

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }

    return n.resolve = o => {
        r({status: "fulfilled", value: o}), e(o)
    }, n.reject = o => {
        r({status: "rejected", reason: o}), t(o)
    }, n
}

function TS(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function ng(e) {
    return (e ?? "online") === "online" ? bs.isOnline() : !0
}

var rg = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Ul(e) {
    return e instanceof rg
}

function og(e) {
    let t = !1, n = 0, r = !1, o;
    const i = bS(), s = v => {
            var y;
            r || (h(new rg(v)), (y = e.abort) == null || y.call(e))
        }, l = () => {
            t = !0
        }, a = () => {
            t = !1
        }, u = () => tg.isFocused() && (e.networkMode === "always" || bs.isOnline()) && e.canRun(),
        c = () => ng(e.networkMode) && e.canRun(), f = v => {
            var y;
            r || (r = !0, (y = e.onSuccess) == null || y.call(e, v), o == null || o(), i.resolve(v))
        }, h = v => {
            var y;
            r || (r = !0, (y = e.onError) == null || y.call(e, v), o == null || o(), i.reject(v))
        }, d = () => new Promise(v => {
            var y;
            o = m => {
                (r || u()) && v(m)
            }, (y = e.onPause) == null || y.call(e)
        }).then(() => {
            var v;
            o = void 0, r || (v = e.onContinue) == null || v.call(e)
        }), x = () => {
            if (r) return;
            let v;
            const y = n === 0 ? e.initialPromise : void 0;
            try {
                v = y ?? e.fn()
            } catch (m) {
                v = Promise.reject(m)
            }
            Promise.resolve(v).then(f).catch(m => {
                var k;
                if (r) return;
                const p = e.retry ?? (el ? 0 : 3), g = e.retryDelay ?? TS, E = typeof g == "function" ? g(n, m) : g,
                    C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
                if (t || !C) {
                    h(m);
                    return
                }
                n++, (k = e.onFail) == null || k.call(e, n, m), xS(E).then(() => u() ? void 0 : d()).then(() => {
                    t ? h(m) : x()
                })
            })
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? x() : d().then(x), i)
    }
}

var NS = e => setTimeout(e, 0);

function RS() {
    let e = [], t = 0, n = l => {
        l()
    }, r = l => {
        l()
    }, o = NS;
    const i = l => {
        t ? e.push(l) : o(() => {
            n(l)
        })
    }, s = () => {
        const l = e;
        e = [], l.length && o(() => {
            r(() => {
                l.forEach(a => {
                    n(a)
                })
            })
        })
    };
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--, t || s()
            }
            return a
        }, batchCalls: l => (...a) => {
            i(() => {
                l(...a)
            })
        }, schedule: i, setNotifyFunction: l => {
            n = l
        }, setBatchNotifyFunction: l => {
            r = l
        }, setScheduler: l => {
            o = l
        }
    }
}

var je = RS(), Kn, mf, ig = (mf = class {
    constructor() {
        Z(this, Kn)
    }

    destroy() {
        this.clearGcTimeout()
    }

    scheduleGc() {
        this.clearGcTimeout(), vS(this.gcTime) && B(this, Kn, setTimeout(() => {
            this.optionalRemove()
        }, this.gcTime))
    }

    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (el ? 1 / 0 : 5 * 60 * 1e3))
    }

    clearGcTimeout() {
        b(this, Kn) && (clearTimeout(b(this, Kn)), B(this, Kn, void 0))
    }
}, Kn = new WeakMap, mf), $r, Gn, tt, Yn, Re, ti, qn, mt, zt, gf, OS = (gf = class extends ig {
    constructor(t) {
        super();
        Z(this, mt);
        Z(this, $r);
        Z(this, Gn);
        Z(this, tt);
        Z(this, Yn);
        Z(this, Re);
        Z(this, ti);
        Z(this, qn);
        B(this, qn, !1), B(this, ti, t.defaultOptions), this.setOptions(t.options), this.observers = [], B(this, Yn, t.client), B(this, tt, b(this, Yn).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, B(this, $r, _S(this.options)), this.state = t.state ?? b(this, $r), this.scheduleGc()
    }

    get meta() {
        return this.options.meta
    }

    get promise() {
        var t;
        return (t = b(this, Re)) == null ? void 0 : t.promise
    }

    setOptions(t) {
        this.options = {...b(this, ti), ...t}, this.updateGcTime(this.options.gcTime)
    }

    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && b(this, tt).remove(this)
    }

    setData(t, n) {
        const r = SS(this.state.data, t, this.options);
        return be(this, mt, zt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }), r
    }

    setState(t, n) {
        be(this, mt, zt).call(this, {type: "setState", state: t, setStateOptions: n})
    }

    cancel(t) {
        var r, o;
        const n = (r = b(this, Re)) == null ? void 0 : r.promise;
        return (o = b(this, Re)) == null || o.cancel(t), n ? n.then(ht).catch(ht) : Promise.resolve()
    }

    destroy() {
        super.destroy(), this.cancel({silent: !0})
    }

    reset() {
        this.destroy(), this.setState(b(this, $r))
    }

    isActive() {
        return this.observers.some(t => wS(t.options.enabled, this) !== !1)
    }

    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === uc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }

    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ha(t.options.staleTime, this) === "static") : !1
    }

    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }

    isStaleByTime(t = 0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !yS(this.state.dataUpdatedAt, t)
    }

    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({cancelRefetch: !1}), (n = b(this, Re)) == null || n.continue()
    }

    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({cancelRefetch: !1}), (n = b(this, Re)) == null || n.continue()
    }

    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), b(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }

    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (b(this, Re) && (b(this, qn) ? b(this, Re).cancel({revert: !0}) : b(this, Re).cancelRetry()), this.scheduleGc()), b(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }

    getObserversCount() {
        return this.observers.length
    }

    invalidate() {
        this.state.isInvalidated || be(this, mt, zt).call(this, {type: "invalidate"})
    }

    fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({silent: !0}); else if (b(this, Re)) return b(this, Re).continueRetry(), b(this, Re).promise
        }
        if (t && this.setOptions(t), !this.options.queryFn) {
            const h = this.observers.find(d => d.options.queryFn);
            h && this.setOptions(h.options)
        }
        const r = new AbortController, o = h => {
            Object.defineProperty(h, "signal", {enumerable: !0, get: () => (B(this, qn, !0), r.signal)})
        }, i = () => {
            const h = eg(this.options, n), x = (() => {
                const v = {client: b(this, Yn), queryKey: this.queryKey, meta: this.meta};
                return o(v), v
            })();
            return B(this, qn, !1), this.options.persister ? this.options.persister(h, x, this) : h(x)
        }, l = (() => {
            const h = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: b(this, Yn),
                state: this.state,
                fetchFn: i
            };
            return o(h), h
        })();
        (u = this.options.behavior) == null || u.onFetch(l, this), B(this, Gn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && be(this, mt, zt).call(this, {
            type: "fetch",
            meta: (f = l.fetchOptions) == null ? void 0 : f.meta
        });
        const a = h => {
            var d, x, v, y;
            Ul(h) && h.silent || be(this, mt, zt).call(this, {
                type: "error",
                error: h
            }), Ul(h) || ((x = (d = b(this, tt).config).onError) == null || x.call(d, h, this), (y = (v = b(this, tt).config).onSettled) == null || y.call(v, this.state.data, h, this)), this.scheduleGc()
        };
        return B(this, Re, og({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: h => {
                var d, x, v, y;
                if (h === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (m) {
                    a(m);
                    return
                }
                (x = (d = b(this, tt).config).onSuccess) == null || x.call(d, h, this), (y = (v = b(this, tt).config).onSettled) == null || y.call(v, h, this.state.error, this), this.scheduleGc()
            },
            onError: a,
            onFail: (h, d) => {
                be(this, mt, zt).call(this, {type: "failed", failureCount: h, error: d})
            },
            onPause: () => {
                be(this, mt, zt).call(this, {type: "pause"})
            },
            onContinue: () => {
                be(this, mt, zt).call(this, {type: "continue"})
            },
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })), b(this, Re).start()
    }
}, $r = new WeakMap, Gn = new WeakMap, tt = new WeakMap, Yn = new WeakMap, Re = new WeakMap, ti = new WeakMap, qn = new WeakMap, mt = new WeakSet, zt = function (t) {
    const n = r => {
        switch (t.type) {
            case"failed":
                return {...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error};
            case"pause":
                return {...r, fetchStatus: "paused"};
            case"continue":
                return {...r, fetchStatus: "fetching"};
            case"fetch":
                return {...r, ...AS(r.data, this.options), fetchMeta: t.meta ?? null};
            case"success":
                return B(this, Gn, void 0), {
                    ...r,
                    data: t.data,
                    dataUpdateCount: r.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success", ...!t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case"error":
                const o = t.error;
                return Ul(o) && o.revert && b(this, Gn) ? {...b(this, Gn), fetchStatus: "idle"} : {
                    ...r,
                    error: o,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: o,
                    fetchStatus: "idle",
                    status: "error"
                };
            case"invalidate":
                return {...r, isInvalidated: !0};
            case"setState":
                return {...r, ...t.state}
        }
    };
    this.state = n(this.state), je.batch(() => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }), b(this, tt).notify({query: this, type: "updated", action: t})
    })
}, gf);

function AS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ng(t.networkMode) ? "fetching" : "paused", ...e === void 0 && {error: null, status: "pending"}
    }
}

function _S(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}

var Tt, vf, MS = (vf = class extends Js {
    constructor(t = {}) {
        super();
        Z(this, Tt);
        this.config = t, B(this, Tt, new Map)
    }

    build(t, n, r) {
        const o = n.queryKey, i = n.queryHash ?? ac(o, n);
        let s = this.get(i);
        return s || (s = new OS({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }), this.add(s)), s
    }

    add(t) {
        b(this, Tt).has(t.queryHash) || (b(this, Tt).set(t.queryHash, t), this.notify({type: "added", query: t}))
    }

    remove(t) {
        const n = b(this, Tt).get(t.queryHash);
        n && (t.destroy(), n === t && b(this, Tt).delete(t.queryHash), this.notify({type: "removed", query: t}))
    }

    clear() {
        je.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }

    get(t) {
        return b(this, Tt).get(t)
    }

    getAll() {
        return [...b(this, Tt).values()]
    }

    find(t) {
        const n = {exact: !0, ...t};
        return this.getAll().find(r => Xd(n, r))
    }

    findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Xd(t, r)) : n
    }

    notify(t) {
        je.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }

    onFocus() {
        je.batch(() => {
            this.getAll().forEach(t => {
                t.onFocus()
            })
        })
    }

    onOnline() {
        je.batch(() => {
            this.getAll().forEach(t => {
                t.onOnline()
            })
        })
    }
}, Tt = new WeakMap, vf), Nt, _e, Xn, Rt, an, yf, jS = (yf = class extends ig {
    constructor(t) {
        super();
        Z(this, Rt);
        Z(this, Nt);
        Z(this, _e);
        Z(this, Xn);
        this.mutationId = t.mutationId, B(this, _e, t.mutationCache), B(this, Nt, []), this.state = t.state || LS(), this.setOptions(t.options), this.scheduleGc()
    }

    setOptions(t) {
        this.options = t, this.updateGcTime(this.options.gcTime)
    }

    get meta() {
        return this.options.meta
    }

    addObserver(t) {
        b(this, Nt).includes(t) || (b(this, Nt).push(t), this.clearGcTimeout(), b(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }

    removeObserver(t) {
        B(this, Nt, b(this, Nt).filter(n => n !== t)), this.scheduleGc(), b(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }

    optionalRemove() {
        b(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, _e).remove(this))
    }

    continue() {
        var t;
        return ((t = b(this, Xn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }

    async execute(t) {
        var i, s, l, a, u, c, f, h, d, x, v, y, m, p, g, E, C, k, P, R;
        const n = () => {
            be(this, Rt, an).call(this, {type: "continue"})
        };
        B(this, Xn, og({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, _) => {
                be(this, Rt, an).call(this, {type: "failed", failureCount: M, error: _})
            },
            onPause: () => {
                be(this, Rt, an).call(this, {type: "pause"})
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, _e).canRun(this)
        }));
        const r = this.state.status === "pending", o = !b(this, Xn).canStart();
        try {
            if (r) n(); else {
                be(this, Rt, an).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }), await ((s = (i = b(this, _e).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const _ = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                _ !== this.state.context && be(this, Rt, an).call(this, {
                    type: "pending",
                    context: _,
                    variables: t,
                    isPaused: o
                })
            }
            const M = await b(this, Xn).start();
            return await ((c = (u = b(this, _e).config).onSuccess) == null ? void 0 : c.call(u, M, t, this.state.context, this)), await ((h = (f = this.options).onSuccess) == null ? void 0 : h.call(f, M, t, this.state.context)), await ((x = (d = b(this, _e).config).onSettled) == null ? void 0 : x.call(d, M, null, this.state.variables, this.state.context, this)), await ((y = (v = this.options).onSettled) == null ? void 0 : y.call(v, M, null, t, this.state.context)), be(this, Rt, an).call(this, {
                type: "success",
                data: M
            }), M
        } catch (M) {
            try {
                throw await ((p = (m = b(this, _e).config).onError) == null ? void 0 : p.call(m, M, t, this.state.context, this)), await ((E = (g = this.options).onError) == null ? void 0 : E.call(g, M, t, this.state.context)), await ((k = (C = b(this, _e).config).onSettled) == null ? void 0 : k.call(C, void 0, M, this.state.variables, this.state.context, this)), await ((R = (P = this.options).onSettled) == null ? void 0 : R.call(P, void 0, M, t, this.state.context)), M
            } finally {
                be(this, Rt, an).call(this, {type: "error", error: M})
            }
        } finally {
            b(this, _e).runNext(this)
        }
    }
}, Nt = new WeakMap, _e = new WeakMap, Xn = new WeakMap, Rt = new WeakSet, an = function (t) {
    const n = r => {
        switch (t.type) {
            case"failed":
                return {...r, failureCount: t.failureCount, failureReason: t.error};
            case"pause":
                return {...r, isPaused: !0};
            case"continue":
                return {...r, isPaused: !1};
            case"pending":
                return {
                    ...r,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now()
                };
            case"success":
                return {
                    ...r,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case"error":
                return {
                    ...r,
                    data: void 0,
                    error: t.error,
                    failureCount: r.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = n(this.state), je.batch(() => {
        b(this, Nt).forEach(r => {
            r.onMutationUpdate(t)
        }), b(this, _e).notify({mutation: this, type: "updated", action: t})
    })
}, yf);

function LS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}

var Ut, gt, ni, wf, IS = (wf = class extends Js {
    constructor(t = {}) {
        super();
        Z(this, Ut);
        Z(this, gt);
        Z(this, ni);
        this.config = t, B(this, Ut, new Set), B(this, gt, new Map), B(this, ni, 0)
    }

    build(t, n, r) {
        const o = new jS({
            mutationCache: this,
            mutationId: ++hi(this, ni)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }

    add(t) {
        b(this, Ut).add(t);
        const n = Ii(t);
        if (typeof n == "string") {
            const r = b(this, gt).get(n);
            r ? r.push(t) : b(this, gt).set(n, [t])
        }
        this.notify({type: "added", mutation: t})
    }

    remove(t) {
        if (b(this, Ut).delete(t)) {
            const n = Ii(t);
            if (typeof n == "string") {
                const r = b(this, gt).get(n);
                if (r) if (r.length > 1) {
                    const o = r.indexOf(t);
                    o !== -1 && r.splice(o, 1)
                } else r[0] === t && b(this, gt).delete(n)
            }
        }
        this.notify({type: "removed", mutation: t})
    }

    canRun(t) {
        const n = Ii(t);
        if (typeof n == "string") {
            const r = b(this, gt).get(n), o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else return !0
    }

    runNext(t) {
        var r;
        const n = Ii(t);
        if (typeof n == "string") {
            const o = (r = b(this, gt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else return Promise.resolve()
    }

    clear() {
        je.batch(() => {
            b(this, Ut).forEach(t => {
                this.notify({type: "removed", mutation: t})
            }), b(this, Ut).clear(), b(this, gt).clear()
        })
    }

    getAll() {
        return Array.from(b(this, Ut))
    }

    find(t) {
        const n = {exact: !0, ...t};
        return this.getAll().find(r => Zd(n, r))
    }

    findAll(t = {}) {
        return this.getAll().filter(n => Zd(t, n))
    }

    notify(t) {
        je.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }

    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return je.batch(() => Promise.all(t.map(n => n.continue().catch(ht))))
    }
}, Ut = new WeakMap, gt = new WeakMap, ni = new WeakMap, wf);

function Ii(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function tf(e) {
    return {
        onFetch: (t, n) => {
            var c, f, h, d, x;
            const r = t.options,
                o = (h = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction,
                i = ((d = t.state.data) == null ? void 0 : d.pages) || [],
                s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let l = {pages: [], pageParams: []}, a = 0;
            const u = async () => {
                let v = !1;
                const y = g => {
                    Object.defineProperty(g, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }), t.signal)
                    })
                }, m = eg(t.options, t.fetchOptions), p = async (g, E, C) => {
                    if (v) return Promise.reject();
                    if (E == null && g.pages.length) return Promise.resolve(g);
                    const P = (() => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: E,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return y(F), F
                    })(), R = await m(P), {maxPages: M} = t.options, _ = C ? CS : ES;
                    return {pages: _(g.pages, R, M), pageParams: _(g.pageParams, E, M)}
                };
                if (o && i.length) {
                    const g = o === "backward", E = g ? DS : nf, C = {pages: i, pageParams: s}, k = E(r, C);
                    l = await p(C, k, g)
                } else {
                    const g = e ?? i.length;
                    do {
                        const E = a === 0 ? s[0] ?? r.initialPageParam : nf(r, l);
                        if (a > 0 && E == null) break;
                        l = await p(l, E), a++
                    } while (a < g)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => {
                var v, y;
                return (y = (v = t.options).persister) == null ? void 0 : y.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function nf(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function DS(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}

var fe, mn, gn, Ur, Br, vn, Vr, Wr, xf, zS = (xf = class {
        constructor(e = {}) {
            Z(this, fe);
            Z(this, mn);
            Z(this, gn);
            Z(this, Ur);
            Z(this, Br);
            Z(this, vn);
            Z(this, Vr);
            Z(this, Wr);
            B(this, fe, e.queryCache || new MS), B(this, mn, e.mutationCache || new IS), B(this, gn, e.defaultOptions || {}), B(this, Ur, new Map), B(this, Br, new Map), B(this, vn, 0)
        }

        mount() {
            hi(this, vn)._++, b(this, vn) === 1 && (B(this, Vr, tg.subscribe(async e => {
                e && (await this.resumePausedMutations(), b(this, fe).onFocus())
            })), B(this, Wr, bs.subscribe(async e => {
                e && (await this.resumePausedMutations(), b(this, fe).onOnline())
            })))
        }

        unmount() {
            var e, t;
            hi(this, vn)._--, b(this, vn) === 0 && ((e = b(this, Vr)) == null || e.call(this), B(this, Vr, void 0), (t = b(this, Wr)) == null || t.call(this), B(this, Wr, void 0))
        }

        isFetching(e) {
            return b(this, fe).findAll({...e, fetchStatus: "fetching"}).length
        }

        isMutating(e) {
            return b(this, mn).findAll({...e, status: "pending"}).length
        }

        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({queryKey: e});
            return (n = b(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
        }

        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e), n = b(this, fe).build(this, t), r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ha(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }

        getQueriesData(e) {
            return b(this, fe).findAll(e).map(({queryKey: t, state: n}) => {
                const r = n.data;
                return [t, r]
            })
        }

        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({queryKey: e}), o = b(this, fe).get(r.queryHash),
                i = o == null ? void 0 : o.state.data, s = gS(t, i);
            if (s !== void 0) return b(this, fe).build(this, r).setData(s, {...n, manual: !0})
        }

        setQueriesData(e, t, n) {
            return je.batch(() => b(this, fe).findAll(e).map(({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
        }

        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({queryKey: e});
            return (n = b(this, fe).get(t.queryHash)) == null ? void 0 : n.state
        }

        removeQueries(e) {
            const t = b(this, fe);
            je.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }

        resetQueries(e, t) {
            const n = b(this, fe);
            return je.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({type: "active", ...e}, t)))
        }

        cancelQueries(e, t = {}) {
            const n = {revert: !0, ...t}, r = je.batch(() => b(this, fe).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(ht).catch(ht)
        }

        invalidateQueries(e, t = {}) {
            return je.batch(() => (b(this, fe).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
                ...e,
                type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
            }, t)))
        }

        refetchQueries(e, t = {}) {
            const n = {...t, cancelRefetch: t.cancelRefetch ?? !0},
                r = je.batch(() => b(this, fe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(ht)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(ht)
        }

        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = b(this, fe).build(this, t);
            return n.isStaleByTime(Ha(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }

        prefetchQuery(e) {
            return this.fetchQuery(e).then(ht).catch(ht)
        }

        fetchInfiniteQuery(e) {
            return e.behavior = tf(e.pages), this.fetchQuery(e)
        }

        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(ht).catch(ht)
        }

        ensureInfiniteQueryData(e) {
            return e.behavior = tf(e.pages), this.ensureQueryData(e)
        }

        resumePausedMutations() {
            return bs.isOnline() ? b(this, mn).resumePausedMutations() : Promise.resolve()
        }

        getQueryCache() {
            return b(this, fe)
        }

        getMutationCache() {
            return b(this, mn)
        }

        getDefaultOptions() {
            return b(this, gn)
        }

        setDefaultOptions(e) {
            B(this, gn, e)
        }

        setQueryDefaults(e, t) {
            b(this, Ur).set(Jo(e), {queryKey: e, defaultOptions: t})
        }

        getQueryDefaults(e) {
            const t = [...b(this, Ur).values()], n = {};
            return t.forEach(r => {
                ei(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }

        setMutationDefaults(e, t) {
            b(this, Br).set(Jo(e), {mutationKey: e, defaultOptions: t})
        }

        getMutationDefaults(e) {
            const t = [...b(this, Br).values()], n = {};
            return t.forEach(r => {
                ei(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }

        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = {...b(this, gn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0};
            return t.queryHash || (t.queryHash = ac(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === uc && (t.enabled = !1), t
        }

        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : {
                ...b(this, gn).mutations, ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey), ...e,
                _defaulted: !0
            }
        }

        clear() {
            b(this, fe).clear(), b(this, mn).clear()
        }
    }, fe = new WeakMap, mn = new WeakMap, gn = new WeakMap, Ur = new WeakMap, Br = new WeakMap, vn = new WeakMap, Vr = new WeakMap, Wr = new WeakMap, xf),
    FS = w.createContext(void 0), $S = ({client: e, children: t}) => (w.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), S.jsx(FS.Provider, {value: e, children: t}));

/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts() {
    return Ts = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ts.apply(this, arguments)
}

var xn;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(xn || (xn = {}));
const rf = "popstate";

function US(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Ka("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : lg(o)
    }

    return VS(t, n, null, e)
}

function We(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function sg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {
        }
    }
}

function BS() {
    return Math.random().toString(36).substr(2, 8)
}

function of(e, t) {
    return {usr: e.state, key: e.key, idx: t}
}

function Ka(e, t, n, r) {
    return n === void 0 && (n = null), Ts({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? tl(t) : t, {state: n, key: t && t.key || r || BS()})
}

function lg(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function tl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function VS(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o = document.defaultView, v5Compat: i = !1} = r, s = o.history, l = xn.Pop, a = null, u = c();
    u == null && (u = 0, s.replaceState(Ts({}, s.state, {idx: u}), ""));

    function c() {
        return (s.state || {idx: null}).idx
    }

    function f() {
        l = xn.Pop;
        let y = c(), m = y == null ? null : y - u;
        u = y, a && a({action: l, location: v.location, delta: m})
    }

    function h(y, m) {
        l = xn.Push;
        let p = Ka(v.location, y, m);
        u = c() + 1;
        let g = of(p, u), E = v.createHref(p);
        try {
            s.pushState(g, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(E)
        }
        i && a && a({action: l, location: v.location, delta: 1})
    }

    function d(y, m) {
        l = xn.Replace;
        let p = Ka(v.location, y, m);
        u = c();
        let g = of(p, u), E = v.createHref(p);
        s.replaceState(g, "", E), i && a && a({action: l, location: v.location, delta: 0})
    }

    function x(y) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof y == "string" ? y : lg(y);
        return p = p.replace(/ $/, "%20"), We(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m)
    }

    let v = {
        get action() {
            return l
        }, get location() {
            return e(o, s)
        }, listen(y) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(rf, f), a = y, () => {
                o.removeEventListener(rf, f), a = null
            }
        }, createHref(y) {
            return t(o, y)
        }, createURL: x, encodeLocation(y) {
            let m = x(y);
            return {pathname: m.pathname, search: m.search, hash: m.hash}
        }, push: h, replace: d, go(y) {
            return s.go(y)
        }
    };
    return v
}

var sf;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(sf || (sf = {}));

function WS(e, t, n) {
    return n === void 0 && (n = "/"), HS(e, t, n, !1)
}

function HS(e, t, n, r) {
    let o = typeof t == "string" ? tl(t) : t, i = cg(o.pathname || "/", n);
    if (i == null) return null;
    let s = ag(e);
    QS(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = r2(i);
        l = t2(s[a], u, r)
    }
    return l
}

function ag(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (We(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = Ir([r, a.relativePath]), c = n.concat(a);
        i.children && i.children.length > 0 && (We(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), ag(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: JS(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s); else for (let a of ug(i.path)) o(i, s, a)
    }), t
}

function ug(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = ug(r.join("/")), l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))), o && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function QS(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : e2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}

const KS = /^:[\w-]+$/, GS = 3, YS = 2, qS = 1, XS = 10, ZS = -2, lf = e => e === "*";

function JS(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(lf) && (r += ZS), t && (r += YS), n.filter(o => !lf(o)).reduce((o, i) => o + (KS.test(i) ? GS : i === "" ? qS : XS), r)
}

function e2(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function t2(e, t, n) {
    let {routesMeta: r} = e, o = {}, i = "/", s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l], u = l === r.length - 1, c = i === "/" ? t : t.slice(i.length) || "/",
            f = af({path: a.relativePath, caseSensitive: a.caseSensitive, end: u}, c), h = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = af({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)), !f) return null;
        Object.assign(o, f.params), s.push({
            params: o,
            pathname: Ir([i, f.pathname]),
            pathnameBase: o2(Ir([i, f.pathnameBase])),
            route: h
        }), f.pathnameBase !== "/" && (i = Ir([i, f.pathnameBase]))
    }
    return s
}

function af(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = n2(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0], s = i.replace(/(.)\/+$/, "$1"), l = o.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            let {paramName: h, isOptional: d} = c;
            if (h === "*") {
                let v = l[f] || "";
                s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[f];
            return d && !x ? u[h] = void 0 : u[h] = (x || "").replace(/%2F/g, "/"), u
        }, {}), pathname: i, pathnameBase: s, pattern: e
    }
}

function n2(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), sg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({paramName: "*"}), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function r2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return sg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function cg(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

const Ir = e => e.join("/").replace(/\/\/+/g, "/"), o2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function i2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}

const dg = ["post", "put", "patch", "delete"];
new Set(dg);
const s2 = ["get", ...dg];
new Set(s2);

/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns() {
    return Ns = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ns.apply(this, arguments)
}

const l2 = w.createContext(null), a2 = w.createContext(null), fg = w.createContext(null), nl = w.createContext(null),
    rl = w.createContext({outlet: null, matches: [], isDataRoute: !1}), pg = w.createContext(null);

function cc() {
    return w.useContext(nl) != null
}

function hg() {
    return cc() || We(!1), w.useContext(nl).location
}

function u2(e, t) {
    return c2(e, t)
}

function c2(e, t, n, r) {
    cc() || We(!1);
    let {navigator: o} = w.useContext(fg), {matches: i} = w.useContext(rl), s = i[i.length - 1], l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = hg(), c;
    if (t) {
        var f;
        let y = typeof t == "string" ? tl(t) : t;
        a === "/" || (f = y.pathname) != null && f.startsWith(a) || We(!1), c = y
    } else c = u;
    let h = c.pathname || "/", d = h;
    if (a !== "/") {
        let y = a.replace(/^\//, "").split("/");
        d = "/" + h.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let x = WS(e, {pathname: d}), v = m2(x && x.map(y => Object.assign({}, y, {
        params: Object.assign({}, l, y.params),
        pathname: Ir([a, o.encodeLocation ? o.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : Ir([a, o.encodeLocation ? o.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), i, n, r);
    return t && v ? w.createElement(nl.Provider, {
        value: {
            location: Ns({
                pathname: "/qa",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c), navigationType: xn.Pop
        }
    }, v) : v
}

function d2() {
    let e = w2(), t = i2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null, o = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"};
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? w.createElement("pre", {style: o}, n) : null, null)
}

const f2 = w.createElement(d2, null);

class p2 extends w.Component {
    constructor(t) {
        super(t), this.state = {location: t.location, revalidation: t.revalidation, error: t.error}
    }

    static getDerivedStateFromError(t) {
        return {error: t}
    }

    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }

    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }

    render() {
        return this.state.error !== void 0 ? w.createElement(rl.Provider, {value: this.props.routeContext}, w.createElement(pg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function h2(e) {
    let {routeContext: t, match: n, children: r} = e, o = w.useContext(l2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), w.createElement(rl.Provider, {value: t}, r)
}

function m2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches; else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches; else return null
    }
    let s = e, l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        c >= 0 || We(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1, u = -1;
    if (n && r && r.v7_partialHydration) for (let c = 0; c < s.length; c++) {
        let f = s[c];
        if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
            let {loaderData: h, errors: d} = n,
                x = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
            if (f.route.lazy || x) {
                a = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                break
            }
        }
    }
    return s.reduceRight((c, f, h) => {
        let d, x = !1, v = null, y = null;
        n && (d = l && f.route.id ? l[f.route.id] : void 0, v = f.route.errorElement || f2, a && (u < 0 && h === 0 ? (x = !0, y = null) : u === h && (x = !0, y = f.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, h + 1)), p = () => {
            let g;
            return d ? g = v : x ? g = y : f.route.Component ? g = w.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, w.createElement(h2, {
                match: f,
                routeContext: {outlet: c, matches: m, isDataRoute: n != null},
                children: g
            })
        };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? w.createElement(p2, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: d,
            children: p(),
            routeContext: {outlet: null, matches: m, isDataRoute: !0}
        }) : p()
    }, null)
}

var Ga = function (e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Ga || {});

function g2(e) {
    let t = w.useContext(a2);
    return t || We(!1), t
}

function v2(e) {
    let t = w.useContext(rl);
    return t || We(!1), t
}

function y2(e) {
    let t = v2(), n = t.matches[t.matches.length - 1];
    return n.route.id || We(!1), n.route.id
}

function w2() {
    var e;
    let t = w.useContext(pg), n = g2(Ga.UseRouteError), r = y2(Ga.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function x2(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function Ya(e) {
    We(!1)
}

function S2(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = xn.Pop,
        navigator: i,
        static: s = !1,
        future: l
    } = e;
    cc() && We(!1);
    let a = t.replace(/^\/*/, "/"), u = w.useMemo(() => ({
        basename: a,
        navigator: i,
        static: s,
        future: Ns({v7_relativeSplatPath: !1}, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = tl(r));
    let {pathname: c = "/", search: f = "", hash: h = "", state: d = null, key: x = "default"} = r,
        v = w.useMemo(() => {
            let y = cg(c, a);
            return y == null ? null : {location: {pathname: y, search: f, hash: h, state: d, key: x}, navigationType: o}
        }, [a, c, f, h, d, x, o]);
    return v == null ? null : w.createElement(fg.Provider, {value: u}, w.createElement(nl.Provider, {
        children: n,
        value: v
    }))
}

function E2(e) {
    let {children: t, location: n} = e;
    return u2(qa(t), n)
}

new Promise(() => {
});

function qa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, qa(r.props.children, i));
            return
        }
        r.type !== Ya && We(!1), !r.props.index || !r.props.children || We(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = qa(r.props.children, i)), n.push(s)
    }), n
}

/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const C2 = "6";
try {
    window.__reactRouterVersion = C2
} catch {
}
const k2 = "startTransition", uf = _f[k2];

function P2(e) {
    let {basename: t, children: n, future: r, window: o} = e, i = w.useRef();
    i.current == null && (i.current = US({window: o, v5Compat: !0}));
    let s = i.current, [l, a] = w.useState({action: s.action, location: s.location}), {v7_startTransition: u} = r || {},
        c = w.useCallback(f => {
            u && uf ? uf(() => a(f)) : a(f)
        }, [a, u]);
    return w.useLayoutEffect(() => s.listen(c), [s, c]), w.useEffect(() => x2(r), [r]), w.createElement(S2, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}

var cf;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(cf || (cf = {}));
var df;
(function (e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(df || (df = {}));
const b2 = ({currentSlide: e, totalSlides: t, onPrevious: n, onNext: r}) => {
        const o = (e + 1) / t * 100;
        return S.jsxs("div", {
            className: "fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-border/50",
            children: [S.jsx("div", {
                className: "progress-bar",
                children: S.jsx("div", {className: "progress-fill", style: {width: `${o}%`}})
            }), S.jsxs("div", {
                className: "flex items-center justify-between px-4 md:px-8 py-4 max-w-5xl mx-auto",
                children: [S.jsxs("button", {
                    onClick: n,
                    disabled: e === 0,
                    className: "nav-button nav-button-secondary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none",
                    children: [S.jsx(e1, {className: "w-5 h-5"}), S.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Previous"
                    })]
                }), S.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [S.jsx("span", {
                        className: "text-sm font-bold gradient-text",
                        children: e + 1
                    }), S.jsx("span", {
                        className: "text-muted-foreground",
                        children: "/"
                    }), S.jsx("span", {className: "text-sm text-muted-foreground", children: t})]
                }), S.jsxs("button", {
                    onClick: r,
                    disabled: e === t - 1,
                    className: "nav-button nav-button-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none",
                    children: [S.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Next"
                    }), S.jsx(t1, {className: "w-5 h-5"})]
                })]
            })]
        })
    }, T2 = ({
                 currentSlide: e,
                 totalSlides: t,
                 onSlideClick: n
             }) => S.jsx("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2",
        children: Array.from({length: t}).map((r, o) => S.jsx("button", {
            onClick: () => n(o),
            className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${o === e ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground/50"}`,
            "aria-label": `Go to slide ${o + 1}`
        }, o))
    }), N2 = () => S.jsx("div", {
        className: "slide", children: S.jsxs("div", {
            className: "slide-content text-center",
            children: [S.jsxs("div", {
                className: "hero-icon-group",
                children: [S.jsx("div", {
                    className: "hero-icon hero-icon-1",
                    children: S.jsx(qu, {className: "w-8 h-8"})
                }), S.jsx("div", {
                    className: "hero-icon hero-icon-2",
                    children: S.jsx(fm, {className: "w-8 h-8"})
                }), S.jsx("div", {className: "hero-icon hero-icon-3", children: S.jsx(Xu, {className: "w-8 h-8"})})]
            }), S.jsxs("div", {
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6",
                children: ["Interview Portfolio"]
            }), S.jsx("h1", {
                className: "slide-title text-4xl md:text-5xl lg:text-6xl mb-4",
                children: "Middle Manual QA Engineer"
            }), S.jsx("p", {
                className: "slide-subtitle mb-8",
                children: "Web & Mobile | Admin Panels | Government & Enterprise Systems"
            }), S.jsx("div", {className: "section-divider"}), S.jsx("p", {
                className: "text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed",
                children: "Experienced Middle Manual QA Engineer with strong expertise in testing complex web and mobile systems, including government portals and enterprise platforms."
            })]
        })
    }), R2 = [{
        text: "Middle Manual QA Engineer",
        highlight: !0
    }, {
        text: "Strong experience in Web, Mobile (iOS / Android) and Admin Panel testing",
        highlight: !1
    }, {
        text: "Worked on government and enterprise-level systems",
        highlight: !1
    }, {
        text: "Deep understanding of business logic and end-to-end flows",
        highlight: !1
    }, {
        text: "Focused on quality, data consistency and user experience",
        highlight: !1
    }, {text: "Analytical mindset, not just test execution", highlight: !0}], O2 = () => S.jsx("div", {
        className: "slide",
        children: S.jsxs("div", {
            className: "slide-content",
            children: [S.jsxs("div", {
                className: "flex items-center gap-4 mb-10",
                children: [S.jsx("div", {
                    className: "skill-icon-wrapper",
                    children: S.jsx(p1, {className: "w-7 h-7"})
                }), S.jsx("h2", {className: "slide-title mb-0", children: "About Me"})]
            }), S.jsx("div", {
                className: "skill-card max-w-3xl",
                children: S.jsx("ul", {
                    className: "space-y-5",
                    children: R2.map((e, t) => S.jsxs("li", {
                        className: "flex items-start gap-4 group",
                        children: [S.jsx("div", {
                            className: `check-icon mt-0.5 transition-all duration-300 group-hover:scale-110 ${e.highlight ? "animate-pulse-glow" : ""}`,
                            children: e.highlight ? S.jsx(m1, {className: "w-3.5 h-3.5"}) : S.jsx(Mo, {className: "w-3.5 h-3.5"})
                        }), S.jsx("span", {
                            className: `text-lg md:text-xl transition-colors duration-300 ${e.highlight ? "font-semibold gradient-text" : "text-foreground group-hover:text-primary"}`,
                            children: e.text
                        })]
                    }, t))
                })
            })]
        })
    }), A2 = [{name: "Functional Testing", icon: d1}, {
        name: "Regression & Smoke Testing",
        icon: a1
    }, {name: "Test Case", icon: u1}, {name: "Web & Mobile Testing", icon: qu}, {
        name: "Admin Panel Testing",
        icon: Xu
    }, {name: "End-to-End Scenarios", icon: Z0}, {
        name: "Data Validation (Admin → UI)",
        icon: o1
    }, {name: "Payment & Access Control Testing", icon: r1}, {name: "UX & UI Validation", icon: i1}],
    _2 = () => S.jsx("div", {
        className: "slide",
        children: S.jsxs("div", {
            className: "slide-content",
            children: [S.jsx("h2", {
                className: "slide-title text-center mb-4",
                children: "QA Skills & Expertise"
            }), S.jsx("div", {className: "section-divider mb-10"}), S.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                children: A2.map((e, t) => S.jsxs("div", {
                    className: "skill-card flex items-center gap-4 group cursor-pointer",
                    style: {animationDelay: `${t * .1}s`},
                    children: [S.jsx("div", {
                        className: `skill-icon-wrapper skill-icon-${t + 1} flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`,
                        children: S.jsx(e.icon, {className: "w-6 h-6"})
                    }), S.jsx("span", {
                        className: "font-semibold text-foreground group-hover:gradient-text transition-all duration-300",
                        children: e.name
                    })]
                }, t))
            })]
        })
    }),
    M2 = e => e.toLowerCase().includes("mobile") ? fm : e.toLowerCase().includes("enterprise") ? J0 : e.toLowerCase().includes("cloud") ? n1 : e.toLowerCase().includes("government") ? s1 : e.toLowerCase().includes("admin") ? Xu : qu,
    j2 = e => e.toLowerCase().includes("mobile") ? "hero-icon-2" : e.toLowerCase().includes("enterprise") ? "hero-icon-3" : (e.toLowerCase().includes("government"), "hero-icon-1"),
    L2 = ({
              title: e,
              type: t,
              description: n,
              responsibilities: r,
              testedFunctionality: o,
              testingFocus: i,
              keyPoints: s,
              qaFocus: l
          }) => {
        const a = M2(t), u = j2(t), c = r || o || i || [];
        return S.jsx("div", {
            className: "slide", children: S.jsxs("div", {
                className: "slide-content",
                children: [S.jsxs("div", {
                    className: "flex flex-col md:flex-row md:items-start gap-5 mb-8",
                    children: [S.jsx("div", {
                        className: `hero-icon ${u} flex-shrink-0`,
                        children: S.jsx(a, {className: "w-7 h-7"})
                    }), S.jsxs("div", {
                        children: [S.jsx("h2", {
                            className: "slide-title mb-3",
                            children: e
                        }), S.jsx("span", {className: "project-badge", children: t})]
                    })]
                }), S.jsxs("div", {
                    className: "skill-card max-w-4xl",
                    children: [S.jsx("p", {
                        className: "text-muted-foreground mb-8 text-lg md:text-xl leading-relaxed",
                        children: n
                    }), s && s.length > 0 && S.jsxs("div", {
                        className: "mb-8",
                        children: [S.jsx("h4", {
                            className: "font-bold gradient-text-accent text-lg mb-4",
                            children: "Key Points:"
                        }), S.jsx("ul", {
                            className: "space-y-3",
                            children: s.map((f, h) => S.jsxs("li", {
                                className: "flex items-start gap-3 group",
                                children: [S.jsx("div", {
                                    className: "check-icon mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform",
                                    children: S.jsx(Mo, {className: "w-3.5 h-3.5"})
                                }), S.jsx("span", {className: "text-foreground text-base md:text-lg", children: f})]
                            }, h))
                        })]
                    }), c.length > 0 && S.jsxs("div", {
                        children: [S.jsx("h4", {
                            className: "font-bold gradient-text-secondary text-lg mb-4",
                            children: r ? "Responsibilities:" : o ? "Tested Functionality:" : "Testing Focus:"
                        }), S.jsx("ul", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: c.map((f, h) => S.jsxs("li", {
                                className: "flex items-start gap-3 group",
                                children: [S.jsx("div", {
                                    className: "check-icon mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform",
                                    children: S.jsx(Mo, {className: "w-3.5 h-3.5"})
                                }), S.jsx("span", {className: "text-foreground text-base", children: f})]
                            }, h))
                        })]
                    }), l && l.length > 0 && S.jsxs("div", {
                        className: "mt-8 pt-6 border-t border-border",
                        children: [S.jsx("h4", {
                            className: "font-bold gradient-text text-lg mb-4",
                            children: "QA Focus:"
                        }), S.jsx("ul", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: l.map((f, h) => S.jsxs("li", {
                                className: "flex items-start gap-3 group",
                                children: [S.jsx("div", {
                                    className: "check-icon mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform",
                                    children: S.jsx(Mo, {className: "w-3.5 h-3.5"})
                                }), S.jsx("span", {className: "text-foreground text-base", children: f})]
                            }, h))
                        })]
                    })]
                })]
            })
        })
    }, I2 = [{text: "I think like a user and like a business", icon: "brain"}, {
        text: "I identify risks, not just bugs",
        icon: "shield"
    }, {
        text: "Comfortable working with large, complex systems",
        icon: "layers"
    }, {
        text: "Strong analytical and communication skills",
        icon: "message"
    }, {text: "Ready for enterprise-level challenges", icon: "rocket"}], D2 = () => S.jsx("div", {
        className: "slide", children: S.jsxs("div", {
            className: "slide-content text-center",
            children: [S.jsx("div", {
                className: "flex justify-center gap-4 mb-8",
                children: S.jsx("div", {className: "hero-icon hero-icon-3", children: S.jsx(f1, {className: "w-8 h-8"})})
            }), S.jsx("h2", {
                className: "slide-title text-4xl md:text-5xl mb-4",
                children: "Why Me?"
            }), S.jsx("div", {className: "section-divider mb-10"}), S.jsx("div", {
                className: "skill-card max-w-2xl mx-auto mb-10",
                children: S.jsx("ul", {
                    className: "space-y-5 text-left",
                    children: I2.map((e, t) => S.jsxs("li", {
                        className: "flex items-start gap-4 group",
                        children: [S.jsx("div", {
                            className: `check-icon mt-0.5 skill-icon-${t + 1} group-hover:scale-110 transition-all duration-300`,
                            children: S.jsx(Mo, {className: "w-3.5 h-3.5"})
                        }), S.jsx("span", {
                            className: "text-foreground text-lg md:text-xl group-hover:gradient-text transition-all duration-300",
                            children: e.text
                        })]
                    }, t))
                })
            }), S.jsxs("div", {
                className: "relative pt-10",
                children: [S.jsx("div", {className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"}), S.jsxs("div", {
                    className: "inline-flex items-center gap-3 mb-3",
                    children: [S.jsx(jd, {className: "w-5 h-5 text-primary animate-pulse"}), S.jsx("p", {
                        className: "text-xl md:text-2xl font-bold gradient-text",
                        children: "Middle Manual QA Engineer"
                    }), S.jsx(jd, {className: "w-5 h-5 text-primary animate-pulse"})]
                })]
            })]
        })
    }), ff = [
        {
            title: "Vahid Məhkəmə Portalı",
            type: "Web Site + Admin Panel",
            description: "A unified court portal where all website data is managed through an admin panel.",
            responsibilities: ["Testing admin panel data creation and editing", "Verifying correct data display on the website", "Navigation and page transitions", "Map functionality and location accuracy", "Form submission and user requests", "End-to-end validation: Admin → Website → User actions"]
        },
        {
            title: "E-Kabinet Məhkəmə",
            type: "Web & Mobile Application",
            description: "A system for submitting official court-related requests online.",
            testedFunctionality: ["Submission of applications (ərizə)", "Submission of complaints (şikayət)", "Submission of claims (pretenziya)", "Form validations", "Status tracking", "Consistent behavior across Web and Mobile platforms"]
        },
        {
            title: "E-Muhasibat",
            type: "Web site + Admin Panel",
            description: "Accounting platform for businesses.",
            testedFunctionality: ["User registration and onboarding", "Invoice creation and management", "Payment processing", "Tax calculation accuracy", "Report generation", "Admin panel data integrity"]
        },
        {
            title: "Obyekt.az",
            type: "Web Site + Admin Panel",
            description: "Advertisement platform with paid features.",
            testingFocus: ["Filters and search functionality", "Correct listing display", "VIP advertisement logic", "Payment verification", "Access after payment", "Data correctness from admin panel", "UI and business rule validation"]
        },
        {
            title: "BDU Website",
            type: "Web Site + Admin Panel",
            description: "Official university website managed via admin panel.",
            responsibilities: ["Content verification from admin panel to website", "Navigation and transitions", "Page structure logic", "Role and access validation", "UI consistency"]
        },
        {
            title: "Intranet Contract Management System",
            type: "Enterprise System",
            description: "Contract management platform.",
            testingFocus: ["Business logic validation", "Contract lifecycle scenarios", "Document handling", "Status changes", "Role-based access control"]
        },
        {
            title: "BiCloud",
            type: "Mobile App + Admin Panel",
            description: "Corporate cloud storage solution for companies.",
            testedFunctionality: ["Document storage", "User access control", "Storage limits (MB restrictions)", "User blocking via admin panel", "Admin panel ↔ Mobile app synchronization", "Behavior when limits are exceeded"]
        },
        {
            title: "AzDoc",
            type: "Web & Mobile Government System",
            description: "One of the largest government document management systems.",
            keyPoints: ["Used by government institutions", "Very complex business logic", "High number of users", "Long-term active project"],
            qaFocus: ["End-to-end document workflows", "Large-scale regression testing", "Complex scenario validation", "Data stability and consistency"]
        }
    ], z2 = () => {
        const [e, t] = w.useState(0), [n, r] = w.useState(!1), o = 3 + ff.length + 1, i = w.useCallback(u => {
            n || u === e || u < 0 || u >= o || (r(!0), t(u), setTimeout(() => r(!1), 400))
        }, [n, e, o]), s = () => i(e - 1), l = () => i(e + 1);
        w.useEffect(() => {
            const u = c => {
                c.key === "ArrowRight" || c.key === " " ? (c.preventDefault(), l()) : c.key === "ArrowLeft" && (c.preventDefault(), s())
            };
            return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u)
        }, [e, n]);
        const a = () => {
            if (e === 0) return S.jsx(N2, {});
            if (e === 1) return S.jsx(O2, {});
            if (e === 2) return S.jsx(_2, {});
            if (e === o - 1) return S.jsx(D2, {});
            const u = e - 3, c = ff[u];
            return S.jsx(L2, {
                title: c.title,
                type: c.type,
                description: c.description,
                responsibilities: c.responsibilities,
                testedFunctionality: c.testedFunctionality,
                testingFocus: c.testingFocus,
                keyPoints: c.keyPoints,
                qaFocus: c.qaFocus
            })
        };
        return S.jsxs("div", {
            className: "min-h-screen bg-background overflow-hidden",
            children: [S.jsx("div", {className: "slide-enter pb-20", children: a()}, e), S.jsx(T2, {
                currentSlide: e,
                totalSlides: o,
                onSlideClick: i
            }), S.jsx(b2, {currentSlide: e, totalSlides: o, onPrevious: s, onNext: l})]
        })
    }, F2 = () => {
        const e = hg();
        return w.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), S.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-muted",
            children: S.jsxs("div", {
                className: "text-center",
                children: [S.jsx("h1", {
                    className: "mb-4 text-4xl font-bold",
                    children: "404"
                }), S.jsx("p", {
                    className: "mb-4 text-xl text-muted-foreground",
                    children: "Oops! Page not found"
                }), S.jsx("a", {
                    href: "/qa",
                    className: "text-primary underline hover:text-primary/90",
                    children: "Return to Home"
                })]
            })
        })
    }, $2 = new zS, U2 = () => S.jsx($S, {
        client: $2,
        children: S.jsxs(hS, {
            children: [S.jsx(X1, {}), S.jsx(Rw, {}), S.jsx(P2, {
                children: S.jsxs(E2, {
                    children: [S.jsx(Ya, {
                        path: "/qa",
                        element: S.jsx(z2, {})
                    }), S.jsx(Ya, {path: "*", element: S.jsx(F2, {})})]
                })
            })]
        })
    });
Ih(document.getElementById("root")).render(S.jsx(U2, {}));