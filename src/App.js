import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

//import {DB_CONFIG}  from './Config/Firebase/db_config';

function App() {
  /*
  const app = firebase.initializeApp(DB_CONFIG);
  const database = app.database().ref().child('cards');
  */

  //mockdata for init development
  const [cards, setCards] = useState([
    { id: 1, question: 'Question 1 goes here', answer: 'Answer 1 goes here' },
    { id: 2, question: 'Question 2 goes here', answer: 'Answer 2 goes here' },
    { id: 3, question: 'Question 3 goes here', answer: 'Answer 3 goes here' },
    { id: 4, question: 'Question 4 goes here', answer: 'Answer 4 goes here' },
    { id: 5, question: 'Question 5 goes here', answer: 'Answer 5 goes here' },
    { id: 6, question: 'Question 6 goes here', answer: 'Answer 6 goes here' },
    { id: 7, question: 'Question 7 goes here', answer: 'Answer 7 goes here' },
    { id: 8, question: 'Question 8 goes here', answer: 'Answer 8 goes here' },
  ]);
  const [currentCard, setCurrentCard] = useState({});
  useEffect(() => {
    const currentCards = cards;
    setCurrentCard(getRandomCard(currentCards));
  }, [cards, currentCard]);

  function getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  function updateCard() {
    const currentCards = cards;
    setCurrentCard(getRandomCard(currentCards));
  }

  return (
    <div className='App'>
      <div className='cardRow'>
        <Card question={currentCard.question} answer={currentCard.answer} />
      </div>
      <div className='buttonRow'>
        <DrawButton drawCard={updateCard} />
      </div>
    </div>
  );
}

export default App;
