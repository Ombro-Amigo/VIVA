import React from 'react';

import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import styles from './style';

export default function Fundo(props) {
	const { children, padding } = props;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View
				style={[
					styles.container,
					{ padding: padding !== null ? wp('4%') : padding },
				]}
			>
				{children}
			</View>
		</TouchableWithoutFeedback>
	);
}
