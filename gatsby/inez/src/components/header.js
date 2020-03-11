import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="navigation">
    <nav >
        <div className="left" >
        <Link to={`/`}><p>{siteTitle}</p></ Link>
        </div>
        <div className="right">
          <p><a href="https://medium.com/@VeitProgl">Medium</a> | <a href="https://twitter.com/VoxelVoxels">Twitter</a> | <a href="https://github.com/veeit">GitHub</a> | <a href="https://getmakerlog.com/@veitpro">makerlog</a></p>
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
