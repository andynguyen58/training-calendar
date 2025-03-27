import React, { useMemo } from "react";
import styles from "@/styles/DayContainer.module.css";
import AddIcon from "../../assets/add.svg";
import Image from "next/image";
import Workout from "../Workout";

const DayContainer = (props) => {
  const { title, subTitle, workouts, isToday } = props;

  const subTitleColor = useMemo(() => {
    if (isToday) {
      return "#5A57CB";
    }

    return "#728096";
  }, [isToday]);

  return (
    <div className={styles.main}>
      <p className={styles.title}>{title}</p>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <p
            className={styles.subTitle}
            style={{
              color: subTitleColor,
            }}
          >
            {subTitle}
          </p>
          <Image src={AddIcon} alt={""} />
        </div>
        <div>
          {workouts.map((workout) => {
            console.log(workout);

            return (
              <Workout title={workout.title} exercises={workout.exercises} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayContainer;
