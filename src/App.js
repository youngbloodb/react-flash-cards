import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Card from "./Card/Card";
import Button from "./Button/Button";
import QnA from "./Data/QnA";

const App = () => {
  //state getters / setters
  const [cards] = useState(QnA.cards);
  const [currentCard, setCurrentCard] = useState({});
  const [currentTopic, setCurrentTopic] = useState(QnA.topics[0]);
  const [cardFacing, setCardFacing] = useState("Front");

  //card selection
  useEffect(
    () => drawNewCard(),
    [cards, currentTopic] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const getRandomCard = (currentCards) => {
    return currentCards[Math.floor(Math.random() * currentCards.length)];
  };

  const drawNewCard = () => {
    setCardFacing("Front");
    setTimeout(() => {
      const currentCards = getCardsByTopic(currentTopic);
      setCurrentCard(getRandomCard(currentCards));
    }, 400);
  };

  const getCardsByTopic = (topic) => {
    return topic === "All topics"
      ? cards
      : cards.filter((card) => card.topic === topic);
  };

  const rotateCard = () => {
    setCardFacing(cardFacing === "Front" ? "Back" : "Front");
  };

  //topics selection
  const getTopicOptions = (topics) => {
    return topics.map((location, index) => (
      <option key={index}>{location}</option>
    ));
  };

  return (
    <div className={styles.main}>
      <select
        className={styles.topicsSelect}
        onChange={(e) => setCurrentTopic(e.target.value)}
      >
        {getTopicOptions(QnA.topics)}
      </select>
      <Card
        question={currentCard.question}
        answer={currentCard.answer}
        topic={currentCard.topic}
        face={cardFacing}
        handleClick={rotateCard}
      />
      <div className={styles.flexRow}>
        <div className={styles.buttonWrapper}>
          <Button
            classList={["btn", "rotateBtn"]}
            mouseUpHandler={rotateCard}
            text={"Rotate Card"}
          />
          <Button
            classList={["btn", "drawBtn"]}
            mouseUpHandler={drawNewCard}
            text={"Draw Card"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
