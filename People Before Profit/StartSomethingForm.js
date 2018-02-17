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

export default class StartSomethingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventStart: new Date(),
      eventEnd: new Date()
    };
  }
  _submit() {
  }
  render() {
    return (
      <View style={styles.outerContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Group</Text>
        <Picker style={styles.inputGroup}>
          <Picker.Item label="x"/>
          <Picker.Item label="y"/>
        </Picker>
        <Text style={styles.label}>Event Name</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(eventName) => this.setState({eventName})}
        />
        <Text style={styles.label}>Event Description</Text>
        <TextInput
          style={styles.inputText}
          multiline={true}
          numberOfLines={4}
          maxLength={40}
          height={100}
          onChangeText={(eventDescription) => this.setState({eventDescription})}
        />
        <Text style={styles.label}>Start</Text>
        <DatePickerIOS
          style={styles.inputDate}
          date={this.state.eventStart}
          onDateChange={(eventStart) => this.setState({eventStart})}
        />
        <Text style={styles.label}>End</Text>
        <DatePickerIOS
          style={styles.inputDate}
          date={this.state.eventEnd}
          onDateChange={(eventEnd) => this.setState({eventEnd})}
        />
      </ScrollView>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          color='#fff'
          title="Submit"
          onPress={() => this._submit()}
        />
      </View>
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
