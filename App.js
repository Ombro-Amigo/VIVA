import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';

// Imports telas gerais
import Encaminhamento from './src/pages/geral/Encaminhamento';
import Chat from './src/pages/geral/Chat';
import Chamada from './src/pages/geral/Chamada';

// Imports telas paciente
import LoginPaciente from './src/pages/paciente/LoginPaciente';
import CadastroPaciente1 from './src/pages/paciente/CadastroPaciente1';
import CadastroPaciente2 from './src/pages/paciente/CadastroPaciente2';
import PrimeiroContato from './src/pages/paciente/PrimeiroContato';
import HomePaciente from './src/pages/paciente/HomePaciente';
import Agendamento1 from './src/pages/paciente/Agendamento1';
import Agendamento2 from './src/pages/paciente/Agendamento2';

// Imports telas psicologo
import LoginPsicologo from './src/pages/psicologo/LoginPsicologo';
import CadastroPsicologo1 from './src/pages/psicologo/CadastroPsicologo1';
import CadastroPsicologo2 from './src/pages/psicologo/CadastroPsicologo2';
import ConfirmacaoCrp from './src/pages/psicologo/ConfirmacaoCrp';
import Home from './src/pages/psicologo/HomePsicologo';

const Stack = createStackNavigator();

function LogoTitle() {
   return (
      <Image
         style={{ width: 50, height: 50, aspectRatio: 1 }}
         source={require('./assets/icon/logo_header.png')}
      />
   );
}

export default function App() {
return (
   <NavigationContainer>
      <Stack.Navigator
         initialRouteName='Encaminhamento'
         screenOptions={
            {
               headerTitleAlign: 'center',
               headerTitle: props => <LogoTitle {...props} />
            }
         }
      >
         {/* Geral */}
         <Stack.Screen
            name='Encaminhamento'
            component={Encaminhamento}
         />
         <Stack.Screen
            name='Chat'
            component={Chat}
         />
         <Stack.Screen
            name='Chamada'
            component={Chamada}
         />

         {/* Paciente */}
         <Stack.Screen
            name='LoginPaciente'
            component={LoginPaciente}
         />
         <Stack.Screen
            name='CadastroPaciente1'
            component={CadastroPaciente1}
         />
         <Stack.Screen
            name='CadastroPaciente2'
            component={CadastroPaciente2}
         />
         <Stack.Screen
            name='PrimeiroContato'
            component={PrimeiroContato}
         />
         <Stack.Screen
            name='HomePaciente'
            component={HomePaciente}
         />
         <Stack.Screen
            name='Agendamento1'
            component={Agendamento1}
         />
         <Stack.Screen
            name='Agendamento2'
            component={Agendamento2}
         />

         {/* Psicólogo */}
         <Stack.Screen
            name='LoginPsicologo'
            component={LoginPsicologo}
         />
         <Stack.Screen
            name='CadastroPsicologo1'
            component={CadastroPsicologo1}
         />
         <Stack.Screen
            name='CadastroPsicologo2'
            component={CadastroPsicologo2}
         />
         <Stack.Screen
            name='ConfirmacaoCrp'
            component={ConfirmacaoCrp}
         />
         <Stack.Screen
            name='Home'
            component={Home}
         />
		</Stack.Navigator>
	</NavigationContainer>
);
}