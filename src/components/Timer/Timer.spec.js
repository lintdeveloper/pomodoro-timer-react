import React from 'react';
import Timer from './Timer';
import { shallow, mount } from 'enzyme';



describe('Timer ', () => {
  let container;

  beforeEach(() => (container = shallow(<Timer />)));

  it('should render <div />', () => {
    expect(container.find('div').length).toEqual(3);
  });

  it('should render the instance of the TimerButton component', () => {
    expect(container.find('TimerButton').length).toBeGreaterThanOrEqual(1);
  });

  

})