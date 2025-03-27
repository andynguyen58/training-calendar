import React, { useState } from "react";
import styles from "@/styles/Exercise.module.css";

const Exercise = (props) => {
  const { title, repCount, information } = props;

  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("cardInfo", JSON.stringify({ title }));
    e.target.className += " ohhold";
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };

  const dragEndHandler = () => {
    setOnHold(false);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "card") {
      setTimeout(() => {
        e.target.className = "card anotherCardOnTop";
      }, 0);
    }
  };

  const onDragLeaveHandler = (e) => {
    resetClassName(e);
  };
  
  const onDropHandler = (e) => {
    resetClassName(e);
  };

  const resetClassName = (e) => {
    e.preventDefault();
    let isCard =
      e.target.className === "card" ||
      e.target.className === "card anotherCardOnTop";
    if (isCard) {
      setTimeout(() => {
        e.target.className = "card";
      }, 0);
    }
  };

  return (
    <div
      className={styles.main}
      draggable="true"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.information}>
        <p className={styles.repCount}>{`${repCount}x`}</p>
        <p className={styles.informationText}>{information}</p>
      </div>
    </div>
  );
};

export default Exercise;
