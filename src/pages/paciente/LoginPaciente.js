import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Fundo from '../../components/Fundo';
import Botao from '../../components/Botao';
import Entrada from '../../components/Entrada';

import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Divider } from 'react-native-paper';
import firebase from '@firebase/app';
import '@firebase/auth';
import CaixaSelecao from '../../components/CaixaSelecao';

export default function LoginPaciente() {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [checked, setChecked] = useState(false);
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);
   const [showPassword, setShowHide] = useState(false)

   useEffect(() => {
      const firebaseConfig = {
         apiKey: "AIzaSyD_7bjlJPA5EAEb49d-NwxNdret4kGg1Ik",
         authDomain: "viva-ca312.firebaseapp.com",
         databaseURL: "https://viva-ca312.firebaseio.com",
         projectId: "viva-ca312",
         storageBucket: "viva-ca312.appspot.com",
         messagingSenderId: "374644306933",
         appId: "1:374644306933:web:418fd7c5a2e27b6b6e66bc",
         // measurementId: "G-H5GYMVM386"
      };
      // Initialize Firebase
      if(firebase.apps.length === 0){
         firebase.initializeApp(firebaseConfig);
      }
      // firebase.analytics();
   });

   function tryLogin() {
      setLoading(true);
      setMessage('');

      const loginUserSuccess = user => {
         setMessage('Sucesso!');
      }

      const loginUserFailed = error => {
         setMessage(error.code);
      }

      firebase
         .auth()
         .signInWithEmailAndPassword(email, senha)
         .then(loginUserSuccess)
         .catch(loginUserFailed)
         .then(setLoading(false))
   }
   

   function renderButton() {
      if (loading){
         return <ActivityIndicator size='large' color='#f00' />
      }
      
      return <Botao title="Entrar" style={styles.btnLogin} onPress={() => tryLogin()}/>
   }

   function renderMessage() {
      if(!message)
         return null;
      
      return (
         <View>
            <Text style={styles.msgErro}>
               { message }
            </Text>
         </View>
      )
   }

   return (
      <Fundo>

         <View>
            <Text style={styles.txtFacaLogin}>FAÇA SEU LOGIN</Text>
         </View>
         
         <View>
            <View style={styles.login}>
               <Entrada
                  icon={require('../../../assets/icon/usuario-login.png')}
                  placeholder="Nome de Usuário"
                  value={email}
                  onChangeText={Value => {setEmail(Value), console.log(Value)}}
               />
            </View>
            <View style={styles.senha}>
               <Entrada
                  style={styles.senha}
                  icon={require('../../../assets/icon/chave-login.png')}
                  placeholder="Senha"
                  value={senha}
                  onChangeText={Value => {setSenha(Value), console.log(Value)}}
                  onPress={Value => {setShowHide(!showPassword)}}
                  secureTextEntry={showPassword}
                  tipoTexto="password"
               />
            </View>

            <View>
               {renderMessage()}
            </View>
         </View>

         {renderButton()}
         

         <TouchableOpacity>
            <Text style={styles.txtEsqueciSenha}>Esqueci minha senha</Text>
         </TouchableOpacity>

         <TouchableOpacity>
            <Text style={styles.txtCriarConta}>CRIAR UMA CONTA</Text>
         </TouchableOpacity>

         <View style={styles.segundaOpcao}>
            <Divider style={styles.divider}/>
               <Text style={styles.txtOu}>OU</Text>
            <Divider style={styles.divider}/>
         </View>

         <View>
            <Botao title="Entrar com o Facebook" style={styles.btnLoginFacebook} />
            <Botao title="Entrar com o Google" corTexto={"#000"} style={styles.btnLoginGoogle} />
         </View>
      </Fundo>
   )
}

const styles = StyleSheet.create({
   txtFacaLogin:{
      color: "#186794",
      marginTop: hp("1.5%"),
      fontWeight: "bold",
      fontSize: wp("6.5%"),
      alignSelf: "center",
   },
   login: {
      marginTop: hp("3.5%"),
   },
   senha: {
      marginTop: hp("1.5%"),
   },
   msgErro: {
      color: "#FFF",
      marginTop: hp("1%"),
   },
	btnLogin: {
      marginTop: hp("4%"),
		paddingHorizontal: wp("1.8%"),
      paddingVertical: hp("2%"), 
	},
	txtEsqueciSenha: {
		marginTop: hp("1%"),
		color: '#000',
		fontWeight: 'bold',
		fontSize: wp("3.8%"),
		textAlign: 'center',
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
   },
   btnLoginGoogle:{
      backgroundColor: "#FFF",
      marginTop: hp("2.5%"),
      paddingHorizontal: wp("2%"),
      paddingVertical: hp("2.3%"),
   }
})
