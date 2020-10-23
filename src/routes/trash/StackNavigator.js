import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import StackOut from './StackOut';


import Chat from '../pages/geral/Chat';
import Chamada from '../pages/geral/Chamada';

// Imports telas paciente
import PrimeiroContato from '../pages/paciente/PrimeiroContato';
import HomePaciente from '../pages/paciente/HomePaciente';
import Agendamento1 from '../pages/paciente/Agendamento1';
import Agendamento2 from '../pages/paciente/Agendamento2';

// Imports telas psicologo

import ConfirmacaoCrp from '../pages/psicologo/ConfirmacaoCrp';
import Home from '../pages/psicologo/HomePsicologo';

const Stack = createStackNavigator();

function LogoTitle() {
   return (
      <Image
         style={{ width: 50, height: 50, aspectRatio: 1 }}
         source={require('../../assets/icon/logo_header.png')}
      />
   );
}

const StackOut = () => {
   return(
      <Stack.Navigator>
         <StackOut />
      </Stack.Navigator>
   )
}

// const StackGeral = () => {
//    return(
//       <Stack.Navigator 
//          initialRouteName='Encaminhamento'
//          screenOptions={{
//             headerTitleAlign: 'center',
//             headerTitle: props => <LogoTitle {...props} />
//          }}
//       >
//          <>
//          <Stack.Screen name='Encaminhamento' component={Encaminhamento} />
//          <Stack.Screen name='Chat' component={Chat} />
//          <Stack.Screen name='Chamada' component={Chamada} />
//          </>
//       </Stack.Navigator>
//    );
// }

// const StackPaciente = () => {
//    return(
//       <Stack.Navigator 
//          // initialRouteName='Encaminhamento'
//          screenOptions={{
//             headerTitleAlign: 'center',
//             headerTitle: props => <LogoTitle {...props} />
//          }}
//       >
//          <Stack.Screen name='LoginPaciente' component={LoginPaciente} />
//          <Stack.Screen name='CadastroPaciente1' component={CadastroPaciente1} />
//          <Stack.Screen name='CadastroPaciente2' component={CadastroPaciente2} />
//          <Stack.Screen name='PrimeiroContato' component={PrimeiroContato} />
//          <Stack.Screen name='HomePaciente' component={HomePaciente} />
//          <Stack.Screen name='Agendamento1' component={Agendamento1} />
//          <Stack.Screen name='Agendamento2' component={Agendamento2} />
//       </Stack.Navigator>
//    );
// }

// const StackPsicologo = () => {
//    return(
//       <Stack.Navigator 
//          // initialRouteName='Encaminhamento'
//          screenOptions={{
//             headerTitleAlign: 'center',
//             headerTitle: props => <LogoTitle {...props} />
//          }}
//       >
//          <Stack.Screen name='LoginPsicologo' component={LoginPsicologo} />
//          <Stack.Screen name='CadastroPsicologo1' component={CadastroPsicologo1} />
//          <Stack.Screen name='CadastroPsicologo2' component={CadastroPsicologo2} />
//          <Stack.Screen name='ConfirmacaoCrp' component={ConfirmacaoCrp} />
//          <Stack.Screen name='Home' component={Home} />
//       </Stack.Navigator>
//    );
// }
export { StackGeral, StackPaciente };