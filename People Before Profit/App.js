import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Landing from './Landing';
import Event from './Event';
import Login from './Login';
import StartSomething from './StartSomething';
import { StackNavigator } from 'react-navigation';

let Nav = StackNavigator({
  Landing: { screen: Landing },
  Event: { screen: Event },
  StartSomething: { screen: StartSomething },
  Login: { screen: Login },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <Nav />
        </View>
        <View
          style={styles.button}
        >
          <Button
            title="Settings"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  inner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 10
  }
});
