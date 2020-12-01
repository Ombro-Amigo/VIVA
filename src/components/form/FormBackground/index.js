import React from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Fundo from '../../Fundo';
import styles from './style';

export default function FormBackground({ children }) {
	return (
		<KeyboardAwareScrollView
			style={styles.container}
			extraHeight={100}
			enableOnAndroid
		>
			<Fundo>{children}</Fundo>
		</KeyboardAwareScrollView>
	);
}
