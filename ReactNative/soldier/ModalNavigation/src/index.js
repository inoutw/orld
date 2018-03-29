import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import RootStack from './route';
class LogoTitle extends Component {
	render() {
		return (
			<Image
				source={require('./spiro.png')}
				style={{ width: 30, height: 30 }}
			/>
		);
	}
}

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}
