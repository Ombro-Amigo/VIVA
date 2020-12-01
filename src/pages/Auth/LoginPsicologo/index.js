import React, { useState } from 'react';

import { Formik } from 'formik';
import { View, Text, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Botao from '../../../components/Botao';
import { Entrada } from '../../../components/form/index';
import Fundo from '../../../components/Fundo';
// import Loading from '../../../components/Loading';
import ModalConstrucao from '../../../components/modalConstrucao';
import { Creators as AuthSignInActions } from '../../../store/ducks/authSignIn';
import {
	errorCodesEmail,
	errorCodesPassword,
	errorCodes,
} from '../../../utils/errorCodes';
import styles from './style';

function LoginPsicologo({
	navigation,
	requestSignIn,
	clearAuthError,
	errorAuthFire,
	loading,
}) {
	// const [checked, setChecked] = useState(false);
	// const [loading, setLoading] = useState(false);
	const [hidePassword, setHidePassword] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);

	function renderError() {
		if (
			errorAuthFire &&
			errorCodesEmail(errorAuthFire) === null &&
			errorCodesPassword(errorAuthFire) === null
		) {
			return (
				<View>
					<Text style={styles.msgErro}>{errorCodes(errorAuthFire)}</Text>
				</View>
			);
		}
		return null;
	}

	const FormSchema = Yup.object().shape({
		email: Yup.string()
			.email('Digite um e-mail válido')
			.required('O email é obrigatório'),
		password: Yup.string().required('A senha é obrigatória'),
	});

	return (
		<Fundo>
			<View>
				<Text style={styles.txtFacaLogin}>FAÇA SEU LOGIN</Text>
			</View>

			<Formik
				initialValues={{
					email: 'psicologo@mail.com',
					password: 'Psicologo@123',
				}}
				onSubmit={values => {
					Keyboard.dismiss();
					values.type = 'psicologo';
					requestSignIn(values);
				}}
				validationSchema={FormSchema}
			>
				{({ handleChange, handleSubmit, values, errors }) => (
					<>
						{console.log(
							'error dentro do formik = ',
							errorCodesEmail(errorAuthFire)
						)}
						<View style={styles.login}>
							<Entrada
								value={values.email}
								onChangeText={handleChange('email')}
								icon={require('../../../assets/icon/usuario-login.png')}
								placeholder='E-mail'
								error={errors.email}
								msgError={errorCodesEmail(errorAuthFire)}
								verificaCondicao
								condicao={errorAuthFire ? false : null}
								onFocus={() => clearAuthError()}
							/>
						</View>
						<View style={styles.senha}>
							<Entrada
								value={values.password}
								onChangeText={handleChange('password')}
								style={styles.senha}
								icon={require('../../../assets/icon/chave-login.png')}
								placeholder='Senha'
								onPress={() => {
									setHidePassword(!hidePassword);
								}}
								secureTextEntry={hidePassword}
								tipoTexto='password'
								error={errors.password}
								msgError={errorCodesPassword(errorAuthFire)}
								verificaCondicao
								condicao={errorAuthFire ? false : null}
							/>
						</View>
						<View style={styles.areaMensagemErro}>{renderError()}</View>

						<Botao
							title='Entrar'
							style={styles.btnLogin}
							onPress={handleSubmit}
							loading={loading}
						/>
					</>
				)}
			</Formik>

			<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
				<Text style={styles.txtEsqueciSenha}>Esqueci minha senha</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('CadastroPsicologo1')}
			>
				<Text style={styles.txtCriarConta}>CRIAR UMA CONTA</Text>
			</TouchableOpacity>

			<ModalConstrucao
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</Fundo>
	);
}

const mapDispatchToProps = dispatch => ({
	requestSignIn: credentials =>
		dispatch(AuthSignInActions.requestSignIn(credentials)),
	clearAuthError: () => dispatch(AuthSignInActions.clearAuthError()),
});

const mapStateToProps = state => ({
	errorAuthFire: state.authSignIn.error,
	loading: state.authSignIn.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPsicologo);
