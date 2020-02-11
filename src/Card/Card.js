import React from 'react';
import './Card.css';
import { Markup } from 'interweave';

const Card = props => {
  let { question, answer, topic, face } = props;

  return (
    <div className='card-container'>
      <div className={`card card--${face}`}>
        <div className='front'>
          <div className='question'>
            <Markup content={question} />
          </div>
        </div>
        <div className='back'>
          <div className='answer'>
            <Markup content={answer} />
          </div>
        </div>
      </div>
      <div className='topic'>{topic}</div>
    </div>
  );
};

export default Card;
