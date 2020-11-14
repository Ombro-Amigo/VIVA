import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function CaixaSelecao(props) {
	const { value, setChecked, uncheckedColor, color, title } = props;
	return (
		<View style={styles.container}>
			<Checkbox.Android
				status={value ? 'checked' : 'unchecked'}
				onPress={() => {
					setChecked(!value);
				}}
				uncheckedColor={uncheckedColor || '#ccc'}
				color={color || '#0f0'}
			/>
			<Text>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
