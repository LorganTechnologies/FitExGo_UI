import moment from "moment/moment";

const getWeeksInMonth = monthOffset => {
  const currentDate = moment().add(monthOffset, 'months');
  const firstDayOfMonth = currentDate.clone().startOf('month').startOf('week');
  const lastDayOfMonth = currentDate.clone().endOf('month').endOf('week');

  const weeksInMonth = lastDayOfMonth.diff(firstDayOfMonth, 'weeks') + 1;

  const weeksArray = [];
  let currentDatePointer = firstDayOfMonth.clone();

  for (let i = 0; i < weeksInMonth; i++) {
    const currentWeek = [];

    for (let j = 0; j < 7; j++) {
      if (currentDatePointer.month() === currentDate.month()) {
        currentWeek.push({date: currentDatePointer.clone(), isDisabled: false});
      } else {
        currentWeek.push({date: currentDatePointer.clone(), isDisabled: true});
      }
      currentDatePointer.add(1, 'day');
    }

    weeksArray.push(currentWeek);
  }

  return weeksArray;
};

export {getWeeksInMonth};
