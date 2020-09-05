import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component {

  render() {
    return (
      <div className="timer-container">
        <div className="time-display"></div>
        <div className="timer-button-container">
          <TimerButton/>
          <TimerButton/>
          <TimerButton/>
        </div>
      </div>
    );
  };
}

export default Timer;
