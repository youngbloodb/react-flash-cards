import React from "react";
import styles from "./Card.module.css";
import { Markup } from "interweave";

const Card = ({ question, answer, topic, face, handleClick }) => {
  return (
    <div className={styles.outerWrapper}>
      <div
        className={`${styles.innerWrapper} ${styles["innerWrapper" + face]}`}
        onClick={handleClick}
        title="Rotate Card"
      >
        <div className={styles.front}>
          <div className={styles.question}>
            <Markup content={question} />
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.answer}>
            <Markup content={answer} />
          </div>
        </div>
      </div>
      <div className={styles.topic}>{topic}</div>
    </div>
  );
};

export default Card;
