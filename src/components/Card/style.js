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
		backgroundColor: '#000',
		alignSelf: 'center',
		width: wp('75%'),
		height: hp('0.3%'),
		marginVertical: hp('1%'),
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
		justifyContent: 'space-between',
	},
	txt1: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	btnControlCard: {
		flexDirection: 'row-reverse',
	},
	btnControl: {
		width: 18,
		height: 18,
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
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line2: {
		flexDirection: 'row',
		width: wp('80%'),
		marginVertical: hp('1%'),
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
		fontWeight: 'bold',
		marginLeft: wp('2%'),
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
