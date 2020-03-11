// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-datasecruity-js": () => import("../src/pages/datasecruity.js" /* webpackChunkName: "component---src-pages-datasecruity-js" */),
  "component---src-pages-imprint-js": () => import("../src/pages/imprint.js" /* webpackChunkName: "component---src-pages-imprint-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

