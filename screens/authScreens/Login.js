import React from 'react';
import { Button, TextInput, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Formik } from 'formik';
import Window from '../../constants/Layout';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from 'i18n-js';

const { width, height } = Window.window;
const Login = (props) => (
	<ScrollView>
		<View style={styles.container}>
			<View>
				<Text>{i18n.t('LoginHeader')}</Text>
			</View>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<View>
						<TextInput
							style={styles.textInput}
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
						/>

						<TextInput
							style={styles.textInput}
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
						/>
						<TouchableOpacity style={styles.SubmitButton}>
							<Text style={styles.submitText}>{i18n.t('LoginHeader')}</Text>
						</TouchableOpacity>
					</View>
				)}
			</Formik>
		</View>
	</ScrollView>
);

const styles = StyleSheet.create({
	container: {
		width: width - 50,
		alignSelf: 'center',
	},
	HeaderContainer: {},
	textInput: {
		backgroundColor: 'white',
		marginTop: 10,
		padding: 7,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	SubmitButton: {
		backgroundColor: 'blue',
		marginTop: 20,
	},
	submitText: {
		color: 'white',
		padding: 10,
		textAlign: 'center',
	},
});

export default Login;
