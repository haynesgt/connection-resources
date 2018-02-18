import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { getNeeds } from './NeedData';

export default class Needs extends React.Component {
  static navigationOptions = {
    title: 'Needs',
  };
  constructor(props) {
    super(props);
    this.state = {
      needs: null,
      refreshing:true 
    };
    getNeeds().then(
      (needs) => {
        this.setState({needs});
        this.setState({refreshing: false})
      }
    )
  }
  onRefresh() {
    this.setState({refreshing: true});
    getEvents().then(
      (needs) => {
        this.setState({needs});
        this.setState({refreshing: false});
      }
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.needs}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.community.name}</Text>
              </View>
              <View style={styles.itemButtonView}>
                <Button
                  style={styles.itemButton}
                  color="#fff"
                  title="Help"
                  onPress={() => navigate('Need', {item: item})}
                />
              </View>
            </View>
          )}
        />
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
    width: 64,
    height: 48
  },
  itemButton: {
    color: "#fff"
  },
  startButtonView: {
    backgroundColor: "#08f",
    padding: 20,
    marginTop: 5
  }
});

