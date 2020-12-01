import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#80C6F9',
	},
	drawerContent: {
		flex: 1,
	},
	infoUsuario: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		borderBottomWidth: 1,
		borderColor: '#FFF',
		padding: wp('2%'),
	},
	photo: {
		width: 70,
		height: 70,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#000',
	},
	onlineOffline: {
		width: 20,
		height: 20,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#80C6F9',
		position: 'absolute',
		right: 0,
	},
	txtNome: {
		color: '#186794',
		fontFamily: 'Signika-Bold',
		fontSize: 16,
		marginLeft: wp('2%'),
	},
	menuSection: {
		marginTop: hp('3%'),
		borderBottomWidth: 1,
		borderColor: '#FFF',
	},
	containerItem: {
		marginVertical: hp('0.5%'),
		marginHorizontal: wp('1.5%'),
		borderRadius: 10,
	},
	itemMenu: {
		padding: wp('1%'),
		margin: wp('2%'),
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 20,
		height: 20,
	},
	txtMenu: {
		color: '#FFF',
		fontFamily: 'Signika-Bold',
		fontSize: 17,
		marginLeft: wp('3%'),
	},
	bottomDrawerSection: {
		borderTopWidth: 1,
		borderTopColor: '#FFF',
	},
	txtSair: {
		color: '#186794',
		fontFamily: 'Signika-Bold',
		fontSize: 16,
		marginRight: wp('3%'),
	},
	containerEmergency: {
		flex: 3,
		marginTop: hp('2%'),
		alignItems: 'center',
	},
	buttonEmergency: {
		paddingVertical: hp('1.5%'),
		paddingHorizontal: wp('5%'),
	},
	txtBtnEmergencia: {
		fontSize: 15,
	},
	iconEmergency: {
		width: 25,
		height: 25,
		marginLeft: wp('5%'),
		aspectRatio: 1,
	},
	txtEmergency: {
		marginTop: hp('2%'),
		color: '#fff',
		fontFamily: 'Signika-SemiBold',
		fontSize: 12,
		textAlign: 'center',
	},
});

export default styles;
