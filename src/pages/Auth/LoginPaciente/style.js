import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
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
	btnLogin: {
		marginTop: hp('1%'),
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
	areaCriarConta: {
		marginTop: hp('4.5%'),
	},
	txtCriarConta: {
		color: '#186794',
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
		fontFamily: 'Signika-Bold',
		fontSize: 18,
	},
	btnLoginFacebook: {
		backgroundColor: '#3B5998',
		marginTop: hp('3.2%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnLoginGoogle: {
		backgroundColor: '#FFF',
		marginTop: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 22,
		height: 22,
		marginRight: wp('5%'),
		aspectRatio: 1,
	},
});

export default styles;
