import React, { useState, useRef, useContext } from 'react';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { StyleSheet, View, Text, ScrollView, Keyboard } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Formik } from 'formik';
import { Entrada } from '../../components/form/index';
import Fundo from '../../components/Fundo';
import CaixaSelecao from '../../components/CaixaSelecao';
import Botao from '../../components/Botao';
import { cpfMask } from '../../utils/cpfMask';
import AuthContext from '../../contexts/auth/auth';
import FormBackground from '../../components/form/FormBackground';

export default function CadastroPaciente2({ navigation }) {
	const [cpf, setCpf] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
	const [checkTermos, setCheckedTermos] = useState('');
	const [checkPolitas, setCheckedPoliticas] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [hidePasswordTwo, setHidePasswordTwo] = useState(true);

	const formRef = useRef(null);

	const { formInfo, setFormInfo, setTypeUser } = useContext(AuthContext);

	async function handleSubmit(data) {
		try {
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				cpf: Yup.string().required('O cpf é obigatório'),
				senha: Yup.string().required('A senha é obrigatória'),
				confirmaSenha: Yup.string().required(
					'A confirmação de senha é obrigatória'
				),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			const allForm = { ...formInfo, ...data };

			setTypeUser('paciente');
			setFormInfo(allForm);
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errorMessages = {};

				err.inner.forEach(error => {
					errorMessages[error.path] = error.message;
				});

				formRef.current.setErrors(errorMessages);
			}
		}
	}

	return (
		<FormBackground>
			<View style={styles.areaTitulo}>
				<Text style={styles.titulo}>Quase lá</Text>
			</View>

			<Formik
				style={styles.inner}
				initialValues={{
					cpf: '123.123.123-54',
					password: '123123',
					passwordConfirm: '123123',
					checkPoliticas: false,
					checkTermos: false,
				}}
				onSubmit={values => {
					console.log(values);
					Keyboard.dismiss();
					// navigation.navigate('CadastroPaciente2');
					// values.type = 'paciente';
					// requestSignIn(values);
				}}
				// validationSchema={FormSchema}
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
								value={values.cpf}
								onChangeText={handleChange('cpf')}
								placeholder="CPF"
								obrigatorio
								tipoTeclado="number-pad"
								max={14}
								error={errors.cpf}
							/>
						</View>
						<View style={styles.input}>
							<Entrada
								value={values.password}
								onChangeText={handleChange('password')}
								placeholder="Senha"
								onPress={() => setHidePassword(!hidePassword)}
								obrigatorio
								tipoTexto="password"
								secureTextEntry={hidePassword}
								error={errors.password}
							/>
						</View>
						<View style={styles.input}>
							<Entrada
								value={values.passwordConfirm}
								onChangeText={handleChange('passwordConfirm')}
								placeholder="Confirme sua senha"
								onPress={() => {
									setHidePasswordTwo(!hidePasswordTwo);
								}}
								obrigatorio
								tipoTexto="password"
								secureTextEntry={hidePasswordTwo}
								msgError="As senha não são correspondentes."
								msgSucesso="As senhas correspondem."
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
									color="#FFF"
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
									color="#FFF"
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
								title="Concluir Cadastrado"
								onPress={handleSubmit}
							/>
						</View>
					</>
				)}
			</Formik>

			{/* <Form ref={formRef} onSubmit={handleSubmit}>
               <View style={styles.form}>

               </View>
            </Form> */}
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
		fontWeight: 'bold',
		fontSize: wp('7%'),
		alignSelf: 'center',
	},
	input: {
		marginTop: hp('7%'),
	},
	confirmacoesLeitura: {
		marginTop: hp('5%'),
	},
	confirmacaoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	areaTxt: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	txtSublinhado: {
		textDecorationLine: 'underline',
	},
	txtSelecao: {
		alignSelf: 'center',
		fontSize: wp('4%'),
		fontWeight: 'bold',
	},
	btn: {
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		marginTop: hp('3%'),
	},
});
