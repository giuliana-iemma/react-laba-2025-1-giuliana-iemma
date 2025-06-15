(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [153, 554],
  {
    80: (a, t, s) => {
      Promise.resolve().then(s.bind(s, 9553));
    },
    9553: (a, t, s) => {
      'use strict';
      s.d(t, { default: () => i });
      var e = s(5155),
        n = s(2115);
      let l = (a) => {
          let { onClick: t } = a;
          return (0, e.jsx)('button', {
            className: 'button-add',
            onClick: t,
            children: (0, e.jsx)('img', {
              className: 'button-add__icon',
              src: '/icons/add.svg',
              alt: 'Add',
            }),
          });
        },
        r = (a) => {
          let { avatarUrl: t, onRefresh: s } = a;
          return (0, e.jsxs)('article', {
            className: 'card',
            children: [
              (0, e.jsx)('img', { className: 'card__image', src: t, alt: 'Avatar' }),
              (0, e.jsx)('button', {
                className: 'card__button',
                onClick: s,
                children: (0, e.jsx)('img', {
                  className: 'card__button-icon',
                  src: './src/assets/icons/refresh.svg',
                  alt: 'Refresh',
                }),
              }),
            ],
          });
        },
        c = (a) => {
          let { onClick: t } = a;
          return (0, e.jsx)('button', {
            className: 'button-refresh',
            onClick: t,
            children: 'Refresh All',
          });
        },
        i = (a) => {
          let { initialTiles: t = [] } = a,
            [s, i] = (0, n.useState)(t);
          async function o() {
            let a = await fetch('https://tinyfac.es/api/data?limit=50&quality=0');
            console.log(a);
            let t = await a.json(),
              s = Math.floor(Math.random() * t.length);
            return t[s].url;
          }
          async function d() {
            let a = await o();
            i((t) => [...t, { id: Date.now(), url: a }]);
          }
          async function u(a) {
            let t = await o();
            i((s) => s.map((s) => (s.id === a ? { ...s, url: t } : s)));
          }
          async function m() {
            let a = await Promise.all(s.map(() => o()));
            i((t) => t.map((t, s) => ({ ...t, url: a[s] })));
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)('div', {
                className: 'card__container',
                children: [
                  s &&
                    s.map((a) =>
                      (0, e.jsx)(r, { avatarUrl: a.url, onRefresh: () => u(a.id) }, a.id)
                    ),
                  (0, e.jsx)(l, { onClick: () => d() }),
                ],
              }),
              (0, e.jsx)(c, { onClick: () => m() }),
            ],
          });
        };
    },
  },
  (a) => {
    var t = (t) => a((a.s = t));
    a.O(0, [441, 684, 358], () => t(80)), (_N_E = a.O());
  },
]);
