import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Imports telas paciente
import LoginPaciente from '../pages/paciente/LoginPaciente';
import CadastroPaciente1 from '../pages/paciente/CadastroPaciente1';
import CadastroPaciente2 from '../pages/paciente/CadastroPaciente2';
import PrimeiroContato from '../pages/paciente/PrimeiroContato';
import HomePaciente from '../pages/paciente/HomePaciente';
import Agendamento1 from '../pages/paciente/Agendamento1';
import Agendamento2 from '../pages/paciente/Agendamento2';

const Stack = createStackNavigator();

export default function StackPaciente() {
   return(
      <Stack.Navigator>
         <Stack.Screen name='LoginPaciente' component={LoginPaciente} />
         <Stack.Screen name='CadastroPaciente1' component={CadastroPaciente1} />
         <Stack.Screen name='CadastroPaciente2' component={CadastroPaciente2} />
         <Stack.Screen name='PrimeiroContato' component={PrimeiroContato} />
         <Stack.Screen name='HomePaciente' component={HomePaciente} />
         <Stack.Screen name='Agendamento1' component={Agendamento1} />
         <Stack.Screen name='Agendamento2' component={Agendamento2} />
      </Stack.Navigator>
   );
}
