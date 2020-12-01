import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	// Título
	containerTitle: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title1: {
		color: '#186794',
		fontSize: 28,
		fontFamily: 'Signika-Bold',
	},
	// Login
	containerLogin: {
		flex: 2,
	},
	spam: {
		color: '#186794',
		fontSize: 16,
		fontFamily: 'Signika-Bold',
		marginBottom: hp('2%'),
		textAlign: 'center',
	},
	containerButtonLogin: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	buttonLogin: {
		paddingHorizontal: wp('9.5%'),
		paddingVertical: hp('3%'),
	},

	// Emergência
	containerEmergency: {
		flex: 3,
		alignItems: 'center',
	},
	buttonEmergency: {
		paddingVertical: hp('1.5%'),
		paddingHorizontal: wp('9%'),
	},
	iconEmergency: {
		width: wp('8.5%'),
		height: hp('8.5%'),
		marginLeft: wp('5%'),
		aspectRatio: 1,
	},
	txtEmergency: {
		marginTop: hp('3%'),
		color: '#fff',
		fontFamily: 'Signika-SemiBold',
		fontSize: 12,
		textAlign: 'center',
	},
});

export default styles;
