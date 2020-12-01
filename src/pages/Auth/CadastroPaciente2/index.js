import React, { useState } from 'react';

import { Formik } from 'formik';
import { View, Text, ScrollView, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Botao from '../../../components/Botao';
import { CaixaSelecao } from '../../../components/CaixaSelecao';
import FormBackground from '../../../components/form/FormBackground';
import { Entrada } from '../../../components/form/index';
import { Creators as AuthSignUpActions } from '../../../store/ducks/authSignUp';
import styles from './style';

function CadastroPaciente2({
	saveDataRegister,
	requestSignUp,
	dataRegister,
	loading,
}) {
	const [senha] = useState('');
	const [confirmacaoSenha] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [hidePasswordTwo, setHidePasswordTwo] = useState(true);

	const FormSchema = Yup.object().shape({
		email: Yup.string()
			.email('Digite um e-mail válido')
			.required('O email é obrigatório'),
		password: Yup.string()
			.required('A senha é obrigatória')
			.min(8, 'A senha deve ter pelo menos 8 caracteres')
			.matches(
				/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				'Sua senha deve conter, pelo menos, caracteres maiúsuclos, minúsuculos, numéricos e especiais (!@#$%^&*()\\-_=+{};:,<.>)'
			),
		passwordConfirm: Yup.string()
			.oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais')
			.required('Insira a sua senha novamente'),
		checkPoliticas: Yup.bool().oneOf(
			[true],
			'Você precisa aceitar nossos termos de uso'
		),
		checkTermos: Yup.bool().oneOf(
			[true],
			'Você precisa aceitar nossas políticas de privacidade'
		),
	});

	return (
		<ScrollView>
			<FormBackground>
				<View style={styles.areaTitulo}>
					<Text style={styles.titulo}>Quase lá</Text>
				</View>

				<Formik
					style={styles.inner}
					initialValues={{
						email: '',
						password: '',
						passwordConfirm: '',
						checkPoliticas: false,
						checkTermos: false,
					}}
					onSubmit={values => {
						// console.log(values);
						Keyboard.dismiss();
						saveDataRegister({ ...dataRegister, credentials: values });
						requestSignUp({ ...dataRegister, credentials: values });
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
									value={values.email}
									onChangeText={handleChange('email')}
									placeholder='Email'
									tipoTeclado='email-address'
									tipoTexto='emailAddress'
									obrigatorio
									error={errors.email}
								/>
							</View>
							<View style={styles.input}>
								<Entrada
									value={values.password}
									onChangeText={handleChange('password')}
									placeholder='Senha'
									onPress={() => setHidePassword(!hidePassword)}
									obrigatorio
									tipoTexto='password'
									secureTextEntry={hidePassword}
									error={errors.password}
								/>
							</View>
							<View style={styles.input}>
								<Entrada
									value={values.passwordConfirm}
									onChangeText={handleChange('passwordConfirm')}
									placeholder='Confirme sua senha'
									onPress={() => {
										setHidePasswordTwo(!hidePasswordTwo);
									}}
									obrigatorio
									tipoTexto='password'
									secureTextEntry={hidePasswordTwo}
									msgError='As senha não são correspondentes.'
									msgSucesso='As senhas correspondem.'
									verificaCondicao={!!(senha && confirmacaoSenha)}
									condicao={senha === confirmacaoSenha}
									error={errors.passwordConfirm}
								/>
							</View>
							<View style={styles.confirmacoesLeitura}>
								<View style={styles.confirmacaoContainer}>
									<CaixaSelecao
										value={values.checkTermos}
										setChecked={checked =>
											setFieldValue('checkTermos', checked)
										}
										color='#FFF'
										error={errors.checkTermos}
									/>
									<View style={styles.areaTxt}>
										<Text style={styles.txtSelecao}>
											Li e concordo com os{' '}
											<Text style={styles.txtSublinhado}>
												Termos de Uso.
											</Text>
										</Text>
									</View>
								</View>

								<View style={styles.confirmacaoContainer}>
									<CaixaSelecao
										value={values.checkPoliticas}
										setChecked={checked =>
											setFieldValue('checkPoliticas', checked)
										}
										color='#FFF'
										error={errors.checkPoliticas}
									/>
									<View style={styles.areaTxt}>
										<Text style={styles.txtSelecao}>
											Li e concordo com as{' '}
											<Text style={styles.txtSublinhado}>
												Políticas de Privacidade.
											</Text>
										</Text>
									</View>
								</View>
							</View>

							<View>
								<Botao
									style={styles.btn}
									title='Concluir Cadastrado'
									onPress={handleSubmit}
									loading={loading}
								/>
							</View>
						</>
					)}
				</Formik>
			</FormBackground>
		</ScrollView>
	);
}

const mapStateToProps = state => ({
	dataRegister: state.authSignUp.dataRegister,
	loading: state.authSignUp.loading,
});

const mapDispatchToProps = dispatch => ({
	saveDataRegister: partDataRegister =>
		dispatch(AuthSignUpActions.saveDataRegister(partDataRegister)),
	requestSignUp: dataRegister =>
		dispatch(AuthSignUpActions.requestSignUp(dataRegister)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CadastroPaciente2);
