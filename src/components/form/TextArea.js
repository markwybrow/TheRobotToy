import React from 'react';
import PropTypes from 'prop-types';
const InputTextArea = (props) => {
  const { placeholder = '', values, fnc = () => {} } = props;
  return (
    <div className="control">
      <textarea className="textarea" value={values} onChange={fnc(values)} placeholder={placeholder} />
    </div>
  );
};

InputTextArea.propTypes = {
  values: PropTypes.string,
  fnc: PropTypes.func,
  placeholder: PropTypes.string,
};
export default InputTextArea;
