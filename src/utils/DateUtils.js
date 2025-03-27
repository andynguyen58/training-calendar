const getWeekDates = (current) => {
  var week = new Array();
  // Starting Monday not Sunday
  current.setDate(current.getDate() - current.getDay() + 1);
  for (var i = 0; i < 7; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return week;
};

const getShortDateName = (date) => {
  const options = { weekday: "short" };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const isSameDate = (d1, d2) => {
  return d1.toDateString() === d2.toDateString();
};

export default {
  getWeekDates,
  getShortDateName,
  isSameDate,
};
