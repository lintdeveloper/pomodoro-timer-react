import React from 'react';
import Timer from './Timer';
import { shallow } from 'enzyme';


describe('', () => {
  it('should render <div />', () => {
      const container = shallow(<Timer />);
      expect(container.find("div").length).toEqual(3);
  })
})