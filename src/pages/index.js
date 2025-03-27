import React, { useCallback } from "react";
import styles from "@/styles/Home.module.css";
import { useMemo } from "react";
import DateUtils from "@/utils/DateUtils";
import DayContainer from "@/components/DayContainer";
import TrainingData from "@/mockData/TrainingData";

const Home = () => {
  const currentWeekDates = useMemo(() => {
    return DateUtils.getWeekDates(new Date());
  }, []);

  return (
    <div className={styles.main}>
      {currentWeekDates.map((date) => {
        const thisDayWorkouts = TrainingData.filter((workout) => {
          return DateUtils.isSameDate(
            new Date(date),
            new Date(Date.parse(workout?.date))
          );
        });

        return (
          <DayContainer
            title={DateUtils.getShortDateName(date).toUpperCase()}
            subTitle={date.getDate()}
            workouts={thisDayWorkouts}
            isToday={DateUtils.isSameDate(new Date(), new Date(date))}
          />
        );
      })}
    </div>
  );
};

export default Home;
