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
    expect(container.find('TimerButton').length).toBeGreaterThanOrEqual(3);
  });

  it('should have state', () => {
    const timerState = container.state();
    expect(timerState).not.toBeNull()
  });
  
  it('should have the minutes property on state', () => {
    const timerState = container.state();
    expect(timerState.minutes).not.toBeUndefined()
  });

  it('should initialise minutes property to 25', () => {
    const timerState = container.state();
    expect(timerState.minutes).toEqual(25)
  });

  it('should have the seconds property on state', () => {
    const timerState = container.state();
    expect(timerState.seconds).not.toBeUndefined()
  });

  it('should initialise seconds property to 0 on state', () => {
    const timerState = container.state();
    expect(timerState.seconds).not.toBeUndefined()
  });

  it('should have isOn property on state', () => {
    const timerState = container.state();
    expect(timerState.isOn).not.toBeUndefined();
  });
  
  it('should initialise isOn property to false on state', () => {
    const timerState = container.state();
    expect(timerState.isOn).toBeFalsy();
  });
});