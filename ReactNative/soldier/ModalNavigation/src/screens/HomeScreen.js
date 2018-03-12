import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class LogoTitle extends React.Component {
	render() {
		return (
			<Image
				source={require('../spiro.png')}
				style={{ width: 30, height: 30 }}
			/>
		);
	}
}
export default class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerTitle: <LogoTitle />,
			headerLeft: (
				<Button
					onPress={() => navigation.navigate('InfoModal')}
					title="Info"
					color="#fff"
				/>
			),
			headerRight: (
				<Button onPress={params.increaseCount} title="+1" color="#fff" />
			),
		};
	};

	componentWillMount() {
		this.props.navigation.setParams({ increaseCount: this._increaseCount });
	}

	state = {
		count: 0,
	};

	_increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Text>Count: {this.state.count}</Text>
				<Button
					title="Go to Details"
					onPress={() => {
						/* 1. Navigate to the Details route with params */
						this.props.navigation.navigate('Details', {
							itemId: 86,
							otherParam: 'First Details',
						});
					}}
				/>
				<Button
					title="Go to Modal"
					onPress={() => {
						/* 1. Navigate to the Details route with params */
						this.props.navigation.navigate('MyModal', {
							itemId: 86,
							otherParam: 'MyModal',
						});
					}}
				/>
			</View>
		);
	}
}