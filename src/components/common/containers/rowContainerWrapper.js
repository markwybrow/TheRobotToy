import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getMeasurement } from './utils';
import PropTypes from 'prop-types';

const RowContainerWrapper = (props) => {
  const { children, gridColSizeItems, gridOptions } = props;
  const {
    columnNumber,
    maxWidth,
    mobileWidth,
    tabletWidth,
    gapRow,
    gapCol,
    rowHeight,
    unitOfMeasurement = 'em',
  } = gridOptions;

  console.log('gridOptions ', gridOptions);

  const columnBuilder = useCallback((device) => device.map((device) => device + `fr `));

  let desktop = 1;
  let tablet = 1;
  let mobile = 1;

  if (!Array.isArray(gridColSizeItems[0])) {
    desktop = gridColSizeItems;
    tablet = gridColSizeItems;
    mobile = gridColSizeItems;
  } else {
    [desktop, tablet, mobile] = gridColSizeItems;
  }
  const [desktopGridCols] = useState(columnBuilder(desktop));
  const [tabletGridCols] = useState(columnBuilder(tablet));
  const [mobileGridCols] = useState(columnBuilder(mobile));
  const [gridLoaded, setGridLoaded] = useState(false);
  /* eslint-disable */

  const reducer = (accumulator, currentValue) => {
    const result = [`${accumulator}fr ${currentValue}fr`];
    return result;
  };
  /* eslint-enable */
  useEffect(() => {
    setGridLoaded(true);
  }, []);
  console.log('mobileWidth ', getMeasurement(mobileWidth, unitOfMeasurement));
  return (
    <GridRowCols
      styles={gridOptions}
      gridLoaded={gridLoaded}
      gridColDesktopFrSize={desktopGridCols}
      gridColTabletFrSize={tabletGridCols}
      gridColMobileFrSize={mobileGridCols}
      maxWidth={getMeasurement(maxWidth, unitOfMeasurement)}
      tabletWidth={getMeasurement(tabletWidth, unitOfMeasurement)}
      mobileWidth={getMeasurement(mobileWidth, unitOfMeasurement)}
      columnNumber={columnNumber}
      maxHeight={getMeasurement(rowHeight, unitOfMeasurement)}
      gapRow={getMeasurement(gapRow, unitOfMeasurement)}
      gapCol={getMeasurement(gapCol, unitOfMeasurement)}
    >
      {children}
    </GridRowCols>
  );
};

const GridRowCols = styled.div`
  display: ${(props) => (props.gridLoaded ? `grid` : `none`)};
  grid-template-columns: ${(props) => props.gridColDesktopFrSize || `1fr`};
  grid-column-gap: ${(props) => props.gapCol || `3em`};
  grid-row-gap: ${(props) => props.gapRow || `2em`};
  max-width: ${(props) => props.maxWidth || `100%`};
  height: ${(props) => props.maxHeight || `100%`};
  width: ${(props) => props.maxWidth || `100%`};
  justify-items: stretch;

  /* overwrite for small desktop/ipad-pro size */
  @media (max-width: 1024px) {
    max-width: 94em;
  }

  /* overwrite for tablet size */
  @media (max-width: 768px) {
    width: ${(props) => props.tabletWidth || `69.4em`};
    grid-template-columns: ${(props) => props.gridColTabletFrSize || `1fr`};
    grid-column-gap: 1.6em;
    grid-row-gap: 2em;
  }
  /* overwrite for mobile size */
  @media (max-width: 420px) {
    width: ${(props) => props.mobileWidth || `34em`};
    max-width: calc(100%-10px) !important;
    grid-template-columns: ${(props) => props.gridColMobileFrSize || `1fr`};
    grid-column-gap: 1.6em;
    grid-row-gap: 1em;
  }
`;
// grid-template-rows: auto;
// grid-column-gap: ${props => `${props.styles.gapCol}px` || `3em`};
// grid-row-gap: ${props => `${props.styles.gapRow}px` || `2em`};
// max-width: 100%;
// height: ${props => `${props.styles.rowHeight}px` || `100%`};
// width: ${props => `${props.styles.maxWidth}px` || `100%`};

RowContainerWrapper.propTypes = {
  children: PropTypes.node,
  gridOptions: PropTypes.array,
  gridColSizeItems: PropTypes.array,
};

export default RowContainerWrapper;
