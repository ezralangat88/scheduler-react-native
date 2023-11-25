// DayScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const DayScreen = ({ day }) => {
  // Example data for each day
  const s = [
    { time: '8:00 AM', event: 'Morning Session' },
    { time: '12:00 PM', event: 'Lunch Break' },
    { time: '2:00 PM', event: 'Afternoon Session' },
    // Add more events as needed
  ];


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
  

  return (
    <View>
      <Text>{`Day ${day}`}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.time}</Text>
            <Text>{item.event}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DayScreen;
