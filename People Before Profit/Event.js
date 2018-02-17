import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { getEvents } from './EventData';

export default class Event extends React.Component {
  render() {
    let myKey = this.props.navigation.state.params.key;
    let myItem = getEvents().filter((item) => item.key === myKey)[0];
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{ myItem.name }</Text>
        <Text style={styles.description}>{ myItem.description }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  name: {
    fontSize: 32,
    padding: 5
  },
  description: {
    padding: 10
  }
});
