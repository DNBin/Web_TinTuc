!function () {
  function l(l, n) {
    var u = l.split('.'),
      t = T
    u[0] in t || !t.execScript || t.execScript('var ' + u[0])
    for (var e; u.length && (e = u.shift()); )
      u.length || void 0 === n ? (t = t[e] ? t[e] : (t[e] = {})) : (t[e] = n)
  }
  function n(l, n) {
    function u() {}
    ;(u.prototype = n.prototype),
      (l.M = n.prototype),
      (l.prototype = new u()),
      (l.prototype.constructor = l),
      (l.N = function (l, u, t) {
        for (
          var e = Array(arguments.length - 2), r = 2;
          r < arguments.length;
          r++
        )
          e[r - 2] = arguments[r]
        return n.prototype[u].apply(l, e)
      })
  }
  function u(l, n) {
    null != l && this.a.apply(this, arguments)
  }
  function t(l) {
    l.b = ''
  }
  function e(l, n) {
    l.sort(n || r)
  }
  function r(l, n) {
    return l > n ? 1 : l < n ? -1 : 0
  }
  function i(l) {
    var n,
      u = [],
      t = 0
    for (n in l) u[t++] = l[n]
    return u
  }
  function a(l, n) {
    ;(this.b = l), (this.a = {})
    for (var u = 0; u < n.length; u++) {
      var t = n[u]
      this.a[t.b] = t
    }
  }
  function d(l) {
    return (
      (l = i(l.a)),
      e(l, function (l, n) {
        return l.b - n.b
      }),
      l
    )
  }
  function o(l, n) {
    switch (
      ((this.b = l),
      (this.g = !!n.v),
      (this.a = n.c),
      (this.i = n.type),
      (this.h = !1),
      this.a)
    ) {
      case k:
      case J:
      case K:
      case L:
      case O:
      case Y:
      case X:
        this.h = !0
    }
    this.f = n.defaultValue
  }
  function s() {
    ;(this.a = {}), (this.f = this.j().a), (this.b = this.g = null)
  }
  function f(l, n) {
    for (var u = d(l.j()), t = 0; t < u.length; t++) {
      var e = u[t],
        r = e.b
      if (null != n.a[r]) {
        l.b && delete l.b[e.b]
        var i = 11 == e.a || 10 == e.a
        if (e.g)
          for (var e = p(n, r) || [], a = 0; a < e.length; a++) {
            var o = l,
              s = r,
              c = i ? e[a].clone() : e[a]
            o.a[s] || (o.a[s] = []), o.a[s].push(c), o.b && delete o.b[s]
          }
        else
          (e = p(n, r)),
            i ? ((i = p(l, r)) ? f(i, e) : g(l, r, e.clone())) : g(l, r, e)
      }
    }
  }
  function p(l, n) {
    var u = l.a[n]
    if (null == u) return null
    if (l.g) {
      if (!(n in l.b)) {
        var t = l.g,
          e = l.f[n]
        if (null != u)
          if (e.g) {
            for (var r = [], i = 0; i < u.length; i++) r[i] = t.b(e, u[i])
            u = r
          } else u = t.b(e, u)
        return (l.b[n] = u)
      }
      return l.b[n]
    }
    return u
  }
  function c(l, n, u) {
    var t = p(l, n)
    return l.f[n].g ? t[u || 0] : t
  }
  function h(l, n) {
    var u
    if (null != l.a[n]) u = c(l, n, void 0)
    else
      l: {
        if (((u = l.f[n]), void 0 === u.f)) {
          var t = u.i
          if (t === Boolean) u.f = !1
          else if (t === Number) u.f = 0
          else {
            if (t !== String) {
              u = new t()
              break l
            }
            u.f = u.h ? '0' : ''
          }
        }
        u = u.f
      }
    return u
  }
  function $(l, n) {
    return l.f[n].g
      ? null != l.a[n]
        ? l.a[n].length
        : 0
      : null != l.a[n]
      ? 1
      : 0
  }
  function g(l, n, u) {
    ;(l.a[n] = u), l.b && (l.b[n] = u)
  }
  function m(l, n) {
    var u,
      t = []
    for (u in n) 0 != u && t.push(new o(u, n[u]))
    return new a(l, t)
  } /*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  function b() {
    s.call(this)
  }
  function y() {
    s.call(this)
  }
  function v() {
    s.call(this)
  }
  function _() {}
  function C() {}
  function S() {} /*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  function w() {
    this.a = {}
  }
  function x(l) {
    return 0 == l.length || rl.test(l)
  }
  function A(l, n) {
    if (null == n) return null
    n = n.toUpperCase()
    var u = l.a[n]
    if (null == u) {
      if (((u = nl[n]), null == u)) return null
      ;(u = new S().a(v.j(), u)), (l.a[n] = u)
    }
    return u
  }
  function N(l) {
    return (l = ll[l]), null == l ? 'ZZ' : l[0]
  }
  function j(l) {
    ;(this.H = RegExp(' ')),
      (this.C = ''),
      (this.m = new u()),
      (this.w = ''),
      (this.i = new u()),
      (this.u = new u()),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.G = w.b()),
      (this.s = 0),
      (this.b = new u()),
      (this.B = !1),
      (this.h = ''),
      (this.a = new u()),
      (this.f = []),
      (this.D = l),
      (this.J = this.g = E(this, this.D))
  }
  function E(l, n) {
    var u
    if (null != n && isNaN(n) && n.toUpperCase() in nl) {
      if (((u = A(l.G, n)), null == u)) throw Error('Invalid region code: ' + n)
      u = h(u, 10)
    } else u = 0
    return (u = A(l.G, N(u))), null != u ? u : il
  }
  function B(l) {
    for (var n = l.f.length, u = 0; u < n; ++u) {
      var e = l.f[u],
        r = h(e, 1)
      if (l.w == r) return !1
      var i
      i = l
      var a = e,
        d = h(a, 1)
      if (-1 != d.indexOf('|')) i = !1
      else {
        ;(d = d.replace(al, '\\d')), (d = d.replace(dl, '\\d')), t(i.m)
        var o
        o = i
        var a = h(a, 2),
          s = '999999999999999'.match(d)[0]
        s.length < o.a.b.length
          ? (o = '')
          : ((o = s.replace(new RegExp(d, 'g'), a)),
            (o = o.replace(RegExp('9', 'g'), ' '))),
          0 < o.length ? (i.m.a(o), (i = !0)) : (i = !1)
      }
      if (i) return (l.w = r), (l.B = sl.test(c(e, 4))), (l.s = 0), !0
    }
    return (l.l = !1)
  }
  function R(l, n) {
    for (var u = [], t = n.length - 3, e = l.f.length, r = 0; r < e; ++r) {
      var i = l.f[r]
      0 == $(i, 3)
        ? u.push(l.f[r])
        : ((i = c(i, 3, Math.min(t, $(i, 3) - 1))),
          0 == n.search(i) && u.push(l.f[r]))
    }
    l.f = u
  }
  function F(l, n) {
    l.i.a(n)
    var u = n
    if (el.test(u) || (1 == l.i.b.length && tl.test(u))) {
      var e,
        u = n
      '+' == u ? ((e = u), l.u.a(u)) : ((e = ul[u]), l.u.a(e), l.a.a(e)),
        (n = e)
    } else (l.l = !1), (l.F = !0)
    if (!l.l) {
      if (!l.F)
        if (H(l)) {
          if (P(l)) return I(l)
        } else if (
          (0 < l.h.length &&
            ((u = l.a.toString()),
            t(l.a),
            l.a.a(l.h),
            l.a.a(u),
            (u = l.b.toString()),
            (e = u.lastIndexOf(l.h)),
            t(l.b),
            l.b.a(u.substring(0, e))),
          l.h != G(l))
        )
          return l.b.a(' '), I(l)
      return l.i.toString()
    }
    switch (l.u.b.length) {
      case 0:
      case 1:
      case 2:
        return l.i.toString()
      case 3:
        if (!H(l)) return (l.h = G(l)), M(l)
        l.A = !0
      default:
        return l.A
          ? (P(l) && (l.A = !1), l.b.toString() + l.a.toString())
          : 0 < l.f.length
          ? ((u = q(l, n)),
            (e = D(l)),
            0 < e.length
              ? e
              : (R(l, l.a.toString()),
                B(l) ? V(l) : l.l ? U(l, u) : l.i.toString()))
          : M(l)
    }
  }
  function I(l) {
    return (
      (l.l = !0), (l.A = !1), (l.f = []), (l.s = 0), t(l.m), (l.w = ''), M(l)
    )
  }
  function D(l) {
    for (var n = l.a.toString(), u = l.f.length, t = 0; t < u; ++t) {
      var e = l.f[t],
        r = h(e, 1)
      if (new RegExp('^(?:' + r + ')$').test(n))
        return (
          (l.B = sl.test(c(e, 4))),
          (n = n.replace(new RegExp(r, 'g'), c(e, 2))),
          U(l, n)
        )
    }
    return ''
  }
  function U(l, n) {
    var u = l.b.b.length
    return l.B && 0 < u && ' ' != l.b.toString().charAt(u - 1)
      ? l.b + ' ' + n
      : l.b + n
  }
  function M(l) {
    var n = l.a.toString()
    if (3 <= n.length) {
      for (
        var u =
            l.o && 0 == l.h.length && 0 < $(l.g, 20)
              ? p(l.g, 20) || []
              : p(l.g, 19) || [],
          t = u.length,
          e = 0;
        e < t;
        ++e
      ) {
        var r = u[e]
        ;(0 < l.h.length && x(h(r, 4)) && !c(r, 6) && null == r.a[5]) ||
          ((0 != l.h.length || l.o || x(h(r, 4)) || c(r, 6)) &&
            ol.test(h(r, 2)) &&
            l.f.push(r))
      }
      return (
        R(l, n), (n = D(l)), 0 < n.length ? n : B(l) ? V(l) : l.i.toString()
      )
    }
    return U(l, n)
  }
  function V(l) {
    var n = l.a.toString(),
      u = n.length
    if (0 < u) {
      for (var t = '', e = 0; e < u; e++) t = q(l, n.charAt(e))
      return l.l ? U(l, t) : l.i.toString()
    }
    return l.b.toString()
  }
  function G(l) {
    var n,
      u = l.a.toString(),
      e = 0
    return (
      1 != c(l.g, 10)
        ? (n = !1)
        : ((n = l.a.toString()),
          (n = '1' == n.charAt(0) && '0' != n.charAt(1) && '1' != n.charAt(1))),
      n
        ? ((e = 1), l.b.a('1').a(' '), (l.o = !0))
        : null != l.g.a[15] &&
          ((n = new RegExp('^(?:' + c(l.g, 15) + ')')),
          (n = u.match(n)),
          null != n &&
            null != n[0] &&
            0 < n[0].length &&
            ((l.o = !0), (e = n[0].length), l.b.a(u.substring(0, e)))),
      t(l.a),
      l.a.a(u.substring(e)),
      u.substring(0, e)
    )
  }
  function H(l) {
    var n = l.u.toString(),
      u = new RegExp('^(?:\\+|' + c(l.g, 11) + ')'),
      u = n.match(u)
    return (
      null != u &&
      null != u[0] &&
      0 < u[0].length &&
      ((l.o = !0),
      (u = u[0].length),
      t(l.a),
      l.a.a(n.substring(u)),
      t(l.b),
      l.b.a(n.substring(0, u)),
      '+' != n.charAt(0) && l.b.a(' '),
      !0)
    )
  }
  function P(l) {
    if (0 == l.a.b.length) return !1
    var n,
      e = new u()
    l: {
      if (((n = l.a.toString()), 0 != n.length && '0' != n.charAt(0)))
        for (var r, i = n.length, a = 1; 3 >= a && a <= i; ++a)
          if (((r = parseInt(n.substring(0, a), 10)), r in ll)) {
            e.a(n.substring(a)), (n = r)
            break l
          }
      n = 0
    }
    return (
      0 != n &&
      (t(l.a),
      l.a.a(e.toString()),
      (e = N(n)),
      '001' == e ? (l.g = A(l.G, '' + n)) : e != l.D && (l.g = E(l, e)),
      l.b.a('' + n).a(' '),
      (l.h = ''),
      !0)
    )
  }
  function q(l, n) {
    var u = l.m.toString()
    if (0 <= u.substring(l.s).search(l.H)) {
      var e = u.search(l.H),
        u = u.replace(l.H, n)
      return t(l.m), l.m.a(u), (l.s = e), u.substring(0, l.s + 1)
    }
    return 1 == l.f.length && (l.l = !1), (l.w = ''), l.i.toString()
  }
  var T = this
  ;(u.prototype.b = ''),
    (u.prototype.set = function (l) {
      this.b = '' + l
    }),
    (u.prototype.a = function (l, n, u) {
      if (((this.b += String(l)), null != n))
        for (var t = 1; t < arguments.length; t++) this.b += arguments[t]
      return this
    }),
    (u.prototype.toString = function () {
      return this.b
    })
  var X = 1,
    Y = 2,
    k = 3,
    J = 4,
    K = 6,
    L = 16,
    O = 18
  ;(s.prototype.set = function (l, n) {
    g(this, l.b, n)
  }),
    (s.prototype.clone = function () {
      var l = new this.constructor()
      return l != this && ((l.a = {}), l.b && (l.b = {}), f(l, this)), l
    }),
    n(b, s)
  var Z = null
  n(y, s)
  var z = null
  n(v, s)
  var Q = null
  ;(b.prototype.j = function () {
    var l = Z
    return (
      l ||
        (Z = l =
          m(b, {
            0: { name: 'NumberFormat', I: 'i18n.phonenumbers.NumberFormat' },
            1: { name: 'pattern', required: !0, c: 9, type: String },
            2: { name: 'format', required: !0, c: 9, type: String },
            3: { name: 'leading_digits_pattern', v: !0, c: 9, type: String },
            4: { name: 'national_prefix_formatting_rule', c: 9, type: String },
            6: {
              name: 'national_prefix_optional_when_formatting',
              c: 8,
              defaultValue: !1,
              type: Boolean,
            },
            5: {
              name: 'domestic_carrier_code_formatting_rule',
              c: 9,
              type: String,
            },
          })),
      l
    )
  }),
    (b.j = b.prototype.j),
    (y.prototype.j = function () {
      var l = z
      return (
        l ||
          (z = l =
            m(y, {
              0: {
                name: 'PhoneNumberDesc',
                I: 'i18n.phonenumbers.PhoneNumberDesc',
              },
              2: { name: 'national_number_pattern', c: 9, type: String },
              9: { name: 'possible_length', v: !0, c: 5, type: Number },
              10: {
                name: 'possible_length_local_only',
                v: !0,
                c: 5,
                type: Number,
              },
              6: { name: 'example_number', c: 9, type: String },
            })),
        l
      )
    }),
    (y.j = y.prototype.j),
    (v.prototype.j = function () {
      var l = Q
      return (
        l ||
          (Q = l =
            m(v, {
              0: {
                name: 'PhoneMetadata',
                I: 'i18n.phonenumbers.PhoneMetadata',
              },
              1: { name: 'general_desc', c: 11, type: y },
              2: { name: 'fixed_line', c: 11, type: y },
              3: { name: 'mobile', c: 11, type: y },
              4: { name: 'toll_free', c: 11, type: y },
              5: { name: 'premium_rate', c: 11, type: y },
              6: { name: 'shared_cost', c: 11, type: y },
              7: { name: 'personal_number', c: 11, type: y },
              8: { name: 'voip', c: 11, type: y },
              21: { name: 'pager', c: 11, type: y },
              25: { name: 'uan', c: 11, type: y },
              27: { name: 'emergency', c: 11, type: y },
              28: { name: 'voicemail', c: 11, type: y },
              29: { name: 'short_code', c: 11, type: y },
              30: { name: 'standard_rate', c: 11, type: y },
              31: { name: 'carrier_specific', c: 11, type: y },
              33: { name: 'sms_services', c: 11, type: y },
              24: { name: 'no_international_dialling', c: 11, type: y },
              9: { name: 'id', required: !0, c: 9, type: String },
              10: { name: 'country_code', c: 5, type: Number },
              11: { name: 'international_prefix', c: 9, type: String },
              17: {
                name: 'preferred_international_prefix',
                c: 9,
                type: String,
              },
              12: { name: 'national_prefix', c: 9, type: String },
              13: { name: 'preferred_extn_prefix', c: 9, type: String },
              15: { name: 'national_prefix_for_parsing', c: 9, type: String },
              16: {
                name: 'national_prefix_transform_rule',
                c: 9,
                type: String,
              },
              18: {
                name: 'same_mobile_and_fixed_line_pattern',
                c: 8,
                defaultValue: !1,
                type: Boolean,
              },
              19: { name: 'number_format', v: !0, c: 11, type: b },
              20: { name: 'intl_number_format', v: !0, c: 11, type: b },
              22: {
                name: 'main_country_for_code',
                c: 8,
                defaultValue: !1,
                type: Boolean,
              },
              23: { name: 'leading_digits', c: 9, type: String },
              26: {
                name: 'leading_zero_possible',
                c: 8,
                defaultValue: !1,
                type: Boolean,
              },
            })),
        l
      )
    }),
    (v.j = v.prototype.j),
    (_.prototype.a = function (l) {
      throw (new l.b(), Error('Unimplemented'))
    }),
    (_.prototype.b = function (l, n) {
      if (11 == l.a || 10 == l.a)
        return n instanceof s ? n : this.a(l.i.prototype.j(), n)
      if (14 == l.a) {
        if ('string' == typeof n && W.test(n)) {
          var u = Number(n)
          if (0 < u) return u
        }
        return n
      }
      if (!l.h) return n
      if (((u = l.i), u === String)) {
        if ('number' == typeof n) return String(n)
      } else if (
        u === Number &&
        'string' == typeof n &&
        ('Infinity' === n || '-Infinity' === n || 'NaN' === n || W.test(n))
      )
        return Number(n)
      return n
    })
  var W = /^-?[0-9]+$/
  n(C, _),
    (C.prototype.a = function (l, n) {
      var u = new l.b()
      return (u.g = this), (u.a = n), (u.b = {}), u
    }),
    n(S, C),
    (S.prototype.b = function (l, n) {
      return 8 == l.a ? !!n : _.prototype.b.apply(this, arguments)
    }),
    (S.prototype.a = function (l, n) {
      return S.M.a.call(this, l, n)
    }) /*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var ll = { 61: ['AU', 'CC', 'CX'], 86: ['CN'] },
    nl = {
      AU: [
        null,
        [
          null,
          null,
          '1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10],
        ],
        [
          null,
          null,
          '(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}',
          null,
          null,
          null,
          '212345678',
          null,
          null,
          [9],
          [8],
        ],
        [
          null,
          null,
          '4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}',
          null,
          null,
          null,
          '412345678',
          null,
          null,
          [9],
        ],
        [
          null,
          null,
          '180(?:0\\d{3}|2)\\d{3}',
          null,
          null,
          null,
          '1800123456',
          null,
          null,
          [7, 10],
        ],
        [
          null,
          null,
          '190[0-26]\\d{6}',
          null,
          null,
          null,
          '1900123456',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}',
          null,
          null,
          null,
          '1300123456',
          null,
          null,
          [6, 8, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:14(?:5\\d|71)|550\\d)\\d{5}',
          null,
          null,
          null,
          '550123456',
          null,
          null,
          [9],
        ],
        'AU',
        61,
        '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011',
        '0',
        null,
        null,
        '0',
        null,
        '0011',
        null,
        [
          [null, '(\\d{3})(\\d{3})', '$1 $2', ['19']],
          [null, '(\\d{4})(\\d{3,4})', '$1 $2', ['19']],
          [null, '(\\d{2})(\\d{3,4})', '$1 $2', ['16'], '0$1'],
          [null, '(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['13']],
          [null, '(\\d{3})(\\d{4})', '$1 $2', ['180', '1802']],
          [null, '(\\d{2})(\\d{3})(\\d{2,4})', '$1 $2 $3', ['16'], '0$1'],
          [null, '(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['[2378]'], '(0$1)'],
          [null, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['14|[45]'], '0$1'],
          [null, '(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1(?:30|[89])']],
        ],
        [
          [null, '(\\d{2})(\\d{3,4})', '$1 $2', ['16'], '0$1'],
          [null, '(\\d{2})(\\d{3})(\\d{2,4})', '$1 $2 $3', ['16'], '0$1'],
          [null, '(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['[2378]'], '(0$1)'],
          [null, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['14|[45]'], '0$1'],
          [null, '(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1(?:30|[89])']],
        ],
        [
          null,
          null,
          '16\\d{3,7}',
          null,
          null,
          null,
          '1612345',
          null,
          null,
          [5, 6, 7, 8, 9],
        ],
        1,
        null,
        [
          null,
          null,
          '1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}',
          null,
          null,
          null,
          null,
          null,
          null,
          [6, 7, 8, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      CC: [
        null,
        [
          null,
          null,
          '1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [6, 7, 8, 9, 10],
        ],
        [
          null,
          null,
          '8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}',
          null,
          null,
          null,
          '891621234',
          null,
          null,
          [9],
          [8],
        ],
        [
          null,
          null,
          '4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}',
          null,
          null,
          null,
          '412345678',
          null,
          null,
          [9],
        ],
        [
          null,
          null,
          '180(?:0\\d{3}|2)\\d{3}',
          null,
          null,
          null,
          '1800123456',
          null,
          null,
          [7, 10],
        ],
        [
          null,
          null,
          '190[0-26]\\d{6}',
          null,
          null,
          null,
          '1900123456',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}',
          null,
          null,
          null,
          '1300123456',
          null,
          null,
          [6, 8, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:14(?:5\\d|71)|550\\d)\\d{5}',
          null,
          null,
          null,
          '550123456',
          null,
          null,
          [9],
        ],
        'CC',
        61,
        '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011',
        '0',
        null,
        null,
        '0|([59]\\d{7})$',
        '8$1',
        '0011',
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      CN: [
        null,
        [
          null,
          null,
          '(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [7, 8, 9, 10, 11, 12],
          [5, 6],
        ],
        [
          null,
          null,
          '21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})',
          null,
          null,
          null,
          '1012345678',
          null,
          null,
          null,
          [5, 6],
        ],
        [
          null,
          null,
          '1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|6[267]\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[189]\\d{2})\\d{6}',
          null,
          null,
          null,
          '13123456789',
          null,
          null,
          [11],
        ],
        [
          null,
          null,
          '(?:10)?800\\d{7}',
          null,
          null,
          null,
          '8001234567',
          null,
          null,
          [10, 12],
        ],
        [
          null,
          null,
          '16[08]\\d{5}',
          null,
          null,
          null,
          '16812345',
          null,
          null,
          [8],
        ],
        [
          null,
          null,
          '400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}',
          null,
          null,
          null,
          '4001234567',
          null,
          null,
          [7, 8, 9, 10, 11],
          [5, 6],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        'CN',
        86,
        '(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00',
        '0',
        null,
        null,
        '0|(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))',
        null,
        '00',
        null,
        [
          [null, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[48]00']],
          [null, '(\\d{5,6})', '$1', ['100|95']],
          [
            null,
            '(\\d{2})(\\d{5,6})',
            '$1 $2',
            [
              '(?:10|2\\d)[19]',
              '(?:10|2\\d)(?:10|9[56])',
              '(?:10|2\\d)(?:100|9[56])',
            ],
            '0$1',
            '$CC $1',
          ],
          [
            null,
            '(\\d{3})(\\d{5,6})',
            '$1 $2',
            ['[3-9]', '[3-9]\\d\\d[19]', '[3-9]\\d\\d(?:10|9[56])'],
            '0$1',
            '$CC $1',
          ],
          [null, '(\\d{3,4})(\\d{4})', '$1 $2', ['[2-9]']],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4,6})',
            '$1 $2 $3',
            ['21'],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            [
              '10[1-9]|2[02-9]',
              '10[1-9]|2[02-9]',
              '10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]',
            ],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            [
              '3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])',
            ],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            [
              '3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)',
            ],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{4})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            ['807', '8078'],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            ['1(?:[3-57-9]|6[267])'],
            null,
            '$CC $1',
          ],
          [
            null,
            '(\\d{5})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            ['108', '1080', '10800'],
          ],
          [null, '(\\d{3})(\\d{7,8})', '$1 $2', ['950']],
        ],
        [
          [null, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[48]00']],
          [
            null,
            '(\\d{2})(\\d{5,6})',
            '$1 $2',
            [
              '(?:10|2\\d)[19]',
              '(?:10|2\\d)(?:10|9[56])',
              '(?:10|2\\d)(?:100|9[56])',
            ],
            '0$1',
            '$CC $1',
          ],
          [
            null,
            '(\\d{3})(\\d{5,6})',
            '$1 $2',
            ['[3-9]', '[3-9]\\d\\d[19]', '[3-9]\\d\\d(?:10|9[56])'],
            '0$1',
            '$CC $1',
          ],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4,6})',
            '$1 $2 $3',
            ['21'],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            [
              '10[1-9]|2[02-9]',
              '10[1-9]|2[02-9]',
              '10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]',
            ],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            [
              '3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])',
            ],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            [
              '3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)',
            ],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{4})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            ['807', '8078'],
            '0$1',
            '$CC $1',
            1,
          ],
          [
            null,
            '(\\d{3})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            ['1(?:[3-57-9]|6[267])'],
            null,
            '$CC $1',
          ],
          [
            null,
            '(\\d{5})(\\d{3})(\\d{4})',
            '$1 $2 $3',
            ['108', '1080', '10800'],
          ],
          [null, '(\\d{3})(\\d{7,8})', '$1 $2', ['950']],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [
          null,
          null,
          '(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}',
          null,
          null,
          null,
          null,
          null,
          null,
          [10, 11, 12],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      CX: [
        null,
        [
          null,
          null,
          '1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [6, 7, 8, 9, 10],
        ],
        [
          null,
          null,
          '8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}',
          null,
          null,
          null,
          '891641234',
          null,
          null,
          [9],
          [8],
        ],
        [
          null,
          null,
          '4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}',
          null,
          null,
          null,
          '412345678',
          null,
          null,
          [9],
        ],
        [
          null,
          null,
          '180(?:0\\d{3}|2)\\d{3}',
          null,
          null,
          null,
          '1800123456',
          null,
          null,
          [7, 10],
        ],
        [
          null,
          null,
          '190[0-26]\\d{6}',
          null,
          null,
          null,
          '1900123456',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}',
          null,
          null,
          null,
          '1300123456',
          null,
          null,
          [6, 8, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:14(?:5\\d|71)|550\\d)\\d{5}',
          null,
          null,
          null,
          '550123456',
          null,
          null,
          [9],
        ],
        'CX',
        61,
        '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011',
        '0',
        null,
        null,
        '0|([59]\\d{7})$',
        '8$1',
        '0011',
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
    }
  w.b = function () {
    return w.a ? w.a : (w.a = new w())
  }
  var ul = {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      '０': '0',
      '１': '1',
      '２': '2',
      '３': '3',
      '４': '4',
      '５': '5',
      '６': '6',
      '７': '7',
      '８': '8',
      '９': '9',
      '٠': '0',
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '۰': '0',
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
    },
    tl = RegExp('[+＋]+'),
    el = RegExp('([0-9０-９٠-٩۰-۹])'),
    rl = /^\(?\$1\)?$/,
    il = new v()
  g(il, 11, 'NA')
  var al = /\[([^\[\]])*\]/g,
    dl = /\d(?=[^,}][^,}])/g,
    ol = RegExp(
      '^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$'
    ),
    sl = /[- ]/
  ;(j.prototype.K = function () {
    ;(this.C = ''),
      t(this.i),
      t(this.u),
      t(this.m),
      (this.s = 0),
      (this.w = ''),
      t(this.b),
      (this.h = ''),
      t(this.a),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.f = []),
      (this.B = !1),
      this.g != this.J && (this.g = E(this, this.D))
  }),
    (j.prototype.L = function (l) {
      return (this.C = F(this, l))
    }),
    l('Cleave.AsYouTypeFormatter', j),
    l('Cleave.AsYouTypeFormatter.prototype.inputDigit', j.prototype.L),
    l('Cleave.AsYouTypeFormatter.prototype.clear', j.prototype.K)
}.call('object' == typeof global && global ? global : window)
