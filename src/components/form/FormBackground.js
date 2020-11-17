import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Fundo from '../Fundo'

export default function FormBackground({ children }) {
	return (

		<KeyboardAwareScrollView
			style={styles.container}
			extraHeight={100}
			enableOnAndroid
		>
			<Fundo>
				{children}
			</Fundo>
		</KeyboardAwareScrollView>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
