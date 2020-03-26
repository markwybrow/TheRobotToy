import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => <header className="masthead App-header">{children}</header>;

Header.propTypes = {
  children: PropTypes.node,
};
export default Header;
