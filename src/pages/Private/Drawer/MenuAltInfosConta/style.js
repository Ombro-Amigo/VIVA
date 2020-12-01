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
	areaAltFotoUser: {
		flexDirection: 'row',
		alignItems: 'flex-end',
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
