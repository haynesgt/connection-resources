import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing';

export default class App extends React.Component {
  render() {
    return (
      <Landing>
      </Landing>
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
