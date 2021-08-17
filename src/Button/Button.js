import React from "react";
import styles from "./Button.module.css";

const Button = ({
  text,
  classList,
  mouseDownHandler,
  mouseUpHandler,
  mouseOverHandler,
  mouseOutHandler,
}) => {
  const getClassName = () => {
    let className = ``;
    classList.forEach((name) => {
      className += ` ${styles[name]}`;
    });
    return className;
  };

  return (
    <button
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      className={getClassName()}
    >
      {text}
    </button>
  );
};

export default Button;
