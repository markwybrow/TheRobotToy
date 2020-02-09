//++++++++++++ RobotToyController ++++++++++++++++++++++++++++++++++++++++++++//
// state.gridDimensions: { gridX: 4, gridY: 4 },
// state.gridPosition: { posX: 0, posY: 0, direction: 'N' },

export const isRobotOffGrid = ({ gridX, gridY }, { posX, posY, direction }) => {
	return posX > gridX || posX < 1 || posY > gridY || posY < 1;
};

export const moveCommand = ({ posX, posY, direction }, m) => {
	let x = parseInt(posX);
	let y = parseInt(posY);
	let coords = [x, y];
	switch (direction) {
		case 'N':
			coords = [x, y - m];
			break;
		case 'S':
			coords = [x, y + m];
			break;
		case 'E':
			coords = [x + m, y];
			break;
		case 'W':
			coords = [x - m, y];
			break;
		default:
			coords = [x, y + m];
			break;
	}

	return { posX: coords[0], posY: coords[1], direction };
};

export function getDirection(direction) {
	switch (direction) {
		case 'N':
			return 'north';
		case 'S':
			return 'south';
		case 'W':
			return 'west';
		case 'E':
			return 'east';
	}
}

const compassPoints = ['N', 'E', 'S', 'W'];
export function turnCommand(turn, direction) {
	let compassHeading = directionFromAmountOfTurns(direction);

	if (turn == 'L') {
		// Turning Left 90deg from current heading
		compassHeading = (compassHeading + 4 - 1) % 4;
	} else {
		// Turning Right 90deg
		compassHeading = (compassHeading + 1) % 4;
	}

	direction = compassPoints[compassHeading];
	return direction;
}
export function directionFromAmountOfTurns(dir) {
	let position = 0;
	compassPoints.forEach((d, idx) => {
		console.log(d, ' ', dir);
		if (d == dir) {
			position = idx;
		}
	});
	return position;
}
