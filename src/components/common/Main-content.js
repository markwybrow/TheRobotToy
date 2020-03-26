import React from 'react';
import { FaSearch, FaTachometerAlt } from 'react-icons/fa';
import { FormCommandStringWrapper, FormGridWrapper, FormRobotControlPanel } from '../form';
import { MainWrapper, RowContainerWrapper, gridOptionsMainWrapper, gridOptions } from './containers';

const MainContent = (props) => {
  return (
    <MainWrapper gridOptions={gridOptionsMainWrapper} className="wrapper content" style={{ border: '2px solid red' }}>
      <RowContainerWrapper gridColSizeItems={[[1, 1], [1, 1], [1]]} gridOptions={gridOptions}>
        <nav className="panel is-info">
          <p className="panel-heading">
            <span className="panel-icon">
              <FaTachometerAlt size="1.5em" className="icon--white" />
            </span>
            Set game board dimensions
          </p>
          <FormGridWrapper {...props} />
        </nav>

        <nav className="panel panel-info">
          <p className="panel-heading">
            <span className="panel-icon">
              <FaTachometerAlt size="1.8em" />
            </span>{' '}
            Manual Control commands
          </p>
          <FormRobotControlPanel {...props} />
        </nav>

        <nav className="panel">
          <p className="panel-heading">
            <span className="panel-icon">
              <FaSearch size="1.5em" />
            </span>
            Create string of commands
          </p>
          <FormCommandStringWrapper placeholder="W.I.P. => Under Construction" {...props} />
        </nav>
      </RowContainerWrapper>
    </MainWrapper>
  );
};

export default MainContent;
