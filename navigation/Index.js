import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Other from '../screens/Other';
import Login from '../screens/authScreens/Login';
import SignUp from '../screens/authScreens/SignUp';

const { width, height } = window.window;

export default function Navigation() {
	const [isSignIn, setisSignIn] = useState(false);

	return (
		<NavigationContainer linking={LinkingConfiguration}>
			{isSignIn === true ? <RootNavigator /> : <Auth />}
		</NavigationContainer>
	);
}

const Stack = createStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen name="Other" component={Other} />
		</Stack.Navigator>
	);
}

function Auth() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	);
}
