import React, { useState } from 'react';

import { Formik } from 'formik';
import { View, Text, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Botao from '../../../components/Botao';
import { Entrada } from '../../../components/form/index';
import Fundo from '../../../components/Fundo';
// import AuthContext from '../../../contexts/auth/auth';
import ModalConstrucao from '../../../components/modalConstrucao';
import { Creators as AuthSignInActions } from '../../../store/ducks/authSignIn';
import {
	errorCodesEmail,
	errorCodesPassword,
	errorCodes,
} from '../../../utils/errorCodes';
import styles from './style';

function LoginPaciente({
	navigation,
	requestSignIn,
	clearAuthError,
	requestFacebookSignIn,
	loading,
	errorAuthFire,
}) {
	// const [checked, setChecked] = useState(false);
	const [hidePassword, setHidePassword] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	// const [senha, setSenha] = useState('');
	// const [email, setEmail] = useState('');

	// const formRef = useRef(null);

	// const user = useRef(null);
	// const password = useRef(null);

	// const {
	// 	setCredentials,
	// 	setLoading,
	// 	setFacebookLogin,
	// 	typeUser,
	// } = useContext(AuthContext);

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
					email: 'paciente@mail.com',
					password: 'Paciente@123',
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
					title='Entrar com o Facebook'
					style={styles.btnLoginFacebook}
					img={require('../../../assets/icon/facebook.png')}
					imgStyle={styles.icon}
					direction='row-reverse'
					onPress={() => requestFacebookSignIn()}
				/>
				<Botao
					title='Entrar com o Google'
					corTexto='#000'
					style={styles.btnLoginGoogle}
					img={require('../../../assets/icon/google.png')}
					imgStyle={styles.icon}
					direction='row-reverse'
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
