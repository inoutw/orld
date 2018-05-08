// https://snack.expo.io/H1CnjIeDb
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, ViewPagerAndroid} from 'react-native';

const { width } = Dimensions.get('window');

export default class App extends Component {

	render() {
		return (
			<ViewPagerAndroid
				ref={(viewPager) => { this.viewPager = viewPager; }}
				>
				<View style={styles.view} />
				<View style={styles.view2} />
				<View style={styles.view} />
				<View style={styles.view2} />
				<View style={styles.view} />
			</ViewPagerAndroid>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	},
	view: {
		marginTop: 100,
		backgroundColor: 'blue',
		width: width - 80,
		margin: 10,
		height: 500,
		borderRadius: 10,
	},
	view2: {
		marginTop: 100,
		backgroundColor: 'red',
		width: width - 80,
		margin: 10,
		height: 500,
		borderRadius: 10,
	},
});

