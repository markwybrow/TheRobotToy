import React from 'react';
import { shallow } from 'enzyme';

import FormGridWrapper from './FormGridWrapper';

describe('FormGridWrapper', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FormGridWrapper debug />);

    expect(component).toMatchSnapshot();
  });
});
