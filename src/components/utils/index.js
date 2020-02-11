//++++++++++++ RobotToyController ++++++++++++++++++++++++++++++++++++++++++++//
// state.gridDimensions: { gridX: 4, gridY: 4 },
// state.gridPosition: { posX: 0, posY: 0, direction: 'N' },

const compassPoints = ['N', 'E', 'S', 'W'];
let robotToylog = [];
let robotToyPath = [];
let robotNo = 0;
let commandError = true;

export const isRobotOffGrid = ({ gridX, gridY }, { posX, posY }) => {
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
			coords = [x + m, y];
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
		default:
			return 'east';
	}
}

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
		if (d == dir) {
			position = idx;
		}
	});
	return position;
}

export const launchRover = () => {
	robotToylog.push({
		robotToy: robotNo,
		coordinates: robotToyPath,
	});
	robotNo += 1;

	// initCoords();
};
export const receiveRobotToyCommandString = (
	{ gridX, gridY },
	stringCommands,
) => {
	const initCommandString = stringCommands.split(/\r|\n/);
	let commandSteps = [];
	initCommandString.forEach(str => {
		console.log('STR: ', str);
		const commandStep = str.split(' ');
		commandSteps.push({ commandStep });
	});
	console.log('commandSteps ', commandSteps);
	return commandSteps;
	// initCommandString.map(str => {
	// 	const cmdStr = str.split(' ');
	// 	// seperate instuction from coords
	// 	const steps = str.forEach(step => {
	// 		console.log('********** ', step);
	// 	});
	// 	console.log('**********STEPS ', steps);
	// });
	// if (!testValidCommandString(initCommandString)) {
	// 	return;
	// }

	// const gridCoords = initCommandString[0].split(',');
	//  gridSizeX = parseInt(gridCoords[0]);
	//  gridSizeY = parseInt(gridCoords[1]);
	// console.log('GridCoords ', gridCoords);
	// updateGridSize();

	// const coords = initCommandString[1].split(',');
	// if (!testValidCommandString(coords)) {
	// 	return;
	// }

	// coords = [(initX = parseInt(coords[0])), (initY = parseInt(coords[1]))];

	// direction = _.size(coords[1].split(' ')) > 1 ? _.last(coords[1]) : 'N';

	// moveCommands = _.last(initCommandString).split('');
	// sendCommands();
};
var testValidCommandString = function(initCommandString) {
	var valid = false;
	commandError = false;
	if (initCommandString.length == 3) {
		initCommandString.every(arr => {
			if (arr.length < 1) {
				valid = true;
			}
		});
		// _.each(initCommandString, function(arr) {
		// 	if (arr.length < 1) {
		// 		valid = true;
		// 	}
		// });
	}
	if (valid) {
		commandError = true;
		return false;
	}
	return true;
};
