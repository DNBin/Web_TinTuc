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
      case K:
      case L:
      case O:
      case Z:
      case Y:
      case U:
        this.h = !0
    }
    this.f = n.defaultValue
  }
  function f() {
    ;(this.a = {}), (this.f = this.j().a), (this.b = this.g = null)
  }
  function p(l, n) {
    for (var u = o(l.j()), t = 0; t < u.length; t++) {
      var e = u[t],
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
  function h(l, n, u) {
    var t = c(l, n)
    return l.f[n].g ? t[u || 0] : t
  }
  function d(l, n) {
    var u
    if (null != l.a[n]) u = h(l, n, void 0)
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
  function g(l, n) {
    return l.f[n].g
      ? null != l.a[n]
        ? l.a[n].length
        : 0
      : null != l.a[n]
      ? 1
      : 0
  }
  function m(l, n, u) {
    ;(l.a[n] = u), l.b && (l.b[n] = u)
  }
  function b(l, n) {
    var u,
      t = []
    for (u in n) 0 != u && t.push(new s(u, n[u]))
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
  function y() {
    f.call(this)
  }
  function v() {
    f.call(this)
  }
  function _() {
    f.call(this)
  }
  function S() {}
  function $() {}
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
  function N(l, n) {
    if (null == n) return null
    n = n.toUpperCase()
    var u = l.a[n]
    if (null == u) {
      if (((u = nl[n]), null == u)) return null
      ;(u = new w().a(_.j(), u)), (l.a[n] = u)
    }
    return u
  }
  function E(l) {
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
      (this.G = x.b()),
      (this.s = 0),
      (this.b = new u()),
      (this.B = !1),
      (this.h = ''),
      (this.a = new u()),
      (this.f = []),
      (this.D = l),
      (this.J = this.g = B(this, this.D))
  }
  function B(l, n) {
    var u
    if (null != n && isNaN(n) && n.toUpperCase() in nl) {
      if (((u = N(l.G, n)), null == u)) throw Error('Invalid region code: ' + n)
      u = d(u, 10)
    } else u = 0
    return (u = N(l.G, E(u))), null != u ? u : il
  }
  function G(l) {
    for (var n = l.f.length, u = 0; u < n; ++u) {
      var e = l.f[u],
        r = d(e, 1)
      if (l.w == r) return !1
      var i
      i = l
      var a = e,
        o = d(a, 1)
      if (-1 != o.indexOf('|')) i = !1
      else {
        ;(o = o.replace(al, '\\d')), (o = o.replace(ol, '\\d')), t(i.m)
        var s
        s = i
        var a = d(a, 2),
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
  function I(l, n) {
    for (var u = [], t = n.length - 3, e = l.f.length, r = 0; r < e; ++r) {
      var i = l.f[r]
      0 == g(i, 3)
        ? u.push(l.f[r])
        : ((i = h(i, 3, Math.min(t, g(i, 3) - 1))),
          0 == n.search(i) && u.push(l.f[r]))
    }
    l.f = u
  }
  function R(l, n) {
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
          if (P(l)) return F(l)
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
          l.h != V(l))
        )
          return l.b.a(' '), F(l)
      return l.i.toString()
    }
    switch (l.u.b.length) {
      case 0:
      case 1:
      case 2:
        return l.i.toString()
      case 3:
        if (!H(l)) return (l.h = V(l)), D(l)
        l.A = !0
      default:
        return l.A
          ? (P(l) && (l.A = !1), l.b.toString() + l.a.toString())
          : 0 < l.f.length
          ? ((u = q(l, n)),
            (e = C(l)),
            0 < e.length
              ? e
              : (I(l, l.a.toString()),
                G(l) ? J(l) : l.l ? M(l, u) : l.i.toString()))
          : D(l)
    }
  }
  function F(l) {
    return (
      (l.l = !0), (l.A = !1), (l.f = []), (l.s = 0), t(l.m), (l.w = ''), D(l)
    )
  }
  function C(l) {
    for (var n = l.a.toString(), u = l.f.length, t = 0; t < u; ++t) {
      var e = l.f[t],
        r = d(e, 1)
      if (new RegExp('^(?:' + r + ')$').test(n))
        return (
          (l.B = fl.test(h(e, 4))),
          (n = n.replace(new RegExp(r, 'g'), h(e, 2))),
          M(l, n)
        )
    }
    return ''
  }
  function M(l, n) {
    var u = l.b.b.length
    return l.B && 0 < u && ' ' != l.b.toString().charAt(u - 1)
      ? l.b + ' ' + n
      : l.b + n
  }
  function D(l) {
    var n = l.a.toString()
    if (3 <= n.length) {
      for (
        var u =
            l.o && 0 == l.h.length && 0 < g(l.g, 20)
              ? c(l.g, 20) || []
              : c(l.g, 19) || [],
          t = u.length,
          e = 0;
        e < t;
        ++e
      ) {
        var r = u[e]
        ;(0 < l.h.length && A(d(r, 4)) && !h(r, 6) && null == r.a[5]) ||
          ((0 != l.h.length || l.o || A(d(r, 4)) || h(r, 6)) &&
            sl.test(d(r, 2)) &&
            l.f.push(r))
      }
      return (
        I(l, n), (n = C(l)), 0 < n.length ? n : G(l) ? J(l) : l.i.toString()
      )
    }
    return M(l, n)
  }
  function J(l) {
    var n = l.a.toString(),
      u = n.length
    if (0 < u) {
      for (var t = '', e = 0; e < u; e++) t = q(l, n.charAt(e))
      return l.l ? M(l, t) : l.i.toString()
    }
    return l.b.toString()
  }
  function V(l) {
    var n,
      u = l.a.toString(),
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
      u = new RegExp('^(?:\\+|' + h(l.g, 11) + ')'),
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
      (e = E(n)),
      '001' == e ? (l.g = N(l.G, '' + n)) : e != l.D && (l.g = B(l, e)),
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
  var U = 1,
    Y = 2,
    k = 3,
    K = 4,
    L = 6,
    O = 16,
    Z = 18
  ;(f.prototype.set = function (l, n) {
    m(this, l.b, n)
  }),
    (f.prototype.clone = function () {
      var l = new this.constructor()
      return l != this && ((l.a = {}), l.b && (l.b = {}), p(l, this)), l
    }),
    n(y, f)
  var z = null
  n(v, f)
  var Q = null
  n(_, f)
  var W = null
  ;(y.prototype.j = function () {
    var l = z
    return (
      l ||
        (z = l =
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
      var l = Q
      return (
        l ||
          (Q = l =
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
      var l = W
      return (
        l ||
          (W = l =
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
    (S.prototype.a = function (l) {
      throw (new l.b(), Error('Unimplemented'))
    }),
    (S.prototype.b = function (l, n) {
      if (11 == l.a || 10 == l.a)
        return n instanceof f ? n : this.a(l.i.prototype.j(), n)
      if (14 == l.a) {
        if ('string' == typeof n && X.test(n)) {
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
        ('Infinity' === n || '-Infinity' === n || 'NaN' === n || X.test(n))
      )
        return Number(n)
      return n
    })
  var X = /^-?[0-9]+$/
  n($, S),
    ($.prototype.a = function (l, n) {
      var u = new l.b()
      return (u.g = this), (u.a = n), (u.b = {}), u
    }),
    n(w, $),
    (w.prototype.b = function (l, n) {
      return 8 == l.a ? !!n : S.prototype.b.apply(this, arguments)
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
  var ll = { 44: ['GB', 'GG', 'IM', 'JE'] },
    nl = {
      GB: [
        null,
        [
          null,
          null,
          '[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [7, 9, 10],
          [4, 5, 6, 8],
        ],
        [
          null,
          null,
          '(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d',
          null,
          null,
          null,
          '1212345678',
          null,
          null,
          [9, 10],
          [4, 5, 6, 7, 8],
        ],
        [
          null,
          null,
          '7(?:(?:[1-3]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|8(?:[014-9]\\d|[23][0-8]))\\d|4(?:[0-46-9]\\d\\d|5(?:[0-689]\\d|7[0-57-9]))|7(?:0(?:0[01]|[1-9]\\d)|(?:[1-7]\\d|8[02-9]|9[0-689])\\d)|9(?:(?:[024-9]\\d|3[0-689])\\d|1(?:[02-9]\\d|1[028])))\\d{5}',
          null,
          null,
          null,
          '7400123456',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '80[08]\\d{7}|800\\d{6}|8001111',
          null,
          null,
          null,
          '8001234567',
        ],
        [
          null,
          null,
          '(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d',
          null,
          null,
          null,
          '9012345678',
          null,
          null,
          [7, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '70\\d{8}',
          null,
          null,
          null,
          '7012345678',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '56\\d{8}',
          null,
          null,
          null,
          '5612345678',
          null,
          null,
          [10],
        ],
        'GB',
        44,
        '00',
        '0',
        ' x',
        null,
        '0',
        null,
        null,
        null,
        [
          [
            null,
            '(\\d{3})(\\d{2})(\\d{2})',
            '$1 $2 $3',
            ['845', '8454', '84546', '845464'],
            '0$1',
          ],
          [
            null,
            '(\\d{3})(\\d{4})',
            '$1 $2',
            ['800', '8001', '80011', '800111', '8001111'],
            '0$1',
          ],
          [null, '(\\d{3})(\\d{6})', '$1 $2', ['800'], '0$1'],
          [
            null,
            '(\\d{4})(\\d{5,6})',
            '$1 $2',
            [
              '1(?:[2-79][02-9]|8)',
              '1(?:[24][02-9]|3(?:[02-79]|8[0-46-9])|5(?:[04-9]|2[024-9]|3[014-689])|6(?:[02-8]|9[0-24578])|7(?:[02-57-9]|6[013-9])|8|9(?:[0235-9]|4[2-9]))',
              '1(?:[24][02-9]|3(?:[02-79]|8(?:[0-4689]|7[0-24-9]))|5(?:[04-9]|2(?:[025-9]|4[013-9])|3(?:[014-68]|9[0-37-9]))|6(?:[02-8]|9(?:[0-2458]|7[0-25689]))|7(?:[02-57-9]|6(?:[013-79]|8[0-25689]))|8|9(?:[0235-9]|4(?:[2-57-9]|6[0-689])))',
            ],
            '0$1',
          ],
          [
            null,
            '(\\d{5})(\\d{4,5})',
            '$1 $2',
            ['1(?:38|5[23]|69|7|94)'],
            '0$1',
          ],
          [
            null,
            '(\\d{2})(\\d{4})(\\d{4})',
            '$1 $2 $3',
            ['[25]|7(?:0|6[024-9])', '[25]|7(?:0|6(?:[04-9]|2[356]))'],
            '0$1',
          ],
          [null, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1389]'], '0$1'],
          [null, '(\\d{4})(\\d{6})', '$1 $2', ['7'], '0$1'],
        ],
        null,
        [
          null,
          null,
          '76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}',
          null,
          null,
          null,
          '7640123456',
          null,
          null,
          [10],
        ],
        1,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:3[0347]|55)\\d{8}',
          null,
          null,
          null,
          '5512345678',
          null,
          null,
          [10],
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      GG: [
        null,
        [
          null,
          null,
          '(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?',
          null,
          null,
          null,
          null,
          null,
          null,
          [7, 9, 10],
          [6],
        ],
        [
          null,
          null,
          '1481[25-9]\\d{5}',
          null,
          null,
          null,
          '1481256789',
          null,
          null,
          [10],
          [6],
        ],
        [
          null,
          null,
          '7(?:(?:781|839)\\d|911[17])\\d{5}',
          null,
          null,
          null,
          '7781123456',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '80[08]\\d{7}|800\\d{6}|8001111',
          null,
          null,
          null,
          '8001234567',
        ],
        [
          null,
          null,
          '(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d',
          null,
          null,
          null,
          '9012345678',
          null,
          null,
          [7, 10],
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '70\\d{8}',
          null,
          null,
          null,
          '7012345678',
          null,
          null,
          [10],
        ],
        [
          null,
          null,
          '56\\d{8}',
          null,
          null,
          null,
          '5612345678',
          null,
          null,
          [10],
        ],
        'GG',
        44,
        '00',
        '0',
        null,
        null,
        '0|([25-9]\\d{5})$',
        '1481$1',
        null,
        null,
        null,
        null,
        [
          null,
          null,
          '76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}',
          null,
          null,
          null,
          '7640123456',
          null,
          null,
          [10],
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:3[0347]|55)\\d{8}',
          null,
          null,
          null,
          '5512345678',
          null,
          null,
          [10],
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      IM: [
        null,
        [
          null,
          null,
          '(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [6],
        ],
        [
          null,
          null,
          '1624[5-8]\\d{5}',
          null,
          null,
          null,
          '1624756789',
          null,
          null,
          null,
          [6],
        ],
        [
          null,
          null,
          '7(?:4576|[59]24\\d|624[0-4689])\\d{5}',
          null,
          null,
          null,
          '7924123456',
        ],
        [null, null, '808162\\d{4}', null, null, null, '8081624567'],
        [
          null,
          null,
          '(?:8(?:4(?:40[49]06|5624\\d)|7(?:0624|2299)\\d)|90[0167]624\\d)\\d{3}',
          null,
          null,
          null,
          '9016247890',
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, '70\\d{8}', null, null, null, '7012345678'],
        [null, null, '56\\d{8}', null, null, null, '5612345678'],
        'IM',
        44,
        '00',
        '0',
        null,
        null,
        '0|([5-8]\\d{5})$',
        '1624$1',
        null,
        null,
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:3(?:(?:08162|3\\d{4}|7(?:0624|2299))\\d|4(?:40[49]06|5624\\d))|55\\d{5})\\d{3}',
          null,
          null,
          null,
          '5512345678',
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
      JE: [
        null,
        [
          null,
          null,
          '(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}',
          null,
          null,
          null,
          null,
          null,
          null,
          [10],
          [6],
        ],
        [
          null,
          null,
          '1534[0-24-8]\\d{5}',
          null,
          null,
          null,
          '1534456789',
          null,
          null,
          null,
          [6],
        ],
        [
          null,
          null,
          '7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}',
          null,
          null,
          null,
          '7797712345',
        ],
        [
          null,
          null,
          '80(?:07(?:35|81)|8901)\\d{4}',
          null,
          null,
          null,
          '8007354567',
        ],
        [
          null,
          null,
          '(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}',
          null,
          null,
          null,
          '9018105678',
        ],
        [null, null, null, null, null, null, null, null, null, [-1]],
        [null, null, '701511\\d{4}', null, null, null, '7015115678'],
        [null, null, '56\\d{8}', null, null, null, '5612345678'],
        'JE',
        44,
        '00',
        '0',
        null,
        null,
        '0|([0-24-8]\\d{5})$',
        '1534$1',
        null,
        null,
        null,
        null,
        [
          null,
          null,
          '76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}',
          null,
          null,
          null,
          '7640123456',
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
        [
          null,
          null,
          '(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}',
          null,
          null,
          null,
          '5512345678',
        ],
        null,
        null,
        [null, null, null, null, null, null, null, null, null, [-1]],
      ],
    }
  x.b = function () {
    return x.a ? x.a : (x.a = new x())
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
      this.g != this.J && (this.g = B(this, this.D))
  }),
    (j.prototype.L = function (l) {
      return (this.C = R(this, l))
    }),
    l('Cleave.AsYouTypeFormatter', j),
    l('Cleave.AsYouTypeFormatter.prototype.inputDigit', j.prototype.L),
    l('Cleave.AsYouTypeFormatter.prototype.clear', j.prototype.K)
}.call('object' == typeof global && global ? global : window)
