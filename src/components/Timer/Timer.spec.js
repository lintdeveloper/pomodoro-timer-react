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

describe('mounted Timer', () => {
  let container;

  beforeEach(() => (container = mount(<Timer />)));

  it('invokes the startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.start-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes stopTimer when the stop button is clicked', ()=> {
    const spy = jest.spyOn(container.instance(), 'stopTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.stop-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', ()=> {
    const spy = jest.spyOn(container.instance(), 'resetTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.reset-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change isOn state true when the start button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.start-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
  });

  it('should change isOn state false when the stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(25);
    expect(container.instance().state.seconds).toEqual(0)
  })

})