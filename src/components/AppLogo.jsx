import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const AppLogo = ({ src, href, className }) => {
  return (
    <Link to={`${href}`} className="px-2">
        <img 
            src={src}
            alt="app logo"
            className={className}
        />
    </Link>
  )
}

AppLogo.propTypes = {
    src: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default AppLogo