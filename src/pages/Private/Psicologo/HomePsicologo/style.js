import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		height: hp('6%'),
		marginTop: hp('3%'),
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	areaStatus: {
		width: wp('70%'),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	txtStatus: {
		fontFamily: 'Signika-Bold',
		fontSize: 20,
	},
	areaListaConsultas: {
		marginTop: wp('8%'),
	},
	title: {
		color: '#FFF',
		fontFamily: 'Signika-Bold',
		fontSize: 20,
	},
	periodoConsultas: {
		backgroundColor: '#80C6F9',
		marginVertical: hp('2%'),
		height: hp('7%'),
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listaConsultas: {
		marginTop: hp('1.5%'),
	},
});

export default styles;
