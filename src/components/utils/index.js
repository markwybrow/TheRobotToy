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

/*


		state.robotToyPath = [];

		// if direction is off the compass
		state.moveCommand = function(m) {
			var x = state.coords[0];
			var y = state.coords[1];

			switch (state.direction) {
				case 'N':
					state.coords = [x, y + m];
					break;
				case 'S':
					state.coords = [x, y - m];
					break;
				case 'E':
					state.coords = [x + m, y];
					break;
				case 'W':
					state.coords = [x - m, y];
					break;
				default:
					state.coords = [x, y + m];
					break;
			}
			state.isRoverOffGrid();
			state.robotToyPath.push(state.coords, state.direction);
		};

		state.compassPoints = ['N', 'E', 'S', 'W'];

		state.turnCommand = function(turn) {
			var compassHeading = directionFromAmountOfTurns(state.direction);
			if (turn == 'L') {
				// Turning Left
				compassHeading = (compassHeading + 4 - 1) % 4;
			} else {
				// Turning Right
				compassHeading = (compassHeading + 1) % 4;
			}

			state.direction = state.compassPoints[compassHeading];
		};

		function directionFromAmountOfTurns(dir) {
			var position = 0;
			_.each(state.compassPoints, function(d, idx) {
				if (_.isEqual(d, dir)) {
					position = idx;
				}
			});
			return position;
		}

		state.robotToylog = [];

		state.launchRover = function() {
			state.robotToylog.push({
				robotToy: state.RobotNo,
				coordinates: state.robotToyPath,
			});
			state.RobotNo += 1;

			initCoords();
		};

		var testValidCommandString = function(initCommandString) {
			var valid = false;
			state.commandError = false;
			if (_.size(initCommandString) == 3) {
				_.each(initCommandString, function(arr) {
					if (arr.length < 1) {
						valid = true;
					}
				});
			}
			if (valid) {
				state.commandError = true;
				return false;
			}
			return true;
		};

		state.receiveRobotToyCommandString = function() {
			const initCommandString = state.stringCommands.split(/\r|\n/);

			if (!testValidCommandString(initCommandString)) {
				return;
			}

			const gridCoords = initCommandString[0].split(',');
			state.gridSizeX = parseInt(gridCoords[0]);
			state.gridSizeY = parseInt(gridCoords[1]);
			state.updateGridSize();

			const coords = initCommandString[1].split(',');
			if (!testValidCommandString(coords)) {
				return;
			}

			state.coords = [
				(state.initX = parseInt(coords[0])),
				(state.initY = parseInt(coords[1])),
			];

			state.direction =
				_.size(coords[1].split(' ')) > 1 ? _.last(coords[1]) : 'N';

			state.moveCommands = _.last(initCommandString).split('');
			state.sendCommands();
		};

		state.sendCommands = function() {
			_.each(state.moveCommands, function(cmd) {
				switch (cmd) {
					case 'M':
						state.moveCommand(1);
						break;
					case 'L':
						state.turnCommand('L');
						break;
					case 'R':
						state.turnCommand('R');
						break;
				}
			});
		};
	};
})();
*/
