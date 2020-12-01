import React from 'react';

import { Formik } from 'formik';
import { View, Text, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Botao from '../../../components/Botao';
import FormBackground from '../../../components/form/FormBackground';
import {
	Entrada,
	EscolhaGenero,
	InputDate,
} from '../../../components/form/index';
import { Creators as AuthSignUpActions } from '../../../store/ducks/authSignUp';
import { cpfMask } from '../../../utils/cpfMask';
import styles from './style';

function CadastroPaciente1({ navigation, saveDataRegister }) {
	const FormSchema = Yup.object().shape({
		name: Yup.string().required('O nome é obrigatório'),
		lastName: Yup.string().required('O sobrenome é obrigatório'),
		dateBirth: Yup.string().required('A data de nascimento é obrigatória'),
		gender: Yup.string().required('O genero é obrigatório'),
		cpf: Yup.string().required('O cpf é obigatório'),
	});
	// abortEarly: false,

	return (
		<ScrollView>
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
						cpf: '',
					}}
					onSubmit={values => {
						console.log(values);
						Keyboard.dismiss();
						values.type = 'paciente';
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
									placeholder='Nome'
									tipoTexto='name'
									obrigatorio
									error={errors.name}
								/>
							</View>

							<View style={styles.input}>
								<Entrada
									value={values.lastName}
									onChangeText={handleChange('lastName')}
									placeholder='Sobrenome'
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

							<View style={styles.input}>
								<Entrada
									value={values.cpf}
									// onChangeText={handleChange('cpf')}
									onChangeText={cppString =>
										setFieldValue('cpf', cpfMask(cppString))
									}
									placeholder='CPF'
									obrigatorio
									tipoTeclado='number-pad'
									max={14}
									error={errors.cpf}
								/>
							</View>

							<View>
								<Botao
									style={styles.btn}
									title='Próximo'
									onPress={handleSubmit}
								/>
							</View>
						</>
					)}
				</Formik>
			</FormBackground>
		</ScrollView>
	);
}

const mapDispatchToProps = dispatch => ({
	saveDataRegister: partDataRegister =>
		dispatch(AuthSignUpActions.saveDataRegister(partDataRegister)),
});

export default connect(null, mapDispatchToProps)(CadastroPaciente1);
