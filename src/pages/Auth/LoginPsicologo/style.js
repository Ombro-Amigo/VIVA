import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	txtFacaLogin: {
		color: '#186794',
		marginTop: hp('1.5%'),
		fontFamily: 'Signika-Bold',
		fontSize: 23,
		alignSelf: 'center',
	},
	login: {
		marginTop: hp('3.5%'),
	},
	senha: {
		marginTop: hp('1.5%'),
	},
	areaMensagemErro: {
		height: hp('3%'),
	},
	msgErro: {
		color: '#F00',
		textAlign: 'center',
	},
	btnLogin: {
		marginTop: hp('3%'),
		paddingHorizontal: wp('1.8%'),
		paddingVertical: hp('2%'),
	},
	txtEsqueciSenha: {
		marginTop: hp('1%'),
		color: '#000',
		fontFamily: 'Signika-Bold',
		fontSize: 13,
		textAlign: 'center',
	},
	txtCriarConta: {
		color: '#186794',
		marginTop: hp('4.5%'),
		alignSelf: 'center',
		fontFamily: 'Signika-Bold',
		fontSize: 19,
	},
	segundaOpcao: {
		marginTop: hp('2.8%'),
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	divider: {
		backgroundColor: '#FFF',
		width: wp('25%'),
		height: hp('0.3'),
	},
	txtOu: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: wp('5%'),
	},
	btnLoginFacebook: {
		backgroundColor: '#3B5998',
		marginTop: hp('3.2%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
	},
	btnLoginGoogle: {
		backgroundColor: '#FFF',
		marginTop: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
	},
});

export default styles;
