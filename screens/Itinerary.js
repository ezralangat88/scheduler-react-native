// Itinerary.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const generateDayScreen = (day, data) => {
  return () => (
    <View style={styles.container}>
      <Text style={styles.dayText}>{`Day ${day}`}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.programText}>{item.program}</Text>
          </View>
        )}
      />
    </View>
  );
};

const data = [
  // Data for Day 1
  [
    { time: '8:00 AM', program: 'Registration' },
    { time: '10:00 AM', program: 'Opening Ceremony' },
    { time: '12:00 PM', program: 'Lunch Break' },
    { time: '2:00 PM', program: 'Technical Sessions' },
    { time: '5:00 PM', program: 'Networking Event' },
  ],
  // Data for Day 2
  [
    { time: '8:00 AM', program: 'Workshop A' },
    { time: '10:00 AM', program: 'Panel Discussion' },
    { time: '12:00 PM', program: 'Lunch Break' },
    { time: '2:00 PM', program: 'Hands-on Session' },
    { time: '5:00 PM', program: 'Social Mixer' },
  ],
  // Data for Day 3
  [
    { time: '8:00 AM', program: 'Registration' },
    { time: '10:00 AM', program: 'Keynote Speaker' },
    { time: '12:00 PM', program: 'Lunch Break' },
    { time: '2:00 PM', program: 'Breakout Sessions' },
    { time: '5:00 PM', program: 'Cocktail Reception' },
  ],
  // Data for Day 4
  [
    { time: '8:00 AM', program: 'Coffee Networking' },
    { time: '10:00 AM', program: 'Interactive Workshops' },
    { time: '12:00 PM', program: 'Lunch Break' },
    { time: '2:00 PM', program: 'Expert Panels' },
    { time: '5:00 PM', program: 'Gala Dinner' },
  ],
  // Data for Day 5
  [
    { time: '8:00 AM', program: 'Morning Yoga' },
    { time: '10:00 AM', program: 'Closing Remarks' },
    { time: '12:00 PM', program: 'Farewell Lunch' },
    { time: '2:00 PM', program: 'Networking Opportunities' },
    { time: '5:00 PM', program: 'Event Conclusion' },
  ],
];

const Itinerary = () => {
  return (
    <Tab.Navigator>
      {data.map((dayData, index) => (
        <Tab.Screen
          key={index}
          name={`Day ${index + 1}`}
          component={generateDayScreen(index + 1, dayData)}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  programText: {
    fontSize: 14,
  },
});

export default Itinerary;
