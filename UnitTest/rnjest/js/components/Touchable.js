import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchable extends Component {
	onRowPress() {
		this.myCoolFunction();
	}

	myCoolFunction() {
		console.log('hi');
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} testID={'toucha'}>
				<View>
					<Text>Hello World</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}