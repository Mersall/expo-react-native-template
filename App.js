import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation/Index';
import UserContext from './hooks/UserContext';

//Localization import
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import ArTranslation from './constants/ArTranslation.json';
import EnTranslation from './constants/EnTranslation.json';

export default function App(props) {
	const { isLoadingComplete, language } = useCachedResources();

	//Localization Configration
	i18n.translations = {
		en: EnTranslation,
		ar: ArTranslation,
	};
	// Set the locale once at the beginning of your app.
	i18n.locale = 'en'; //`${language ? language : Localization.locale}`;

	// When a value is missing from a language it'll fallback to another language with the key present.
	i18n.fallbacks = true;
	//End Localization Configration

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<View style={styles.container}>
				<UserContext.Provider>
					<Navigation />
				</UserContext.Provider>

				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
