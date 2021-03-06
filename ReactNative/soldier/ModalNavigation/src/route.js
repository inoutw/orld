import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ModalScreen from './screens/ModalScreen';
import LearnScreen from './screens/LearnScreen';

const ModalStack = StackNavigator(
	{
		InfoModal: {
			screen: ModalScreen,
		},
		Details: {
			screen: DetailScreen,
		},
	},
	{
		headerMode: 'none',
		mode: 'modal',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f61',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

const MainStack = TabNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		MyModal: {
			screen: ModalScreen,
		},
		Learn: {
			screen: LearnScreen,
		},
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);


const RootStack = StackNavigator(
	{
		Main: {
			screen: MainStack,
		},
		MyModal: {
			screen: ModalScreen,
		},
		Details: {
			screen: DetailScreen,
		},

	},
	{
		mode: 'modal',
		headerMode: 'none',
		initialRouteName: 'Main',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
		isModal: true,

	}
);

export default RootStack;