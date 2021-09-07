import React from 'react';

const Buttons = ({ onButtonClick }) => (
  <div>
    <button type="button" onClick={onButtonClick}>
      Good
    </button>
    <button type="button">Neutral</button>
    <button type="button">Bad</button>
  </div>
);

export default Buttons;
