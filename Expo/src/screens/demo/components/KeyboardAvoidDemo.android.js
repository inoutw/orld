/**
 * referrence: https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
 */
import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

class KeyboardAvoidDemo extends Component {
	constructor(props) {
		super(props);
		this.translateY = new Animated.Value(0);
	}

	componentWillMount() {
		this.keyboardShowHandler = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
		this.keyboardHideHandler = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardShowHandler.remove();
		this.keyboardHideHandler.remove();
	}

	keyboardDidShow = (event) => {
		Animated.timing(this.translateY, {
			toValue: -100,
		}).start();
	};

	keyboardDidHide = (event) => {
		Animated.timing(this.translateY, {
			toValue: 0,
		}).start();
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Animated.View style={{ transform: [{ translateY: this.translateY }] }}>
					<Image source={{ uri: 'https://cdn-qa.yryz.com/pic/xycfq/bc5e78aac729ef87559b355fbbc9c9bd.png' }} style={{ height: 300, width: 300 }} />
					<TextInput
						placeholder="Email"
						style={styles.input}
					/>
				</Animated.View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	input: {
		borderRadius: 5,
		borderWidth: 1,
		height: 44,
		paddingHorizontal: 10,
	},
});
export default KeyboardAvoidDemo;