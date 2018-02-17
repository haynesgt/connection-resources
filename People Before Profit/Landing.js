import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let events = [
  {
    name: 'Native Environmental Community Event',
    description: 'A good event',
    start: new Date('Feburary 20, 2018 18:00'),
    end: new Date('February 20, 2018 20:00'),
    id: 1
  }, {
    name: 'Other Event',
    description: 'A nice event',
    start: new Date('Feburary 21, 2018 18:00'),
    end: new Date('February 21, 2018 20:00'),
    id: 2
  }
];

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {
      (
        events.map(
          (eventx) => (
            <Text key={eventx.id}>{eventx.name}</Text>
          )
        )
      )
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
