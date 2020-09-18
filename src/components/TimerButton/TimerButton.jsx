import React from 'react';
import './TimerButton.css';
import PropTypes from "prop-types";

const TimerButton = ({ buttonAction, buttonValue }) => (
    <div className="button-container" onClick={() => buttonAction()}>
        <p className="button-value">{buttonValue}</p>
    </div>
);

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
};
  

export default TimerButton;