import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

import http_cards from './Data/http_cards';

function App() {
  //mockdata for init development
  const [cards, setCards] = useState(http_cards.cards);
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
