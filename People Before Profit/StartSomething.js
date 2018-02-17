import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Passport from './Passport';
import { getEvents } from './EventData';

export default class StartSomething extends React.Component {
  static navigationOptions = {
    title: 'Starting Something'
  };
  constructor(props) {
    super(props);
    this.state = { username: Passport.username };
    this.props.navigation.addListener(
      'didBlur',
      () => this._login
    );
  }
  _login() {
    this.setState(() => ({ username: Passport.username }));
  }
  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.username) {
      return (
        <View>
          <Text style={styles.text}>Please log in to continue</Text>
          <View style={styles.buttonView}>
            <Button
              style={styles.button}
              color='#fff'
              title="Create Account"
              onPress={() => navigate('Register')}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              style={styles.button}
              color='#fff'
              title="Sign In"
              onPress={() => navigate('Login', {callback: this._login.bind(this)})}
            />
          </View>
        </View>
      );
    } else {
      return (
        <Text>Logged in as { this.state.username }</Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 16
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
