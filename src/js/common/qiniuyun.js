! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
        define.amd ? define([], e) : "object" == typeof exports ? exports.qiniu = e() : t.qiniu = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                    return t.
                    default
                } : function () {
                    return t
                };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/dist/", e(e.s = 58)
    }([function (t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self &&
                self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, function (t, e) {
            var n = t.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = n)
        }, function (t, e, n) {
            var r = n(30)("wks"),
                o = n(22),
                i = n(0).Symbol,
                a = "function" == typeof i;
            (t.exports = function (t) {
                return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
            }).store = r
        }, function (t, e, n) {
            var r = n(7);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }, function (t, e, n) {
            var r = n(0),
                o = n(1),
                i = n(19),
                a = n(5),
                s = n(9),
                u = function (t, e, n) {
                    var c, f, l, h = t & u.F,
                        p = t & u.G,
                        d = t & u.S,
                        g = t & u.P,
                        m = t & u.B,
                        v = t & u.W,
                        y = p ? o : o[e] || (o[e] = {}),
                        b = y.prototype,
                        w = p ? r : d ? r[e] : (r[e] || {}).prototype;
                    for (c in p && (n = e), n)(f = !h && w && void 0 !== w[c]) && s(y, c) || (l = f ? w[c] : n[c], y[c] =
                            p && "function" != typeof w[c] ? n[c] : m && f ? i(l, r) : v && w[c] == l ? function (t) {
                            var e = function (e, n, r) {
                                if (this instanceof t) {
                                    switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e);
                                    case 2:
                                        return new t(e, n)
                                    }
                                    return new t(e, n, r)
                                }
                                return t.apply(this, arguments)
                            };
                            return e.prototype = t.prototype, e
                        }(l) : g && "function" == typeof l ? i(Function.call, l) : l, g && ((y.virtual || (y.virtual = {}))[
                            c] = l, t & u.R && b && !b[c] && a(b, c, l)))
                };
            u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
        }, function (t, e, n) {
            var r = n(6),
                o = n(21);
            t.exports = n(8) ? function (t, e, n) {
                return r.f(t, e, o(1, n))
            } : function (t, e, n) {
                return t[e] = n, t
            }
        }, function (t, e, n) {
            var r = n(3),
                o = n(43),
                i = n(28),
                a = Object.defineProperty;
            e.f = n(8) ? Object.defineProperty : function (t, e, n) {
                if (r(t), e = i(e, !0), r(n), o) try {
                        return a(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t
            }
        }, function (t, e) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, function (t, e, n) {
            t.exports = !n(10)(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e)
            }
        }, function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }, function (t, e, n) {
            var r = n(47),
                o = n(26);
            t.exports = function (t) {
                return r(o(t))
            }
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t) {
                return (0, d.
                default)(t).filter(function (t) {
                    return t.startsWith("x:")
                }).map(function (e) {
                    return [e, t[e].toString()]
                })
            }
            function i(t) {
                return "qiniu_js_sdk_upload_file_" + t.name + "_size_" + t.size
            }
            function a(t) {
                return {
                    Authorization: "UpToken " + t
                }
            }
            function s() {
                return window.XMLHttpRequest ? new XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP")
            }
            function u(t) {
                return new l.
                default (function (e, n) {
                    var r = new FileReader;
                    r.readAsArrayBuffer(t), r.onload = function (t) {
                        var n = t.target.result;
                        e(n)
                    }, r.onerror = function () {
                        n(new Error("fileReader 读取错误"))
                    }
                })
            }
            function c(t, e) {
                return new l.
                default (function (n, r) {
                    var o = s();
                    o.open(e.method, t), e.onCreate && e.onCreate(o), e.headers && (0, d.
                    default)(e.headers).forEach(function (t) {
                        return o.setRequestHeader(t, e.headers[t])
                    }), o.upload.addEventListener("progress", function (t) {
                        t.lengthComputable && e.onProgress && e.onProgress({
                            loaded: t.loaded,
                            total: t.total
                        })
                    }), o.onreadystatechange = function () {
                        var t = o.responseText;
                        if (4 === o.readyState) {
                            var e = o.getResponseHeader("x-reqId") || "";
                            if (200 !== o.status) {
                                var i = "xhr request failed, code: " + o.status + ";";
                                return t && (i = i + " response: " + t), void r({
                                    code: o.status,
                                    message: i,
                                    reqId: e,
                                    isRequestError: !0
                                })
                            }
                            try {
                                n({
                                    data: JSON.parse(t),
                                    reqId: e
                                })
                            } catch (t) {
                                r(t)
                            }
                        }
                    }, o.send(e.body)
                })
            }
            function f() {
                return "http:" === window.location.protocol ? "http:" : "https:"
            }
            e.__esModule = !0;
            var l = r(n(18)),
                h = r(n(34)),
                p = r(n(86)),
                d = r(n(36));
            e.isChunkExpired = function (t) {
                var e = t + 864e5;
                return (new Date).getTime() > e
            }, e.getChunks = function (t, e) {
                for (var n = [], r = Math.ceil(t.size / e), o = 0; o < r; o++) {
                    var i = t.slice(e * o, o === r - 1 ? t.size : e * (o + 1));
                    n.push(i)
                }
                return n
            }, e.filterParams = o, e.sum = function (t) {
                return t.reduce(function (t, e) {
                    return t + e
                }, 0)
            }, e.setLocalFileInfo = function (t, e) {
                try {
                    localStorage.setItem(i(t), (0, p.
                    default)(e))
                } catch (t) {
                    window.console && window.console.warn && console.warn("setLocalFileInfo failed")
                }
            }, e.removeLocalFileInfo = function (t) {
                try {
                    localStorage.removeItem(i(t))
                } catch (t) {
                    window.console && window.console.warn && console.warn("removeLocalFileInfo failed")
                }
            }, e.getLocalFileInfo = function (t) {
                try {
                    return JSON.parse(localStorage.getItem(i(t))) || []
                } catch (t) {
                    return window.console && window.console.warn && console.warn("getLocalFileInfo failed"), []
                }
            }, e.createMkFileUrl = function (t, e, n, r) {
                var i = t + "/mkfile/" + e;
                null != n && (i += "/key/" + (0, g.urlSafeBase64Encode)(n)), r.mimeType && (i += "/mimeType/" + (0, g.urlSafeBase64Encode)(
                    r.mimeType));
                var a = r.fname;
                return a && (i += "/fname/" + (0, g.urlSafeBase64Encode)(a)), r.params && o(r.params).forEach(function (
                    t) {
                    return i += "/" + encodeURIComponent(t[0]) + "/" + (0, g.urlSafeBase64Encode)(t[1])
                }), i
            }, e.getHeadersForChunkUpload = function (t) {
                var e = a(t);
                return (0, h.
                default)({
                    "content-type": "application/octet-stream"
                }, e)
            }, e.getHeadersForMkFile = function (t) {
                var e = a(t);
                return (0, h.
                default)({
                    "content-type": "text/plain"
                }, e)
            }, e.createXHR = s, e.computeMd5 = function (t) {
                return u(t).then(function (t) {
                    var e = new v.
                    default.ArrayBuffer;
                    return e.append(t), e.end()
                })
            }, e.readAsArrayBuffer = u, e.request = c, e.getPortFromUrl = function (t) {
                if (t && t.match) {
                    var e = t.match(/(^https?)/);
                    if (!e) return "";
                    var n = e[1];
                    return (e = t.match(/^https?:\/\/([^:^\/]*):(\d*)/)) ? e[2] : "http" === n ? "80" : "443"
                }
                return ""
            }, e.getDomainFromUrl = function (t) {
                if (t && t.match) {
                    var e = t.match(/^https?:\/\/([^:^\/]*)/);
                    return e ? e[1] : ""
                }
                return ""
            }, e.getUploadUrl = function (t, e) {
                var n = f();
                if (null != t.uphost) return l.
                default.resolve(n + "//" + t.uphost);
                if (null != t.region) {
                    var r = m.regionUphostMap[t.region],
                        o = t.useCdnDomain ? r.cdnUphost : r.srcUphost;
                    return l.
                    default.resolve(n + "//" + o)
                }
                return function (t) {
                    try {
                        var e = function (t) {
                            var e = t.split(":"),
                                n = e[0],
                                r = JSON.parse((0, g.urlSafeBase64Decode)(e[2]));
                            return r.ak = n, r.bucket = r.scope.split(":")[0], r
                        }(t);
                        return c(f() + "//api.qiniu.com/v2/query?ak=" + e.ak + "&bucket=" + e.bucket, {
                            method: "GET"
                        })
                    } catch (t) {
                        return l.
                        default.reject(t)
                    }
                }(e).then(function (t) {
                    var e = t.data.up.acc.main;
                    return n + "//" + e[0]
                })
            }, e.isContainFileMimeType = function (t, e) {
                return e.indexOf(t) > -1
            }, e.createObjectURL = function (t) {
                return (window.URL || window.webkitURL || window.mozURL).createObjectURL(t)
            }, e.getTransform = function (t, e) {
                var n = t.width,
                    r = t.height;
                switch (e) {
                case 1:
                    return {
                        width: n,
                        height: r,
                        matrix: [1, 0, 0, 1, 0, 0]
                    };
                case 2:
                    return {
                        width: n,
                        height: r,
                        matrix: [-1, 0, 0, 1, n, 0]
                    };
                case 3:
                    return {
                        width: n,
                        height: r,
                        matrix: [-1, 0, 0, -1, n, r]
                    };
                case 4:
                    return {
                        width: n,
                        height: r,
                        matrix: [1, 0, 0, -1, 0, r]
                    };
                case 5:
                    return {
                        width: r,
                        height: n,
                        matrix: [0, 1, 1, 0, 0, 0]
                    };
                case 6:
                    return {
                        width: r,
                        height: n,
                        matrix: [0, 1, -1, 0, r, 0]
                    };
                case 7:
                    return {
                        width: r,
                        height: n,
                        matrix: [0, -1, -1, 0, r, n]
                    };
                case 8:
                    return {
                        width: r,
                        height: n,
                        matrix: [0, -1, 1, 0, 0, n]
                    }
                }
            };
            var g = n(56),
                m = n(39),
                v = r(n(91))
        }, function (t, e) {
            t.exports = !0
        }, function (t, e) {
            t.exports = {}
        }, function (t, e, n) {
            var r = n(46),
                o = n(31);
            t.exports = Object.keys || function (t) {
                return r(t, o)
            }
        }, function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1)
            }
        }, function (t, e, n) {
            "use strict";
            e.__esModule = !0, e.
            default = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        }, function (t, e, n) {
            t.exports = {
                default: n(59),
                __esModule: !0
            }
        }, function (t, e, n) {
            var r = n(20);
            t.exports = function (t, e, n) {
                if (r(t), void 0 === e) return t;
                switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }
        }, function (t, e) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }, function (t, e) {
            t.exports = function (t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }, function (t, e) {
            var n = 0,
                r = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
            }
        }, function (t, e, n) {
            var r = n(6).f,
                o = n(9),
                i = n(2)("toStringTag");
            t.exports = function (t, e, n) {
                t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                    configurable: !0,
                    value: e
                })
            }
        }, function (t, e) {
            e.f = {}.propertyIsEnumerable
        }, function (t, e) {
            var n = Math.ceil,
                r = Math.floor;
            t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
            }
        }, function (t, e) {
            t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        }, function (t, e, n) {
            var r = n(7),
                o = n(0).document,
                i = r(o) && r(o.createElement);
            t.exports = function (t) {
                return i ? o.createElement(t) : {}
            }
        }, function (t, e, n) {
            var r = n(7);
            t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, o;
                if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
                if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
                if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function (t, e, n) {
            var r = n(30)("keys"),
                o = n(22);
            t.exports = function (t) {
                return r[t] || (r[t] = o(t))
            }
        }, function (t, e, n) {
            var r = n(1),
                o = n(0),
                i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (t.exports = function (t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: r.version,
                mode: n(13) ? "pure" : "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            })
        }, function (t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"
                .split(",")
        }, function (t, e, n) {
            var r = n(26);
            t.exports = function (t) {
                return Object(r(t))
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(20);
            t.exports.f = function (t) {
                return new function (t) {
                    var e, n;
                    this.promise = new t(function (t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t, n = r
                    }), this.resolve = r(e), this.reject = r(n)
                }(t)
            }
        }, function (t, e, n) {
            t.exports = {
                default: n(83),
                __esModule: !0
            }
        }, function (t, e) {
            e.f = Object.getOwnPropertySymbols
        }, function (t, e, n) {
            t.exports = {
                default: n(88),
                __esModule: !0
            }
        }, function (t, e, n) {
            e.f = n(2)
        }, function (t, e, n) {
            var r = n(0),
                o = n(1),
                i = n(13),
                a = n(37),
                s = n(6).f;
            t.exports = function (t) {
                var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: a.f(t)
                })
            }
        }, function (t, e, n) {
            "use strict";
            e.__esModule = !0, e.regionUphostMap = {
                z0: {
                    srcUphost: "up.qiniup.com",
                    cdnUphost: "upload.qiniup.com"
                },
                z1: {
                    srcUphost: "up-z1.qiniup.com",
                    cdnUphost: "upload-z1.qiniup.com"
                },
                z2: {
                    srcUphost: "up-z2.qiniup.com",
                    cdnUphost: "upload-z2.qiniup.com"
                },
                na0: {
                    srcUphost: "up-na0.qiniup.com",
                    cdnUphost: "upload-na0.qiniup.com"
                },
                as0: {
                    srcUphost: "up-as0.qiniup.com",
                    cdnUphost: "upload-as0.qiniup.com"
                }
            }, e.region = {
                z0: "z0",
                z1: "z1",
                z2: "z2",
                na0: "na0",
                as0: "as0"
            }
        }, function (t, e) {}, function (t, e, n) {
            "use strict";
            var r = n(60)(!0);
            n(42)(String, "String", function (t) {
                this._t = String(t), this._i = 0
            }, function () {
                var t, e = this._t,
                    n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = r(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(13),
                o = n(4),
                i = n(44),
                a = n(5),
                s = n(14),
                u = n(61),
                c = n(23),
                f = n(65),
                l = n(2)("iterator"),
                h = !([].keys && "next" in [].keys()),
                p = function () {
                    return this
                };
            t.exports = function (t, e, n, d, g, m, v) {
                u(n, e, d);
                var y, b, w, x = function (t) {
                        if (!h && t in C) return C[t];
                        switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                        }
                        return function () {
                            return new n(this, t)
                        }
                    }, S = e + " Iterator",
                    _ = "values" == g,
                    P = !1,
                    C = t.prototype,
                    F = C[l] || C["@@iterator"] || g && C[g],
                    I = F || x(g),
                    U = g ? _ ? x("entries") : I : void 0,
                    k = "Array" == e && C.entries || F;
                if (k && (w = f(k.call(new t))) !== Object.prototype && w.next && (c(w, S, !0), r || "function" ==
                    typeof w[l] || a(w, l, p)), _ && F && "values" !== F.name && (P = !0, I = function () {
                    return F.call(this)
                }), r && !v || !h && !P && C[l] || a(C, l, I), s[e] = I, s[S] = p, g) if (y = {
                        values: _ ? I : x("values"),
                        keys: m ? I : x("keys"),
                        entries: U
                    }, v) for (b in y) b in C || i(C, b, y[b]);
                    else o(o.P + o.F * (h || P), e, y);
                return y
            }
        }, function (t, e, n) {
            t.exports = !n(8) && !n(10)(function () {
                return 7 != Object.defineProperty(n(27)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (t, e, n) {
            t.exports = n(5)
        }, function (t, e, n) {
            var r = n(3),
                o = n(62),
                i = n(31),
                a = n(29)("IE_PROTO"),
                s = function () {}, u = function () {
                    var t, e = n(27)("iframe"),
                        r = i.length;
                    for (e.style.display = "none", n(49).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document)
                        .open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[
                            i[r]];
                    return u()
                };
            t.exports = Object.create || function (t, e) {
                var n;
                return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 ===
                    e ? n : o(n, e)
            }
        }, function (t, e, n) {
            var r = n(9),
                o = n(11),
                i = n(63)(!1),
                a = n(29)("IE_PROTO");
            t.exports = function (t, e) {
                var n, s = o(t),
                    u = 0,
                    c = [];
                for (n in s) n != a && r(s, n) && c.push(n);
                for (; e.length > u;) r(s, n = e[u++]) && (~i(c, n) || c.push(n));
                return c
            }
        }, function (t, e, n) {
            var r = n(16);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
                return "String" == r(t) ? t.split("") : Object(t)
            }
        }, function (t, e, n) {
            var r = n(25),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        }, function (t, e, n) {
            var r = n(0).document;
            t.exports = r && r.documentElement
        }, function (t, e, n) {
            n(66);
            for (var r = n(0), o = n(5), i = n(14), a = n(2)("toStringTag"), s =
                    "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList"
                    .split(","), u = 0; u < s.length; u++) {
                var c = s[u],
                    f = r[c],
                    l = f && f.prototype;
                l && !l[a] && o(l, a, c), i[c] = i.Array
            }
        }, function (t, e, n) {
            var r = n(16),
                o = n(2)("toStringTag"),
                i = "Arguments" == r(function () {
                    return arguments
                }());
            t.exports = function (t) {
                var e, n, a;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ?
                    "Arguments" : a
            }
        }, function (t, e, n) {
            var r = n(3),
                o = n(20),
                i = n(2)("species");
            t.exports = function (t, e) {
                var n, a = r(t).constructor;
                return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n)
            }
        }, function (t, e, n) {
            var r, o, i, a = n(19),
                s = n(75),
                u = n(49),
                c = n(27),
                f = n(0),
                l = f.process,
                h = f.setImmediate,
                p = f.clearImmediate,
                d = f.MessageChannel,
                g = f.Dispatch,
                m = 0,
                v = {}, y = function () {
                    var t = +this;
                    if (v.hasOwnProperty(t)) {
                        var e = v[t];
                        delete v[t], e()
                    }
                }, b = function (t) {
                    y.call(t.data)
                };
            h && p || (h = function (t) {
                for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
                return v[++m] = function () {
                    s("function" == typeof t ? t : Function(t), e)
                }, r(m), m
            }, p = function (t) {
                delete v[t]
            }, "process" == n(16)(l) ? r = function (t) {
                l.nextTick(a(y, t, 1))
            } : g && g.now ? r = function (t) {
                g.now(a(y, t, 1))
            } : d ? (i = (o = new d).port2, o.port1.onmessage = b, r = a(i.postMessage, i, 1)) : f.addEventListener &&
                "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
                f.postMessage(t + "", "*")
            }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
                u.appendChild(c("script")).onreadystatechange = function () {
                    u.removeChild(this), y.call(t)
                }
            } : function (t) {
                setTimeout(a(y, t, 1), 0)
            }), t.exports = {
                set: h,
                clear: p
            }
        }, function (t, e) {
            t.exports = function (t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    }
                } catch (t) {
                    return {
                        e: !0,
                        v: t
                    }
                }
            }
        }, function (t, e, n) {
            var r = n(3),
                o = n(7),
                i = n(33);
            t.exports = function (t, e) {
                if (r(t), o(e) && e.constructor === t) return e;
                var n = i.f(t);
                return (0, n.resolve)(e), n.promise
            }
        }, function (t, e, n) {
            "use strict";
            e.__esModule = !0, e.urlSafeBase64Encode = function (t) {
                return (t = function (t) {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        n = void 0,
                        r = void 0,
                        o = void 0,
                        i = void 0,
                        a = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0,
                        f = 0,
                        l = 0,
                        h = "",
                        p = [];
                    if (!t) return t;
                    t = function (t) {
                        if (null === t || void 0 === t) return "";
                        var e = t + "",
                            n = "",
                            r = void 0,
                            o = void 0,
                            i = 0;
                        r = o = 0, i = e.length;
                        for (var a = 0; a < i; a++) {
                            var s = e.charCodeAt(a),
                                u = null;
                            if (s < 128) o++;
                            else if (s > 127 && s < 2048) u = String.fromCharCode(s >> 6 | 192, 63 & s | 128);
                            else if (63488 & s ^ !0) u = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s |
                                    128);
                            else {
                                if (64512 & s ^ !0) throw new RangeError("Unmatched trail surrogate at " + a);
                                var c = e.charCodeAt(++a);
                                if (64512 & c ^ !0) throw new RangeError("Unmatched lead surrogate at " + (a - 1));
                                s = ((1023 & s) << 10) + (1023 & c) + 65536, u = String.fromCharCode(s >> 18 | 240, s >>
                                    12 & 63 | 128, s >> 6 & 63 | 128, 63 & s | 128)
                            }
                            null !== u && (o > r && (n += e.slice(r, o)), n += u, r = o = a + 1)
                        }
                        return o > r && (n += e.slice(r, i)), n
                    }(t + "");
                    do {
                        n = t.charCodeAt(f++), r = t.charCodeAt(f++), o = t.charCodeAt(f++), i = (c = n << 16 | r << 8 |
                            o) >> 18 & 63, a = c >> 12 & 63, s = c >> 6 & 63, u = 63 & c, p[l++] = e.charAt(i) + e.charAt(
                            a) + e.charAt(s) + e.charAt(u)
                    } while (f < t.length);
                    switch (h = p.join(""), t.length % 3) {
                    case 1:
                        h = h.slice(0, -2) + "==";
                        break;
                    case 2:
                        h = h.slice(0, -1) + "="
                    }
                    return h
                }(t)).replace(/\//g, "_").replace(/\+/g, "-")
            }, e.urlSafeBase64Decode = function (t) {
                return function (t) {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        n = void 0,
                        r = void 0,
                        o = void 0,
                        i = void 0,
                        a = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0,
                        f = 0,
                        l = 0,
                        h = [];
                    if (!t) return t;
                    t += "";
                    do {
                        i = e.indexOf(t.charAt(f++)), a = e.indexOf(t.charAt(f++)), s = e.indexOf(t.charAt(f++)), u = e
                            .indexOf(t.charAt(f++)), n = (c = i << 18 | a << 12 | s << 6 | u) >> 16 & 255, r = c >> 8 &
                            255, o = 255 & c, h[l++] = 64 === s ? String.fromCharCode(n) : 64 === u ? String.fromCharCode(
                            n, r) : String.fromCharCode(n, r, o)
                    } while (f < t.length);
                    return h.join("")
                }(t = t.replace(/_/g, "/").replace(/-/g, "+"))
            }
        }, function (t, e, n) {
            var r = n(46),
                o = n(31).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function (t) {
                return r(t, o)
            }
        }, function (t, e, n) {
            "use strict";
            e.__esModule = !0, e.pipeline = e.compressImage = e.exif = e.imageInfo = e.watermark = e.imageMogr2 = e.getUploadUrl =
                e.filterParams = e.getHeadersForMkFile = e.getHeadersForChunkUpload = e.createMkFileUrl = e.region = e.upload =
                void 0;
            var r = n(39),
                o = n(12),
                i = n(92),
                a = n(94),
                s = n(95),
                u = n(109),
                c = function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(110)),
                f = new u.StatisticsLogger;
            e.upload = function (t, e, n, r, o) {
                var a = {
                    file: t,
                    key: e,
                    token: n,
                    putExtra: r,
                    config: o
                };
                return new s.Observable(function (t) {
                    var e = new i.UploadManager(a, {
                        onData: function (e) {
                            return t.next(e)
                        },
                        onError: function (e) {
                            return t.error(e)
                        },
                        onComplete: function (e) {
                            return t.complete(e)
                        }
                    }, f);
                    return e.putFile(), e.stop.bind(e)
                })
            }, e.region = r.region, e.createMkFileUrl = o.createMkFileUrl, e.getHeadersForChunkUpload = o.getHeadersForChunkUpload,
                e.getHeadersForMkFile = o.getHeadersForMkFile, e.filterParams = o.filterParams, e.getUploadUrl = o.getUploadUrl,
                e.imageMogr2 = a.imageMogr2, e.watermark = a.watermark, e.imageInfo = a.imageInfo, e.exif = a.exif, e.compressImage =
                c.
            default, e.pipeline = a.pipeline
        }, function (t, e, n) {
            n(40), n(41), n(50), n(69), n(81), n(82), t.exports = n(1).Promise
        }, function (t, e, n) {
            var r = n(25),
                o = n(26);
            t.exports = function (t) {
                return function (e, n) {
                    var i, a, s = String(o(e)),
                        u = r(n),
                        c = s.length;
                    return u < 0 || u >= c ? t ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 ===
                        c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u +
                        2) : a - 56320 + (i - 55296 << 10) + 65536
                }
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(45),
                o = n(21),
                i = n(23),
                a = {};
            n(5)(a, n(2)("iterator"), function () {
                return this
            }), t.exports = function (t, e, n) {
                t.prototype = r(a, {
                    next: o(1, n)
                }), i(t, e + " Iterator")
            }
        }, function (t, e, n) {
            var r = n(6),
                o = n(3),
                i = n(15);
            t.exports = n(8) ? Object.defineProperties : function (t, e) {
                o(t);
                for (var n, a = i(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
                return t
            }
        }, function (t, e, n) {
            var r = n(11),
                o = n(48),
                i = n(64);
            t.exports = function (t) {
                return function (e, n, a) {
                    var s, u = r(e),
                        c = o(u.length),
                        f = i(a, c);
                    if (t && n != n) {
                        for (; c > f;) if ((s = u[f++]) != s) return !0
                    } else for (; c > f; f++) if ((t || f in u) && u[f] === n) return t || f || 0; return !t && -1
                }
            }
        }, function (t, e, n) {
            var r = n(25),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, e) {
                return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
            }
        }, function (t, e, n) {
            var r = n(9),
                o = n(32),
                i = n(29)("IE_PROTO"),
                a = Object.prototype;
            t.exports = Object.getPrototypeOf || function (t) {
                return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor
                    .prototype : t instanceof Object ? a : null
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(67),
                o = n(68),
                i = n(14),
                a = n(11);
            t.exports = n(42)(Array, "Array", function (t, e) {
                this._t = a(t), this._i = 0, this._k = e
            }, function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [
                        n, t[n]])
            }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
        }, function (t, e) {
            t.exports = function () {}
        }, function (t, e) {
            t.exports = function (t, e) {
                return {
                    value: e,
                    done: !! t
                }
            }
        }, function (t, e, n) {
            "use strict";
            var r, o, i, a, s = n(13),
                u = n(0),
                c = n(19),
                f = n(51),
                l = n(4),
                h = n(7),
                p = n(20),
                d = n(70),
                g = n(71),
                m = n(52),
                v = n(53).set,
                y = n(76)(),
                b = n(33),
                w = n(54),
                x = n(77),
                S = n(55),
                _ = u.TypeError,
                P = u.process,
                C = P && P.versions,
                F = C && C.v8 || "",
                I = u.Promise,
                U = "process" == f(P),
                k = function () {}, E = o = b.f,
                M = !! function () {
                    try {
                        var t = I.resolve(1),
                            e = (t.constructor = {})[n(2)("species")] = function (t) {
                                t(k, k)
                            };
                        return (U || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e && 0 !== F.indexOf(
                            "6.6") && -1 === x.indexOf("Chrome/66")
                    } catch (t) {}
                }(),
                O = function (t) {
                    var e;
                    return !(!h(t) || "function" != typeof (e = t.then)) && e
                }, T = function (t, e) {
                    if (!t._n) {
                        t._n = !0;
                        var n = t._c;
                        y(function () {
                            for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;)! function (e) {
                                var n, i, a, s = o ? e.ok : e.fail,
                                    u = e.resolve,
                                    c = e.reject,
                                    f = e.domain;
                                try {
                                    s ? (o || (2 == t._h && L(t), t._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(
                                        r), f && (f.exit(), a = !0)), n === e.promise ? c(_("Promise-chain cycle")) : (
                                        i = O(n)) ? i.call(n, u, c) : u(n)) : c(r)
                                } catch (t) {
                                    f && !a && f.exit(), c(t)
                                }
                            }(n[i++]);
                            t._c = [], t._n = !1, e && !t._h && A(t)
                        })
                    }
                }, A = function (t) {
                    v.call(u, function () {
                        var e, n, r, o = t._v,
                            i = R(t);
                        if (i && (e = w(function () {
                            U ? P.emit("unhandledRejection", o, t) : (n = u.onunhandledrejection) ? n({
                                promise: t,
                                reason: o
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
                        }), t._h = U || R(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                    })
                }, R = function (t) {
                    return 1 !== t._h && 0 === (t._a || t._c).length
                }, L = function (t) {
                    v.call(u, function () {
                        var e;
                        U ? P.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                            promise: t,
                            reason: t._v
                        })
                    })
                }, D = function (t) {
                    var e = this;
                    e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), T(e, !0))
                }, j = function (t) {
                    var e, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === t) throw _("Promise can't be resolved itself");
                            (e = O(t)) ? y(function () {
                                var r = {
                                    _w: n,
                                    _d: !1
                                };
                                try {
                                    e.call(t, c(j, r, 1), c(D, r, 1))
                                } catch (t) {
                                    D.call(r, t)
                                }
                            }) : (n._v = t, n._s = 1, T(n, !1))
                        } catch (t) {
                            D.call({
                                _w: n,
                                _d: !1
                            }, t)
                        }
                    }
                };
            M || (I = function (t) {
                d(this, I, "Promise", "_h"), p(t), r.call(this);
                try {
                    t(c(j, this, 1), c(D, this, 1))
                } catch (t) {
                    D.call(this, t)
                }
            }, (r = function (t) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }).prototype = n(78)(I.prototype, {
                then: function (t, e) {
                    var n = E(m(this, I));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = U ? P.domain :
                        void 0, this._c.push(n), this._a && this._a.push(n), this._s && T(this, !1), n.promise
                },
                catch: function (t) {
                    return this.then(void 0, t)
                }
            }), i = function () {
                var t = new r;
                this.promise = t, this.resolve = c(j, t, 1), this.reject = c(D, t, 1)
            }, b.f = E = function (t) {
                return t === I || t === a ? new i(t) : o(t)
            }), l(l.G + l.W + l.F * !M, {
                Promise: I
            }), n(23)(I, "Promise"), n(79)("Promise"), a = n(1).Promise, l(l.S + l.F * !M, "Promise", {
                reject: function (t) {
                    var e = E(this);
                    return (0, e.reject)(t), e.promise
                }
            }), l(l.S + l.F * (s || !M), "Promise", {
                resolve: function (t) {
                    return S(s && this === a ? I : this, t)
                }
            }), l(l.S + l.F * !(M && n(80)(function (t) {
                I.all(t).
                catch (k)
            })), "Promise", {
                all: function (t) {
                    var e = this,
                        n = E(e),
                        r = n.resolve,
                        o = n.reject,
                        i = w(function () {
                            var n = [],
                                i = 0,
                                a = 1;
                            g(t, !1, function (t) {
                                var s = i++,
                                    u = !1;
                                n.push(void 0), a++, e.resolve(t).then(function (t) {
                                    u || (u = !0, n[s] = t, --a || r(n))
                                }, o)
                            }), --a || r(n)
                        });
                    return i.e && o(i.v), n.promise
                },
                race: function (t) {
                    var e = this,
                        n = E(e),
                        r = n.reject,
                        o = w(function () {
                            g(t, !1, function (t) {
                                e.resolve(t).then(n.resolve, r)
                            })
                        });
                    return o.e && r(o.v), n.promise
                }
            })
        }, function (t, e) {
            t.exports = function (t, e, n, r) {
                if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                return t
            }
        }, function (t, e, n) {
            var r = n(19),
                o = n(72),
                i = n(73),
                a = n(3),
                s = n(48),
                u = n(74),
                c = {}, f = {};
            (e = t.exports = function (t, e, n, l, h) {
                var p, d, g, m, v = h ? function () {
                        return t
                    } : u(t),
                    y = r(n, l, e ? 2 : 1),
                    b = 0;
                if ("function" != typeof v) throw TypeError(t + " is not iterable!");
                if (i(v)) {
                    for (p = s(t.length); p > b; b++) if ((m = e ? y(a(d = t[b])[0], d[1]) : y(t[b])) === c || m === f)
                            return m
                } else for (g = v.call(t); !(d = g.next()).done;) if ((m = o(g, y, d.value, e)) === c || m === f) return m
            }).BREAK = c, e.RETURN = f
        }, function (t, e, n) {
            var r = n(3);
            t.exports = function (t, e, n, o) {
                try {
                    return o ? e(r(n)[0], n[1]) : e(n)
                } catch (e) {
                    var i = t.
                    return;
                    throw void 0 !== i && r(i.call(t)), e
                }
            }
        }, function (t, e, n) {
            var r = n(14),
                o = n(2)("iterator"),
                i = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (r.Array === t || i[o] === t)
            }
        }, function (t, e, n) {
            var r = n(51),
                o = n(2)("iterator"),
                i = n(14);
            t.exports = n(1).getIteratorMethod = function (t) {
                if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
            }
        }, function (t, e) {
            t.exports = function (t, e, n) {
                var r = void 0 === n;
                switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
                }
                return t.apply(n, e)
            }
        }, function (t, e, n) {
            var r = n(0),
                o = n(53).set,
                i = r.MutationObserver || r.WebKitMutationObserver,
                a = r.process,
                s = r.Promise,
                u = "process" == n(16)(a);
            t.exports = function () {
                var t, e, n, c = function () {
                        var r, o;
                        for (u && (r = a.domain) && r.exit(); t;) {
                            o = t.fn, t = t.next;
                            try {
                                o()
                            } catch (r) {
                                throw t ? n() : e = void 0, r
                            }
                        }
                        e = void 0, r && r.enter()
                    };
                if (u) n = function () {
                        a.nextTick(c)
                };
                else if (!i || r.navigator && r.navigator.standalone) if (s && s.resolve) {
                        var f = s.resolve(void 0);
                        n = function () {
                            f.then(c)
                        }
                    } else n = function () {
                            o.call(r, c)
                    };
                    else {
                        var l = !0,
                            h = document.createTextNode("");
                        new i(c).observe(h, {
                            characterData: !0
                        }), n = function () {
                            h.data = l = !l
                        }
                    }
                return function (r) {
                    var o = {
                        fn: r,
                        next: void 0
                    };
                    e && (e.next = o), t || (t = o, n()), e = o
                }
            }
        }, function (t, e, n) {
            var r = n(0).navigator;
            t.exports = r && r.userAgent || ""
        }, function (t, e, n) {
            var r = n(5);
            t.exports = function (t, e, n) {
                for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
                return t
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(0),
                o = n(1),
                i = n(6),
                a = n(8),
                s = n(2)("species");
            t.exports = function (t) {
                var e = "function" == typeof o[t] ? o[t] : r[t];
                a && e && !e[s] && i.f(e, s, {
                    configurable: !0,
                    get: function () {
                        return this
                    }
                })
            }
        }, function (t, e, n) {
            var r = n(2)("iterator"),
                o = !1;
            try {
                var i = [7][r]();
                i.
                return = function () {
                    o = !0
                }, Array.from(i, function () {
                    throw 2
                })
            } catch (t) {}
            t.exports = function (t, e) {
                if (!e && !o) return !1;
                var n = !1;
                try {
                    var i = [7],
                        a = i[r]();
                    a.next = function () {
                        return {
                            done: n = !0
                        }
                    }, i[r] = function () {
                        return a
                    }, t(i)
                } catch (t) {}
                return n
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(4),
                o = n(1),
                i = n(0),
                a = n(52),
                s = n(55);
            r(r.P + r.R, "Promise", {
                finally: function (t) {
                    var e = a(this, o.Promise || i.Promise),
                        n = "function" == typeof t;
                    return this.then(n ? function (n) {
                        return s(e, t()).then(function () {
                            return n
                        })
                    } : t, n ? function (n) {
                        return s(e, t()).then(function () {
                            throw n
                        })
                    } : t)
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(4),
                o = n(33),
                i = n(54);
            r(r.S, "Promise", {
                try: function (t) {
                    var e = o.f(this),
                        n = i(t);
                    return (n.e ? e.reject : e.resolve)(n.v), e.promise
                }
            })
        }, function (t, e, n) {
            n(84), t.exports = n(1).Object.assign
        }, function (t, e, n) {
            var r = n(4);
            r(r.S + r.F, "Object", {
                assign: n(85)
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(15),
                o = n(35),
                i = n(24),
                a = n(32),
                s = n(47),
                u = Object.assign;
            t.exports = !u || n(10)(function () {
                var t = {}, e = {}, n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return t[n] = 7, r.split("").forEach(function (t) {
                    e[t] = t
                }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
            }) ? function (t, e) {
                for (var n = a(t), u = arguments.length, c = 1, f = o.f, l = i.f; u > c;) for (var h, p = s(arguments[c++]),
                            d = f ? r(p).concat(f(p)) : r(p), g = d.length, m = 0; g > m;) l.call(p, h = d[m++]) && (n[
                            h] = p[h]);
                return n
            } : u
        }, function (t, e, n) {
            t.exports = {
                default: n(87),
                __esModule: !0
            }
        }, function (t, e, n) {
            var r = n(1),
                o = r.JSON || (r.JSON = {
                    stringify: JSON.stringify
                });
            t.exports = function (t) {
                return o.stringify.apply(o, arguments)
            }
        }, function (t, e, n) {
            n(89), t.exports = n(1).Object.keys
        }, function (t, e, n) {
            var r = n(32),
                o = n(15);
            n(90)("keys", function () {
                return function (t) {
                    return o(r(t))
                }
            })
        }, function (t, e, n) {
            var r = n(4),
                o = n(1),
                i = n(10);
            t.exports = function (t, e) {
                var n = (o.Object || {})[t] || Object[t],
                    a = {};
                a[t] = e(n), r(r.S + r.F * i(function () {
                    n(1)
                }), "Object", a)
            }
        }, function (t, e, n) {
            ! function (e) {
                t.exports = function (t) {
                    "use strict";

                    function e(t, e) {
                        var n = t[0],
                            r = t[1],
                            o = t[2],
                            i = t[3];
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[0] - 680876936 | 0) << 7 |
                            n >>> 25) + r | 0) & r | ~n & o) + e[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~
                            i & r) + e[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[3] - 1044525330 |
                            0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r &
                            i) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[5] + 1200080426 | 0) <<
                            12 | i >>> 20) + n | 0) & n | ~i & r) + e[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) &
                            i | ~o & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i =
                            ((i += ((n = ((n += (r & o | ~r & i) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~
                            n & o) + e[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[10] - 42063 |
                            0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + o |
                            0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[12] + 1804603682 |
                            0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[13] - 40341101 | 0) << 12 | i >>> 20) + n |
                            0) & n | ~i & r) + e[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[15] +
                            1236535329 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n +=
                            (r & i | o & ~i) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[6] -
                            1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | o >>>
                            18) + i | 0) & n | i & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((
                            o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[5] - 701558691 | 0) << 5 | n >>>
                            27) + r | 0) & o | r & ~o) + e[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) +
                            e[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[4] - 405537848 | 0) <<
                            20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) +
                            e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[14] - 1019803690 | 0) <<
                            9 | i >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n |
                            i & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((
                            i += ((n = ((n += (r & i | o & ~i) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o |
                            r & ~o) + e[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 |
                            0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + o |
                            0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[5] - 378558 | 0) << 4 |
                            n >>> 28) + r | 0) ^ r ^ o) + e[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) +
                            e[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[14] - 35309556 | 0) << 23 |
                            r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[1] -
                            1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[4] + 1272893353 | 0) << 11 | i >>>
                            21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[10] -
                            1094730640 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n +=
                            (r ^ o ^ i) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[0] - 358537222 |
                            0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^
                            i ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i +=
                            ((n = ((n += (r ^ o ^ i) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[12] -
                            421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | o >>>
                            16) + i | 0) ^ i ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((i = ((
                            i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~
                            o)) + e[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[
                            14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>>
                            11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[12] + 1700485571 |
                            0) << 6 | n >>> 26) + r | 0) | ~o)) + e[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((
                            o = ((o += (n ^ (i | ~r)) + e[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[1] -
                            2054922799 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (
                            r | ~i)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[15] - 30611744 | 0) <<
                            10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[6] - 1560198380 | 0) << 15 | o >>>
                            17) + i | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((
                            i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~
                            o)) + e[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[
                            2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>>
                            11) + o | 0, t[0] = n + t[0] | 0, t[1] = r + t[1] | 0, t[2] = o + t[2] | 0, t[3] = i + t[3] |
                            0
                    }
                    function n(t) {
                        var e, n = [];
                        for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(
                                e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                        return n
                    }
                    function r(t) {
                        var e, n = [];
                        for (e = 0; e < 64; e += 4) n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] <<
                                24);
                        return n
                    }
                    function o(t) {
                        var r, o, i, a, s, u, c = t.length,
                            f = [1732584193, -271733879, -1732584194, 271733878];
                        for (r = 64; r <= c; r += 64) e(f, n(t.substring(r - 64, r)));
                        for (o = (t = t.substring(r - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            r = 0; r < o; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
                        if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (e(f, i), r = 0; r < 16; r += 1) i[r] = 0;
                        return a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), u =
                            parseInt(a[1], 16) || 0, i[14] = s, i[15] = u, e(f, i), f
                    }
                    function i(t) {
                        var e, n = "";
                        for (e = 0; e < 4; e += 1) n += f[t >> 8 * e + 4 & 15] + f[t >> 8 * e & 15];
                        return n
                    }
                    function a(t) {
                        var e;
                        for (e = 0; e < t.length; e += 1) t[e] = i(t[e]);
                        return t.join("")
                    }
                    function s(t) {
                        return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
                    }
                    function u(t) {
                        var e, n = [],
                            r = t.length;
                        for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
                        return String.fromCharCode.apply(String, n)
                    }
                    function c() {
                        this.reset()
                    }
                    var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                    return a(o("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
                        function e(t, e) {
                            return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                        }
                        ArrayBuffer.prototype.slice = function (n, r) {
                            var o, i, a, s, u = this.byteLength,
                                c = e(n, u),
                                f = u;
                            return r !== t && (f = e(r, u)), c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(
                                o), a = new Uint8Array(i), s = new Uint8Array(this, c, o), a.set(s), i)
                        }
                    }(), c.prototype.append = function (t) {
                        return this.appendBinary(s(t)), this
                    }, c.prototype.appendBinary = function (t) {
                        this._buff += t, this._length += t.length;
                        var r, o = this._buff.length;
                        for (r = 64; r <= o; r += 64) e(this._hash, n(this._buff.substring(r - 64, r)));
                        return this._buff = this._buff.substring(r - 64), this
                    }, c.prototype.end = function (t) {
                        var e, n, r = this._buff,
                            o = r.length,
                            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (e = 0; e < o; e += 1) i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
                        return this._finish(i, o), n = a(this._hash), t && (n = u(n)), this.reset(), n
                    }, c.prototype.reset = function () {
                        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194,
                                271733878], this
                    }, c.prototype.getState = function () {
                        return {
                            buff: this._buff,
                            length: this._length,
                            hash: this._hash
                        }
                    }, c.prototype.setState = function (t) {
                        return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
                    }, c.prototype.destroy = function () {
                        delete this._hash, delete this._buff, delete this._length
                    }, c.prototype._finish = function (t, n) {
                        var r, o, i, a = n;
                        if (t[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (e(this._hash, t), a = 0; a < 16; a += 1) t[a] =
                                    0;
                        r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), i =
                            parseInt(r[1], 16) || 0, t[14] = o, t[15] = i, e(this._hash, t)
                    }, c.hash = function (t, e) {
                        return c.hashBinary(s(t), e)
                    }, c.hashBinary = function (t, e) {
                        var n = a(o(t));
                        return e ? u(n) : n
                    }, c.ArrayBuffer = function () {
                        this.reset()
                    }, c.ArrayBuffer.prototype.append = function (t) {
                        var n, o = function (t, e, n) {
                                var r = new Uint8Array(t.byteLength + e.byteLength);
                                return r.set(new Uint8Array(t)), r.set(new Uint8Array(e), t.byteLength), r
                            }(this._buff.buffer, t),
                            i = o.length;
                        for (this._length += t.byteLength, n = 64; n <= i; n += 64) e(this._hash, r(o.subarray(n - 64,
                                n)));
                        return this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0),
                            this
                    }, c.ArrayBuffer.prototype.end = function (t) {
                        var e, n, r = this._buff,
                            o = r.length,
                            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (e = 0; e < o; e += 1) i[e >> 2] |= r[e] << (e % 4 << 3);
                        return this._finish(i, o), n = a(this._hash), t && (n = u(n)), this.reset(), n
                    }, c.ArrayBuffer.prototype.reset = function () {
                        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -
                                1732584194, 271733878], this
                    }, c.ArrayBuffer.prototype.getState = function () {
                        var t = c.prototype.getState.call(this);
                        return t.buff = function (t) {
                            return String.fromCharCode.apply(null, new Uint8Array(t))
                        }(t.buff), t
                    }, c.ArrayBuffer.prototype.setState = function (t) {
                        return t.buff = function (t, e) {
                            var n, r = t.length,
                                o = new ArrayBuffer(r),
                                i = new Uint8Array(o);
                            for (n = 0; n < r; n += 1) i[n] = t.charCodeAt(n);
                            return i
                        }(t.buff), c.prototype.setState.call(this, t)
                    }, c.ArrayBuffer.prototype.destroy = c.prototype.destroy, c.ArrayBuffer.prototype._finish = c.prototype
                        ._finish, c.ArrayBuffer.hash = function (t, n) {
                        var o = a(function (t) {
                            var n, o, i, a, s, u, c = t.length,
                                f = [1732584193, -271733879, -1732584194, 271733878];
                            for (n = 64; n <= c; n += 64) e(f, r(t.subarray(n - 64, n)));
                            for (o = (t = n - 64 < c ? t.subarray(n - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < o; n += 1) i[n >> 2] |= t[n] << (n %
                                    4 << 3);
                            if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (e(f, i), n = 0; n < 16; n += 1) i[n] = 0;
                            return a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), u =
                                parseInt(a[1], 16) || 0, i[14] = s, i[15] = u, e(f, i), f
                        }(new Uint8Array(t)));
                        return n ? u(o) : o
                    }, c
                }()
            }()
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0, e.UploadManager = void 0;
            var o = r(n(18)),
                i = r(n(34)),
                a = r(n(17)),
                s = n(12),
                u = n(93);
            e.UploadManager = function () {
                function t(e, n, r) {
                    var o = this;
                    (0, a.
                    default)(this, t), this.config = (0, i.
                    default)({
                        useCdnDomain: !0,
                        disableStatisticsReport: !1,
                        retryCount: 3,
                        checkByMD5: !1,
                        uphost: null,
                        forceDirect: !1,
                        concurrentRequestLimit: 3,
                        region: null
                    }, e.config), this.putExtra = (0, i.
                    default)({
                        fname: "",
                        params: {},
                        mimeType: null
                    }, e.putExtra), this.statisticsLogger = r, this.progress = null, this.xhrList = [], this.xhrHandler = function (
                        t) {
                        return o.xhrList.push(t)
                    }, this.aborted = !1, this.file = e.file, this.key = e.key, this.token = e.token, this.onData = function () {},
                        this.onError = function () {}, this.onComplete = function () {}, this.retryCount = 0, (0, i.
                    default)(this, n)
                }
                return t.prototype.putFile = function () {
                    var t = this;
                    if (this.aborted = !1, this.putExtra.fname || (this.putExtra.fname = this.file.name), !this.putExtra
                        .mimeType || !this.putExtra.mimeType.length || (0, s.isContainFileMimeType)(this.file.type,
                        this.putExtra.mimeType)) {
                        var e = (0, s.getUploadUrl)(this.config, this.token).then(function (e) {
                            return t.uploadUrl = e, t.uploadAt = (new Date).getTime(), t.config.forceDirect ? t.directUpload() :
                                t.file.size > 4194304 ? t.resumeUpload() : t.directUpload()
                        });
                        return e.then(function (e) {
                            t.onComplete(e.data), t.config.disableStatisticsReport || t.sendLog(e.reqId, 200)
                        }, function (e) {
                            if (t.clear(), e.isRequestError && !t.config.disableStatisticsReport) {
                                var n = t.aborted ? "" : e.reqId,
                                    r = t.aborted ? -2 : e.code;
                                t.sendLog(n, r)
                            }
                            var o = e.isRequestError && 0 === e.code && !t.aborted,
                                i = ++t.retryCount <= t.config.retryCount;
                            o && i ? t.putFile() : t.onError(e)
                        }), e
                    }
                    var n = new Error("file type doesn't match with what you specify");
                    this.onError(n)
                }, t.prototype.clear = function () {
                    this.xhrList.forEach(function (t) {
                        return t.abort()
                    }), this.xhrList = []
                }, t.prototype.stop = function () {
                    this.clear(), this.aborted = !0
                }, t.prototype.sendLog = function (t, e) {
                    this.statisticsLogger.log({
                        code: e,
                        reqId: t,
                        host: (0, s.getDomainFromUrl)(this.uploadUrl),
                        remoteIp: "",
                        port: (0, s.getPortFromUrl)(this.uploadUrl),
                        duration: ((new Date).getTime() - this.uploadAt) / 1e3,
                        time: Math.floor(this.uploadAt / 1e3),
                        bytesSent: this.progress ? this.progress.total.loaded : 0,
                        upType: "jssdk-h5",
                        size: this.file.size
                    }, this.token)
                }, t.prototype.directUpload = function () {
                    var t = this,
                        e = new FormData;
                    return e.append("file", this.file), e.append("token", this.token), null != this.key && e.append(
                        "key", this.key), e.append("fname", this.putExtra.fname), (0, s.filterParams)(this.putExtra.params)
                        .forEach(function (t) {
                        return e.append(t[0], t[1])
                    }), (0, s.request)(this.uploadUrl, {
                        method: "POST",
                        body: e,
                        onProgress: function (e) {
                            t.updateDirectProgress(e.loaded, e.total)
                        },
                        onCreate: this.xhrHandler
                    }).then(function (e) {
                        return t.finishDirectProgress(), e
                    })
                }, t.prototype.resumeUpload = function () {
                    var t = this;
                    this.loaded = {
                        mkFileProgress: 0,
                        chunks: null
                    }, this.ctxList = [], this.localInfo = (0, s.getLocalFileInfo)(this.file), this.chunks = (0, s.getChunks)(
                        this.file, 4194304), this.initChunksProgress();
                    var e = new u.Pool(function (e) {
                        return t.uploadChunk(e)
                    }, this.config.concurrentRequestLimit),
                        n = this.chunks.map(function (t, n) {
                            return e.enqueue({
                                chunk: t,
                                index: n
                            })
                        }),
                        r = o.
                    default.all(n).then(function () {
                        return t.mkFileReq()
                    });
                    return r.then(function (e) {
                        (0, s.removeLocalFileInfo)(t.file)
                    }, function (e) {
                        701 !== e.code ? (0, s.setLocalFileInfo)(t.file, t.ctxList) : (0, s.removeLocalFileInfo)(t.file)
                    }), r
                }, t.prototype.uploadChunk = function (t) {
                    var e = this,
                        n = t.index,
                        r = t.chunk,
                        i = this.localInfo[n],
                        a = this.uploadUrl + "/mkblk/" + r.size,
                        u = i && !(0, s.isChunkExpired)(i.time),
                        c = this.config.checkByMD5,
                        f = function () {
                            return e.updateChunkProgress(r.size, n), e.ctxList[n] = {
                                ctx: i.ctx,
                                time: i.time,
                                md5: i.md5
                            }, o.
                            default.resolve(null)
                        };
                    return u && !c ? f() : (0, s.computeMd5)(r).then(function (t) {
                        if (u && t === i.md5) return f();
                        var o = (0, s.getHeadersForChunkUpload)(e.token),
                            c = e.xhrHandler;
                        return (0, s.request)(a, {
                            method: "POST",
                            headers: o,
                            body: r,
                            onProgress: function (t) {
                                e.updateChunkProgress(t.loaded, n)
                            },
                            onCreate: c
                        }).then(function (r) {
                            e.ctxList[n] = {
                                time: (new Date).getTime(),
                                ctx: r.data.ctx,
                                md5: t
                            }
                        })
                    })
                }, t.prototype.mkFileReq = function () {
                    var t = this,
                        e = (0, i.
                        default)({
                            mimeType: "application/octet-stream"
                        }, this.putExtra),
                        n = (0, s.createMkFileUrl)(this.uploadUrl, this.file.size, this.key, e),
                        r = this.ctxList.map(function (t) {
                            return t.ctx
                        }).join(","),
                        a = (0, s.getHeadersForMkFile)(this.token),
                        u = this.xhrHandler;
                    return (0, s.request)(n, {
                        method: "POST",
                        body: r,
                        headers: a,
                        onCreate: u
                    }).then(function (e) {
                        return t.updateMkFileProgress(1), o.
                        default.resolve(e)
                    })
                }, t.prototype.updateDirectProgress = function (t, e) {
                    this.progress = {
                        total: this.getProgressInfoItem(t, e + 1)
                    }, this.onData(this.progress)
                }, t.prototype.finishDirectProgress = function () {
                    var t = this.progress.total;
                    this.progress.total = this.getProgressInfoItem(t.loaded + 1, t.size), this.onData(this.progress)
                }, t.prototype.initChunksProgress = function () {
                    this.loaded.chunks = this.chunks.map(function (t) {
                        return 0
                    }), this.notifyResumeProgress()
                }, t.prototype.updateChunkProgress = function (t, e) {
                    this.loaded.chunks[e] = t, this.notifyResumeProgress()
                }, t.prototype.updateMkFileProgress = function (t) {
                    this.loaded.mkFileProgress = t, this.notifyResumeProgress()
                }, t.prototype.notifyResumeProgress = function () {
                    var t = this;
                    this.progress = {
                        total: this.getProgressInfoItem((0, s.sum)(this.loaded.chunks) + this.loaded.mkFileProgress,
                            this.file.size + 1),
                        chunks: this.chunks.map(function (e, n) {
                            return t.getProgressInfoItem(t.loaded.chunks[n], e.size)
                        })
                    }, this.onData(this.progress)
                }, t.prototype.getProgressInfoItem = function (t, e) {
                    return {
                        loaded: t,
                        size: e,
                        percent: t / e * 100
                    }
                }, t
            }()
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0, e.Pool = void 0;
            var o = r(n(18)),
                i = r(n(17));
            e.Pool = function () {
                function t(e, n) {
                    (0, i.
                    default)(this, t), this.runTask = e, this.queue = [], this.processing = [], this.limit = n
                }
                return t.prototype.enqueue = function (t) {
                    var e = this;
                    return new o.
                    default (function (n, r) {
                        e.queue.push({
                            task: t,
                            resolve: n,
                            reject: r
                        }), e.check()
                    })
                }, t.prototype.run = function (t) {
                    var e = this;
                    this.queue = this.queue.filter(function (e) {
                        return e !== t
                    }), this.processing.push(t), this.runTask(t.task).then(function () {
                        e.processing = e.processing.filter(function (e) {
                            return e !== t
                        }), t.resolve(), e.check()
                    }, function (e) {
                        return t.reject(e)
                    })
                }, t.prototype.check = function () {
                    var t = this,
                        e = this.processing.length,
                        n = this.limit - e;
                    this.queue.slice(0, n).forEach(function (e, n) {
                        t.run(e)
                    })
                }, t
            }()
        }, function (t, e, n) {
            "use strict";

            function r(t, e) {
                return t = encodeURIComponent(t), "/" !== e.slice(e.length - 1) && (e += "/"), e + t
            }
            function o(t, e, n) {
                if (!/^\d$/.test(t.mode)) throw "mode should be number in imageView2";
                var o = t.mode,
                    i = t.w,
                    a = t.h,
                    s = t.q,
                    u = t.format;
                if (!i && !a) throw "param w and h is empty in imageView2";
                var c = "imageView2/" + encodeURIComponent(o);
                return c += i ? "/w/" + encodeURIComponent(i) : "", c += a ? "/h/" + encodeURIComponent(a) : "", c += s ?
                    "/q/" + encodeURIComponent(s) : "", c += u ? "/format/" + encodeURIComponent(u) : "", e && (c = r(e,
                    n) + "?" + c), c
            }
            function i(t, e, n) {
                var o = t["auto-orient"],
                    i = t.thumbnail,
                    a = t.strip,
                    s = t.gravity,
                    u = t.crop,
                    c = t.quality,
                    f = t.rotate,
                    l = t.format,
                    h = t.blur,
                    p = "imageMogr2";
                return p += o ? "/auto-orient" : "", p += i ? "/thumbnail/" + encodeURIComponent(i) : "", p += a ?
                    "/strip" : "", p += s ? "/gravity/" + encodeURIComponent(s) : "", p += c ? "/quality/" +
                    encodeURIComponent(c) : "", p += u ? "/crop/" + encodeURIComponent(u) : "", p += f ? "/rotate/" +
                    encodeURIComponent(f) : "", p += l ? "/format/" + encodeURIComponent(l) : "", p += h ? "/blur/" +
                    encodeURIComponent(h) : "", e && (p = r(e, n) + "?" + p), p
            }
            function a(t, e, n) {
                var o = t.mode;
                if (!o) throw "mode can't be empty in watermark";
                var i = "watermark/" + o;
                if (1 !== o && 2 !== o) throw "mode is wrong";
                if (1 === o) {
                    var a = t.image;
                    if (!a) throw "image can't be empty in watermark";
                    i += a ? "/image/" + (0, u.urlSafeBase64Encode)(a) : ""
                }
                if (2 === o) {
                    var s = t.text,
                        c = t.font,
                        f = t.fontsize,
                        l = t.fill;
                    if (!s) throw "text can't be empty in watermark";
                    i += s ? "/text/" + (0, u.urlSafeBase64Encode)(s) : "", i += c ? "/font/" + (0, u.urlSafeBase64Encode)(
                        c) : "", i += f ? "/fontsize/" + f : "", i += l ? "/fill/" + (0, u.urlSafeBase64Encode)(l) : ""
                }
                var h = t.dissolve,
                    p = t.gravity,
                    d = t.dx,
                    g = t.dy;
                return i += h ? "/dissolve/" + encodeURIComponent(h) : "", i += p ? "/gravity/" + encodeURIComponent(p) :
                    "", i += d ? "/dx/" + encodeURIComponent(d) : "", i += g ? "/dy/" + encodeURIComponent(g) : "", e &&
                    (i = r(e, n) + "?" + i), i
            }
            e.__esModule = !0, e.imageView2 = o, e.imageMogr2 = i, e.watermark = a, e.imageInfo = function (t, e) {
                var n = r(t, e) + "?imageInfo";
                return (0, s.request)(n, {
                    method: "GET"
                })
            }, e.exif = function (t, e) {
                var n = r(t, e) + "?exif";
                return (0, s.request)(n, {
                    method: "GET"
                })
            }, e.pipeline = function (t, e, n) {
                var s = void 0,
                    u = void 0,
                    c = "";
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    for (var f = 0, l = t.length; f < l; f++) {
                        if (!(s = t[f]).fop) throw "fop can't be empty in pipeline";
                        switch (s.fop) {
                        case "watermark":
                            c += a(s) + "|";
                            break;
                        case "imageView2":
                            c += o(s) + "|";
                            break;
                        case "imageMogr2":
                            c += i(s) + "|";
                            break;
                        default:
                            u = !0
                        }
                        if (u) throw "fop is wrong in pipeline"
                    }
                    if (e) {
                        var h = (c = r(e, n) + "?" + c).length;
                        "|" === c.slice(h - 1) && (c = c.slice(0, h - 1))
                    }
                    return c
                }
                throw "pipeline's first param should be array"
            };
            var s = n(12),
                u = n(56)
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0, e.Observable = void 0;
            var o = r(n(96)),
                i = r(n(17));
            e.Observable = function () {
                function t(e) {
                    (0, i.
                    default)(this, t), this.subscribeAction = e
                }
                return t.prototype.subscribe = function (t, e, n) {
                    var r = new a(t, e, n),
                        o = this.subscribeAction(r);
                    return new s(r, o)
                }, t
            }();
            var a = function () {
                function t(e, n, r) {
                    (0, i.
                    default)(this, t), this.isStopped = !1, "object" === (void 0 === e ? "undefined" : (0, o.
                    default)(e)) ? (this._onNext = e.next, this._onError = e.error, this._onCompleted = e.complete) : (
                        this._onNext = e, this._onError = n, this._onCompleted = r)
                }
                return t.prototype.next = function (t) {
                    !this.isStopped && this._onNext && this._onNext(t)
                }, t.prototype.error = function (t) {
                    !this.isStopped && this._onError && (this.isStopped = !0, this._onError(t))
                }, t.prototype.complete = function (t) {
                    !this.isStopped && this._onCompleted && (this.isStopped = !0, this._onCompleted(t))
                }, t
            }(),
                s = function () {
                    function t(e, n) {
                        (0, i.
                        default)(this, t), this.observer = e, this.result = n
                    }
                    return t.prototype.unsubscribe = function () {
                        this.observer.isStopped = !0, this.result()
                    }, t
                }()
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var o = r(n(97)),
                i = r(n(99)),
                a = "function" == typeof i.
            default && "symbol" == typeof o.
            default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof i.
                default && t.constructor === i.
                default && t !== i.
                default.prototype ? "symbol" : typeof t
            };
            e.
            default = "function" == typeof i.
            default && "symbol" === a(o.
            default) ? function (t) {
                return void 0 === t ? "undefined" : a(t)
            } : function (t) {
                return t && "function" == typeof i.
                default && t.constructor === i.
                default && t !== i.
                default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
            }
        }, function (t, e, n) {
            t.exports = {
                default: n(98),
                __esModule: !0
            }
        }, function (t, e, n) {
            n(41), n(50), t.exports = n(37).f("iterator")
        }, function (t, e, n) {
            t.exports = {
                default: n(100),
                __esModule: !0
            }
        }, function (t, e, n) {
            n(101), n(40), n(107), n(108), t.exports = n(1).Symbol
        }, function (t, e, n) {
            "use strict";
            var r = n(0),
                o = n(9),
                i = n(8),
                a = n(4),
                s = n(44),
                u = n(102).KEY,
                c = n(10),
                f = n(30),
                l = n(23),
                h = n(22),
                p = n(2),
                d = n(37),
                g = n(38),
                m = n(103),
                v = n(104),
                y = n(3),
                b = n(7),
                w = n(11),
                x = n(28),
                S = n(21),
                _ = n(45),
                P = n(105),
                C = n(106),
                F = n(6),
                I = n(15),
                U = C.f,
                k = F.f,
                E = P.f,
                M = r.Symbol,
                O = r.JSON,
                T = O && O.stringify,
                A = p("_hidden"),
                R = p("toPrimitive"),
                L = {}.propertyIsEnumerable,
                D = f("symbol-registry"),
                j = f("symbols"),
                B = f("op-symbols"),
                G = Object.prototype,
                q = "function" == typeof M,
                N = r.QObject,
                H = !N || !N.prototype || !N.prototype.findChild,
                z = i && c(function () {
                    return 7 != _(k({}, "a", {
                        get: function () {
                            return k(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function (t, e, n) {
                    var r = U(G, e);
                    r && delete G[e], k(t, e, n), r && t !== G && k(G, e, r)
                } : k,
                V = function (t) {
                    var e = j[t] = _(M.prototype);
                    return e._k = t, e
                }, W = q && "symbol" == typeof M.iterator ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    return t instanceof M
                }, J = function (t, e, n) {
                    return t === G && J(B, e, n), y(t), e = x(e, !0), y(n), o(j, e) ? (n.enumerable ? (o(t, A) && t[A][
                            e] && (t[A][e] = !1), n = _(n, {
                        enumerable: S(0, !1)
                    })) : (o(t, A) || k(t, A, S(1, {})), t[A][e] = !0), z(t, e, n)) : k(t, e, n)
                }, X = function (t, e) {
                    y(t);
                    for (var n, r = m(e = w(e)), o = 0, i = r.length; i > o;) J(t, n = r[o++], e[n]);
                    return t
                }, Y = function (t) {
                    var e = L.call(this, t = x(t, !0));
                    return !(this === G && o(j, t) && !o(B, t)) && (!(e || !o(this, t) || !o(j, t) || o(this, A) &&
                        this[A][t]) || e)
                }, K = function (t, e) {
                    if (t = w(t), e = x(e, !0), t !== G || !o(j, e) || o(B, e)) {
                        var n = U(t, e);
                        return !n || !o(j, e) || o(t, A) && t[A][e] || (n.enumerable = !0), n
                    }
                }, $ = function (t) {
                    for (var e, n = E(w(t)), r = [], i = 0; n.length > i;) o(j, e = n[i++]) || e == A || e == u || r.push(
                            e);
                    return r
                }, Q = function (t) {
                    for (var e, n = t === G, r = E(n ? B : w(t)), i = [], a = 0; r.length > a;)!o(j, e = r[a++]) || n && !
                        o(G, e) || i.push(j[e]);
                    return i
                };
            q || (s((M = function () {
                if (this instanceof M) throw TypeError("Symbol is not a constructor!");
                var t = h(arguments.length > 0 ? arguments[0] : void 0),
                    e = function (n) {
                        this === G && e.call(B, n), o(this, A) && o(this[A], t) && (this[A][t] = !1), z(this, t, S(1, n))
                    };
                return i && H && z(G, t, {
                    configurable: !0,
                    set: e
                }), V(t)
            }).prototype, "toString", function () {
                return this._k
            }), C.f = K, F.f = J, n(57).f = P.f = $, n(24).f = Y, n(35).f = Q, i && !n(13) && s(G,
                "propertyIsEnumerable", Y, !0), d.f = function (t) {
                return V(p(t))
            }), a(a.G + a.W + a.F * !q, {
                Symbol: M
            });
            for (var Z =
                "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables"
                .split(","), tt = 0; Z.length > tt;) p(Z[tt++]);
            for (var et = I(p.store), nt = 0; et.length > nt;) g(et[nt++]);
            a(a.S + a.F * !q, "Symbol", {
                for: function (t) {
                    return o(D, t += "") ? D[t] : D[t] = M(t)
                },
                keyFor: function (t) {
                    if (!W(t)) throw TypeError(t + " is not a symbol!");
                    for (var e in D) if (D[e] === t) return e
                },
                useSetter: function () {
                    H = !0
                },
                useSimple: function () {
                    H = !1
                }
            }), a(a.S + a.F * !q, "Object", {
                create: function (t, e) {
                    return void 0 === e ? _(t) : X(_(t), e)
                },
                defineProperty: J,
                defineProperties: X,
                getOwnPropertyDescriptor: K,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: Q
            }), O && a(a.S + a.F * (!q || c(function () {
                var t = M();
                return "[null]" != T([t]) || "{}" != T({
                    a: t
                }) || "{}" != T(Object(t))
            })), "JSON", {
                stringify: function (t) {
                    for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    if (n = e = r[1], (b(e) || void 0 !== t) && !W(t)) return v(e) || (e = function (t, e) {
                            if ("function" == typeof n && (e = n.call(this, t, e)), !W(e)) return e
                        }), r[1] = e, T.apply(O, r)
                }
            }), M.prototype[R] || n(5)(M.prototype, R, M.prototype.valueOf), l(M, "Symbol"), l(Math, "Math", !0), l(r.JSON,
                "JSON", !0)
        }, function (t, e, n) {
            var r = n(22)("meta"),
                o = n(7),
                i = n(9),
                a = n(6).f,
                s = 0,
                u = Object.isExtensible || function () {
                    return !0
                }, c = !n(10)(function () {
                    return u(Object.preventExtensions({}))
                }),
                f = function (t) {
                    a(t, r, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                }, l = t.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function (t, e) {
                        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!i(t, r)) {
                            if (!u(t)) return "F";
                            if (!e) return "E";
                            f(t)
                        }
                        return t[r].i
                    },
                    getWeak: function (t, e) {
                        if (!i(t, r)) {
                            if (!u(t)) return !0;
                            if (!e) return !1;
                            f(t)
                        }
                        return t[r].w
                    },
                    onFreeze: function (t) {
                        return c && l.NEED && u(t) && !i(t, r) && f(t), t
                    }
                }
        }, function (t, e, n) {
            var r = n(15),
                o = n(35),
                i = n(24);
            t.exports = function (t) {
                var e = r(t),
                    n = o.f;
                if (n) for (var a, s = n(t), u = i.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
                return e
            }
        }, function (t, e, n) {
            var r = n(16);
            t.exports = Array.isArray || function (t) {
                return "Array" == r(t)
            }
        }, function (t, e, n) {
            var r = n(11),
                o = n(57).f,
                i = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(
                    window) : [];
            t.exports.f = function (t) {
                return a && "[object Window]" == i.call(t) ? function (t) {
                    try {
                        return o(t)
                    } catch (t) {
                        return a.slice()
                    }
                }(t) : o(r(t))
            }
        }, function (t, e, n) {
            var r = n(24),
                o = n(21),
                i = n(11),
                a = n(28),
                s = n(9),
                u = n(43),
                c = Object.getOwnPropertyDescriptor;
            e.f = n(8) ? c : function (t, e) {
                if (t = i(t), e = a(e, !0), u) try {
                        return c(t, e)
                } catch (t) {}
                if (s(t, e)) return o(!r.f.call(t, e), t[e])
            }
        }, function (t, e, n) {
            n(38)("asyncIterator")
        }, function (t, e, n) {
            n(38)("observable")
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0, e.StatisticsLogger = void 0;
            var o = r(n(36)),
                i = r(n(17)),
                a = n(12);
            e.StatisticsLogger = function () {
                function t() {
                    (0, i.
                    default)(this, t)
                }
                return t.prototype.log = function (t, e) {
                    var n = "";
                    (0, o.
                    default)(t).forEach(function (e) {
                        return n += t[e] + ","
                    }), this.send(n, e)
                }, t.prototype.send = function (t, e) {
                    var n = (0, a.createXHR)(),
                        r = 0;
                    n.open("POST", "https://uplog.qbox.me/log/3"), n.setRequestHeader("Content-type",
                        "application/x-www-form-urlencoded"), n.setRequestHeader("Authorization", "UpToken " + e), n.onreadystatechange = function () {
                        4 === n.readyState && 200 !== n.status && ++r <= 3 && n.send(t)
                    }, n.send(t)
                }, t
            }()
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var o = r(n(18)),
                i = r(n(34)),
                a = r(n(17)),
                s = r(n(36)),
                u = n(111),
                c = n(12),
                f = {
                    PNG: "image/png",
                    JPEG: "image/jpeg",
                    WEBP: "image/webp",
                    BMP: "image/bmp"
                }, l = Math.log(2),
                h = (0, s.
                default)(f).map(function (t) {
                    return f[t]
                }),
                p = f.JPEG,
                d = function () {
                    function t(e, n) {
                        (0, a.
                        default)(this, t), this.config = (0, i.
                        default)({
                            quality: .92,
                            noCompressIfLarger: !1
                        }, n), this.file = e
                    }
                    return t.prototype.process = function () {
                        var t = this;
                        this.outputType = this.file.type;
                        var e = {};
                        return function (t) {
                            return h.includes(t)
                        }(this.file.type) ? this.getOriginImage().then(function (e) {
                            return t.getCanvas(e)
                        }).then(function (n) {
                            var r = 1;
                            return t.config.maxWidth && (r = Math.min(1, t.config.maxWidth / n.width)), t.config.maxHeight &&
                                (r = Math.min(1, r, t.config.maxHeight / n.height)), e.width = n.width, e.height = n.height,
                                t.doScale(n, r)
                        }).then(function (n) {
                            var r = t.toBlob(n);
                            return r.size > t.file.size && t.config.noCompressIfLarger ? {
                                dist: t.file,
                                width: e.width,
                                height: e.height
                            } : {
                                dist: r,
                                width: n.width,
                                height: n.height
                            }
                        }) : o.
                        default.reject(new Error("unsupported file type: " + this.file.type))
                    }, t.prototype.clear = function (t, e, n) {
                        this.outputType === p ? (t.fillStyle = "#fff", t.fillRect(0, 0, e, n)) : t.clearRect(0, 0, e, n)
                    }, t.prototype.getOriginImage = function () {
                        var t = this;
                        return new o.
                        default (function (e, n) {
                            var r = (0, c.createObjectURL)(t.file),
                                o = new Image;
                            o.onload = function () {
                                e(o)
                            }, o.onerror = function () {
                                n("image load error")
                            }, o.src = r
                        })
                    }, t.prototype.getCanvas = function (t) {
                        var e = this;
                        return new o.
                        default (function (n, r) {
                            u.EXIF.getData(t, function () {
                                var r = u.EXIF.getTag(t, "Orientation") || 1,
                                    o = (0, c.getTransform)(t, r),
                                    i = o.width,
                                    a = o.height,
                                    s = o.matrix,
                                    f = document.createElement("canvas"),
                                    l = f.getContext("2d");
                                f.width = i, f.height = a, e.clear(l, i, a), l.transform.apply(l, s), l.drawImage(t, 0,
                                    0), n(f)
                            })
                        })
                    }, t.prototype.doScale = function (t, e) {
                        if (1 === e) return o.
                        default.resolve(t);
                        var n = t.getContext("2d"),
                            r = Math.min(4, Math.ceil(1 / e / l)),
                            i = Math.pow(e, 1 / r),
                            a = document.createElement("canvas"),
                            s = a.getContext("2d"),
                            u = t.width,
                            c = t.height,
                            f = u,
                            h = c;
                        a.width = u, a.height = c;
                        for (var p = void 0, d = void 0, g = 0; g < r; g++) {
                            var m = u * i | 0,
                                v = c * i | 0;
                            g === r - 1 && (m = f * e, v = h * e), g % 2 == 0 ? (p = t, d = s) : (p = a, d = n), this.clear(
                                d, u, c), d.drawImage(p, 0, 0, u, c, 0, 0, m, v), u = m, c = v
                        }
                        var y = p === t ? a : t,
                            b = d.getImageData(0, 0, u, c);
                        return y.width = u, y.height = c, d.putImageData(b, 0, 0), o.
                        default.resolve(y)
                    }, t.prototype.toBlob = function (t) {
                        var e = t.toDataURL(this.outputType, this.config.quality),
                            n = atob(e.split(",")[1]).split("").map(function (t) {
                                return t.charCodeAt(0)
                            });
                        return new Blob([new Uint8Array(n)], {
                            type: this.outputType
                        })
                    }, t
                }();
            e.
            default = function (t, e) {
                return new d(t, e).process()
            }
        }, function (t, e, r) {
            var o;
            (function () {
                function r(t) {
                    return !!t.exifdata
                }
                function i(t, e) {
                    function n(n) {
                        var r = a(n);
                        t.exifdata = r || {};
                        var o = function (t) {
                            var e = new DataView(t);
                            if (d && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 !=
                                e.getUint8(1)) return d && console.log("Not a valid JPEG"), !1;
                            for (var n = 2, r = t.byteLength; n < r;) {
                                if (function (t, e) {
                                    return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) &&
                                        77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5)
                                }(e, n)) {
                                    var o = e.getUint8(n + 7);
                                    o % 2 != 0 && (o += 1), 0 === o && (o = 4);
                                    return s(t, n + 8 + o, e.getUint16(n + 6 + o))
                                }
                                n++
                            }
                        }(n);
                        if (t.iptcdata = o || {}, g.isXmpEnabled) {
                            var i = function (t) {
                                if ("DOMParser" in self) {
                                    var e = new DataView(t);
                                    if (d && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) ||
                                        216 != e.getUint8(1)) return d && console.log("Not a valid JPEG"), !1;
                                    for (var n = 2, r = t.byteLength, o = new DOMParser; n < r - 4;) {
                                        if ("http" == f(e, n, 4)) {
                                            var i = n - 1,
                                                a = e.getUint16(n - 2) - 1,
                                                s = f(e, i, a),
                                                u = s.indexOf("xmpmeta>") + 8,
                                                c = (s = s.substring(s.indexOf("<x:xmpmeta"), u)).indexOf("x:xmpmeta") +
                                                    10;
                                            s = s.slice(0, c) +
                                                'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                                                s.slice(c);
                                            return p(o.parseFromString(s, "text/xml"))
                                        }
                                        n++
                                    }
                                }
                            }(n);
                            t.xmpdata = i || {}
                        }
                        e && e.call(t)
                    }
                    if (t.src) if (/^data\:/i.test(t.src)) n(function (t, e) {
                                e = e || t.match(/^data\:([^\;]+)\;base64,/im)[1] || "", t = t.replace(
                                    /^data\:([^\;]+)\;base64,/gim, "");
                                for (var n = atob(t), r = n.length, o = new ArrayBuffer(r), i = new Uint8Array(o), a =
                                        0; a < r; a++) i[a] = n.charCodeAt(a);
                                return o
                            }(t.src));
                        else if (/^blob\:/i.test(t.src))(o = new FileReader).onload = function (t) {
                            n(t.target.result)
                    },
                    function (t, e) {
                        var n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "blob", n.onload = function (t) {
                            200 != this.status && 0 !== this.status || e(this.response)
                        }, n.send()
                    }(t.src, function (t) {
                        o.readAsArrayBuffer(t)
                    });
                    else {
                        var r = new XMLHttpRequest;
                        r.onload = function () {
                            if (200 != this.status && 0 !== this.status) throw "Could not load image";
                            n(r.response), r = null
                        }, r.open("GET", t.src, !0), r.responseType = "arraybuffer", r.send(null)
                    } else if (self.FileReader && (t instanceof self.Blob || t instanceof self.File)) {
                        var o;
                        (o = new FileReader).onload = function (t) {
                            d && console.log("Got file of length " + t.target.result.byteLength), n(t.target.result)
                        }, o.readAsArrayBuffer(t)
                    }
                }
                function a(t) {
                    var e = new DataView(t);
                    if (d && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(
                        1)) return d && console.log("Not a valid JPEG"), !1;
                    for (var n, r = 2, o = t.byteLength; r < o;) {
                        if (255 != e.getUint8(r)) return d && console.log("Not a valid marker at offset " + r +
                                ", found: " + e.getUint8(r)), !1;
                        if (n = e.getUint8(r + 1), d && console.log(n), 225 == n) return d && console.log(
                                "Found 0xFFE1 marker"), l(e, r + 4, e.getUint16(r + 2));
                        r += 2 + e.getUint16(r + 2)
                    }
                }
                function s(t, e, n) {
                    for (var r, o, i, a, s = new DataView(t), u = {}, c = e; c < e + n;) 28 === s.getUint8(c) && 2 ===
                            s.getUint8(c + 1) && (a = s.getUint8(c + 2)) in x && (i = s.getInt16(c + 3), o = x[a], r =
                            f(s, c + 5, i), u.hasOwnProperty(o) ? u[o] instanceof Array ? u[o].push(r) : u[o] = [u[o],
                                r] : u[o] = r), c++;
                    return u
                }
                function u(t, e, n, r, o) {
                    var i, a, s, u = t.getUint16(n, !o),
                        f = {};
                    for (s = 0; s < u; s++) i = n + 12 * s + 2, !(a = r[t.getUint16(i, !o)]) && d && console.log(
                            "Unknown tag: " + t.getUint16(i, !o)), f[a] = c(t, i, e, n, o);
                    return f
                }
                function c(t, e, n, r, o) {
                    var i, a, s, u, c, l, h = t.getUint16(e + 2, !o),
                        p = t.getUint32(e + 4, !o),
                        d = t.getUint32(e + 8, !o) + n;
                    switch (h) {
                    case 1:
                    case 7:
                        if (1 == p) return t.getUint8(e + 8, !o);
                        for (i = p > 4 ? d : e + 8, a = [], u = 0; u < p; u++) a[u] = t.getUint8(i + u);
                        return a;
                    case 2:
                        return f(t, i = p > 4 ? d : e + 8, p - 1);
                    case 3:
                        if (1 == p) return t.getUint16(e + 8, !o);
                        for (i = p > 2 ? d : e + 8, a = [], u = 0; u < p; u++) a[u] = t.getUint16(i + 2 * u, !o);
                        return a;
                    case 4:
                        if (1 == p) return t.getUint32(e + 8, !o);
                        for (a = [], u = 0; u < p; u++) a[u] = t.getUint32(d + 4 * u, !o);
                        return a;
                    case 5:
                        if (1 == p) return c = t.getUint32(d, !o), l = t.getUint32(d + 4, !o), (s = new Number(c / l)).numerator =
                                c, s.denominator = l, s;
                        for (a = [], u = 0; u < p; u++) c = t.getUint32(d + 8 * u, !o), l = t.getUint32(d + 4 + 8 * u, !
                                o), a[u] = new Number(c / l), a[u].numerator = c, a[u].denominator = l;
                        return a;
                    case 9:
                        if (1 == p) return t.getInt32(e + 8, !o);
                        for (a = [], u = 0; u < p; u++) a[u] = t.getInt32(d + 4 * u, !o);
                        return a;
                    case 10:
                        if (1 == p) return t.getInt32(d, !o) / t.getInt32(d + 4, !o);
                        for (a = [], u = 0; u < p; u++) a[u] = t.getInt32(d + 8 * u, !o) / t.getInt32(d + 4 + 8 * u, !o);
                        return a
                    }
                }
                function f(t, e, r) {
                    var o = "";
                    for (n = e; n < e + r; n++) o += String.fromCharCode(t.getUint8(n));
                    return o
                }
                function l(t, e) {
                    if ("Exif" != f(t, e, 4)) return d && console.log("Not valid EXIF data! " + f(t, e, 4)), !1;
                    var n, r, o, i, a, s = e + 6;
                    if (18761 == t.getUint16(s)) n = !1;
                    else {
                        if (19789 != t.getUint16(s)) return d && console.log(
                                "Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                        n = !0
                    } if (42 != t.getUint16(s + 2, !n)) return d && console.log("Not valid TIFF data! (no 0x002A)"), !1;
                    var c = t.getUint32(s + 4, !n);
                    if (c < 8) return d && console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(s +
                            4, !n)), !1;
                    if ((r = u(t, s, s + c, v, n)).ExifIFDPointer) for (o in i = u(t, s, s + r.ExifIFDPointer, m, n)) {
                            switch (o) {
                            case "LightSource":
                            case "Flash":
                            case "MeteringMode":
                            case "ExposureProgram":
                            case "SensingMethod":
                            case "SceneCaptureType":
                            case "SceneType":
                            case "CustomRendered":
                            case "WhiteBalance":
                            case "GainControl":
                            case "Contrast":
                            case "Saturation":
                            case "Sharpness":
                            case "SubjectDistanceRange":
                            case "FileSource":
                                i[o] = w[o][i[o]];
                                break;
                            case "ExifVersion":
                            case "FlashpixVersion":
                                i[o] = String.fromCharCode(i[o][0], i[o][1], i[o][2], i[o][3]);
                                break;
                            case "ComponentsConfiguration":
                                i[o] = w.Components[i[o][0]] + w.Components[i[o][1]] + w.Components[i[o][2]] + w.Components[
                                    i[o][3]]
                            }
                            r[o] = i[o]
                    }
                    if (r.GPSInfoIFDPointer) for (o in a = u(t, s, s + r.GPSInfoIFDPointer, y, n)) {
                            switch (o) {
                            case "GPSVersionID":
                                a[o] = a[o][0] + "." + a[o][1] + "." + a[o][2] + "." + a[o][3]
                            }
                            r[o] = a[o]
                    }
                    return r.thumbnail = function (t, e, n, r) {
                        var o = function (t, e, n) {
                            var r = t.getUint16(e, !n);
                            return t.getUint32(e + 2 + 12 * r, !n)
                        }(t, e + n, r);
                        if (!o) return {};
                        if (o > t.byteLength) return {};
                        var i = u(t, e, e + o, b, r);
                        if (i.Compression) switch (i.Compression) {
                            case 6:
                                if (i.JpegIFOffset && i.JpegIFByteCount) {
                                    var a = e + i.JpegIFOffset,
                                        s = i.JpegIFByteCount;
                                    i.blob = new Blob([new Uint8Array(t.buffer, a, s)], {
                                        type: "image/jpeg"
                                    })
                                }
                                break;
                            case 1:
                                console.log("Thumbnail image format is TIFF, which is not implemented.");
                                break;
                            default:
                                console.log("Unknown thumbnail image format '%s'", i.Compression)
                        } else 2 == i.PhotometricInterpretation && console.log(
                                "Thumbnail image format is RGB, which is not implemented.");
                        return i
                    }(t, s, c, n), r
                }
                function h(t) {
                    var e = {};
                    if (1 == t.nodeType) {
                        if (t.attributes.length > 0) {
                            e["@attributes"] = {};
                            for (var n = 0; n < t.attributes.length; n++) {
                                var r = t.attributes.item(n);
                                e["@attributes"][r.nodeName] = r.nodeValue
                            }
                        }
                    } else if (3 == t.nodeType) return t.nodeValue;
                    if (t.hasChildNodes()) for (var o = 0; o < t.childNodes.length; o++) {
                            var i = t.childNodes.item(o),
                                a = i.nodeName;
                            if (null == e[a]) e[a] = h(i);
                            else {
                                if (null == e[a].push) {
                                    var s = e[a];
                                    e[a] = [], e[a].push(s)
                                }
                                e[a].push(h(i))
                            }
                    }
                    return e
                }
                function p(t) {
                    try {
                        var e = {};
                        if (t.children.length > 0) for (var n = 0; n < t.children.length; n++) {
                                var r = t.children.item(n),
                                    o = r.attributes;
                                for (var i in o) {
                                    var a = o[i],
                                        s = a.nodeName,
                                        u = a.nodeValue;
                                    void 0 !== s && (e[s] = u)
                                }
                                var c = r.nodeName;
                                if (void 0 === e[c]) e[c] = h(r);
                                else {
                                    if (void 0 === e[c].push) {
                                        var f = e[c];
                                        e[c] = [], e[c].push(f)
                                    }
                                    e[c].push(h(r))
                                }
                        } else e = t.textContent;
                        return e
                    } catch (t) {
                        console.log(t.message)
                    }
                }
                var d = !1,
                    g = function (t) {
                        return t instanceof g ? t : this instanceof g ? void(this.EXIFwrapped = t) : new g(t)
                    };
                void 0 !== t && t.exports && (e = t.exports = g), e.EXIF = g;
                var m = g.Tags = {
                    36864: "ExifVersion",
                    40960: "FlashpixVersion",
                    40961: "ColorSpace",
                    40962: "PixelXDimension",
                    40963: "PixelYDimension",
                    37121: "ComponentsConfiguration",
                    37122: "CompressedBitsPerPixel",
                    37500: "MakerNote",
                    37510: "UserComment",
                    40964: "RelatedSoundFile",
                    36867: "DateTimeOriginal",
                    36868: "DateTimeDigitized",
                    37520: "SubsecTime",
                    37521: "SubsecTimeOriginal",
                    37522: "SubsecTimeDigitized",
                    33434: "ExposureTime",
                    33437: "FNumber",
                    34850: "ExposureProgram",
                    34852: "SpectralSensitivity",
                    34855: "ISOSpeedRatings",
                    34856: "OECF",
                    37377: "ShutterSpeedValue",
                    37378: "ApertureValue",
                    37379: "BrightnessValue",
                    37380: "ExposureBias",
                    37381: "MaxApertureValue",
                    37382: "SubjectDistance",
                    37383: "MeteringMode",
                    37384: "LightSource",
                    37385: "Flash",
                    37396: "SubjectArea",
                    37386: "FocalLength",
                    41483: "FlashEnergy",
                    41484: "SpatialFrequencyResponse",
                    41486: "FocalPlaneXResolution",
                    41487: "FocalPlaneYResolution",
                    41488: "FocalPlaneResolutionUnit",
                    41492: "SubjectLocation",
                    41493: "ExposureIndex",
                    41495: "SensingMethod",
                    41728: "FileSource",
                    41729: "SceneType",
                    41730: "CFAPattern",
                    41985: "CustomRendered",
                    41986: "ExposureMode",
                    41987: "WhiteBalance",
                    41988: "DigitalZoomRation",
                    41989: "FocalLengthIn35mmFilm",
                    41990: "SceneCaptureType",
                    41991: "GainControl",
                    41992: "Contrast",
                    41993: "Saturation",
                    41994: "Sharpness",
                    41995: "DeviceSettingDescription",
                    41996: "SubjectDistanceRange",
                    40965: "InteroperabilityIFDPointer",
                    42016: "ImageUniqueID"
                }, v = g.TiffTags = {
                        256: "ImageWidth",
                        257: "ImageHeight",
                        34665: "ExifIFDPointer",
                        34853: "GPSInfoIFDPointer",
                        40965: "InteroperabilityIFDPointer",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        274: "Orientation",
                        277: "SamplesPerPixel",
                        284: "PlanarConfiguration",
                        530: "YCbCrSubSampling",
                        531: "YCbCrPositioning",
                        282: "XResolution",
                        283: "YResolution",
                        296: "ResolutionUnit",
                        273: "StripOffsets",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        513: "JPEGInterchangeFormat",
                        514: "JPEGInterchangeFormatLength",
                        301: "TransferFunction",
                        318: "WhitePoint",
                        319: "PrimaryChromaticities",
                        529: "YCbCrCoefficients",
                        532: "ReferenceBlackWhite",
                        306: "DateTime",
                        270: "ImageDescription",
                        271: "Make",
                        272: "Model",
                        305: "Software",
                        315: "Artist",
                        33432: "Copyright"
                    }, y = g.GPSTags = {
                        0: "GPSVersionID",
                        1: "GPSLatitudeRef",
                        2: "GPSLatitude",
                        3: "GPSLongitudeRef",
                        4: "GPSLongitude",
                        5: "GPSAltitudeRef",
                        6: "GPSAltitude",
                        7: "GPSTimeStamp",
                        8: "GPSSatellites",
                        9: "GPSStatus",
                        10: "GPSMeasureMode",
                        11: "GPSDOP",
                        12: "GPSSpeedRef",
                        13: "GPSSpeed",
                        14: "GPSTrackRef",
                        15: "GPSTrack",
                        16: "GPSImgDirectionRef",
                        17: "GPSImgDirection",
                        18: "GPSMapDatum",
                        19: "GPSDestLatitudeRef",
                        20: "GPSDestLatitude",
                        21: "GPSDestLongitudeRef",
                        22: "GPSDestLongitude",
                        23: "GPSDestBearingRef",
                        24: "GPSDestBearing",
                        25: "GPSDestDistanceRef",
                        26: "GPSDestDistance",
                        27: "GPSProcessingMethod",
                        28: "GPSAreaInformation",
                        29: "GPSDateStamp",
                        30: "GPSDifferential"
                    }, b = g.IFD1Tags = {
                        256: "ImageWidth",
                        257: "ImageHeight",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        273: "StripOffsets",
                        274: "Orientation",
                        277: "SamplesPerPixel",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        282: "XResolution",
                        283: "YResolution",
                        284: "PlanarConfiguration",
                        296: "ResolutionUnit",
                        513: "JpegIFOffset",
                        514: "JpegIFByteCount",
                        529: "YCbCrCoefficients",
                        530: "YCbCrSubSampling",
                        531: "YCbCrPositioning",
                        532: "ReferenceBlackWhite"
                    }, w = g.StringValues = {
                        ExposureProgram: {
                            0: "Not defined",
                            1: "Manual",
                            2: "Normal program",
                            3: "Aperture priority",
                            4: "Shutter priority",
                            5: "Creative program",
                            6: "Action program",
                            7: "Portrait mode",
                            8: "Landscape mode"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            0: "Unknown",
                            1: "Daylight",
                            2: "Fluorescent",
                            3: "Tungsten (incandescent light)",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 - 5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire",
                            1: "Flash fired",
                            5: "Strobe return light not detected",
                            7: "Strobe return light detected",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        SensingMethod: {
                            1: "Not defined",
                            2: "One-chip color area sensor",
                            3: "Two-chip color area sensor",
                            4: "Three-chip color area sensor",
                            5: "Color sequential area sensor",
                            7: "Trilinear sensor",
                            8: "Color sequential linear sensor"
                        },
                        SceneCaptureType: {
                            0: "Standard",
                            1: "Landscape",
                            2: "Portrait",
                            3: "Night scene"
                        },
                        SceneType: {
                            1: "Directly photographed"
                        },
                        CustomRendered: {
                            0: "Normal process",
                            1: "Custom process"
                        },
                        WhiteBalance: {
                            0: "Auto white balance",
                            1: "Manual white balance"
                        },
                        GainControl: {
                            0: "None",
                            1: "Low gain up",
                            2: "High gain up",
                            3: "Low gain down",
                            4: "High gain down"
                        },
                        Contrast: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        Saturation: {
                            0: "Normal",
                            1: "Low saturation",
                            2: "High saturation"
                        },
                        Sharpness: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        SubjectDistanceRange: {
                            0: "Unknown",
                            1: "Macro",
                            2: "Close view",
                            3: "Distant view"
                        },
                        FileSource: {
                            3: "DSC"
                        },
                        Components: {
                            0: "",
                            1: "Y",
                            2: "Cb",
                            3: "Cr",
                            4: "R",
                            5: "G",
                            6: "B"
                        }
                    }, x = {
                        120: "caption",
                        110: "credit",
                        25: "keywords",
                        55: "dateCreated",
                        80: "byline",
                        85: "bylineTitle",
                        122: "captionWriter",
                        105: "headline",
                        116: "copyright",
                        15: "category"
                    };
                g.enableXmp = function () {
                    g.isXmpEnabled = !0
                }, g.disableXmp = function () {
                    g.isXmpEnabled = !1
                }, g.getData = function (t, e) {
                    return !((self.Image && t instanceof self.Image || self.HTMLImageElement && t instanceof self.HTMLImageElement) && !
                        t.complete || (r(t) ? e && e.call(t) : i(t, e), 0))
                }, g.getTag = function (t, e) {
                    if (r(t)) return t.exifdata[e]
                }, g.getIptcTag = function (t, e) {
                    if (r(t)) return t.iptcdata[e]
                }, g.getAllTags = function (t) {
                    if (!r(t)) return {};
                    var e, n = t.exifdata,
                        o = {};
                    for (e in n) n.hasOwnProperty(e) && (o[e] = n[e]);
                    return o
                }, g.getAllIptcTags = function (t) {
                    if (!r(t)) return {};
                    var e, n = t.iptcdata,
                        o = {};
                    for (e in n) n.hasOwnProperty(e) && (o[e] = n[e]);
                    return o
                }, g.pretty = function (t) {
                    if (!r(t)) return "";
                    var e, n = t.exifdata,
                        o = "";
                    for (e in n) n.hasOwnProperty(e) && ("object" == typeof n[e] ? n[e] instanceof Number ? o += e +
                            " : " + n[e] + " [" + n[e].numerator + "/" + n[e].denominator + "]\r\n" : o += e + " : [" +
                            n[e].length + " values]\r\n" : o += e + " : " + n[e] + "\r\n");
                    return o
                }, g.readFromBinaryFile = function (t) {
                    return a(t)
                }, void 0 === (o = function () {
                    return g
                }.apply(e, [])) || (t.exports = o)
            }).call(this)
        }])
});
//# sourceMappingURL=qiniu.min.js.map