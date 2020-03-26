import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  gridDimensions: { gridX: 4, gridY: 4 },
  gridPosition: { posX: 1, posY: 1, direction: 'E' },
};
let update;

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeGridDimensions':
      update = {
        ...state,
        gridDimensions: action.newGridDimensions,
      };

      return update;
    case 'changeGridPosition':
      update = {
        ...state,
        gridPosition: action.newGridPosition,
      };

      return update;

    default:
      return state;
  }
};

const RobotContext = React.createContext(initialState);

function RobotProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <RobotContext.Provider value={{ state, dispatch }}>{children}</RobotContext.Provider>;
}

RobotProvider.propTypes = {
  children: PropTypes.node,
};
export { RobotContext, RobotProvider };
