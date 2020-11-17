import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Divider, TextInput } from 'react-native-paper';
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
import { Creators as AuthSignInActions } from '../../store/ducks/authSignIn';
import ModalConstrucao from '../modalConstrucao';
import AuthContext from '../../contexts/auth/auth';

function LoginPaciente({
	navigation,
	requestSignIn,
	clearAuthError,
	requestFacebookSignIn,
	loading,
	errorAuthFire,
}) {
	const [checked, setChecked] = useState(false);
	const [hidePassword, setHidePassword] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	const [senha, setSenha] = useState('');
	const [email, setEmail] = useState('');

	const formRef = useRef(null);

	const user = useRef(null);
	const password = useRef(null);

	const {
		setCredentials,
		setLoading,
		setFacebookLogin,
		typeUser,
	} = useContext(AuthContext);

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
					email: '',
					password: '',
				}}
				onSubmit={values => {
					Keyboard.dismiss();
					values.type = 'paciente';
					requestSignIn(values);
				}}
				validationSchema={FormSchema}
			>
				{({ handleChange, handleSubmit, values, errors }) => (
					<>
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
				style={styles.areaCriarConta}
				onPress={() => navigation.navigate('CadastroPaciente1')}
			>
				<Text style={styles.txtCriarConta}>CRIAR UMA CONTA</Text>
			</TouchableOpacity>

			<View style={styles.segundaOpcao}>
				<Divider style={styles.divider} />
				<Text style={styles.txtOu}>OU</Text>
				<Divider style={styles.divider} />
			</View>

			<View>
				<Botao
					title="Entrar com o Facebook"
					style={styles.btnLoginFacebook}
					img={require('../../assets/icon/facebook.png')}
					imgStyle={styles.icon}
					direction="row-reverse"
					onPress={() => requestFacebookSignIn()}
				/>
				<Botao
					title="Entrar com o Google"
					corTexto="#000"
					style={styles.btnLoginGoogle}
					img={require('../../assets/icon/google.png')}
					imgStyle={styles.icon}
					direction="row-reverse"
					onPress={() => setModalVisible(!modalVisible)}
				/>
			</View>

			<ModalConstrucao
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</Fundo>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
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
		marginTop: hp('1%'),
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
	areaCriarConta: {
		marginTop: hp('4.5%'),
	},
	txtCriarConta: {
		color: '#186794',
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
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnLoginGoogle: {
		backgroundColor: '#FFF',
		marginTop: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		paddingVertical: hp('2.3%'),
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 22,
		height: 22,
		marginRight: wp('5%'),
		aspectRatio: 1,
	},
});

const mapDispatchToProps = dispatch => ({
	requestSignIn: credentials =>
		dispatch(AuthSignInActions.requestSignIn(credentials)),
	requestFacebookSignIn: () =>
		dispatch(AuthSignInActions.requestFacebookSignIn()),
	clearAuthError: () => dispatch(AuthSignInActions.clearAuthError()),
});

const mapStateToProps = state => ({
	errorAuthFire: state.authSignIn.error,
	loading: state.authSignIn.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPaciente);
