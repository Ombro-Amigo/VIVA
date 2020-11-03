import React, { useState, useRef, useContext } from 'react';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import * as Yup from 'yup';
// import firebase from '../../firebase';
// import '@firebase/auth';
// import '@firebase/database';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Button } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import Botao from '../../components/Botao'
import { Entrada, EscolhaGenero, InputDate } from '../../components/form/index';
import AuthContext from '../../contexts/auth/auth';

export default function CadastroPaciente1({ navigation }) {
   const [nomeUser, setNomeUser] = useState('');
   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [email, setEmail] = useState('')
   const [genero, setGenero] = useState('');

   const formRef = useRef(null);

   const { setFormInfo } = useContext(AuthContext);

   async function handleSubmit(data) {
      try {
         formRef.current.setErrors({});

         const schema = Yup.object().shape({
            nomeUsuario: Yup.string().required('O nome de usuário é obigatório'),
            nome: Yup.string().required('O nome é obrigatório'),
            sobrenome: Yup.string().required('O sobrenome é obrigatório'),
            email: Yup.string()
               .email('Digite um e-mail válido')
               .required('O email é obrigatório'),
            nascimento: Yup.string().required('A data de nascimento é obrigatória'),
            genero: Yup.string().required('O genero é obrigatório'),
         });

         await schema.validate(data, {
            abortEarly: false,
         });
         setFormInfo(data);
         
         navigation.navigate('CadastroPaciente2');
      } catch (err) {
         if(err instanceof Yup.ValidationError) {
            const errorMessages = {};

            err.inner.forEach(error => {
               errorMessages[error.path] = error.message;
            });

            formRef.current.setErrors(errorMessages);
         }
      }
   }

   return (
      <ScrollView style={styles.container}>
         <Fundo>
            <View style={styles.areaTitulo}>
               <Text style={styles.titulo}>Crie sua conta</Text>
            </View>

            <View style={styles.form}>
               <Form ref={formRef} onSubmit={handleSubmit}>
                  {/* <Scope path='user'> */}
                     <View style={styles.input}>
                        <Entrada
                           name="nomeUsuario"
                           placeholder="Nome de usuário"
                           // value={nomeUser}
                           // onChangeText={Value => {setNomeUser(Value)}}
                           tipoTexto={"username"}
                           obrigatorio
                        />
                     </View>
                     
                     <View style={styles.input}>
                        <Entrada
                           name="nome"
                           placeholder="Nome"
                           // value={nome}
                           // onChangeText={Value => {setNome(Value)}}
                           tipoTexto={"name"}
                           obrigatorio
                        />
                     </View>

                     <View style={styles.input}>
                        <Entrada
                           name="sobrenome"
                           placeholder="Sobrenome"
                           // value={sobrenome}
                           // onChangeText={Value => {setSobrenome(Value)}}
                           obrigatorio
                        />
                     </View>

                     <View style={styles.input}>
                        <Entrada
                           name="email"
                           placeholder="Email"
                           // value={email}
                           // onChangeText={Value => {setEmail(Value)}}
                           tipoTeclado={"email-address"}
                           tipoTexto={"emailAddress"}
                           obrigatorio
                        />
                     </View>

                     <InputDate name='nascimento' />
                     
                     <View style={styles.input}>
                        <Text style={styles.txtSelecioneGenero}>Selecione seu gênero: </Text>
                        <EscolhaGenero
                        name='genero'
                        onValueChange={value => setGenero(value)}
                        value={genero}
                     />
                     </View>

                     <View>
                        <Botao
                           style={styles.btn}
                           title="Próximo"
                           // onPress={() => navigation.navigate('CadastroPaciente2')}
                           onPress={() => formRef.current.submitForm()}
                        />
                     </View>
                  {/* </Scope> */}
               </Form>
            </View>
         </Fundo>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#6EB4E7",
   },
   titulo: {
      color: "#186794",
      marginTop: hp("4.5%"),
      marginBottom: hp("2%"),
      fontWeight: "bold",
      fontSize: wp("7%"),
      alignSelf: "center",
   },
   input: {
      marginTop: hp("4.5%")
   },
   txtSelecioneGenero: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: wp("4.6%"),
   },
   btn: {
      paddingVertical: hp("2.5%"),
      paddingHorizontal: wp("2%"),
      marginTop: hp("3%")
   }
})