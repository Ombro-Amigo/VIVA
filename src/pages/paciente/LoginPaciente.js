import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Divider } from 'react-native-paper';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Fundo from '../../components/Fundo';
import Botao from '../../components/Botao';
import { Entrada } from '../../components/form/index';
import {
	errorCodesEmail,
	errorCodesPassword,
	errorCodes,
} from '../../utils/errorCodes';
import { Creators as AuthActions } from '../../store/ducks/auth';
import ModalConstrucao from '../modalConstrucao';
import AuthContext from '../../contexts/auth/auth';

function LoginPaciente({ navigation, requestSignIn, error }) {
	const [checked, setChecked] = useState(false);
	const [hidePassword, setHidePassword] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	const [senha, setSenha] = useState('');
	const [email, setEmail] = useState('');

	const formRef = useRef(null);

	const {
		setCredentials,
		setLoading,
		setFacebookLogin,
		typeUser,
	} = useContext(AuthContext);

	function renderError() {
		if (
			error &&
			errorCodesEmail(error) === null &&
			errorCodesPassword(error) === null
		) {
			return (
				<View>
					<Text style={styles.msgErro}>{errorCodes(error)}</Text>
				</View>
			);
		}
		return null;
	}

	const initialData = {
		email: 'paciente@mail.com',
		password: '123123',
	};

	async function handleSubmit(data) {
		try {
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				email: Yup.string()
					.email('Digite um e-mail válido')
					.required('O email é obrigatório'),
				password: Yup.string().required('A senha é obrigatória'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			data.type = 'paciente';

			requestSignIn(data);
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
		<Fundo>
			<View>
				<Text style={styles.txtFacaLogin}>FAÇA SEU LOGIN</Text>
			</View>

			<Form initialData={initialData} ref={formRef} onSubmit={handleSubmit}>
				<View>
					<View style={styles.login}>
						<Entrada
							name="email"
							icon={require('../../assets/icon/usuario-login.png')}
							placeholder="E-mail"
							value={email}
							// onChangeText={Value => setEmail(Value)}
							msgError={errorCodesEmail(error)}
							verificaCondicao
							condicao={error ? false : null}
						/>
					</View>
					<View style={styles.senha}>
						<Entrada
							name="password"
							style={styles.senha}
							icon={require('../../assets/icon/chave-login.png')}
							placeholder="Senha"
							value={senha}
							// onChangeText={Value => setSenha(Value)}
							onPress={Value => {
								setHidePassword(!hidePassword);
							}}
							secureTextEntry={hidePassword}
							tipoTexto="password"
							msgError={errorCodesPassword(error)}
							verificaCondicao
							condicao={error ? false : null}
						/>
					</View>

					<View style={styles.areaMensagemErro}>{renderError()}</View>
				</View>

				<Botao
					title="Entrar"
					style={styles.btnLogin}
					onPress={() => formRef.current.submitForm()}
				/>
			</Form>

			<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
				<Text style={styles.txtEsqueciSenha}>Esqueci minha senha</Text>
			</TouchableOpacity>

			<TouchableOpacity
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
					onPress={() => setFacebookLogin(true)}
				/>
				<Botao
					title="Entrar com o Google"
					corTexto="#000"
					style={styles.btnLoginGoogle}
					onPress={() => setModalVisible(!modalVisible)}
				/>
			</View>

<<<<<<< Updated upstream
   // if(loading) {
   //    return <Loading />;
   // }
   
   // if(!loading) {
      return (
         <ScrollView>
            <Fundo>
            <View>
               <Text style={styles.txtFacaLogin}>FAÇA SEU LOGIN</Text>
            </View>
            
            <Form initialData={initialData} ref={formRef} onSubmit={handleSubmit}>
               <View>
                  <View style={styles.login}>
                     <Entrada
                        name='email'
                        icon={require('../../assets/icon/usuario-login.png')}
                        placeholder="E-mail"
                        value={email}
                        // onChangeText={Value => setEmail(Value)}
                        // msgError={errorCodesEmail(message)}
                        // verificaCondicao
                        // condicao={
                        //    message
                        //    ? false
                        //    : null
                        // }
                     />
                  </View>
                  <View style={styles.senha}>
                     <Entrada
                        name='senha'
                        style={styles.senha}
                        icon={require('../../assets/icon/chave-login.png')}
                        placeholder="Senha"
                        value={senha}
                        // onChangeText={Value => setSenha(Value)}
                        onPress={Value => {setHidePassword(!hidePassword)}}
                        secureTextEntry={hidePassword}
                        tipoTexto="password"
                        // msgError={errorCodesPassword(message)}
                        verificaCondicao
                        // condicao={
                        //    message
                        //    ? false
                        //    : null
                        // }
                     />
                  </View>
   
                  <View style={styles.areaMensagemErro}>
                     {/* {renderMessage()} */}
                  </View>
               </View>
   
               <Botao title="Entrar" style={styles.btnLogin}
                  onPress={() => formRef.current.submitForm()}
               />
            
            </Form>
            {/* setTypeUser('paciente') */}
            
   
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
               <Text style={styles.txtEsqueciSenha}>Esqueci minha senha</Text>
            </TouchableOpacity>
   
            <TouchableOpacity 
            onPress={() => navigation.navigate('CadastroPaciente1')}
            >
               <Text style={styles.txtCriarConta}>CRIAR UMA CONTA</Text>
            </TouchableOpacity>
   
            <View style={styles.segundaOpcao}>
               <Divider style={styles.divider}/>
                  <Text style={styles.txtOu}>OU</Text>
               <Divider style={styles.divider}/>
            </View>
   
            <View>
               <Botao
                  title="Entrar com o Facebook"
                  style={styles.btnLoginFacebook}
                  img={require('../../assets/icon/facebook.png')}
                  imgStyle={styles.icon}
                  direction={"row-reverse"}
                  onPress={() => setFacebookLogin(true)}
               />
               <Botao
                  title="Entrar com o Google"
                  corTexto={"#000"}
                  img={require('../../assets/icon/google.png')}
                  imgStyle={styles.icon}
                  style={styles.btnLoginGoogle}
                  direction={"row-reverse"}
                  onPress={() => setModalVisible(!modalVisible)}
               />
            </View>
   
            <ModalConstrucao modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </Fundo>
         </ScrollView>
      )
   // }else{
   //    return <Loading/>
   // }
=======
			<ModalConstrucao
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</Fundo>
	);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
   },
   txtCriarConta: {
      color: "#186794",
      marginTop: hp("4.5%"),
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: wp("4.5%"),
   },
   segundaOpcao: {
      marginTop: hp("2.8%"),
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
   },
   divider: {
      backgroundColor: "#FFF",
      width: wp("25%"),
      height: hp("0.3"),
   },
   txtOu: {
      color: "#186794",
      fontWeight: "bold",
      fontSize: wp("5%"),
   },
   btnLoginFacebook:{
      backgroundColor: "#3B5998",
      marginTop: hp("3.2%"),
      paddingHorizontal: wp("2%"),
      paddingVertical: hp("2.3%"),
      flexDirection: "row-reverse",
      justifyContent: "center"
   },
   btnLoginGoogle:{
      backgroundColor: "#FFF",
      marginTop: hp("2.5%"),
      paddingHorizontal: wp("2%"),
      paddingVertical: hp("2.3%"),
      flexDirection: "row-reverse",
      justifyContent: "center"
   },
   icon: {
      width: wp("6%"),
		marginRight: wp("5%"),
		aspectRatio: 1,
   },
})
=======
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
});

const mapStateToProps = state => ({
	error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPaciente);
>>>>>>> Stashed changes
