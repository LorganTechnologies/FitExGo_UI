// noinspection JSUnresolvedReference

import React, { useState } from 'react';
import { View, Pressable, Text, Image, ActivityIndicatorComponent } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './styles';
import moment from 'moment';
import { getWeeksInMonth } from './utils';
import { fonts } from '../../res/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../res/colors';
import { images } from '../../res/images';
import Spacer from '../../components/Spacer';

const gradColor = ['#FF41B3', '#7E00E0'];
const gradWhite = [colors.white, colors.white];

const WeekViewCalendar = (props: any) => {
  const { showFullMonth = false } = props;
  const [monthOffset, setMonthOffset] = useState(0);
  const currentDate = moment().add(monthOffset, 'months');
  const today = moment();

  const [selectedDay, setSelectedDay] = useState(today);


  const [startDate, setStartDate] = useState(
    moment().startOf('week').startOf('week'),
  );

  const getFormattedPeriod = () => {
    if (showFullMonth) {
      return `${currentDate.clone().format('MMMM YYYY')}`;
    }
    const endDate = startDate.clone().add(6, 'day');
    const startFormatted = startDate.format('MMMM YYYY');
    const endFormatted = endDate.format('MMMM YYYY');

    if (startDate.month() !== endDate.month()) {
      return `${startFormatted} - ${endFormatted}`;
    } else if (startDate.year() !== endDate.year()) {
      return `${startFormatted} - ${endFormatted}`;
    } else {
      return startFormatted;
    }
  };

  const renderWeekDays = () => {
    const weekDays = [];
    const startDay = startDate.clone();

    function onDatePressed(day: any) {
      console.log('Selected date ===> ', day.format('D'));
      setSelectedDay(day)
    }

    for (let i = 0; i < 7; i++) {
      const day = startDay.clone().add(i, 'days');

      weekDays.push(
        <Pressable onPress={() => onDatePressed(day)} style={[styles.dayTextWrapper, { backgroundColor: day.format('DD') == selectedDay.format('DD') ? colors.primary : colors.gray3 }]}>
          <Text key={i} style={[styles.dayTextStyle, { color: day.format('DD') == selectedDay.format('DD') ? colors.white : colors.black }]}>
            {day.format('ddd')}
          </Text>
        </Pressable>
      );
    }

    return weekDays;
  };

  const istoday = (date: any) => today.dayOfYear() === date.date.dayOfYear();

  const renderWeeks = (currentMonth = 0) => {

    function onDatePressed(day: any) {
      console.log('Selected date ===> ', day.format('D'));
    }

    const weeksInMonth = getWeeksInMonth(currentMonth);

    const weeks: any = [];

    weeksInMonth.forEach(weekDates => {
      const week: any = [];
      weekDates.forEach(date => {
        const fDate = date?.date?.format('DD');
        week.push(
          <Pressable
            disabled={date?.isDisabled}
            onPress={() => onDatePressed(date?.date)}
            style={[
              styles.dateContainerStyle,

              { opacity: date?.isDisabled ? 0.4 : 1 },
              props.showToday
                ? {
                  backgroundColor: istoday(date) ? '#db99ff' : 'white',
                }
                : {},
            ]}>
            <LinearGradient colors={gradWhite} style={styles.dateGradientStyle}>
              <View
                style={[
                  styles.dateGradientStyle,
                  styles.dateGradientInnerStyle,
                  { backgroundColor: colors.white },
                ]}>
                <Text
                  style={[
                    styles.dateTextStyle,
                  ]}>
                  {fDate}
                </Text>
                {fDate === '17' || fDate === '20' ? (
                  <>
                    <Spacer />
                  </>
                ) : (
                  <>
                    <Spacer />
                  </>
                )}
              </View>
            </LinearGradient>
          </Pressable>,
        );
      });
      weeks.push(<View style={styles.weekDatesContainerStyle}>{week}</View>);
    });

    return weeks;
  };

  const renderDates = () => {
    const dates = [];
    const startDay = startDate.clone();

    function onDatePressed(day: any) {
      console.log('Selected date ===> ', day.format('D'));
      setSelectedDay(day)
    }

    for (let i = 0; i < 7; i++) {
      const day = startDay.clone().add(i, 'days');
      dates.push(
        <Pressable
          onPress={() => onDatePressed(day)}
          style={[styles.dateContainerStyle, { backgroundColor: day.format('DD') == selectedDay.format('DD') ? colors.primary : colors.gray3 }]}>
          <View style={{
            borderRadius: wp(10), backgroundColor: colors.white,
            width: wp(6),
            height: wp(6),
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text key={i} style={styles.dateTextStyle}>
              {day.format('DD')}
            </Text>
          </View>
          {(i === 0 || i === 6 || i === 3) && (
            <>
              <Spacer />
            </>
          )}
        </Pressable>,
      );
    }
    return dates;
  };

  const getNextPeriod = () => {
    if (showFullMonth) {
      setMonthOffset(prev => prev + 1);
      return;
    }
    setStartDate(startDate.clone().add(1, 'week'));
  };

  const getPreviousPeriod = () => {
    if (showFullMonth) {
      setMonthOffset(prev => prev - 1);
      return;
    }

    if (isCurrentPeriod()) {
      return;
    }

    const previousStartDate = startDate.clone().subtract(1, 'week');
    const currentDate = moment().startOf('week').clone().subtract(1, 'week');

    if (previousStartDate.isAfter(currentDate, 'day')) {
      setStartDate(previousStartDate.startOf('week'));
    }
  };

  const isCurrentPeriod = () => {
    const currentDate = moment();

    if (showFullMonth) {
      return currentDate.isSame(startDate, 'month');
    } else {
      const currentWeekStartDate = moment().startOf('week');
      return currentWeekStartDate.isSame(startDate, 'day');
    }
  };

  function _renderHeaderLayout() {
    return (

      <View style={styles.buttonsContainerStyle}>
        <Pressable
          disabled={showFullMonth && monthOffset < 1}
          style={[styles.buttonContainerStyle]}
          onPress={getPreviousPeriod}>
          <Image
            style={styles.buttonIconStyle}
            source={images.ic_prev_week}
          />
        </Pressable>
        <Text style={styles.yearTextStyle}>{getFormattedPeriod()}</Text>
        <Pressable
          style={[styles.buttonContainerStyle]}
          onPress={getNextPeriod}>
          <Image
            style={styles.buttonIconStyle}
            source={images.ic_next_week}
          />
        </Pressable>
      </View>
    );
  }

  return (
    <>
      {_renderHeaderLayout()}

      <View style={styles.weekDaysContainerStyle}>{renderWeekDays()}</View>

      {showFullMonth ? (
        <>{renderWeeks(monthOffset)}</>
      ) : (
        <View style={styles.weekDatesContainerStyle}>{renderDates()}</View>
      )}
    </>
  );
};

export default WeekViewCalendar;
