import React, { Component } from 'react';
import AppNavigator from './route';

export default class Screen extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AppNavigator
				ref={(nav) => { this.navigator = nav; }}/>
		);
	}
}