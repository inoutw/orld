import React, { Component } from 'react'; 
import { Button, View, Text, Modal } from 'react-native';
// import { HeaderBackButton } from 'react-navigation';
export default class ModalScreen extends Component {
	// static navigationOptions = ({ navigation }) => ({
	// 	headerLeft: <HeaderBackButton onPress={() => navigation.dispatch({ type: 'Navigation/BACK' })} />,
	// 	headerTitle: "Title"
	// })
	render() {
		return (
			<Modal style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 30 }}>This is a modal!</Text>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title="Dismiss"
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Details')}
					title="Details"
				/>
			</Modal>
		);
	}
}
