import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { getEvents } from './EventData';

export default class Event extends React.Component {
  static navigationOptions = {
    title: 'Event',
  };
  onJoin() {
  }
  render() {
    let myItem = this.props.navigation.state.params.item;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{ myItem.name }</Text>
        <Text style={styles.description}>{ myItem.description }</Text>
        <View style={styles.buttonView}>
          <Button
            style={styles.button}
            color='#fff'
            title="Join"
            onPress={() => this.onJoin()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 32,
    padding: 5
  },
  description: {
    padding: 10
  },
  buttonView: {
    backgroundColor: '#08f',
    margin: 5,
    borderRadius: 5,
  },
  button: {
    color: '#fff',
  }
});
