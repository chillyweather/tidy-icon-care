(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function d(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function w(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return g(l3, f3, i3, o3, null);
  }
  function g(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function m() {
    return { current: null };
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3)
      return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l3, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, v3, y3, d3, w4, _3 = t3 && t3.__k || p, g4 = l3.length;
    for (u3.__d = e3, $(u3, l3, _3), e3 = u3.__d, a3 = 0; a3 < g4; a3++)
      null != (y3 = u3.__k[a3]) && "boolean" != typeof y3 && "function" != typeof y3 && (v3 = -1 === y3.__i ? h : _3[y3.__i] || h, y3.__i = a3, O(n2, y3, v3, i3, o3, r3, f3, e3, c3, s3), d3 = y3.__e, y3.ref && v3.ref != y3.ref && (v3.ref && N(v3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w4 && null != d3 && (w4 = d3), 65536 & y3.__u || v3.__k === y3.__k ? (e3 && !e3.isConnected && (e3 = x(v3)), e3 = I(y3, e3, n2)) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u3.__d = e3, u3.__e = w4;
  }
  function $(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(k, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = L(i3, u3, r3, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 === r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : f3 < r3 ? f3 == r3 - 1 && (a3 = f3 - r3) : a3 = 0, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3, false), u3[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
  }
  function I(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
        t3[i3] && (t3[i3].__ = n2, l3 = I(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || v.test(l3) ? u3 : u3 + "px";
  }
  function A(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || T(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
      else {
        if ("http://www.w3.org/2000/svg" == i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function F(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t)
          u3.t = e++;
        else if (u3.t < t3.u)
          return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, h3, p3, v3, w4, _3, g4, m3, x4, C4, M3, P4, $3, I3, H3, L3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof L3)
        try {
          if (m3 = u3.props, x4 = (a3 = L3.contextType) && i3[a3.__c], C4 = a3 ? x4 ? x4.props.value : a3.__ : i3, t3.__c ? g4 = (h3 = u3.__c = t3.__c).__ = h3.__E : ("prototype" in L3 && L3.prototype.render ? u3.__c = h3 = new L3(m3, C4) : (u3.__c = h3 = new b(m3, C4), h3.constructor = L3, h3.render = q), x4 && x4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = C4, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != L3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, L3.getDerivedStateFromProps(m3, h3.__s))), v3 = h3.props, w4 = h3.state, h3.__v = u3, p3)
            null == L3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == L3.getDerivedStateFromProps && m3 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, C4), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, C4) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), M3 = 0; M3 < h3._sb.length; M3++)
                h3.__h.push(h3._sb[M3]);
              h3._sb = [], h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, C4), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(v3, w4, _3);
            });
          }
          if (h3.context = C4, h3.props = m3, h3.__P = n2, h3.__e = false, P4 = l.__r, $3 = 0, "prototype" in L3 && L3.prototype.render) {
            for (h3.state = h3.__s, h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), I3 = 0; I3 < h3._sb.length; I3++)
              h3.__h.push(h3._sb[I3]);
            h3._sb = [];
          } else
            do {
              h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++$3 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), p3 || null == h3.getSnapshotBeforeUpdate || (_3 = h3.getSnapshotBeforeUpdate(v3, w4)), S(n2, y(H3 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? H3 : [H3], u3, t3, i3, o3, r3, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g4 && (h3.__E = h3.__ = null);
        } catch (n3) {
          u3.__v = null, c3 || null != r3 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i3 = 0; i3 < t3.length; i3++)
      N(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(l3, u3, t3, i3, o3, r3, f3, e3, c3) {
    var s3, a3, p3, v3, d3, _3, g4, m3 = t3.props, k4 = u3.props, b2 = u3.type;
    if ("svg" === b2 ? o3 = "http://www.w3.org/2000/svg" : "math" === b2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s3 = 0; s3 < r3.length; s3++)
        if ((d3 = r3[s3]) && "setAttribute" in d3 == !!b2 && (b2 ? d3.localName === b2 : 3 === d3.nodeType)) {
          l3 = d3, r3[s3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === b2)
        return document.createTextNode(k4);
      l3 = document.createElementNS(o3, b2, k4.is && k4), r3 = null, e3 = false;
    }
    if (null === b2)
      m3 === k4 || e3 && l3.data === k4 || (l3.data = k4);
    else {
      if (r3 = r3 && n.call(l3.childNodes), m3 = t3.props || h, !e3 && null != r3)
        for (m3 = {}, s3 = 0; s3 < l3.attributes.length; s3++)
          m3[(d3 = l3.attributes[s3]).name] = d3.value;
      for (s3 in m3)
        if (d3 = m3[s3], "children" == s3)
          ;
        else if ("dangerouslySetInnerHTML" == s3)
          p3 = d3;
        else if ("key" !== s3 && !(s3 in k4)) {
          if ("value" == s3 && "defaultValue" in k4 || "checked" == s3 && "defaultChecked" in k4)
            continue;
          A(l3, s3, null, d3, o3);
        }
      for (s3 in k4)
        d3 = k4[s3], "children" == s3 ? v3 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? _3 = d3 : "checked" == s3 ? g4 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m3[s3] === d3 || A(l3, s3, d3, m3[s3], o3);
      if (a3)
        e3 || p3 && (a3.__html === p3.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u3.__k = [];
      else if (p3 && (l3.innerHTML = ""), S(l3, y(v3) ? v3 : [v3], u3, t3, i3, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o3, r3, f3, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3)
        for (s3 = r3.length; s3--; )
          null != r3[s3] && w(r3[s3]);
      e3 || (s3 = "value", void 0 !== _3 && (_3 !== l3[s3] || "progress" === b2 && !_3 || "option" === b2 && _3 !== m3[s3]) && A(l3, s3, _3, m3[s3], o3), s3 = "checked", void 0 !== g4 && g4 !== l3[s3] && A(l3, s3, g4, m3[s3], o3));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && V(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = _(k, null, [u3]), r3 || h, h, t3.namespaceURI, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
  }
  function D(n2, l3) {
    B(n2, l3, D);
  }
  function E(l3, u3, t3) {
    var i3, o3, r3, f3, e3 = d({}, l3.props);
    for (r3 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : e3[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), g(l3.type, e3, i3 || l3.key, o3 || l3.ref, null);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + a++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, t3;
      return this.getChildContext || (u4 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h, p, v, y;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      h = {};
      p = [];
      v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      y = Array.isArray;
      n = p.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
      }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function h2(n2, t3) {
    e2.__h && e2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({ __V: c2 }), u3.__[n2];
  }
  function p2(n2) {
    return o2 = 1, y2(D2, n2);
  }
  function y2(n2, u3, i3) {
    var o3 = h2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function _2(n2, u3) {
    var i3 = h2(t2++, 3);
    !e2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r2.__H.__h.push(i3));
  }
  function A2(n2, u3) {
    var i3 = h2(t2++, 4);
    !e2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r2.__h.push(i3));
  }
  function F2(n2) {
    return o2 = 5, q2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, t3, r3) {
    o2 = 6, A2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function q2(n2, r3) {
    var u3 = h2(t2++, 7);
    return C2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function x2(n2, t3) {
    return o2 = 8, q2(function() {
      return n2;
    }, t3);
  }
  function P2(n2) {
    var u3 = r2.context[n2.__c], i3 = h2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function V2(n2, t3) {
    e2.useDebugValue && e2.useDebugValue(t3 ? t3(n2) : n2);
  }
  function g2() {
    var n2 = h2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, d2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l;
      a2 = e2.__b;
      v2 = e2.__r;
      l2 = e2.diffed;
      m2 = e2.__c;
      s2 = e2.unmount;
      d2 = e2.__;
      e2.__b = function(n2) {
        r2 = null, a2 && a2(n2);
      }, e2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
      }, e2.__r = function(n2) {
        v2 && v2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, e2.diffed = function(n2) {
        l2 && l2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
        })), u2 = r2 = null;
      }, e2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], e2.__e(r3, n3.__v);
          }
        }), m2 && m2(n2, t3);
      }, e2.unmount = function(n2) {
        s2 && s2(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function E2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function C3(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function x3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : E2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, _(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = w3, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function A3(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return A3(n3, t3, e3);
    })), n2;
  }
  function D3(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return D3(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function O2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function F3(n2) {
    var e3, r3, u3;
    function o3(o4) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return _(r3, o4);
    }
    return o3.displayName = "Lazy", o3.__f = true, o3;
  }
  function U() {
    this.u = null, this.o = null;
  }
  function W(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function P3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      B(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), B(_(W, { context: e3.context }, n2.__v), e3.l);
  }
  function j3(n2, e3) {
    var r3 = _(P3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function q3(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), B(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function G2(n2, t3, e3) {
    return D(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function K() {
  }
  function Q() {
    return this.cancelBubble;
  }
  function X() {
    return this.defaultPrevented;
  }
  function cn(n2) {
    return _.bind(null, n2);
  }
  function fn(n2) {
    return !!n2 && n2.$$typeof === z3;
  }
  function an(n2) {
    return fn(n2) && n2.type === k;
  }
  function sn(n2) {
    return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
  }
  function hn(n2) {
    return fn(n2) ? E.apply(null, arguments) : n2;
  }
  function vn(n2) {
    return !!n2.__k && (B(null, n2), true);
  }
  function dn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  function _n(n2) {
    n2();
  }
  function bn(n2) {
    return n2;
  }
  function Sn() {
    return [false, _n];
  }
  function Cn(n2, t3) {
    var e3 = t3(), r3 = p2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o3 = r3[1];
    return A2(function() {
      u3.__ = e3, u3.v = t3, xn(u3) && o3({ h: u3 });
    }, [n2, e3, t3]), _2(function() {
      return xn(u3) && o3({ h: u3 }), n2(function() {
        xn(u3) && o3({ h: u3 });
      });
    }, [n2]), e3;
  }
  function xn(n2) {
    var t3, e3, r3 = n2.v, u3 = n2.__;
    try {
      var o3 = r3();
      return !((t3 = u3) === (e3 = o3) && (0 !== t3 || 1 / t3 == 1 / e3) || t3 != t3 && e3 != e3);
    } catch (n3) {
      return true;
    }
  }
  var R, w3, I2, N2, M2, T3, V3, z3, B3, H2, Z, Y, $2, J, nn, tn, en, rn, un, on, pn, mn, yn, gn, En, Rn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (C3.prototype = new b()).isPureReactComponent = true, C3.prototype.shouldComponentUpdate = function(n2, t3) {
        return E2(this.props, n2) || E2(this.state, t3);
      };
      R = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
      };
      w3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      I2 = function(n2, t3) {
        return null == n2 ? null : H(H(n2).map(t3));
      };
      N2 = { map: I2, forEach: I2, count: function(n2) {
        return n2 ? H(n2).length : 0;
      }, only: function(n2) {
        var t3 = H(n2);
        if (1 !== t3.length)
          throw "Children.only";
        return t3[0];
      }, toArray: H };
      M2 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; )
            if ((u3 = o3.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        M2(n2, t3, e3, r3);
      };
      T3 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), T3 && T3(n2);
      }, (L2.prototype = new b()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = O2(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = D3(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        };
        r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, L2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, L2.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = A3(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && _(k, null, n2.fallback);
        return i3 && (i3.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i3];
      };
      V3 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (U.prototype = new b()).__a = function(n2) {
        var t3 = this, e3 = O2(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), V3(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, U.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = H(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, U.prototype.componentDidUpdate = U.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          V3(n2, e3, t3);
        });
      };
      z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      H2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Z = /[A-Z0-9]/g;
      Y = "undefined" != typeof document;
      $2 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      J = l.event;
      l.event = function(n2) {
        return J && (n2 = J(n2)), n2.persist = K, n2.isPropagationStopped = Q, n2.isDefaultPrevented = X, n2.nativeEvent = n2;
      };
      tn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      en = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o3 in t3) {
            var i3 = t3[o3];
            if (!("value" === o3 && "defaultValue" in t3 && null == i3 || Y && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
              var l3 = o3.toLowerCase();
              "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : "translate" === l3 && "no" === i3 ? i3 = false : "ondoubleclick" === l3 ? o3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || $2(t3.type) ? "onfocus" === l3 ? o3 = "onfocusin" : "onblur" === l3 ? o3 = "onfocusout" : H2.test(o3) ? o3 = l3 : -1 === e3.indexOf("-") && B3.test(o3) ? o3 = o3.replace(Z, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o3 = "oninput", "oninput" === l3 && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", tn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = z3, en && en(n2);
      };
      rn = l.__r;
      l.__r = function(n2) {
        rn && rn(n2), nn = n2.__c;
      };
      un = l.diffed;
      l.diffed = function(n2) {
        un && un(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), nn = null;
      };
      on = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return nn.__n[n2.__c].props.value;
      }, useCallback: x2, useContext: P2, useDebugValue: V2, useDeferredValue: bn, useEffect: _2, useId: g2, useImperativeHandle: T2, useInsertionEffect: gn, useLayoutEffect: A2, useMemo: q2, useReducer: y2, useRef: F2, useState: p2, useSyncExternalStore: Cn, useTransition: Sn } } };
      pn = function(n2, t3) {
        return n2(t3);
      };
      mn = function(n2, t3) {
        return n2(t3);
      };
      yn = k;
      gn = A2;
      En = fn;
      Rn = { useState: p2, useId: g2, useReducer: y2, useEffect: _2, useLayoutEffect: A2, useInsertionEffect: gn, useTransition: Sn, useDeferredValue: bn, useSyncExternalStore: Cn, startTransition: _n, useRef: F2, useImperativeHandle: T2, useMemo: q2, useCallback: x2, useContext: P2, useDebugValue: V2, version: "17.0.2", Children: N2, render: q3, hydrate: G2, unmountComponentAtNode: vn, createPortal: j3, createElement: _, createContext: G, createFactory: cn, cloneElement: hn, createRef: m, Fragment: k, isValidElement: fn, isElement: En, isFragment: an, isMemo: sn, findDOMNode: dn, Component: b, PureComponent: C3, memo: x3, forwardRef: k3, flushSync: mn, unstable_batchedUpdates: pn, StrictMode: yn, Suspense: L2, SuspenseList: U, lazy: F3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: on };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js
  function createComponent(fn2) {
    return k3(fn2);
  }
  var init_create_component = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js"() {
      init_compat_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js
  function noop() {
  }
  var init_no_op = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js"() {
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/7066d872-53b4-4c67-8665-458689269ee7/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/7066d872-53b4-4c67-8665-458689269ee7/loading-indicator.module.js"() {
      if (document.getElementById("d85ae92174") === null) {
        const element = document.createElement("style");
        element.id = "d85ae92174";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  var LoadingIndicator;
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_component();
      init_loading_indicator_module();
      LoadingIndicator = createComponent(function(_a, ref) {
        var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
        return _(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref, class: loading_indicator_module_default.loadingIndicator }),
          _(
            "svg",
            { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
              fill: `var(--figma-color-icon-${color})`
            } },
            _("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
          )
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/00738b70-7098-4de2-98a3-c377f0d13327/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/00738b70-7098-4de2-98a3-c377f0d13327/button.module.js"() {
      if (document.getElementById("743e5f6ac8") === null) {
        const element = document.createElement("style");
        element.id = "743e5f6ac8";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  var Button;
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_create_component();
      init_no_op();
      init_loading_indicator();
      init_button_module();
      Button = createComponent(function(_a, ref) {
        var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick = noop, onKeyDown = noop, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "onKeyDown", "propagateEscapeKeyDown", "secondary"]);
        const handleKeyDown = x2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
          }
        }, [onKeyDown, propagateEscapeKeyDown]);
        return _(
          "div",
          { class: createClassName([
            button_module_default.button,
            secondary === true ? button_module_default.secondary : button_module_default.default,
            danger === true ? button_module_default.danger : null,
            fullWidth === true ? button_module_default.fullWidth : null,
            disabled === true ? button_module_default.disabled : null,
            loading === true ? button_module_default.loading : null
          ]) },
          loading === true ? _(
            "div",
            { class: button_module_default.loadingIndicator },
            _(LoadingIndicator, null)
          ) : null,
          _(
            "button",
            __spreadProps(__spreadValues({}, rest), { ref, disabled: disabled === true, onClick: loading === true ? void 0 : onClick, onKeyDown: handleKeyDown, tabIndex: 0 }),
            _("div", { class: button_module_default.children }, children)
          )
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/21c12b2f-a25a-4f38-bc4b-525378114496/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/21c12b2f-a25a-4f38-bc4b-525378114496/icon.module.js"() {
      if (document.getElementById("90c77ada31") === null) {
        const element = document.createElement("style");
        element.id = "90c77ada31";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return createComponent(function(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return _(
        "svg",
        __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: {
          fill: typeof color === "undefined" ? "currentColor" : `var(--figma-color-icon-${color})`
        }, width, xmlns: "http://www.w3.org/2000/svg" }),
        _("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" })
      );
    });
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_create_component();
      init_icon_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js
  var IconControlCheckboxChecked12;
  var init_icon_control_checkbox_checked_12 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js"() {
      init_create_icon();
      IconControlCheckboxChecked12 = createIcon("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024z", { height: 12, width: 12 });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/6d2b58f1-2540-46cb-81c3-0dd38556cddd/checkbox.module.js
  var checkbox_module_default;
  var init_checkbox_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/6d2b58f1-2540-46cb-81c3-0dd38556cddd/checkbox.module.js"() {
      if (document.getElementById("87c966850c") === null) {
        const element = document.createElement("style");
        element.id = "87c966850c";
        element.textContent = `._checkbox_hvyza_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._input_hvyza_6 {
  position: absolute;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.checkbox\` */
  top: -8px;
  right: -16px;
  bottom: -8px;
  left: -16px;
  display: block;
  width: calc(100% + 32px);
}
._disabled_hvyza_18 ._input_hvyza_6 {
  cursor: not-allowed;
}

._fill_hvyza_22,
._border_hvyza_23 {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-2);
}

._border_hvyza_23 {
  border: 1px solid var(--figma-color-border-strong);
}
._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:focus ~ ._border_hvyza_23 {
  border-color: var(--figma-color-border-brand-strong);
  box-shadow: 0 0 0 1px var(--figma-color-border-brand-strong);
}
._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:checked ~ ._border_hvyza_23 {
  border: 0;
}
._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:checked:focus ~ ._border_hvyza_23 {
  box-shadow:
    0 0 0 1px var(--figma-color-bg),
    0 0 0 2px var(--figma-color-border-brand-strong);
}
._disabled_hvyza_18 ._input_hvyza_6 ~ ._border_hvyza_23 {
  border-color: var(--figma-color-border-disabled-strong);
}
._disabled_hvyza_18 ._input_hvyza_6:checked ~ ._border_hvyza_23 {
  border: 0;
}

._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:checked ~ ._fill_hvyza_22 {
  background-color: var(--figma-color-bg-brand);
}
._disabled_hvyza_18 ._input_hvyza_6:checked ~ ._fill_hvyza_22 {
  background-color: var(--figma-color-bg-disabled);
}

._checkIcon_hvyza_61 {
  color: var(--figma-color-icon-onbrand);
}
._disabled_hvyza_18 ._checkIcon_hvyza_61 {
  color: var(--figma-color-icon-ondisabled);
}

._children_hvyza_68 {
  min-height: 12px;
  padding: 2px 0 0 20px;
  color: var(--figma-color-text);
}
._disabled_hvyza_18 ._children_hvyza_68 {
  opacity: var(--opacity-30);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7R0FFQyxFQUFFLDhEQUE4RDtFQUNqRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFOztvREFFa0Q7QUFDcEQ7QUFDQTtFQUNFLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogdmFyKFxuICAgIC0tei1pbmRleC0xXG4gICk7IC8qIHN0YWNrIGAuaW5wdXRgIG92ZXIgYWxsIG90aGVyIGVsZW1lbnRzIHdpdGhpbiBgLmNoZWNrYm94YCAqL1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiAtMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZmlsbCxcbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zdHJvbmcpO1xufVxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpjaGVja2VkOmZvY3VzIH4gLmJvcmRlciB7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAwIDAgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJnKSxcbiAgICAwIDAgMCAycHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0IH4gLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQ6Y2hlY2tlZCB+IC5maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xufVxuXG4uY2hlY2tJY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGlzYWJsZWQgLmNoZWNrSWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBtaW4taGVpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiAycHggMCAwIDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuY2hpbGRyZW4ge1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      checkbox_module_default = { "checkbox": "_checkbox_hvyza_1", "input": "_input_hvyza_6", "disabled": "_disabled_hvyza_18", "fill": "_fill_hvyza_22", "border": "_border_hvyza_23", "checkIcon": "_checkIcon_hvyza_61", "children": "_children_hvyza_68" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js
  var Checkbox;
  var init_checkbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_control_checkbox_checked_12();
      init_create_class_name();
      init_create_component();
      init_no_op();
      init_checkbox_module();
      Checkbox = createComponent(function(_a, ref) {
        var _b = _a, { children, disabled = false, onChange = noop, onKeyDown = noop, onValueChange = noop, propagateEscapeKeyDown = true, value: value2 } = _b, rest = __objRest(_b, ["children", "disabled", "onChange", "onKeyDown", "onValueChange", "propagateEscapeKeyDown", "value"]);
        const handleChange = x2(function(event) {
          onChange(event);
          const newValue = event.currentTarget.checked === true;
          onValueChange(newValue);
        }, [onChange, onValueChange]);
        const handleKeyDown = x2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
          }
        }, [onKeyDown, propagateEscapeKeyDown]);
        return _(
          "label",
          { class: createClassName([
            checkbox_module_default.checkbox,
            disabled === true ? checkbox_module_default.disabled : null
          ]) },
          _("input", __spreadProps(__spreadValues({}, rest), { ref, checked: value2 === true, class: checkbox_module_default.input, disabled: disabled === true, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: 0, type: "checkbox" })),
          _("div", { class: checkbox_module_default.fill }, value2 === true ? _(
            "div",
            { class: checkbox_module_default.checkIcon },
            _(IconControlCheckboxChecked12, null)
          ) : null),
          _("div", { class: checkbox_module_default.border }),
          _("div", { class: checkbox_module_default.children }, children)
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/7d3ef16d-e16c-4270-88f6-dc6ce164869e/menu.module.js
  var menu_module_default;
  var init_menu_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/7d3ef16d-e16c-4270-88f6-dc6ce164869e/menu.module.js"() {
      if (document.getElementById("407b7f2821") === null) {
        const element = document.createElement("style");
        element.id = "407b7f2821";
        element.textContent = `._menu_c5se2_1 {
  position: absolute;
  z-index: var(--z-index-2);
  left: 0;
  min-width: 100%;
  padding: var(--space-extra-small) 0;
  border-radius: var(--border-radius-2);
  background-color: #1e1e1e; /* FIXME */
  box-shadow: var(--box-shadow-menu);
  color: rgba(255, 255, 255, 1); /* FIXME */
  font-size: var(--font-size-12);
  overflow-y: auto;
}
._menu_c5se2_1::-webkit-scrollbar {
  display: none;
}
._menu_c5se2_1:empty {
  display: none;
}

._hidden_c5se2_21 {
  position: fixed;
  pointer-events: none;
  visibility: hidden;
}

@media screen and (-webkit-min-device-pixel-ratio: 1.5),
  screen and (min-resolution: 1.5dppx) {
  ._menu_c5se2_1 {
    -webkit-font-smoothing: antialiased;
  }
}

._optionHeader_c5se2_34,
._optionValue_c5se2_35 {
  overflow: hidden;
  padding: 4px var(--space-medium) 4px 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._optionHeader_c5se2_34 {
  color: rgba(255, 255, 255, 0.7); /* FIXME */
  font-size: var(--font-size-12);
}

._optionValue_c5se2_35 {
  position: relative;
}
._optionValueSelected_c5se2_50 {
  background-color: var(--figma-color-bg-brand);
}
._optionValueDisabled_c5se2_53 {
  color: rgba(255, 255, 255, 0.4); /* FIXME */
}

._optionSeparator_c5se2_57 {
  width: 100%;
  height: 1px;
  margin: var(--space-extra-small) 0;
  background-color: #444444; /* FIXME */
}

._input_c5se2_64 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

._checkIcon_c5se2_75 {
  position: absolute;
  top: 5px;
  left: var(--space-extra-small);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsT0FBTztFQUNQLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMscUNBQXFDO0VBQ3JDLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsa0NBQWtDO0VBQ2xDLDZCQUE2QixFQUFFLFVBQVU7RUFDekMsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTtJQUNFLG1DQUFtQztFQUNyQztBQUNGOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQixFQUFFLFVBQVU7RUFDM0MsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLCtCQUErQixFQUFFLFVBQVU7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtDQUFrQztFQUNsQyx5QkFBeUIsRUFBRSxVQUFVO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTIpO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlOyAvKiBGSVhNRSAqL1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LW1lbnUpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgLyogRklYTUUgKi9cbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMTIpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51OmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpIHtcbiAgLm1lbnUge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG59XG5cbi5vcHRpb25IZWFkZXIsXG4ub3B0aW9uVmFsdWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0cHggdmFyKC0tc3BhY2UtbWVkaXVtKSA0cHggMzJweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5vcHRpb25IZWFkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyAvKiBGSVhNRSAqL1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xMik7XG59XG5cbi5vcHRpb25WYWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcHRpb25WYWx1ZVNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xufVxuLm9wdGlvblZhbHVlRGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAvKiBGSVhNRSAqL1xufVxuXG4ub3B0aW9uU2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0OyAvKiBGSVhNRSAqL1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGVja0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      menu_module_default = { "menu": "_menu_c5se2_1", "hidden": "_hidden_c5se2_21", "optionHeader": "_optionHeader_c5se2_34", "optionValue": "_optionValue_c5se2_35", "optionValueSelected": "_optionValueSelected_c5se2_50", "optionValueDisabled": "_optionValueDisabled_c5se2_53", "optionSeparator": "_optionSeparator_c5se2_57", "input": "_input_c5se2_64", "checkIcon": "_checkIcon_c5se2_75" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js
  function useMouseDownOutside(options) {
    const { ref, onMouseDownOutside } = options;
    _2(function() {
      function handleBlur() {
        onMouseDownOutside();
      }
      function handleMouseDown(event) {
        const element = getCurrentFromRef(ref);
        if (element === event.target || element.contains(event.target)) {
          return;
        }
        onMouseDownOutside();
      }
      window.addEventListener("blur", handleBlur);
      window.addEventListener("mousedown", handleMouseDown);
      return function() {
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("mousedown", handleMouseDown);
      };
    }, [ref, onMouseDownOutside]);
  }
  var init_use_mouse_down_outside = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js
  function useScrollableMenu(options) {
    const { itemIdDataAttributeName, menuElementRef, selectedId, setSelectedId } = options;
    const getItemElements = x2(function() {
      return Array.from(getCurrentFromRef(menuElementRef).querySelectorAll(`[${itemIdDataAttributeName}]`)).filter(function(element) {
        return element.hasAttribute("disabled") === false;
      });
    }, [itemIdDataAttributeName, menuElementRef]);
    const findIndexByItemId = x2(function(id) {
      if (id === null) {
        return -1;
      }
      const index = getItemElements().findIndex(function(element) {
        return element.getAttribute(itemIdDataAttributeName) === id;
      });
      if (index === -1) {
        throw new Error("`index` is `-1`");
      }
      return index;
    }, [getItemElements, itemIdDataAttributeName]);
    const updateScrollPosition = x2(function(id) {
      const itemElements = getItemElements();
      const index = findIndexByItemId(id);
      const selectedElement = itemElements[index];
      const selectedElementOffsetTop = selectedElement.getBoundingClientRect().top;
      const menuElement = getCurrentFromRef(menuElementRef);
      const menuElementOffsetTop = menuElement.getBoundingClientRect().top;
      if (selectedElementOffsetTop < menuElementOffsetTop) {
        selectedElement.scrollIntoView();
        return;
      }
      const offsetBottom = selectedElementOffsetTop + selectedElement.offsetHeight;
      if (offsetBottom > menuElementOffsetTop + menuElement.offsetHeight) {
        selectedElement.scrollIntoView();
      }
    }, [findIndexByItemId, getItemElements, menuElementRef]);
    const handleScrollableMenuKeyDown = x2(function(event) {
      const key = event.key;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const itemElements = getItemElements();
        const index = findIndexByItemId(selectedId);
        let newIndex;
        if (key === "ArrowDown") {
          newIndex = index === -1 || index === itemElements.length - 1 ? 0 : index + 1;
        } else {
          newIndex = index === -1 || index === 0 ? itemElements.length - 1 : index - 1;
        }
        const selectedElement = itemElements[newIndex];
        const newSelectedId = selectedElement.getAttribute(itemIdDataAttributeName);
        setSelectedId(newSelectedId);
        updateScrollPosition(newSelectedId);
      }
    }, [
      getItemElements,
      findIndexByItemId,
      itemIdDataAttributeName,
      setSelectedId,
      selectedId,
      updateScrollPosition
    ]);
    const handleScrollableMenuItemMouseMove = x2(function(event) {
      const id = event.currentTarget.getAttribute(itemIdDataAttributeName);
      if (id !== selectedId) {
        setSelectedId(id);
      }
    }, [itemIdDataAttributeName, selectedId, setSelectedId]);
    return {
      handleScrollableMenuItemMouseMove,
      handleScrollableMenuKeyDown
    };
  }
  var init_use_scrollable_menu = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-8/icon-control-chevron-down-8.js
  var IconControlChevronDown8;
  var init_icon_control_chevron_down_8 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-8/icon-control-chevron-down-8.js"() {
      init_create_icon();
      IconControlChevronDown8 = createIcon("m3.64641 6.35352-3-3 .70711-.70711 2.64644 2.64645 2.64645-2.64645.70711.70711-3 3-.35356.35355z", { height: 8, width: 8 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-menu-checkmark-checked-16.js
  var IconMenuCheckmarkChecked16;
  var init_icon_menu_checkmark_checked_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-menu-checkmark-checked-16.js"() {
      init_create_icon();
      IconMenuCheckmarkChecked16 = createIcon("M13.2069 5.20724 7.70688 10.7072l-.70711.7072-.70711-.7072-3-2.99996 1.41422-1.41421 2.29289 2.29289 4.79293-4.79289z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/constants.js
  var INVALID_ID, VIEWPORT_MARGIN, ITEM_ID_DATA_ATTRIBUTE_NAME;
  var init_constants = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/constants.js"() {
      INVALID_ID = null;
      VIEWPORT_MARGIN = 12;
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-item-id";
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/c63245ae-e987-4f1a-b476-548ac1c5406e/dropdown.module.js
  var dropdown_module_default;
  var init_dropdown_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/c63245ae-e987-4f1a-b476-548ac1c5406e/dropdown.module.js"() {
      if (document.getElementById("3a2082ce40") === null) {
        const element = document.createElement("style");
        element.id = "3a2082ce40";
        element.textContent = `._dropdown_l9ibg_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  width: 100%;
  min-width: 0; /* See https://css-tricks.com/flexbox-truncated-text/ */
  height: 28px;
  align-items: center;
  padding-left: var(--space-extra-small);
  color: var(--figma-color-text);
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus-within {
  z-index: var(--z-index-2); /* stack \`.dropdown\` over its sibling elements */
  outline: 0;
}

._menu_l9ibg_17 {
  position: fixed;
}

._disabled_l9ibg_12 {
  cursor: not-allowed;
}

._icon_l9ibg_25 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  text-align: center;
  transform: translate(-50%, -50%);
}
._disabled_l9ibg_12 ._icon_l9ibg_25 {
  color: var(--figma-color-icon-disabled);
}

._empty_l9ibg_37 {
  flex-grow: 1;
}

._value_l9ibg_41 {
  overflow: hidden;
  margin-right: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):hover ._value_l9ibg_41,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus ._value_l9ibg_41,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus-within ._value_l9ibg_41 {
  flex-grow: 1;
}
._disabled_l9ibg_12 ._value_l9ibg_41 {
  color: var(--figma-color-text-disabled);
}
._hasIcon_l9ibg_55 ._value_l9ibg_41 {
  padding-left: var(--space-extra-large);
}

._placeholder_l9ibg_59 {
  color: var(--figma-color-text-tertiary);
}

._chevronIcon_l9ibg_63 {
  margin-right: var(--space-extra-small);
  color: var(--figma-color-icon-secondary);
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):hover ._chevronIcon_l9ibg_63 {
  color: var(--figma-color-icon);
}
._disabled_l9ibg_12 ._chevronIcon_l9ibg_63 {
  color: var(--figma-color-icon-disabled);
}

._border_l9ibg_74 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
}
._hasBorder_l9ibg_83 ._border_l9ibg_74,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):not(:focus):hover ._border_l9ibg_74 {
  border-color: var(--figma-color-border);
}
._dropdown_l9ibg_1:focus ._border_l9ibg_74 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_l9ibg_94 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):hover ._underline_l9ibg_94,
._dropdown_l9ibg_1:not(._disabled_l9ibg_12):focus ._underline_l9ibg_94 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBRSx1REFBdUQ7RUFDckUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx5QkFBeUIsRUFBRSxnREFBZ0Q7RUFDM0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw2QkFBNkI7RUFDN0IscUNBQXFDO0FBQ3ZDO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDsgLyogU2VlIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZmxleGJveC10cnVuY2F0ZWQtdGV4dC8gKi9cbiAgaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmZvY3VzLXdpdGhpbiB7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMik7IC8qIHN0YWNrIGAuZHJvcGRvd25gIG92ZXIgaXRzIHNpYmxpbmcgZWxlbWVudHMgKi9cbiAgb3V0bGluZTogMDtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZGlzYWJsZWQgLmljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG59XG5cbi5lbXB0eSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnZhbHVlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmhvdmVyIC52YWx1ZSxcbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpmb2N1cyAudmFsdWUsXG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMtd2l0aGluIC52YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5kaXNhYmxlZCAudmFsdWUge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG4uaGFzSWNvbiAudmFsdWUge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtdGVydGlhcnkpO1xufVxuXG4uY2hldnJvbkljb24ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcbn1cbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpob3ZlciAuY2hldnJvbkljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG59XG4uZGlzYWJsZWQgLmNoZXZyb25JY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOm5vdCg6Zm9jdXMpOmhvdmVyIC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4uZHJvcGRvd246Zm9jdXMgLmJvcmRlciB7XG4gIHRvcDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cblxuLnVuZGVybGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xufVxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmhvdmVyIC51bmRlcmxpbmUsXG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMgLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */`;
        document.head.append(element);
      }
      dropdown_module_default = { "dropdown": "_dropdown_l9ibg_1", "disabled": "_disabled_l9ibg_12", "menu": "_menu_l9ibg_17", "icon": "_icon_l9ibg_25", "empty": "_empty_l9ibg_37", "value": "_value_l9ibg_41", "hasIcon": "_hasIcon_l9ibg_55", "placeholder": "_placeholder_l9ibg_59", "chevronIcon": "_chevronIcon_l9ibg_63", "border": "_border_l9ibg_74", "hasBorder": "_hasBorder_l9ibg_83", "underline": "_underline_l9ibg_94" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js
  function updateMenuElementLayout(rootElement, menuElement, selectedId) {
    const rootElementBoundingClientRect = rootElement.getBoundingClientRect();
    const rootWidth = rootElement.offsetWidth;
    const rootHeight = rootElement.offsetHeight;
    const rootLeft = rootElementBoundingClientRect.left;
    const rootTop = rootElementBoundingClientRect.top;
    menuElement.style.minWidth = `${rootWidth}px`;
    const menuElementMaxWidth = window.innerWidth - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxWidth = `${menuElementMaxWidth}px`;
    const menuElementMaxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxHeight = `${menuElementMaxHeight}px`;
    const menuWidth = menuElement.offsetWidth;
    const menuHeight = menuElement.offsetHeight;
    const menuScrollHeight = menuElement.scrollHeight;
    const menuPaddingTop = parseInt(window.getComputedStyle(menuElement).paddingTop, 10);
    const labelElement = getSelectedLabelElement(menuElement, selectedId);
    const left = computeLeft({
      menuWidth,
      rootLeft
    });
    menuElement.style.left = `${left}px`;
    const top = computeTop({
      menuHeight,
      rootTop,
      selectedTop: labelElement.offsetTop
    });
    menuElement.style.top = `${top}px`;
    const isScrollable = menuScrollHeight > menuHeight;
    if (isScrollable === false) {
      return;
    }
    menuElement.scrollTop = computeScrollTop({
      menuHeight,
      menuPaddingTop,
      menuScrollHeight,
      rootHeight,
      rootTop,
      selectedTop: labelElement.offsetTop
    });
  }
  function getSelectedLabelElement(menuElement, selectedId) {
    const inputElement = menuElement.querySelector(selectedId === INVALID_ID ? `[${ITEM_ID_DATA_ATTRIBUTE_NAME}]` : `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
    if (inputElement === null) {
      throw new Error("`inputElement` is `null`");
    }
    const labelElement = inputElement.parentElement;
    if (labelElement === null) {
      throw new Error("`labelElement` is `null`");
    }
    return labelElement;
  }
  function computeLeft(options) {
    const { menuWidth, rootLeft } = options;
    if (rootLeft <= VIEWPORT_MARGIN) {
      return VIEWPORT_MARGIN;
    }
    const viewportWidth = window.innerWidth;
    if (rootLeft + menuWidth > viewportWidth - VIEWPORT_MARGIN) {
      return viewportWidth - VIEWPORT_MARGIN - menuWidth;
    }
    return rootLeft;
  }
  function computeTop(options) {
    const { menuHeight, rootTop, selectedTop } = options;
    const viewportHeight = window.innerHeight;
    if (rootTop <= VIEWPORT_MARGIN || menuHeight === viewportHeight - 2 * VIEWPORT_MARGIN) {
      return VIEWPORT_MARGIN;
    }
    const top = rootTop - selectedTop;
    const minimumTop = VIEWPORT_MARGIN;
    const maximumTop = viewportHeight - VIEWPORT_MARGIN - menuHeight;
    return restrictToRange(top, minimumTop, maximumTop);
  }
  function computeScrollTop(options) {
    const { menuHeight, menuPaddingTop, menuScrollHeight, rootHeight, rootTop, selectedTop } = options;
    const restrictedRootTop = restrictToRange(rootTop, VIEWPORT_MARGIN, window.innerHeight - VIEWPORT_MARGIN - rootHeight + menuPaddingTop / 2);
    const scrollTop = selectedTop - (restrictedRootTop - VIEWPORT_MARGIN);
    const minimumScrollTop = 0;
    const maximumScrollTop = menuScrollHeight - menuHeight;
    return restrictToRange(scrollTop, minimumScrollTop, maximumScrollTop);
  }
  function restrictToRange(number, minimum, maximum) {
    return Math.min(Math.max(number, minimum), maximum);
  }
  var init_update_menu_element_layout = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/private/update-menu-element-layout.js"() {
      init_constants();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js
  function getDropdownOptionValue(option) {
    if (typeof option !== "string") {
      if ("text" in option) {
        return option.text;
      }
      if ("value" in option) {
        return option.value;
      }
    }
    throw new Error("Invariant violation");
  }
  function findOptionIndexByValue(options, value2) {
    if (value2 === null) {
      return -1;
    }
    let index = 0;
    for (const option of options) {
      if (typeof option !== "string" && "value" in option && option.value === value2) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  var Dropdown;
  var init_dropdown = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js"() {
      init_preact_module();
      init_compat_module();
      init_hooks_module();
      init_menu_module();
      init_use_mouse_down_outside();
      init_use_scrollable_menu();
      init_icon_control_chevron_down_8();
      init_icon_menu_checkmark_checked_16();
      init_create_class_name();
      init_create_component();
      init_get_current_from_ref();
      init_no_op();
      init_constants();
      init_dropdown_module();
      init_update_menu_element_layout();
      Dropdown = createComponent(function(_a, ref) {
        var _b = _a, { disabled = false, icon, onChange = noop, onKeyDown = noop, onMouseDown = noop, onValueChange = noop, options, placeholder, propagateEscapeKeyDown = true, value: value2, variant } = _b, rest = __objRest(_b, ["disabled", "icon", "onChange", "onKeyDown", "onMouseDown", "onValueChange", "options", "placeholder", "propagateEscapeKeyDown", "value", "variant"]);
        if (typeof icon === "string" && icon.length !== 1) {
          throw new Error(`String \`icon\` must be a single character: "${icon}"`);
        }
        const rootElementRef = F2(null);
        const menuElementRef = F2(null);
        const [isMenuVisible, setIsMenuVisible] = p2(false);
        const index = findOptionIndexByValue(options, value2);
        if (value2 !== null && index === -1) {
          throw new Error(`Invalid \`value\`: ${value2}`);
        }
        const [selectedId, setSelectedId] = p2(index === -1 ? INVALID_ID : `${index}`);
        const children = typeof options[index] === "undefined" ? "" : getDropdownOptionValue(options[index]);
        const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } = useScrollableMenu({
          itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
          menuElementRef,
          selectedId,
          setSelectedId
        });
        const triggerRootBlur = x2(function() {
          getCurrentFromRef(rootElementRef).blur();
        }, []);
        const triggerRootFocus = x2(function() {
          getCurrentFromRef(rootElementRef).focus();
        }, []);
        const triggerMenuUpdateLayout = x2(function(selectedId2) {
          const rootElement = getCurrentFromRef(rootElementRef);
          const menuElement = getCurrentFromRef(menuElementRef);
          updateMenuElementLayout(rootElement, menuElement, selectedId2);
        }, []);
        const triggerMenuHide = x2(function() {
          setIsMenuVisible(false);
          setSelectedId(INVALID_ID);
        }, []);
        const triggerMenuShow = x2(function() {
          if (isMenuVisible === true) {
            return;
          }
          setIsMenuVisible(true);
          if (value2 === null) {
            triggerMenuUpdateLayout(selectedId);
            return;
          }
          const index2 = findOptionIndexByValue(options, value2);
          if (index2 === -1) {
            throw new Error(`Invalid \`value\`: ${value2}`);
          }
          const newSelectedId = `${index2}`;
          setSelectedId(newSelectedId);
          triggerMenuUpdateLayout(newSelectedId);
        }, [isMenuVisible, options, selectedId, triggerMenuUpdateLayout, value2]);
        const handleRootKeyDown = x2(function(event) {
          onKeyDown(event);
          const key = event.key;
          if (key === "ArrowUp" || key === "ArrowDown") {
            event.preventDefault();
            if (isMenuVisible === false) {
              triggerMenuShow();
              return;
            }
            handleScrollableMenuKeyDown(event);
            return;
          }
          if (key === "Escape") {
            event.preventDefault();
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            if (isMenuVisible === true) {
              triggerMenuHide();
              return;
            }
            triggerRootBlur();
            return;
          }
          if (key === "Enter") {
            event.preventDefault();
            if (isMenuVisible === false) {
              triggerMenuShow();
              return;
            }
            if (selectedId !== INVALID_ID) {
              const selectedElement = getCurrentFromRef(menuElementRef).querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
              if (selectedElement === null) {
                throw new Error("`selectedElement` is `null`");
              }
              selectedElement.checked = true;
              const changeEvent = new window.Event("change", {
                bubbles: true,
                cancelable: true
              });
              selectedElement.dispatchEvent(changeEvent);
            }
            triggerMenuHide();
            return;
          }
          if (key === "Tab") {
            triggerMenuHide();
            return;
          }
        }, [
          handleScrollableMenuKeyDown,
          isMenuVisible,
          onKeyDown,
          propagateEscapeKeyDown,
          selectedId,
          triggerMenuHide,
          triggerMenuShow,
          triggerRootBlur
        ]);
        const handleRootMouseDown = x2(function(event) {
          onMouseDown(event);
          if (isMenuVisible === false) {
            triggerMenuShow();
          }
        }, [isMenuVisible, onMouseDown, triggerMenuShow]);
        const handleMenuMouseDown = x2(function(event) {
          event.stopPropagation();
        }, []);
        const handleOptionChange = x2(function(event) {
          onChange(event);
          const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
          if (id === null) {
            throw new Error("`id` is `null`");
          }
          const optionValue = options[parseInt(id, 10)];
          const newValue = optionValue.value;
          onValueChange(newValue);
          triggerRootFocus();
          triggerMenuHide();
        }, [onChange, onValueChange, options, triggerMenuHide, triggerRootFocus]);
        const handleSelectedOptionClick = x2(function() {
          triggerRootFocus();
          triggerMenuHide();
        }, [triggerMenuHide, triggerRootFocus]);
        const handleMouseDownOutside = x2(function() {
          if (isMenuVisible === false) {
            return;
          }
          triggerMenuHide();
          triggerRootBlur();
        }, [isMenuVisible, triggerRootBlur, triggerMenuHide]);
        useMouseDownOutside({
          onMouseDownOutside: handleMouseDownOutside,
          ref: rootElementRef
        });
        _2(function() {
          function handleWindowScroll() {
            if (isMenuVisible === false) {
              return;
            }
            triggerRootFocus();
            triggerMenuHide();
          }
          window.addEventListener("scroll", handleWindowScroll);
          return function() {
            window.removeEventListener("scroll", handleWindowScroll);
          };
        }, [isMenuVisible, triggerMenuHide, triggerRootFocus]);
        const refCallback = x2(function(rootElement) {
          rootElementRef.current = rootElement;
          if (ref === null) {
            return;
          }
          if (typeof ref === "function") {
            ref(rootElement);
            return;
          }
          ref.current = rootElement;
        }, [ref, rootElementRef]);
        return _(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref: refCallback, class: createClassName([
            dropdown_module_default.dropdown,
            variant === "border" ? dropdown_module_default.hasBorder : null,
            typeof icon !== "undefined" ? dropdown_module_default.hasIcon : null,
            disabled === true ? dropdown_module_default.disabled : null
          ]), onKeyDown: disabled === true ? void 0 : handleRootKeyDown, onMouseDown: handleRootMouseDown, tabIndex: 0 }),
          typeof icon === "undefined" ? null : _("div", { class: dropdown_module_default.icon }, icon),
          value2 === null ? typeof placeholder === "undefined" ? _("div", { class: dropdown_module_default.empty }) : _("div", { class: createClassName([
            dropdown_module_default.value,
            dropdown_module_default.placeholder
          ]) }, placeholder) : _("div", { class: dropdown_module_default.value }, children),
          _(
            "div",
            { class: dropdown_module_default.chevronIcon },
            _(IconControlChevronDown8, null)
          ),
          variant === "underline" ? _("div", { class: dropdown_module_default.underline }) : null,
          _("div", { class: dropdown_module_default.border }),
          j3(_("div", { ref: menuElementRef, class: createClassName([
            menu_module_default.menu,
            dropdown_module_default.menu,
            disabled === true || isMenuVisible === false ? menu_module_default.hidden : null
          ]), onMouseDown: handleMenuMouseDown }, options.map(function(option, index2) {
            if (typeof option === "string") {
              return _("hr", { key: index2, class: menu_module_default.optionSeparator });
            }
            if ("header" in option) {
              return _("h1", { key: index2, class: menu_module_default.optionHeader }, option.header);
            }
            return _(
              "label",
              { key: index2, class: createClassName([
                menu_module_default.optionValue,
                option.disabled === true ? menu_module_default.optionValueDisabled : null,
                option.disabled !== true && `${index2}` === selectedId ? menu_module_default.optionValueSelected : null
              ]) },
              _("input", { checked: value2 === option.value, class: menu_module_default.input, disabled: option.disabled === true, onChange: value2 === option.value ? void 0 : handleOptionChange, onClick: value2 === option.value ? handleSelectedOptionClick : void 0, onMouseMove: handleScrollableMenuItemMouseMove, tabIndex: -1, type: "radio", value: `${option.value}`, [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index2}` }),
              option.value === value2 ? _(
                "div",
                { class: menu_module_default.checkIcon },
                _(IconMenuCheckmarkChecked16, null)
              ) : null,
              typeof option.text === "undefined" ? option.value : option.text
            );
          })), document.body)
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/65cd61e8-f921-4797-ad33-d6dd5fd35052/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/65cd61e8-f921-4797-ad33-d6dd5fd35052/text.module.js"() {
      if (document.getElementById("ad3e4a5ac2") === null) {
        const element = document.createElement("style");
        element.id = "ad3e4a5ac2";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  var Text;
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_text_module();
      Text = createComponent(function(_a) {
        var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
          text_module_default.text,
          text_module_default[align],
          numeric === true ? text_module_default.numeric : null
        ]) }), children);
      });
    }
  });

  // node_modules/hex-rgb/index.js
  function hexRgb(hex, options = {}) {
    if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) {
      throw new TypeError("Expected a valid hex string");
    }
    hex = hex.replace(/^#/, "");
    let alphaFromHex = 1;
    if (hex.length === 8) {
      alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
      hex = hex.slice(0, 6);
    }
    if (hex.length === 4) {
      alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
      hex = hex.slice(0, 3);
    }
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const number = Number.parseInt(hex, 16);
    const red = number >> 16;
    const green = number >> 8 & 255;
    const blue = number & 255;
    const alpha = typeof options.alpha === "number" ? options.alpha : alphaFromHex;
    if (options.format === "array") {
      return [red, green, blue, alpha];
    }
    if (options.format === "css") {
      const alphaString = alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`;
      return `rgb(${red} ${green} ${blue}${alphaString})`;
    }
    return { red, green, blue, alpha };
  }
  var hexCharacters, match3or4Hex, match6or8Hex, nonHexChars, validHexSize;
  var init_hex_rgb = __esm({
    "node_modules/hex-rgb/index.js"() {
      hexCharacters = "a-f\\d";
      match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
      match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
      nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
      validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/convert-hex-color-to-rgb-color.js
  function convertHexColorToRgbColor(hexColor) {
    if (hexColor.length !== 3 && hexColor.length !== 6) {
      return null;
    }
    try {
      const { red, green, blue } = hexRgb(hexColor);
      return {
        b: blue / 255,
        g: green / 255,
        r: red / 255
      };
    } catch (e3) {
      return null;
    }
  }
  var init_convert_hex_color_to_rgb_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/convert-hex-color-to-rgb-color.js"() {
      init_hex_rgb();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/private/named-colors.js
  var NAMED_COLORS;
  var init_named_colors = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/private/named-colors.js"() {
      NAMED_COLORS = {
        aliceblue: "F0F8FF",
        antiquewhite: "FAEBD7",
        aqua: "00FFFF",
        aquamarine: "7FFFD4",
        azure: "F0FFFF",
        beige: "F5F5DC",
        bisque: "FFE4C4",
        black: "000000",
        blanchedalmond: "FFEBCD",
        blue: "0000FF",
        blueviolet: "8A2BE2",
        brown: "A52A2A",
        burlywood: "DEB887",
        cadetblue: "5F9EA0",
        chartreuse: "7FFF00",
        chocolate: "D2691E",
        coral: "FF7F50",
        cornflowerblue: "6495ED",
        cornsilk: "FFF8DC",
        crimson: "DC143C",
        cyan: "00FFFF",
        darkblue: "00008B",
        darkcyan: "008B8B",
        darkgoldenrod: "B8860B",
        darkgray: "A9A9A9",
        darkgreen: "006400",
        darkgrey: "A9A9A9",
        darkkhaki: "BDB76B",
        darkmagenta: "8B008B",
        darkolivegreen: "556B2F",
        darkorange: "FF8C00",
        darkorchid: "9932CC",
        darkred: "8B0000",
        darksalmon: "E9967A",
        darkseagreen: "8FBC8F",
        darkslateblue: "483D8B",
        darkslategray: "2F4F4F",
        darkslategrey: "2F4F4F",
        darkturquoise: "00CED1",
        darkviolet: "9400D3",
        deeppink: "FF1493",
        deepskyblue: "00BFFF",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1E90FF",
        firebrick: "B22222",
        floralwhite: "FFFAF0",
        forestgreen: "228B22",
        fuchsia: "FF00FF",
        gainsboro: "DCDCDC",
        ghostwhite: "F8F8FF",
        gold: "FFD700",
        goldenrod: "DAA520",
        gray: "808080",
        green: "008000",
        greenyellow: "ADFF2F",
        grey: "808080",
        honeydew: "F0FFF0",
        hotpink: "FF69B4",
        indianred: "CD5C5C",
        indigo: "4B0082",
        ivory: "FFFFF0",
        khaki: "F0E68C",
        lavender: "E6E6FA",
        lavenderblush: "FFF0F5",
        lawngreen: "7CFC00",
        lemonchiffon: "FFFACD",
        lightblue: "ADD8E6",
        lightcoral: "F08080",
        lightcyan: "E0FFFF",
        lightgoldenrodyellow: "FAFAD2",
        lightgray: "D3D3D3",
        lightgreen: "90EE90",
        lightgrey: "D3D3D3",
        lightpink: "FFB6C1",
        lightsalmon: "FFA07A",
        lightseagreen: "20B2AA",
        lightskyblue: "87CEFA",
        lightslategray: "778899",
        lightslategrey: "778899",
        lightsteelblue: "B0C4DE",
        lightyellow: "FFFFE0",
        lime: "00FF00",
        limegreen: "32CD32",
        linen: "FAF0E6",
        magenta: "FF00FF",
        maroon: "800000",
        mediumaquamarine: "66CDAA",
        mediumblue: "0000CD",
        mediumorchid: "BA55D3",
        mediumpurple: "9370DB",
        mediumseagreen: "3CB371",
        mediumslateblue: "7B68EE",
        mediumspringgreen: "00FA9A",
        mediumturquoise: "48D1CC",
        mediumvioletred: "C71585",
        midnightblue: "191970",
        mintcream: "F5FFFA",
        mistyrose: "FFE4E1",
        moccasin: "FFE4B5",
        navajowhite: "FFDEAD",
        navy: "000080",
        oldlace: "FDF5E6",
        olive: "808000",
        olivedrab: "6B8E23",
        orange: "FFA500",
        orangered: "FF4500",
        orchid: "DA70D6",
        palegoldenrod: "EEE8AA",
        palegreen: "98FB98",
        paleturquoise: "AFEEEE",
        palevioletred: "DB7093",
        papayawhip: "FFEFD5",
        peachpuff: "FFDAB9",
        peru: "CD853F",
        pink: "FFC0CB",
        plum: "DDA0DD",
        powderblue: "B0E0E6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "FF0000",
        rosybrown: "BC8F8F",
        royalblue: "4169E1",
        saddlebrown: "8B4513",
        salmon: "FA8072",
        sandybrown: "F4A460",
        seagreen: "2E8B57",
        seashell: "FFF5EE",
        sienna: "A0522D",
        silver: "C0C0C0",
        skyblue: "87CEEB",
        slateblue: "6A5ACD",
        slategray: "708090",
        slategrey: "708090",
        snow: "FFFAFA",
        springgreen: "00FF7F",
        steelblue: "4682B4",
        tan: "D2B48C",
        teal: "008080",
        thistle: "D8BFD8",
        tomato: "FF6347",
        turquoise: "40E0D0",
        violet: "EE82EE",
        wheat: "F5DEB3",
        white: "FFFFFF",
        whitesmoke: "F5F5F5",
        yellow: "FFFF00",
        yellowgreen: "9ACD32"
      };
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/convert-named-color-to-hex-color.js
  function convertNamedColorToHexColor(namedColor) {
    const hexColor = NAMED_COLORS[namedColor.toLowerCase()];
    if (typeof hexColor === "undefined") {
      return null;
    }
    return hexColor;
  }
  var init_convert_named_color_to_hex_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/convert-named-color-to-hex-color.js"() {
      init_named_colors();
    }
  });

  // node_modules/rgb-hex/index.js
  function rgbHex(red, green, blue, alpha) {
    let isPercent = (red + (alpha || "")).toString().includes("%");
    if (typeof red === "string" && !green) {
      const parsed = parseCssRgbString(red);
      if (!parsed) {
        throw new TypeError("Invalid or unsupported color format.");
      }
      isPercent = false;
      [red, green, blue, alpha] = parsed;
    } else if (alpha !== void 0) {
      alpha = Number.parseFloat(alpha);
    }
    if (typeof red !== "number" || typeof green !== "number" || typeof blue !== "number" || red > 255 || green > 255 || blue > 255) {
      throw new TypeError("Expected three numbers below 256");
    }
    if (typeof alpha === "number") {
      if (!isPercent && alpha >= 0 && alpha <= 1) {
        alpha = Math.round(255 * alpha);
      } else if (isPercent && alpha >= 0 && alpha <= 100) {
        alpha = Math.round(255 * alpha / 100);
      } else {
        throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
      }
      alpha = (alpha | 1 << 8).toString(16).slice(1);
    } else {
      alpha = "";
    }
    return toHex(red, green, blue, alpha);
  }
  var toHex, parseCssRgbString;
  var init_rgb_hex = __esm({
    "node_modules/rgb-hex/index.js"() {
      toHex = (red, green, blue, alpha) => (blue | green << 8 | red << 16 | 1 << 24).toString(16).slice(1) + alpha;
      parseCssRgbString = (input) => {
        const parts = input.replace(/rgba?\(([^)]+)\)/, "$1").split(/[,\s/]+/).filter(Boolean);
        if (parts.length < 3) {
          return;
        }
        const parseValue = (value2, max) => {
          value2 = value2.trim();
          if (value2.endsWith("%")) {
            return Math.min(Number.parseFloat(value2) * max / 100, max);
          }
          return Math.min(Number.parseFloat(value2), max);
        };
        const red = parseValue(parts[0], 255);
        const green = parseValue(parts[1], 255);
        const blue = parseValue(parts[2], 255);
        let alpha;
        if (parts.length === 4) {
          alpha = parseValue(parts[3], 1);
        }
        return [red, green, blue, alpha];
      };
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/convert-rgb-color-to-hex-color.js
  function convertRgbColorToHexColor(rgbColor) {
    const { r: r3, g: g4, b: b2 } = rgbColor;
    if (r3 < 0 || r3 > 1 || g4 < 0 || g4 > 1 || b2 < 0 || b2 > 1) {
      return null;
    }
    try {
      return rgbHex(Math.round(r3 * 255), Math.round(g4 * 255), Math.round(b2 * 255)).toUpperCase();
    } catch (e3) {
      return null;
    }
  }
  var init_convert_rgb_color_to_hex_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/convert-rgb-color-to-hex-color.js"() {
      init_rgb_hex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/color/is-valid-hex-color.js
  function isValidHexColor(hexColor) {
    return convertHexColorToRgbColor(hexColor) !== null;
  }
  var init_is_valid_hex_color = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/color/is-valid-hex-color.js"() {
      init_convert_hex_color_to_rgb_color();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on2(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function invokeEventHandler(name, args) {
    let invoked = false;
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
        invoked = true;
      }
    }
    if (invoked === false) {
      throw new Error(`No event handler with name \`${name}\``);
    }
  }
  var eventHandlers, currentId, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function(args) {
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = args;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const args = event.data.pluginMessage;
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = event.data.pluginMessage;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_NUMBER, MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_NUMBER = 999999999999999;
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js
  var floatOperandRegex, integerOperandRegex, operatorRegex, operatorSuffixRegex, numbersRegex, invalidCharactersRegex;
  var init_regex = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js"() {
      floatOperandRegex = /^-?\d*(?:\.\d*)?$/;
      integerOperandRegex = /^-?\d*$/;
      operatorRegex = /[+\-*/]/;
      operatorSuffixRegex = /[+\-*/]$/;
      numbersRegex = /\d/;
      invalidCharactersRegex = /[^\d.+\-*/]/;
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js
  function evaluateNumericExpression(value) {
    if (value === "" || numbersRegex.test(value) === false || invalidCharactersRegex.test(value) === true) {
      return null;
    }
    if (operatorRegex.test(value) === true) {
      if (operatorSuffixRegex.test(value) === true) {
        return eval(value.substring(0, value.length - 1));
      }
      return eval(value);
    }
    return parseFloat(value);
  }
  var init_evaluate_numeric_expression = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js
  function isValidNumericInput(value2, options = { integersOnly: false }) {
    const split = (value2[0] === "-" ? value2.substring(1) : value2).split(operatorRegex);
    let i3 = -1;
    while (++i3 < split.length) {
      const operand = split[i3];
      if (operand === "" && i3 !== split.length - 1 || (options.integersOnly === true ? integerOperandRegex : floatOperandRegex).test(operand) === false) {
        return false;
      }
    }
    return true;
  }
  var init_is_valid_numeric_input = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_convert_hex_color_to_rgb_color();
      init_convert_named_color_to_hex_color();
      init_convert_rgb_color_to_hex_color();
      init_is_valid_hex_color();
      init_events();
      init_mixed_values();
      init_evaluate_numeric_expression();
      init_is_valid_numeric_input();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js
  function computeNextValue(inputElement, insertedString) {
    const value2 = inputElement.value;
    const selectionStart = inputElement.selectionStart;
    const selectionEnd = inputElement.selectionEnd;
    return `${value2.substring(0, selectionStart === null ? 0 : selectionStart)}${insertedString}${value2.substring(selectionEnd === null ? 0 : selectionEnd)}`;
  }
  var init_compute_next_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js
  function formatEvaluatedValue(evaluatedValue, value2, suffix) {
    if (evaluatedValue === null) {
      return EMPTY_STRING;
    }
    const significantFiguresCount = countSignificantFigures(nonDigitRegex.test(value2) === true ? `${evaluatedValue}` : value2);
    return appendSuffix(formatSignificantFigures(evaluatedValue, significantFiguresCount), suffix);
  }
  function countSignificantFigures(value2) {
    const result = fractionalPartRegex.exec(value2);
    if (result === null) {
      return 0;
    }
    return result[1].length;
  }
  function formatSignificantFigures(value2, significantFiguresCount) {
    if (significantFiguresCount === 0) {
      return `${value2}`;
    }
    const result = fractionalPartRegex.exec(`${value2}`);
    if (result === null) {
      return `${value2}.${"0".repeat(significantFiguresCount)}`;
    }
    const fractionalPart = result[1];
    const count = significantFiguresCount - fractionalPart.length;
    return `${value2}${"0".repeat(count)}`;
  }
  function appendSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    if (string === EMPTY_STRING) {
      return EMPTY_STRING;
    }
    return `${string}${suffix}`;
  }
  var EMPTY_STRING, fractionalPartRegex, nonDigitRegex;
  var init_format_evaluated_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js"() {
      EMPTY_STRING = "";
      fractionalPartRegex = /\.([^.]+)/;
      nonDigitRegex = /[^\d.]/;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js
  function restrictValue(value2, minimum, maximum) {
    if (typeof minimum !== "undefined") {
      if (typeof maximum !== "undefined") {
        return Math.min(Math.max(value2, minimum), maximum);
      }
      return Math.max(value2, minimum);
    }
    if (typeof maximum !== "undefined") {
      return Math.min(value2, maximum);
    }
    return value2;
  }
  function evaluateValue(value2, suffix) {
    if (value2 === MIXED_STRING) {
      return MIXED_NUMBER;
    }
    if (value2 === EMPTY_STRING2) {
      return null;
    }
    return evaluateNumericExpression(trimSuffix(value2, suffix));
  }
  function evaluateValueWithDelta(value2, delta) {
    return parseFloat((value2 + delta).toFixed(FRACTION_DIGITS));
  }
  function trimSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING2);
  }
  var FRACTION_DIGITS, EMPTY_STRING2, RawTextboxNumeric;
  var init_raw_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_component();
      init_get_current_from_ref();
      init_no_op();
      init_compute_next_value();
      init_is_keycode_character_generating();
      init_format_evaluated_value();
      FRACTION_DIGITS = 3;
      EMPTY_STRING2 = "";
      RawTextboxNumeric = createComponent(function(_a, ref) {
        var _b = _a, { disabled = false, incrementBig = 10, incrementSmall = 1, integer = false, maximum, minimum, onBlur = noop, onFocus = noop, onInput = noop, onMouseDown = noop, onKeyDown = noop, onNumericValueInput = noop, onValueInput = noop, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, suffix, validateOnBlur, value: value2 } = _b, rest = __objRest(_b, ["disabled", "incrementBig", "incrementSmall", "integer", "maximum", "minimum", "onBlur", "onFocus", "onInput", "onMouseDown", "onKeyDown", "onNumericValueInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "suffix", "validateOnBlur", "value"]);
        if (typeof minimum !== "undefined" && typeof maximum !== "undefined" && minimum >= maximum) {
          throw new Error("`minimum` must be less than `maximum`");
        }
        const inputElementRef = F2(null);
        const revertOnEscapeKeyDownRef = F2(false);
        const [originalValue, setOriginalValue] = p2(EMPTY_STRING2);
        const setInputElementValue = x2(function(value3) {
          const inputElement = getCurrentFromRef(inputElementRef);
          inputElement.value = value3;
          const inputEvent = new window.Event("input", {
            bubbles: true,
            cancelable: true
          });
          inputElement.dispatchEvent(inputEvent);
        }, []);
        const handleBlur = x2(function(event) {
          onBlur(event);
          if (revertOnEscapeKeyDownRef.current === true) {
            revertOnEscapeKeyDownRef.current = false;
            return;
          }
          if (typeof validateOnBlur !== "undefined") {
            const evaluatedValue = evaluateValue(value2, suffix);
            const result = validateOnBlur(evaluatedValue);
            if (typeof result === "number") {
              setInputElementValue(formatEvaluatedValue(result, value2, suffix));
              setOriginalValue(EMPTY_STRING2);
              return;
            }
            if (result === null) {
              setInputElementValue(EMPTY_STRING2);
              setOriginalValue(EMPTY_STRING2);
              return;
            }
            if (result === false) {
              if (value2 !== originalValue) {
                setInputElementValue(originalValue);
              }
              setOriginalValue(EMPTY_STRING2);
              return;
            }
          }
          if (typeof suffix !== "undefined" && value2 === suffix) {
            setInputElementValue(EMPTY_STRING2);
            setOriginalValue(EMPTY_STRING2);
            return;
          }
          if (value2 !== EMPTY_STRING2 && value2 !== MIXED_STRING) {
            const evaluatedValue = evaluateValue(value2, suffix);
            const formattedValue = formatEvaluatedValue(evaluatedValue, value2, suffix);
            if (value2 !== formattedValue) {
              setInputElementValue(formattedValue);
            }
          }
          setOriginalValue(EMPTY_STRING2);
        }, [onBlur, originalValue, setInputElementValue, suffix, validateOnBlur, value2]);
        const handleFocus = x2(function(event) {
          onFocus(event);
          setOriginalValue(value2);
          event.currentTarget.select();
        }, [onFocus, value2]);
        const handleInput = x2(function(event) {
          onInput(event);
          const newValue = event.currentTarget.value;
          onValueInput(newValue);
          const evaluatedValue = evaluateValue(newValue, suffix);
          onNumericValueInput(evaluatedValue);
        }, [onInput, onNumericValueInput, onValueInput, suffix]);
        const handleKeyDown = x2(function(event) {
          onKeyDown(event);
          const key = event.key;
          if (key === "Escape") {
            if (revertOnEscapeKeyDown === true) {
              revertOnEscapeKeyDownRef.current = true;
              setInputElementValue(originalValue);
              setOriginalValue(EMPTY_STRING2);
            }
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
            return;
          }
          const inputElement = event.currentTarget;
          if (key === "ArrowDown" || key === "ArrowUp") {
            const delta = event.shiftKey === true ? incrementBig : incrementSmall;
            event.preventDefault();
            if (value2 === EMPTY_STRING2 || value2 === MIXED_STRING) {
              const startingValue = function() {
                if (typeof minimum !== "undefined" && minimum > 0) {
                  return minimum;
                }
                if (typeof maximum !== "undefined" && maximum < 0) {
                  return maximum;
                }
                return 0;
              }();
              const evaluatedValue2 = evaluateValueWithDelta(startingValue, key === "ArrowDown" ? -1 * delta : delta);
              const newValue2 = restrictValue(evaluatedValue2, minimum, maximum);
              const formattedValue2 = formatEvaluatedValue(newValue2, value2, suffix);
              inputElement.value = formattedValue2;
              inputElement.select();
              const inputEvent2 = new window.Event("input", {
                bubbles: true,
                cancelable: true
              });
              inputElement.dispatchEvent(inputEvent2);
              return;
            }
            const number = evaluateValue(value2, suffix);
            if (number === null) {
              throw new Error("`number` is `null`");
            }
            const evaluatedValue = evaluateValueWithDelta(number, key === "ArrowDown" ? -1 * delta : delta);
            const newValue = restrictValue(evaluatedValue, minimum, maximum);
            const formattedValue = formatEvaluatedValue(newValue, value2, suffix);
            if (formattedValue === value2) {
              return;
            }
            inputElement.value = formattedValue;
            inputElement.select();
            const inputEvent = new window.Event("input", {
              bubbles: true,
              cancelable: true
            });
            inputElement.dispatchEvent(inputEvent);
            return;
          }
          if (event.ctrlKey === true || event.metaKey === true) {
            return;
          }
          if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
            const newValue = trimSuffix(value2 === MIXED_STRING ? event.key : computeNextValue(inputElement, event.key), suffix);
            if (isValidNumericInput(newValue, { integersOnly: integer }) === false) {
              event.preventDefault();
              return;
            }
            if (typeof minimum === "undefined" && typeof maximum === "undefined") {
              return;
            }
            const evaluatedValue = evaluateNumericExpression(newValue);
            if (evaluatedValue === null) {
              return;
            }
            if (typeof minimum !== "undefined" && evaluatedValue < minimum || typeof maximum !== "undefined" && evaluatedValue > maximum) {
              event.preventDefault();
            }
          }
        }, [
          incrementBig,
          incrementSmall,
          integer,
          maximum,
          minimum,
          onKeyDown,
          originalValue,
          propagateEscapeKeyDown,
          revertOnEscapeKeyDown,
          setInputElementValue,
          suffix,
          value2
        ]);
        const handleMouseDown = x2(function(event) {
          onMouseDown(event);
          if (value2 === MIXED_STRING) {
            event.preventDefault();
            event.currentTarget.select();
          }
        }, [onMouseDown, value2]);
        const handlePaste = x2(function(event) {
          if (event.clipboardData === null) {
            throw new Error("`event.clipboardData` is `null`");
          }
          const nextValue = trimSuffix(computeNextValue(event.currentTarget, event.clipboardData.getData("Text")), suffix);
          if (isValidNumericInput(nextValue, {
            integersOnly: integer
          }) === false) {
            event.preventDefault();
          }
        }, [integer, suffix]);
        const refCallback = x2(function(inputElement) {
          inputElementRef.current = inputElement;
          if (ref === null) {
            return;
          }
          if (typeof ref === "function") {
            ref(inputElement);
            return;
          }
          ref.current = inputElement;
        }, [ref]);
        return _("input", __spreadProps(__spreadValues({}, rest), { ref: refCallback, disabled: disabled === true, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseDown: handleMouseDown, onPaste: handlePaste, placeholder, spellcheck: false, tabIndex: 0, type: "text", value: value2 === MIXED_STRING ? "Mixed" : value2 }));
      });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/create-rgba-color.js
  function createRgbaColor(hexColor, opacity) {
    if (hexColor === "" || hexColor === MIXED_STRING || opacity === "" || opacity === MIXED_STRING) {
      return null;
    }
    const rgb = convertHexColorToRgbColor(hexColor);
    if (rgb === null) {
      return null;
    }
    return __spreadProps(__spreadValues({}, rgb), {
      a: parseInt(opacity, 10) / 100
    });
  }
  var init_create_rgba_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/create-rgba-color.js"() {
      init_lib();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/normalize-hex-color.js
  function normalizeUserInputColor(string) {
    const parsedNamedColor = convertNamedColorToHexColor(string);
    if (parsedNamedColor !== null) {
      return parsedNamedColor;
    }
    const hexColor = createHexColor(string).toUpperCase();
    if (isValidHexColor(hexColor) === false) {
      return null;
    }
    return hexColor;
  }
  function createHexColor(string) {
    switch (string.length) {
      case 0: {
        return "";
      }
      case 1: {
        return Array(6).fill(string).join("");
      }
      case 2: {
        return Array(3).fill(string).join("");
      }
      case 3:
      case 4:
      case 5: {
        return `${string[0]}${string[0]}${string[1]}${string[1]}${string[2]}${string[2]}`;
      }
      case 6: {
        return string;
      }
      default: {
        return string.slice(0, 6);
      }
    }
  }
  var init_normalize_hex_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/normalize-hex-color.js"() {
      init_lib();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/update-hex-color.js
  function updateHexColor(hexColor, delta) {
    const rgbColor = convertHexColorToRgbColor(hexColor);
    if (rgbColor === null) {
      throw new Error("Invalid `hexColor`");
    }
    const { r: r3, g: g4, b: b2 } = rgbColor;
    const result = convertRgbColorToHexColor({
      b: updateValue(b2, delta),
      g: updateValue(g4, delta),
      r: updateValue(r3, delta)
    });
    if (result === null) {
      throw new Error("Invalid `rgbColor`");
    }
    return result;
  }
  function updateValue(value2, delta) {
    const newValue = value2 * 255 + delta;
    return Math.min(Math.max(newValue, 0), 255) / 255;
  }
  var init_update_hex_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/private/update-hex-color.js"() {
      init_lib();
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/ba16d095-4ea2-4b92-8ebd-584169bf8e3c/textbox-color.module.js
  var textbox_color_module_default;
  var init_textbox_color_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/ba16d095-4ea2-4b92-8ebd-584169bf8e3c/textbox-color.module.js"() {
      if (document.getElementById("9dcd71ad3b") === null) {
        const element = document.createElement("style");
        element.id = "9dcd71ad3b";
        element.textContent = `._textboxColor_69uub_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  width: 144px;
}
._textboxColor_69uub_1:focus-within {
  z-index: var(
    --z-index-2
  ); /* stack \`.textboxColor\` over its sibling elements */
}

._color_69uub_13 {
  position: absolute;
  top: 6px;
  left: 8px;
  display: flex;
  overflow: hidden;
  width: 16px;
  height: 16px;
  border-radius: 1px;
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200H3V3H0V0Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M3%200H6V3H3V0Z%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M3%203H6V6H3V3Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M0%203H3V6H0V3Z%22%20fill%3D%22white%22/%3E%3C/svg%3E%0A');
}
._disabled_69uub_24 ._color_69uub_13 {
  opacity: var(--opacity-30);
}

._colorFill_69uub_28 {
  flex-grow: 1;
  background: none;
}

._colorBorder_69uub_33 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.1); /* FIXME */
  border-radius: 2px;
  background: none;
  pointer-events: none;
}
.figma-dark ._colorBorder_69uub_33 {
  border-color: rgba(255, 255, 255, 0.15); /* FIXME */
}

._hexColorSelector_69uub_48 {
  position: absolute;
  top: -4px;
  left: 0;
  width: 24px;
  height: 36px;
  opacity: 0;
}

._input_69uub_57 {
  display: block;
  width: 100%;
  height: 28px;
  background-color: transparent;
  color: var(--figma-color-text);
}

._disabled_69uub_24 ._input_69uub_57,
._disabled_69uub_24 ._hexColorSelector_69uub_48 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}

._input_69uub_57::placeholder {
  color: var(--figma-color-text-tertiary);
}

._input_69uub_57::-webkit-inner-spin-button,
._input_69uub_57::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

._hexColorInput_69uub_80 {
  flex: 0 0 97px;
  padding-left: 32px;
}
._opacityInput_69uub_84 {
  padding-left: var(--space-extra-small);
}

._border_69uub_88 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_69uub_98 ._border_69uub_88,
._textboxColor_69uub_1:not(._disabled_69uub_24):hover ._border_69uub_88 {
  border-color: var(--figma-color-border);
}
._textboxColor_69uub_1:not(._disabled_69uub_24) ._input_69uub_57:focus ~ ._border_69uub_88,
._textboxColor_69uub_1:not(._disabled_69uub_24) ._hexColorSelector_69uub_48:focus ~ ._border_69uub_88 {
  top: -1px;
  bottom: -1px;
  border: 2px solid var(--figma-color-border-brand-strong);
}

._divider_69uub_109 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 96px;
  width: 1px;
  pointer-events: none;
}
._hasBorder_69uub_98 ._divider_69uub_109,
._textboxColor_69uub_1:not(._disabled_69uub_24) ._input_69uub_57:hover ~ ._divider_69uub_109,
._textboxColor_69uub_1:not(._disabled_69uub_24) ._input_69uub_57:focus ~ ._divider_69uub_109,
._textboxColor_69uub_1:not(._disabled_69uub_24) ._hexColorSelector_69uub_48:hover ~ ._divider_69uub_109,
._textboxColor_69uub_1:not(._disabled_69uub_24) ._hexColorSelector_69uub_48:focus ~ ._divider_69uub_109 {
  background-color: var(--figma-color-border);
}

._underline_69uub_125 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textboxColor_69uub_1:not(._disabled_69uub_24) ._input_69uub_57:focus ~ ._underline_69uub_125,
._textboxColor_69uub_1:not(._disabled_69uub_24):hover ._underline_69uub_125 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtY29sb3IvdGV4dGJveC1jb2xvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRTs7R0FFQyxFQUFFLG9EQUFvRDtBQUN6RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscWNBQXFjO0FBQ3ZjO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxvQ0FBb0MsRUFBRSxVQUFVO0VBQ2hELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx1Q0FBdUMsRUFBRSxVQUFVO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLHVDQUF1QztBQUN6QztBQUNBOztFQUVFLFNBQVM7RUFDVCxZQUFZO0VBQ1osd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTs7Ozs7RUFLRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94LWNvbG9yL3RleHRib3gtY29sb3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94Q29sb3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxNDRweDtcbn1cbi50ZXh0Ym94Q29sb3I6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKFxuICAgIC0tei1pbmRleC0yXG4gICk7IC8qIHN0YWNrIGAudGV4dGJveENvbG9yYCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5jb2xvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyNiUyMiUyMGhlaWdodCUzRCUyMjYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA2JTIwNiUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTNFJTNDcGF0aCUyMGQlM0QlMjJNMCUyMDBIM1YzSDBWMFolMjIlMjBmaWxsJTNEJTIyJTIzRTFFMUUxJTIyLyUzRSUzQ3BhdGglMjBkJTNEJTIyTTMlMjAwSDZWM0gzVjBaJTIyJTIwZmlsbCUzRCUyMndoaXRlJTIyLyUzRSUzQ3BhdGglMjBkJTNEJTIyTTMlMjAzSDZWNkgzVjNaJTIyJTIwZmlsbCUzRCUyMiUyM0UxRTFFMSUyMi8lM0UlM0NwYXRoJTIwZCUzRCUyMk0wJTIwM0gzVjZIMFYzWiUyMiUyMGZpbGwlM0QlMjJ3aGl0ZSUyMi8lM0UlM0Mvc3ZnJTNFJTBBJyk7XG59XG4uZGlzYWJsZWQgLmNvbG9yIHtcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XG59XG5cbi5jb2xvckZpbGwge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jb2xvckJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEZJWE1FICovXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46Z2xvYmFsKC5maWdtYS1kYXJrKSAuY29sb3JCb3JkZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IC8qIEZJWE1FICovXG59XG5cbi5oZXhDb2xvclNlbGVjdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xufVxuXG4uZGlzYWJsZWQgLmlucHV0LFxuLmRpc2FibGVkIC5oZXhDb2xvclNlbGVjdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtdGVydGlhcnkpO1xufVxuXG4uaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4uaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5oZXhDb2xvcklucHV0IHtcbiAgZmxleDogMCAwIDk3cHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbn1cbi5vcGFjaXR5SW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cblxuLmJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaGFzQm9yZGVyIC5ib3JkZXIsXG4udGV4dGJveENvbG9yOm5vdCguZGlzYWJsZWQpOmhvdmVyIC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4udGV4dGJveENvbG9yOm5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIsXG4udGV4dGJveENvbG9yOm5vdCguZGlzYWJsZWQpIC5oZXhDb2xvclNlbGVjdG9yOmZvY3VzIH4gLmJvcmRlciB7XG4gIHRvcDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cblxuLmRpdmlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA5NnB4O1xuICB3aWR0aDogMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5oYXNCb3JkZXIgLmRpdmlkZXIsXG4udGV4dGJveENvbG9yOm5vdCguZGlzYWJsZWQpIC5pbnB1dDpob3ZlciB+IC5kaXZpZGVyLFxuLnRleHRib3hDb2xvcjpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Zm9jdXMgfiAuZGl2aWRlcixcbi50ZXh0Ym94Q29sb3I6bm90KC5kaXNhYmxlZCkgLmhleENvbG9yU2VsZWN0b3I6aG92ZXIgfiAuZGl2aWRlcixcbi50ZXh0Ym94Q29sb3I6bm90KC5kaXNhYmxlZCkgLmhleENvbG9yU2VsZWN0b3I6Zm9jdXMgfiAuZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Q29sb3I6bm90KC5kaXNhYmxlZCkgLmlucHV0OmZvY3VzIH4gLnVuZGVybGluZSxcbi50ZXh0Ym94Q29sb3I6bm90KC5kaXNhYmxlZCk6aG92ZXIgLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_color_module_default = { "textboxColor": "_textboxColor_69uub_1", "color": "_color_69uub_13", "disabled": "_disabled_69uub_24", "colorFill": "_colorFill_69uub_28", "colorBorder": "_colorBorder_69uub_33", "hexColorSelector": "_hexColorSelector_69uub_48", "input": "_input_69uub_57", "hexColorInput": "_hexColorInput_69uub_80", "opacityInput": "_opacityInput_69uub_84", "border": "_border_69uub_88", "hasBorder": "_hasBorder_69uub_98", "divider": "_divider_69uub_109", "underline": "_underline_69uub_125" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/textbox-color.js
  function parseOpacity(opacity) {
    if (opacity === MIXED_STRING || opacity === EMPTY_STRING3) {
      return 1;
    }
    return parseInt(opacity, 10) / 100;
  }
  var EMPTY_STRING3, TextboxColor;
  var init_textbox_color = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-color/textbox-color.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_create_component();
      init_get_current_from_ref();
      init_no_op();
      init_raw_textbox_numeric();
      init_create_rgba_color();
      init_normalize_hex_color();
      init_update_hex_color();
      init_textbox_color_module();
      EMPTY_STRING3 = "";
      TextboxColor = createComponent(function(_a, ref) {
        var _b = _a, { disabled = false, hexColor, hexColorPlaceholder, onHexColorInput = noop, onHexColorKeyDown = noop, onHexColorValueInput = noop, onOpacityInput = noop, onOpacityKeyDown = noop, onOpacityNumericValueInput = noop, onOpacityValueInput = noop, onRgbaColorValueInput = noop, opacity, opacityPlaceholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, variant } = _b, rest = __objRest(_b, ["disabled", "hexColor", "hexColorPlaceholder", "onHexColorInput", "onHexColorKeyDown", "onHexColorValueInput", "onOpacityInput", "onOpacityKeyDown", "onOpacityNumericValueInput", "onOpacityValueInput", "onRgbaColorValueInput", "opacity", "opacityPlaceholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "variant"]);
        const hexColorInputElementRef = F2(null);
        const opacityInputElementRef = F2(null);
        const revertOnEscapeKeyDownRef = F2(false);
        const [originalHexColor, setOriginalHexColor] = p2(EMPTY_STRING3);
        const setHexColorInputElementValue = x2(function(value2) {
          const inputElement = getCurrentFromRef(hexColorInputElementRef);
          inputElement.value = value2;
          const inputEvent = new window.Event("input", {
            bubbles: true,
            cancelable: true
          });
          inputElement.dispatchEvent(inputEvent);
        }, []);
        const handleHexColorSelectorFocus = x2(function(event) {
          const hexColor2 = event.currentTarget.value.slice(1).toUpperCase();
          setOriginalHexColor(hexColor2);
        }, []);
        const handleHexColorSelectorInput = x2(function(event) {
          const hexColor2 = event.currentTarget.value.slice(1).toUpperCase();
          setHexColorInputElementValue(hexColor2);
        }, [setHexColorInputElementValue]);
        const handleHexColorSelectorKeyDown = x2(function(event) {
          if (event.key !== "Escape") {
            return;
          }
          if (revertOnEscapeKeyDown === true) {
            revertOnEscapeKeyDownRef.current = true;
            setHexColorInputElementValue(originalHexColor);
            setOriginalHexColor(EMPTY_STRING3);
          }
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation();
          }
          event.currentTarget.blur();
        }, [
          originalHexColor,
          propagateEscapeKeyDown,
          revertOnEscapeKeyDown,
          setHexColorInputElementValue
        ]);
        const handleHexColorBlur = x2(function() {
          if (revertOnEscapeKeyDownRef.current === true) {
            revertOnEscapeKeyDownRef.current = false;
            return;
          }
          if (hexColor === EMPTY_STRING3) {
            if (originalHexColor !== EMPTY_STRING3) {
              setHexColorInputElementValue(originalHexColor);
            }
            setOriginalHexColor(EMPTY_STRING3);
            return;
          }
          if (hexColor !== MIXED_STRING) {
            const normalizedHexColor2 = normalizeUserInputColor(hexColor);
            const newHexColor = normalizedHexColor2 === null ? originalHexColor : normalizedHexColor2;
            if (newHexColor !== hexColor) {
              setHexColorInputElementValue(newHexColor);
            }
          }
          setOriginalHexColor(EMPTY_STRING3);
        }, [hexColor, originalHexColor, setHexColorInputElementValue]);
        const handleHexColorFocus = x2(function(event) {
          setOriginalHexColor(hexColor);
          event.currentTarget.select();
        }, [hexColor]);
        const handleHexColorInput = x2(function(event) {
          onHexColorInput(event);
          const newHexColor = event.currentTarget.value;
          onHexColorValueInput(newHexColor);
          if (newHexColor === EMPTY_STRING3) {
            onRgbaColorValueInput(null);
            return;
          }
          const normalizedHexColor2 = normalizeUserInputColor(newHexColor);
          if (normalizedHexColor2 === null) {
            onRgbaColorValueInput(null);
            return;
          }
          const rgba = createRgbaColor(normalizedHexColor2, opacity);
          onRgbaColorValueInput(rgba);
        }, [onHexColorInput, onHexColorValueInput, onRgbaColorValueInput, opacity]);
        const handleHexColorKeyDown = x2(function(event) {
          onHexColorKeyDown(event);
          const key = event.key;
          if (key === "Escape") {
            if (revertOnEscapeKeyDown === true) {
              revertOnEscapeKeyDownRef.current = true;
              setHexColorInputElementValue(originalHexColor);
              setOriginalHexColor(EMPTY_STRING3);
            }
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
            return;
          }
          const element = event.currentTarget;
          if (key === "ArrowDown" || key === "ArrowUp") {
            event.preventDefault();
            const delta = event.shiftKey === true ? 10 : 1;
            const startingHexColor = hexColor === EMPTY_STRING3 || hexColor === MIXED_STRING ? key === "ArrowDown" ? "FFFFFF" : "000000" : hexColor;
            const newHexColor = updateHexColor(startingHexColor, key === "ArrowDown" ? -1 * delta : delta);
            setHexColorInputElementValue(newHexColor);
            element.select();
            return;
          }
          if (event.ctrlKey === true || event.metaKey === true) {
            return;
          }
        }, [
          hexColor,
          onHexColorKeyDown,
          originalHexColor,
          propagateEscapeKeyDown,
          revertOnEscapeKeyDown,
          setHexColorInputElementValue
        ]);
        const handleHexColorMouseUp = x2(function(event) {
          if (hexColor !== MIXED_STRING) {
            return;
          }
          event.preventDefault();
        }, [hexColor]);
        const handleOpacityInput = x2(function(event) {
          onOpacityInput(event);
          const newOpacity = event.currentTarget.value;
          const rgba = createRgbaColor(hexColor, newOpacity);
          onRgbaColorValueInput(rgba);
        }, [hexColor, onOpacityInput, onRgbaColorValueInput]);
        const handleOpacityNumericValueInput = x2(function(opacity2) {
          onOpacityNumericValueInput(opacity2 === null || opacity2 === MIXED_NUMBER ? opacity2 : opacity2 / 100);
        }, [onOpacityNumericValueInput]);
        const validateOpacityOnBlur = x2(function(opacity2) {
          return opacity2 !== null;
        }, []);
        const parsedOpacity = parseOpacity(opacity);
        const isHexColorValid = hexColor !== EMPTY_STRING3 && hexColor !== MIXED_STRING;
        const normalizedHexColor = isHexColorValid === true ? normalizeUserInputColor(hexColor) : "FFFFFF";
        const renderedHexColor = normalizedHexColor === null ? originalHexColor : normalizedHexColor;
        return _(
          "div",
          { ref, class: createClassName([
            textbox_color_module_default.textboxColor,
            typeof variant === "undefined" ? null : variant === "border" ? textbox_color_module_default.hasBorder : null,
            disabled === true ? textbox_color_module_default.disabled : null
          ]) },
          _(
            "div",
            { class: textbox_color_module_default.color },
            _("div", { class: textbox_color_module_default.colorFill, style: isHexColorValid === true ? { backgroundColor: `#${renderedHexColor}` } : {} }),
            parsedOpacity === 1 ? null : _("div", { class: textbox_color_module_default.colorFill, style: isHexColorValid === true ? {
              backgroundColor: `#${renderedHexColor}`,
              opacity: parsedOpacity
            } : {} }),
            _("div", { class: textbox_color_module_default.colorBorder })
          ),
          _("input", { class: textbox_color_module_default.hexColorSelector, disabled: disabled === true, onFocus: handleHexColorSelectorFocus, onInput: handleHexColorSelectorInput, onKeyDown: handleHexColorSelectorKeyDown, tabIndex: -1, type: "color", value: `#${renderedHexColor}` }),
          _("input", __spreadProps(__spreadValues({}, rest), { ref: hexColorInputElementRef, class: createClassName([textbox_color_module_default.input, textbox_color_module_default.hexColorInput]), disabled: disabled === true, onBlur: handleHexColorBlur, onFocus: handleHexColorFocus, onInput: handleHexColorInput, onKeyDown: handleHexColorKeyDown, onMouseUp: handleHexColorMouseUp, placeholder: hexColorPlaceholder, spellcheck: false, tabIndex: 0, type: "text", value: hexColor === MIXED_STRING ? "Mixed" : hexColor })),
          _(RawTextboxNumeric, { ref: opacityInputElementRef, class: createClassName([textbox_color_module_default.input, textbox_color_module_default.opacityInput]), disabled: disabled === true, maximum: 100, minimum: 0, onInput: handleOpacityInput, onKeyDown: onOpacityKeyDown, onNumericValueInput: handleOpacityNumericValueInput, onValueInput: onOpacityValueInput, placeholder: opacityPlaceholder, propagateEscapeKeyDown, revertOnEscapeKeyDown, suffix: "%", validateOnBlur: validateOpacityOnBlur, value: opacity }),
          _("div", { class: textbox_color_module_default.divider }),
          _("div", { class: textbox_color_module_default.border }),
          variant === "underline" ? _("div", { class: textbox_color_module_default.underline }) : null
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/dcb757b5-a8c2-41ed-9271-435122d3d7f5/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/dcb757b5-a8c2-41ed-9271-435122d3d7f5/textbox.module.js"() {
      if (document.getElementById("7bbe11fac6") === null) {
        const element = document.createElement("style");
        element.id = "7bbe11fac6";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsK0NBQStDO0FBQzVFOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94L3RleHRib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuLnRleHRib3g6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogU3RhY2sgYC50ZXh0Ym94YCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaGFzSWNvbiAuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBzbyB0aGF0IGNsaWNraW5nIHRoZSBpY29uIGZvY3VzZXMgdGhlIHRleHRib3ggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tYnJhbmQpO1xufVxuLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uaWNvbiBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveDpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_module_default = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/ddef8db3-39ad-47a5-8a8c-2c8ba6f56bd2/textbox-numeric.module.js
  var textbox_numeric_module_default;
  var init_textbox_numeric_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/ddef8db3-39ad-47a5-8a8c-2c8ba6f56bd2/textbox-numeric.module.js"() {
      if (document.getElementById("eedc658e04") === null) {
        const element = document.createElement("style");
        element.id = "eedc658e04";
        element.textContent = `._input_1byj7_1::-webkit-inner-spin-button,
._input_1byj7_1::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbnVtZXJpYy90ZXh0Ym94LW51bWVyaWMubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHRib3gvdGV4dGJveC1udW1lcmljL3RleHRib3gtbnVtZXJpYy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_numeric_module_default = { "input": "_input_1byj7_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js
  var TextboxNumeric;
  var init_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_textbox_module();
      init_raw_textbox_numeric();
      init_textbox_numeric_module();
      TextboxNumeric = createComponent(function(_a, ref) {
        var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
        if (typeof icon === "string" && icon.length !== 1) {
          throw new Error(`String \`icon\` must be a single character: ${icon}`);
        }
        return _(
          "div",
          { class: createClassName([
            textbox_module_default.textbox,
            typeof variant === "undefined" ? null : variant === "border" ? textbox_module_default.hasBorder : null,
            typeof icon === "undefined" ? null : textbox_module_default.hasIcon,
            rest.disabled === true ? textbox_module_default.disabled : null
          ]) },
          _(RawTextboxNumeric, __spreadProps(__spreadValues({}, rest), { ref, class: createClassName([
            textbox_module_default.input,
            textbox_numeric_module_default.input
          ]) })),
          typeof icon === "undefined" ? null : _("div", { class: textbox_module_default.icon }, icon),
          _("div", { class: textbox_module_default.border }),
          variant === "underline" ? _("div", { class: textbox_module_default.underline }) : null
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/32f272e5-237a-4926-9eed-2fd44d8b9b3d/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/32f272e5-237a-4926-9eed-2fd44d8b9b3d/container.module.js"() {
      if (document.getElementById("d1b2e28dae") === null) {
        const element = document.createElement("style");
        element.id = "d1b2e28dae";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  var Container;
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_create_component();
      init_container_module();
      Container = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: container_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/deca5cb0-ef50-4953-9684-76304a191964/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/deca5cb0-ef50-4953-9684-76304a191964/vertical-space.module.js"() {
      if (document.getElementById("2b4a689d39") === null) {
        const element = document.createElement("style");
        element.id = "2b4a689d39";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  var VerticalSpace;
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_create_component();
      init_vertical_space_module();
      VerticalSpace = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: vertical_space_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/3414d3ef-802f-4b61-bb45-699427880572/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/3414d3ef-802f-4b61-bb45-699427880572/base.js"() {
      if (document.getElementById("9afaa5048d") === null) {
        const element = document.createElement("style");
        element.id = "9afaa5048d";
        element.innerHTML = `:root {
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  --opacity-30: 0.3;
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      B(_(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_checkbox();
      init_dropdown();
      init_text();
      init_textbox_color();
      init_textbox_numeric();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // node_modules/jotai/esm/vanilla.mjs
  function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
      toString: () => key
    };
    if (typeof read === "function") {
      config.read = read;
    } else {
      config.init = read;
      config.read = defaultRead;
      config.write = defaultWrite;
    }
    if (write) {
      config.write = write;
    }
    return config;
  }
  function defaultRead(get) {
    return get(this);
  }
  function defaultWrite(get, set, arg) {
    return set(
      this,
      typeof arg === "function" ? arg(get(this)) : arg
    );
  }
  var import_meta, keyCount, isSelfAtom, hasInitialValue, isActuallyWritableAtom, cancelPromiseMap, registerCancelPromise, cancelPromise, resolvePromise, rejectPromise, isPromiseLike, isEqualAtomValue, isEqualAtomError, hasPromiseAtomValue, isEqualPromiseAtomValue, returnAtomValue, createStore$1, defaultStore, getDefaultStore$1, getDefaultStore;
  var init_vanilla = __esm({
    "node_modules/jotai/esm/vanilla.mjs"() {
      import_meta = {};
      keyCount = 0;
      isSelfAtom = (atom2, a3) => atom2.unstable_is ? atom2.unstable_is(a3) : a3 === atom2;
      hasInitialValue = (atom2) => "init" in atom2;
      isActuallyWritableAtom = (atom2) => !!atom2.write;
      cancelPromiseMap = /* @__PURE__ */ new WeakMap();
      registerCancelPromise = (promise, cancel) => {
        cancelPromiseMap.set(promise, cancel);
        promise.catch(() => {
        }).finally(() => cancelPromiseMap.delete(promise));
      };
      cancelPromise = (promise, next) => {
        const cancel = cancelPromiseMap.get(promise);
        if (cancel) {
          cancelPromiseMap.delete(promise);
          cancel(next);
        }
      };
      resolvePromise = (promise, value2) => {
        promise.status = "fulfilled";
        promise.value = value2;
      };
      rejectPromise = (promise, e3) => {
        promise.status = "rejected";
        promise.reason = e3;
      };
      isPromiseLike = (x4) => typeof (x4 == null ? void 0 : x4.then) === "function";
      isEqualAtomValue = (a3, b2) => !!a3 && "v" in a3 && "v" in b2 && Object.is(a3.v, b2.v);
      isEqualAtomError = (a3, b2) => !!a3 && "e" in a3 && "e" in b2 && Object.is(a3.e, b2.e);
      hasPromiseAtomValue = (a3) => !!a3 && "v" in a3 && a3.v instanceof Promise;
      isEqualPromiseAtomValue = (a3, b2) => "v" in a3 && "v" in b2 && a3.v.orig && a3.v.orig === b2.v.orig;
      returnAtomValue = (atomState) => {
        if ("e" in atomState) {
          throw atomState.e;
        }
        return atomState.v;
      };
      createStore$1 = () => {
        const atomStateMap = /* @__PURE__ */ new WeakMap();
        const mountedMap = /* @__PURE__ */ new WeakMap();
        const pendingStack = [];
        const pendingMap = /* @__PURE__ */ new WeakMap();
        let devListenersRev2;
        let mountedAtoms;
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
          devListenersRev2 = /* @__PURE__ */ new Set();
          mountedAtoms = /* @__PURE__ */ new Set();
        }
        const getAtomState = (atom2) => atomStateMap.get(atom2);
        const addPendingDependent = (atom2, atomState) => {
          atomState.d.forEach((_3, a3) => {
            if (!pendingMap.has(a3)) {
              const aState = getAtomState(a3);
              pendingMap.set(a3, [aState, /* @__PURE__ */ new Set()]);
              if (aState) {
                addPendingDependent(a3, aState);
              }
            }
            pendingMap.get(a3)[1].add(atom2);
          });
        };
        const setAtomState = (atom2, atomState) => {
          var _a;
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            Object.freeze(atomState);
          }
          const prevAtomState = getAtomState(atom2);
          atomStateMap.set(atom2, atomState);
          (_a = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a.add(atom2);
          if (!pendingMap.has(atom2)) {
            pendingMap.set(atom2, [prevAtomState, /* @__PURE__ */ new Set()]);
            addPendingDependent(atom2, atomState);
          }
          if (hasPromiseAtomValue(prevAtomState)) {
            const next = "v" in atomState ? atomState.v instanceof Promise ? atomState.v : Promise.resolve(atomState.v) : Promise.reject(atomState.e);
            if (prevAtomState.v !== next) {
              cancelPromise(prevAtomState.v, next);
            }
          }
        };
        const updateDependencies = (atom2, nextAtomState, nextDependencies, keepPreviousDependencies) => {
          const dependencies = new Map(
            keepPreviousDependencies ? nextAtomState.d : null
          );
          let changed = false;
          nextDependencies.forEach((aState, a3) => {
            if (!aState && isSelfAtom(atom2, a3)) {
              aState = nextAtomState;
            }
            if (aState) {
              dependencies.set(a3, aState);
              if (nextAtomState.d.get(a3) !== aState) {
                changed = true;
              }
            } else if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
              console.warn("[Bug] atom state not found");
            }
          });
          if (changed || nextAtomState.d.size !== dependencies.size) {
            nextAtomState.d = dependencies;
          }
        };
        const setAtomValue = (atom2, value2, nextDependencies, keepPreviousDependencies) => {
          const prevAtomState = getAtomState(atom2);
          const nextAtomState = {
            d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
            v: value2
          };
          if (nextDependencies) {
            updateDependencies(
              atom2,
              nextAtomState,
              nextDependencies,
              keepPreviousDependencies
            );
          }
          if (isEqualAtomValue(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
            return prevAtomState;
          }
          if (hasPromiseAtomValue(prevAtomState) && hasPromiseAtomValue(nextAtomState) && isEqualPromiseAtomValue(prevAtomState, nextAtomState)) {
            if (prevAtomState.d === nextAtomState.d) {
              return prevAtomState;
            } else {
              nextAtomState.v = prevAtomState.v;
            }
          }
          setAtomState(atom2, nextAtomState);
          return nextAtomState;
        };
        const setAtomValueOrPromise = (atom2, valueOrPromise, nextDependencies, abortPromise) => {
          if (isPromiseLike(valueOrPromise)) {
            let continuePromise;
            const updatePromiseDependencies = () => {
              const prevAtomState = getAtomState(atom2);
              if (!hasPromiseAtomValue(prevAtomState) || prevAtomState.v !== promise) {
                return;
              }
              const nextAtomState = setAtomValue(
                atom2,
                promise,
                nextDependencies
              );
              if (mountedMap.has(atom2) && prevAtomState.d !== nextAtomState.d) {
                mountDependencies(atom2, nextAtomState, prevAtomState.d);
              }
            };
            const promise = new Promise((resolve, reject) => {
              let settled = false;
              valueOrPromise.then(
                (v3) => {
                  if (!settled) {
                    settled = true;
                    resolvePromise(promise, v3);
                    resolve(v3);
                    updatePromiseDependencies();
                  }
                },
                (e3) => {
                  if (!settled) {
                    settled = true;
                    rejectPromise(promise, e3);
                    reject(e3);
                    updatePromiseDependencies();
                  }
                }
              );
              continuePromise = (next) => {
                if (!settled) {
                  settled = true;
                  next.then(
                    (v3) => resolvePromise(promise, v3),
                    (e3) => rejectPromise(promise, e3)
                  );
                  resolve(next);
                }
              };
            });
            promise.orig = valueOrPromise;
            promise.status = "pending";
            registerCancelPromise(promise, (next) => {
              if (next) {
                continuePromise(next);
              }
              abortPromise == null ? void 0 : abortPromise();
            });
            return setAtomValue(atom2, promise, nextDependencies, true);
          }
          return setAtomValue(atom2, valueOrPromise, nextDependencies);
        };
        const setAtomError = (atom2, error, nextDependencies) => {
          const prevAtomState = getAtomState(atom2);
          const nextAtomState = {
            d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
            e: error
          };
          if (nextDependencies) {
            updateDependencies(atom2, nextAtomState, nextDependencies);
          }
          if (isEqualAtomError(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
            return prevAtomState;
          }
          setAtomState(atom2, nextAtomState);
          return nextAtomState;
        };
        const readAtomState = (atom2, force) => {
          const atomState = getAtomState(atom2);
          if (!(force == null ? void 0 : force(atom2)) && atomState) {
            if (mountedMap.has(atom2)) {
              return atomState;
            }
            if (Array.from(atomState.d).every(([a3, s3]) => {
              if (a3 === atom2) {
                return true;
              }
              const aState = readAtomState(a3, force);
              return aState === s3 || isEqualAtomValue(aState, s3);
            })) {
              return atomState;
            }
          }
          const nextDependencies = /* @__PURE__ */ new Map();
          let isSync = true;
          const getter = (a3) => {
            if (isSelfAtom(atom2, a3)) {
              const aState2 = getAtomState(a3);
              if (aState2) {
                nextDependencies.set(a3, aState2);
                return returnAtomValue(aState2);
              }
              if (hasInitialValue(a3)) {
                nextDependencies.set(a3, void 0);
                return a3.init;
              }
              throw new Error("no atom init");
            }
            const aState = readAtomState(a3, force);
            nextDependencies.set(a3, aState);
            return returnAtomValue(aState);
          };
          let controller;
          let setSelf;
          const options = {
            get signal() {
              if (!controller) {
                controller = new AbortController();
              }
              return controller.signal;
            },
            get setSelf() {
              if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
                console.warn("setSelf function cannot be used with read-only atom");
              }
              if (!setSelf && isActuallyWritableAtom(atom2)) {
                setSelf = (...args) => {
                  if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && isSync) {
                    console.warn("setSelf function cannot be called in sync");
                  }
                  if (!isSync) {
                    return writeAtom(atom2, ...args);
                  }
                };
              }
              return setSelf;
            }
          };
          try {
            const valueOrPromise = atom2.read(getter, options);
            return setAtomValueOrPromise(
              atom2,
              valueOrPromise,
              nextDependencies,
              () => controller == null ? void 0 : controller.abort()
            );
          } catch (error) {
            return setAtomError(atom2, error, nextDependencies);
          } finally {
            isSync = false;
          }
        };
        const readAtom = (atom2) => returnAtomValue(readAtomState(atom2));
        const recomputeDependents = (atom2) => {
          const getDependents = (a3) => {
            var _a, _b;
            const dependents = new Set((_a = mountedMap.get(a3)) == null ? void 0 : _a.t);
            (_b = pendingMap.get(a3)) == null ? void 0 : _b[1].forEach((dependent) => {
              dependents.add(dependent);
            });
            return dependents;
          };
          const topsortedAtoms = new Array();
          const markedAtoms = /* @__PURE__ */ new Set();
          const visit = (n2) => {
            if (markedAtoms.has(n2)) {
              return;
            }
            markedAtoms.add(n2);
            for (const m3 of getDependents(n2)) {
              if (n2 !== m3) {
                visit(m3);
              }
            }
            topsortedAtoms.push(n2);
          };
          visit(atom2);
          const changedAtoms = /* @__PURE__ */ new Set([atom2]);
          const isMarked = (a3) => markedAtoms.has(a3);
          for (let i3 = topsortedAtoms.length - 1; i3 >= 0; --i3) {
            const a3 = topsortedAtoms[i3];
            const prevAtomState = getAtomState(a3);
            if (!prevAtomState) {
              continue;
            }
            let hasChangedDeps = false;
            for (const dep of prevAtomState.d.keys()) {
              if (dep !== a3 && changedAtoms.has(dep)) {
                hasChangedDeps = true;
                break;
              }
            }
            if (hasChangedDeps) {
              const nextAtomState = readAtomState(a3, isMarked);
              addPendingDependent(a3, nextAtomState);
              if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
                changedAtoms.add(a3);
              }
            }
            markedAtoms.delete(a3);
          }
        };
        const writeAtomState = (atom2, ...args) => {
          const getter = (a3) => returnAtomValue(readAtomState(a3));
          const setter = (a3, ...args2) => {
            const isSync = pendingStack.length > 0;
            if (!isSync) {
              pendingStack.push(/* @__PURE__ */ new Set([a3]));
            }
            let r3;
            if (isSelfAtom(atom2, a3)) {
              if (!hasInitialValue(a3)) {
                throw new Error("atom not writable");
              }
              const prevAtomState = getAtomState(a3);
              const nextAtomState = setAtomValueOrPromise(a3, args2[0]);
              if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
                recomputeDependents(a3);
              }
            } else {
              r3 = writeAtomState(a3, ...args2);
            }
            if (!isSync) {
              const flushed = flushPending(pendingStack.pop());
              if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
                devListenersRev2.forEach(
                  (l3) => l3({ type: "async-write", flushed })
                );
              }
            }
            return r3;
          };
          const result = atom2.write(getter, setter, ...args);
          return result;
        };
        const writeAtom = (atom2, ...args) => {
          pendingStack.push(/* @__PURE__ */ new Set([atom2]));
          const result = writeAtomState(atom2, ...args);
          const flushed = flushPending(pendingStack.pop());
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            devListenersRev2.forEach((l3) => l3({ type: "write", flushed }));
          }
          return result;
        };
        const mountAtom = (atom2, initialDependent, onMountQueue) => {
          var _a;
          const existingMount = mountedMap.get(atom2);
          if (existingMount) {
            if (initialDependent) {
              existingMount.t.add(initialDependent);
            }
            return existingMount;
          }
          const queue = onMountQueue || [];
          (_a = getAtomState(atom2)) == null ? void 0 : _a.d.forEach((_3, a3) => {
            if (a3 !== atom2) {
              mountAtom(a3, atom2, queue);
            }
          });
          readAtomState(atom2);
          const mounted = {
            t: new Set(initialDependent && [initialDependent]),
            l: /* @__PURE__ */ new Set()
          };
          mountedMap.set(atom2, mounted);
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            mountedAtoms.add(atom2);
          }
          if (isActuallyWritableAtom(atom2) && atom2.onMount) {
            const { onMount } = atom2;
            queue.push(() => {
              const onUnmount = onMount((...args) => writeAtom(atom2, ...args));
              if (onUnmount) {
                mounted.u = onUnmount;
              }
            });
          }
          if (!onMountQueue) {
            queue.forEach((f3) => f3());
          }
          return mounted;
        };
        const canUnmountAtom = (atom2, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom2));
        const tryUnmountAtom = (atom2, mounted) => {
          if (!canUnmountAtom(atom2, mounted)) {
            return;
          }
          const onUnmount = mounted.u;
          if (onUnmount) {
            onUnmount();
          }
          mountedMap.delete(atom2);
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            mountedAtoms.delete(atom2);
          }
          const atomState = getAtomState(atom2);
          if (atomState) {
            if (hasPromiseAtomValue(atomState)) {
              cancelPromise(atomState.v);
            }
            atomState.d.forEach((_3, a3) => {
              if (a3 !== atom2) {
                const mountedDep = mountedMap.get(a3);
                if (mountedDep) {
                  mountedDep.t.delete(atom2);
                  tryUnmountAtom(a3, mountedDep);
                }
              }
            });
          } else if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            console.warn("[Bug] could not find atom state to unmount", atom2);
          }
        };
        const mountDependencies = (atom2, atomState, prevDependencies) => {
          const depSet = new Set(atomState.d.keys());
          const maybeUnmountAtomSet = /* @__PURE__ */ new Set();
          prevDependencies == null ? void 0 : prevDependencies.forEach((_3, a3) => {
            if (depSet.has(a3)) {
              depSet.delete(a3);
              return;
            }
            maybeUnmountAtomSet.add(a3);
            const mounted = mountedMap.get(a3);
            if (mounted) {
              mounted.t.delete(atom2);
            }
          });
          depSet.forEach((a3) => {
            mountAtom(a3, atom2);
          });
          maybeUnmountAtomSet.forEach((a3) => {
            const mounted = mountedMap.get(a3);
            if (mounted) {
              tryUnmountAtom(a3, mounted);
            }
          });
        };
        const flushPending = (pendingAtoms) => {
          let flushed;
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            flushed = /* @__PURE__ */ new Set();
          }
          const pending = [];
          const collectPending = (pendingAtom) => {
            var _a;
            if (!pendingMap.has(pendingAtom)) {
              return;
            }
            const [prevAtomState, dependents] = pendingMap.get(pendingAtom);
            pendingMap.delete(pendingAtom);
            pending.push([pendingAtom, prevAtomState]);
            dependents.forEach(collectPending);
            (_a = getAtomState(pendingAtom)) == null ? void 0 : _a.d.forEach((_3, a3) => collectPending(a3));
          };
          pendingAtoms.forEach(collectPending);
          pending.forEach(([atom2, prevAtomState]) => {
            const atomState = getAtomState(atom2);
            if (!atomState) {
              if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
                console.warn("[Bug] no atom state to flush");
              }
              return;
            }
            if (atomState !== prevAtomState) {
              const mounted = mountedMap.get(atom2);
              if (mounted && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
                mountDependencies(atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
              }
              if (mounted && !// TODO This seems pretty hacky. Hope to fix it.
              // Maybe we could `mountDependencies` in `setAtomState`?
              (!hasPromiseAtomValue(prevAtomState) && (isEqualAtomValue(prevAtomState, atomState) || isEqualAtomError(prevAtomState, atomState)))) {
                mounted.l.forEach((listener) => listener());
                if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
                  flushed.add(atom2);
                }
              }
            }
          });
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            return flushed;
          }
        };
        const subscribeAtom = (atom2, listener) => {
          const mounted = mountAtom(atom2);
          const flushed = flushPending([atom2]);
          const listeners = mounted.l;
          listeners.add(listener);
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            devListenersRev2.forEach(
              (l3) => l3({ type: "sub", flushed })
            );
          }
          return () => {
            listeners.delete(listener);
            tryUnmountAtom(atom2, mounted);
            if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
              devListenersRev2.forEach((l3) => l3({ type: "unsub" }));
            }
          };
        };
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
          return {
            get: readAtom,
            set: writeAtom,
            sub: subscribeAtom,
            // store dev methods (these are tentative and subject to change without notice)
            dev_subscribe_store: (l3) => {
              devListenersRev2.add(l3);
              return () => {
                devListenersRev2.delete(l3);
              };
            },
            dev_get_mounted_atoms: () => mountedAtoms.values(),
            dev_get_atom_state: (a3) => atomStateMap.get(a3),
            dev_get_mounted: (a3) => mountedMap.get(a3),
            dev_restore_atoms: (values) => {
              pendingStack.push(/* @__PURE__ */ new Set());
              for (const [atom2, valueOrPromise] of values) {
                if (hasInitialValue(atom2)) {
                  setAtomValueOrPromise(atom2, valueOrPromise);
                  recomputeDependents(atom2);
                }
              }
              const flushed = flushPending(pendingStack.pop());
              devListenersRev2.forEach(
                (l3) => l3({ type: "restore", flushed })
              );
            }
          };
        }
        return {
          get: readAtom,
          set: writeAtom,
          sub: subscribeAtom
        };
      };
      getDefaultStore$1 = () => {
        if (!defaultStore) {
          defaultStore = createStore$1();
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
            if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
              console.warn(
                "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
              );
            }
          }
        }
        return defaultStore;
      };
      Symbol(
        (import_meta.env ? import_meta.env.MODE : void 0) !== "production" ? "CONTINUE_PROMISE" : ""
      );
      getDefaultStore = getDefaultStore$1;
    }
  });

  // node_modules/jotai/esm/react.mjs
  function useAtomValue(atom2, options) {
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = y2(
      (prev) => {
        const nextValue = store.get(atom2);
        if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
          return prev;
        }
        return [nextValue, store, atom2];
      },
      void 0,
      () => [store.get(atom2), store, atom2]
    );
    let value2 = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom2) {
      rerender();
      value2 = store.get(atom2);
    }
    const delay = options == null ? void 0 : options.delay;
    _2(() => {
      const unsub = store.sub(atom2, () => {
        if (typeof delay === "number") {
          setTimeout(rerender, delay);
          return;
        }
        rerender();
      });
      rerender();
      return unsub;
    }, [store, atom2, delay]);
    V2(value2);
    return isPromiseLike2(value2) ? use(value2) : value2;
  }
  function useSetAtom(atom2, options) {
    const store = useStore(options);
    const setAtom = x2(
      (...args) => {
        if ((import_meta2.env ? import_meta2.env.MODE : void 0) !== "production" && !("write" in atom2)) {
          throw new Error("not writable atom");
        }
        return store.set(atom2, ...args);
      },
      [store, atom2]
    );
    return setAtom;
  }
  function useAtom(atom2, options) {
    return [
      useAtomValue(atom2, options),
      // We do wrong type assertion here, which results in throwing an error.
      useSetAtom(atom2, options)
    ];
  }
  var import_meta2, StoreContext, useStore, isPromiseLike2, use;
  var init_react = __esm({
    "node_modules/jotai/esm/react.mjs"() {
      "use client";
      init_compat_module();
      init_vanilla();
      import_meta2 = {};
      StoreContext = G(
        void 0
      );
      useStore = (options) => {
        const store = P2(StoreContext);
        return (options == null ? void 0 : options.store) || store || getDefaultStore();
      };
      isPromiseLike2 = (x4) => typeof (x4 == null ? void 0 : x4.then) === "function";
      use = Rn.use || ((promise) => {
        if (promise.status === "pending") {
          throw promise;
        } else if (promise.status === "fulfilled") {
          return promise.value;
        } else if (promise.status === "rejected") {
          throw promise.reason;
        } else {
          promise.status = "pending";
          promise.then(
            (v3) => {
              promise.status = "fulfilled";
              promise.value = v3;
            },
            (e3) => {
              promise.status = "rejected";
              promise.reason = e3;
            }
          );
          throw promise;
        }
      });
    }
  });

  // node_modules/jotai/esm/index.mjs
  var init_esm = __esm({
    "node_modules/jotai/esm/index.mjs"() {
      init_vanilla();
      init_react();
    }
  });

  // src/atoms.ts
  var hexColorAtom, opacityAtom, iconSizeAtom, addMetaDataAtom, scaleIconContentAtom;
  var init_atoms = __esm({
    "src/atoms.ts"() {
      "use strict";
      init_esm();
      hexColorAtom = atom("#0D0C0C");
      opacityAtom = atom("100");
      iconSizeAtom = atom("24px");
      addMetaDataAtom = atom(false);
      scaleIconContentAtom = atom(false);
    }
  });

  // src/IconFix/ColorPicker.tsx
  var MemoizedTextboxColor, ColorPickerElement, ColorPicker_default;
  var init_ColorPicker = __esm({
    "src/IconFix/ColorPicker.tsx"() {
      "use strict";
      init_preact_module();
      init_lib2();
      init_esm();
      init_atoms();
      init_compat_module();
      MemoizedTextboxColor = x3(TextboxColor);
      ColorPickerElement = () => {
        const [hexColor, setHexColor] = useAtom(hexColorAtom);
        const [opacity, setOpacity] = useAtom(opacityAtom);
        function handleHexColorInput(event) {
          const newHexColor = event.currentTarget.value;
          setHexColor(newHexColor);
        }
        function handleOpacityInput(event) {
          const newOpacity = event.currentTarget.value;
          setOpacity(newOpacity);
        }
        return /* @__PURE__ */ _(
          MemoizedTextboxColor,
          {
            hexColor,
            onHexColorInput: handleHexColorInput,
            onOpacityInput: handleOpacityInput,
            opacity,
            variant: "border"
          }
        );
      };
      ColorPicker_default = ColorPickerElement;
    }
  });

  // src/IconFix/Dropdown.tsx
  function SizeDropdown({ disabled }) {
    const [value2, setValue] = useAtom(iconSizeAtom);
    const options = [
      {
        value: "16px"
      },
      {
        value: "20px"
      },
      {
        value: "24px"
      },
      {
        value: "32px"
      }
    ];
    function handleChange(event) {
      const newValue = event.currentTarget.value;
      setValue(newValue);
    }
    return /* @__PURE__ */ _(
      Dropdown,
      {
        onChange: handleChange,
        options,
        value: value2,
        variant: "border",
        disabled,
        style: { width: "144px" }
      }
    );
  }
  var Dropdown_default;
  var init_Dropdown = __esm({
    "src/IconFix/Dropdown.tsx"() {
      "use strict";
      init_preact_module();
      init_lib2();
      init_esm();
      init_atoms();
      Dropdown_default = SizeDropdown;
    }
  });

  // src/IconFix/CheckBox.tsx
  function CheckBox_default({ label, type }) {
    const [value2, setValue] = type === "metadata" ? useAtom(addMetaDataAtom) : useAtom(scaleIconContentAtom);
    function handleChange(event) {
      const newValue = event.currentTarget.checked;
      setValue(newValue);
    }
    return /* @__PURE__ */ _(Checkbox, { onChange: handleChange, value: value2 }, /* @__PURE__ */ _(Text, null, label));
  }
  var init_CheckBox = __esm({
    "src/IconFix/CheckBox.tsx"() {
      "use strict";
      init_preact_module();
      init_lib2();
      init_esm();
      init_atoms();
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/2db69460-4610-4e06-b76f-7de6e9dc7005/styles.js
  var init_styles = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/2db69460-4610-4e06-b76f-7de6e9dc7005/styles.js"() {
      if (document.getElementById("3db12f72a8") === null) {
        const element = document.createElement("style");
        element.id = "3db12f72a8";
        element.textContent = `/* @font-face {
  font-family: "haas-text";
  src: url("fonts/NHaasGroteskTXPro-55Rg.ttf") format("truetype");
} */

._container_1perd_6 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
}

._content_1perd_15 {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}

._splash-content_1perd_23 {
  height: 350px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

._success_1perd_32 {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

._missing_1perd_39 {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

._success-group_1perd_47 {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

._success-icon_1perd_55 {
  font-size: 150px;
  text-align: center;
  margin: 0;
  padding: 0;
}

._success-text_1perd_62 {
  margin: 0;
  padding: 0;
  font-size: 20px;
  text-align: center;
}

._button_1perd_69 {
  width: 100%;
  color: white;
  border-radius: 60px;
  margin-bottom: 24px
}

._radio-buttons_1perd_76 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

._radio-buttons_1perd_76> :first-child {
  display: flex;
}

@keyframes _blinkAnim_1perd_1 {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InN0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGFhcy10ZXh0XCI7XG4gIHNyYzogdXJsKFwiZm9udHMvTkhhYXNHcm90ZXNrVFhQcm8tNTVSZy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59ICovXG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3BsYXNoLWNvbnRlbnQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMjgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VjY2VzcyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5taXNzaW5nIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3VjY2Vzcy1ncm91cCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VjY2Vzcy1pY29uIHtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zdWNjZXNzLXRleHQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweFxufVxuXG4ucmFkaW8tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmFkaW8tYnV0dG9ucz4gOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuQGtleWZyYW1lcyBibGlua0FuaW0ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */`;
        document.head.append(element);
      }
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [rows, setRows] = p2("");
    const [iconSpacing, setIconSpacing] = p2("");
    const [rowSpacing, setRowSpacing] = p2("");
    const [columnSpacing, setColumnSpacing] = p2("");
    const [hexColor, setHexColor] = useAtom(hexColorAtom);
    const [opacity, setOpacity] = useAtom(opacityAtom);
    const [iconSize, setIconSize] = useAtom(iconSizeAtom);
    const [addMetaData, setAddMetaData] = useAtom(addMetaDataAtom);
    const [scaleIconContent, setScaleIconContent] = useAtom(scaleIconContentAtom);
    const handleRowInput = x2((e3) => {
      setRows(e3.target.value);
    }, []);
    const handleIconInput = x2((e3) => {
      setIconSpacing(e3.target.value);
    }, []);
    const handleRowsInput = x2((e3) => {
      setRowSpacing(e3.target.value);
    }, []);
    const handleColumnInput = x2((e3) => {
      setColumnSpacing(e3.target.value);
    }, []);
    const handleClick = x2(() => {
      const data = {
        rows,
        iconSpacing,
        rowSpacing,
        columnSpacing,
        hexColor,
        opacity,
        iconSize,
        addMetaData,
        scaleIconContent
      };
      emit("SEND", data);
    }, [
      rows,
      iconSpacing,
      rowSpacing,
      columnSpacing,
      hexColor,
      opacity,
      iconSize,
      addMetaData,
      scaleIconContent
    ]);
    const handleSavedData = x2(
      (data) => {
        if (data) {
          setRows(data.rows || 10);
          setIconSpacing(data.iconSpacing || 10);
          setRowSpacing(data.rowSpacing || 16);
          setColumnSpacing(data.columnSpacing || 36);
          setHexColor(data.hexColor || "#0D0C0C");
          setOpacity(data.opacity || "100");
          setIconSize(data.iconSize || "24px");
          setAddMetaData(data.addMetaData || false);
          setScaleIconContent(data.scaleIconContent || false);
        }
      },
      []
    );
    on2("SAVED_DATA", handleSavedData);
    _2(() => {
      const handleKeyDown = (event) => {
        const isCorrectKeyCombo = (event.ctrlKey || event.metaKey) && event.key === "Enter";
        if (isCorrectKeyCombo) {
          handleClick();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleClick]);
    const LayoutSettings = q2(() => {
      const rowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      };
      const metadataCheckBoxRowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "50px"
      };
      const scaleCheckBoxRowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "28px"
      };
      return /* @__PURE__ */ _("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ _("div", { style: rowStyle }, /* @__PURE__ */ _(Text, null, "Rows"), /* @__PURE__ */ _(
        TextboxNumeric,
        {
          revertOnEscapeKeyDown: true,
          integer: true,
          onInput: handleRowInput,
          value: rows,
          variant: "border",
          style: { width: "144px" }
        }
      )), /* @__PURE__ */ _(VerticalSpace, { space: "small" }), /* @__PURE__ */ _("div", { style: rowStyle }, /* @__PURE__ */ _(Text, null, "Icon spacing \u2194\uFE0F"), /* @__PURE__ */ _(
        TextboxNumeric,
        {
          revertOnEscapeKeyDown: true,
          integer: true,
          onInput: handleIconInput,
          value: iconSpacing,
          variant: "border",
          style: { width: "144px" }
        }
      )), /* @__PURE__ */ _(VerticalSpace, { space: "small" }), /* @__PURE__ */ _("div", { style: rowStyle }, /* @__PURE__ */ _(Text, null, "Row spacing \u2195\uFE0F"), /* @__PURE__ */ _(
        TextboxNumeric,
        {
          revertOnEscapeKeyDown: true,
          integer: true,
          onInput: handleRowsInput,
          value: rowSpacing,
          variant: "border",
          style: { width: "144px" }
        }
      )), /* @__PURE__ */ _(VerticalSpace, { space: "small" }), /* @__PURE__ */ _("div", { style: rowStyle }, /* @__PURE__ */ _(Text, null, "Column spacing \u2194\uFE0F"), /* @__PURE__ */ _(
        TextboxNumeric,
        {
          revertOnEscapeKeyDown: true,
          integer: true,
          onInput: handleColumnInput,
          value: columnSpacing,
          variant: "border",
          style: { width: "144px" }
        }
      )), /* @__PURE__ */ _(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ _("div", { style: rowStyle }, /* @__PURE__ */ _(Text, null, "Icon color"), /* @__PURE__ */ _(ColorPicker_default, null)), /* @__PURE__ */ _(VerticalSpace, { space: "small" }), /* @__PURE__ */ _("div", { style: rowStyle }, /* @__PURE__ */ _(Text, null, "Icon size"), /* @__PURE__ */ _(Dropdown_default, null)), /* @__PURE__ */ _(VerticalSpace, { space: "medium" }), /* @__PURE__ */ _("div", { style: scaleCheckBoxRowStyle }, /* @__PURE__ */ _(Text, null, "Scale icon content"), /* @__PURE__ */ _(CheckBox_default, { label: "", type: "scale" })), /* @__PURE__ */ _(VerticalSpace, { space: "medium" }), /* @__PURE__ */ _("div", { style: metadataCheckBoxRowStyle }, /* @__PURE__ */ _(Text, null, "Add metadata"), /* @__PURE__ */ _(CheckBox_default, { label: "", type: "metadata" })), /* @__PURE__ */ _(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ _(
        Button,
        {
          fullWidth: true,
          onClick: () => handleClick(),
          style: {
            backgroundColor: "#0280C4"
          }
        },
        "Build Icon Grid"
      ));
    }, [
      rows,
      iconSpacing,
      rowSpacing,
      columnSpacing,
      handleRowInput,
      handleIconInput,
      handleRowsInput,
      handleColumnInput,
      handleClick
    ]);
    return /* @__PURE__ */ _(Container, { space: "medium" }, /* @__PURE__ */ _(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ _(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ _("h2", { className: "title" }, "Icon grid"),
      /* @__PURE__ */ _(
        "div",
        {
          style: { display: "flex", alignItems: "center", gap: "4px" }
        }
      )
    ), /* @__PURE__ */ _(VerticalSpace, { space: "extraLarge" }), LayoutSettings, /* @__PURE__ */ _(VerticalSpace, { space: "large" }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_esm();
      init_ColorPicker();
      init_Dropdown();
      init_CheckBox();
      init_atoms();
      init_styles();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/code.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/code.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
