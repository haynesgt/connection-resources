import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  Picker,
  DatePickerIOS
} from 'react-native';
import Passport from './Passport';
import { getGroups, createGroup } from './GroupData';

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      groupDescription: ""
    };
  }
  _submit() {
    createGroup(
      this.state.groupName,
      this.state.groupDescription,
      [ Passport.username ],
      [ Passport.username ],
      [ Passport.username ]
    ).then(
      () => {
        if (this.props.navigation.state.params.callback()) {
          this.props.navigation.state.params.callback();
        }
        this.props.navigation.goBack();
      }
    );
  }
  render() {
    return (
      <View style={styles.outerContainer}>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          color='#fff'
          title="Submit"
          onPress={() => this._submit()}
        />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Group Name</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(groupName) => this.setState({groupName})}
        />
        <Text style={styles.label}>Group Description</Text>
        <TextInput
          style={styles.inputText}
          multiline={true}
          numberOfLines={4}
          maxLength={40}
          height={100}
          onChangeText={(groupDescription) => this.setState({groupDescription})}
        />
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 24,
    margin: 5
  },
  inputText: {
    fontSize: 16,
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  inputGroup: {
    margin: 5,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  inputDate: {
    margin: 5,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid'
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

