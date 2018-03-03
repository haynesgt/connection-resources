import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, FlatList} from 'react-native';

export default class Need extends React.Component {
  static navigationOptions = {
    title: 'Viewing Need',
  };
  onJoin() {
  }
  render() {
    let myItem = this.props.navigation.state.params.item;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{ myItem.name }</Text>
        <Text style={styles.description}>{ myItem.description }</Text>
        <Text>How can you help?</Text>
        <TextInput
          style={{
              backgroundColor: '#fff',
              fontSize: 16,
              borderWidth: 1,
              borderColor: '#ccc',
              borderStyle: 'solid'
            }}
            height={50}
        />
        <View style={styles.buttonView}>
          <Button
            style={styles.button}
            color='#fff'
            title="Offer Help"
            onPress={() => this.onJoin()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 32,
    padding: 5
  },
  description: {
    padding: 10
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

