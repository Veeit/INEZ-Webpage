const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/src/pages/contact.js"))),
  "component---src-pages-countdown-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/src/pages/countdown.js"))),
  "component---src-pages-datasecruity-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/src/pages/datasecruity.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/veitprogl/Documents/Git/INEZ-Webpage/src/pages/index.js")))
}

