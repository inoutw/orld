import React, { Component } from 'react';
import { Button } from 'react-native';

export default class RnButton extends Component {
	state = {color: 'blue'}
	render() {
		return (
			<Button onPress={this._onPress} 
				onMouseEnter={this._onMouseEnter}
				onMouseLeave={this._onMouseLeave}
				title="submit" color={this.state.color}
			/>
		)
	}
	_onPress = () => {
		this.props.onPress();
	}
	_onMouseEnter = () => {
		this.setState({color: 'green'})
	}
	_onMouseLeave = () => {
		this.setState({ color: 'blue' })
	}
}