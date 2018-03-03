import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { getEvents } from './EventData';

export default class Landing extends React.Component {
  static navigationOptions = {
    title: 'Meetings',
  };
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      refreshing:true 
    };
    getEvents().then(
      (events) => {
        this.setState({events});
        this.setState({refreshing: false})
      }
    )
  }
  onRefresh() {
    this.setState({refreshing: true});
    getEvents().then(
      (events) => {
        this.setState({events});
        this.setState({refreshing: false});
      }
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events.map((item, i) => Object.assign({key: i}, item))}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.startTime ? item.startTime.toLocaleString() : ''} -</Text>
                <Text style={styles.itemDate}>{item.endTime ? item.endTime.toLocaleString() : ''}</Text>
              </View>
              <View style={styles.itemButtonView}>
                <Button
                  style={styles.itemButton}
                  color="#fff"
                  title="Go"
                  onPress={() => navigate('Event', {item: item})}
                />
              </View>
            </View>
          )}
        />
        <View style={styles.startButtonView}>
          <Button
            title="Start Something New"
            color="white"
            onPress={() => navigate('StartSomething')}
          />
        </View>
        <View style={styles.startButtonView}>
          <Button
            title="Help Communities in Need"
            color="white"
            onPress={() => navigate('Needs')}
          />
        </View>
        <View style={styles.startButtonView}>
          <Button
            title="Manage Your Communities"
            color="white"
            onPress={() => navigate('Manage')}
          />
        </View>
        <View style={styles.startButtonView}>
          <Button
            title="Search"
            color="white"
            onPress={() => navigate('Search')}
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
    marginTop: 0,
  },
  item: {
    padding: 10,
    marginTop: 5,
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
    backgroundColor: "#08f",
    borderRadius: 8,
    width: 48,
    height: 48
  },
  itemButton: {
    color: "#fff"
  },
  startButtonView: {
    backgroundColor: "#08f",
    padding: 10,
    marginTop: 5
  }
});
