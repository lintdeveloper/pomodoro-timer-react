import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false
    }
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if ( minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000);
    this.setState({ isOn: true})
  }

  render() {
    const { minutes, seconds } = this.state;
    
    return (
      <div className="timer-container">
        <div className="time-display"></div>
        <div className="timer-button-container">
          <TimerButton
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          <TimerButton/>
          <TimerButton/>
        </div>
      </div>
    );
  };
}

export default Timer;
