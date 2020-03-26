import React from 'react';
import PropTypes from 'prop-types'
const InputText = (props) => {
  const { type = 'text', placeholder = '', fnc = () => {} } = props;
  return (
    <div className="control">
      <input className="input is-small" type={type} placeholder={placeholder} onChange={fnc} />
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  fnc: PropTypes.func,
  placeholder: PropTypes.string,
};
export default InputText;
