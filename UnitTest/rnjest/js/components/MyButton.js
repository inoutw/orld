import React, { Component } from 'react';
import { Button } from 'react-native';

export default class RnButton extends Component {
	render() {
		return (
			<Button onPress={this._onPress} title="submit" color="#841584" accessibilityLabel="Learn more"/>
		)
	}
	_onPress = () => {
		alert('button pressed');
	}
}