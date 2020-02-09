import React, { useReducer } from 'react';

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
			console.log('changeGridPosition ==============', update);

			return update;
		case 'changeGridPosition':
			update = {
				...state,
				gridPosition: action.newGridPosition,
			};
			console.log('changeGridPosition----------', update);

			return update;

		default:
			return state;
	}
};

const RobotContext = React.createContext(initialState);

function RobotProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<RobotContext.Provider value={{ state, dispatch }}>
			{props.children}
		</RobotContext.Provider>
	);
}

export { RobotContext, RobotProvider };
