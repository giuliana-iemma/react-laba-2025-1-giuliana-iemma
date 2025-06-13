(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    2664: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(9991),
        o = r(7102);
      function u(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    2757: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return u;
          },
          formatWithValidation: function () {
            return i;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let n = r(6966)._(r(8859)),
        o = /https?|ftp|gopher|file/;
      function u(e) {
        let { auth: t, hostname: r } = e,
          u = e.protocol || '',
          a = e.pathname || '',
          i = e.hash || '',
          l = e.query || '',
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
          e.host
            ? (s = t + e.host)
            : r && ((s = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (s += ':' + e.port)),
          l && 'object' == typeof l && (l = String(n.urlQueryToSearchParams(l)));
        let c = e.search || (l && '?' + l) || '';
        return (
          u && !u.endsWith(':') && (u += ':'),
          e.slashes || ((!u || o.test(u)) && !1 !== s)
            ? ((s = '//' + (s || '')), a && '/' !== a[0] && (a = '/' + a))
            : s || (s = ''),
          i && '#' !== i[0] && (i = '#' + i),
          c && '?' !== c[0] && (c = '?' + c),
          '' +
            u +
            s +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace('#', '%23')) +
            i
        );
      }
      let a = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function i(e) {
        return u(e);
      }
    },
    3180: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'errorOnce', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e) => {};
    },
    3529: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 6874, 23)), Promise.resolve().then(r.bind(r, 9553));
    },
    6654: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useMergedRef', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(2115);
      function o(e, t) {
        let r = (0, n.useRef)(null),
          o = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = o.current;
              t && ((o.current = null), t());
            } else e && (r.current = u(e, n)), t && (o.current = u(t, n));
          },
          [e, t]
        );
      }
      function u(e, t) {
        if ('function' != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return 'function' == typeof r ? r : () => e(null);
        }
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6874: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return y;
          },
          useLinkStatus: function () {
            return b;
          },
        });
      let n = r(6966),
        o = r(5155),
        u = n._(r(2115)),
        a = r(2757),
        i = r(5227),
        l = r(9818),
        s = r(6654),
        c = r(9991),
        f = r(5929);
      r(3230);
      let d = r(4930),
        p = r(2664),
        h = r(6634);
      function m(e) {
        return 'string' == typeof e ? e : (0, a.formatUrl)(e);
      }
      function y(e) {
        let t,
          r,
          n,
          [a, y] = (0, u.useOptimistic)(d.IDLE_LINK_STATUS),
          b = (0, u.useRef)(null),
          {
            href: _,
            as: v,
            children: j,
            prefetch: P = null,
            passHref: O,
            replace: E,
            shallow: N,
            scroll: x,
            onClick: C,
            onMouseEnter: T,
            onTouchStart: A,
            legacyBehavior: S = !1,
            onNavigate: k,
            ref: w,
            unstable_dynamicOnHover: M,
            ...L
          } = e;
        (t = j),
          S &&
            ('string' == typeof t || 'number' == typeof t) &&
            (t = (0, o.jsx)('a', { children: t }));
        let R = u.default.useContext(i.AppRouterContext),
          U = !1 !== P,
          I = null === P ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
          { href: D, as: F } = u.default.useMemo(() => {
            let e = m(_);
            return { href: e, as: v ? m(v) : e };
          }, [_, v]);
        S && (r = u.default.Children.only(t));
        let K = S ? r && 'object' == typeof r && r.ref : w,
          B = u.default.useCallback(
            (e) => (
              null !== R && (b.current = (0, d.mountLinkInstance)(e, D, R, I, U, y)),
              () => {
                b.current &&
                  ((0, d.unmountLinkForCurrentNavigation)(b.current), (b.current = null)),
                  (0, d.unmountPrefetchableInstance)(e);
              }
            ),
            [U, D, R, I, y]
          ),
          z = {
            ref: (0, s.useMergedRef)(B, K),
            onClick(e) {
              S || 'function' != typeof C || C(e),
                S && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                R &&
                  (e.defaultPrevented ||
                    (function (e, t, r, n, o, a, i) {
                      let { nodeName: l } = e.currentTarget;
                      if (
                        !(
                          ('A' === l.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute('target');
                              return (
                                (t && '_self' !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute('download')
                        )
                      ) {
                        if (!(0, p.isLocalURL)(t)) {
                          o && (e.preventDefault(), location.replace(t));
                          return;
                        }
                        e.preventDefault(),
                          u.default.startTransition(() => {
                            if (i) {
                              let e = !1;
                              if (
                                (i({
                                  preventDefault: () => {
                                    e = !0;
                                  },
                                }),
                                e)
                              )
                                return;
                            }
                            (0, h.dispatchNavigateAction)(
                              r || t,
                              o ? 'replace' : 'push',
                              null == a || a,
                              n.current
                            );
                          });
                      }
                    })(e, D, F, b, E, x, k));
            },
            onMouseEnter(e) {
              S || 'function' != typeof T || T(e),
                S &&
                  r.props &&
                  'function' == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                R && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === M);
            },
            onTouchStart: function (e) {
              S || 'function' != typeof A || A(e),
                S &&
                  r.props &&
                  'function' == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                R && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === M);
            },
          };
        return (
          (0, c.isAbsoluteUrl)(F)
            ? (z.href = F)
            : (S && !O && ('a' !== r.type || 'href' in r.props)) ||
              (z.href = (0, f.addBasePath)(F)),
          (n = S ? u.default.cloneElement(r, z) : (0, o.jsx)('a', { ...L, ...z, children: t })),
          (0, o.jsx)(g.Provider, { value: a, children: n })
        );
      }
      r(3180);
      let g = (0, u.createContext)(d.IDLE_LINK_STATUS),
        b = () => (0, u.useContext)(g);
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8859: (e, t) => {
      'use strict';
      function r(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
          let e = t[r];
          void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
        }
        return t;
      }
      function n(e) {
        return 'string' == typeof e
          ? e
          : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
            ? ''
            : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        for (let [r, o] of Object.entries(e))
          if (Array.isArray(o)) for (let e of o) t.append(r, n(e));
          else t.set(r, n(o));
        return t;
      }
      function u(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          r[n - 1] = arguments[n];
        for (let t of r) {
          for (let r of t.keys()) e.delete(r);
          for (let [r, n] of t.entries()) e.append(r, n);
        }
        return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return u;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    9553: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => l });
      var n = r(5155),
        o = r(2115);
      let u = (e) => {
          let { onClick: t } = e;
          return (0, n.jsx)('button', {
            className: 'button-add',
            onClick: t,
            children: (0, n.jsx)('img', {
              className: 'button-add__icon',
              src: '/icons/add.svg',
              alt: 'Add',
            }),
          });
        },
        a = (e) => {
          let { avatarUrl: t, onRefresh: r } = e;
          return (0, n.jsxs)('article', {
            className: 'card',
            children: [
              (0, n.jsx)('img', { className: 'card__image', src: t, alt: 'Avatar' }),
              (0, n.jsx)('button', {
                className: 'card__button',
                onClick: r,
                children: (0, n.jsx)('img', {
                  className: 'card__button-icon',
                  src: './src/assets/icons/refresh.svg',
                  alt: 'Refresh',
                }),
              }),
            ],
          });
        },
        i = (e) => {
          let { onClick: t } = e;
          return (0, n.jsx)('button', {
            className: 'button-refresh',
            onClick: t,
            children: 'Refresh All',
          });
        },
        l = (e) => {
          let { initialTiles: t = [] } = e,
            [r, l] = (0, o.useState)(t);
          async function s() {
            let e = await fetch('https://tinyfac.es/api/data?limit=50&quality=0');
            console.log(e);
            let t = await e.json(),
              r = Math.floor(Math.random() * t.length);
            return t[r].url;
          }
          async function c() {
            let e = await s();
            l((t) => [...t, { id: Date.now(), url: e }]);
          }
          async function f(e) {
            let t = await s();
            l((r) => r.map((r) => (r.id === e ? { ...r, url: t } : r)));
          }
          async function d() {
            let e = await Promise.all(r.map(() => s()));
            l((t) => t.map((t, r) => ({ ...t, url: e[r] })));
          }
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)('div', {
                className: 'card__container',
                children: [
                  r &&
                    r.map((e) =>
                      (0, n.jsx)(a, { avatarUrl: e.url, onRefresh: () => f(e.id) }, e.id)
                    ),
                  (0, n.jsx)(u, { onClick: () => c() }),
                ],
              }),
              (0, n.jsx)(i, { onClick: () => d() }),
            ],
          });
        };
    },
    9991: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return y;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return i;
          },
          isAbsoluteUrl: function () {
            return u;
          },
          isResSent: function () {
            return s;
          },
          loadGetInitialProps: function () {
            return f;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return _;
          },
        });
      let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), u = 0; u < n; u++) o[u] = arguments[u];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = (e) => o.test(e);
      function a() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + '//' + t + (r ? ':' + r : '');
      }
      function i() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split('?');
        return (
          t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '')
        );
      }
      async function f(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component ? { pageProps: await f(t.Component, t.ctx) } : {};
        let n = await e.getInitialProps(t);
        if (r && s(r)) return n;
        if (!n)
          throw Object.defineProperty(
            Error(
              '"' +
                l(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                n +
                '" instead.'
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E394', enumerable: !1, configurable: !0 }
          );
        return n;
      }
      let d = 'undefined' != typeof performance,
        p =
          d &&
          ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
      class h extends Error {}
      class m extends Error {}
      class y extends Error {
        constructor(e) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + e);
        }
      }
      class g extends Error {
        constructor(e, t) {
          super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t);
        }
      }
      class b extends Error {
        constructor() {
          super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module');
        }
      }
      function _(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 684, 358], () => t(3529)), (_N_E = e.O());
  },
]);
