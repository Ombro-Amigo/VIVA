import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Entrada from '../../components/Entrada'
import Fundo from '../../components/Fundo'
import { cpfMask } from '../../utils/cpfMask'

export default function CadastroPaciente2() {
   const [cpf, setCpf] = useState('')

   return (
      <Fundo>
         <View style={styles.input}>
            <Entrada
               placeholder="CPF"
               value={cpf}
               onChangeText={Value => {setCpf(cpfMask(Value))}}
               obrigatorio
               tipoTeclado={"number-pad"}
               max={14}
            />
         </View>
      </Fundo>
   )
}

const styles = StyleSheet.create({
   
})

