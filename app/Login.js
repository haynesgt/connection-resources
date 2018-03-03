import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import Passport from './Passport';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Sign In'
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  _onSubmit() {
    const { navigate, goBack } = this.props.navigation;
    try {
      let url = Passport.server + '/login';
      fetch(url, {
        method: 'POST',
        body: 'username=' +
          escape(this.state.username) +
          '&password=' +
          escape(this.state.password)
      }).then(
        (response) => {
          Passport.username = this.state.username;
          Passport.password = this.state.password;
          if (this.props.navigation.state.params.callback) {
            this.props.navigation.state.params.callback();
          }
          goBack();
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
        <ScrollView style={{padding: 20}}>
        <TextInput
          style={styles.inputText}
          placeholder='Username'
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
        />
        <View style={{margin:7}} />
        <View style={{backgroundColor: "#08f"}}>
        <Button 
          onPress={this._onSubmit.bind(this)}
          color="#fff"
          title="Sign In"
        />
        </View>
        </ScrollView>
        )
  }
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    margin: 10
  }
});
