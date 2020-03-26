import React from 'react';
import styled from 'styled-components';
import { getMeasurement } from './utils';
import PropTypes from 'prop-types';

const MainWrapper = ({ children, gridOptions }) => {
  const {
    maxWidth,
    tabletWidth,
    mobileWidth,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    columnNumber,
    gapRow,
    gapCol,
    unitOfMeasurement = 'em',
  } = gridOptions;

  return (
    <MainWrapperDiv
      maxWidth={getMeasurement(maxWidth, unitOfMeasurement)}
      tabletWidth={getMeasurement(tabletWidth, unitOfMeasurement)}
      mobileWidth={getMeasurement(mobileWidth, unitOfMeasurement)}
      marginTop={getMeasurement(marginTop, unitOfMeasurement)}
      marginBottom={getMeasurement(marginBottom, unitOfMeasurement)}
      marginLeft={getMeasurement(marginLeft, unitOfMeasurement)}
      marginRight={getMeasurement(marginRight, unitOfMeasurement)}
      columnNumber={columnNumber}
      gapRow={getMeasurement(gapRow, unitOfMeasurement)}
      gapCol={getMeasurement(gapCol, unitOfMeasurement)}
    >
      {children}
    </MainWrapperDiv>
  );
};

const MainWrapperDiv = styled.div`
  width: ${(props) => props.maxWidth || `100%`};
  margin-top: ${(props) => props.marginTop || 0};
  margin-right: ${(props) => props.marginRight || `auto`};
  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-left: ${(props) => props.marginLeft || `auto`};
  display: grid;
  grid-column-gap: ${(props) => props.gapCol || `3em`};
  grid-row-gap: ${(props) => props.gapRow || `2em`};
  grid-template-columns: minmax(45em, 1fr);
  grid-auto-rows: auto;

  @media (max-width: 1020px) {
    max-width: 94em;
  }
  @media (max-width: 768px) {
    max-width: ${(props) => props.tabletWidth || `69.4em`} !important;
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    width: ${(props) => props.mobileWidth || `40em`};
    max-width: calc(1em) !important;
    grid-template-columns: 1fr;
    margin: 0 3em;
  }
  justify-items: stretch;
`;

MainWrapper.propTypes = {
  children: PropTypes.node,
  gridOptions: PropTypes.array,
};

export default MainWrapper;
