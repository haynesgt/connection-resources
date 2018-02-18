import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, FlatList} from 'react-native';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return (
      <TextInput
        placeholder='Search events and communitees'
        style={{fontSize: 16, margin: 20}}
      />
    );
  }
}
  

