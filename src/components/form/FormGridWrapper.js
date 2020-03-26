import React, { useState, useEffect, useContext } from 'react';
import { RobotContext } from '../../context/RobotContext';
import { Board } from '../common/playingboard';
import PropTypes from 'prop-types';

const FormGridWrapper = () => {
  const { state, dispatch } = useContext(RobotContext);
  const { gridDimensions, gridPosition } = state;
  //	const [gridSettings, setGrid] = useState(gridDimensions);
  const [gridPositionSettings, setGridPosition] = useState(gridPosition);

  let BoardConfig = { ...gridDimensions, ...gridPositionSettings };

  useEffect(
    () => {
      BoardConfig = {
        ...gridDimensions,
        ...gridPositionSettings,
      };
      gridPositionHandler();
    },
    [gridPositionSettings, gridDimensions],
  );

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  const gridDimensionsHandler = (event) => {
    dispatch({
      type: 'changeGridDimensions',
      newGridDimensions: {
        ...gridDimensions,
        [event.target.name]: parseInt(event.target.value),
      },
    });
  };

  const gridPositionHandler = (event) => {
    event &&
      setGridPosition({
        ...gridPositionSettings,
        [event.target.name]: event.target.value,
      });

    dispatch({
      type: 'changeGridPosition',
      newGridPosition: { ...gridPositionSettings },
    });
  };
  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className="">
          <div className="container column">
            <h5>Grid Size:</h5>

            <div className="form-row">
              <label className="label">Grid X:</label>

              <input
                name="gridX"
                value={gridDimensions.gridX}
                placeholder="Horizontal"
                type="number"
                onChange={gridDimensionsHandler}
              />
            </div>

            <div className="form-row">
              <label className="label">Grid Y:</label>

              <input
                name="gridY"
                value={gridDimensions.gridY}
                placeholder="Vertical"
                type="number"
                onChange={gridDimensionsHandler}
              />
            </div>
          </div>

          <div className="container column">
            <h5 className="">Start Position:</h5>
            <div className="form-row">
              <label className="label">X Value:</label>
              <input name="posX" value={gridPosition.posX} type="number" onChange={gridPositionHandler} />
            </div>

            <div className="form-row">
              <label className="label">Y Value:</label>

              <input name="posY" value={gridPosition.posY} type="number" onChange={gridPositionHandler} />
            </div>

            <div className="form-row">
              <label className="label">Direction:</label>

              <select name="direction" value={gridPosition.direction} onChange={gridPositionHandler}>
                <option value="N">NORTH</option>
                <option value="S">SOUTH</option>
                <option value="E">EAST</option>
                <option value="W">WEST</option>
              </select>
            </div>
          </div>
          <div className="container">
            <h5 className="">Platform:</h5>
            <Board {...BoardConfig} />
          </div>
        </div>
      </form>
    </div>
  );
};

FormGridWrapper.propTypes = {
  placeholder: PropTypes.string,
};

export default FormGridWrapper;
