import React from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Entrada, EscolhaGenero, InputDate } from '../../components/form/index';
import Botao from '../../components/Botao';
import FormBackground from '../../components/form/FormBackground';
import { Creators as AuthSignUpActions } from '../../store/ducks/authSignUp';
import { crpMask } from '../../utils/crpMask';

function CadastroPsicologo1({ navigation, saveDataRegister }) {
	const FormSchema = Yup.object().shape({
		name: Yup.string().required('O nome é obrigatório'),
		lastName: Yup.string().required('O sobrenome é obrigatório'),
		dateBirth: Yup.string().required('A data de nascimento é obrigatória'),
		gender: Yup.string().required('O genero é obrigatório'),
		// cpf: Yup.string().required('O cpf é obigatório'),
		crp: Yup.string().required('O crp é obigatório'),
	});

	return (
		<FormBackground>
			<View style={styles.areaTitulo}>
				<Text style={styles.titulo}>Crie sua conta</Text>
			</View>

			<Formik
				initialValues={{
					name: '',
					lastName: '',
					dateBirth: '',
					gender: '',
					crp: '',
				}}
				onSubmit={values => {
					console.log(values);
					Keyboard.dismiss();
					values.type = 'psicologo';
					saveDataRegister({ personalInformations: values });
					navigation.navigate('CadastroPsicologo2');
				}}
				validationSchema={FormSchema}
			>
				{({
					handleChange,
					handleSubmit,
					setFieldValue,
					values,
					errors,
				}) => (
					<>
						<View style={styles.input}>
							<Entrada
								value={values.name}
								onChangeText={handleChange('name')}
								placeholder="Nome"
								tipoTexto="name"
								obrigatorio
								error={errors.name}
							/>
						</View>

						<View style={styles.input}>
							<Entrada
								value={values.lastName}
								onChangeText={handleChange('lastName')}
								placeholder="Sobrenome"
								obrigatorio
								error={errors.lastName}
							/>
						</View>

						<View style={styles.input}>
							<InputDate
								value={values.dateBirth}
								onChange={dateString =>
									setFieldValue('dateBirth', dateString)
								}
								error={errors.dateBirth}
							/>
						</View>

						<View style={styles.input}>
							<Text style={styles.txtSelecioneGenero}>
								Selecione seu gênero:
							</Text>
							<EscolhaGenero
								value={values.gender}
								onValueChange={handleChange('gender')}
								error={errors.gender}
							/>
						</View>

						{/* <View style={styles.input}>
							<Entrada
								value={values.cpf}
								onChangeText={handleChange('cpf')}
								placeholder="CPF"
								obrigatorio
								tipoTeclado="number-pad"
								max={14}
								error={errors.cpf}
							/>
						</View> */}

						<View style={styles.input}>
							<Entrada
								value={values.crp}
								// onChangeText={handleChange('crp')}
								onChangeText={crpString =>
									setFieldValue('crp', crpMask(crpString))
								}
								placeholder="CRP"
								obrigatorio
								tipoTeclado="number-pad"
								max={9}
								error={errors.crp}
							/>
						</View>

						<View>
							<Botao
								style={styles.btn}
								title="Próximo"
								onPress={handleSubmit}
							/>
						</View>
					</>
				)}
			</Formik>
		</FormBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
	titulo: {
		color: '#186794',
		marginTop: hp('4.5%'),
		marginBottom: hp('2%'),
		fontFamily: "Signika-Bold",
		fontSize: 26,
		alignSelf: 'center',
	},
	input: {
		marginTop: hp('4%'),
	},
	txtSelecioneGenero: {
		color: '#FFF',
		fontFamily: "Signika-Bold",
		fontSize: 18,
	},
	btn: {
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		marginTop: hp('3%'),
	},
});

const mapDispatchToProps = dispatch => ({
	saveDataRegister: partDataRegister =>
		dispatch(AuthSignUpActions.saveDataRegister(partDataRegister)),
});

export default connect(null, mapDispatchToProps)(CadastroPsicologo1);
