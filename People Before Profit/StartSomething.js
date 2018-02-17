import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { getEvents } from './EventData';

export default class StartSomething extends React.Component {
  static navigationOptions = {
    title: 'Starting Something'
  };
  constructor(props) {
    super(props);
    this.state = { token: null };
  }
  render() {
    const { navigate } = this.props.navigation;
    if (this.state.token === null) {
      return (
        <Text>Cannot log in</Text>
      );
    } else {
      return (
        <Text>Got token!</Text>
      );
    }
  }
}
