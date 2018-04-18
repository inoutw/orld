// https://snack.expo.io/H1CnjIeDb
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class App extends Component {

	componentDidMount() {
		setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
	}

	render() {
		return (
			<ScrollView
				ref={(scrollView) => { this.scrollView = scrollView; }}
				contentContainerStyle={styles.container}
				//pagingEnabled={true}
				horizontal={true}
				decelerationRate={0}
				snapToInterval={width - 60}
				snapToAlignment={"center"}
				contentInset={{
					top: 0,
					left: 30,
					bottom: 0,
					right: 30,
				}}
				>
				<View style={styles.view} />
				<View style={styles.view2} />
				<View style={styles.view} />
				<View style={styles.view2} />
				<View style={styles.view} />
			</ScrollView>
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

