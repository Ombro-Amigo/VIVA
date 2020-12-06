import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		marginTop: hp('2.5%'),
		height: hp('32%'),
		borderRadius: 10,
		paddingHorizontal: wp('2.5%'),
		paddingVertical: hp('1%'),
	},
	infosPsicologo: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	fotoPsicologo: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},
	nomePsicologo: {
		fontFamily: 'Signika-Medium',
		fontSize: 14,
		marginLeft: wp('3%'),
	},
	tresPontos: {
		width: 20,
		height: 20,
	},
	containerMsg: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	msgVazia: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: wp('5%'),
		textAlign: 'center',
	},
	containerCrpNome: {
		height: hp('10%'),
		marginLeft: wp('2%'),
		justifyContent: 'space-between',
	},
	txt1: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default styles;
