import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, CheckBox, Icon, Divider } from 'react-native-elements';
import Fundo from '../../components/Fundo';
import Botao from '../../components/Botao';

export default function LoginPaciente() {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [checked, setChecked] = useState(false);

   return (
      <Fundo>
         <Text>FAÇA SEU LOGIN</Text>

         <Input
            style={styles.input} placeholder="Nome de Usuário" 
            leftIcon={<Icon name='user' size={24} color='black' type='font-awesome-5' />}
            inputContainerStyle={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
         />
         <Input
            style={styles.input} placeholder="Senha" 
            leftIcon={<Icon name='key' size={24} color='black' type='font-awesome-5' />}
            secureTextEntry
            value={senha}
            onChange={e => setSenha(e.target.value)}
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

         <Botao title="Entrar" style={styles.btnLogin} />
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
