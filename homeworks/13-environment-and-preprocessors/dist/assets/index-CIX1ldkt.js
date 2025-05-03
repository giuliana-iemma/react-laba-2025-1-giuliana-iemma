(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === 'childList')
        for (const s of o.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && c(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = n(e);
    fetch(e.href, o);
  }
})();
const i = document.querySelectorAll('.project');
console.log(i);
const l = new IntersectionObserver(
  (r) => {
    r.forEach((t) => {
      console.log(t),
        t.isIntersecting
          ? (console.log('obseving'), t.target.classList.add('animate'), l.unobserve(t.target))
          : t.target.classList.remove('animate');
    });
  },
  { root: null, threshold: 0.5 }
);
i.forEach((r) => {
  l.observe(r);
});
let d = document.getElementById('theme-toggle');
d.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode'),
    document.getElementById('container').classList.toggle('dark-mode');
  const t = document.querySelector('#theme-toggle .theme-toggle__image--hidden'),
    n = document.querySelector('#theme-toggle .theme-toggle__image');
  n &&
    t &&
    (t.classList.toggle('theme-toggle__image--hidden'),
    n.classList.toggle('theme-toggle__image--hidden'));
});
//# sourceMappingURL=index-CIX1ldkt.js.map
