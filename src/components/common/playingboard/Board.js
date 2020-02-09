import React, { useState, useEffect, useContext } from 'react';
import { RobotContext } from '../../../context/RobotContext';
import { getDirection, isRobotOffGrid } from '../../utils';
import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';
const Board = () => {
	const { state } = useContext(RobotContext);
	const { gridDimensions, gridPosition } = state;
	let { posX, posY, direction } = gridPosition;
	let { gridX, gridY } = gridDimensions;

	const offGrid = isRobotOffGrid(gridDimensions, gridPosition);

	const [boxes, setBoxes] = useState(<div className="box"></div>);
	const gridXrow = parseInt(gridX);
	const gridYcolumn = parseInt(gridY);
	const posXrow = parseInt(posX);
	const posYrow = parseInt(posY);
	const boxCollection = [];
	let robotPos = 0;
	let newDirection = 'north';

	useEffect(() => {
		robotPos = posYrow > 1 ? gridXrow * (posYrow - 1) + posXrow : posXrow;
		newDirection = getDirection(direction);
		for (let i = 0; i < gridXrow * gridYcolumn; i++) {
			boxCollection.push(
				<div
					className={`box ${
						robotPos - 1 === i ? 'active ' + newDirection : ''
					}`}>
					<FaRobot size="120%" className="robot" />
				</div>,
			);
		}
		setBoxes(boxCollection);
	}, [gridPosition]);

	return (
		<BoardStyle
			gridXrow={gridXrow}
			gridYcolumn={gridYcolumn}
			robotPos={robotPos}
			direction={direction}
			offGrid={offGrid}>
			<div className="grid is-marginless">{boxes}</div>
		</BoardStyle>
	);
};

// Board styles
const BoardStyle = styled.div`
	.box {
		margin: unset;
		.robot {
			display: none;
		}
	}
	.box.active {
		&.north {
			transform: rotate(0deg);
			color: #028090;
			display: block;
		}

		&.east {
			transform: rotate(90deg);
			display: block;
			color: #25a18e;
		}

		&.south {
			transform: rotate(-180deg);
			display: block;
			color: #00a5cf;
		}

		&.west {
			transform: rotate(-90deg);
			display: block;
			color: #7c77b9;
		}
	}
	.box.active {
		.robot {
			display: ${props => (props.offGrid ? 'none' : 'block')};
		}
	}
	.grid {
		max-width: (${props => props.gridXrow} * 2) rem;
		max-height: (${props => props.gridY} * 2) rem;
		display: grid;
		grid-template-columns: repeat(
			${props => props.gridXrow},
			minmax(2rem, 1fr)
		);
		grid-template-rows: repeat(
			${props => props.gridYcolumn},
			minmax(2rem, 1fr)
		);
		background-color: ${props => (props.offGrid ? 'red' : '')};
	}

	.grid::before {
		content: '';
		width: 0;
		padding-bottom: 100%;
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}

	.grid > *:first-child {
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}

	/* Just to make the grid visible */

	.grid > * {
		background: rgba(0, 0, 0, 0.1);
		border: 1px white solid;
	}
`;

export default Board;
