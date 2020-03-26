import React from 'react';
import PropTypes from 'prop-types';

const SideSection = ({ children }) => <aside className="sidebar">{children}</aside>;

SideSection.propTypes = {
  children: PropTypes.node,
};
export default SideSection;
