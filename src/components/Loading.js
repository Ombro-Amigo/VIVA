import React from 'react';

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='#34C5A2' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
