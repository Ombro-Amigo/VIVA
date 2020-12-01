import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

function CaixaSelecao(props) {
	const { value, setChecked, uncheckedColor, color, title, error } = props;
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

			<View style={styles.subcontainer}>
				<Text>{title}</Text>

				<View style={styles.areaMsgError}>
					{error && <Text style={styles.msgError}>{error}</Text>}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	areaMsgError: {
		alignItems: 'center',
	},
	msgError: {
		color: '#f00',
	},
	subcontainer: {
		flexDirection: 'column',
	},
});

export default CaixaSelecao;
