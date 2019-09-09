import React from 'react';
import './DrawButton.css';

const DrawButton = (props) => {
  function drawCard() {
    props.drawCard();
  }

  return (
    <div className='button-container'>
      <button className='btn' onClick={drawCard}>
        Draw Card
      </button>
    </div>
  );
};

export default DrawButton;
