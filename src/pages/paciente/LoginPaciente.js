import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, CheckBox, Icon, Divider } from 'react-native-elements';
import Fundo from '../../components/Fundo';
import Botao from '../../components/Botao';
import firebase from '@firebase/app';
import '@firebase/auth';

export default function LoginPaciente() {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [checked, setChecked] = useState(false);
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);

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
      if (loading)
         return <ActivityIndicator size='large' color='#f00' />;
      
      return (
         // <Botao title="Entrar" style={styles.btnLogin} onPress={() => tryLogin()}/>
         <Button
                title='Entrar'
                onPress={() => tryLogin()}    
            />
      )
   }

   function renderMessage() {
      if(!message)
         return null;
      
      return (
         <View>
            <Text>
               { message }
            </Text>
         </View>
      )
   }

   return (
      <Fundo>
         <Text>FAÇA SEU LOGIN</Text>

         <Input
            style={styles.input} placeholder="Nome de Usuário" 
            leftIcon={<Icon name='user' size={24} color='black' type='font-awesome-5' />}
            inputContainerStyle={styles.input}
            value={email}
            onChangeText={e => setEmail(e)}
         />
         <Input
            style={styles.input} placeholder="Senha" 
            leftIcon={<Icon name='key' size={24} color='black' type='font-awesome-5' />}
            secureTextEntry
            value={senha}
            onChangeText={e => setSenha(e)}
         />
         <CheckBox
            title='accessible'
            iconType='font-awesome-5'
            checked={checked}
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='green'
            onPress={() => setChecked(!checked)}
         />

         {renderButton()}
         {renderMessage()}

         
         <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha</Text>
         </TouchableOpacity>

         <TouchableOpacity>
            <Text>CRIAR UMA CONTA</Text>
         </TouchableOpacity>
         <Divider/>
         <Text>OU</Text>
         <Divider/>
         
         <Botao title="Entrar com o Facebook" style={styles.btnLogin} />
         <Botao title="Entrar com o Google" style={styles.btnLogin} />

      </Fundo>
   )
}

const styles = StyleSheet.create({
	btnLogin: {
		paddingHorizontal: 35,
		paddingVertical: 17,
	},
	link: {
		marginTop: 20,
		color: '#000',
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
	},
})
