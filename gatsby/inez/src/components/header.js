import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.png'

const Header = ({ siteTitle }) => (
  <div className="navigation">
    <nav >
        <div className="left" >
              <img src={logo} alt="INEZ - Budget Planner logo" />
              <p>{siteTitle}</p>
        </div>
        <div className="right">
          <p><a href="https://github.com/users/Veeit/projects/1">bug-tracker</a> | <a href="https://getmakerlog.com/@veitpro">makerlog</a></p>
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
