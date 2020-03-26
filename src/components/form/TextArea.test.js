import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';
describe('TextArea', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TextArea debug />);

    expect(component).toMatchSnapshot();
  });
});
