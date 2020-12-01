import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	botao: {
		borderRadius: 15,
		justifyContent: 'center',
	},
	sombra: {
		// IOS
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		// ANDROID
		elevation: 4,
	},
	txtBotao: {
		fontFamily: 'Signika-Bold',
		fontSize: 16,
		alignSelf: 'center',
	},

	// Caso o botão tenha algum icone
	botaoComIcone: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default styles;
