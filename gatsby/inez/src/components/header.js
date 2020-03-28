import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import logo from '../images/logo.png'

const Header = ({ siteTitle }) => (
  <div className="navigation">
    <nav >
        <div className="left" >
              <img src="/images/logo.png" alt="Whatsleft - logo" />
              <p>{siteTitle}</p>
        </div>
        <div className="right">
          <p><a href="https://whatsleft.wirvsvirus.net">Web App</a> | <a href="https://testflight.apple.com/join/695UDaNq">iOS app</a> | <a href="/">Android App</a></p>
        </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
