import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.monthTitle}>May 2024</Text>
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map(day => (
          <Text key={day} style={styles.dayOfWeek}>{day}</Text>
        ))}
      </View>
      <View style={styles.dates}>
        {dates.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.week}>
            {week.map((date, dateIndex) => (
              <View key={dateIndex} style={[styles.date, date === null ? styles.nullDate : null]}>
                {date !== null && <Text style={styles.dateText}>{date}</Text>}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 20
  },
  monthTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    textTransform: 'uppercase'
  },
  daysOfWeek: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  dayOfWeek: {
    width: 45,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  dates: {
    flexDirection: 'column',
  },
  week: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  date: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A212E',
    marginRight: 5,
    borderRadius: 10
  },
  nullDate: {
    backgroundColor: 'transparent',
  },
  dateText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Calendar;
