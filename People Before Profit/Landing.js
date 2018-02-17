import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { getEvents } from './EventData';

export default class Landing extends React.Component {
  static navigationOptions = {
    title: 'Meetings',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={getEvents()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.start.toLocaleString()} -</Text>
                <Text style={styles.itemDate}>{item.end.toLocaleString()}</Text>
              </View>
              <View style={styles.itemButtonView}>
                <Button
                  style={styles.itemButton}
                  color="#fff"
                  title="Go"
                  onPress={() => navigate('Event', {key: item.key})}
                />
              </View>
            </View>
          )}
        />
        <View style={styles.startButtonView}>
          <Button
            title="Start Something"
            color="white"
            onPress={() => navigate('StartSomething')}
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
    marginTop: 30,
  },
  item: {
    padding: 10,
    margin: 5,
    backgroundColor: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90
  },
  itemText: {
    fontSize: 18,
  },
  itemButtonView: {
    marginTop: 10,
    paddingTop: 5,
    backgroundColor: "#88f",
    borderRadius: 8,
    width: 48,
    height: 48
  },
  itemButton: {
    color: "#fff"
  },
  startButtonView: {
    backgroundColor: "#88f",
    padding: 20
  }
});
