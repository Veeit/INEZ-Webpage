const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/inez-webpage/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/inez-webpage/src/pages/contact.js"))),
  "component---src-pages-datasecruity-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/inez-webpage/src/pages/datasecruity.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/inez-webpage/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/inez-webpage/src/pages/index.js")))
}

