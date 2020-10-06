import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function pageProvisoria({ navigation }) {
   return (
      <View style={styles.container}>
         <ScrollView>
            <View>
               <Text style={styles.title}>Geral</Text>
      
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('Encaminhamento')}
                  >
                     <Text style={styles.btnText}>Encaminhamento</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('Chat')}
                  >
                     <Text style={styles.btnText}>Chat</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('Chamada')}
                  >
                     <Text style={styles.btnText}>Chamada</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View>
               <Text style={styles.title}>Paciente</Text>
      
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('LoginPaciente')}
                  >
                     <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('CadastroPaciente1')}
                  >
                     <Text style={styles.btnText}>Cadastro 1</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('CadastroPaciente2')}
                  >
                     <Text style={styles.btnText}>Cadastro 2</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('PrimeiroContato')}
                  >
                     <Text style={styles.btnText}>Primeiro Contato</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('HomePaciente')}
                  >
                     <Text style={styles.btnText}>Home</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('Agendamento1')}
                  >
                     <Text style={styles.btnText}>Agendamento 1</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('Agendamento2')}
                  >
                     <Text style={styles.btnText}>Agendamento 2</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View>
               <Text style={styles.title}>Psicólogo</Text>
      
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('LoginPsicologo')}
                  >
                     <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('CadastroPsicologo1')}
                  >
                     <Text style={styles.btnText}>Cadastro 1</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('CadastroPsicologo2')}
                  >
                     <Text style={styles.btnText}>Cadastro 2</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('ConfirmacaoCrp')}
                  >
                     <Text style={styles.btnText}>Confirmação CRP</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.linhaDivisoria}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => navigation.navigate('Home')}
                  >
                     <Text style={styles.btnText}>Home</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // alignItems: 'center',
      //justifyContent: 'center',
   },
   title: {
      fontFamily: 'sans-serif',
      fontSize: 35,
      textAlign: 'left',
      marginLeft: 5,
      fontWeight: 'bold',
   },
   btn: {
      backgroundColor: '#ccc',
      paddingVertical: 5,
      paddingLeft: 5,
   },
   btnText: {
      fontSize: 25,
   },
   linhaDivisoria: {
      borderBottomWidth: 3,
      borderBottomColor: '#000',
   },
   linhaDivisoriaFirst: {
      borderTopWidth: 3,
      borderTopColor: '#000',
   },
   linhaDivisoriaLast: {
      borderTopWidth: 0,
   },
});