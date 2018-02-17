import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing';
import Event from './Event';
import StartSomething from './StartSomething';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  Landing: { screen: Landing },
  Event: { screen: Event },
  StartSomething: { screen: StartSomething },
});

/*
class App extends React.Component {
  render() {
    return (
      <Landing />
    )
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
