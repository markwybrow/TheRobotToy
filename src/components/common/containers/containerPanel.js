import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerPanel = (props) => {
  const { title, children } = props;
  return (
    <Panel className="container">
      <PanelContent>
        {title && <h2>{title}</h2>}
        {children}
      </PanelContent>
    </Panel>
  );
};
const Panel = styled.div`
  min-width: calc(var(--smallest-panel-size)-30px);
`;
const PanelContent = styled.div`
  margin: 1.6em 1.4em;
`;

ContainerPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ContainerPanel;
