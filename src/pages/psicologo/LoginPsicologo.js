import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Divider } from 'react-native-paper';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Fundo from '../../components/Fundo';
import Botao from '../../components/Botao';
import { Entrada } from '../../components/form/index';
import {
	errorCodesEmail,
	errorCodesPassword,
	errorCodes,
} from '../../utils/errorCodes';
import { Creators as AuthActions } from '../../store/ducks/auth';

// import firebase from '@firebase/app';
// import '@firebase/auth'
// import CaixaSelecao from '../../components/CaixaSelecao';

import ModalConstrucao from '../modalConstrucao';
import Loading from '../Loading';

import AuthContext from '../../contexts/auth/auth';

function LoginPsicologo({
	navigation,
	requestSignIn,
	clearAuthError,
	errorAuthFire,
	loading,
}) {
	const [checked, setChecked] = useState(false);
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
					password: '123123',
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
								icon={require('../../assets/icon/usuario-login.png')}
								placeholder="E-mail"
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
								icon={require('../../assets/icon/chave-login.png')}
								placeholder="Senha"
								onPress={() => {
									setHidePassword(!hidePassword);
								}}
								secureTextEntry={hidePassword}
								tipoTexto="password"
								error={errors.password}
								msgError={errorCodesPassword(errorAuthFire)}
								verificaCondicao
								condicao={errorAuthFire ? false : null}
							/>
						</View>
						<View style={styles.areaMensagemErro}>{renderError()}</View>

						<Botao
							title="Entrar"
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

const styles = StyleSheet.create({
	txtFacaLogin: {
		color: '#186794',
		marginTop: hp('1.5%'),
		fontWeight: 'bold',
		fontSize: wp('6.5%'),
		alignSelf: 'center',
	},
	login: {
		marginTop: hp('3.5%'),
	},
	senha: {
		marginTop: hp('1.5%'),
	},
	areaMensagemErro: {
		height: hp('3%'),
	},
	msgErro: {
		color: '#F00',
		textAlign: 'center',
	},
	btnLogin: {
		marginTop: hp('3%'),
		paddingHorizontal: wp('1.8%'),
		paddingVertical: hp('2%'),
	},
	txtEsqueciSenha: {
		marginTop: hp('1%'),
		color: '#000',
		fontWeight: 'bold',
		fontSize: wp('3.8%'),
		textAlign: 'center',
	},
	txtCriarConta: {
		color: '#186794',
		marginTop: hp('4.5%'),
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: wp('4.5%'),
	},
	segundaOpcao: {
		marginTop: hp('2.8%'),
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	divider: {
		backgroundColor: '#FFF',
		width: wp('25%'),
		height: hp('0.3'),
	},
	txtOu: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: wp('5%'),
	},
	btnLoginFacebook: {
		backgroundColor: '#3B5998',
		marginTop: hp('3.2%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
	},
	btnLoginGoogle: {
		backgroundColor: '#FFF',
		marginTop: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
	},
});

const mapDispatchToProps = dispatch => ({
	requestSignIn: credentials =>
		dispatch(AuthActions.requestSignIn(credentials)),
	clearAuthError: () => dispatch(AuthActions.clearAuthError()),
});

const mapStateToProps = state => ({
	errorAuthFire: state.auth.error,
	loading: state.auth.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPsicologo);
