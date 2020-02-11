import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card/Card';
import QnA from './Data/QnA';

const App = () => {
  //state getters / setters
  const [cards, setCards] = useState(QnA.cards);
  const [currentCard, setCurrentCard] = useState({});
  const [currentTopic, setCurrentTopic] = useState(QnA.topics[0]);
  const [cardFacing, setCardFacing] = useState('front');

  //card selection
  useEffect(() => {
    updateCard();
  }, [cards, currentTopic]);

  const getRandomCard = currentCards => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };

  const updateCard = () => {
    setCardFacing('front');
    setTimeout(() => {
      const currentCards = getCardsByTopic(currentTopic);
      setCurrentCard(getRandomCard(currentCards));
    }, 400);
  };

  const getCardsByTopic = topic => {
    if (topic === 'All topics') {
      return cards;
    } else {
      return cards.filter(card => card.topic === topic);
    }
  };

  const rotateCard = () => {
    setCardFacing(cardFacing === 'front' ? 'back' : 'front');
  };

  //topics selection
  const getTopicOptions = topics => {
    return topics.map((location, index) => (
      <option key={index}>{location}</option>
    ));
  };

  const topicChange = evt => {
    const elem = evt.currentTarget;
    const elemValue = elem.options[elem.selectedIndex].value;
    setCurrentTopic(elemValue);
    updateCard();
  };

  return (
    <div className='App'>
      <select className='topicsSelect' onChange={evt => topicChange(evt)}>
        {getTopicOptions(QnA.topics)}
      </select>
      <div className='cardRow'>
        <Card
          question={currentCard.question}
          answer={currentCard.answer}
          topic={currentCard.topic}
          face={cardFacing}
        />
      </div>
      <div className='buttonRow'>
        <div className='button-container'>
          <button className='btn btn--rotate' onClick={rotateCard}>
            Rotate Card
          </button>
          <button className='btn btn--draw' onClick={updateCard}>
            Draw Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
