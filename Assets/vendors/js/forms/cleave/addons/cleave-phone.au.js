!function () {
  function l(l, n) {
    var t = l.split('.'),
      u = T
    t[0] in u || !u.execScript || u.execScript('var ' + t[0])
    for (var e; t.length && (e = t.shift()); )
      t.length || void 0 === n ? (u = u[e] ? u[e] : (u[e] = {})) : (u[e] = n)
  }
  function n(l, n) {
    function t() {}
    ;(t.prototype = n.prototype),
      (l.M = n.prototype),
      (l.prototype = new t()),
      (l.prototype.constructor = l),
      (l.N = function (l, t, u) {
        for (
          var e = Array(arguments.length - 2), r = 2;
          r < arguments.length;
          r++
        )
          e[r - 2] = arguments[r]
        return n.prototype[t].apply(l, e)
      })
  }
  function t(l, n) {
    null != l && this.a.apply(this, arguments)
  }
  function u(l) {
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
      t = [],
      u = 0
    for (n in l) t[u++] = l[n]
    return t
  }
  function a(l, n) {
    ;(this.b = l), (this.a = {})
    for (var t = 0; t < n.length; t++) {
      var u = n[t]
      this.a[u.b] = u
    }
  }
  function o(l) {
    return (
      (l = i(l.a)),
      e(l, function (l, n) {
        return l.b - n.b
      }),
      l
    )
  }
  function s(l, n) {
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
  function f() {
    ;(this.a = {}), (this.f = this.j().a), (this.b = this.g = null)
  }
  function p(l, n) {
    for (var t = o(l.j()), u = 0; u < t.length; u++) {
      var e = t[u],
        r = e.b
      if (null != n.a[r]) {
        l.b && delete l.b[e.b]
        var i = 11 == e.a || 10 == e.a
        if (e.g)
          for (var e = c(n, r) || [], a = 0; a < e.length; a++) {
            var s = l,
              f = r,
              h = i ? e[a].clone() : e[a]
            s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f]
          }
        else
          (e = c(n, r)),
            i ? ((i = c(l, r)) ? p(i, e) : m(l, r, e.clone())) : m(l, r, e)
      }
    }
  }
  function c(l, n) {
    var t = l.a[n]
    if (null == t) return null
    if (l.g) {
      if (!(n in l.b)) {
        var u = l.g,
          e = l.f[n]
        if (null != t)
          if (e.g) {
            for (var r = [], i = 0; i < t.length; i++) r[i] = u.b(e, t[i])
            t = r
          } else t = u.b(e, t)
        return (l.b[n] = t)
      }
      return l.b[n]
    }
    return t
  }
  function h(l, n, t) {
    var u = c(l, n)
    return l.f[n].g ? u[t || 0] : u
  }
  function g(l, n) {
    var t
    if (null != l.a[n]) t = h(l, n, void 0)
    else
      l: {
        if (((t = l.f[n]), void 0 === t.f)) {
          var u = t.i
          if (u === Boolean) t.f = !1
          else if (u === Number) t.f = 0
          else {
            if (u !== String) {
              t = new u()
              break l
            }
            t.f = t.h ? '0' : ''
          }
        }
        t = t.f
      }
    return t
  }
  function d(l, n) {
    return l.f[n].g
      ? null != l.a[n]
        ? l.a[n].length
        : 0
      : null != l.a[n]
      ? 1
      : 0
  }
  function m(l, n, t) {
    ;(l.a[n] = t), l.b && (l.b[n] = t)
  }
  function b(l, n) {
    var t,
      u = []
    for (t in n) 0 != t && u.push(new s(t, n[t]))
    return new a(l, u)
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
  function y() {
    f.call(this)
  }
  function v() {
    f.call(this)
  }
  function _() {
    f.call(this)
  }
  function $() {}
  function S() {}
  function w() {} /*

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
  function x() {
    this.a = {}
  }
  function A(l) {
    return 0 == l.length || rl.test(l)
  }
  function C(l, n) {
    if (null == n) return null
    n = n.toUpperCase()
    var t = l.a[n]
    if (null == t) {
      if (((t = nl[n]), null == t)) return null
      ;(t = new w().a(_.j(), t)), (l.a[n] = t)
    }
    return t
  }
  function N(l) {
    return (l = ll[l]), null == l ? 'ZZ' : l[0]
  }
  function j(l) {
    ;(this.H = RegExp(' ')),
      (this.C = ''),
      (this.m = new t()),
      (this.w = ''),
      (this.i = new t()),
      (this.u = new t()),
      (this.l = !0),
      (this.A = this.o = this.F = !1),
      (this.G = x.b()),
      (this.s = 0),
      (this.b = new t()),
      (this.B = !1),
      (this.h = ''),
      (this.a = new t()),
      (this.f = []),
      (this.D = l),
      (this.J = this.g = E(this, this.D))
  }
  function E(l, n) {
    var t
    if (null != n && isNaN(n) && n.toUpperCase() in nl) {
      if (((t = C(l.G, n)), null == t)) throw Error('Invalid region code: ' + n)
      t = g(t, 10)
    } else t = 0
    return (t = C(l.G, N(t))), null != t ? t : il
  }
  function B(l) {
    for (var n = l.f.length, t = 0; t < n; ++t) {
      var e = l.f[t],
        r = g(e, 1)
      if (l.w == r) return !1
      var i
      i = l
      var a = e,
        o = g(a, 1)
      if (-1 != o.indexOf('|')) i = !1
      else {
        ;(o = o.replace(al, '\\d')), (o = o.replace(ol, '\\d')), u(i.m)
        var s
        s = i
        var a = g(a, 2),
          f = '999999999999999'.match(o)[0]
        f.length < s.a.b.length
          ? (s = '')
          : ((s = f.replace(new RegExp(o, 'g'), a)),
            (s = s.replace(RegExp('9', 'g'), ' '))),
          0 < s.length ? (i.m.a(s), (i = !0)) : (i = !1)
      }
      if (i) return (l.w = r), (l.B = fl.test(h(e, 4))), (l.s = 0), !0
    }
    return (l.l = !1)
  }
  function R(l, n) {
    for (var t = [], u = n.length - 3, e = l.f.length, r = 0; r < e; ++r) {
      var i = l.f[r]
      0 == d(i, 3)
        ? t.push(l.f[r])
        : ((i = h(i, 3, Math.min(u, d(i, 3) - 1))),
          0 == n.search(i) && t.push(l.f[r]))
    }
    l.f = t
  }
  function F(l, n) {
    l.i.a(n)
    var t = n
    if (el.test(t) || (1 == l.i.b.length && ul.test(t))) {
      var e,
        t = n
      '+' == t ? ((e = t), l.u.a(t)) : ((e = tl[t]), l.u.a(e), l.a.a(e)),
        (n = e)
    } else (l.l = !1), (l.F = !0)
    if (!l.l) {
      if (!l.F)
        if (H(l)) {
          if (P(l)) return I(l)
        } else if (
          (0 < l.h.length &&
            ((t = l.a.toString()),
            u(l.a),
            l.a.a(l.h),
            l.a.a(t),
            (t = l.b.toString()),
            (e = t.lastIndexOf(l.h)),
            u(l.b),
            l.b.a(t.substring(0, e))),
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
          ? ((t = q(l, n)),
            (e = D(l)),
            0 < e.length
              ? e
              : (R(l, l.a.toString()),
                B(l) ? V(l) : l.l ? U(l, t) : l.i.toString()))
          : M(l)
    }
  }
  function I(l) {
    return (
      (l.l = !0), (l.A = !1), (l.f = []), (l.s = 0), u(l.m), (l.w = ''), M(l)
    )
  }
  function D(l) {
    for (var n = l.a.toString(), t = l.f.length, u = 0; u < t; ++u) {
      var e = l.f[u],
        r = g(e, 1)
      if (new RegExp('^(?:' + r + ')$').test(n))
        return (
          (l.B = fl.test(h(e, 4))),
          (n = n.replace(new RegExp(r, 'g'), h(e, 2))),
          U(l, n)
        )
    }
    return ''
  }
  function U(l, n) {
    var t = l.b.b.length
    return l.B && 0 < t && ' ' != l.b.toString().charAt(t - 1)
      ? l.b + ' ' + n
      : l.b + n
  }
  function M(l) {
    var n = l.a.toString()
    if (3 <= n.length) {
      for (
        var t =
            l.o && 0 == l.h.length && 0 < d(l.g, 20)
              ? c(l.g, 20) || []
              : c(l.g, 19) || [],
          u = t.length,
          e = 0;
        e < u;
        ++e
      ) {
        var r = t[e]
        ;(0 < l.h.length && A(g(r, 4)) && !h(r, 6) && null == r.a[5]) ||
          ((0 != l.h.length || l.o || A(g(r, 4)) || h(r, 6)) &&
            sl.test(g(r, 2)) &&
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
      t = n.length
    if (0 < t) {
      for (var u = '', e = 0; e < t; e++) u = q(l, n.charAt(e))
      return l.l ? U(l, u) : l.i.toString()
    }
    return l.b.toString()
  }
  function G(l) {
    var n,
      t = l.a.toString(),
      e = 0
    return (
      1 != h(l.g, 10)
        ? (n = !1)
        : ((n = l.a.toString()),
          (n = '1' == n.charAt(0) && '0' != n.charAt(1) && '1' != n.charAt(1))),
      n
        ? ((e = 1), l.b.a('1').a(' '), (l.o = !0))
        : null != l.g.a[15] &&
          ((n = new RegExp('^(?:' + h(l.g, 15) + ')')),
          (n = t.match(n)),
          null != n &&
            null != n[0] &&
            0 < n[0].length &&
            ((l.o = !0), (e = n[0].length), l.b.a(t.substring(0, e)))),
      u(l.a),
      l.a.a(t.substring(e)),
      t.substring(0, e)
    )
  }
  function H(l) {
    var n = l.u.toString(),
      t = new RegExp('^(?:\\+|' + h(l.g, 11) + ')'),
      t = n.match(t)
    return (
      null != t &&
      null != t[0] &&
      0 < t[0].length &&
      ((l.o = !0),
      (t = t[0].length),
      u(l.a),
      l.a.a(n.substring(t)),
      u(l.b),
      l.b.a(n.substring(0, t)),
      '+' != n.charAt(0) && l.b.a(' '),
      !0)
    )
  }
  function P(l) {
    if (0 == l.a.b.length) return !1
    var n,
      e = new t()
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
      (u(l.a),
      l.a.a(e.toString()),
      (e = N(n)),
      '001' == e ? (l.g = C(l.G, '' + n)) : e != l.D && (l.g = E(l, e)),
      l.b.a('' + n).a(' '),
      (l.h = ''),
      !0)
    )
  }
  function q(l, n) {
    var t = l.m.toString()
    if (0 <= t.substring(l.s).search(l.H)) {
      var e = t.search(l.H),
        t = t.replace(l.H, n)
      return u(l.m), l.m.a(t), (l.s = e), t.substring(0, l.s + 1)
    }
    return 1 == l.f.length && (l.l = !1), (l.w = ''), l.i.toString()
  }
  var T = this
  ;(t.prototype.b = ''),
    (t.prototype.set = function (l) {
      this.b = '' + l
    }),
    (t.prototype.a = function (l, n, t) {
      if (((this.b += String(l)), null != n))
        for (var u = 1; u < arguments.length; u++) this.b += arguments[u]
      return this
    }),
    (t.prototype.toString = function () {
      return this.b
    })
  var X = 1,
    Y = 2,
    k = 3,
    J = 4,
    K = 6,
    L = 16,
    O = 18
  ;(f.prototype.set = function (l, n) {
    m(this, l.b, n)
  }),
    (f.prototype.clone = function () {
      var l = new this.constructor()
      return l != this && ((l.a = {}), l.b && (l.b = {}), p(l, this)), l
    }),
    n(y, f)
  var Z = null
  n(v, f)
  var z = null
  n(_, f)
  var Q = null
  ;(y.prototype.j = function () {
    var l = Z
    return (
      l ||
        (Z = l =
          b(y, {
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
    (y.j = y.prototype.j),
    (v.prototype.j = function () {
      var l = z
      return (
        l ||
          (z = l =
            b(v, {
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
    (v.j = v.prototype.j),
    (_.prototype.j = function () {
      var l = Q
      return (
        l ||
          (Q = l =
            b(_, {
              0: {
                name: 'PhoneMetadata',
                I: 'i18n.phonenumbers.PhoneMetadata',
              },
              1: { name: 'general_desc', c: 11, type: v },
              2: { name: 'fixed_line', c: 11, type: v },
              3: { name: 'mobile', c: 11, type: v },
              4: { name: 'toll_free', c: 11, type: v },
              5: { name: 'premium_rate', c: 11, type: v },
              6: { name: 'shared_cost', c: 11, type: v },
              7: { name: 'personal_number', c: 11, type: v },
              8: { name: 'voip', c: 11, type: v },
              21: { name: 'pager', c: 11, type: v },
              25: { name: 'uan', c: 11, type: v },
              27: { name: 'emergency', c: 11, type: v },
              28: { name: 'voicemail', c: 11, type: v },
              29: { name: 'short_code', c: 11, type: v },
              30: { name: 'standard_rate', c: 11, type: v },
              31: { name: 'carrier_specific', c: 11, type: v },
              33: { name: 'sms_services', c: 11, type: v },
              24: { name: 'no_international_dialling', c: 11, type: v },
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
              19: { name: 'number_format', v: !0, c: 11, type: y },
              20: { name: 'intl_number_format', v: !0, c: 11, type: y },
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
    (_.j = _.prototype.j),
    ($.prototype.a = function (l) {
      throw (new l.b(), Error('Unimplemented'))
    }),
    ($.prototype.b = function (l, n) {
      if (11 == l.a || 10 == l.a)
        return n instanceof f ? n : this.a(l.i.prototype.j(), n)
      if (14 == l.a) {
        if ('string' == typeof n && W.test(n)) {
          var t = Number(n)
          if (0 < t) return t
        }
        return n
      }
      if (!l.h) return n
      if (((t = l.i), t === String)) {
        if ('number' == typeof n) return String(n)
      } else if (
        t === Number &&
        'string' == typeof n &&
        ('Infinity' === n || '-Infinity' === n || 'NaN' === n || W.test(n))
      )
        return Number(n)
      return n
    })
  var W = /^-?[0-9]+$/
  n(S, $),
    (S.prototype.a = function (l, n) {
      var t = new l.b()
      return (t.g = this), (t.a = n), (t.b = {}), t
    }),
    n(w, S),
    (w.prototype.b = function (l, n) {
      return 8 == l.a ? !!n : $.prototype.b.apply(this, arguments)
    }),
    (w.prototype.a = function (l, n) {
      return w.M.a.call(this, l, n)
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
  var ll = { 61: ['AU', 'CC', 'CX'] },
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
  x.b = function () {
    return x.a ? x.a : (x.a = new x())
  }
  var tl = {
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
    ul = RegExp('[+＋]+'),
    el = RegExp('([0-9０-９٠-٩۰-۹])'),
    rl = /^\(?\$1\)?$/,
    il = new _()
  m(il, 11, 'NA')
  var al = /\[([^\[\]])*\]/g,
    ol = /\d(?=[^,}][^,}])/g,
    sl = RegExp(
      '^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$'
    ),
    fl = /[- ]/
  ;(j.prototype.K = function () {
    ;(this.C = ''),
      u(this.i),
      u(this.u),
      u(this.m),
      (this.s = 0),
      (this.w = ''),
      u(this.b),
      (this.h = ''),
      u(this.a),
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