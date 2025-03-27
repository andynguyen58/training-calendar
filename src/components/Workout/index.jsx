import React, { useState } from "react";
import styles from "@/styles/Workout.module.css";
import ThreeDots from "../../assets/three_dots.svg";
import Add from "../../assets/add.svg";

import Image from "next/image";
import Exercise from "../Exercise";

const Workout = (props) => {
  const { title, exercises } = props;

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
      className={`${styles.main} card ${onHold ? "hidden" : ""}`}
      draggable="true"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title.toUpperCase()}</p>
        <Image src={ThreeDots} alt={""} />
      </div>
      {exercises.map((exercise) => (
        <Exercise
          title={exercise?.name}
          repCount={exercise?.repCount}
          information={exercise?.information}
        />
      ))}

      <div className={styles.addIcon}>
        <Image src={Add} alt={""} />
      </div>
    </div>
  );
};

export default Workout;
