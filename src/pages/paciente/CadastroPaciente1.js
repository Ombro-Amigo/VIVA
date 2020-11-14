import React from 'react';
import * as Yup from 'yup';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Formik } from 'formik';
import moment from 'moment';
import Botao from '../../components/Botao';
import { Entrada, EscolhaGenero, InputDate } from '../../components/form/index';
import FormBackground from '../../components/form/FormBackground';

export default function CadastroPaciente1({ navigation }) {
	const FormSchema = Yup.object().shape({
		name: Yup.string().required('O nome é obrigatório'),
		lastName: Yup.string().required('O sobrenome é obrigatório'),
		email: Yup.string()
			.email('Digite um e-mail válido')
			.required('O email é obrigatório'),
		dateBirth: Yup.string().required('A data de nascimento é obrigatória'),
		gender: Yup.string().required('O genero é obrigatório'),
	});
	// abortEarly: false,

	return (
		<FormBackground>
			<View style={styles.areaTitulo}>
				<Text style={styles.titulo}>Crie sua conta</Text>
			</View>

			<Formik
				style={styles.inner}
				initialValues={{
					name: 'Douglas',
					lastName: 'Silva',
					email: 'douglas.s.o676@gmail.com',
					dateBirth: '27/11/2020',
					gender: 'Masculino',
				}}
				onSubmit={values => {
					console.log(values);
					Keyboard.dismiss();
					navigation.navigate('CadastroPaciente2');
					// values.type = 'paciente';
					// requestSignIn(values);
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
							<Entrada
								value={values.email}
								onChangeText={handleChange('email')}
								placeholder="Email"
								tipoTeclado="email-address"
								tipoTexto="emailAddress"
								obrigatorio
								error={errors.email}
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
	titulo: {
		color: '#186794',
		marginTop: hp('4.5%'),
		marginBottom: hp('2%'),
		fontWeight: 'bold',
		fontSize: wp('7%'),
		alignSelf: 'center',
	},
	input: {
		marginTop: hp('4%'),
	},
	txtSelecioneGenero: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: wp('4.6%'),
	},
	btn: {
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		marginTop: hp('3%'),
	},
});
