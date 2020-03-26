import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RobotContext } from '../../context/RobotContext';
import {
  FaPlayCircle,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaBackward,
  FaForward,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import { moveCommand, getDirection, turnCommand } from '../utils';

import styled from 'styled-components';

const DirectionalPointer = styled.div`
  width: min-content;
  height: min-content;

  margin: 0 auto;
  text-align: center;
`;

const FormRobotControlPanel = () => {
  const { state, dispatch } = useContext(RobotContext);
  const { gridPosition } = state;
  const [gridPositionSettings, setGridPosition] = useState(gridPosition);
  let direction = gridPosition.direction;

  useEffect(
    () => {
      getDirection(gridPosition.direction);
      updateDirection(gridPosition.direction);
    },
    [gridPosition.direction],
  );

  const moveRobot = (m) => {
    const results = moveCommand({ ...gridPosition, ...gridPositionSettings }, m);

    setGridPosition(results);

    dispatch({
      type: 'changeGridPosition',
      newGridPosition: { ...results },
    });
  };
  const turnRobot = (dir) => {
    dispatch({
      type: 'changeGridPosition',
      newGridPosition: {
        ...gridPositionSettings,
        direction: turnCommand(dir, gridPosition.direction),
      },
    });
  };

  const updateDirection = (d) => {
    setGridPosition({ ...gridPositionSettings, direction: d });
    dispatch({
      type: 'changeGridPosition',
      newGridPosition: { ...gridPositionSettings, direction: d },
    });
  };

  return (
    <div className="container column">
      <div className="form-group">
        <div className="text-center is-hidden-mobile">
          <DirectionalPointer>
            <h1>
              {getDirection(direction)}
              <FaPlayCircle className={`${getDirection(direction)}Icon`} size="2em" />
            </h1>
          </DirectionalPointer>
        </div>
        <h2 className="is-hidden-mobile">Direction of Movement:</h2>
        <div className="form-row">
          <a className="button is-light" onClick={() => updateDirection('N')}>
            <span className="panel-icon">
              <FaArrowAltCircleUp size="1.1em" className="arrow-up" />
            </span>
            North:
          </a>

          <a onClick={() => updateDirection('E')} className="button is-light">
            <span className="panel-icon">
              <FaArrowAltCircleRight size="1.1em" className="arrow-right" />
            </span>
            East:
          </a>
          <a className="button is-light" onClick={() => updateDirection('S')}>
            <span className="panel-icon">
              <FaArrowAltCircleDown size="1.1em" className="arrow-down" />
            </span>
            South:
          </a>
          <a className="button is-light" onClick={() => updateDirection('W')}>
            <span className="panel-icon">
              <FaArrowAltCircleLeft size="1.1em" className="arrow-left" />
            </span>
            West:
          </a>
        </div>
      </div>

      <div className="form-group">
        <h2 className="control-label is-hidden-mobile" htmlFor="movement">
          Moving Robot Commands:
        </h2>
        <div className="form-row">
          <a className="button is-light" onClick={() => moveRobot(-1)}>
            <span className="panel-icon">
              <FaBackward size="1.1em" />
            </span>{' '}
            Move Back
          </a>
          <a className="button is-light" onClick={() => moveRobot(1)}>
            Move Forward&nbsp;&nbsp;{' '}
            <span className="panel-icon">
              {' '}
              <FaForward size="1.1em" />
            </span>
          </a>

          <a className="button is-light" id="turnLeft" onClick={() => turnRobot('L', gridPosition.direction)}>
            <span className="panel-icon">
              {' '}
              <FaChevronLeft size="1.1em" />
            </span>{' '}
            Left 90%
          </a>
          <a className="button is-light" onClick={() => turnRobot('R', gridPosition.direction)}>
            {' '}
            Right 90%{' '}
            <span className="panel-icon">
              {' '}
              <FaChevronRight size="1.1em" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

FormRobotControlPanel.propTypes = {
  directionFromAmountOfTurns: PropTypes.string,
  props: PropTypes.node,
};

export default FormRobotControlPanel;
