import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	containerHeader: {
		padding: wp('5%'),
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#FFF',
	},
	title: {
		color: '#186794',
		fontSize: wp('5%'),
		fontWeight: 'bold',
	},
	containerInfosUSer: {
		padding: wp('4%'),
		flexDirection: 'row',
		alignItems: 'flex-end',
		borderBottomWidth: 1,
		borderColor: '#DCDCDC',
	},
	areaAltFotoUser: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	photo: {
		width: 70,
		height: 70,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#000',
	},
	containerIconCam: {
		position: 'absolute',
		width: 40,
		height: 40,
		marginLeft: wp('12%'),
		backgroundColor: '#C4C4C4',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconCam: {
		width: 20,
		height: 20,
		opacity: 0.6,
	},
	txtNome: {
		color: '#000',
		fontSize: wp('4.5%'),
		fontWeight: 'bold',
		marginLeft: wp('6%'),
	},
	opcao: {
		padding: wp('4%'),
		borderBottomWidth: 1,
		borderColor: '#C3C3C3',
	},
	txtOpcao: {
		color: '#FFF',
		fontSize: wp('5%'),
		fontWeight: 'bold',
	},
});

export default styles;
