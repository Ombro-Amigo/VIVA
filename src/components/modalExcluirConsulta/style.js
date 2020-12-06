import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		marginHorizontal: wp('4%'),
		backgroundColor: '#FFF',
		borderRadius: 20,
		paddingVertical: hp('3%'),
		paddingHorizontal: wp('4%'),
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		textAlign: 'left',
	},
	cliqueSair: {
		alignSelf: 'flex-end',
	},
	sairModal: {
		width: 18,
		height: 18,
	},
	attentionIcon: {
		height: 50,
		width: 50,
	},
	title: {
		fontSize: 21,
		fontFamily: 'Signika-Bold',
		textAlign: 'center',
		marginTop: hp('2.5%'),
		marginBottom: hp('5%'),
	},
	areaBtn: {
		flexDirection: 'row',
		width: wp('60%'),
		justifyContent: 'space-around',
	},
	btnSim: {
		paddingHorizontal: wp('5%'),
		paddingVertical: hp('1.5%'),
		borderWidth: 1,
		borderColor: '#34C5A2',
	},
	titleBtn: {
		fontSize: 18,
		fontFamily: 'Signika-Bold',
	},
});

export default styles;
