import React from 'react';

const InputText = props => {
	const { type = 'text', placeholder = '', value = 1, fnc = () => {} } = props;
	return (
		<div className="control">
			<input
				className="input is-small"
				type={type}
				placeholder={placeholder}
				onChange={fnc}
			/>
		</div>
	);
};

export default InputText;
