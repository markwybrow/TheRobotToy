import React from 'react';
import { shallow } from 'enzyme';

import InputText from './TextInput';

const props = {
  placeholder: 'text',
};

describe('InputText', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<InputText {...props} debug />);

    expect(component).toMatchSnapshot();
  });
});
