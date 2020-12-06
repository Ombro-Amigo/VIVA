import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#8EDAC8',
		padding: 10,
		borderRadius: 10,
		marginBottom: hp('2%'),
	},
	divider: {
		backgroundColor: '#4b6b50',
		alignSelf: 'center',
		width: wp('75%'),
		height: hp('0.3%'),
		marginVertical: hp('2%'),
	},
	txtTitleInfo: {
		fontSize: 18,
		fontFamily: 'Signika-Regular',
		textAlign: 'center',
		marginBottom: hp('2%'),
	},
	infoUsuario: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	foto: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},
	containerCrpNome: {
		height: hp('10%'),
		marginLeft: wp('2%'),
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	txt1: {
		fontSize: 18,
		fontFamily: 'Signika-SemiBold',
	},
	btnControlCard: {
		flexDirection: 'row-reverse',
	},
	btnControl: {
		width: 18,
		height: 18,
		marginBottom: hp('1%'),
	},
	btnControlCheck: {
		marginRight: 10,
	},
	areaInfoConsulta: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	line: {
		flexDirection: 'row',
		width: wp('80%'),
		marginVertical: hp('1%'),
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line2: {
		flexDirection: 'row',
		width: wp('80%'),
		marginVertical: hp('1%'),
		alignSelf: 'center',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	group: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	icon: {
		width: 20,
		height: 20,
		marginRight: wp('3%'),
	},
	txt2: {
		color: '#FFF',
		fontSize: 18,
		fontFamily: 'Signika-Bold',
		marginLeft: wp('0.5%'),
	},
	btnChat: {
		paddingVertical: hp('0.8%'),
		paddingHorizontal: wp('4%'),
		borderRadius: 15,
		borderWidth: wp('0.8%'),
		borderColor: '#565656',
		justifyContent: 'space-around',
	},
});

export default styles;
