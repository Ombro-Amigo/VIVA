import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6EB4E7',
		padding: 15,
	},
	titleContainer: {
		marginBottom: hp('1.5%'),
	},
	title: {
		color: '#FFF',
		fontFamily: 'Signika-Bold',
		fontSize: 20,
	},
	areaConsultas: {
		flex: 1,
	},
	buttonAgendarConsul: {
		backgroundColor: '#80C6F9',
		alignItems: 'center',
		marginTop: hp('3%'),
		paddingVertical: 20,
	},
	areaAnuncio: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: hp('3%'),
	},
	buttonAssistirAnuncio: {
		backgroundColor: '#34C5A2',
		alignItems: 'center',
		// marginTop: hp('2.5%'),
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('5%'),
		borderRadius: 15,
	},
	txtPontos: {
		fontSize: 22,
	},
	areaPontos: {
		borderColor: '#FFF',
		// marginTop: 15,
		padding: 5,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		borderStyle: 'solid',
		borderWidth: 3,
		borderRadius: 15,
	},
	logoPontos: {
		width: 40,
		height: 40,
	},
});

export default styles;
