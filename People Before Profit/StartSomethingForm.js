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
import { getGroups } from './GroupData';
import { createEvent } from './EventData';

export default class StartSomethingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communities: [],
      eventName: "",
      eventDescription: "",
      eventStart: new Date(),
      eventEnd: new Date()
    };
    getGroups().then(
      (communities) => {
        this.setState({communities});
      }
    );
  }
  _submit() {
    createEvent(
      this.state.eventName,
      this.state.eventDescription,
      this.state.eventStart,
      this.state.eventEnd,
      "",
      [ Passport.username ],
      [ Passport.username ]
    ).then(
      () => {
        this.props.navigation.goBack();
      }
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.outerContainer}>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          color='#fff'
          title="Create Event"
          onPress={() => this._submit()}
        />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Group</Text>
        <Picker style={styles.inputGroup}>
          {
            this.state.communities.filter(
              (item) => (item.name)
            ).map(
              (item, i) => (
                <Picker.Item label={item.name} key={i} />
              )
            )
          }
        </Picker>
        <View style={styles.buttonView2}>
          <Button
            style={styles.button}
            color='#fff'
            title="Create New Group"
            onPress={() => navigate('CreateGroup')}
          />
        </View>
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
  buttonView2: {
    backgroundColor: '#8c4',
    margin: 5,
    borderRadius: 5,
  },
  button: {
    color: '#fff',
  }
});
