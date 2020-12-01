import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	areaEscolha: {
		flex: 1,
	},
	escolha: {
		marginHorizontal: wp('1%'),
	},
	txtOpcoes: {
		fontFamily: 'Signika-Bold',
		fontSize: 16,
	},
	areaMsgError: {
		alignItems: 'center',
	},
	msgError: {
		color: '#f00',
	},
});

export default styles;
