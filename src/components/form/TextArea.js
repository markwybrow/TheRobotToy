import React from 'react';

const InputTextArea = props => {
	const { placeholder = '' } = props;
	return (
		<div className="control">
			<textarea
				className="textarea"
				value={props.values}
				onChange={props.fnc(props.values)}
				placeholder={props.placeholder}></textarea>
		</div>
	);
};

export default InputTextArea;
