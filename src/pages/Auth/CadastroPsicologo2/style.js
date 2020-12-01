import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
	titulo: {
		color: '#186794',
		marginTop: hp('4.5%'),
		marginBottom: hp('2%'),
		fontFamily: 'Signika-Bold',
		fontSize: 26,
		alignSelf: 'center',
	},
	input: {
		marginTop: hp('7%'),
	},
	confirmacoesLeitura: {
		marginTop: hp('5%'),
	},
	confirmacaoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	areaTxt: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	txtSublinhado: {
		textDecorationLine: 'underline',
	},
	txtSelecao: {
		alignSelf: 'center',
		fontFamily: 'Signika-Medium',
		fontSize: 15,
	},
	btn: {
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		marginTop: hp('3%'),
	},
});

export default styles;
