/**
 * author: AiQingmin
 * referrence:https://reactnavigation.org/docs/navigators/stack
 * https://github.com/react-community/react-navigation/tree/master/examples/NavigationPlayground/js
 * 
 * 
 */
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, TabBarTop } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './home/Home';
import DemoScreen from './demo/Demo';
let tabNavRoute = {
	HomeTab: {
		screen: HomeScreen,
		path: '/',
		navigationOptions: {
			tabBarLabel: '首页',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-home' : 'ios-home-outline'}
					size={24}
					style={{ color: tintColor }}
				/>
			),
		},
	},
	
	DemoTab: {
		screen: DemoScreen,
		path: '/demo',
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Demo',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-planet' : 'ios-planet-outline'}
					size={24}
					style={{ color: tintColor }}
				/>
			),
		}),
	},
}

const TabNav = TabNavigator(tabNavRoute,
	{
		lazy: true,
		tabBarOptions: {
			showIcon: true,
			inactiveTintColor: '#8f8f8f',
			tabStyle: {
				padding: 0,
				paddingTop: 4,
			},
			indicatorStyle: { backgroundColor: "transparent" },
			activeTintColor: '#f61',
		}
	}
);
let routes = {
	Root: {
		screen: TabNav,
	},
};
const AppNavigator = StackNavigator(routes, { headerMode: "none" });
export default AppNavigator;