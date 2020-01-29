import React from 'react';
import './Card.css';

const charAtXToUpper = (idx, str) => {
  return str.charAt(idx).toUpperCase() + str.substring(idx + 1);
}

const Card = (props) => {
  let { question, answer, topic } = props;
  if(question !== undefined && answer !== undefined){
    question = charAtXToUpper(0, question); 
    answer = charAtXToUpper(0, answer); 
  }

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
      <div className='topic'>{topic}</div>
    </div>
  );
};

export default Card;
