import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6EB4E7',
		padding: 15,
	},
	titleEscolha: {
		color: '#FFF',
		marginTop: hp('3.5%'),
		fontFamily: 'Signika-Bold',
		fontSize: 18,
	},
	buttonFinalizarAgendamento: {
		alignItems: 'center',
		marginTop: hp('4%'),
		paddingVertical: hp('2.5%'),
	},
});

export default styles;
