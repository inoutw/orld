import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyListScreen from './src/containers/myListScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyListScreen style={styles.listScreen}></MyListScreen>
		<Text>Please !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listScreen: {
	flex: 2,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
