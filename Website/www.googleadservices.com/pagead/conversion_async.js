(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        fa = {};

    function t(a, b) {
        var c = fa[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function v(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    v("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    v("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function ha(a) {
        a = {
            next: a
        };
        a[t(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    v("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    }, "es6");

    function ia(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ia(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ia(this, function(b) {
                return b
            })
        }
    }, "es6");
    v("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    var w = this || self;

    function ja(a) {
        return a
    };

    function ka(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function la(a, b) {
        this.i = a === ma && b || "";
        this.g = na
    }
    var na = {},
        ma = {};
    var oa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        pa = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var qa;

    function ra(a, b) {
        this.g = b === sa ? a : ""
    }
    ra.prototype.toString = function() {
        return this.g + ""
    };
    var sa = {};

    function ta(a) {
        if (void 0 === qa) {
            var b = null;
            var c = w.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ja,
                        createScript: ja,
                        createScriptURL: ja
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                qa = b
            } else qa = b
        }
        a = (b = qa) ? b.createScriptURL(a) : a;
        return new ra(a, sa)
    };
    var ua;
    a: {
        var za = w.navigator;
        if (za) {
            var Aa = za.userAgent;
            if (Aa) {
                ua = Aa;
                break a
            }
        }
        ua = ""
    };

    function Ba(a, b) {
        a.src = b instanceof ra && b.constructor === ra ? b.g : "type_error:TrustedResourceUrl";
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        (c = (b = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function Ca(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Da(a) {
        Da[" "](a);
        return a
    }
    Da[" "] = function() {};

    function Ea(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    var Fa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Ga(a) {
        var b = a.match(Fa);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Ha(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Ia = /#|$/;

    function Ja(a, b) {
        var c = a.search(Ia),
            d = Ha(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Ka = /[?&]($|#)/;

    function A(a, b, c) {
        for (var d = a.search(Ia), e = 0, f, g = []; 0 <= (f = Ha(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = g.join("").replace(Ka, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.substr(0, d), e, a.substr(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function La() {
        if (!w.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            w.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Ma(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    var Oa = Ca(function() {
            return pa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Na) || 1E-4 > Math.random()
        }),
        Pa = Ca(function() {
            return -1 != ua.indexOf("MSIE")
        });

    function Na(a) {
        return -1 != ua.indexOf(a)
    }

    function B(a) {
        return /^true$/.test(a)
    };
    var Qa = ka("0.20"),
        Ra = ka("0.002"),
        Sa = ka("0.00"),
        Ta = ka("0.00"),
        Ua = B("true"),
        Va = B("true"),
        Wa = B("true"),
        Xa = B("true"),
        Ya = B("true");
    var Za = null;

    function $a() {
        if (null === Za) {
            Za = "";
            try {
                var a = "";
                try {
                    a = w.top.location.hash
                } catch (c) {
                    a = w.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Za = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Za
    }

    function C(a, b, c) {
        var d = E;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = $a()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!Pa() && !Oa() && (e = Math.random(), e < b)) {
                    e = La();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function G(a) {
        var b = E;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function ab() {
        var a = E,
            b = [];
        Ma(a.i, function(c, d) {
            b.push(d)
        });
        Ma(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var bb = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18,
            J: 19
        },
        E = null;

    function cb() {
        return !!E && "592230571" == G(16)
    }

    function H() {
        return !!E && ("2505059651" == G(18) || "2505059650" == G(18))
    };
    var db = {};

    function I(a) {
        db.TAGGING = db.TAGGING || [];
        db.TAGGING[a] = !0
    };

    function eb(a) {
        return "function" == typeof a
    }

    function fb(a) {
        var b = "[object Array]" == Object.prototype.toString.call(Object(a));
        Array.isArray ? Array.isArray(a) !== b && I(4) : I(5);
        return b
    }

    function gb(a, b) {
        if (a && fb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function hb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    };

    function ib(a) {
        this.g = a;
        this.defaultValue = !1
    };
    var J = new ib(1933),
        jb = new ib(373442741);
    var K = window,
        L = document;

    function kb(a) {
        var b = L.featurePolicy;
        return b && eb(b.features) ? -1 !== b.features().indexOf(a) : !1
    };

    function M(a) {
        if (a.u && a.hasOwnProperty("u")) return a.u;
        var b = new a;
        return a.u = b
    };

    function lb() {
        var a = {};
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[J.g] = b
        }
    }

    function N(a) {
        return M(lb).g(a.g, a.defaultValue)
    };
    var O = [];

    function P() {
        var a = {};
        var b = K.google_tag_data;
        K.google_tag_data = void 0 === b ? a : b;
        a = K.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: mb,
            update: nb,
            addListener: ob,
            notifyListeners: pb,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function mb(a, b, c, d, e, f) {
        var g = P();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" == typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && K.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, qb(a), pb(), I(2))
                }, f)
            }
        }
    }

    function nb(a, b) {
        var c = P();
        c.active = !0;
        if (void 0 != b) {
            var d = Q(a);
            c = c.entries;
            c = c[a] = c[a] || {};
            c.update = "granted" === b;
            b = Q(a);
            c.quiet ? (c.quiet = !1, qb(a)) : b !== d && qb(a)
        }
    }

    function ob(a, b) {
        O.push({
            s: a,
            F: b
        })
    }

    function qb(a) {
        for (var b = 0; b < O.length; ++b) {
            var c = O[b];
            fb(c.s) && -1 !== c.s.indexOf(a) && (c.D = !0)
        }
    }

    function pb(a) {
        for (var b = 0; b < O.length; ++b) {
            var c = O[b];
            if (c.D) {
                c.D = !1;
                try {
                    c.F({
                        T: a
                    })
                } catch (d) {}
            }
        }
    }

    function Q(a) {
        a = P().entries[a] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function rb(a) {
        return !(P().entries[a] || {}).quiet
    }

    function sb(a, b) {
        P().addListener(a, b)
    }

    function tb(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!rb(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            sb(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function ub(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === Q(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && sb(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function vb(a) {
        return N(jb) && !a.navigator.cookieEnabled ? !1 : "null" !== a.origin
    };

    function wb(a, b, c, d) {
        if (xb(d)) {
            d = [];
            b = String(b || yb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function zb(a, b, c, d) {
        var e = yb(),
            f = window;
        vb(f) && (f.document.cookie = a);
        a = yb();
        return e != a || void 0 != c && 0 <= wb(b, a, !1, d).indexOf(c)
    }

    function Ab(a, b, c) {
        function d(q, p, y) {
            if (null == y) return delete g[p], q;
            g[p] = y;
            return q + "; " + p + "=" + y
        }

        function e(q, p) {
            if (null == p) return delete g[p], q;
            g[p] = !0;
            return q + "; " + p
        }
        if (xb(c.o)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = Bb(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.U);
            f = d(f, "samesite", c.V);
            c.W &&
                (f = e(f, "secure"));
            h = c.domain;
            if ("auto" === h) {
                h = Cb();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!Db(m, c.path) && zb(n, a, b, c.o)) break
                }
            } else h && "none" !== h && (f = d(f, "domain", h)), f = e(f, c.flags), Db(h, c.path) || zb(f, a, b, c.o)
        }
    }

    function Eb(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        Ab(a, b, c)
    }

    function Bb(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Fb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Gb = /(^|\.)doubleclick\.net$/i;

    function Db(a, b) {
        return Gb.test(window.document.location.hostname) || "/" === b && Fb.test(a)
    }

    function yb() {
        return vb(window) ? window.document.cookie : ""
    }

    function Cb() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Gb.test(b) || Fb.test(b) || a.push("none");
        return a
    }

    function xb(a) {
        if (!(N(J) && a && N(J) && P().active)) return !0;
        if (!rb(a)) return !1;
        a = Q(a);
        return null == a ? !0 : !!a
    };

    function Hb(a, b) {
        var c, d = Number(null != a.C ? a.C : void 0);
        0 !== d && (c = new Date((b || (new Date(Date.now())).getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c
        }
    };

    function Ib(a) {
        var b = [],
            c = L.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                v: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function R(a, b) {
        a = Ib(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f)
            }
        }
        return c
    };
    var Jb = /:[0-9]+$/;

    function Kb(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function Lb(a, b) {
        var c = "query";
        if ("protocol" === c || "port" === c) a.protocol = Mb(a.protocol) || Mb(K.location.protocol);
        "port" === c ? a.port = String(Number(a.hostname ? a.port : K.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === c && (a.hostname = (a.hostname || K.location.hostname).replace(Jb, "").toLowerCase());
        var d = Mb(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a =
                    d;
                break;
            case "host":
                a = a.hostname.replace(Jb, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || I(1);
                a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                a: if (b = a[a.length - 1], c = [], Array.prototype.indexOf) b = c.indexOf(b), b = "number" == typeof b ? b : -1;
                    else {
                        for (d = 0; d < c.length; d++)
                            if (c[d] === b) {
                                b = d;
                                break a
                            }
                        b = -1
                    }
                0 <= b && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = Kb(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function Mb(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };
    var Nb = {};
    var Ob = /^\w+$/,
        Pb = /^[\w-]+$/,
        Qb = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function S() {
        if (!N(J) || !N(J) || !P().active) return !0;
        var a = Q("ad_storage");
        return null == a ? !0 : !!a
    }

    function Rb(a, b) {
        rb("ad_storage") ? S() ? a() : ub(a) : b ? I(3) : tb(function() {
            Rb(a, !0)
        })
    }

    function Sb(a) {
        return Tb(a).map(function(b) {
            return b.h
        })
    }

    function Tb(a) {
        var b = [];
        if (!vb(K) || !L.cookie) return b;
        a = wb(a, L.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                j: c.j
            }, d++) {
            var e = Ub(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.j = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = gb(b, function(k) {
                    return function(m) {
                        return m.h === k.j
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = Wb(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.j,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Xb(b)
    }

    function Wb(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function Yb(a) {
        return a && "string" == typeof a && a.match(Ob) ? a : "_gcl"
    }

    function Zb() {
        var a = K.location.href,
            b = L.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || I(1), c = "/" + c);
        a = b.hostname.replace(Jb, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = Lb(d, "gclid");
        c = Lb(d, "gclsrc");
        a = Lb(d, "wbraid");
        var e = Lb(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || Kb(d, "gclid"), c = c || Kb(d, "gclsrc"), a = a || Kb(d, "wbraid"));
        return $b(b, c, e, a)
    }

    function $b(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Pb.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(Pb)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function ac() {
        var a = {},
            b = Zb();
        Rb(function() {
            bc(b, a)
        })
    }

    function bc(a, b, c, d) {
        function e(n) {
            n = ["GCL", m, n];
            0 < d.length && n.push(d.join("."));
            return n.join(".")
        }

        function f(n, q) {
            if (n = cc(n, g)) Eb(n, q, h), k = !0
        }
        b = b || {};
        d = d || [];
        var g = Yb(b.prefix);
        c = c || (new Date(Date.now())).getTime();
        var h = Hb(b, c);
        h.o = "ad_storage";
        var k = !1,
            m = Math.round(c / 1E3);
        a.aw && f("aw", e(a.aw[0]));
        a.dc && f("dc", e(a.dc[0]));
        a.gf && f("gf", e(a.gf[0]));
        a.ha && f("ha", e(a.ha[0]));
        a.gp && f("gp", e(a.gp[0]));
        (void 0 == Nb.enable_gbraid_cookie_write ? 0 : Nb.enable_gbraid_cookie_write) && !k && a.gb && f("gb", e(a.gb[0]))
    }

    function cc(a, b) {
        a = Qb[a];
        if (void 0 !== a) return b + a
    }

    function dc(a) {
        return 0 !== ec(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function Ub(a) {
        a = ec(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function ec(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Pb.test(a[2]) ? [] : a
    }

    function Xb(a) {
        return a.filter(function(b) {
            return Pb.test(b.h)
        })
    }

    function fc() {
        var a = ["aw"],
            b = {};
        if (vb(K)) {
            for (var c = Yb(b.prefix), d = {}, e = 0; e < a.length; e++) Qb[a[e]] && (d[a[e]] = Qb[a[e]]);
            Rb(function() {
                hb(d, function(f, g) {
                    g = wb(c + g, L.cookie, void 0, "ad_storage");
                    g.sort(function(n, q) {
                        return dc(q) - dc(n)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = dc(h);
                        var k = 0 !== ec(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== ec(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        bc(m, b, g, k)
                    }
                })
            })
        }
    }

    function gc(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!S()) return e;
        var f = Tb(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = Hb(c, f), c.o = "ad_storage", Eb(a, b, c));
        return e
    }

    function hc(a, b) {
        b = Yb(b);
        a = cc(a, b);
        if (!a) return 0;
        a = Tb(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function ic(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var jc = /^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,
        kc = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        lc = /^\d+\.fls\.doubleclick\.net$/,
        mc = /;gac=([^;?]+)/,
        nc = /;gacgb=([^;?]+)/,
        oc = /;gclaw=([^;?]+)/,
        pc = /;gclgb=([^;?]+)/;

    function qc(a, b, c) {
        if (lc.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(jc) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function rc(a, b, c, d) {
        if (!H()) return {
            B: "",
            A: ""
        };
        var e = S() ? R("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = gc("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            B: g ? f.join(";") : "",
            A: qc(a, e, nc)
        }
    }

    function sc(a, b, c, d) {
        if (lc.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(kc)) return [{
                h: a[1]
            }]
        } else return Tb((b || "_gcl") + c);
        return []
    }

    function tc(a, b) {
        return sc(a, b, "_aw", oc).map(function(c) {
            return c.h
        }).join(".")
    }

    function uc(a, b) {
        return H() ? sc(a, b, "_gb", pc).map(function(c) {
            return c.h
        }).join(".") : ""
    }

    function vc(a, b) {
        var c = "" !== uc(a, b) || 0 < t(Object, "keys").call(Object, S() ? R("_gac_gb", !0) : {}).length;
        a = "" !== tc(a, b) || "" !== qc(a, S() ? R() : {}, mc);
        return c && a
    }

    function wc(a) {
        0 !== Sb("_gcl_aw").length || a && 0 !== Sb(a + "_aw").length || (ac(), fc())
    }

    function xc(a, b, c) {
        if (!H()) return "";
        a = gc((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function yc(a) {
        var b = w.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var zc = {
        O: 0,
        G: 1,
        P: 2,
        I: 3,
        H: 4
    };

    function Ac() {
        this.g = {}
    }

    function Bc(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function Cc(a) {
        var b = M(Ac);
        var c = void 0 === c ? w : c;
        c = c.performance;
        Bc(b, a, c && c.now ? c.now() : null)
    }

    function Dc() {
        function a() {
            return Bc(b, 0, yc("loadEventStart") - yc("navigationStart"))
        }
        var b = M(Ac);
        0 != yc("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function Ec(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, Bc(a, 4, b.cbt), Bc(a, 3, b.cst))
    }

    function Fc() {
        var a = M(Ac);
        return t(Object, "values").call(Object, zc).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };

    function Gc(a, b, c) {
        a = Hc(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Hc(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var Ic = {},
        Jc = null;

    function Kc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Jc)
            for (Jc = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Ic[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Jc[h] && (Jc[h] = g)
                }
            }
        a = Ic[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Lc(a, b, c, d) {
        var e = Ja(c, "fmt");
        if (d) {
            var f = Ja(c, "random"),
                g = Ja(c, "label") || "";
            if (!f) return !1;
            f = Kc(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Gc(a, f, d)) return !1
        }
        e && 4 != e && (c = A(c, "rfmt", e));
        c = A(c, "fmt", 4);
        e = Ea("SCRIPT");
        Ba(e, ta(c));
        e.onload = function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        };
        b.getElementsByTagName("script")[0].parentElement.appendChild(e);
        return !0
    };
    var Mc = B("false");

    function Nc() {
        if (eb(K.__uspapi)) {
            var a = "";
            try {
                K.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && /^[\da-zA-Z-]{1,20}$/.test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Oc = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        Pc = /^[a-zA-Z0-9_]+$/,
        Qc = !1,
        Rc = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function Sc(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function T(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function Tc(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function U(a, b) {
        b = T(b);
        return "" != b && (a = T(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function Uc(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Vc(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Uc(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = Uc(d);
                (e = Uc(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function V(a) {
        return "number" != typeof a && "string" != typeof a ? "" : T(a.toString())
    }

    function Wc(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = Xc(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.C = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Yc(b) && b.l) var f = void 0 === b.m;
        else H() ? lc.test(a.location.host) ? f = !(oc.test(a.location.href) || mc.test(a.location.href)) : (f = Math.max(hc("aw", d), ic(S() ? R() : {})), f = Math.max(hc("gb", d), ic(S() ? R("_gac_gb", !0) : {})) > f) : f = !1;
        if (f) {
            if (void 0 !== b.m) return b.m;
            c = uc(a, d || void 0);
            f = b.google_conversion_label;
            var g = xc(f, e, b.l);
            c = U("gclgb", c) + (g ? U("mcov", g) : "");
            if (d) return b.m = c;
            d = rc(a, f, e, b.l);
            a = d.A;
            d = d.B;
            c += (a ? U("gacgb", a) : "") + (d ? U("gacmcov", d) : "");
            return b.m = c
        }
        if (d) return b = tc(a, d), U("gclaw", b);
        (b = tc(a)) &&
        (c = U("gclaw", b));
        b = qc(a, S() ? R() : {}, mc);
        return c + (b ? U("gac", b) : "")
    }

    function Zc(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function $c(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 4:
                    k = "www.google.com/",
                m = "pagead/privacysandbox/conversion/"
        }
        Ua && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length -
            1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, T(d.google_conversion_id), h, "?random=", T(d.google_conversion_time)].join("");
        k = U("cv", d.google_conversion_js_version);
        m = U("fst", d.google_conversion_first_time);
        h = U("num", d.google_conversion_snippets);
        var n = U("fmt", d.google_conversion_format),
            q = d.google_remarketing_only ? U("userId", d.google_user_id) : "";
        var p = d.google_tag_for_child_directed_treatment;
        p = null == p || 0 !== p && 1 !== p ? "" : U("tfcd", p);
        var y = d.google_tag_for_under_age_of_consent;
        y = null == y || 0 !== y && 1 !== y ? "" : U("tfua", y);
        var va = d.google_allow_ad_personalization_signals;
        va = !1 === va ? U("npa", 1) : !0 === va ? U("npa", 0) : "";
        var wa = d.google_restricted_data_processing;
        wa = Wa ? !0 === wa ? U("rdp", 1) : !1 === wa ? U("rdp", 0) : "" : "";
        var hd = U("value", d.google_conversion_value),
            id = U("currency_code", d.google_conversion_currency),
            jd = U("label", d.google_conversion_label),
            kd = U("oid", d.google_conversion_order_id),
            ld = U("bg", d.google_conversion_color);
        a: {
            var x = d.google_conversion_language;
            if (null != x) {
                x = x.toString();
                if (2 == x.length) {
                    x = U("hl", x);
                    break a
                }
                if (5 == x.length) {
                    x = U("hl", x.substring(0, 2)) + U("gl", x.substring(3, 5));
                    break a
                }
            }
            x = ""
        }
        var md = U("guid", "ON"),
            nd = !d.google_conversion_domain && "GooglemKTybQhCsO" in w && "function" == typeof w.GooglemKTybQhCsO ? U("resp", "GooglemKTybQhCsO") : "",
            od = U("disvt", d.google_disable_viewthrough),
            pd = U("eid", ab().join());
        var Y = d.google_conversion_date;
        var u = [];
        if (a) {
            var D = a.screen;
            D && (u.push(U("u_h", D.height)), u.push(U("u_w", D.width)), u.push(U("u_ah", D.availHeight)), u.push(U("u_aw", D.availWidth)),
                u.push(U("u_cd", D.colorDepth)));
            a.history && u.push(U("u_his", a.history.length))
        }
        Y && "function" == typeof Y.getTimezoneOffset && u.push(U("u_tz", -Y.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && u.push(U("u_java", b.javaEnabled())), b.plugins && u.push(U("u_nplug", b.plugins.length)), b.mimeTypes && u.push(U("u_nmime", b.mimeTypes.length)));
        Y = u.join("");
        u = U("gtm", d.google_gtm);
        b = b && b.sendBeacon ? U("sendb", "1") : "";
        D = ad();
        var rd = U("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            xa = Vc(d.google_custom_params);
        f = Vc(f);
        f = xa.concat(0 < xa.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        xa = Wc(c, d);
        var Vb = d.google_conversion_page_url,
            sd = d.google_conversion_referrer_url,
            ya = "";
        if (c) {
            if (a.top == a) var r = 0;
            else {
                var F = a.location.ancestorOrigins;
                if (F) r = F[F.length - 1] == a.location.origin ? 1 : 2;
                else {
                    F = a.top;
                    try {
                        var z;
                        if (z = !!F && null != F.location.href) c: {
                            try {
                                Da(F.foo);
                                z = !0;
                                break c
                            } catch (td) {}
                            z = !1
                        }
                        r = z
                    } catch (td) {
                        r = !1
                    }
                    r = r ? 1 : 2
                }
            }
            z = Vb ? Vb : 1 == r ? a.top.location.href : a.location.href;
            ya += U("frm", r);
            ya +=
                U("url", Tc(z));
            ya += U("ref", Tc(sd || c.referrer))
        }
        a = [k, m, h, n, q, p, y, va, wa, hd, id, jd, kd, ld, x, md, nd, od, pd, Y, u, b, D, rd, f, xa, ya, Zc(c), bd(d.google_additional_params), bd(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + T("www.googleadservices.com"), cd(a)].join("");
        c = $a();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [U("mid", d.google_conversion_merchant_id), U("fcntr", d.google_basket_feed_country), U("flng", d.google_basket_feed_language),
                U("dscnt", d.google_basket_discount), U("bttype", d.google_basket_transaction_type)
            ].join("");
            if (d)
                if (r = d.google_conversion_items) {
                    z = [];
                    k = 0;
                    for (m = r.length; k < m; k++) h = r[k], n = [], h && (n.push(V(h.value)), n.push(V(h.quantity)), n.push(V(h.item_id)), n.push(V(h.start_date)), n.push(V(h.end_date)), z.push("(" + n.join("*") + ")"));
                    r = 0 < z.length ? "&item=" + z.join("") : ""
                } else r = "";
            else r = "";
            c = [a, c, r].join("");
            a = 4E3 < c.length ? [a, U("item", "elngth")].join("") : c
        }
        g += a;
        1 === e ? g += [U("gcp", 1), U("sscte", 1), U("ct_cookie_present", 1)].join("") :
            3 == e && (g += U("gcp", 1), g += U("ct_cookie_present", 1));
        Va && (e = Nc(), void 0 !== e && (g += U("us_privacy", e || "error")));
        Yc(d) && (g = d.l ? g + U("gbcov", 1) : g + U("gbcov", 0));
        return g
    }

    function dd(a) {
        if (!Mc) {
            var b = Ea("IFRAME");
            b.style.display = "none";
            b.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(b)
        }
    }

    function ed() {
        return new Image
    }

    function fd(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? h = g : h = function() {};
        d += U("async", "1");
        e = c.google_gtm_url_processor;
        eb(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else try {
                k = Lc(a, b, d, h)
            } catch (m) {
                k = !1
            }
            f = !k
        }
        f && (a = ed, g && (a = e), a = a(), a.src = d, a.onload = h)
    }

    function gd(a, b) {
        E && "376635471" == G(2) && ("complete" === b.readyState ? dd(b) : a.addEventListener ? a.addEventListener("load", function() {
            dd(b)
        }) : a.attachEvent("onload", function() {
            dd(b)
        }))
    }

    function qd(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function ud(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < Rc.length; e++) c(Rc[e]);
        c("onload_callback");
        return d
    }

    function vd(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = t(Object, "keys").call(Object, d).filter(function(k) {
                    return Oc.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return t(Object, "values").call(Object, b)
    }

    function ad() {
        var a = "";
        cb() && (a = Fc().map(function(b) {
            return b.join("-")
        }).join("_"));
        return U("li", a)
    }

    function cd(a) {
        if (!Xa || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!eb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : U("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function bd(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += U(c, a[c]));
        return b
    }

    function Yc(a) {
        return H() ? (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1 : !1
    }

    function Xc(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && Pc.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function wd(a, b, c, d) {
        var e;
        if (e = !d.google_remarketing_only)
            if ((e = d.google_gtm_experiments) && e.capi)
                if (d.google_transport_url) e = !1;
                else {
                    if (e = !Qc) {
                        e = c;
                        var f = t("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "A7iusd6XVbb7SOF83vXQdziVdvBy4R7Bh2tuVErLbKXxemIjQH20g7jWaz48nG08Cd6zfylzuF+H+1s9S3JodAEAAACOeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d";
                        e = void 0 === e ? window.document : e;
                        if (f && e.head) {
                            var g = document.createElement("meta");
                            e.head.appendChild(g);
                            g.httpEquiv = "origin-trial";
                            g.content = f;
                            e = g
                        } else e = null;
                        e = !e
                    }
                    e ? e = !1 : (Qc = !0, e = kb("conversion-measurement") ||
                        kb("attribution-reporting"))
                }
        else e = !1;
        e && (e = d.google_additional_conversion_params || {}, e.capi = "1", d.google_additional_conversion_params = e, fd(a, c, d, $c(a, b, c, d, 4), !1, !1))
    };
    var xd = !1,
        yd = document.currentScript && document.currentScript.src || "";

    function zd(a, b, c) {
        try {
            if (!xd && (xd = !0, !c.google_gtm)) {
                var d = !1,
                    e = a.location.search.split("?")[1];
                e && 0 <= oa(e.split("&"), "gtm_debug=x") && (d = !0);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = !0);
                !d && 0 <= oa(b.cookie.split("; "), "__TAG_ASSISTANT=x") && (d = !0);
                !d && a.__TAG_ASSISTANT_API && (d = !0);
                if (d) {
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var f = new la(ma, "https://www.googletagmanager.com/debug/bootstrap"),
                            g = ta(f instanceof la && f.constructor ===
                                la && f.g === na ? f.i : "type_error:Const"),
                            h = b.createElement("script");
                        Ba(h, g);
                        var k = b.getElementsByTagName("script")[0];
                        k && k.parentNode && k.parentNode.insertBefore(h, k)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: "AW-" + (c.google_conversion_id || ""),
                            scriptSource: yd
                        }
                    })
                }
            }
        } catch (m) {}
    };

    function Ad(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ? a.onload_callback = Sc(b, a.onload_callback) : a.onload_callback = function() {}
    }

    function Bd(a, b, c, d) {
        zd(a, c, d);
        cb() && (Cc(2), d.google_gtm && Ec(M(Ac), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (qd(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !Mc && E && C(["376635470", "376635471"], Qa, 2);
                d.google_remarketing_only && !d.google_conversion_domain && E && C(["759238990", "759238991"], Ta, 13);
                !d.google_remarketing_only || d.google_conversion_domain || E && ("759248991" == G(14) || "759248990" == G(14)) || E && C(["759248990", "759248991"], Sa, 14);
                !1 !== d.google_conversion_linker &&
                    (E && C(["2505059650", "2505059651"], Ya ? 1 : 0, 18), d.google_gtm || wc(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) Cd(a, b, c, d);
                else {
                    var f = !1;
                    t("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") && (f = !0);
                    var g = d.google_additional_params;
                    g && g.dg && (f = "e" === g.dg);
                    g = function(h, k) {
                        k = void 0 === k ? !0 : k;
                        fd(a, c, d, $c(a, b, c, d,
                            h), k, !0)
                    };
                    d.google_remarketing_only ? g(2) : f ? (Ad(d, 2), wd(a, b, c, d), g(1), g(3)) : (wd(a, b, c, d), g(0), Yc(d) && vc(c, Xc(d)) && (d.l = !0, g(0, !1)))
                }
                d.google_remarketing_only && d.google_enable_display_cookie_match && gd(a, c);
                e = !0
            }
        } catch (h) {}
        return e
    }

    function Cd(a, b, c, d) {
        var e = vd(d.google_gtag_event_data.items);
        Ad(d, e.length);
        for (var f = 0; f < e.length; f++) fd(a, c, d, $c(a, b, c, d, 2, e[f]), !0, !0), d.google_conversion_time = d.google_conversion_time + 1
    };
    E = new function() {
        var a = [],
            b = 0,
            c;
        for (c in bb) a[b++] = bb[c];
        this.i = {};
        this.g = {};
        a = a || [];
        b = 0;
        for (c = a.length; b < c; ++b) this.g[a[b]] = ""
    };
    C(["592230570", "592230571"], Ra, 16);
    cb() && (Cc(1), Dc());

    function Dd(a, b, c) {
        function d(m, n) {
            var q = new Image;
            q.onload = m;
            q.src = n
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Hc(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ha(g, 0, "rmt_tld", g.search(Ia)) && 0 <= Ha(g, 0, "ipr", g.search(Ia)) && !h.match(Fa)[6] && (h += Ga(g), c[1] = A(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = Ja(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? (k.onload = e, k.src = h) : d(e, h);
                    break;
                case 4:
                    Lc(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = A(h, "sendb", 2);
                    h = A(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var W = ["GooglemKTybQhCsO"],
        X = w;
    W[0] in X || "undefined" == typeof X.execScript || X.execScript("var " + W[0]);
    for (var Z; W.length && (Z = W.shift());) W.length || void 0 === Dd ? X[Z] && X[Z] !== Object.prototype[Z] ? X = X[Z] : X = X[Z] = {} : X[Z] = Dd;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = ud(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        M(lb).i(e);
        return Bd(b, c, d, a)
    };
}).call(this);