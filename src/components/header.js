import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-800 h-1/6 flex-shrink-0">
    <div className="width-full grid grid-cols-4">
      <h1 className="text-white font-mono text-3xl col-start-2 align-middle mt-12">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
