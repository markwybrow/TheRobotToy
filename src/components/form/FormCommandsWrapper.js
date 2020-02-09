import React, { useState, useContext } from 'react';
import { RobotContext } from '../../context/RobotContext';

const FormCommandStringWrapper = props => {
	const { state, dispatch } = useContext(RobotContext);
	const { gridDimensions, gridPosition } = state;
	const [gridSettings, setGrid] = useState(gridDimensions);
	const [gridPositionSettings, setGridPosition] = useState(gridPosition);
	console.log(
		'\n\n\n\n\n\n\n\nform wrapper:',
		'gridDimensions ',
		gridDimensions,
		gridPosition,
	);

	const submitFormHandler = event => {
		event.preventDefault();
	};
	const commandHandler = event => {
		console.log('commandHandler ', event.target.value);
		// setCommandStr(event.target.value);

		// console.log('MainContent-UpdateCommands ', commands, commandStr);
		// //setCommands(this.value);
		// dispatch({
		// 	type: 'updateCommands',
		// 	newCommands: commands,
		// });
	};
	return (
		<div>
			<form onSubmit={submitFormHandler}>
				<div className="panel-block">
					<div className="control">
						<textarea
							name="commandStr"
							className="textarea"
							// value={commands.toString().toUpperCase()}
							onChange={commandHandler}
							placeholder={props.placeholder}></textarea>
					</div>
				</div>
				<div className="panel-block">
					<button
						type="submit"
						className="button is-link is-outlined is-fullwidth">
						Send Commands
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormCommandStringWrapper;
