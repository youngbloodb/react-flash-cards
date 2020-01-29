import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

import QnA from './Data/QnA';

const App = () => {
  //states
  const [cards, setCards] = useState(QnA.cards);
  const [currentCard, setCurrentCard] = useState({});

  //randomize cards functionality
  useEffect(() => {
    const currentCards = cards;
    setCurrentCard(getRandomCard(currentCards));
  }, [cards, currentCard]);

  const getRandomCard = (currentCards) => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  const updateCard = () => {
    const currentCards = cards;
    setCurrentCard(getRandomCard(currentCards));
  }

  //topics selection
  const [currentTopic, setCurrentTopic] = useState(QnA.topics[0]);
  const getTopicOptions = (topics) => {
    return topics.map((location, index) => <option key={index}>{location}</option>);
  }

  const topicChange = (evt) => {
    const elem = evt.currentTarget;
    const elemValue = elem.options[elem.selectedIndex].value;
    console.log('elemValue: ', elemValue);
    setCurrentTopic(elemValue)
  }

  return (
    <div className='App'>
      <select className="topicsSelect" onChange={evt => topicChange(evt)}>
        {getTopicOptions(QnA.topics)}
      </select>
      <div className='cardRow'>
        <Card question={currentCard.question} answer={currentCard.answer} topic={currentCard.topic} />
      </div>
      <div className='buttonRow'>
        <DrawButton drawCard={updateCard} />
      </div>
    </div>
  );
}

export default App;
