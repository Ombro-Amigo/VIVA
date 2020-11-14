import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function FormBackground({ children }) {
	return (
		<ScrollView>
			<KeyboardAwareScrollView
				style={styles.container}
				extraHeight={50}
				enableOnAndroid
			>
				{children}
			</KeyboardAwareScrollView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#6EB4E7',
		padding: wp('4%'),
	},
});
