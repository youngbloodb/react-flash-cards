import React from 'react';
import './Card.css';

const Card = (props) => {
  const { question, answer } = props;
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='front'>
          <div className='question'>{question}</div>
        </div>
        <div className='back'>
          <div className='answer'>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
